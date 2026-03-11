export function DoorvanaLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      aria-label="Doorvana logo"
    >
      {/* Stylized "D" with horizontal lines */}
      <path d="M10 5 h40 a45 45 0 0 1 0 90 h-40 z M10 23 h40 a27 27 0 0 1 0 54 h-40 z" fillRule="evenodd" />
      <rect x="10" y="35" width="65" height="8" rx="1" />
      <rect x="10" y="57" width="65" height="8" rx="1" />
    </svg>
  );
}
