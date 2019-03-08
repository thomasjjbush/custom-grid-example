import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
    return (
        <Wrapper>
            <Icon className="icon-warning" />
            <Message>No results</Message>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 250px;
    height: 250px;
    padding: 20px;
    margin: 20px;
    background-color: white;
`;
const Icon = styled.i`
    font-size: 50px;
    color: #d82a2a;
`;
const Message = styled.p`
    font-weight: bold;
`;

export default NotFound;