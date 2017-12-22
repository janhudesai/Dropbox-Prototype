import React, {Component} from 'react';
import '../public/scooter.css';
import { Route, withRouter } from 'react-router-dom';
import Signin from "./signin";
import * as API from '../api/api';

class Signup extends Component {

    state = {
        fname :'',
        lname :'',
        username: '',
        password: ''
    };

    handleSubmit() {
        API.dosignup(this.state)
            .then((status) => {
                if (status === 200){
                    this.props.history.push("/");
                }
            });

    }

    render() {
        return(
            <div className="container-fluid" >
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>


                    <div className="row">


                        <div className="col-sm-6 col-lg-6 col-md-6 col-xs-6" >
                            <div className="col-sm-6 col-lg-6 col-md-6 col-xs-6" >
                                <br/>
                                <br/>
                            <form >
                                <div className="form-group">
                                    <input type="text"
                                           name="fname"
                                           class="c-input"
                                           placeholder="First Name"
                                           value={this.state.fname}
                                           onChange={(event) => {
                                               this.setState({
                                                   fname: event.target.value
                                               });
                                           }}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                           name="lastname"
                                           class="c-input"
                                           placeholder="Last Name"
                                           value={this.state.lname}
                                           onChange={(event) => {
                                               this.setState({
                                                   lname: event.target.value
                                               });
                                           }}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                           name="username"
                                           class="c-input"
                                           placeholder="Email"
                                           value={this.state.username}
                                           onChange={(event) => {
                                               this.setState({
                                                   username: event.target.value
                                               });
                                           }}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                           name="password"
                                           class="c-input"
                                           placeholder="Password"
                                           value={this.state.password}
                                           onChange={(event) => {
                                               this.setState({
                                                   password: event.target.value
                                               });
                                           }}
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="button"
                                            class="c-btn c-btn--primary "
                                            onClick = {() => this.handleSubmit()}
                                    >sign up</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>


                <Route exact path="/" render={() => (
                    <div>
                        <Signin/>
                    </div>
                )}/>
            </div>
        );
    }
}

export default withRouter(Signup);