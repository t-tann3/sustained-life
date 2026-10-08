export type SubmissionType =
  | "contact"
  | "method-request"
  | "speaking-request"
  | "partnership-request"
  | "newsletter";

export type ApiResult<T = undefined> =
  | { ok: true; message: string; data?: T }
  | { ok: false; message: string; errors?: string[] };

export type ContactInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  organization?: string;
  topic: string;
  message: string;
  consent: boolean;
};

export type MethodRequestInput = {
  firstName: string;
  lastName: string;
  email: string;
  organization?: string;
  interest: string;
  message: string;
  consent: boolean;
};

export type NewsletterInput = {
  email: string;
};

export type PartnershipRequestInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  organization?: string;
  inquiryType: string;
  eventName?: string;
  eventDate?: string;
  eventLocation?: string;
  quantity?: string;
  audience?: string;
  budget?: string;
  customization?: string;
  message: string;
  consent: boolean;
};

export type SpeakingRequestInput = {
  name: string;
  organization: string;
  email: string;
  phone?: string;
  event: string;
  date: string;
  location: string;
  format: string;
  audienceSize?: number;
  topic: string;
  goals: string;
  details?: string;
  consent: boolean;
};

export type StoredSubmission = {
  id: string;
  type: SubmissionType;
  createdAt: string;
  payload:
    | ContactInput
    | MethodRequestInput
    | SpeakingRequestInput
    | PartnershipRequestInput
    | NewsletterInput;
};

export type DonationStatus = "pledged" | "received" | "refunded";

export type DonationInput = {
  donorName: string;
  email?: string;
  amount: number;
  currency: string;
  method: string;
  status: DonationStatus;
  notes?: string;
  donatedAt: string;
};

export type StoredDonation = DonationInput & {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type AdminStats = {
  contacts: number;
  methodRequests: number;
  speakingRequests: number;
  partnershipRequests: number;
  newsletterSubscribers: number;
  donations: {
    count: number;
    receivedCount: number;
    totalReceived: number;
    totalPledged: number;
    currency: string;
  };
};
