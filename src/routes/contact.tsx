import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { school } from "@/data/school";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Vision School, Kondhwa Khurd, Pune" },
      {
        name: "description",
        content:
          "Phone +91 82081 66006 or +91 81492 67567, email visionbschool@gmail.com, or visit Kausar Baugh Road, Kondhwa Khurd, Pune — Monday to Saturday, 7:15 AM to 4:00 PM.",
      },
      { property: "og:title", content: "Contact Us — Vision School, Pune" },
      {
        property: "og:description",
        content: "Address, phone numbers, email, visiting hours and enquiry form.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const field =
    "mt-1 w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-ring";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Email: ${d.get("email")}`,
      "",
      `${d.get("message") ?? ""}`,
    ].join("\n");
    window.location.href = `mailto:${school.email}?subject=${encodeURIComponent(
      String(d.get("subject") || "Website enquiry"),
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    toast.success("Your email draft is ready", { description: `Send it to ${school.email}.` });
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to our administration & visit campus"
        intro="For enrolment enquiries, donation drop-offs, volunteering or a campus tour, reach us on any working day."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="card-soft p-6">
            <Phone className="size-5 text-gold" aria-hidden="true" />
            <h2 className="mt-3 font-display text-lg">Phone</h2>
            {school.phones.map((p) => (
              <a
                key={p}
                href={`tel:${p.replace(/\s/g, "")}`}
                className="mt-1 block text-sm text-muted-foreground hover:text-primary"
              >
                {p}
              </a>
            ))}
          </div>
          <div className="card-soft p-6">
            <Mail className="size-5 text-gold" aria-hidden="true" />
            <h2 className="mt-3 font-display text-lg">Email</h2>
            <a
              href={`mailto:${school.email}`}
              className="mt-1 block text-sm text-muted-foreground hover:text-primary"
            >
              {school.email}
            </a>
          </div>
          <div className="card-soft p-6">
            <Clock className="size-5 text-gold" aria-hidden="true" />
            <h2 className="mt-3 font-display text-lg">Working hours</h2>
            <p className="mt-1 text-sm text-muted-foreground">{school.hours}</p>
          </div>
          <div className="card-soft p-6">
            <MapPin className="size-5 text-gold" aria-hidden="true" />
            <h2 className="mt-3 font-display text-lg">Address</h2>
            <p className="mt-1 text-sm text-muted-foreground">{school.address}</p>
          </div>
        </div>
      </Section>

      <section className="bg-sand py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="card-soft grid gap-4 p-6">
            <h2 className="font-display text-2xl">Send us a message</h2>
            <label className="text-sm font-medium">
              Your name
              <input name="name" required className={field} />
            </label>
            <label className="text-sm font-medium">
              Phone
              <input name="phone" type="tel" required className={field} />
            </label>
            <label className="text-sm font-medium">
              Email
              <input name="email" type="email" className={field} />
            </label>
            <label className="text-sm font-medium">
              Subject
              <select name="subject" defaultValue="Website enquiry" className={field}>
                <option>Website enquiry</option>
                <option>Admission enquiry</option>
                <option>Donation enquiry</option>
                <option>Volunteering</option>
                <option>Campus visit</option>
              </select>
            </label>
            <label className="text-sm font-medium">
              Message
              <textarea name="message" rows={5} required className={field} />
            </label>
            <button
              type="submit"
              className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Send message
            </button>
            {sent && (
              <p className="text-sm text-muted-foreground">
                If your email app did not open, write directly to {school.email}.
              </p>
            )}
          </form>

          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
            <iframe
              title="Map showing Vision School and Rehabilitation Centre, Kondhwa Khurd, Pune"
              src="https://www.google.com/maps?q=Vision%20School%20and%20Rehabilitation%20Centre%20Kausar%20Baugh%20Road%20Kondhwa%20Khurd%20Pune%20411048&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
