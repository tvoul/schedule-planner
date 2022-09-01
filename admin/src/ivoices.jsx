import { Datagrid, List, TextField, EditButton, Edit, SimpleForm, TextInput, Create,  } from 'react-admin';

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

export const InvoiceCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="school" />
            <TextInput source="customHeadline" />
            <TextInput source="yourReference" />
            <TextInput source="ourReference" />
            <TextInput source="invoiceDate" />
            <TextInput source="dueDate" />
            <TextInput source="invoiceItems" />
        </SimpleForm>
    </Create>
)

export const InvoiceEdit = () => (
    <Edit title="Edit Invoice">
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="school" />
            <TextInput source="customHeadline" />
            <TextInput source="yourReference" />
            <TextInput source="ourReference" />
            <TextInput source="invoiceDate" />
            <TextInput source="dueDate" />
            <TextInput source="invoiceItems" />
        </SimpleForm>
    </Edit>
)