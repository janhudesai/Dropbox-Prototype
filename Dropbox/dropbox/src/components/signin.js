import React, {Component} from 'react';
import '../public/scooter.css';
import { Route, withRouter } from 'react-router-dom';
import Newhome from "./NewHome";
import Signup from "./signup";
import Group from "./group"
import * as API from '../api/api';
import Useractivity from './useractivity'
import CryptoJS from "crypto-js";
//import image from './images/Dropbox2';
//import background from '../images/Dropbox 2.png'


class Signin extends Component {

    state = {
        username: '',
        password: ''
    };


    handleSubmit()
    {
        var payload;
        var ciphertext;
        var encrypt;
        ciphertext= CryptoJS.AES.encrypt(this.state.password, '123')
        encrypt =ciphertext.toString()
        payload = {
            username:this.state.username,
            password:encrypt
        }
        API.doLogin(payload)
            .then((status) => {
              if (status === 200){
                  this.props.history.push("/newhome");
              }
            });
    };

    render() {

        return(
            <div className="container-fluid" >

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
                <Route exact path="/" render={() => (

                <div className="row">

                    <div className="text-center">
                    <div className="col-sm-6 col-lg-6 col-md-6 col-xs-6" >
                        <div className="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                            <br/>

                        <form >
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
                                >Login</button>
                            </div>

                            <div className="form-group">
                                <button type="button"
                                        class="c-btn c-btn--primary "
                                        onClick = {() => this.props.history.push("/signup")}
                                >signup</button>
                            </div>
                        </form>
                    </div>
                    </div>
                    </div>
            </div>
                    )}/>

                <Route exact path="/newhome" render={() => (
                    <div>
                        <Newhome/>
                    </div>
                )}/>

                <Route exact path="/signup" render={() => (
                    <div>
                        <Signup/>
                    </div>
                )}/>

                <Route exact path="/group" render={() => (
                    <div>
                        <Group/>
                    </div>
                )}/>

                <Route exact path="/Useractivity" render={() => (
                    <div>
                        <Useractivity/>
                    </div>
                )}/>
            </div>
        );
    }
}

export default withRouter(Signin);