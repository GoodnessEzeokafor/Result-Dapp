import React, { Component } from 'react';
// import Logo from "./logo512.png";
import User from './user.svg';
import './App.css'
// logo512.png

export default class About  extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row h-100">
            <div className="col-md-4"></div>
            <div className="col-md-4 mt-5">    
            <img 
              className="img-responsive" 
              src={User} 
              alt="website logo" 
              width="300" 
              height="300"
            />
            <p className="mt-4">
              <a  rel="noopener noreferrer" target="_blank" href="https://docs.google.com/document/d/1lEVa94EbN1u7LyzlXUxg-lJiViVCinvhnv6EkrpqBNw/edit">
              Click Here
              </a> to read documentation on the project
            </p>
            </div>
            <div className="col-md-4 "></div>
          </div>
          
        </div>
      </div>
    );
  }
}
