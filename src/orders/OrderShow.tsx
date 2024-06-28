import {
  ArrayField,
  BooleanField,
  Datagrid,
  DateField,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { CustomerView } from "../customers/CustomerView";

export const OrderShow = () => (
  <Show>
    <SimpleShowLayout>
      <SimpleShowLayout direction="row" gap={2} sx={{ p: 0 }}>
        <TextField source="reference" sx={sxInline} />
        <DateField source="date" />
      </SimpleShowLayout>
      <ReferenceField source="customer_id" reference="customers">
        <CustomerView />
      </ReferenceField>
      <ArrayField source="basket">
        <Datagrid>
          <ReferenceField source="product_id" reference="products" />
          <NumberField source="quantity" />
        </Datagrid>
      </ArrayField>
      <SimpleShowLayout direction="row" gap={2} sx={{ p: 0 }}>
        <NumberField source="total_ex_taxes" sx={sxInline} />
        <NumberField source="delivery_fees" sx={sxInline} />
        <NumberField source="tax_rate" sx={sxInline} />
        <NumberField source="taxes" sx={sxInline} />
        <NumberField source="total" sx={sxInline} />
      </SimpleShowLayout>
      <SimpleShowLayout direction="row" gap={2} sx={{ p: 0 }}>
        <TextField source="status" sx={sxInline} />
        <BooleanField source="returned" sx={sxInline} />
      </SimpleShowLayout>
    </SimpleShowLayout>
  </Show>
);

const sxInline = { width: 100, display: "inline-block" };
