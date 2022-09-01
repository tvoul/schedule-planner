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

// TextInput/ BooleanInput instead of TextInput/ BooleanInput?? 
export const ClassEdit = () => (
    <Edit title="Edit classes">
        <SimpleForm>
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
        </SimpleForm>
    </Edit>

);

// TextInput/ BooleanInput instead of TextInput/ BooleanInput?? 
export const ClassCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextField source="shortName" />
            <TextField source="school" />
            <TextField source="blog" />
            <BooleanField source="hide" />
            <TextField source="defaultStartTime" />
            <TextField source="defaultEndTime" />
            <TextField source="defaultInvoiceItem" />
            <TextField source="defaultHourPerDay" />
            <EditButton />
        </SimpleForm>
    </Create>
)

