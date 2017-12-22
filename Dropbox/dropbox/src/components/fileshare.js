import React, {Component} from 'react';
import * as API from '../api/api';

class Fileshare extends Component {

    state ={
        folder:'',
        members:''
    }

    newsharedfolder(folder){
        var payload;
        payload = {folder:folder,members:this.state.members,
            flag:'old'}
        API.fileshare(payload)
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
                               class="c-input"
                               placeholder="Members"
                               name="members"
                               value={this.state.members}
                               onChange={(event) => {
                                   this.setState({
                                       members: event.target.value
                                   });
                               }}
                        />
                    </div>

                    <div className="form-group" >
                        <button type="button"
                                class="c-btn c-btn--primary-jay c-btn--full"
                                onClick = {() => this.newsharedfolder(this.props.name)}
                        >   Share
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Fileshare;
