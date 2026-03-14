/**
 * Strips HTML/script tags and trims whitespace from a string to prevent
 * stored XSS. Supabase JS client already uses parameterized queries, so
 * SQL injection is not possible through the client library; this layer
 * guards against malicious content being stored and later rendered as HTML.
 */
export function sanitizeText(value: string, maxLength: number): string {
    return value
        .trim()
        // Remove any HTML tags (e.g. <script>, <img onerror=...>, etc.)
        .replace(/<[^>]*>/g, "")
        // Collapse multiple whitespace characters into a single space
        .replace(/\s+/g, " ")
        .slice(0, maxLength);
}
