"use client";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useId, useState, type FormEvent } from "react";
import { BIZ } from "@/lib/site";
import { SERVICE_OPTIONS } from "@/lib/services";

interface FieldProps { label: string; name: string; type?: string; required?: boolean; autoComplete?: string; placeholder?: string; inputMode?: "tel" | "email" | "text"; maxLength?: number; pattern?: string }

function Field({ label, name, type = "text", required, ...rest }: FieldProps) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="field-label">{label}{required && <span className="text-gold-600"> *</span>}</label>
      <input id={id} name={name} type={type} required={required} className="field" {...rest} />
    </div>
  );
}

export default function BookingForm({ defaultService }: { defaultService?: string }) {
  const router = useRouter();
  const ids = { svc: useId(), date: useId(), msg: useId() };
  const [state, setState] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setState("sending");
    try {
      const res = await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error ?? "");
      router.push("/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "");
      setState("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card relative grid gap-5 p-6 sm:p-8">
      <div aria-hidden className="absolute -left-[9999px]">
        <label>Leave this empty<input name="company" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" maxLength={80} />
        <Field label="Mobile" name="phone" type="tel" inputMode="tel" required autoComplete="tel" pattern="[0-9 +()\-]{8,20}" placeholder="04xx xxx xxx" />
        <Field label="Email" name="email" type="email" inputMode="email" autoComplete="email" maxLength={120} />
        <Field label="Car make & model" name="vehicle" placeholder="e.g. Toyota Corolla 2018" maxLength={80} />
        <Field label="Registration" name="rego" maxLength={10} placeholder="ABC123" />
        <div>
          <label htmlFor={ids.svc} className="field-label">Service required<span className="text-gold-600"> *</span></label>
          <select id={ids.svc} name="service" required defaultValue={defaultService ?? SERVICE_OPTIONS[0]} className="field">
            {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={ids.date} className="field-label">Preferred date</label>
          <input id={ids.date} name="date" type="date" className="field" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={ids.msg} className="field-label">Message</label>
          <textarea id={ids.msg} name="message" rows={4} maxLength={1000} className="field resize-y" placeholder="Warning lights, noises, or when you need your RWC by" />
        </div>
      </div>
      <button type="submit" disabled={state === "sending"} className="btn btn-primary w-full text-base disabled:opacity-70">
        {state === "sending" ? <><LoaderCircle aria-hidden className="size-5 animate-spin" />Sending…</> : <>Send Booking Request<ArrowRight aria-hidden className="size-5" /></>}
      </button>
      {state === "error" && (
        <p role="alert" className="rounded-[var(--radius-card)] border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
          {error || "We couldn't send your request."} Please call {BIZ.phone} and we&apos;ll book you in.
        </p>
      )}
      <p className="text-center text-sm text-steel-500">We&apos;ll contact you during business hours to confirm your booking.</p>
    </form>
  );
}
