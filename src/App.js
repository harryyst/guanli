import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');



const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider}  dataProvider={dataProvider}>
        {/* <Resource name="user" list={UserList} icon={UserIcon}/> */}

        <Resource name="user" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    </Admin>
);
export default App;
