import * as yup from "yup";
const phoneRegExp = /^(\+7|8)?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;


export const validationSchema = yup.object({
  phone: yup.string().matches(phoneRegExp, "Введите корректный номер").required("Введите номер телефона"),
  password: yup
    .string()
    .min(6, "Пароль должен быть минимум 6 символов")
    .required("Введите пароль")
});