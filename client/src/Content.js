
import React, { Component } from 'react';
import Form from './Form'

export default class Content extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <Form 
                        account={this.props.account}
                        admin={this.props.admin}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
