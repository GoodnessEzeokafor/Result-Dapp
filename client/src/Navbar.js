import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './About'
import Result from './Result'
import Home  from './Home'


export default class Navbar extends Component {
    render() {
        return (
            <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <h2 className="navbar-brand">{this.props.title}</h2>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item">
                            <Link to="/" className='nav-link'>Home</Link>
                          </li>

                            <li className="nav-item">
                                <Link to="/about" className='nav-link'>About</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/result" className='nav-link'>Result</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
                  <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    
                    <Route path="/result">
                        <Result 
                            results={this.props.results}
                            get_result_list={this.props.get_result_list} 
                            admin={this.props.admin}
                            account={this.props.account}
                        />
                    </Route>
                    <Route path="/">
                        <Home 
                        admin={this.props.admin}
                        account={this.props.account}/>
                    </Route>
        </Switch>
            </div>
            </Router>
        );
    }
}
