import { Datagrid, List, TextField, BooleanField, EditButton, Edit, Create, TextInput, BooleanInput, SimpleForm } from 'react-admin';


export const CourseList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="shortname" />
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
// ?? Need to use <TextInput> instaead of TextField for Edit/ Create ?? 
export const CourseEdit = () => (
    <Edit title="Edit courses">
        <SimpleForm>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="shortname" />
            <TextField source="class" />
            <TextField source="points" />
            <TextField source="startDate" />
            <TextField source="endDate" />
            <TextField source="plan" />
            <TextField source="invoiceItem" />
            <TextField source="hoursPerDay" />
            <BooleanField source="hide" />
        </SimpleForm>
    </Edit>
);

export const CourseCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="shortname" />
            <TextField source="class" />
            <TextField source="points" />
            <TextField source="startDate" />
            <TextField source="endDate" />
            <TextField source="plan" />
            <TextField source="invoiceItem" />
            <TextField source="hoursPerDay" />
            <BooleanField source="hide" />
        </SimpleForm>
    </Create>
);
