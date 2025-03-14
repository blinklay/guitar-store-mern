import CleanFieldButton from "./CleanFieldButton";
import DangerMessage from "./DangerMessage";
import Input from "./Input";

export default function FormRow({
  register,
  fieldName,
  type = "text",
  errors,
  placeholder = "",
  setValue,
  watch,
}) {
  const fieldValue = watch(fieldName);

  return (
    <div className="flex flex-col gap-2 mt-3">
      <label htmlFor={fieldName} className="font-bold">
        Номер телефона
      </label>
      <div className="relative w-full">
        <Input
          id={fieldName}
          name={fieldName}
          type={type}
          placeholder={placeholder}
          {...register(fieldName)}
        />
        {fieldValue && (
          <CleanFieldButton onClick={() => setValue(fieldName, "")} />
        )}
      </div>
      {errors[fieldName] && (
        <DangerMessage>{errors[fieldName].message}</DangerMessage>
      )}
    </div>
  );
}
