"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs uppercase tracking-wider text-gray-600 mb-1.5"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your Name"
            disabled={status === "sending"}
            className="w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 transition-colors disabled:opacity-60"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-wider text-gray-600 mb-1.5"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Your Email"
            disabled={status === "sending"}
            className="w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 transition-colors disabled:opacity-60"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-wider text-gray-600 mb-1.5"
        >
          Comment or Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Your message"
          disabled={status === "sending"}
          className="w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 transition-colors resize-y disabled:opacity-60"
        />
      </div>
      {status === "success" && (
        <p className="text-sm text-green-700">
          Thank you! Your message has been sent. We&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full sm:w-auto px-8 py-3 text-sm uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
