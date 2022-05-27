import * as yup from "yup";

const serializedUserShema = yup.object().shape({
  id: yup.string().uuid().required(),
  name: yup.string().required(),
  email: yup.string().required(),
  isAdm: yup.boolean().required(),
});

const serializedUsersShema = yup
  .array()
  .of(
    yup.object().shape({
      id: yup.string().uuid().required(),
      name: yup.string().required(),
      email: yup.string().required(),
      isAdm: yup.boolean().required(),
    })
  )
  .nullable();

export { serializedUsersShema, serializedUserShema };
