import { Datagrid, List, TextField, EditButton } from 'react-admin';

// ?? Need filter for List to be able to serach teachers later on ?? (Different feature)
export const InvoiceList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="school" />
            <TextField source="customHeadline" />
            <TextField source="yourReference" />
            <TextField source="ourReference" />
            <TextField source="invoiceDate" />
            <TextField source="dueDate" />
            <TextField source="invoiceItems" />
            <EditButton />
        </Datagrid>
    </List>
);
