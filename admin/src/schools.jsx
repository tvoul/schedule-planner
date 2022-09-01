import { Datagrid, List, TextField, Edit, EditButton, SimpleForm, Create, TextInput} from 'react-admin';


// ?? Need filter for List to be able to serach teachers later on ?? (Different feature)
export const SchoolList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="shortName" />
            <EditButton />
        </Datagrid>
    </List>
);

export const SchoolEdit = () => (
    <Edit title="Edit schools">
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="shortname" />
        </SimpleForm>
    </Edit>

);

export const SchoolCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="shortname" />
        </SimpleForm>
    </Create>
);

