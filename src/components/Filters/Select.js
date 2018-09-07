import React, { PureComponent } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { addSelect } from "../../AC";

class SelectFilter extends PureComponent {

  handleChange = (selectedOption) => {
    const { addSelect } = this.props;
    addSelect(selectedOption.map((option) => option.value));
  };

  render(){
    const { value, options } = this.props;

    return (
      <Select className = "main-page__select"
              value = { value }
              onChange = { this.handleChange }
              options = { options }
              isMulti
      />
    )
  }
}

export default connect(({articles, filters}) => {
  const options = articles.map((article) => ({
    value: article.title,
    label: article.title
  }));

  if(!filters.selectedOption) return {
    value: null,
    options
  };

  return {
    value: options.filter(({value}) => !!~filters.selectedOption.indexOf(value)),
    options
  }
}, { addSelect })(SelectFilter)
