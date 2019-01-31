import React, {Component} from "react"
import {getContent} from '../../actions';
import {connect} from "react-redux"
class ContentFetcher extends Component {
    componentDidMount() {
        const {getContent, route} = this.props
        getContent(route)
    }
    render() { 
        
        return ( 
            <>
            {this.props.children}
            </>
         );
    }
}
 
export default connect(null, {
    getContent
})(ContentFetcher);