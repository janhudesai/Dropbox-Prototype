import React, {Component} from 'react';
import '../public/scooter.css';
import * as API from '../api/api';


class SharedFolder extends Component{
    state ={
        folder:'',
        members:''
    }

    newsharedfolder(){
        var payload;
        payload ={ folder:this.state.folder,
            members:this.state.members,
            flag:'new'

        }
        API.sharefolder(payload)
            .then((status) => {
                if (status === 201){
                    this.setState({
                        folder: '',
                        members:''
                    });
                }
            });

    }

    render()
    {
        return(
            <div>
                <form>

                    <div className="form-group" >
                        <input type="text"
                               name="folder"
                               class="c-input"
                               placeholder="Foldername"
                               value={this.state.folder}
                               onChange={(event) => {
                                   this.setState({
                                       folder: event.target.value
                                   });
                               }}/>
                    </div>
                    <div className="form-group" >
                        <input type="text"
                               class="c-input"
                               placeholder="Members"
                               name="members"
                               value={this.state.members}
                               onChange={(event) => {
                                   this.setState({
                                       members: event.target.value
                                   });
                               }}/>
                    </div>
                    <div className="form-group">

                        <button type="button"
                                class="c-btn c-btn--primary c-btn--full"
                                onClick = {() => this.newsharedfolder()}
                        >
                            New Shared Folder
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SharedFolder;