import * as yup from "yup";

const serializedUpdateUserShema = yup.object().shape({
  name: yup.string().optional(),
  email: yup.string().optional(),
  password: yup.string().optional(),
  isAdm: yup.boolean().optional(),
});

export { serializedUpdateUserShema };
