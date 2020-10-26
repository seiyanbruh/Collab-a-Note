import React, { useContext, useEffect } from 'react';
import DashBoardPageBody from './DashBoardPageBody';
import DashBoardPageHeader from './DashBoardPageHeader';
import "../../styles/DashBoard.css"
import {ClassContext, ClassProvider} from "../../context/ClassContext";
import { getClases } from "../../../controller/note"


const DashBoardPageContent = () => {

    const [classes, setClasses] = useContext(ClassContext)

    useEffect(()=> {
        getClases("123123", (response) => {
            if(response.status){
                setClasses(response.data)
            } else {
                //Handle Error
            }
        })
    }, [])

    return(
        <div className="dashboard-page-container">
            <DashBoardPageHeader/>
            <DashBoardPageBody/>
        </div>
    )
}

export default DashBoardPageContent