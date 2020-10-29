<<<<<<< HEAD
// import React, { useEffect, useState } from "react";
// import NoteItem from "./NoteItem";
// import "../../styles/DashBoard.css";
=======
import React, { useEffect, useState } from 'react';
import NoteItem from './NoteItem';
import "../../styles/DashBoard.css"
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { getNotes, addNote } from "../../../controller/note"
import AddNoteForm from './AddNoteForm';

>>>>>>> bf605b960b90950536d65cd4b546b428987f0b84

// const DashBoardNotes = (props) => {
//   const [notes, setNotes] = useState([]);

<<<<<<< HEAD
//   const addNotesIconStyle = {
//     margin: 0,
//     width: "80px",
//     height: "80px",
//     top: "auto",
//     right: 20,
//     bottom: 20,
//     left: "auto",
//     position: "fixed",
//   };

//   useEffect(() => {
//     setNotes(this.props.location.classItem.notes);
//   }, []);
=======
    const [notes, setNotes] = useState([]);
    
    const [addNoteForm, setAddNoteForm] = useState(false)
>>>>>>> bf605b960b90950536d65cd4b546b428987f0b84

//   return (
//     <div>
//       <h1 className="dashboard-body-title">Notes</h1>
//       <Fab
//         color="primary"
//         aria-label="add"
//         style={addClassIconStyle}
//         onClick={() => setAddClassForm(true)}
//       >
//         <AddIcon />
//       </Fab>
//       {notes.map((note) => {
//         <NoteItem
//           title={note.title}
//           dateCreation={note.dateCreation}
//           dateUpdate={note.lastUpdate}
//         />;
//       })}

<<<<<<< HEAD
//       {/* <NoteItem
//                 title="Program Design"
//                 dateCreation="Aug, 28th"
//                 dateUpdate="Aug, 30th"
//             />
//             <NoteItem
//                 title="Agile"
//                 dateCreation="Aug, 28th"
//                 dateUpdate="Aug, 30th"
//             />
//             <NoteItem
//                 title="Design Pattern"
//                 dateCreation="Aug, 28th"
//                 dateUpdate="Aug, 30th"
//             />
//             <NoteItem
//                 title="Midterm Review"
//                 dateCreation="Aug, 28th"
//                 dateUpdate="Aug, 30th"
//             /> */}
//     </div>
//   );
// };

// export default DashBoardNotes;
=======
    const handleAddNote = (newNote) => {
        addNote(newNote, (response) => {
            if(response.status){
                setNotes(previousNotes => [...previousNotes, newNote])
            } else {
                //Handle Error
            }
            setAddNoteForm(false)
        })
    }

    useEffect(() => {
        const classItem = props.location.state 
        console.log(classItem);
        getNotes(classItem.id, (response) => {
            if(response.status){
                setNotes(response.data)
            } else {
                //Handle Error
            }
        })
    }, [])

    return (
        <div>
            <h1 className="dashboard-body-title">Notes</h1>
            <Fab color="primary" aria-label="add" style={addNotesIconStyle} onClick={() => {setAddNoteForm(true)}}>
                <AddIcon/>
            </Fab>
            <AddNoteForm
                formStatus={addNoteForm} 
                classItem ={props.location.state}
                handleClose={() => setAddNoteForm(false)} 
                addNote={(newNote) => handleAddNote(newNote)}
            />
            {notes.map(note => (
                <NoteItem
                    key={note.id}
                    title={note.title}
                    dateCreation={note.creationDate.toLocaleDateString("en-US")}
                    dateUpdate={note.lastUpdate.toLocaleDateString("en-US")}
                />
            ))}

            {/* <NoteItem
                title="Program Design"
                dateCreation="Aug, 28th"
                dateUpdate="Aug, 30th"
            />
            <NoteItem
                title="Agile"
                dateCreation="Aug, 28th"
                dateUpdate="Aug, 30th"
            />
            <NoteItem
                title="Design Pattern"
                dateCreation="Aug, 28th"
                dateUpdate="Aug, 30th"
            />
            <NoteItem
                title="Midterm Review"
                dateCreation="Aug, 28th"
                dateUpdate="Aug, 30th"
            /> */}
        </div>
    )
}


export default DashBoardNotes
>>>>>>> bf605b960b90950536d65cd4b546b428987f0b84
