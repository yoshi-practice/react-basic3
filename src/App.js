import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      changeResult: "change default value",
      inputResult: "input default value",
      keyupResult: "keyup default value"
    };
  }

  onChange(e){
    this.setState(
      {changeResult: e.target.value}
    );
  }

  onInput(e){
    this.setState(
      {inputResult: e.target.value}
    );
  }

  onKeyup(e){
    this.setState(
      {keyupResult: e.target.value}
    )
  }

  render(){
    return(
      <div>
        <input value={this.state.changeResult} onChange={this.onChange.bind(this)} placeholder="change" />
        {this.state.changeResult}
        <br />
      </div>
    )
  }
}

export default App;
