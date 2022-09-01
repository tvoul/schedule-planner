import { Datagrid, EmailField, List, TextField, BooleanField, EditButton } from 'react-admin';

// ?? Need filter for List to be able to serach teachers later on ?? (Different feature)
export const TeacherList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="firstname" />
            <TextField source="lastname" />
            <TextField source="initials" />
            <TextField source="phone" />
            <EmailField source="email" />
            <TextField source="color" />
            <BooleanField source="hide" />
            <TextField source="password" />
            <TextField source="roles" />
            <EditButton />
        </Datagrid>
    </List>
);


export const TeacherEdit = () => (
    <Edit title="Edit teachers">
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput source="initials" />
            <TextInput source="phone" />
            <TextInput label="Email Address" source="email" type="email" />
            <BooleanInput label="hide" source="hide" />
            <PasswordInput source="password" />
            <TextInput source="roles" />
        </SimpleForm>
    </Edit>
);


export const TeacherCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput source="initials" />
            <TextInput source="phone" />
            <TextInput label="Email Address" source="email" type="email" />
            <BooleanInput label="hide" source="hide" />
            <PasswordInput source="password" />
            <TextInput source="roles" />
        </SimpleForm>
    </Create>
)
