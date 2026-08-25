"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

const projectTypeOptions = [
  "Concept Art",
  "Character Design",
  "Environment Design",
  "Creature / Enemy Design",
  "Visual Development",
  "Art Direction Support",
  "Multiple Services",
  "Other",
];

const budgetOptions = [
  "Under €2,500",
  "€2,500–€5,000",
  "€5,000–€10,000",
  "€10,000–€25,000",
  "€25,000+",
  "Not decided yet",
];

type FormValues = {
  name: string;
  email: string;
  studio: string;
  description: string;
  projectType: string;
  timeline: string;
  budget: string;
  website: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  studio: "",
  description: "",
  projectType: "",
  timeline: "",
  budget: "",
  website: "",
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type SubmissionStatus = "idle" | "submitting" | "success";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your work email.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.studio.trim()) errors.studio = "Please enter your studio or company.";
  if (!values.description.trim()) {
    errors.description = "Please tell us a little about the project.";
  }

  return errors;
}

const inputClasses =
  "w-full min-h-11 border border-border bg-transparent px-4 py-3 text-body text-text placeholder:text-text-muted/60 transition-colors focus:border-accent";

const labelClasses = "text-label text-text-muted";

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const handleChange =
    (field: keyof FormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    // No backend is connected yet — this simulates a submission so the
    // interaction can be reviewed end to end. Wire this up to a real
    // email service before launch.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="border border-border bg-surface p-10 text-center sm:p-14">
        <h2 className="text-project-title">Brief received.</h2>
        <p className="text-body mt-4 text-text-muted">
          Thank you for reaching out. We&apos;ll review your project and get back to you
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Field
          label="Name"
          required
          error={errors.name}
          htmlFor="name"
        >
          <input
            id="name"
            name="name"
            type="text"
            className={inputClasses}
            value={values.name}
            onChange={handleChange("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>

        <Field label="Work Email" required error={errors.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            className={inputClasses}
            value={values.email}
            onChange={handleChange("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>

        <Field label="Studio / Company" required error={errors.studio} htmlFor="studio">
          <input
            id="studio"
            name="studio"
            type="text"
            className={inputClasses}
            value={values.studio}
            onChange={handleChange("studio")}
            aria-invalid={Boolean(errors.studio)}
            aria-describedby={errors.studio ? "studio-error" : undefined}
          />
        </Field>

        <Field label="Website" htmlFor="website">
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://"
            className={inputClasses}
            value={values.website}
            onChange={handleChange("website")}
          />
        </Field>

        <Field label="Project Type" htmlFor="projectType">
          <select
            id="projectType"
            name="projectType"
            className={cn(inputClasses, "appearance-none")}
            value={values.projectType}
            onChange={handleChange("projectType")}
          >
            <option value="">Select an option</option>
            {projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Estimated Timeline" htmlFor="timeline">
          <input
            id="timeline"
            name="timeline"
            type="text"
            placeholder="e.g. 3 months, ongoing"
            className={inputClasses}
            value={values.timeline}
            onChange={handleChange("timeline")}
          />
        </Field>

        <Field label="Budget Range" htmlFor="budget" className="sm:col-span-2">
          <select
            id="budget"
            name="budget"
            className={cn(inputClasses, "appearance-none sm:max-w-xs")}
            value={values.budget}
            onChange={handleChange("budget")}
          >
            <option value="">Select an option</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        label="Project Description"
        required
        error={errors.description}
        htmlFor="description"
      >
        <textarea
          id="description"
          name="description"
          rows={6}
          className={cn(inputClasses, "resize-y")}
          value={values.description}
          onChange={handleChange("description")}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={errors.description ? "description-error" : undefined}
        />
      </Field>

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="text-label inline-flex min-h-11 items-center justify-center border border-accent bg-accent px-7 py-3 text-text transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send Project Brief"}
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

function Field({ label, htmlFor, required, error, className, children }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className={labelClasses}>
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-label text-accent">
          {error}
        </p>
      ) : null}
    </div>
  );
}
