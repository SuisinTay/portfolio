import { Field, ErrorMessage } from "formik";
import React from "react";

type FormInputFieldProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  as?: string;
};

const FormInputField: React.FC<FormInputFieldProps> = ({
  as = "input",
  ...rest
}) => {
  return (
    <>
      <Field {...rest} as={as} />
      <ErrorMessage
        name={rest?.name}
        component="div"
        className="text-red-500"
      />
    </>
  );
};

export default FormInputField;
