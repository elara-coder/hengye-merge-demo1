import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/applications", label: "Applications" },
  { to: "/products", label: "Products" },
  { to: "/engineering", label: "Engineering Capability" },
  { to: "/support", label: "Technical Support" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="bg-ink text-background">
        <div className="container-wide flex h-7 items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
          <span className="opacity-70">Shanghai Hengye Micron Co., Ltd. · 上海恒业微晶</span>
          <span className="hidden md:block opacity-70">EN · RU · 中文 · ISO 9001 / 14001 · REACH · EAC</span>
        </div>
      </div>

      <div className="container-wide flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Hengye Micron home">
          <div className="flex h-9 w-9 items-center justify-center bg-primary text-primary-foreground">
            <span className="font-display text-lg font-bold leading-none">H</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-[15px] font-bold tracking-tight">HENGYE MICRON</div>
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              Industrial Adsorbents · Since 1998
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-[13px] font-medium transition-colors ${
                  isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground">
            EN / RU
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center h-10 px-5 bg-primary text-primary-foreground text-[12px] font-medium uppercase tracking-[0.12em] hover:bg-primary-deep transition-colors"
          >
            Request Quote
          </Link>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-wide py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-sm py-3 border-b border-border/50 ${isActive ? "text-primary" : ""}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center justify-center h-11 px-5 bg-primary text-primary-foreground text-[12px] font-medium uppercase tracking-[0.12em]"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
