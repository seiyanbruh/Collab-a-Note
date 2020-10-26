import React, {useContext, useState} from 'react';
import CardItem from './CardItem';
import "../../styles/DashBoard.css"
import { Link } from "react-router-dom"
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Height } from '@material-ui/icons';
import { ClassContext } from "../../context/ClassContext"
import AddClassForm from './AddClassForm';
import { addClass } from "../../../controller/note"
import { useHistory } from 'react-router-dom'

const DashBoardClasses = (props) => {

    const [classes, setClasses] = useContext(ClassContext)

    const history = useHistory();
    
    const [addClassForm, setAddClassForm] = useState(false)

    const addClassIconStyle = {
        margin: 0,
        width: '80px',
        height: '80px',
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    };

    const moveToNotePage = (classItem) => {
        //history.push(`/dashboard/course/${classItem.id}`) 

        history.push({
            pathname: `/dashboard/course/${classItem.id}`,
            classItem,
          });
          
    }

    const handleAddClass = (newClass) => {
        addClass(newClass, (response) => {
            if(response.status){
                setClasses(previousClasses => [...previousClasses, newClass])
            } else {
                //Handle Error
            }
            setAddClassForm(false)
        })
    }

    return (

        <div>
            <h1 className="dashboard-body-title">Classes</h1>
            <Fab color="primary" aria-label="add" style={addClassIconStyle} onClick={() => setAddClassForm(true)}>
                <AddIcon/>
            </Fab>
            <AddClassForm formStatus={addClassForm} handleClose={() => setAddClassForm(false)} addClass={(newClass) => handleAddClass(newClass)}/>
            <div className="row dashboard-class-container">

                {classes.map(classItem => (
                    <CardItem 
                        key={classItem.id}
                        className="col-lg-3 col-md-6, col-sm-12"
                        imgUrl={classItem.coverImg}
                        title={classItem.name}
                        subtitleOne={classItem.notes.length + ` notes`}
                        subtitleTwo={`created by ` + classItem.owner.name}
                        onClick={() => {moveToNotePage(classItem)}}
                    />
                ))}
            </div>

            
        </div>
        

    )
}


export default DashBoardClasses