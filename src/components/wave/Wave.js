import React from 'react';
import styled from 'styled-components';

const Wave = (props) => {
    return (
        <Waves style={props.style}>
            {config.map((wave) => {
                return (
                    <Wavey 
                        key={wave} 
                        type={wave}
                        img={`${props.category}-${wave}.png`} 
                    />
                );
            })}
        </Waves>
    );
}
const config = [
    'top',
    'mid',
    'bot'
];
const Waves = styled.div`
    position: absolute;
    right: 0; bottom: 0; left: 0;
    height: 70px;
    overflow: hidden;
    z-index: 200;
`;
const Wavey = styled.div`
    position: absolute;
    left: 0;
    width: 200%;
    height: 100%;
    background-repeat: repeat no-repeat;
    background-position: 0 bottom;
    transform-origin: center bottom;
    ${props => props.img && `
        background-image: url(${require(`./../../assets/img/waves/${props.img}`)});
    `}
    ${props => props.type === 'top' && `
        opacity: 0.2;
        background-size: 50% 50px;
    `}
    ${props => props.type === 'mid' && `
        animation: wave 9s linear infinite;
        opacity: 0.4;
        background-size: 50% 70px;
    `}
    ${props => props.type === 'bot' && `
        opacity: 0.7;
        animation: wave 14s linear infinite;
        background-size: 50% 50px;
    `}
    @keyframes wave {
        0% { transform: translateX(0) translateZ(0) scaleY(1) }
        50% { transform: translateX(-25%) translateZ(0) scaleY(0.45) }
        100% { transform: translateX(-50%) translateZ(0) scaleY(1) }
    }
`;


export default Wave;