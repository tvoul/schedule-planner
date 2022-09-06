import { Datagrid, List, TextField, BooleanField, EditButton, Edit, Create, TextInput, BooleanInput, SimpleForm, required} from 'react-admin';


export const CourseList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="shortName" />
            <TextField source="class" />
            <TextField source="points" />
            <TextField source="startDate" />
            <TextField source="endDate" />
            <TextField source="plan" />
            <TextField source="invoiceItem" />
            <TextField source="hoursPerDay" />
            <BooleanField source="hide" />
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

// !Edited @R: TextFiled -> TextInput intstead 
export const CourseEdit = () => (
    <Edit title="Edit courses">
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="shortName" />
            <TextInput source="class" />
            <TextInput source="points" />
            <TextInput source="startDate" />
            <TextInput source="endDate" />
            <TextInput source="plan" />
            <TextInput source="invoiceItem" />
            <TextInput source="hoursPerDay" />
            <BooleanInput source="hide" validate={hideValidator} defaultValue={0}/>
        </SimpleForm>
    </Edit>
);

export const CourseCreate = props => (
    <Create {...props}>
        <SimpleForm> 
            <TextInput source="name" />
            <TextInput source="shortName" />
            <TextInput source="class" />
            <TextInput source="points" />
            <TextInput source="startDate" />
            <TextInput source="endDate" />
            <TextInput source="plan" />
            <TextInput source="invoiceItem" />
            <TextInput source="hoursPerDay" />
            <BooleanInput source="hide" validate={hideValidator} defaultValue={0}/>
        </SimpleForm>
    </Create>
);
