import { ProductList } from "./ProductList";
import { ProductEdit } from "./ProductEdit";
import { ProductCreate } from "./ProductCreate";
import PhotoIcon from "@mui/icons-material/Photo";

export default {
  list: ProductList,
  edit: ProductEdit,
  create: ProductCreate,
  recordRepresentation: "reference",
  icon: PhotoIcon,
  options: { label: "Poster |||| Posters" },
};
