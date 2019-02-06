import React, {Component} from "react"; 
import {connect} from "react-redux"; 
import {getContent} from "./../../../actions"
import {Loading, PageOpener} from "./../../modules"


class BoardDutySection extends Component {
    componentDidMount() {
        const {promise} = this.props;
        if (!promise) {

        this.props.getContent("our-team/our-promise")
        }
    }
    
    render() { 
        const {promise, promiseError, promiseIsFetching} = this.props;
        if (promiseIsFetching) {
            return <Loading/>

        } else if (promiseError || !promise|| !promise[0]){
            return <div>error</div>
        }     
        
        const information = [{
        heading: `<h1>${promise[0].content.heading}</h1>`, 
        text: promise[0].content.text
        }];

        return ( 
            <PageOpener
            mobilPadding="0"
            padding="0"
            information= {information}
            image={promise[0].image.secure_url}
            breadcrumbs={[{to: "/", text: "About Investing For Charity"}, {to: "/", text: "This is second exmaple"}]}


            
            >

                <></>
            </PageOpener>
        )
            
    } 
}

const mapStateToProps = (state) => {
    const {promise, promiseIsFetching, promiseError} = state.promise
    return {
        promise, 
        promiseIsFetching,
        promiseError

    }
}

export default connect(mapStateToProps, {getContent})(BoardDutySection);

