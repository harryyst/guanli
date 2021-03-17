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



// export const seatList = props => (
    
// <List filters={<seatFilter />} {...props}>
//         <Datagrid>
//             {/* <TextField source="id" /> */}
//             <TextField source="name" />
//             <TextField source="site" />
//             <TextField source="description" />
//             <DateField source="startime" options={{hour:"numeric"}} showTime/>

//             <DateField source="endtime" options={{hour:"numeric"}} showTime/>
//             <BooleanField label="启用" source="openOrnot" />
//             <EditButton />
//         </Datagrid>
//     </List>
// );

// // const PostEditActions = () => {
// //     dataProvider.getOne('getuser', { name: "YsT" })
// //     .then(response => console.log(response));
// // }
    
// ;



// export const seatEdit = props => (
//     <Edit  {...props}>
//         <SimpleForm>
//             {/* <TextInput disabled source="id" /> */}
//             {/* <ReferenceInput source="userId" reference="users"> */}
//                 {/* <SelectInput optionText="name" /> */}
//             {/* </ReferenceInput> */}
//             <TextInput source="name" />
//             <TextInput source="site" />
//             {/* <TextInput source="avaTime" /> */}
//             <BooleanInput source="openOrnot" />
//             <TextInput source="phone"/>
//             <DateTimeInput source="startime" />
//             <DateTimeInput source="endtime" />
//             <TextInput source="description" />
//             {/* <TextInput source="title" /> */}
//             {/* <TextInput multiline source="body" /> */}
//         </SimpleForm>
//     </Edit>
// );

// export const seatCreate = props => (
//         <Create name="asd" {...props}>
//             <SimpleForm>
//                 <TextInput source="name" />
//                 <TextInput source="price" />
//                 <TextInput source="avaTime" />
//                 <TextInput source="canUse" />
//                 <TextInput source="desp" />
                
//             </SimpleForm>
//         </Create>
//     );
export default class Dashboard extends Component {
    state = {};

    initProps = {
        basePath: "/shopseats",
        hasCreate: false,
        hasEdit: false,
        hasList: true,
        hasShow: false,
        location: { pathname: "/", search: "", hash: "", state: undefined },
        match: { path: "/", url: "/", isExact: true, params: {} },
        options: {
        },
        permissions: null,
        resource: "dashboard-stats",
        perPage: 5
    };

    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {

        if (location.search) {
            //regex from: https://stackoverflow.com/a/8649003/1501205
            let queryParams = JSON.parse('{"' + decodeURI(location.search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
            let perPage = queryParams.perPage;
            let page = queryParams.page;
            this.initProps.perPage = perPage;
            this.initProps.page = page;
            this.initProps.location = location;
            this.setState({'initProps': this.initProps})

            }

        });
    }
    componentWillUnmount() {
        this.unlisten();
    }


    componentDidMount() {

        this.setState({'initProps': this.initProps});

        dataProvider(GET_LIST, 'stats', {
            sort: { field: 'date', order: 'DESC' },
            pagination: { page: 1, perPage: 50 },
        })
        .then(response => {
            this.setState({'stats':  response.data});
        });
    }

    render() {

        const {
            initProps
        } = this.state;

        if(!initProps) {
            return false;
        }


        return <Card>
            <CardHeader title="Welcome to the Dashboard" />


            <List {...initProps} >
                    <Datagrid>
                        <TextField source="description" />
                        <TextField source="state" />
                        <TextField source="date" />
                    </Datagrid>
                </List>

        </Card>;

    }
}