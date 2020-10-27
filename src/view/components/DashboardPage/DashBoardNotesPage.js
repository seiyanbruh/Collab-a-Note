// import React, { useEffect, useState } from "react";
// import NoteItem from "./NoteItem";
// import "../../styles/DashBoard.css";

// const DashBoardNotes = (props) => {
//   const [notes, setNotes] = useState([]);

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
