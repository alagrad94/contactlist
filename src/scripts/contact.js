const contact = {

    contactBuilder(contactObject) {

        let newContact = document.createElement("div");
        newContact.classList.add("contact");

        let newContactName = document.createElement("h3");
        newContactName.textContent = `Name: ${contactObject.name}`;

        let newContactPhone = document.createElement("p");
        newContactPhone.textContent = `Phone: ${contactObject.phone}`;

        let newContactAddress = document.createElement("p");
        newContactAddress.textContent = `Address: ${contactObject.address}`;

        newContact.appendChild(newContactName);
        newContact.appendChild(newContactPhone);
        newContact.appendChild(newContactAddress);


        return newContact;
    }
}

export default contact;