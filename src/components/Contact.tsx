import { useState } from "react";
import { Form, Formik } from "formik";
import FormInputField from "../containers/FormInputField";
import { formValidationSchema } from "../constants/validation";
import { siteConfig } from "../constants/siteConfig";
import Reveal from "./Reveal";

type Status = "idle" | "success" | "error";

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  };

  return (
    <section id="contact" className="bg-accent py-16 text-base md:py-24">
      <div className="container-page">
        <h2 className="max-w-[16ch] font-serif text-6xl leading-[0.95] sm:text-8xl">
          Have something worth <em>building</em>?
        </h2>

        <div className="mt-14 grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="max-w-[38ch] text-lg text-base/75">
              I'm happy to talk about frontend leadership, migrations and
              product engineering. Email is the quickest way.
            </p>
            <p className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={copyEmail}
                className="text-left text-lg underline decoration-base/40 underline-offset-[6px] transition-colors hover:decoration-base"
              >
                {siteConfig.email}
              </button>
              <span role="status" className="text-sm font-medium">
                {copied ? "Copied" : ""}
              </span>
            </p>
            <p className="mt-6 flex gap-6 text-sm">
              <a className="underline decoration-base/40 underline-offset-[6px] hover:decoration-base" href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a className="underline decoration-base/40 underline-offset-[6px] hover:decoration-base" href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a className="underline decoration-base/40 underline-offset-[6px] hover:decoration-base" href={siteConfig.resume} target="_blank" rel="noopener noreferrer">
                Resume ↗
              </a>
            </p>
          </div>

          <Reveal className="md:col-span-7">
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={formValidationSchema}
              onSubmit={async (values, { resetForm }) => {
                setStatus("idle");
                try {
                  const response = await fetch(siteConfig.formEndpoint, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                    },
                    body: JSON.stringify(values),
                  });
                  if (response.ok) {
                    setStatus("success");
                    resetForm();
                  } else {
                    setStatus("error");
                  }
                } catch {
                  setStatus("error");
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6" noValidate>
                  <FormInputField onAccent name="name" label="Name" autoComplete="name" />
                  <FormInputField onAccent name="email" label="Email" type="email" autoComplete="email" />
                  <FormInputField onAccent name="message" label="Message" as="textarea" rows={5} />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-md bg-base px-5 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-85 active:translate-y-px disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending…" : "Send message"}
                  </button>
                  <p role="status" className="min-h-6 text-sm">
                    {status === "success" && (
                      <span className="font-medium">Message sent. I'll reply by email.</span>
                    )}
                    {status === "error" && (
                      <span className="font-medium">
                        The message couldn't be sent. Please try again or email me directly.
                      </span>
                    )}
                  </p>
                </Form>
              )}
            </Formik>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
