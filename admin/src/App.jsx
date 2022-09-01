// in src/App.js
import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import { PostList } from './posts';
import { TeacherList } from "./teachers";
import { SchoolList } from "./schools";
import { InvoiceList, InvoiceEdit,InvoiceCreate } from "./ivoices";
import { PostEdit, TeacherEdit, SchoolEdit} from "./post-edit";
import { PostCreate, TeacherCreate, SchoolCreate} from "./post-create";
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import TeacherIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import InvoiceIcon from '@mui/icons-material/ReceiptOutlined';
import Dashboard from "./Dashboard";
const dataProvider = jsonServerProvider('/data');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="teachers" list={TeacherList} icon={TeacherIcon} edit={TeacherEdit} create={TeacherCreate} />
    <Resource name="schools" list={SchoolList} icon={SchoolIcon} edit={SchoolEdit} create={SchoolCreate} />
    <Resource name="invoices" list={InvoiceList} icon={InvoiceIcon} edit={InvoiceEdit} create={InvoiceCreate} />
    
  </Admin>  
);



export default App;