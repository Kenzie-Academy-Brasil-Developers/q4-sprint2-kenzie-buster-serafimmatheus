import * as yup from "yup";

const serializedDvdSchema = yup.object().shape({
  id: yup.string().uuid().required(),
  name: yup.string().required(),
  duration: yup.string().required(),
  stock: yup.object().shape({
    id: yup.string().uuid().required(),
    quantity: yup.number().required(),
    price: yup.number().required(),
  }),
});

const serializedDvdsSchema = yup
  .array()
  .of(
    yup.object().shape({
      id: yup.string().uuid().required(),
      name: yup.string().required(),
      duration: yup.string().required(),
      stock: yup.object().shape({
        id: yup.string().uuid().required(),
        quantity: yup.number().required(),
        price: yup.number().required(),
      }),
    })
  )
  .nullable();

export { serializedDvdSchema, serializedDvdsSchema };
