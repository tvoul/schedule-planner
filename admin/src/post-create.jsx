import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

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

export const TeacherCreate = props => (
  <Create {...props}>
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
  </Create>
)