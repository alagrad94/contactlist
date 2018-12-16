import eventListeners from "./eventListeners";

const contactInputForm = {

    contactFormBuilder() {
        let contactForm = document.querySelector(".contactForm");
        contactForm.addEventListener("click", function(event){
            event.preventDefault()
        });

        let contactField = document.createElement("fieldset");
        let contactInput = document.createElement("input");
        contactInput.setAttribute("id", "contact_name");
        contactInput.setAttribute("address", "text");

        let contactLabel = document.createElement("label");
        contactLabel.setAttribute("for", "contact_name");
        contactLabel.textContent = "Name: ";

        contactField.appendChild(contactLabel);
        contactField.appendChild(contactInput);
        contactForm.appendChild(contactField);

        let phoneField = document.createElement("fieldset");
        let phoneInput = document.createElement("input");
        phoneInput.setAttribute("id", "contact_phone");
        phoneInput.setAttribute("type", "text");

        let phoneLabel = document.createElement("label");
        phoneLabel.setAttribute("for", "contact_phone");
        phoneLabel.textContent = "Phone: ";

        phoneField.appendChild(phoneLabel);
        phoneField.appendChild(phoneInput);
        contactForm.appendChild(phoneField);

        let addressField = document.createElement("fieldset");
        let addressInput = document.createElement("input");
        addressInput.setAttribute("id", "contact_address");
        addressInput.setAttribute("type", "text");

        let addressLabel = document.createElement("label");
        addressLabel.setAttribute("for", "contact_address");
        addressLabel.textContent = "Address: ";

        addressField.appendChild(addressLabel);
        addressField.appendChild(addressInput);
        contactForm.appendChild(addressField);

        let saveButton = document.createElement("button");
        saveButton.setAttribute("id", "saveBtn");
        saveButton.textContent = "Save";
        saveButton.addEventListener("click", eventListeners.handleSaveButton);
        contactForm.appendChild(saveButton);
        }
};

export default contactInputForm;