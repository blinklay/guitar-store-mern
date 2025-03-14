import { AUTH_FORM_TYPES } from "../../constants";
import { routes } from "../../routes/routes";
import PageTitle from "../PageTitle";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";
import FormRow from "./FormRow";

export default function AuthForm({ type, onSubmit }) {
  const {
    watch,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <>
      <PageTitle>
        {type === AUTH_FORM_TYPES.REGISTER ? "Регистрация" : "Авторизация"}
      </PageTitle>

      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          watch={watch}
          setValue={setValue}
          register={register}
          fieldName="phone"
          errors={errors}
          placeholder="+7-999-999-99-99"
        />
        <FormRow
          watch={watch}
          setValue={setValue}
          register={register}
          fieldName="password"
          errors={errors}
        />

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
