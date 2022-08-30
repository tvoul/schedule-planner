import { Datagrid, List, TextField} from 'react-admin';

//Teachers: id, firstname.lastname, initials, phone,email,color,hide,password,roles
// ?? Need filter for List to be able to serach teachers later on ?? (Different feature)
export const SchoolList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="shortname" />
            <EditButton />
        </Datagrid>
    </List>
);