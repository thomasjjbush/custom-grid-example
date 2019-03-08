import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectFilter } from './../../actions/filter'; 
import { userSearch } from './../../actions/search';
import Search from './../../components/search/Search';
import Hamburger from './../../components/hamburger/Hamburger';
import Logo from './../../assets/img/logo.jpg';
import './Nav.css';

import { categories } from './../../config';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    componentWillReceiveProps(nextProps) {
        if ( nextProps.location.pathname !== '/' ) return this.setState({
            open: false
        })
    }
    handleToggle = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    render() {
        return (
            <nav className="nav">
                <div className="nav__header">
                    <Link to="/" className="nav__header--link">
                        <img src={Logo} alt="Brilliant Basics" />
                    </Link>
                    {this.props.location.pathname === '/' && 
                        <div className="nav__header--tools">
                            <Search 
                                value={this.props.search}
                                placeholder="Search trends..."
                                onChange={this.props.userSearch}
                            />
                            <Hamburger 
                                open={this.state.open}
                                onClick={this.handleToggle}
                            />
                        </div>
                    }
                </div>
                <div className={`nav__dropdown ${this.state.open && ('nav__dropdown--open')}`}>
                    {categories.map(({ label, value }) => {
                        return (
                            <a
                                key={value}
                                onClick={() => this.props.selectFilter(value)}
                                className={this.props.filter === value ? 'active' : 'inactive'}
                            >
                                {label}
                            </a>
                        );
                    })}
                </div>
            </nav>
        );
    }
}

function mapStateToProps(store) {
    return {
        filter: store.filter.value,
        search: store.search.value
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectFilter: selectFilter,
        userSearch: userSearch
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
