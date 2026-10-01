import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { PageHero, Section } from "@/components/site/Section";
import { school } from "@/data/school";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions | Free Enrolment at Vision School, Pune" },
      {
        name: "description",
        content:
          "Admission process and enquiry form for blind, deaf and mute children seeking free residential education at Vision School, Kondhwa Khurd, Pune.",
      },
      { property: "og:title", content: "Admissions — Vision School Pune" },
      {
        property: "og:description",
        content: "Who can apply, what is provided, and how to submit an enrolment enquiry.",
      },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
  component: AdmissionsPage,
});

const steps = [
  {
    title: "1. Reach the administration",
    body: "Call the help desk or visit the Kondhwa campus between Monday and Saturday, 7:15 AM to 4:00 PM.",
  },
  {
    title: "2. Share the child's details",
    body: "Provide the child's age, nature of impairment (visual, hearing or speech), prior schooling and home state.",
  },
  {
    title: "3. Assessment & counselling",
    body: "The team assesses learning needs and explains the residential routine, curriculum and care arrangements to the family.",
  },
  {
    title: "4. Enrolment & residence",
    body: "On confirmation, the child joins the residential programme with boarding, meals, clothing, books and healthcare provided free.",
  },
];

function AdmissionsPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Student name: ${data.get("student")}`,
      `Age: ${data.get("age")}`,
      `Impairment: ${data.get("impairment")}`,
      `Guardian: ${data.get("guardian")}`,
      `Phone: ${data.get("phone")}`,
      `City / State: ${data.get("city")}`,
      "",
      `${data.get("message") ?? ""}`,
    ].join("\n");

    window.location.href = `mailto:${school.email}?subject=${encodeURIComponent(
      "Admission enquiry — Vision School",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    toast.success("Your email draft is ready", {
      description: `Send it to ${school.email}, or call ${school.phones[0]}.`,
    });
  }

  const field =
    "mt-1 w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-ring";

  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Enrolment is free, for every eligible child"
        intro="The school welcomes visually challenged, deaf and mute boys and girls from Grade 1 onwards. No family pays for tuition, boarding, food, clothing, books or healthcare."
      />

      <Section eyebrow="Process" title="Four steps to enrolment">
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.title} className="card-soft p-6">
              <h3 className="font-display text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section className="bg-sand py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow">Enquiry form</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Tell us about the child</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Submitting the form opens a prefilled email to {school.email}. You can also call{" "}
              {school.phones.join(" or ")} directly during working hours.
            </p>
            {sent && (
              <p className="mt-6 rounded-md border border-border bg-card p-4 text-sm">
                Enquiry prepared. If your email app did not open, write to {school.email}.
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="card-soft grid gap-4 p-6 sm:grid-cols-2">
            <label className="text-sm font-medium">
              Student name
              <input name="student" required className={field} />
            </label>
            <label className="text-sm font-medium">
              Age
              <input name="age" required inputMode="numeric" className={field} />
            </label>
            <label className="text-sm font-medium">
              Nature of impairment
              <select name="impairment" required defaultValue="" className={field}>
                <option value="" disabled>
                  Select
                </option>
                <option>Visually impaired</option>
                <option>Deaf</option>
                <option>Mute</option>
                <option>Multiple impairments</option>
              </select>
            </label>
            <label className="text-sm font-medium">
              Guardian name
              <input name="guardian" required className={field} />
            </label>
            <label className="text-sm font-medium">
              Phone number
              <input name="phone" required type="tel" className={field} />
            </label>
            <label className="text-sm font-medium">
              City / State
              <input name="city" required className={field} />
            </label>
            <label className="text-sm font-medium sm:col-span-2">
              Anything else we should know
              <textarea name="message" rows={4} className={field} />
            </label>
            <button
              type="submit"
              className="sm:col-span-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Submit enquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
