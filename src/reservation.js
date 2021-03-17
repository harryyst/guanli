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

import { TopToolbar, ListButton, ShowButton } from 'react-admin';
import dataProvider from './dataProvider';



export const reservationList = props => (
    
<List filters={<ReservationFilter />} {...props}>
        <Datagrid>
            {/* <TextField source="id" /> */}
            <TextField source="user" />
            <TextField source="seat" />
            <TextField source="location" />
            <TextField source="start_time" />
            <TextField source="end_time" />
            <TextField source="date" />

            <EditButton />
        </Datagrid>
    </List>
);

// const PostEditActions = () => {
//     dataProvider.getOne('getuser', { name: "YsT" })
//     .then(response => console.log(response));
// }
    
;

export const reservationEdit = props => (
    <Edit  {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            {/* <ReferenceInput source="userId" reference="users"> */}
                {/* <SelectInput optionText="name" /> */}
            {/* </ReferenceInput> */}
            <TextInput source="seat" />
            <TextInput source="location" />
            <TextInput source="start_time" />
            <TextInput source="end_time" />
            <TextInput source="date" />

            {/* <TextInput source="title" /> */}
            {/* <TextInput multiline source="body" /> */}
        </SimpleForm>
    </Edit>
);

export const reservationCreate = props => (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="user" />
                <TextInput source="seat" />
                <TextInput source="location" />
                <TextInput source="start_time" />
                <TextInput source="end_time" />
                <TextInput source="date" />
            </SimpleForm>
        </Create>
    );

    const ReservationFilter = (props) => (
        <Filter {...props}>
            <TextInput label="Start_time" source="start_time" alwaysOn />
            <TextInput label="End_time" source="end_time"/>
            <TextInput label="Date" source="date"/>
        </Filter>
    );
