import React, {useState, createContext} from 'react';

export const ClassContext = createContext();


export const ClassProvider = (props) => {
    const [classes, setClasses] = useState([])


    return(
        <ClassContext.Provider value={[classes, setClasses]}>
            {props.children}
        </ClassContext.Provider>
    );
}