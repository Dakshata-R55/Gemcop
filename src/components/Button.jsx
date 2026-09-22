import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-paper text-ink hover:bg-gold hover:text-ink border border-transparent",
  secondary:
    "bg-transparent text-paper border border-line hover:border-gold hover:text-gold",
  gold: "bg-gold text-ink hover:bg-gold-soft border border-transparent",
};

export default function Button({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
