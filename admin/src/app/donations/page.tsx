"use client";

import { useEffect, useMemo, useState } from "react";
import { AdminShell } from "@/components/AdminShell";
import {
  createDonation,
  deleteDonation,
  fetchDonations,
  formatDate,
  formatMoney,
  updateDonationStatus,
  type Donation,
} from "@/lib/api";

const emptyForm = {
  donorName: "",
  email: "",
  amount: "",
  currency: "USD",
  method: "check",
  status: "received" as Donation["status"],
  notes: "",
  donatedAt: new Date().toISOString().slice(0, 10),
};

export default function DonationsPage() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  async function load() {
    const result = await fetchDonations();
    setDonations(result.donations);
  }

  useEffect(() => {
    load().catch((err: Error) => setError(err.message));
  }, []);

  const totals = useMemo(() => {
    const received = donations
      .filter((item) => item.status === "received")
      .reduce((sum, item) => sum + item.amount, 0);
    const pledged = donations
      .filter((item) => item.status === "pledged")
      .reduce((sum, item) => sum + item.amount, 0);
    return { received, pledged };
  }, [donations]);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setPending(true);
    setError("");
    setMessage("");

    try {
      await createDonation({
        donorName: form.donorName.trim(),
        email: form.email.trim() || undefined,
        amount: Number(form.amount),
        currency: form.currency,
        method: form.method,
        status: form.status,
        notes: form.notes.trim() || undefined,
        donatedAt: new Date(form.donatedAt).toISOString(),
      });
      setForm(emptyForm);
      setMessage("Donation recorded.");
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save donation.");
    } finally {
      setPending(false);
    }
  }

  async function onStatusChange(id: string, status: Donation["status"]) {
    try {
      await updateDonationStatus(id, status);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not update status.");
    }
  }

  async function onDelete(id: string) {
    if (!confirm("Delete this donation record?")) return;
    try {
      await deleteDonation(id);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not delete donation.");
    }
  }

  return (
    <AdminShell>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-forest">Donations</h2>
        <p className="mt-1 text-muted">
          Track gifts manually until a payment provider is connected.
        </p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <div className="border border-line bg-paper p-5">
          <p className="text-sm text-muted">Total received</p>
          <p className="mt-2 text-3xl font-bold text-forest">
            {formatMoney(totals.received)}
          </p>
        </div>
        <div className="border border-line bg-paper p-5">
          <p className="text-sm text-muted">Total pledged</p>
          <p className="mt-2 text-3xl font-bold text-forest">
            {formatMoney(totals.pledged)}
          </p>
        </div>
      </div>

      <form
        onSubmit={onSubmit}
        className="mb-10 grid gap-4 border border-line bg-paper p-5 md:grid-cols-2"
      >
        <h3 className="md:col-span-2 text-lg font-bold text-forest">
          Record a donation
        </h3>
        <label className="text-sm font-semibold">
          Donor name
          <input
            required
            value={form.donorName}
            onChange={(e) => setForm({ ...form, donorName: e.target.value })}
            className="mt-1 min-h-11 w-full border border-line px-3"
          />
        </label>
        <label className="text-sm font-semibold">
          Email
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1 min-h-11 w-full border border-line px-3"
          />
        </label>
        <label className="text-sm font-semibold">
          Amount
          <input
            required
            type="number"
            min="0.01"
            step="0.01"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            className="mt-1 min-h-11 w-full border border-line px-3"
          />
        </label>
        <label className="text-sm font-semibold">
          Date
          <input
            required
            type="date"
            value={form.donatedAt}
            onChange={(e) => setForm({ ...form, donatedAt: e.target.value })}
            className="mt-1 min-h-11 w-full border border-line px-3"
          />
        </label>
        <label className="text-sm font-semibold">
          Method
          <select
            value={form.method}
            onChange={(e) => setForm({ ...form, method: e.target.value })}
            className="mt-1 min-h-11 w-full border border-line px-3"
          >
            <option value="check">Check</option>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
            <option value="ach">ACH / bank</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label className="text-sm font-semibold">
          Status
          <select
            value={form.status}
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value as Donation["status"],
              })
            }
            className="mt-1 min-h-11 w-full border border-line px-3"
          >
            <option value="received">Received</option>
            <option value="pledged">Pledged</option>
            <option value="refunded">Refunded</option>
          </select>
        </label>
        <label className="text-sm font-semibold md:col-span-2">
          Notes
          <textarea
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            rows={3}
            className="mt-1 w-full border border-line px-3 py-2"
          />
        </label>
        <div className="md:col-span-2 flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={pending}
            className="bg-forest px-4 py-3 text-sm font-bold text-white disabled:opacity-60"
          >
            {pending ? "Saving…" : "Save donation"}
          </button>
          {message ? <p className="text-sm font-semibold text-forest">{message}</p> : null}
          {error ? <p className="text-sm font-semibold text-red-700">{error}</p> : null}
        </div>
      </form>

      {donations.length === 0 ? (
        <p className="text-muted">No donations recorded yet.</p>
      ) : (
        <div className="overflow-x-auto border border-line bg-paper">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-line bg-sage/50">
              <tr>
                <th className="px-4 py-3 font-bold text-forest">Donor</th>
                <th className="px-4 py-3 font-bold text-forest">Amount</th>
                <th className="px-4 py-3 font-bold text-forest">Status</th>
                <th className="px-4 py-3 font-bold text-forest">Date</th>
                <th className="px-4 py-3 font-bold text-forest">Actions</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation) => (
                <tr key={donation.id} className="border-b border-line last:border-0">
                  <td className="px-4 py-3">
                    <p className="font-semibold">{donation.donorName}</p>
                    <p className="text-muted">{donation.email || donation.method}</p>
                  </td>
                  <td className="px-4 py-3">
                    {formatMoney(donation.amount, donation.currency)}
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={donation.status}
                      onChange={(e) =>
                        onStatusChange(
                          donation.id,
                          e.target.value as Donation["status"],
                        )
                      }
                      className="border border-line px-2 py-1"
                    >
                      <option value="received">Received</option>
                      <option value="pledged">Pledged</option>
                      <option value="refunded">Refunded</option>
                    </select>
                  </td>
                  <td className="px-4 py-3 text-muted">
                    {formatDate(donation.donatedAt)}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      type="button"
                      onClick={() => onDelete(donation.id)}
                      className="text-sm font-semibold text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminShell>
  );
}
