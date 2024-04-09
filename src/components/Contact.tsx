import { Form, Formik } from "formik";
import { Element } from "react-scroll";
import FormInputField from "../containers/FormInputField";
import { formValidationSchema } from "../constants/validation";

const Contact = () => {
  return (
    <Element
      name="contact"
      className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4"
    >
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={() => {}}
        validationSchema={formValidationSchema}
      >
        {({ isValid }) => (
          <Form
            method="POST"
            action="https://getform.io/f/jbwxwmqa"
            className="flex flex-col max-2-[600px] w-full max-w-[1000px]"
          >
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
                Contact
              </p>
              <p className="text-gray-300 py-4">
                Submit the form below or shoot me an email -
                steveee12343@gmail.com
              </p>
            </div>
            <FormInputField
              className="bg-[#ccd6f6] p-2"
              type="text"
              placeholder="Name*"
              name="name"
            />

            <FormInputField
              className="mt-4 p-2 bg-[#ccd6f6]"
              type="text"
              placeholder="Email*"
              name="email"
            />

            <FormInputField
              className="bg-[#ccd6f6] mt-4 p-2"
              placeholder="Message*"
              name="message"
              as="textarea"
              cols={30}
              rows={10}
            />

            <button
              disabled={!isValid}
              type="submit"
              className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center disabled:bg-slate-400 disabled:border-slate-100"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Element>
  );
};

export default Contact;
