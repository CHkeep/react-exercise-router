import React from 'react';

class  User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Input: '',
      Gender: "Male",
      Work:   "IT industy "    
    };
    this.handlenameChange = this.handlenameChange.bind(this);
    this.handlegenderChange = this.handlegenderChange.bind(this);  
    this.handleworkChange = this.handleworkChange.bind(this);  
  }
  handlenameChange(event){
    this.setState({
     Input: event.target.value
    });
  }

  handlegenderChange(event){
    this.setState({
      Gender: event.target.value
    });
  }

  handleworkChange(event){
    this.setState({
      Gender: event.target.value
    });
  }

  render() {    
    return (
      <div>
       <form>
        <label>
          UserName:
          <input className='input' type='text' name='name' value={this.state.Input} onChange={this.handlenameChange}/>
        </label>

        <label>
          Gender:
          <select value={this.state.Gender} onChange={this.handlegenderChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>  
        </label> 

        <label>
          Work:
          <select value={this.state.Gender} onChange={this.handleworkChange}>
            <option value="IT industy">IT industy</option>
            <option value="doctor">doctor</option>
          </select>  
        </label>  
       

      </form>
      </div>
    );
  };
}

export default User;