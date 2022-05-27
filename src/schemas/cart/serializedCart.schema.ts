import * as yup from "yup";

const serializedCartSchema = yup.object().shape({
  id: yup.string().uuid().required(),
  total: yup.number().required(),
  paid: yup.bool().required(),
  user: yup.object().shape({
    id: yup.string().uuid().required(),
    name: yup.string().required(),
    email: yup.string().required(),
    isAdm: yup.boolean().required(),
  }),
  dvd: yup.object().shape({
    id: yup.string().uuid().required(),
    name: yup.string().required(),
    duration: yup.string().required(),
    stock: yup.object().shape({
      id: yup.string().uuid().required(),
      quantity: yup.number().required(),
      price: yup.number().required(),
    }),
  }),
});

const serializedCartPaySchema = yup.object().shape({
  id: yup.string().uuid().required(),
  total: yup.number().required(),
  paid: yup.bool().required(),
});

export { serializedCartSchema, serializedCartPaySchema };
