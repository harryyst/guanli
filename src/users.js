import * as React from "react";
import { List, Datagrid, TextField, EmailField, DeleteButton } from 'react-admin';
// import dataProvider from './dataProvider';
// const { name } = useGetOne('getuser', { name: "YsT" });
// const Alluser = () => {
//     const { name }=dataProvider.getOne('', ).then(response => console.log(response));
//     return name;
// }

export const UserList = props => (
    <List  {...props}>
        
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            {/* <TextField source="username" /> */}
            {/* <EmailField source="email" /> */}
            {/* <TextField source="address.street" /> */}
            {/* <TextField source="phone" /> */}
            {/* <TextField source="website" /> */}
            {/* <TextField source="company.name" /> */}
        </Datagrid>
    </List>
);