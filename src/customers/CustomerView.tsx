import { useRecordContext } from "react-admin";
import { Stack, Link, Typography, Avatar } from "@mui/material";
import type { SxProps } from "@mui/material";
import type { Customer } from "data-generator-retail";

export const CustomerView = ({ sx }: { sx?: SxProps }) => {
  const record = useRecordContext<Customer>();
  if (!record) return null;
  return (
    <Stack direction="row" gap={2} sx={sx}>
      <Avatar src={record.avatar} />
      <Stack>
        <Typography variant="h6">
          {record.first_name} {record.last_name}
        </Typography>
        <Link variant="body2" href={`mailto:${record.email}`}>
          {record.email}
        </Link>
        <Typography variant="body2">
          {record.address}
          <br />
          {record.city} {record.zipcode} {record.stateAbbr}
        </Typography>
      </Stack>
    </Stack>
  );
};
