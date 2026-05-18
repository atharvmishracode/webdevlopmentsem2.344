import { useState } from 'react';
import './count.css';

function App() {
    const [count, setCount] = useState(1);

    return (
        <div>
            <h1>Counter Application</h1>
            <h1>{count}</h1>
            <div className="button-container">
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

export default App;