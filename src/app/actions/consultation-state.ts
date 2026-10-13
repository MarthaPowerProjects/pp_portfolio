export type ConsultationField = "name" | "email" | "company" | "plan" | "message";

export type ConsultationValues = Record<ConsultationField, string>;

export type ConsultationState = {
  status: "idle" | "error" | "success";
  message?: string;
  errors?: Partial<Record<ConsultationField, string>>;
  values?: ConsultationValues;
};

export const initialConsultationState: ConsultationState = {
  status: "idle",
};
