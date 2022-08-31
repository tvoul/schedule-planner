import { Datagrid, List, TextField,EditButton} from 'react-admin';


// ?? Need filter for List to be able to serach teachers later on ?? (Different feature)
export const SchoolList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="shortName" />
            <EditButton />
        </Datagrid>
    </List>
);