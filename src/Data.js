import { createContext, useState } from 'react';


const DataContext = createContext({});

function DataContextProvider({children}) {
    const [data, setData] = useState({
        text: "Hello",
    });

    const methods = {
        setGreeting: (value) => {
            setData({
                ...data,
                text: value
            });
        }
    }

    return <DataContext.Provider value={{...data, ...methods }} children={children} />
}

export { DataContextProvider, DataContext };