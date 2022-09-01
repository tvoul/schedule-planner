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

export const SchoolCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="shortname" />
    </SimpleForm>
  </Create>
);

export const ClassCreate = props => (
  <Create {...props}>
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
  </Create>
);
export const CourseCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextField source="shortName" />
      <TextField source="school" />
      <TextField source="blog" />
      <BooleanField source="hide" />
      <TextField source="defaultStartTime" />
      <TextField source="defaultEndTime" />
      <TextField source="defaultInvoiceItem" />
      <TextField source="defaultHourPerDay" />
      <EditButton />
    </SimpleForm>
  </Create>
)
