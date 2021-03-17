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
    BooleanInput,
    Show,
    Tab,
    TabbedShowLayout,
    ReferenceManyField,
    RichTextField,

} from 'react-admin';
import AddCommentButton from './AddCommentButton';

import { TopToolbar, ListButton, ShowButton } from 'react-admin';



export const shopList = props => (
    
<List {...props}>
        <Datagrid>
            {/* <TextField source="id" /> */}
            <TextField source="name" />
            <TextField source="site" />
            <TextField source="description" />
            <DateField source="startime" options={{hour:"numeric"}} showTime/>

            <DateField source="endtime" options={{hour:"numeric"}} showTime/>
            <BooleanField label="启用" source="openOrnot" />
            {/* <ListButton label="seats" basePath="/seat" /> */}
            <ShowButton />
            <EditButton />

        </Datagrid>
    </List>
);

// const PostEditActions = () => {
//     dataProvider.getOne('getuser', { name: "YsT" })
//     .then(response => console.log(response));
// }
    
;

const dateFormatter = v => {
    // v is a `Date` object
    if (!(v instanceof Date) || isNaN(v)) return;
    const pad = '00';
    const hour = v.getHours().toString();
    
    
    return `${hour}`;
  };

export const shopEdit = props => (
    <Edit  {...props}>
        <SimpleForm>
            {/* <TextInput disabled source="id" /> */}
            {/* <ReferenceInput source="userId" reference="users"> */}
                {/* <SelectInput optionText="name" /> */}
            {/* </ReferenceInput> */}
            <TextInput source="name" />
            <TextInput source="site" />
            {/* <TextInput source="avaTime" /> */}
            <BooleanInput source="openOrnot" />
            <TextInput source="phone"/>
            <DateTimeInput source="startime" />
            <DateTimeInput source="endtime" />
            <TextInput source="description" />
            {/* <TextInput source="title" /> */}
            {/* <TextInput multiline source="body" /> */}
        </SimpleForm>
    </Edit>
);

export const shopShow = props => (
    <Show {...props}>
      <TabbedShowLayout>
        <Tab label="Deatail">
          <TextField source="name" />
          <TextField source="site" />
          <TextField source="phone" />
        </Tab>
        
        <Tab label="seat" path="seat">
          <ReferenceManyField
            addLabel={false}
            reference="seat"
            target="location"
            sort={{ field: 'num', order: 'DESC' }}
          >
            <Datagrid>
              <TextField source="num" />
              <TextField source="user" />
            </Datagrid>
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  );

export const seatList = props =>(
    <List {...props}>
        <Datagrid>
            {/* <TextField source="id" /> */}
            <TextField source="num" />
            <TextField source="site" />
            <TextField source="description" />
            <DateField source="startime" options={{hour:"numeric"}} showTime/>

            <BooleanField label="启用" source="openOrnot" />
            {/* <ListButton basePath="/shopseats" /> */}

            <EditButton />

        </Datagrid>
    </List>
);

export const shopCreate = props => (
        <Create name="asd" {...props}>
            <SimpleForm>
            <TextInput source="name" />
            <TextInput source="site" />
            {/* <TextInput source="avaTime" /> */}
            <BooleanInput source="openOrnot" />
            <TextInput source="phone"/>
            <DateTimeInput source="startime" />
            <DateTimeInput source="endtime" />
            <TextInput source="description" />
            </SimpleForm>
        </Create>
    );

    const shopFilter = (props) => (
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    );