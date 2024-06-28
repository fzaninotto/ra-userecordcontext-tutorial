import { EmailField, Show, SimpleShowLayout, TextField } from "react-admin";
import { CustomerView } from "./CustomerView";

export const CustomerShow = () => (
  <Show>
    <CustomerView sx={{ m: 2 }} />
  </Show>
);
