import React from 'react';

class Counter extends React.Component{

    state = {
        count : 0
    }

    increment = () =>{
        this.setState({
            count : this.state.count + 1
        });
    }

    decrement = () => {
        this.setState({
            count : this.state.count - 1
        });
    }
    render(){
        return(
            <div>
                <h1>Counter App with React</h1>
                <button onClick = {this.increment}>+</button>
                <span>{this.state.count}</span>
                <button onClick = {this.decrement}>-</button>
            </div>
        );
    }
}

export default Counter;