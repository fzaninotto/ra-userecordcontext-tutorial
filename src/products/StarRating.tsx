import { Box } from "@mui/material";
import type { SxProps } from "@mui/material";
import Icon from "@mui/icons-material/Stars";
import { useRecordContext } from "react-admin";
import { Review } from "data-generator-retail";

export const StarRatingField = (props: { record?: Review; sx?: SxProps }) => {
  const review = useRecordContext<Review>(props);
  if (!review) return null;
  return (
    <Box
      component="span"
      display="flex"
      sx={{
        opacity: 0.87,
        whiteSpace: "nowrap",
        ...props.sx,
      }}
    >
      {Array(review.rating)
        .fill(true)
        .map((_, i) => (
          <Icon
            key={i}
            sx={{
              width: 15,
              height: 15,
            }}
          />
        ))}
    </Box>
  );
};
