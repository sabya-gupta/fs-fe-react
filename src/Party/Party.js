import React, {Component} from 'react';
import './Party.css';
import ToggleComponent from '../basicComps/ToggleComponent';

class Party extends Component{
    render(){
        //console.log('inside render.......')
        const props = this.props;
        const isEditable = props.edit;
        //console.log(isEditable);

        let properties = [];
        // noneditabel_properties.push(
        //     <div style={{background:'#DDFF79'}}>
        //         <tr><td 
        //             className="Party" 
        //             >
        //                 <ToggleComponent type={(props.editableList[props.partyprops.length-1]==='N')?'label' : 'text'} 
        //                 dblclick={props.dblclick} idx={props.partyprops.length-1} handleEditOnBlur={this.props.handleEditOnBlur}
        //                 handleOnlyOnBlur={this.props.handleOnlyOnBlur}
        //                 text={props.party[props.partyprops[props.partyprops.length-1]].key}
        //                 key={props.partyprops.length}
        //                 />
        //             </td>
        //         </tr>
        //     </div>
        // );
        if(!isEditable){
            for(let i=0; i<props.partyprops.length; i++){
                properties.push(
                    <div key={i} style={props.party[props.partyprops[i]].selected?{background:'#C4F7DB'}:{background:'white'}}>
                        <tr><td 
                            className="Party" 
                            key={i}
                            onClick={props.click.bind(this, props.partyNum, props.partyprops[i])}
                            >
                                {props.party[props.partyprops[i]].key+(props.party[props.partyprops[i]].selected?'*':'')}
                            </td>
                        </tr>
                    </div>
                    )         
                }
            }else{
                for(let i=0; i<props.partyprops.length; i++){
                    properties.push(
                        <div key={i} style={{background:'#DDFF79'}}>
                            <tr><td className="Party" >
                            <ToggleComponent type={(props.editableList[i]==='N')?'label' : 'text'}
                            dblclick={props.dblclick} idx={i} handleEditOnBlur={this.props.handleEditOnBlur} 
                                handleOnlyOnBlur={this.props.handleOnlyOnBlur}
                                text = {props.party[props.partyprops[i]].key}
                            />
                            </td></tr>
                        </div>
                    );
                }
            }
        

        // console.log(properties);
        
        // let ret = null;
        // if(isEditable){
        //     ret = <table>
        //     <div style={{background:'#DDFF79'}}>
        //         <tr><td 
        //             className="Party" 
        //             >
        //                 <ToggleComponent type={(props.editableList[0]==='N')?'label' : 'text'} 
        //                 dblclick={props.dblclick} idx={0} handleEditOnBlur={this.props.handleEditOnBlur}
        //                 handleOnlyOnBlur={this.props.handleOnlyOnBlur}
        //                 text={props.party[props.partyprops[0]].key}
        //                 />
        //             </td>
        //         </tr>
        //     </div>
        //     <div style={{background:'#DDFF79'}}>
        //         <tr><td 
        //             className="Party" 
        //             >
        //                 <ToggleComponent type={(props.editableList[1]==='N')?'label' : 'text'}
        //                 dblclick={props.dblclick} idx={1} handleEditOnBlur={this.props.handleEditOnBlur}
        //                 handleOnlyOnBlur={this.props.handleOnlyOnBlur}
        //                 text = {props.party[props.partyprops[1]].key}
        //                 />
        //             </td>
        //         </tr>
        //     </div>
        //     <div style={{background:'#DDFF79'}}>
        //         <tr>
        //             <td className="Party" 
        //             >
        //                 <ToggleComponent type={(props.editableList[2]==='N')?'label' : 'text'}
        //                 dblclick={props.dblclick} idx={2} handleEditOnBlur={this.props.handleEditOnBlur}
        //                 handleOnlyOnBlur={this.props.handleOnlyOnBlur}
        //                 text = {props.party[props.partyprops[2]].key}
        //                 />
        //             </td>
        //         </tr>
        //     </div>
        //     <div style={{background:'#DDFF79'}}>
        //         <tr><td className="Party" 
        //             >
        //                 <ToggleComponent type={(props.editableList[3]==='N')?'label' : 'text'}
        //                 dblclick={props.dblclick} idx={3} handleEditOnBlur={this.props.handleEditOnBlur} 
        //                 handleOnlyOnBlur={this.props.handleOnlyOnBlur}
        //                 text = {props.party[props.partyprops[3]].key}
        //                 />
        //             </td>
        //         </tr>
        //     </div>
        //     </table>    
        // }else{
        //     ret = <table>
        //     <div style={props.party[props.partyprops[0]].selected?{background:'#C4F7DB'}:{background:'white'}}>
        //         <tr><td 
        //             className="Party" 
        //             onClick={props.click.bind(this, props.partyNum, props.partyprops[0])}
        //             >
        //                 {props.party[props.partyprops[0]].key+(props.party[props.partyprops[0]].selected?'*':'')}
        //             </td>
        //         </tr>
        //     </div>
        //     <div style={props.party[props.partyprops[1]].selected?{background:'#C4F7DB'}:{background:'white'}}>
        //         <tr><td 
        //             className="Party" 
        //             onClick={props.click.bind(this, props.partyNum, props.partyprops[1])}
        //             >
        //                 {props.party[props.partyprops[1]].key+(props.party[props.partyprops[1]].selected?'*':'')}
        //             </td>
        //         </tr>
        //     </div>
        //     <div style={props.party[props.partyprops[2]].selected?{background:'#C4F7DB'}:{background:'white'}}>
        //         <tr><td className="Party" onClick={props.click.bind(this, props.partyNum, props.partyprops[2])}>{props.party[props.partyprops[2]].key+(props.party[props.partyprops[2]].selected?'*':'')}</td></tr>
        //     </div>
        //     <div style={props.party[props.partyprops[3]].selected?{background:'#C4F7DB'}:{background:'white'}}>
        //         <tr><td className="Party" onClick={props.click.bind(this, props.partyNum, props.partyprops[3])}>{props.party[props.partyprops[3]].key+(props.party[props.partyprops[3]].selected?'*':'')}</td></tr>
        //     </div>
        // </table>
    
    
        // }
    
        //return ret;
        return (<table>
            {properties}
        </table>);
    }
}

export default Party;