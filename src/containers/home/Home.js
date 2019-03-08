import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from './../../components/grid/Grid';
import Thumb from './../../components/thumb/Thumb';
import NotFound from './../../components/not-found/NotFound';
import './Home.css';

import { items } from './../../config';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: items
        }
    }
    componentWillReceiveProps(nextProps) {
        if ( nextProps.filter !== this.props.filter || nextProps.search !== this.props.search ) {
            let filteredItems;
            if ( nextProps.filter === "" ) filteredItems = items.filter(item => item.label.toLowerCase().includes(nextProps.search.toLowerCase()))
            else filteredItems = items.filter(item => item.category === nextProps.filter && item.label.toLowerCase().includes(nextProps.search.toLowerCase()));
            this.setState({
                items: filteredItems
            })
        }
    }
    render() {
        return (
            <main className="home">
                <div className="home__articles scrollable">
                    <Grid
                        gap={10}
                        items={this.state.items}
                        component={Thumb}
                        notFound={NotFound}
                    />
                </div>
            </main>
        );
    }
}

function mapStateToProps(store) {
    return {
        filter: store.filter.value,
        search: store.search.value
    };
}

export default connect(mapStateToProps)(Home);
