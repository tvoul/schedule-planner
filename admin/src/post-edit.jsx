import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const PostEdit = () => (
  <Edit title="Edit post">
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export const TeacherEdit = () => (
  <Edit title="Edit teachers">
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="initials" />
      <TextInput source="phone" />
      <TextInput label="Email Address" source="email" type="email" />
      <BooleanInput label="hide" source="hide" />
      <PasswordInput source="password" />
      <TextInput source="roles" />
    </SimpleForm>
  </Edit>
);

export const SchoolEdit = () => (
  <Edit title="Edit schools">
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="shortname" />
    </SimpleForm>
  </Edit>

);

export const CourseEdit = () => (
  <Edit title="Edit courses">
    <SimpleForm>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="shortname" />
      <TextField source="class" />
      <TextField source="points" />
      <TextField source="startDate" />
      <TextField source="endDate" />
      <TextField source="plan" />
      <TextField source="invoiceItem" />
      <TextField source="hoursPerDay" />
      <BooleanField source="hide" />
    </SimpleForm>
  </Edit>
);
