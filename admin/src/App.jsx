// in src/App.js
import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import { TeacherList, TeacherEdit, TeacherCreate } from "./teachers";
import { SchoolList, SchoolEdit, SchoolCreate } from "./schools";
import { InvoiceItemList, InvoiceItemEdit,InvoiceItemCreate } from "./invoice_items";
import { CourseList,CourseEdit,CourseCreate } from "./courses";
import { ClassList,ClassEdit,ClassCreate } from './classes'; 
import jsonServerProvider from 'ra-data-json-server';
import TeacherIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import InvoiceItemIcon from '@mui/icons-material/ReceiptOutlined';
import CourseIcon from '@mui/icons-material/AutoStories';
import Dashboard from "./Dashboard";
const dataProvider = jsonServerProvider('/data');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="teachers" list={TeacherList} icon={TeacherIcon} edit={TeacherEdit} create={TeacherCreate} />
    <Resource name="schools" list={SchoolList} icon={SchoolIcon} edit={SchoolEdit} create={SchoolCreate} />
    <Resource name="invoice_items" list={InvoiceItemList} icon={InvoiceItemIcon} edit={InvoiceItemEdit} create={InvoiceItemCreate} />
    <Resource name="courses" list={CourseList} icon={CourseIcon} edit={CourseEdit} create={CourseCreate} />
    <Resource name="classes" list={ClassList} edit={ClassEdit} create={ClassCreate} />
  </Admin>

);



export default App;