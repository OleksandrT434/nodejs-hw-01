import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';


export const addOneContact = async () => {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContact = [...contacts, newContact];
    await writeContacts(updatedContact);
};

addOneContact();
