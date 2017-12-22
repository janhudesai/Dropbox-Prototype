import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
class Group extends Component
{
    state = {
        groupname:'',
        members:'',
        deletemembers:''
    }
    render()
    {
        return(
            <Route exact path="/group" render={() => (
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


                            </div>
                        </div>
                        <div className="col-sm-8 col-lg-8 col-md-8 col-xs-8">

                        </div>
                        <div className="col-sm-2 col-lg-2 col-md-2 col-xs-2">

                            <form enctype="multipart/form-data">
                                <div className="form-group" >
                                    <input type="text"
                                           name="groupname"
                                           value={this.state.folder}
                                           onChange={(event) => {
                                               this.setState({
                                                   folder: event.target.value
                                               });
                                           }}/>
                                </div>
                                <div className="form-group">

                                    <button type="button"
                                            class="c-btn c-btn--primary c-btn--full"
                                            onClick = {() => this.newfolder()}
                                    >
                                        Folder
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            )}/>
        )
    }

}

export default withRouter(Group);
