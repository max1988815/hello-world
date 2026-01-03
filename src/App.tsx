import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="container">
            <div className="glass-card fade-in">
                <div className="badge">Project Hello World</div>
                <h1>Future of <br /><span className="accent">Innovation</span></h1>
                <p className="description">
                    Welcome to a premium, high-performance web experience.
                    Built with precision, designed for the future.
                </p>

                <div className="actions">
                    <button onClick={() => setCount((count) => count + 1)}>
                        Counter: {count}
                    </button>
                    <a href="https://github.com" target="_blank" className="secondary-btn">
                        View Source
                    </a>
                </div>

                <div className="status">
                    <span className="dot pulse"></span>
                    System Operational
                </div>
            </div>
        </div>
    )
}

export default App
