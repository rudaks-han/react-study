import {useEffect} from "react";

function App2() {
    // console.log("process.env: " + process.env.NODE_ENV)

    useEffect(() => {
        fetch("http://dummyjson.com/test")
            .then((res) => res.json())
            .then((data) => {
                console.log('app2 loaded')
            });
    }, []);

    return (
        <>
            <div>App2</div>
        </>
    )
}

export default App2