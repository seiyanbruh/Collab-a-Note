import React from 'react';
import "../../styles/DashBoard.css"

const DashBoardPageHeader = () => {

    return(
        <div className="dashboard-page-header-container">
            <img
                className="header-image" 
                src="https://www.designyourway.net/blog/wp-content/uploads/2018/08/6853035-fall-leaves-background.jpg"/>
            
            <div className="title">
                <h2>Welcome to Fall 2020</h2>
                <p>You have 3 classes</p>
            </div>
        </div>

        
    )

}


export default DashBoardPageHeader;