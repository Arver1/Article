import React,{Component} from 'react'

export default (OriginalComponent) => class Accordion extends Component {

    constructor(props){
        super(props);
        this.state = {
            openItemId: null
        }
    }

    toggleOpenItem(openItemId) {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }

    render() {
        return <OriginalComponent {...this.props}
                                  openItemId = {this.state.openItemId}
                                  toggleOpenItem = {this.toggleOpenItem.bind(this)}
        />
    }
}