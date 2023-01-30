import React, { useState } from 'react';
import './App.css';

function BasicComponent() {
    return <h1>Based</h1>;
}

type SomeProps = {
    a: number;
    b: string;
};

function Props(props: SomeProps) {
    return <h1> Passed props: {JSON.stringify(props)} </h1>;
}

function FunctionalCounter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Inc</button>
        </div>
    );
}

type ClassCounterState = { count: number };

class ClassCounter extends React.Component<{}, ClassCounterState> {
    state: ClassCounterState = {
        count: 0
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Inc</button>
            </div>
        );
    }
}

function App() {
    const props = { a: 1, b: 'two' };
    return (
        <div>
            <BasicComponent/>
            <Props {...props}/>
            <FunctionalCounter/>
            <ClassCounter/>
        </div>
    );
}

export default App;
