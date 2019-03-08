import React from 'react';
import styled from 'styled-components';

const Footer = (props) => {
    return (
        <Foot>
            <div>
                <Icon className="icon-facebook" />
                <Icon className="icon-twitter" />
                <Icon className="icon-instagram" />
            </div>
        </Foot>
    );
}

const Foot = styled.div`   
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    background-color: black;
`;
const Icon = styled.a`
    color: white;
    font-size: 18px;
    margin-left: 10px;
`;

export default Footer;