import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    Filter,
} from 'react-admin';
import { TopToolbar, ListButton, ShowButton } from 'react-admin';
import dataProvider from './dataProvider';



export const PostList = props => (
    
<List filters={<PostFilter />} {...props}>
        <Datagrid>
            {/* <TextField source="id" /> */}
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="vips" />
            <EditButton />
        </Datagrid>
    </List>
);

// const PostEditActions = () => {
//     dataProvider.getOne('getuser', { name: "YsT" })
//     .then(response => console.log(response));
// }
    
;

export const PostEdit = props => (
    <Edit  {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            {/* <ReferenceInput source="userId" reference="users"> */}
                {/* <SelectInput optionText="name" /> */}
            {/* </ReferenceInput> */}
            <TextInput source="name" />
            {/* <TextInput source="title" /> */}
            {/* <TextInput multiline source="body" /> */}
        </SimpleForm>
    </Edit>
);

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

    const PostFilter = (props) => (
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    );