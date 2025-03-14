import { AUTH_FORM_TYPES } from "../../constants";
import { routes } from "../../routes/routes";
import PageTitle from "../PageTitle";
import Input from "./Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";
import DangerMessage from "./DangerMessage";
import { useState } from "react";
import CleanFieldButton from "./CleanFieldButton";

export default function AuthForm({ type, onSubmit }) {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = (fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: "",
    });
  };

  return (
    <>
      <PageTitle>
        {type === AUTH_FORM_TYPES.REGISTER ? "Регистрация" : "Авторизация"}
      </PageTitle>

      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mt-3">
          <label htmlFor="phone" className="font-bold">
            Номер телефона
          </label>
          <div className="relative w-full">
            <Input
              id="phone"
              name="phone"
              type="text"
              placeholder="+7-999-999-99-99"
              {...register("phone")}
              onChange={onChange}
              value={formData.phone}
            />
            {!!formData.phone.length && (
              <CleanFieldButton onClick={() => onClick("phone")} />
            )}
          </div>
          {errors.phone && (
            <DangerMessage>{errors.phone.message}</DangerMessage>
          )}
        </div>

        <div className="flex flex-col gap-2 mt-3">
          <label htmlFor="password" className="font-bold">
            Пароль
          </label>
          <div className="relative w-full">
            <Input
              name="password"
              id="password"
              type="password"
              {...register("password")}
              onChange={onChange}
              value={formData.password}
            />
            {!!formData.password.length && (
              <CleanFieldButton onClick={() => onClick("password")} />
            )}
          </div>

          {errors.password && (
            <DangerMessage>{errors.password.message}</DangerMessage>
          )}
        </div>

        <div className="flex gap-3 items-center mt-5">
          <button
            type="submit"
            disabled={errors.phone || errors.password}
            className="bg-accent py-2 px-4  font-bold rounded-md text-white"
          >
            {type === AUTH_FORM_TYPES.REGITER ? "Регистрация" : "Войти"}
          </button>

          {type === AUTH_FORM_TYPES.REGISTER && (
            <div className="flex gap-3 items-center">
              Есть аккаунт?{" "}
              <Link to={routes.LOGIN} className="text-action underline">
                Войти!
              </Link>
            </div>
          )}

          {type === AUTH_FORM_TYPES.LOGIN && (
            <div className="flex gap-3 items-center">
              Нет аккаунта?{" "}
              <Link to={routes.REGISTER} className="text-action underline">
                Регистрация!
              </Link>
            </div>
          )}
        </div>
      </form>
    </>
  );
}
