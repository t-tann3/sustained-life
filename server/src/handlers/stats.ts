import { listDonations } from "../donations-store.js";
import { listSubmissions } from "../store.js";
import type { AdminStats } from "../types.js";

export async function getAdminStats(): Promise<AdminStats> {
  const [submissions, donations] = await Promise.all([
    listSubmissions(),
    listDonations(),
  ]);

  const contacts = submissions.filter((item) => item.type === "contact").length;
  const methodRequests = submissions.filter(
    (item) => item.type === "method-request",
  ).length;
  const speakingRequests = submissions.filter(
    (item) => item.type === "speaking-request",
  ).length;
  const newsletterSubscribers = submissions.filter(
    (item) => item.type === "newsletter",
  ).length;

  const received = donations.filter((item) => item.status === "received");
  const pledged = donations.filter((item) => item.status === "pledged");

  return {
    contacts,
    methodRequests,
    speakingRequests,
    newsletterSubscribers,
    donations: {
      count: donations.length,
      receivedCount: received.length,
      totalReceived: received.reduce((sum, item) => sum + item.amount, 0),
      totalPledged: pledged.reduce((sum, item) => sum + item.amount, 0),
      currency: "USD",
    },
  };
}
