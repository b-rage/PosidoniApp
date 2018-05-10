

import React, { Component } from 'react';
import { AppRegistry, 
         Text, 
         TextInput, 
         View,
         TouchableHighlight
} from 'react-native';


export default class InsertEmail extends Component {

/*   constructor(props) {
    super(props);
    this.state = { emailAd: '' };
    
  }

  onChangeText = () => {
    const emailAd = 'Bragi'; // somehow calculate new value
    this.props.onChangeText(emailAd),
    this.setState({emailAd})
  } */
  
  constructor() {
    super();
    this.state = {
        email: []
        //selecText: '1'
    }
    this.inputEmail = this.inputEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    inputEmail (e) {
        const {value, name} = e.target;
        this.setState({
        [name]: value        
        })
        console.log(e.target.value);
        
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddEmail(this.state);

  }




  /* render() {
    return (
      <View>
        <Text style={{fontSize: 23, color: 'white'}}>Insert Email</Text>
        <TextInput
        style={{height: 50, width: 300, color: 'white', fontSize: 23, borderColor: 'white', borderBottomWidth: 1}}
        onChange={this.onChangeText}
        value={this.props.emailAd}
        underlineColorAndroid={'transparent'}
        />
      </View>
    );
    console.log(this.state.emailAd);
  } */

  render() {
    return (
      <View>
        <Text style={{fontSize: 23, color: 'white'}}>Insert Email</Text>
        
            <TextInput 
            style={{height: 50, width: 300, color: 'black', backgroundColor: 'white', fontSize: 23, borderColor: 'white', borderBottomWidth: 1}}
            name="email" 
            underlineColorAndroid={'transparent'}
            onChange={this.inputEmail}
            />
            {/* <div className="form-group">
                <select
                    name="selecText"
                    className="form-control"
                    value={this.state.selecText}
                    onChange={this.inputEmail}
                >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                </select>
           </div> */}
          <TouchableHighlight style={{marginTop:15, paddingTop: 15, paddingBottom: 15, borderColor: 'white', borderWidth: 1}}
          onPress={this.handleSubmit}
          >
            <Text 
              
              style={{textAlign: 'center', color: 'white', fontSize: 20 }}
            
            >SAVE</Text>
          </TouchableHighlight>
            
        

      </View>
    );
  }


}


