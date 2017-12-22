import React, {Component} from 'react';
import '../public/scooter.css';
import * as API from '../api/api';
import Folder from './folder';
import NewSharedFolder from './newsharedfolder'
import { Route, withRouter } from 'react-router-dom';
import Group from './group'
import Signin from "./signin";
import {connect} from 'react-redux';



class Files extends Component {

    state =
{
    id :''
}

    uploadfiles()
    {
        var id;
        this.props.itemArr.map((todo,index)=> {

                id= todo.items.id

            }
        )
        const formData = new FormData();
        formData.append('file', this.state.id);//event.target.files[0] data going here
        formData.append('id', id);

        const requestOptions = {
            method: 'POST',
            body: formData,
            credentials: 'same-origin',
        };

        API.douploadfile(requestOptions);
    }
    render()
    {
        return(
            <div>
                <form enctype="multipart/form-data">
                    <div className="form-group" >
                        <input type="file" name="filetouse" onChange={(event) => {
                            this.setState({
                                id: event.target.files[0]
                            });
                        }}/>
                    </div>
                    <div className="form-group">

                <button type="button"
                        class="c-btn c-btn--primary c-btn--full"
                        onClick = {() => this.uploadfiles()}
                            >
                    Upload files
                </button>
                    </div>
                </form>
                {/*<button class="c-btn c-btn--primary-jay c-btn--full-jay">*/}
                    {/*New Shared Folder*/}
                {/*</button>*/}

                {/*<button class="c-btn c-btn--primary-jay c-btn--full-jay">*/}
                    {/*New Folder*/}
                {/*</button>*/}

                <div>
                    < NewSharedFolder/>
                </div>



                <div>
                    <Folder/>
                </div>







                <Route exact path="/group" render={() => (
                    <div>
                        <Group/>
                    </div>
                )}/>


            </div>
        );
    }

}

//export default Files;

function mapStateToProps(state) {
    const itemArr = Object.keys(state.parent).map((items) => (
        {
            'items' : state.parent[items]


        }
    ));
    return {itemArr};
}
export default withRouter(connect(mapStateToProps, null)(Files));