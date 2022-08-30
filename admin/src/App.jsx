// in src/App.js
import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import { PostList } from './posts';
import { PostEdit } from "./post-edit";
import { PostCreate} from "./post-create";
import { UserList } from './users';
import { TeacherList } from "./teachers";
import { TeacherEdit } from "./post-edit";
import  {TeacherCreate } from "./post-create"; 
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import TeacherIcon from '@mui/icons-material/Person'
import Dashboard from "./Dashboard";
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// <Resource name="users" list={ListGuesser} />

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="teachers" list={TeacherList} icon={TeacherIcon} edit={TeacherEdit} create={TeacherCreate} />
   
    
  </Admin>  
);
// edit={PostTeachers} create={TeacherCreate} need to be added in follwoing sprint 
//<Resource name="teachers" list={TeacherList} icon={TeacherIcon} />  

export default App;