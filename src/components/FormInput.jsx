export default function FormInput({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  ...inputProps
}) {
  return (
    <label className="text-sm font-semibold text-slate-700">
      {label}
      <input
        required={required}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="field mt-2"
        {...inputProps}
      />
    </label>
  );
}
