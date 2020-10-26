import {db, apiResponse} from "./api/firebase"


const addClass = (newClass, callback) => {
    db.collection("classes").doc(newClass.id).set(newClass)
    .then(function() {
        console.log("Add course sucessfully!");
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
            classes.push(doc.data())
        });
        callback(apiResponse(true, "Getting classes sucessfully.", classes));
    })
    .catch(function(error) {
        console.error("Error when getting classes: ", error);
        callback(apiResponse(false, "There's some error! Please try again", null));
    });
}


export {
    addClass,
    getClases
}