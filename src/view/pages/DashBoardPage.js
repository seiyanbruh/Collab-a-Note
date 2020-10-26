import React, { useContext, useEffect } from 'react';
import DashBoardPageBody from '../components/DashboardPage/DashBoardPageBody';
import DashBoardPageHeader from '../components/DashboardPage/DashBoardPageHeader';
import "../styles/DashBoard.css"
import {ClassContext, ClassProvider} from "../context/ClassContext";
import { getClases } from "../../controller/note"
import DashBoardPageContent from '../components/DashboardPage/DashBoardPageContent';

const DashboardPage = () => {

    return(
        <ClassProvider>
            <DashBoardPageContent/>
        </ClassProvider>
    )
}

export default DashboardPage