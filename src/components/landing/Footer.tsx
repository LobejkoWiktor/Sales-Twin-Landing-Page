const Footer = () => {


  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container px-4 md:px-6 py-16">
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
          {/* Logo & Description */}
          <div className="text-center">
            <a href="/" className="flex items-center justify-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">SalesTwin</span>
            </a>
            <p className="text-sm text-muted-foreground">
              AI-powered sales training that transforms how teams learn and close.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 SalesTwin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
