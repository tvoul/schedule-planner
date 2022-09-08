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

// Setting up valiation for required fields to create/edit a teacher 
const validateCreate = async (values) => {
    const errors = {};
    if (!values.email && !values.initials && !values.color && !values.hide) {
        errors.email, errors.initials, errors.color, errors.hide = "This values is required! "
    }
}
const validateEmail = email()
const createValidator = [required(), validateCreate]

// Probably we can add authorization that only user who logged in with the same email can edit password
export const TeacherEdit = () => (
    <Edit title="Edit teachers">
        <SimpleForm>
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput source="initials" validate={createValidator} />
            <TextInput source="phone" />
            <TextInput label="Email Address" source="email" type="email" validate={validateEmail, createValidator} />
            <BooleanInput label="hide" source="hide" validate={createValidator}  defaultValue={0} />
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
            <TextInput source="initials" validate={createValidator}  />
            <TextInput label="Email Address" source="email" type="email" validate={validateEmail, validateCreate} />
            <TextField source="color" validate={createValidator}  />
            <BooleanInput label="hide" source="hide" validate={createValidator}  defaultValue={0} />
        </SimpleForm>
    </Create>
);
