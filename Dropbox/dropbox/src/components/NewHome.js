import React, {Component} from 'react';
import '../public/scooter.css';
import Files from './files';
import * as API from '../api/api';
import View from './view';
import {connect} from 'react-redux';
import {filedisplay} from '../action/index'
import Star from './star';
import Leftpanel from './leftpanel'
import { Route, withRouter } from 'react-router-dom';
import Useractivity from './useractivity'
import user from '../images/user.svg'

class NewHome extends Component
{
   state = {
       files :''
   }


    componentDidMount(){
        var payload ={id:'janhudesai@gmail.com'};
        var temp1 =[];
        var temp2=[];
        var temp3 =[];

        API.view(payload)
            .then(
                (response) =>{
                    //this.props.filedisplay(response.display)
                    temp1 = response.display;
                }
            );

        API.viewfiles(payload)
            .then(
                (response) =>{
                    //this.props.filedisplay(response.display)
                    temp2 = response.display;
                    temp3 = temp1.concat(temp2);
                    this.props.filedisplay(temp3);
                }

            );


    }


    render()
    {
        return(
            <div className="container-fluid">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
                <div className="row">
                    <div className="col-sm-2 col-lg-2 col-md-2 col-xs-2" >
                        <div class="c-banner" id="logoheight">

                        <svg class="maestro-nav__logo" aria-label="Home" role="img" width="32px" height="32px" viewBox="0 0 32 32" data-reactid="12">
                            <g fill="#007ee5">
                            <path d="M9.416 1l6.59 5.476-9.495 5.838L0 7.122 9.416 1zM0 17.505l6.51-5.191 9.495 5.837-6.589 5.476L0 17.505zm16.005.646l9.495-5.837 6.511 5.191-9.416 6.122-6.59-5.476zM32.011 7.122l-6.51 5.192-9.496-5.838L22.595 1l9.416 6.122zM16.005 19.571L22.685 25l2.857-1.828v2.049l-9.537 5.603L6.47 25.22v-2.05L9.327 25l6.678-5.43z" fill-rule="evenodd" data-reactid="13">

                            </path>
                            </g>
                        </svg> <br/>

                            <Leftpanel/>
                    </div>
                    </div>
                    <div className="col-sm-10 col-lg-10 col-md-10 col-xs-10">
                        <div className="row">
                            <div className="col-sm-10 col-lg-10 col-md-10 col-xs-10">
                                <div className="text-left">
                                <p className="f1">DropBox</p>
                                </div>
                            </div>

                            <div className="col-sm-2 col-lg-2 col-md-2 col-xs-2">
                                <button type="button"
                                        onClick = {() =>  this.props.history.push("/Useractivity")}
                                >
                                    <img type="image/svg+xml" src={user} height="50" alt='logo'/>

                                </button>

                            </div>
                        </div>
                        <br/>
                            <br/>

                        <div className="row">
                            <div className="col-sm-10 col-lg-10 col-md-10 col-xs-10">

                                <View/>

                            </div>
                            <div className="col-sm-2 col-lg-2 col-md-2 col-xs-2">
                                    <Files/>
                            </div>
                        </div>
                    </div>


                </div>

                <Route exact path="/Useractivity" render={() => (
                    <div>
                        <Useractivity/>
                    </div>
                )}/>

            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        filedisplay : (data) => dispatch(filedisplay(data))
    };
}

function mapStateToProps(state) {
    const itemArr = Object.keys(state.view).map((items) => (
        {
            'items' : state.view[items]


        }
    ));
    return {itemArr};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewHome));
//export default NewHome;