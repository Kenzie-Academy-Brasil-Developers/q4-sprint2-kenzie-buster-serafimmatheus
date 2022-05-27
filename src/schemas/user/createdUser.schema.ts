import * as yup from "yup";

const createdUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().default(false).optional(),
});

export { createdUserSchema };
