import { Datagrid, List, TextField, BooleanField, EditButton, Edit, Create, TextInput, BooleanInput, SimpleForm, required, ReferenceInput, SelectInput} from 'react-admin';


export const CourseList = () => (
    <List pagination={false}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="shortName" />
            <TextField source="class" />
            <TextField source="points" />
            <TextField source="startDate" />
            <TextField source="endDate" />
            <TextField source="plan" />
            <ReferenceField label="invoiceItem" source="id" reference="invoice_items">
                <TextField source="invoiceItem" />
            </ReferenceField> 
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
            <ReferenceInput label="class" source="id" reference="classes">
                <SelectInput label="class" source="class" />
            </ReferenceInput>
            <TextInput source="points" />
            <TextInput source="startDate" />
            <TextInput source="endDate" />
            <TextInput source="plan" />
            <ReferenceInput label="invoice Item" source="id" reference="invoice_items">
                <TextInput label="invoice Item" source="invoiceItem" />
            </ReferenceInput>
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
            <ReferenceInput label="class" source="id" reference="classes">
                <SelectInput label="class" source="class" />
            </ReferenceInput>
            <TextInput source="points" />
            <TextInput source="startDate" />
            <TextInput source="endDate" />
            <TextInput source="plan" />
            <ReferenceInput label="invoice Item" source="id" reference="invoice_items">
                <TextInput label="invoice Item" source="invoiceItem" />
            </ReferenceInput>
            <TextInput source="hoursPerDay" />
            <BooleanInput source="hide" validate={hideValidator} defaultValue={0}/>
        </SimpleForm>
    </Create>
);
