import React, {useEffect} from "react";

const AppContext = React.createContext();
export function useCreateAppContext() {

}

export function AppContextProvider(props) {

    let [state, setState] = React.useState("loading");

    const fetchData = () => {
        fetch("http://dummyjson.com/test")
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    console.log('context loaded')
                    setState("done");
                }, 1000)

            });
    }

    useEffect(() => {
        setState("loading");
        fetchData()
    }, []);

    const context = useCreateAppContext();

    if (state === "loading") {
        return props.fallback;
    } else {
        return (
            <AppContext.Provider value={{ context }}>
                {props.children}
            </AppContext.Provider>
        );
    }

}