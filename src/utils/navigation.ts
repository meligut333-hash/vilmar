/**
 * Utility for safely opening external URLs
 * Prevents Tabnabbing security vulnerabilities and iframe blocks.
 */
export const safeOpenExternal = (url: string) => {
  if (typeof window === 'undefined') return;
  try {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // In case popups are blocked inside iframes, fallback to window.location
      // only if absolutely necessary or notify gracefully
    }
  } catch {
    window.location.href = url;
  }
};
