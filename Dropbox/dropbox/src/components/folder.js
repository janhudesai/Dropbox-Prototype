import React, {Component} from 'react';
import '../public/scooter.css';
import * as API from '../api/api';
import {connect} from 'react-redux';


class Folder extends Component {
    state ={folder:'',
    id :null
    }

    newfolder()
    {
        var payload={folder:'',id:null};

    this.props.itemArr.map((todo,index)=> {

                    payload.id= todo.items.id

        }
        )
        payload.folder= this.state.folder;

        API.folder(payload)
            .then((status) => {
                if (status === 201){
                    this.setState({
                        folder: ''
                    });
                }
            });
    }
render()
{
    return(
        <div>
        <form enctype="multipart/form-data">
            <div className="form-group" >
                <input type="text"
                       name="folder"
                       class="c-input"
                       placeholder="New Foldername"
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
    );
}
}

function mapStateToProps(state) {
    const itemArr = Object.keys(state.parent).map((items) => (
        {
            'items' : state.parent[items]


        }
    ));
    return {itemArr};
}

export default connect(mapStateToProps, null)(Folder);

//export default Folder;