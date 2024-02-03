interface Props {
  name?: string;
  value: string;
  type: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  maxLength?: number;
}
export default function Input({
  name,
  value,
  type,
  className,
  placeholder,
  onChange,
  maxLength,
}: Props) {
  return (
    <>
      <input
        type={type}
        className={`${className} w-full appearance-none rounded-lg p-2 text-md shadow-sm shadow-black-300 text-slate-300 bg-transparent`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
    </>
  );
}
