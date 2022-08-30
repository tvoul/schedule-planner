// in src/App.js
import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import { PostList } from './posts';
import { TeacherList } from "./teachers";
import { SchoolList } from "./schools";
import { PostEdit, TeacherEdit, SchoolEdit } from "./post-edit";
import { PostCreate, TeacherCreate, SchoolCreate} from "./post-create";
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import TeacherIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import Dashboard from "./Dashboard";
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
//const dataProvider = simpleRestProvider('https://localhost:7666/data/');
// <Resource name="users" list={ListGuesser} />

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="teachers" list={TeacherList} icon={TeacherIcon} edit={TeacherEdit} create={TeacherCreate} />
    <Resource name="schools" list={SchoolList} icon={SchoolIcon} edit={SchoolEdit} create={SchoolCreate} />
    
  </Admin>  
);
// edit={PostTeachers} create={TeacherCreate} need to be added in follwoing sprint 
//<Resource name="teachers" list={TeacherList} icon={TeacherIcon} />  

export default App;