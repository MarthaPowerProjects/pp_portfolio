"use client";

import { submitConsultation } from "@/app/actions/consultation";
import {
  initialConsultationState,
  type ConsultationField,
  type ConsultationValues,
} from "@/app/actions/consultation-state";
import { site } from "@/app/content/site";
import cn from "@/app/utils/className";
import { useActionState, useEffect, useState, type ReactNode } from "react";
import { Button } from "./ui/Button";

const emptyValues: ConsultationValues = {
  name: "",
  email: "",
  company: "",
  plan: "",
  message: "",
};

const fieldOrder: ConsultationField[] = [
  "name",
  "email",
  "company",
  "plan",
  "message",
];

const controlClass =
  "w-full rounded-xl border border-line bg-ink px-4 py-3 text-[17px] text-paper placeholder:text-mute/70 aria-invalid:border-glow";

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
        className="max-w-[22ch] text-[clamp(1.75rem,3vw,2.4rem)] font-medium leading-[1.15] tracking-[-0.035em] text-paper"
      >
        {state.message}
      </p>
    );
  }

  const setField = (field: ConsultationField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  return (
    <form action={formAction} noValidate aria-busy={pending} className="grid gap-6">
      <Field
        id="name"
        label={site.contact.fields.name}
        error={state.errors?.name}
      >
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(event) => setField("name", event.target.value)}
          aria-invalid={Boolean(state.errors?.name)}
          aria-describedby={state.errors?.name ? "name-error" : undefined}
          className={controlClass}
        />
      </Field>
      <Field
        id="email"
        label={site.contact.fields.email}
        error={state.errors?.email}
      >
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => setField("email", event.target.value)}
          aria-invalid={Boolean(state.errors?.email)}
          aria-describedby={state.errors?.email ? "email-error" : undefined}
          className={controlClass}
        />
      </Field>
      <Field
        id="company"
        label={site.contact.fields.company}
        error={state.errors?.company}
      >
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={values.company}
          onChange={(event) => setField("company", event.target.value)}
          aria-invalid={Boolean(state.errors?.company)}
          aria-describedby={state.errors?.company ? "company-error" : undefined}
          className={controlClass}
        />
      </Field>
      <Field id="plan" label={site.contact.planLabel} error={state.errors?.plan}>
        <select
          id="plan"
          name="plan"
          value={values.plan}
          onChange={(event) => setField("plan", event.target.value)}
          aria-invalid={Boolean(state.errors?.plan)}
          aria-describedby={state.errors?.plan ? "plan-error" : undefined}
          className={cn(controlClass, "appearance-none bg-[length:12px_8px] bg-[position:right_1rem_center] bg-no-repeat pr-10")}
          style={{
            backgroundImage:
              "linear-gradient(45deg, transparent 50%, var(--color-mute) 50%), linear-gradient(135deg, var(--color-mute) 50%, transparent 50%)",
            backgroundPosition: "calc(100% - 18px) 55%, calc(100% - 12px) 55%",
            backgroundSize: "6px 6px, 6px 6px",
          }}
        >
          <option value="">{site.contact.planPlaceholder}</option>
          {site.contact.plans.map((plan) => (
            <option key={plan} value={plan}>
              {plan}
            </option>
          ))}
        </select>
      </Field>
      <Field
        id="message"
        label={site.contact.messageLabel}
        error={state.errors?.message}
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={site.contact.messagePlaceholder}
          value={values.message}
          onChange={(event) => setField("message", event.target.value)}
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          className={cn(controlClass, "resize-y")}
        />
      </Field>
      <Button type="submit" disabled={pending} className="w-full sm:w-auto">
        {site.contact.submit}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[14px] text-paper">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-[14px] text-paper">
          {error}
        </p>
      ) : null}
    </div>
  );
}
