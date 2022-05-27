import * as yup from "yup";

const createDvdSchema = yup.object().shape({
  name: yup.string().required(),
  duration: yup.string().required(),
  quantity: yup.number().positive().integer().required(),
  price: yup.number().positive().required(),
});

export { createDvdSchema };
