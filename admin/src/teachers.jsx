import { Datagrid, EmailField, List, TextField, BooleanField, Edit, EditButton, SimpleForm, Create, TextInput, BooleanInput, PasswordInput, required, } from 'react-admin';

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

const validateInput = async (values) => {
    const errors = {};
    if (!values.hide) {
        errors.hide = "This value is required!";
    }
 }

 const hideValidator = [required(), validateInput]

export const TeacherEdit = () => (
    <Edit title="Edit teachers">
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput source="initials" />
            <TextInput source="phone" />
            <TextInput label="Email Address" source="email" type="email" />
            <BooleanInput label="hide" source="hide" validate={hideValidator} defaultValue={0} />
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
            <BooleanInput label="hide" source="hide" validate={hideValidator} defaultValue={0} />
            <PasswordInput source="password" />
            <TextInput source="roles" />
        </SimpleForm>
    </Create>
);
//?? Maybe email need to be validated if it is correct form ?? 
// const validateEmail = email(); 
// Add validate={validateEmail} to <TextInput label="Email Addres" ....