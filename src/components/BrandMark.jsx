export default function BrandMark({ compact = false }) {
  return (
    <span className={compact ? "brand-mark size-9" : "brand-mark"} aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M7 30 20 8l13 22M12 22h16M15 30h10" />
        <path d="M9 33h22" strokeWidth="1" />
      </svg>
    </span>
  );
}
