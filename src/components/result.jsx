import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import editorContext from "../editorContext";


const Container = styled.div`
    width: 50%;
    height: 100%;
    padding: 14px;
    border-right: 1.5px solid rgba(15, 15, 15, 0.4);
    font-family: 'Lato' , sans-serif;
    
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const ResultArea =  styled.div`
    width: 100%;
    height: 100%;
    border: none;
    font-size: 17px;
`;

export function Result(props) {

    const { markdownText } = useContext(editorContext);

    return <Container>
        <Title>Preview of your markdown text</Title>
        <ResultArea>
            <ReactMarkdown source={markdownText}/>
        </ResultArea>
    </Container>
}