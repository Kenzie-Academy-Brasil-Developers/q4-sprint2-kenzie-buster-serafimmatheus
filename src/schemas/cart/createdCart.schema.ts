import * as yup from "yup";

const cretedCartSchema = yup.object().shape({
  quantity: yup.number().positive().integer().required(),
});

export { cretedCartSchema };
