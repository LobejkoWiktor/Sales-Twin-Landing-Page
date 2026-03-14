import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Sparkles, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { sanitizeText } from "@/lib/sanitize";

const CTA = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ firstName?: string; email?: string; message?: string }>({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async () => {
    // Validate required fields
    const errors: { firstName?: string; email?: string; message?: string } = {};
    if (!firstName.trim()) errors.firstName = "First name is required.";
    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!message.trim()) errors.message = "Message is required.";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setLoading(true);
    setError(null);

    const formData = {
      name: sanitizeText(`${firstName} ${lastName}`, 121),
      email: sanitizeText(email, 254),
      message: sanitizeText(message, 2000),
    };

    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert([formData]);

    setLoading(false);

    if (dbError) {
      setError("Something went wrong. Please try again.");
    } else {
      setSuccess(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="request-demo" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-highlight/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-glow-primary">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to transform your{" "}
            <span className="gradient-text">sales culture</span>?
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join the teams already using SalesTwin to onboard faster, close more deals, and build a world-class sales organization.
          </p>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto glass-card p-8 rounded-2xl text-left">
            {success ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                <CheckCircle className="w-12 h-12 text-green-500" />
                <p className="text-xl font-semibold text-foreground">Message sent!</p>
                <p className="text-muted-foreground">We'll be in touch soon.</p>
                <Button variant="ghost" onClick={() => setSuccess(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      maxLength={50}
                      value={firstName}
                      onChange={(e) => { setFirstName(e.target.value); setFieldErrors((prev) => ({ ...prev, firstName: undefined })); }}
                    />
                    {fieldErrors.firstName && <p className="text-xs text-red-500">{fieldErrors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      maxLength={70}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      maxLength={254}
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setFieldErrors((prev) => ({ ...prev, email: undefined })); }}
                    />
                    {fieldErrors.email && <p className="text-xs text-red-500">{fieldErrors.email}</p>}
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      className="min-h-[100px]"
                      maxLength={2000}
                      value={message}
                      onChange={(e) => { setMessage(e.target.value); setFieldErrors((prev) => ({ ...prev, message: undefined })); }}
                    />
                    {fieldErrors.message && <p className="text-xs text-red-500">{fieldErrors.message}</p>}
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-500 mb-4">{error}</p>
                )}

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full group"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Contact us
                      <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
