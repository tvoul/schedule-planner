import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput,BooleanInput,PasswordInput } from 'react-admin';

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


export const SchoolEdit = () => (
  <Edit title="Edit schools">
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="shortname" />
    </SimpleForm>
  </Edit>
  
);

