import React, { useState } from 'react';
import "../../styles/DashBoard.css"
import DashBoardClasses from './DashBoardClasses';
import DashBoardNotes from './DashBoardNotesPage';

const DashBoardPageBody = () => {
    
    const [page, setPage] = useState("classes");
    const [focusClass, setFocusClass] = useState({
        name: ""
    });


    return(
        <div>
            <DashBoardClasses/>
        </div>
        
    )
}

export default DashBoardPageBody