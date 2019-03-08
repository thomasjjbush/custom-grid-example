import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './containers/nav/Nav';
import Home from './containers/home/Home';
import Trend from './containers/trend/Trend';
import Footer from './components/footer/Footer';
import './assets/style/master.css';

export default class App extends Component {
  	render() {
    	return (
			<React.Fragment>
				<Nav />
				<Switch>
					<Route 
						exact
						path="/" 
						component={Home}
					/>
					<Route 
						exact
						path="/trends/:id" 
						component={Trend}
					/>
				</Switch>
				<Footer />
			</React.Fragment>
    	);
  	}
}
