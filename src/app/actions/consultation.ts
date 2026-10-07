"use server";

import {
  type ConsultationField,
  type ConsultationState,
  type ConsultationValues,
} from "@/app/actions/consultation-state";
import { planOptions, site, type PlanOption } from "@/app/content/site";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isPlan(value: string): value is PlanOption {
  return (planOptions as readonly string[]).includes(value);
}

type ConsultationRequest = {
  name: string;
  email: string;
  company: string;
  plan: PlanOption;
  message: string;
};

async function deliverConsultation(request: ConsultationRequest) {
  // Validation has passed. Connect an email provider here when one is chosen.
  void request;
}

export async function submitConsultation(
  _previous: ConsultationState,
  formData: FormData,
): Promise<ConsultationState> {
  const values: ConsultationValues = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    plan: String(formData.get("plan") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const errors: Partial<Record<ConsultationField, string>> = {};

  if (!values.name || values.name.length > 120) {
    errors.name = site.contact.errors.name;
  }

  if (!emailPattern.test(values.email) || values.email.length > 254) {
    errors.email = site.contact.errors.email;
  }

  if (!values.company || values.company.length > 160) {
    errors.company = site.contact.errors.company;
  }

  if (!isPlan(values.plan)) {
    errors.plan = site.contact.errors.plan;
  }

  if (!values.message || values.message.length > 2000) {
    errors.message = site.contact.errors.message;
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  if (!isPlan(values.plan)) {
    return {
      status: "error",
      errors: { plan: site.contact.errors.plan },
      values,
    };
  }

  await deliverConsultation({
    name: values.name,
    email: values.email,
    company: values.company,
    plan: values.plan,
    message: values.message,
  });

  return { status: "success", message: site.contact.success };
}
