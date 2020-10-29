import {db, apiResponse} from "./api/firebase"


const addClass = (newClass, callback) => {
    db.collection("classes").doc(newClass.id).set(newClass)
    .then(function() {
        console.log("Add class sucessfully!");
        callback(apiResponse(true, "Add class successfully.", null))
    })
    .catch(function(error) {
        console.error("Error when adding class: ", error);
        callback(apiResponse(false, "There's some error! Please try again", null))
    });
}

const getClases = (ownerId, callback) => {
    db.collection("classes").where("ownerId", "==", "123123")
    .get()
    .then(function(querySnapshot) {
        let classes = []
        querySnapshot.forEach(function(doc) {
            var classItem = doc.data()
            classItem.creationDate = classItem.creationDate.toDate()
            classItem.lastUpdate = classItem.lastUpdate.toDate()
            classes.push(classItem)
        });
        callback(apiResponse(true, "Getting classes sucessfully.", classes));
    })
    .catch(function(error) {
        console.error("Error when getting classes: ", error);
        callback(apiResponse(false, "There's some error! Please try again", null));
    });
}


const addNote = (newNote, callback) => {
    db.collection("notes").doc(newNote.id).set(newNote)
    .then(function() {
        console.log("Add note sucessfully!");
        callback(apiResponse(true, "Add note successfully.", null))
    })
    .catch(function(error) {
        console.error("Error when adding note: ", error);
        callback(apiResponse(false, "There's some error! Please try again", null))
    });
}


const getNotes = (classId, callback) => {
    db.collection("notes").where("classId", "==", classId)
    .get()
    .then(function(querySnapshot) {
        let notes = []
        querySnapshot.forEach(function(doc) {
            var note = doc.data();
            note.creationDate = note.creationDate.toDate();
            note.lastUpdate = note.lastUpdate.toDate();
            notes.push(note)
        });
        callback(apiResponse(true, "Getting notes sucessfully.", notes));
    })
    .catch(function(error) {
        console.error("Error when getting notes: ", error);
        callback(apiResponse(false, "There's some error! Please try again", null));
    });
}


export {
    addClass,
    getClases,
    addNote,
    getNotes
}