import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wave from './../wave/Wave';
import Button from './../button/Button';

const Thumb = (props) => {
    return (
        <Linky to={`/trends/${props.category}`}>
            <Title>{props.label}</Title>
            <Intro>{props.intro}</Intro>
            <Button 
                primary 
                label="Read more"
            />
            <Wave category={props.category} />
        </Linky>
    );
}

const Linky = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    padding: 20px;
    position: relative;
    background: linear-gradient(to bottom, #353535 0%,#131313 100%);
`;
const Title = styled.h2`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    color: white;
`;
const Intro = styled.p`
    margin-bottom: 25px;
    color: white;
    font-size: 14px;
    line-height: 20px;
    font-spacing: 0.5px;
`;

export default Thumb;

// gradient option linear-gradient(to bottom, #0cc0e7 0%, #1371a9 30%, #201866 100%);

// linear-gradient(to bottom, #353535 0%,#131313 100%);