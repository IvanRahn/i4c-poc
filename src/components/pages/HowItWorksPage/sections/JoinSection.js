import React, { Component } from "react";
import styled from "styled-components";
import { SectionWrapper, InternalLink, Loading } from "../../../modules";
import { getContent } from "../../../../actions";
import { connect } from "react-redux";

const Section = styled.div`
  width: ${props => props.width || "100%"};
  align-items: center;
  color: white;
  @media (min-width: 500px) {
    width: 100%;
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: center;
  }

  /* @media (min-width: 1025px) {
    width: 50%;
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || null};
    padding-left: ${props => props.padding || null}
  } */ 

`

class JoinSection extends Component {
  componentDidMount() {
    const {content} = this.props;
        if(!content){
    this.props.getContent("causes/join-us");
        }
  }

  render() {
    const { content, isFetching, error} = this.props;
        if (isFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }

    return (
      <SectionWrapper color="green" height="auto" padding="28px 16px 64px 16px">
        <Section justify="flex-end">
          <h1>{content[0].heading}</h1>
        </Section>

        <Section direction="column" padding="30px">
          <h2>{content[0].subheading}</h2>
          <InternalLink text="Join our cause" color="white" to="join" section="How it works join section" />
        </Section>
      </SectionWrapper>
    );
  }
}

const mapStateToProps = state => {
  const { content, isFetching, error } = state.causeJoinUsSection;
  return {
    content,
    isFetching,
    error
  };
};

export default connect(
  mapStateToProps,
  {
    getContent
  }
)(JoinSection);
