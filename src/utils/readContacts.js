import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
    const filePath = PATH_DB;
    const data = await fs.readFile(filePath, { encoding: 'utf8' });

    console.log('Reading contacts from', data);
    return JSON.parse(data);
};

