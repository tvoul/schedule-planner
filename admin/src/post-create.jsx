import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput,BooleanInput,PasswordInput } from 'react-admin';


export const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);
 

export const SchoolCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="shortname" />
    </SimpleForm>
  </Create>
);

