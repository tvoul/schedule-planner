// in src/App.js
import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import { TeacherList, TeacherEdit, TeacherCreate } from "./teachers";
import { SchoolList, SchoolEdit, SchoolCreate } from "./schools";
import { InvoiceItemList, InvoiceItemEdit,InvoiceItemCreate } from "./ivoice-item";
import jsonServerProvider from 'ra-data-json-server';
import TeacherIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import InvoiceItemIcon from '@mui/icons-material/ReceiptOutlined';
import Dashboard from "./Dashboard";
const dataProvider = jsonServerProvider('/data');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="teachers" list={TeacherList} icon={TeacherIcon} edit={TeacherEdit} create={TeacherCreate} />
    <Resource name="schools" list={SchoolList} icon={SchoolIcon} edit={SchoolEdit} create={SchoolCreate} />
    <Resource name="invoiceItems" list={InvoiceItemList} icon={InvoiceItemIcon} edit={InvoiceItemEdit} create={InvoiceItemCreate} />
    
  </Admin>  
);



export default App;