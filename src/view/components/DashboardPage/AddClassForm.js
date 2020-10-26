import React, { useState } from 'react';
import "../../styles/DashBoard.css"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { v4 as uuidv4 } from 'uuid';


const AddClassForm = (props) => {

    const [newClass, setNewClass] = useState({
        id: "",
        name: "Undefined",
        ownerId: "123123",
        owner: {
            id: "123123",
            name: "Dung Nguyen",
            email: "adron0914@gmail.com"
        },
        creationDate: "Oct 25, 2000",
        lastUpdate: "Oct 25, 2000",
        sharedWith: [],
        notes:[],
        coverImg: "https://i.pinimg.com/originals/be/96/a1/be96a12fe9f5fd8eaae8518455b4b6a3.png"
    })

    const getCurrentTime = () =>{
        return new Date();
    }

    const createNewClassId = () => {
        const id = uuidv4()
        console.log(id)
        return id;
    }

    const handleClassNameChange = (event) => {
        setNewClass({
            ...newClass,
            name: event.target.value
        })
    }

    return (
        <div>
        <Dialog open={props.formStatus} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add class</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Add class to your dashboard.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Class name"
                type="text"
                fullWidth
                onChange={(e) => handleClassNameChange(e)}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={props.handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={() => {

                const id = createNewClassId();
                const creationDate = getCurrentTime();
                const lastUpdate = getCurrentTime();

                props.addClass({
                    ...newClass,
                    id,
                    creationDate,
                    lastUpdate,
                })
            }} color="primary">
                Add
            </Button>
            </DialogActions>
        </Dialog>
    </div>
    )
}


export default AddClassForm