import { Datagrid, List, TextField, EditButton, Edit, SimpleForm, TextInput, Create,  } from 'react-admin';

// ?? Need filter for List to be able to serach teachers later on ?? (Different feature)
export const InvoiceItemList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="unit" />
            <TextField source="netPrice" />
            <EditButton />
        </Datagrid>
    </List>
);

export const InvoiceItemCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="school" />
            <TextInput source="title" />
            <TextInput source="unit" />
            <TextInput source="netPrice" />
        </SimpleForm>
    </Create>
)

export const InvoiceItemEdit = () => (
    <Edit title="Edit Invoice">
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="school" />
            <TextInput source="title" />
            <TextInput source="unit" />
            <TextInput source="netPrice" />
        </SimpleForm>
    </Edit>
)