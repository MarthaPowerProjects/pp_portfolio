"use client";

import { submitConsultation } from "@/app/actions/consultation";
import {
  initialConsultationState,
  type ConsultationField,
  type ConsultationValues,
} from "@/app/actions/consultation-state";
import { needOptions, site } from "@/app/content/site";
import cn from "@/app/utils/className";
import { useActionState, useEffect, useState, type ReactNode } from "react";
import { Button } from "./ui/Button";

const emptyValues: ConsultationValues = {
  name: "",
  contact: "",
  company: "",
  need: "",
  message: "",
};

const fieldOrder: ConsultationField[] = [
  "name",
  "contact",
  "company",
  "need",
  "message",
];

const controlClass =
  "w-full rounded-lg border border-edge bg-ink px-4 py-3 text-[16px] text-white placeholder:text-mute/70 transition-colors hover:border-mute/60 aria-invalid:border-volt";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitConsultation,
    initialConsultationState,
  );
  const [values, setValues] = useState<ConsultationValues>(emptyValues);

  useEffect(() => {
    if (state.status !== "error" || !state.errors) return;
    const first = fieldOrder.find((field) => state.errors?.[field]);
    if (!first) return;
    document.getElementById(first)?.focus();
  }, [state]);

  if (state.status === "success") {
    return (
      <p
        role="status"
        className="max-w-[22ch] font-head text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.15] font-bold tracking-[-0.03em]"
      >
        {state.message}
      </p>
    );
  }

  const setField = (field: ConsultationField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const text = (
    field: "name" | "contact" | "company",
    props: { type?: string; autoComplete?: string; inputMode?: "email" },
  ) => (
    <input
      id={field}
      name={field}
      type={props.type ?? "text"}
      autoComplete={props.autoComplete}
      value={values[field]}
      onChange={(event) => setField(field, event.target.value)}
      aria-invalid={Boolean(state.errors?.[field])}
      aria-describedby={state.errors?.[field] ? `${field}-error` : undefined}
      className={controlClass}
    />
  );

  return (
    <form action={formAction} noValidate aria-busy={pending} className="grid gap-6">
      <Field id="name" label={site.contact.fields.name} error={state.errors?.name}>
        {text("name", { autoComplete: "name" })}
      </Field>
      <Field
        id="contact"
        label={site.contact.fields.contact}
        error={state.errors?.contact}
      >
        {text("contact", { autoComplete: "email" })}
      </Field>
      <Field
        id="company"
        label={site.contact.fields.company}
        hint={site.contact.optional}
      >
        {text("company", { autoComplete: "organization" })}
      </Field>

      <fieldset
        aria-describedby={state.errors?.need ? "need-error" : undefined}
        className="min-w-0"
      >
        <legend className="mb-2 text-[14px] text-soft">
          {site.contact.fields.need}
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {needOptions.map((option, index) => (
            <label key={option} className="cursor-pointer">
              <input
                id={index === 0 ? "need" : undefined}
                type="radio"
                name="need"
                value={option}
                checked={values.need === option}
                onChange={() => setField("need", option)}
                className="peer sr-only"
              />
              <span
                className={cn(
                  "block rounded-full border px-4 py-2 text-[15px] transition-colors",
                  "border-edge bg-ink text-soft hover:border-mute peer-checked:border-volt peer-checked:bg-volt peer-checked:font-medium peer-checked:text-ink",
                  "peer-focus-visible:outline-3 peer-focus-visible:outline-offset-[3px] peer-focus-visible:outline-volt",
                )}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
        {state.errors?.need ? (
          <p id="need-error" role="alert" className="mt-2 text-[14px] text-volt">
            {state.errors.need}
          </p>
        ) : null}
      </fieldset>

      <Field
        id="message"
        label={site.contact.fields.message}
        hint={site.contact.optional}
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => setField("message", event.target.value)}
          className={cn(controlClass, "resize-y")}
        />
      </Field>
      <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
        {site.contact.submit}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline gap-2 text-[14px] text-soft">
        {label}
        {hint ? <span className="text-[13px] text-mute">({hint})</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-[14px] text-volt">
          {error}
        </p>
      ) : null}
    </div>
  );
}
