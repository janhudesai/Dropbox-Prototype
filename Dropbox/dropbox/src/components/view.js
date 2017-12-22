import React, {Component} from 'react';
import '../public/scooter.css';
import {connect} from 'react-redux';
import {stardisplay} from '../action/index'
import {filedisplay} from '../action/index'
import {updateparent} from '../action/index'
import Axios from 'axios';
import fileDownload from 'react-file-download';
import Groupshare from './groupshare';
import Fileshare from './fileshare';

import * as API from '../api/api';

class view extends Component{
    handlesubmit(){
        //var data ={name:todo.items.name}
       // this.props.stardisplay(data);
    }
    state ={
        folder:'',
        members:''
    }


    newsharedfolder(folder){
        var payload;
        payload = {folder:folder,members:this.state.members,
        flag:'old'}
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
    itemfile ()
    {
        return this.props.itemArr.map((todo,index) =>{
            if(todo.items.display=='file'){

                return(

                    <tr>
                        <td width="10">
                            <button type="button"
                                    class="c-btn c-btn--tertiary-new"
                                    onClick={() => {
                                        var jay = {id :todo.items.name}
                                        API.downloadfiles(jay)
                                            .then((res) => {
                                                Axios.get(res.url)
                                                    .then((response) => {
                                                        fileDownload(response.data, 'download');
                                                    });
                                                //fileDownload(res.data, 'filename');
                                                //window.open(res.url);
                                            })
                                    }}
                            >

                            <svg width="32" height="32" viewBox="0 0 32 32" class="mc-icon-template-actionable"><title>action-show-deleted-files</title>
                                <g fill="none" fill-rule="evenodd">
                                    <g>
                                        <path fill="none" d="M0 0h32v32H0z"></path>
                                        <circle fill="#99C6F3" cx="15.5" cy="16" r="2"></circle>
                                        <path d="M15.5 22c-4.875 0-8.235-5.19-8.235-5.19-.335-.444-.332-1.167-.01-1.607 0 0 3.37-5.203 8.245-5.203 4.875 0 8.235 5.19 8.235 5.19.335.444.332 1.167.01 1.607 0 0-3.37 5.203-8.245 5.203zm.014-2c3.59 0 6.5-4 6.5-4s-2.91-4-6.5-4-6.5 4-6.5 4 2.91 4 6.5 4z" fill="#0070E0">

                                        </path></g></g></svg>
                            {todo.items.name}
                            </button>

                        </td>
                        <td>{todo.items.date}</td>

                        <td>
                            {/*<form>*/}
                            {/*<div className="form-group" >*/}
                                {/*<input type="text"*/}
                                       {/*class="c-input"*/}
                                       {/*placeholder="Members"*/}
                                       {/*name="members"*/}
                                       {/*/>*/}
                            {/*</div>*/}
                            {/*<button type="button"*/}
                                     {/*class="c-btn c-btn--primary-jay c-btn--full"*/}
                        {/*>   Share*/}
                        {/*</button>*/}
                            {/*</form>*/}

                            <Fileshare name={todo.items.name}/>
                        </td>
                        <td> <button type="button"
                                     class="c-btn c-btn--primary-jay c-btn--full"
                                     onClick={() => {
                                         var data ={name:todo.items.name}
                                         var apidata={
                                             name:todo.items.name,
                                             value:'yes'
                                         }
                                         API.updatestar(apidata)
                                             .then((status) => {
                                                 if (status === 201){
                                                     console.log("success")
                                                 }
                                             });
                                         this.props.stardisplay(data)
                                     }}
                        >   star
                        </button></td>
                        <td><button type="button"
                                    class="c-btn c-btn--primary-jay c-btn--full"
                        >   Delete
                        </button></td>
                    </tr>

                ); }

            if(todo.items.display=='folder'){

                return(

                    <tr>


                        <td width="150">
                            <svg width="40" height="40" viewBox="0 0 40 40" class="mc-icon-template-content"><title>content-folder_shared-small</title>
                                <g fill="none" fill-rule="evenodd">

                                    <path d="M18.422 10h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 31 5 30.331 5 29.507V8.493C5 7.663 5.671 7 6.5 7h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#92CEFF"></path>



                                </g>
                            </svg>
                            <button type="button"
                                    class="c-btn c-btn--tertiary-new"
                                    onClick={() => {

                                        var temp1 =[];
                                        var temp2=[];
                                        var temp3 =[];
                                        this.props.updateparent(todo.items.name)
                                        var payload ={parentid:todo.items.name}
                                        API.childview(payload)
                                            .then(
                                                (response) =>{
                                                    //this.props.filedisplay(response.display)
                                                    temp1 = response.display;
                                                }
                                            );

                                        API.childviewfile(payload)
                                            .then(
                                                (response) =>{
                                                    temp2 = response.display;
                                                    temp3 = temp1.concat(temp2);
                                                    this.props.filedisplay(temp3)
                                                }
                                            );

                                    }}
                            >
                            {todo.items.name}
                            </button>
                        </td>
                        <td width="100">{todo.items.date}</td>

                        <td width="250">
                            {/*<form>*/}
                            {/*<div className="form-group" >*/}
                                {/*<input type="text"*/}
                                       {/*class="c-input"*/}
                                       {/*placeholder="Members"*/}
                                       {/*name="members"*/}
                                       {/*value={this.state.members}*/}
                                       {/*onChange={(event) => {*/}
                                           {/*this.setState({*/}
                                               {/*members: event.target.value*/}
                                           {/*});*/}
                                       {/*}}*/}
                                {/*/>*/}
                            {/*</div>*/}

                                {/*<div className="form-group" >*/}
                                    {/*<button type="button"*/}
                                     {/*class="c-btn c-btn--primary-jay c-btn--full"*/}
                                            {/*onClick = {() => this.newsharedfolder(todo.items.name)}*/}
                                    {/*>   Share*/}
                                    {/*</button>*/}
                                {/*</div>*/}
                            {/*</form>*/}
                            <Groupshare name={todo.items.name}/>
                        </td>
                        <td width="100"> <button type="button"
                                     class="c-btn c-btn--primary-jay c-btn--full"
                                     onClick={() => {
                                         var data ={name:todo.items.name}
                                         var apidata={
                                             name:todo.items.name,
                                             value:'yes'
                                         }
                                         API.updatestar(apidata)
                                             .then((status) => {
                                                 if (status === 201){
                                                     console.log("success")
                                                 }
                                             });
                                         this.props.stardisplay(data)
                                     }}
                        >   star
                        </button></td>
                        <td><button type="button"
                                    class="c-btn c-btn--primary-jay c-btn--full"
                        >   Delete
                        </button></td>
                    </tr>

                ); }

            }
        )
        }

    itemshare ()
    {
        return this.props.itemArr.map((todo,index) =>{
            if (todo.items.starred != null){
                return(

                    <tr>

                        <td width="150"><svg width="40" height="40" viewBox="0 0 40 40" class="mc-icon-template-content"><title>content-folder_shared-small</title>
                            <g fill="none" fill-rule="evenodd">



                                <path d="M20.013 25.14l-.5-1.302C19.12 22.82 17.918 22 16.824 22h-.907c-1.087 0-2.297.823-2.687 1.838l-.454 1.18c-.197.514.088.937.642.937h13.189c.554 0 .84-.42.641-.937l-.453-1.18C26.404 22.82 25.202 22 24.109 22H23.2c-1.087 0-2.297.823-2.687 1.838l-.5 1.303zM16.5 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#3BA0F3"></path>

                            </g>
                        </svg> {todo.items.name}</td>
                        <td width="100">{todo.items.date}</td>
                        <td width="250"></td>

                        <td width="100"><button type="button"
                                    class="c-btn c-btn--primary-jay c-btn--full"
                                    onClick={() => {
                                        var data ={name:todo.items.name}
                                        var apidata={
                                            name:todo.items.name,
                                            value:null
                                        }
                                        API.updatestar(apidata)
                                            .then((status) => {
                                                if (status === 201){
                                                    console.log("success")
                                                }
                                            });
                                        this.props.stardisplay(data)
                                    }}
                        >   star
                        </button></td>

                        <td><button type="button"
                                    class="c-btn c-btn--primary-jay c-btn--full"
                        >   Delete
                        </button></td>

                    </tr>

                );

            }}
        )
    }

    render()
    {
        return(
            <div>
                <div className="text-left">
                    <p className="f4">Starred</p>
                </div>
                <table className="c-table">

                    <tbody>

                    {this.itemshare()}
                    </tbody>
                </table>
                <div className="text-left">
                    <p className="f4"> Files </p>
                </div>
                <table className="c-table">

                    <tbody>
                    {this.itemfile()}
                    </tbody>
                </table>
            </div>


        );
    }
    }



function mapDispatchToProps(dispatch) {
    return {
        stardisplay : (data) => dispatch(stardisplay(data)),
        filedisplay : (data) => dispatch(filedisplay(data)),
        updateparent : (data) => dispatch(updateparent(data))
    };
}

// function mapDispatchToProps(dispatch) {
//     return {
//         filedisplay : (data) => dispatch(filedisplay(data))
//     };
// }
function mapStateToProps(state) {
    const itemArr = Object.keys(state.view).map((items) => (
        {
            'items' : state.view[items]


        }
    ));
    return {itemArr};
}
export default connect(mapStateToProps, mapDispatchToProps)(view);