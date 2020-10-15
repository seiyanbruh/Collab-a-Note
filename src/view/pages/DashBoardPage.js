import React from 'react';
import DashBoardPageBody from '../components/DashboardPage/DashBoardPageBody';
import DashBoardPageHeader from '../components/DashboardPage/DashBoardPageHeader';
import "../styles/DashBoard.css"


const DashboardPage = () => {

    return(
        <div className="dashboard-page-container">
            <DashBoardPageHeader/>
            <DashBoardPageBody/>
        </div>
    )
}

export default DashboardPage