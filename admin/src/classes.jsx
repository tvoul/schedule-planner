import {Datagrid, List, TextField, EditButton, BooleanField, Edit, Create, TextInput, BooleanInput,SimpleForm, required, ReferenceInput, SelectInput} from 'react-admin';
//import { TimePicker } from '@mui/x-date-pickers';

// classes m-1 school <ReferenceManyField>
export const ClassList = () => (
    <List pagination={false}>
        <Datagrid rowClick='edit'>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="shortName" />
            <TextField label="school" source="school" />
            <TextField source="blog" />
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
            <TextInput source="defaultInvoiceItem" defaultValue={null}/>
            <TextInput source="defaultHoursPerDay" validate={validator} defaultValue={0} />
            <EditButton />
        </SimpleForm>
    </Edit>

);
// !Edited @R: TextFiled -> TextInput intstead 
export const ClassCreate = props => (
    <Create {...props}>
        <SimpleForm> 
            <TextInput source="name" />
            <TextInput source="shortName" />
            <ReferenceInput source="school" reference="schools" defaultValue={null} >
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="blog" />
            <BooleanInput source="hide" validate={validator} defaultValue={0} />
            <TextInput source="defaultStartTime" />
            <TextInput source="defaultEndTime" />
            <TextInput source="defaultInvoiceItem" defaultValue={null}/>
            <TextInput source="defaultHoursPerDay" validate={validator} defaultValue={0} />
            <EditButton />
        </SimpleForm>
    </Create>
)

