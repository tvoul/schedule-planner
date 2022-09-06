import {Datagrid, List, TextField, EditButton, BooleanField, Edit, Create, TextInput, BooleanInput,SimpleForm } from 'react-admin';


export const ClassList = () => (
    <List>
        <Datagrid rowClick='edit'>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="shortName" />
            <TextField source="school" />
            <TextField source="blog" />
            <BooleanField source="hide" />
            <TextField source="defaultStartTime" />
            <TextField source="defaultEndTime" />
            <TextField source="defaultInvoiceItem" />
            <TextField source="defaultHourPerDay" />
            <EditButton />

        </Datagrid>
    </List>

);

// !Edited @R: TextFiled -> TextInput intstead 
export const ClassEdit = () => (
    <Edit title="Edit classes">
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="shortName" />
            <TextInput source="school" />
            <TextInput source="blog" />
            <BooleanInput source="hide" />
            <TextInput source="defaultStartTime" />
            <TextInput source="defaultEndTime" />
            <TextInput source="defaultInvoiceItem" />
            <TextInput source="defaultHourPerDay" />
            <EditButton />
        </SimpleForm>
    </Edit>

);
// !Edited @R: TextFiled -> TextInput intstead 
export const ClassCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="shortName" />
            <TextInput source="school" />
            <TextInput source="blog" />
            <BooleanInput source="hide" />
            <TextInput source="defaultStartTime" />
            <TextInput source="defaultEndTime" />
            <TextInput source="defaultInvoiceItem" />
            <TextInput source="defaultHourPerDay" />
            <EditButton />
        </SimpleForm>
    </Create>
)

