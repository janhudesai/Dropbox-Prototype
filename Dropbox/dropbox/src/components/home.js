import React, {Component} from 'react';
import * as API from '../api/api';
class Home extends Component
{

    state = {


        directory:'',
        list:''
    };

    handleSubmit() {
        API.doLogin(this.state).then((response) => {
            this.setState({
                list: response
            });
        })
    };
render()
{
    return(
        <div className="container-fluid">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
            <div className="row">
                <div className="col-sm-2 col-lg-2 col-md-2 col-xs-2">

                    <a href="#" class="active">Files</a><br/>
                    <a href="#">Link 1</a><br/>
                    <a href="#">Link 2</a><br/>
                    <a href="#">Link 3</a><br/>
                    <a href="#">Link 4</a><br/>
                </div>
                <div className="col-sm-8 col-lg-8 col-md-8 col-xs-8">
                    <div className="col-sm-1 col-lg-1 col-md-1 col-xs-1">
                    DROPBOX

                        <form action="http://localhost:3001/users/fileupload" method="post" enctype="multipart/form-data">
                            <div className="form-group">
                            <input type="file" name="filetoupload"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" class="btn btn-default">Upload file</button>
                            </div>
                        </form>

                        <form >
                            <div className="form-group">
                                create folder
                                <input type="text" name="directory" value={this.state.directory}
                                       onChange={(event) => {
                                           this.setState({
                                               directory:  event.target.value

                                           });
                                       }}


                                />
                            </div>
                            <div className="form-group">
                                <button type="submit"
                                        class="btn btn-default"
                                >create a folder</button>
                            </div>
                        </form>

                        <form >

                            <div className="form-group">
                                <button type="submit"
                                        class="btn btn-default"
                                        onClick={() => this.handleSubmit()}
                                >list</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        {this.state.list}
                    </div>
                    <div className="col-sm-offset-9 col-lg-offset-9 col-md-offset-9 col-xs-offset-9">
                       SearchBar
                       Profile

                    </div>
                </div>
                <div className="col-sm-2 col-lg-2 col-md-2 col-xs-2">
                </div>

            </div>
        </div>
    );
}
}

export default Home;
