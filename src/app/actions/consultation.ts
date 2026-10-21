"use server";

import {
  type ConsultationField,
  type ConsultationState,
  type ConsultationValues,
} from "@/app/actions/consultation-state";
import { needOptions, site, type NeedOption } from "@/app/content/site";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNeed(value: string): value is NeedOption {
  return (needOptions as readonly string[]).includes(value);
}

function isReachable(value: string) {
  if (value.length > 254) return false;
  if (emailPattern.test(value)) return true;
  const digits = value.replace(/[\s()+.-]/g, "");
  return /^\d{7,15}$/.test(digits);
}

type ConsultationRequest = {
  name: string;
  contact: string;
  company: string;
  need: NeedOption;
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
    contact: String(formData.get("contact") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    need: String(formData.get("need") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const errors: Partial<Record<ConsultationField, string>> = {};

  if (!values.name || values.name.length > 120) {
    errors.name = site.contact.errors.name;
  }

  if (!isReachable(values.contact)) {
    errors.contact = site.contact.errors.contact;
  }

  if (!isNeed(values.need)) {
    errors.need = site.contact.errors.need;
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  if (!isNeed(values.need)) {
    return {
      status: "error",
      errors: { need: site.contact.errors.need },
      values,
    };
  }

  await deliverConsultation({
    name: values.name,
    contact: values.contact,
    company: values.company.slice(0, 160),
    need: values.need,
    message: values.message.slice(0, 2000),
  });

  return { status: "success", message: site.contact.success };
}
