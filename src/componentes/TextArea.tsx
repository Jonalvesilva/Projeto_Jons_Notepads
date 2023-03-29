export type TextAreaProps = {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export function TextArea({
  className,
  value,
  placeholder,
  onChange,
}: TextAreaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={className}
      rows={3}
    />
  );
}
