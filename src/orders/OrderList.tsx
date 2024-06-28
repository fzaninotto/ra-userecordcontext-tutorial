import {
  AutocompleteInput,
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
} from "react-admin";

export const OrderList = () => (
  <List
    filters={[
      <TextInput source="q" label="Search" resettable alwaysOn />,
      <ReferenceInput source="customer_id" reference="customers" alwaysOn>
        <AutocompleteInput sx={{ width: 200 }} />
      </ReferenceInput>,
    ]}
  >
    <Datagrid>
      <TextField source="reference" />
      <DateField source="date" />
      <ReferenceField source="customer_id" reference="customers" />
      <NumberField source="total_ex_taxes" />
      <NumberField source="delivery_fees" />
      <NumberField source="tax_rate" />
      <NumberField source="taxes" />
      <NumberField source="total" />
      <TextField source="status" />
      <BooleanField source="returned" />
    </Datagrid>
  </List>
);
