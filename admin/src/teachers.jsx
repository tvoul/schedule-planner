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
const validateEmail = email()
const emailValidator= [required(), validateEmail]
// Not the most beautiful way to set up but only worked this way.. 
const validateInitial = async (values) => {
    const errors = {};
    if (!values.initial) {
        errors.initial = "Initials are required!"
    }
};
const initialValidator = [required(), validateInitial]

const validatecolor = async (values) => {
    const errors = {};
    if (!values.color) {
        errors.color = "color is required!"
    }
};

const colorValidator = [required(), validatecolor]


// Probably we can add authorization that only user who logged in with the same email can edit password
export const TeacherEdit = () => (
    <Edit title="Edit teachers">
        <SimpleForm>
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput source="initials" validate={initialValidator} />
            <TextInput source="phone" />
            <TextInput label="Email Address" source="email" type="email" validate={emailValidator} />
            <TextInput source="color" validate={colorValidator} />
            <BooleanInput label="hide" source="hide" defaultValue={0} />
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
            <TextInput source="initials" validate={initialValidator} />
            <TextInput label="Email Address" source="email" type="email" validate={emailValidator} />
            <TextInput source="color" validate={colorValidator}/>
            <BooleanInput label="hide" source="hide" defaultValue={0} />
        </SimpleForm>
    </Create>
);
