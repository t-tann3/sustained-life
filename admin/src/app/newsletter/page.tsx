"use client";

import { useEffect, useMemo, useState } from "react";
import { AdminShell } from "@/components/AdminShell";
import {
  fetchSubmissions,
  formatDate,
  type NewsletterPayload,
  type Submission,
} from "@/lib/api";

export default function NewsletterPage() {
  const [items, setItems] = useState<Submission[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSubmissions("newsletter")
      .then((result) => setItems(result.submissions))
      .catch((err: Error) => setError(err.message));
  }, []);

  const uniqueEmails = useMemo(() => {
    const seen = new Set<string>();
    for (const item of items) {
      const email = (item.payload as NewsletterPayload).email?.toLowerCase();
      if (email) seen.add(email);
    }
    return seen.size;
  }, [items]);

  return (
    <AdminShell>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-forest">Newsletter</h2>
          <p className="mt-1 text-muted">
            People who subscribed through the website footer.
          </p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-forest">{uniqueEmails}</p>
          <p className="text-sm text-muted">unique subscribers</p>
        </div>
      </div>

      {error ? <p className="text-red-700">{error}</p> : null}

      {!error && items.length === 0 ? (
        <p className="text-muted">No newsletter subscribers yet.</p>
      ) : null}

      {items.length > 0 ? (
        <div className="overflow-x-auto border border-line bg-paper">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-line bg-sage/50">
              <tr>
                <th className="px-4 py-3 font-bold text-forest">Email</th>
                <th className="px-4 py-3 font-bold text-forest">Subscribed</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const payload = item.payload as NewsletterPayload;
                return (
                  <tr key={item.id} className="border-b border-line last:border-0">
                    <td className="px-4 py-3">{payload.email}</td>
                    <td className="px-4 py-3 text-muted">
                      {formatDate(item.createdAt)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </AdminShell>
  );
}
