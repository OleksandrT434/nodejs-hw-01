import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
    const deletCont = [];
    await writeContacts(deletCont);
};
removeAllContacts();
