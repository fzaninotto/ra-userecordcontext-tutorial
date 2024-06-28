import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";
import { Stack } from "@mui/material";
import { ProductSidebar2 } from "./ProductSidebar2";

export const ProductEdit = () => (
  <Edit aside={<ProductSidebar2 />}>
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="reference" />
      <Stack direction="row" gap={1}>
        <NumberInput source="price" />
        <NumberInput source="width" />
        <NumberInput source="height" />
      </Stack>
      <TextInput source="thumbnail" />
      <TextInput source="description" multiline />
    </SimpleForm>
  </Edit>
);
