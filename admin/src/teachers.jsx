import { Datagrid, EmailField, List, TextField, BooleanField, Edit, EditButton, SimpleForm, Create, TextInput, BooleanInput, PasswordInput, required, email } from 'react-admin';
//import { makeStyles } from '@material-ui/core/styles';
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
const validateEmail = email()

const hideValidator = [required(), validateInput]

// Admin wants to 
export const TeacherEdit = () => (
    <Edit title="Edit teachers">
        <SimpleForm>
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput source="initials" />
            <TextInput source="phone" />
            <TextInput label="Email Address" source="email" type="email" validate={validateEmail} />
            <BooleanInput label="hide" source="hide" validate={hideValidator} defaultValue={0} />
            <PasswordInput source="password" />
            <TextInput source="roles" />
        </SimpleForm>
    </Edit>
);

/** Admin wants to create a new teacher with email, intials and colour  
 * The role is set as 'user' as default in db so no need to be set up here  */
export const TeacherCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="initials" />
            <TextInput label="Email Address" source="email" type="email" validate={validateEmail} />
            <TextField source="color" />
            <BooleanInput label="hide" source="hide" validate={hideValidator} defaultValue={0} />
        </SimpleForm>
    </Create>
);
