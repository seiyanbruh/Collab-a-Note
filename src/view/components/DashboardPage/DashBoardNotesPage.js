import React from 'react';
import NoteItem from './NoteItem';
import "../../styles/DashBoard.css"

const DashBoardNotes = (props) => {
    return (
        <div>
            <h1 className="dashboard-body-title">Notes</h1>
            <NoteItem
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
            />
        </div>
    )
}


export default DashBoardNotes