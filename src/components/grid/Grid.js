import React, { Component } from 'react';
import styled from 'styled-components';
import { generate6items, generate5items, generate4items, generate3items, generate2items, generate1item } from './config';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    async componentDidMount() {
        let items = this.props.items;
        const grid = await this.createGrid(items);  
        this.setState({ grid });
    }
    async componentWillReceiveProps(nextProps) {
        if ( nextProps.items !== this.props.items ) {
            let items = nextProps.items;
            const grid = await this.createGrid(items);  
            this.setState({ grid });
        }
    }
    createGrid = async (items) => {
        let styles = { desktop: [], mobile: [] };
        let skip = [];
        for ( let i = 0; i < items.length; i ++ ) {
            if ( skip.includes(i) ) continue;
            const itemsPerRow = items.length - i >= 6 ? 
                Math.floor(Math.random() * 4) + 3 : // generate options 3,4,5,6
                Math.floor(Math.random() * (items.length - i)) + 1; // only generate options that will complete row
            let row;
            switch ( itemsPerRow.toString() ) {
                case "6": row = await generate6items(i);
                break;
                case "5": row = await generate5items(i);
                break;
                case "4": row = await generate4items(i);
                break;
                case "3": row = await generate3items(i);
                break;
                case "2": row = await generate2items(i);
                break;
                default: row = await generate1item(i);
                break;
            }
            skip = [...skip, ...row.skip]
            styles = {...styles, 
                desktop: [...styles.desktop, ...row.styles.desktop],
                mobile: [...styles.mobile, ...row.styles.mobile]
            }
        }
        return styles;
    }
  	render() {
        if ( !this.state.grid || !this.props.items ) return null;
    	return (
			<Wrapper areas={this.state.grid} gap={this.props.gap} items={this.props.items}>
                {this.props.items.length === 0 && this.props.notFound()}
                {this.props.items.map((item, i) => {
                    return (
                        <Item 
                            key={i} 
                            area={i} 
                        >
                            {this.props.component(item, i)}
                        </Item>
                    );
                })}
            </Wrapper>
    	);
  	}
}

const Item = styled.div`
    grid-area: ${props => `area_${props.area}`};
    box-sizing: border-box;
`;

const Wrapper = styled.div`
    display: ${props => props.items.length === 0 ? 'flex' : 'grid' };
    grid-template-areas: ${props => props.areas.desktop.map((area) => { return (`'${area}' `)})};
    grid-gap: ${props => props.gap ? `${props.gap}px` : '0px'};
    @media screen and (max-width: 768px) {
        grid-template-areas: ${props => props.areas.mobile.map((area) => { return (`'${area}' `)})};
    }
    ${props => props.items.length === 0 && `
        height: 100%;
        justify-content: center;
        align-items: center;
    `}
`;

export default Grid;
