import contactCollection from "./contactCollection";
import contact from "./contact";

const contactList = {

    createContactList() {
        contactCollection.getAllContacts()
        .then (allContacts => {

            let contactDocFagment = document.createDocumentFragment();
            allContacts.forEach(contactItem => {
                let contactHTML = contact.contactBuilder(contactItem);
                contactDocFagment.appendChild(contactHTML);
                });
            let contactContainer = document.getElementById("contact_container");
            contactContainer.appendChild(contactDocFagment);
        })
    }
}

export default contactList;