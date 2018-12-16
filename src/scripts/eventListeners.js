import contactCollection from "./contactCollection";
import contactList from "./contactList";

const eventListeners = {

    handleSaveButton () {
        let contactName = document.getElementById("contact_name").value;
        let contactPhone = document.getElementById("contact_phone").value;
        let contactAddress = document.getElementById("contact_address").value;

        let contactObject = {
            "name": `${contactName}`,
            "phone": `${contactPhone}`,
            "address": `${contactAddress}`
        }
        contactCollection.postContactObject(contactObject);
        location.reload(true);
    }
}

export default eventListeners;