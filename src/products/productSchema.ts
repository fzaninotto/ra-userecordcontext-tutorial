import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object()
  .shape({
    reference: yup.string().min(5).required(),
    price: yup.number().positive().required(),
    width: yup.number().positive().required(),
    height: yup.number().positive().required(),
    thumbnail: yup.string().url().required(),
    description: yup.string().nullable(),
  })
  .required();

export const resolver = yupResolver(schema);
