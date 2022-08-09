import {useState, useEffect} from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword,setketword] = useState("");
    const onClick = () => {
        setValue((prev) => prev +1 );
    }

    const onChange = (event) => {
        setketword(event.target.value)
    }
    console.log("I run all the time")
    const iRunOnlyOnce = () => {
        console.log("I run only once")
    }
    useEffect(iRunOnlyOnce, [])
    return (
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here...."/>
            <h1> {counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;
