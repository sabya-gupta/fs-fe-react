import React, {Component} from 'react';

import './App.css';

import Party from './Party/Party';

import axios from './customaxios';

class App extends Component {

  state = {

    partyprops : ['firstname', 'lastname', 'ucif', 'lcif'],

    // parties : [ //hard coded 123 456 789 890
    //   {
    //     firstname:{key:"A", selected:false}, lastname:{key: "hadd", selected:false}, ucif:{key:'121212', selected:false}, lcif:{key:'L123', selected:false}
    //   },
    //   {
    //     firstname:{key: "Archie", selected:false}, lastname:{key: "Haddok", selected:false}, ucif:{key: '234345', selected:false}, lcif:{key:'L456', selected:false}
    //   },
    //   {
    //     firstname:{key: "Archibald", selected:false}, lastname:{key: "Haddock", selected:false}, ucif:{key:'987865', selected:false}, lcif:{key:'L841', selected:false}
    //   },
    //   {
    //     firstname:{key: "Archibal", selected:false}, lastname:{key: "Haddoc", selected:false}, ucif:{key:'985', selected:false}, lcif:{key:'L8400000001', selected:false}
    //   },
    //   {
    //     firstname:{key: "Archie", selected:false}, lastname:{key: "Haddock", selected:false}, ucif:{key: '987865', selected:false}, lcif:{key:'L841', selected:false}
    //   }
    // ],

    setEditable: ['N', 'N', 'N', 'N']
  };

  componentDidMount=()=>{
    axios.get('/customersForMerge', 
    {headers: {'AUTHCODE': '555555'}})
      .then((res)=>{
        console.log('>>>>>>>>>>>>>>>>>')
        console.log(res.headers);
        this.setState({parties: res.data}, ()=>console.log(this.state));
      })
      .catch(e=>console.log(e));
  }

  handlePartyClick = (arr, fld) =>{
    console.log(this.state);
    if(arr===-1) return;
    console.log(arr, fld);
    const parties = this.state.parties.slice();

    parties.forEach(party=>{
      party[fld].selected=false;
    })

    const selectedParty = parties[arr];
    console.log(selectedParty);
    const selvalue = selectedParty[fld].key;
    selectedParty[fld].selected=true;

    const length = parties.length;

    parties[length-1][fld].key=selvalue;

    console.log(parties);

    this.setState({parties: parties});
  }

  handleDoubleClick = (fldnum) =>{
    console.log('dbl');
    const newSetEditable = [...this.state.setEditable];
    newSetEditable[fldnum] = 'Y';
    this.setState({setEditable: newSetEditable});
  }

  handleEditOnBlur = (idx, event) =>{
    const parties = this.state.parties.slice();

    const length = parties.length;

    const value = event.target.value;

    console.log(parties[length-1]);
    console.log(parties[length-1][this.state.partyprops[idx]]);

    parties[length-1][this.state.partyprops[idx]].key=value;

    this.setState({parties: parties}, ()=>console.log(this.state));

  }

  handleOnlyOnBlur = () =>{
    this.setState({setEditable:['N', 'N', 'N', 'N']});    
  }

  resetAll=()=>{
  }
/** */
  render(){
    if(!this.state.parties) return '';
    let persons = [];
    let headers=[];
    for(let i=0; i<this.state.parties.length; i++){
      if(i< (this.state.parties.length-1)){
        persons.push(
          <td key={i}>
            <Party 
              click={this.handlePartyClick} 
              party={this.state.parties[i]} 
              partyprops={this.state.partyprops} 
              editableList={['N', 'N', 'N', 'N']}
              partyNum={i} />
          </td>
        );
        headers.push(<th className='PartyHeader'>Party{i}</th>);
      }else{
        console.log('>>>>>>>>>');
        persons.push(
          <td key={i}>
            <Party 
                click={this.handlePartyClick} 
                party={this.state.parties[i]} 
                partyprops={this.state.partyprops} partyNum={-1} 
                edit={true} 
                editableList={this.state.setEditable}
                dblclick={this.handleDoubleClick}
                handleEditOnBlur={this.handleEditOnBlur}
                handleOnlyOnBlur={this.handleOnlyOnBlur}
                />
            </td> 
        );
        headers.push(<th className='PartyHeader'>Suggested</th>);
      }
    }

    let persons2 = null;
    let headers2 = null;

    persons2 = (
    <div>
        {this.state.parties.map((party, idx)=>{
          if(idx<(this.state.parties.length-1)){
            return <td key={idx}>
              <Party 
              click={this.handlePartyClick} 
              party={party} 
              partyprops={this.state.partyprops} 
              editableList={['N', 'N', 'N', 'N']}
              partyNum={idx} />
              </td>
          }else{
            return <td key={idx}>
              <Party 
                click={this.handlePartyClick} 
                party={party} 
                partyprops={this.state.partyprops} partyNum={-1} 
                edit={true} 
                editableList={this.state.setEditable}
                dblclick={this.handleDoubleClick}
                handleEditOnBlur={this.handleEditOnBlur}
                handleOnlyOnBlur={this.handleOnlyOnBlur}
                />
                </td>
              }
        }
        )}
        </div>
    );

    headers2 = (
      <div>
        {this.state.parties.map((p, idx)=>{
          if(idx<(this.state.parties.length-1))
          return <th key={idx} className='PartyHeader'>Party{idx}</th>
          else
          return <th key={idx} className='PartyHeader'>Suggested</th>
        })}
      </div>
    )

    return (
      <div className="App">
        <h1>Hi!</h1>
        <table>
          <tbody>
            <tr>
              {/* <th>Party1</th>
              <th>Party2</th>
              <th>Party3</th>
              <th>Suggested</th> */}
              {headers2}
            </tr>
              {/* <td><Party click={this.handlePartyClick} party={this.state.parties[0]} partyprops={this.state.partyprops} partyNum={0} /></td>
              <td><Party click={this.handlePartyClick} party={this.state.parties[1]} partyprops={this.state.partyprops} partyNum={1}/></td>
              <td><Party click={this.handlePartyClick} party={this.state.parties[2]} partyprops={this.state.partyprops} partyNum={2}/></td>
              <td><Party click={this.handlePartyClick} party={this.state.parties[3]} partyprops={this.state.partyprops} partyNum={-1} 
                edit={true} 
                editableList={this.state.setEditable}
                dblclick={this.handleDoubleClick}
                handleEditOnBlur={this.handleEditOnBlur}
                handleOnlyOnBlur={this.handleOnlyOnBlur}
              /></td> */}
              {persons2}
          </tbody>
        </table>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Nested!'));
      
  }
}

export default App;
