import React, {Component} from 'react';
import '../public/scooter.css';

class Star extends Component{
    render()
    {
        return(


            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.date}</td>

                <td><button type="button"
                            class="c-btn c-btn--primary-jay c-btn--full"
                >   Delete
                </button></td>
            </tr>


        );
    }
}

export default Star;