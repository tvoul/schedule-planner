// in src/App.js
import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import { PostList } from './posts';
import { TeacherList } from "./teachers";
import { SchoolList } from "./schools";
import { CourseList } from "./courses";
import { PostEdit, TeacherEdit, SchoolEdit, CourseEdit } from "./post-edit";
import { PostCreate, TeacherCreate, SchoolCreate, CourseCreate } from "./post-create";
import { PostEdit, TeacherEdit, SchoolEdit, ClassEdit } from "./post-edit";
import { PostCreate, TeacherCreate, SchoolCreate, ClassCreate } from "./post-create";
import { UserList } from './users';
import { ClassList } from './classes';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import TeacherIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import CourseIcon from '@mui/icons-material/AutoStories';
import Dashboard from "./Dashboard";
const dataProvider = jsonServerProvider('/data');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="teachers" list={TeacherList} icon={TeacherIcon} edit={TeacherEdit} create={TeacherCreate} />
    <Resource name="schools" list={SchoolList} icon={SchoolIcon} edit={SchoolEdit} create={SchoolCreate} />
    <Resource name="courses" list={CourseList} icon={CourseIcon} edit={CourseEdit} create={CourseCreate} />
    <Resource name="classes" list={ClassList} edit={ClassEdit} create={ClassCreate} />
  </Admin>

);
// edit={PostTeachers} create={TeacherCreate} need to be added in follwoing sprint 
//<Resource name="teachers" list={TeacherList} icon={TeacherIcon} />  


export default App;