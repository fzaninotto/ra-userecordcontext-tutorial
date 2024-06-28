import {
  useGetOne,
  useGetManyReference,
  useRecordContext,
  RecordContextProvider,
} from "react-admin";
import { Stack, Box, Typography, Divider } from "@mui/material";
import type { Review, Product, Customer } from "data-generator-retail";
import { StarRatingField } from "./StarRating";
import { CustomerView } from "../customers/CustomerView";

export const ProductSidebar = () => {
  const product = useRecordContext<Product>();
  const { data: reviews } = useGetManyReference<Review>(
    "reviews",
    { id: product?.id, target: "product_id" },
    { enabled: !!product }
  );
  return (
    <Box sx={{ width: 300, mx: "1em" }}>
      <Typography variant="h5" gutterBottom>
        Reviews
      </Typography>
      <Stack gap={2} divider={<Divider flexItem />}>
        {reviews?.map((review) => (
          <div key={review.id}>
            <StarRatingField record={review} />
            <Author customer_id={review.customer_id} />
          </div>
        ))}
      </Stack>
    </Box>
  );
};

const Author = ({ customer_id }: { customer_id: number }) => {
  const { data, error, isLoading } = useGetOne<Customer>("customers", {
    id: customer_id,
  });
  if (isLoading || error) {
    return null;
  }
  return (
    <RecordContextProvider value={data}>
      <CustomerView />
    </RecordContextProvider>
  );
};
