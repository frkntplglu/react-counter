import React, {Component} from 'react';
import './App.css';
import Counter from './components/Counter.js'
class App extends Component{
  
  
  
  render(){
    return (
      <div className="container">
        
        <div className="wrapper">
          <Counter />
        </div>
        
        
        
      </div>
    );
  }
}

export default App;
