import React from 'react';
import CardItem from './CardItem';
import "../../styles/DashBoard.css"
import { Link } from "react-router-dom"

const DashBoardClasses = (props) => {


    return (

        <div>
            <h1 className="dashboard-body-title">Classes</h1>
            <div className="row dashboard-class-container">
                <Link to="/dashboard/course" className="dashboard-link-style">
                    <CardItem 
                        className="col-lg-3 col-md-6, col-sm-12"
                        imgUrl="https://i.pinimg.com/originals/be/96/a1/be96a12fe9f5fd8eaae8518455b4b6a3.png"
                        title="Software Engineer"
                        subtitleOne="0 notes"
                        subtitleTwo="created by Dung"
                        subtitleThree="accessed by Dung, Sam, Ronald, Steven, Bhupal, etc"
                        
                    />
                </Link>
                

                <Link to="/dashboard/course" className="dashboard-link-style">
                    <CardItem 
                        className="col-lg-3 col-md-6, col-sm-12"
                        imgUrl="https://i.pinimg.com/originals/be/96/a1/be96a12fe9f5fd8eaae8518455b4b6a3.png"
                        title="Data Structures"
                        subtitleOne="0 notes"
                        subtitleTwo="created by Dung"
                        subtitleThree="accessed by Dung, Sam, Ronald, Steven, Bhupal, etc"
                    
                    />
                </Link>
                

                <Link to="/dashboard/course" className="dashboard-link-style">
                    <CardItem 
                        className="col-lg-3 col-md-6, col-sm-12"
                        imgUrl="https://i.pinimg.com/originals/be/96/a1/be96a12fe9f5fd8eaae8518455b4b6a3.png"
                        title="Database"
                        subtitleOne="0 notes"
                        subtitleTwo="created by Dung"
                        subtitleThree="accessed by Dung, Sam, Ronald, Steven, Bhupal, etc"
                    />
                </Link>
                


                <Link to="/dashboard/course" className="dashboard-link-style">
                    <CardItem 
                        className="col-lg-3 col-md-6, col-sm-12"
                        imgUrl="https://i.pinimg.com/originals/be/96/a1/be96a12fe9f5fd8eaae8518455b4b6a3.png"
                        title="Statistics"
                        subtitleOne="0 notes"
                        subtitleTwo="created by Dung"
                        subtitleThree="accessed by Dung, Sam, Ronald, Steven, Bhupal, etc"
                    /> 
                </Link>
                

            </div>

        </div>
        

    )
}


export default DashBoardClasses