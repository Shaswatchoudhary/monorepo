export function formatDate(date) {
  return date.toLocaleDateString("hi-IN");
}

export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}
