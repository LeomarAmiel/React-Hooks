import React, { Component } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 80px;
    width: 100vw;
`;

class App extends Component {
    render() {
        return (
            <Wrapper>
                <h2> React Hook Todo Example </h2>
                <TodoList />
            </Wrapper>
        );
    }
}

export default App;
