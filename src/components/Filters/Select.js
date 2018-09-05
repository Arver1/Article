import React, { PureComponent } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { sortBySelectArticle } from "../../AC";

class SelectFilter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    }
  }

  componentWillReceiveProps(nextProps) {
    const { options } = nextProps;
    if(!this.state.selectedOption) return;
    this.setState({
      selectedOption: this.state.selectedOption.filter((option) => !!~options.indexOf(option))
    })
  }

  handleChange = (selectedOption) => {
    const { sortBySelectArticle } = this.props;
    sortBySelectArticle(selectedOption);
    this.setState({ selectedOption });
  };

  render(){
    const { options } = this.props;
    return (
      <Select className = "main-page__select"
              value = { this.state.selectedOption }
              onChange = { this.handleChange }
              options = { options }
              isMulti
      />
    )
  }
}

export default connect((state) => {
  return {
    options: state.options
  }
}, { sortBySelectArticle })(SelectFilter)
