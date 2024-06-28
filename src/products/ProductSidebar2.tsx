import {
  ReferenceManyField,
  ReferenceField,
  SingleFieldList,
} from "react-admin";
import { Box, Typography } from "@mui/material";
import { StarRatingField } from "./StarRating";
import { CustomerView } from "../customers/CustomerView";

export const ProductSidebar2 = () => (
  <Box sx={{ width: 300, mx: "1em" }}>
    <Typography variant="h5" gutterBottom>
      Reviews
    </Typography>
    <ReferenceManyField reference="reviews" target="product_id">
      <SingleFieldList linkType={false} gap={2}>
        <div>
          <StarRatingField sx={{ ml: 7 }} />
          <ReferenceField source="customer_id" reference="customers">
            <CustomerView />
          </ReferenceField>
        </div>
      </SingleFieldList>
    </ReferenceManyField>
  </Box>
);
