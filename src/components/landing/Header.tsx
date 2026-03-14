import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Mail, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { supabase } from "@/lib/supabaseClient";
import { sanitizeText } from "@/lib/sanitize";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WaitlistPopover = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [dbError, setDbError] = useState<string | null>(null);

  const handleJoin = async () => {
    if (!email.trim()) { setEmailError("Email is required."); return; }
    if (!EMAIL_REGEX.test(email)) { setEmailError("Please enter a valid email address."); return; }
    setEmailError(null);
    setDbError(null);
    setLoading(true);

    const { error } = await supabase
      .from("waitlist")
      .insert([{ email: sanitizeText(email, 254) }]);

    setLoading(false);
    if (error) {
      setDbError("Something went wrong. Please try again.");
    } else {
      setSuccess(true);
    }
  };

  return (
    <div className="absolute right-0 top-full mt-2 w-72 rounded-2xl p-4 shadow-xl z-50 border border-border bg-popover text-popover-foreground">
      <div className="flex items-center gap-2 mb-3">
        <Mail className="w-4 h-4 text-primary" />
        <span className="text-sm font-semibold text-foreground">Join the Waitlist</span>
      </div>

      {success ? (
        <div className="flex flex-col items-center gap-2 py-4 text-center">
          <CheckCircle className="w-8 h-8 text-green-500" />
          <p className="text-sm font-semibold text-foreground">You're on the list!</p>
          <p className="text-xs text-muted-foreground">We'll reach out when we launch.</p>
        </div>
      ) : (
        <>
          <p className="text-xs text-muted-foreground mb-3">
            Be the first to know when we launch. Enter your email below.
          </p>
          <div className="space-y-2">
            <Input
              id="waitlist-email"
              type="email"
              placeholder="you@company.com"
              maxLength={254}
              value={email}
              onChange={(e) => { setEmail(e.target.value); setEmailError(null); }}
              onKeyDown={(e) => e.key === "Enter" && handleJoin()}
              autoFocus
            />
            {emailError && <p className="text-xs text-red-500">{emailError}</p>}
            {dbError && <p className="text-xs text-red-500">{dbError}</p>}
            <Button variant="hero" size="sm" className="w-full group" onClick={handleJoin} disabled={loading}>
              {loading ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Joining…</>
              ) : (
                <>Join Waitlist<ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" /></>
              )}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [showMobileWaitlist, setShowMobileWaitlist] = useState(false);
  const waitlistRef = useRef<HTMLDivElement>(null);

  // Close desktop popover when clicking outside
  useEffect(() => {
    if (!showWaitlist) return;
    const handler = (e: MouseEvent) => {
      if (waitlistRef.current && !waitlistRef.current.contains(e.target as Node)) {
        setShowWaitlist(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showWaitlist]);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Insights", href: "#insights" },
    { label: "Meet the team", href: "#team" },
    { label: "Contact Us", href: "#request-demo" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <nav className="glass-card-strong rounded-2xl px-6 py-3 max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="SalesTwin Logo"
                className="w-9 h-9 rounded-xl object-contain"
              />
              <span className="text-xl font-bold text-foreground">SalesTwin</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />

              {/* Join The Waitlist button + popover */}
              <div className="relative" ref={waitlistRef}>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => setShowWaitlist((v) => !v)}
                >
                  Join The Waitlist
                </Button>
                {showWaitlist && (
                  <WaitlistPopover onClose={() => setShowWaitlist(false)} />
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 border-t border-border mt-4">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-2 pt-3 border-t border-border mt-2">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm font-medium text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>

                  {/* Mobile Join The Waitlist */}
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => setShowMobileWaitlist((v) => !v)}
                  >
                    Join The Waitlist
                  </Button>
                  {showMobileWaitlist && (
                    <div className="relative">
                      <WaitlistPopover onClose={() => setShowMobileWaitlist(false)} />
                    </div>
                  )}

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      document.getElementById('request-demo')?.scrollIntoView({ behavior: 'smooth' });
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
