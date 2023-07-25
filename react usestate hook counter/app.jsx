import React from 'react'
     class Counter extends React.Component {
        constructor(props) {
           super(props)
          this.state = {
            count: 0,
                     }
           }
    increment ()  =>  {
    this.setState(prevState =>  ({ count: prevState.count + 1 }))
    }
    decrement () =>   {
    this.setState(prevState   => ({ count: prevState.count - 1 }))
    }
  render() {
      return (
            <div>
            <button onClick={this. increment}>Click to increment</button> 
            <button onClick={this.decrement} >Click to decrement</button> <p>{this.state.count}</p>
            </div>
         )
       }
    }
