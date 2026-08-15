"use client";

import { FormEvent } from "react";

const whatsappNumber = "447766578745";

export default function EnquiryForm() {
  const submitToWhatsApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello NASH Barber, I would like to make an enquiry.",
      `Name: ${data.get("name") ?? ""}`,
      `Contact: ${data.get("contact") ?? ""}`,
      `Service: ${data.get("service") ?? ""}`,
      `Message: ${data.get("message") ?? ""}`,
    ].join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="enquiry-form" onSubmit={submitToWhatsApp} data-reveal data-delay="2">
      <label>Name<input type="text" name="name" autoComplete="name" required /></label>
      <label>Email or phone<input type="text" name="contact" autoComplete="tel" required /></label>
      <label>Service<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>The Nash Cut</option><option>Skin Fade</option><option>Cut & Beard</option><option>Beard & Hot Towel</option><option>Full Service Package</option></select></label>
      <label>Message<textarea name="message" rows={5} required /></label>
      <button className="button whatsapp-button" type="submit"><span className="whatsapp-mark" aria-hidden="true">☎</span>Send with WhatsApp</button>
      <small>WhatsApp opens with your enquiry ready to send to 07766 578745.</small>
    </form>
  );
}
