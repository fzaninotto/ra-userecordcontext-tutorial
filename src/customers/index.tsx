import type { Customer } from "data-generator-retail";
import PeopleIcon from "@mui/icons-material/People";

import { CustomerList } from "./CustomerList";
import { CustomerShow } from "./CustomerShow";

export default {
  list: CustomerList,
  show: CustomerShow,
  icon: PeopleIcon,
  recordRepresentation: (record: Customer) =>
    `${record.first_name} ${record.last_name}`,
};
