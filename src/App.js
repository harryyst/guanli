import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList ,Show} from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import { reservationList, reservationEdit, reservationCreate } from './reservation';
import { vipList, vipEdit, vipCreate } from './vips';
import { shopList, shopEdit, shopCreate,shopShow } from './shops';
import { seatList, seatEdit, seatCreate } from './seat';
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
        <Resource name="reservation" list={reservationList} edit={reservationEdit} create={reservationCreate}/>
        <Resource name="vip" list={vipList} edit={vipEdit} create={vipCreate}/>
        <Resource name="shop" list={shopList} edit={shopEdit} create={shopCreate} show={shopShow}/>
        {/* <Resource name="user1" list={UserList}/> */}
        <Resource name="seat" list={seatList} edit={seatEdit} create={seatCreate} />

    </Admin>


);
export default App;
