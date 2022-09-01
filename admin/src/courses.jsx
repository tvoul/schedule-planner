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
// !Edited @R: TextFiled -> TextInput intstead 
export const CourseEdit = () => (
    <Edit title="Edit courses">
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="shortname" />
            <TextInput source="class" />
            <TextInput source="points" />
            <TextInput source="startDate" />
            <TextInput source="endDate" />
            <TextInput source="plan" />
            <TextInput source="invoiceItem" />
            <TextInput source="hoursPerDay" />
            <BooleanInput source="hide" />
        </SimpleForm>
    </Edit>
);

export const CourseCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput  source="shortname" />
            <TextInput  source="class" />
            <TextInput  source="points" />
            <TextInput source="startDate" />
            <TextInput source="endDate" />
            <TextInput source="plan" />
            <TextInput source="invoiceItem" />
            <TextInput source="hoursPerDay" />
            <BooleanInput source="hide" />
        </SimpleForm>
    </Create>
);
