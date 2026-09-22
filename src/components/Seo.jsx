import { useEffect } from "react";

export default function Seo({
  title,
  description = "GEMCOP is a digital marketing and creative agency. Page copy will be updated when official content is provided.",
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
