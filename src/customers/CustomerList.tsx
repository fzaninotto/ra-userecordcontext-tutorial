import {
  Datagrid,
  DateField,
  EmailField,
  List,
  NumberField,
  SearchInput,
  TextField,
} from "react-admin";

export const CustomerList = () => (
  <List
    sort={{ field: "last_seen", order: "DESC" }}
    filters={[<SearchInput source="q" alwaysOn />]}
  >
    <Datagrid>
      <TextField source="first_name" />
      <TextField source="last_name" />
      <EmailField source="email" />
      <TextField source="city" />
      <DateField source="last_seen" />
      <DateField source="latest_purchase" />
      <NumberField source="nb_orders" />
      <NumberField source="total_spent" />
    </Datagrid>
  </List>
);
