import React, {Component} from 'react';
import {SectionWrapper, InternalLink, Card} from '../../../modules';
import PageOpener from '../../../modules/pageLayout/PageOpener';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';
import {Loading} from "./../../../modules"


class FirstSection extends Component {

    componentDidMount () {
        this.props.getContent("about/first-section");    
    }

    render () {
        const { color, content, isFetching, error} = this.props;        
		console.log('TCL: FirstSection -> render -> content', content)
        if (isFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }
        
        return (
            <PageOpener />
            // <SectionWrapper color={color}>
            //     <Section>
            //         <ImageContainer src= {content[0].image? content[0].image.secure_url : image} alt="Cherring man" />

            //         <Card CardHeading={content[0].card.heading} CardText={content[0].card.text} CardImage={content[0].card.pageImage? content[0].card.pageImage.secure_url: image} display="flex" />
            //     </Section>

            //     <Section>
            //         <Wrapper>
            //             <BorderP>{content[0].linkTop.text}</BorderP>
            //             <h1>{content[0].contentTop.heading}</h1> 
            //             <P margin="70px">{content[0].contentTop.text}</P>
            //             <h2>{content[0].contentBottom.heading}</h2>
            //             <P margin="20px">{content[0].contentBottom.text}</P>
            //             <InternalLink text={content[0].contentBottom.link.text} color={content[0].contentBottom.link.color} href={content[0].contentBottom.link.href} />
            //         </Wrapper>               
            //     </Section>
            // </SectionWrapper>
        )
    } 
}

const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.aboutFirst
    return {
        content,
        isFetching,
        error,
    }
}

export default connect(mapStateToProps, {
    getContent
})(FirstSection);

