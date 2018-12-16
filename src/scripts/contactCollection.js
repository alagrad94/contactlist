import contact from "./contact";

const contactCollection = {

    getAllContacts () {
        return fetch ("http://localhost:8088/contacts")
        .then (response => response.json())
    },

    postContactObject (contactObject){
        fetch("http://localhost:8088/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contactObject)
        })
    }
}

export default contactCollection;