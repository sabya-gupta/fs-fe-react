import React, {Component} from 'react';
import './ToggleComponent.css';

class ToggleComponent extends Component{

    render(){
        let ret=null;
        switch(this.props.type){
            case('text'):
                ret = <div>
                    <input className="ToggleComponent"
                        type='text' 
                        value={this.props.text}
                        onChange={this.props.handleEditOnBlur.bind(this, this.props.idx)}
                        onBlur={this.props.handleOnlyOnBlur}
                        onMouseOut={this.props.handleOnlyOnBlur}
                    />
                </div>;
                break;
            default:
                ret = <div  className="ToggleComponent"
                    onDoubleClick={this.props.dblclick.bind(this, this.props.idx)}
                    >
                {this.props.text}
                </div>;
            break;
        }
        return ret;
    }
}

export default ToggleComponent;