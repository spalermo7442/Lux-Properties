"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { forwardRef, useEffect, useState } from "react";

/** Renders reCAPTCHA only after mount so the Google script runs in the browser. */
const ContactRecaptcha = forwardRef<ReCAPTCHA, { sitekey: string }>(
  function ContactRecaptcha({ sitekey }, ref) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return (
        <p className="text-xs uppercase tracking-wider text-gray-500">
          Loading verification…
        </p>
      );
    }

    return <ReCAPTCHA ref={ref} sitekey={sitekey} theme="light" />;
  }
);

export default ContactRecaptcha;
