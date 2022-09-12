import {Datagrid, List, TextField, EditButton, BooleanField, Edit, Create, TextInput, BooleanInput,SimpleForm, required, ReferenceInput, SelectInput, UrlField} from 'react-admin';
//import { TimePicker } from '@mui/x-date-pickers';

// classes m-1 school <ReferenceManyField>
// Get rid of rowClick="edit" to be able to click blog link smoothly? 
export const ClassList = () => (
    <List pagination={false}>
        <Datagrid rowClick='edit'>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="shortName" />
            <TextField label="school" source="school" />
            <UrlField source="blog" />
            <BooleanField source="hide" />
            <TextField source="defaultStartTime" />
            <TextField source="defaultEndTime" />
            <TextField source="defaultInvoiceItem" />
            <TextField source="defaultHoursPerDay" />
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

const validator = [required(), validateInput]

// !Edited @R: TextFiled -> TextInput intstead 
export const ClassEdit = () => (
    <Edit title="Edit classes">
        <SimpleForm> 
            <TextInput source="name" />
            <TextInput source="shortName" />
            <ReferenceInput source="school" reference="schools" defaultValue={null} >
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="blog" />
            <BooleanInput source="hide" validate={validator} defaultValue={0}/>
            <TextInput source="defaultStartTime" />
            <TextInput source="defaultEndTime" />
            <ReferenceInput source="defaultInvoiceItem" reference="invoice_items" defaultValue={null} >
                <SelectInput optionText="title"/>
            </ReferenceInput>
            <TextInput source="defaultHoursPerDay" validate={validator} defaultValue={0} />
        </SimpleForm>
    </Edit>

);
// !Edited @R: TextFiled -> TextInput intstead 
export const ClassCreate = props => (
    <Create {...props}>
        <SimpleForm> 
            <TextInput source="name" />
            <TextInput source="shortName" />
            <ReferenceInput source="school" reference="schools"  >
                <SelectInput optionText="name" defaultValue={null}/>
            </ReferenceInput>
            <TextInput source="blog" />
            <BooleanInput source="hide" validate={validator} defaultValue={0} />
            <TextInput source="defaultStartTime" />
            <TextInput source="defaultEndTime" />
            <ReferenceInput source="defaultInvoiceItem" reference="invoice_items" >
                <SelectInput optionText="title" defaultValue={null}/>
            </ReferenceInput>
            <TextInput source="defaultHoursPerDay" validate={validator} defaultValue={0} />
        </SimpleForm>
    </Create>
)

