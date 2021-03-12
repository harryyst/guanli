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
    DateField,
    BooleanField,
    DateTimeInput,
    DateInput,
    BooleanInput
} from 'react-admin';

import { TopToolbar, ListButton, ShowButton } from 'react-admin';



export const seatList = props => (
    
<List filters={<SeatFilter />} {...props}>
        <Datagrid>
            {/* <TextField source="id" /> */}
            <TextField source="num" />
            <TextField source="location" />
            <TextField source="user" />
            {/* <DateField source="startime" options={{hour:"numeric"}} showTime/> */}

            {/* <DateField source="endtime" options={{hour:"numeric"}} showTime/> */}
            <BooleanField label="被使用" source="available" />
            <EditButton />
        </Datagrid>
    </List>
);

// const PostEditActions = () => {
//     dataProvider.getOne('getuser', { name: "YsT" })
//     .then(response => console.log(response));
// }
    
;



export const seatEdit = props => (
    <Edit  {...props}>
        <SimpleForm>
            {/* <TextInput disabled source="id" /> */}
            {/* <ReferenceInput source="userId" reference="users"> */}
                {/* <SelectInput optionText="name" /> */}
            {/* </ReferenceInput> */}
            <TextInput source="num" />
            <TextInput source="user" />
            {/* <TextInput source="avaTime" /> */}
            <BooleanInput source="available" />
            <TextInput source="location" />
            {/* <TextInput source="title" /> */}
            {/* <TextInput multiline source="body" /> */}
        </SimpleForm>
    </Edit>
);

export const seatCreate = props => (
        <Create name="asd" {...props}>
            <SimpleForm>
                <TextInput source="num" />
                <BooleanInput source="available" />
                <TextInput source="location" /> 
            </SimpleForm>
        </Create>
    );

    const SeatFilter = (props) => (
        <Filter {...props}>
            <TextInput label="Search" source="location" alwaysOn />
            
        </Filter>
    );