export type ConsultationField = "name" | "contact" | "company" | "need" | "message";

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
