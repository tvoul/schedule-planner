import {Datagrid, List, TextField, EditButton, BooleanField, } from 'react-admin';


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

)