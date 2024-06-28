import fakeRestProvider from "ra-data-fakerest";
import generateData from "data-generator-retail";

export const dataProvider = fakeRestProvider(generateData(), true, 200);
