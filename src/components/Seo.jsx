import { useEffect } from "react";

export default function Seo({
  title,
  description = "GEMCOP is a growth and digital transformation company that helps startups and enterprises bring clarity to their growth efforts and build systems that perform.",
}) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
