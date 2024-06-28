import { Admin, ListGuesser, Resource } from "react-admin";

import { dataProvider } from "./dataProvider";
import products from "./products";
import orders from "./orders";
import customers from "./customers";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="orders" {...orders} />
    <Resource name="customers" {...customers} />
    <Resource name="products" {...products} />
  </Admin>
);
