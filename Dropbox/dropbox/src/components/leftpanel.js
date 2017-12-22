import React, {Component} from 'react';
import '../public/scooter.css';
import { Route, withRouter } from 'react-router-dom';
import Newhome from "./NewHome";
import Signin from "./signin";

class Leftpanel extends Component{
    render()
    {
        return(


           <div>

               <button
                   type="button"
                   class="c-btn c-btn--full-jay-home c-btn--full-jay">
                   Home
               </button>

               <button class="c-btn c-btn--full-jay-home c-btn--full-jay">
                   Files
               </button>

               <div >
                   <button type="button"
                           class="c-btn c-btn--full-jay-home c-btn--full-jay"
                           onClick = {() => this.props.history.push("/")}
                   >Log Out!</button>
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

export default withRouter(Leftpanel);
