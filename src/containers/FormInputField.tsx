import { ErrorMessage, Field } from "formik";

type FormInputFieldProps = {
  name: string;
  label: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
  autoComplete?: string;
  onAccent?: boolean;
};

const fieldClass =
  "w-full border-b border-line bg-transparent py-3 text-lg text-ink transition-colors focus:border-accent focus:outline-none";
const fieldOnAccent =
  "w-full border-b border-base/30 bg-transparent py-3 text-lg text-base transition-colors focus:border-base focus:outline-none";

const FormInputField = ({
  name,
  label,
  as = "input",
  onAccent = false,
  ...rest
}: FormInputFieldProps) => (
  <div>
    <label htmlFor={name} className={`block text-sm ${onAccent ? "text-base/70" : "text-muted"}`}>
      {label}
    </label>
    <Field id={name} name={name} as={as} className={onAccent ? fieldOnAccent : fieldClass} {...rest} />
    <ErrorMessage
      name={name}
      component="p"
      className={`mt-2 text-sm ${onAccent ? "font-medium text-base" : "text-red-400"}`}
    />
  </div>
);

export default FormInputField;
