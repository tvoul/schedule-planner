import { Datagrid, List, TextField, EditButton, Edit, SimpleForm, TextInput, Create, required  } from 'react-admin';

export const InvoiceItemList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="unit" />
            <TextField source="netPrice" />
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

const netPriceValidator = [required(), validateInput]

export const InvoiceItemEdit = () => (
    <Edit title="Edit invoice_items">
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="unit" />
            <TextInput source="netPrice" validate={netPriceValidator} defaultValue={0}/>
        </SimpleForm>
    </Edit>
);

export const InvoiceItemCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="unit" />
            <TextInput source="netPrice" validate={netPriceValidator} defaultValue={0} />
        </SimpleForm>
    </Create>
)