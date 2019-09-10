import React from 'react';

class App extends React.Component{
 state={
     count:1
 };

 formatCount=()=>{
     
      return this.state.count===0?'Zero':this.state.count;
         
 };

 handleIncrement=()=>{
   console.log("Incr++ click")
 };
render(){
    return <div>
        <span>{this.formatCount()}</span>
        <button onClick={this.handleIncrement}>Increment</button>
        </div>;
}
};

export default App;