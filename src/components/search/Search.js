import React, { Component } from 'react';
import styled from 'styled-components';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    handleClose = () => {
        this.setState({ open: false }, () => {
            this.props.onChange("")
        })
    }
    render() {
        return (
            <Wrapper open={this.state.open}>
                <Icon 
                    primary
                    className="icon-search" 
                    visible={true}
                    onClick={() => this.setState(prevState => ({ open: !prevState.open }))} 
                />
                <Input
                    value={this.props.value}
                    onChange={(e) => this.props.onChange(e.target.value)}
                    placeholder={this.props.placeholder}
                />
                <Icon 
                    secondary
                    className="icon-close"
                    visible={this.props.value.length > 0}
                    onClick={() => this.handleClose()}
                />
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    display: flex;
    width: ${props => props.open ? '200px' : '35px'};
    height: 35px;
    border: solid 2px black;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
`;
const Icon = styled.i`
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 31px;
    height: 100%;
    opacity: ${props => props.visible ? '1' : '0'};
    ${props => props.primary &&`
        background-color: black;
        color: white;
    `}
    ${props => props.secondary &&`
        background-color: white;
        color: #black;
        font-size: 12px;
    `}
`;
const Input = styled.input`
    flex: 1;
`;

export default Search;