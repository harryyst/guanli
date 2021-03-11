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
    DateField
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

import { TopToolbar, ListButton, ShowButton } from 'react-admin';



export const vipList = props => (
    
<List filters={<vipFilter />} {...props}>
        <Datagrid>
            {/* <TextField source="id" /> */}
            <TextField source="name" />
            <TextField source="price" />
            <TextField source="desp" />
            <EditButton />
        </Datagrid>
    </List>
);

// const PostEditActions = () => {
//     dataProvider.getOne('getuser', { name: "YsT" })
//     .then(response => console.log(response));
// }
    
;

export const vipEdit = props => (
    <Edit  {...props}>
        <SimpleForm>
            {/* <TextInput disabled source="id" /> */}
            {/* <ReferenceInput source="userId" reference="users"> */}
                {/* <SelectInput optionText="name" /> */}
            {/* </ReferenceInput> */}
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="avaTime" />
            <TextInput source="canUse" />
            <TextInput source="desp" />
            {/* <TextInput source="title" /> */}
            {/* <TextInput multiline source="body" /> */}
        </SimpleForm>
    </Edit>
);

export const vipCreate = props => (
        <Create name="asd" {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="price" />
                <TextInput source="avaTime" />
                <TextInput source="canUse" />
                <TextInput source="desp" />
                
            </SimpleForm>
        </Create>
    );

    const vipFilter = (props) => (
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    );