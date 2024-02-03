import { useEffect, useRef, useState } from "react";

interface Props {
  formFieldName?: string;
  options: Array<string>;
  label: string;
  onChange: any;
}
export default function MultiSelectDropdown({
  formFieldName,
  options,
  label,
  onChange,
}: Props) {
  const [isOpen, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (e: any) => {
    const isChecked = e.target.checked;
    const option: any = e.target.value;

    const selectedOptionSet = new Set(selectedOptions);

    // if (isChecked) {
    //   selectedOptionSet.add(option);
    // } else {
    //   selectedOptionSet.delete(option);
    // }

    // const newSelectedOptions = Array.from(selectedOptionSet);

    // setSelectedOptions(newSelectedOptions);
    onChange(selectedOptions);
  };

  const dropdownRef = useRef(null);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  return (
    <>
      <div ref={dropdownRef} className="relative">
        <div onClick={() => setOpen(!isOpen)} className="cursor-pointer z-10">
          {label}
        </div>

        <div
          className={`z-20 absolute w-full bg-black-700 rounded-lg shadow-md shadow-black-300 transition-all duration-200 ease-in-out ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-96"
          }`}
        >
          <ul>
            {options.map((option, i) => {
              return (
                <li key={i}>
                  <label className="flex flex-nowrap gap-2 cursor-pointer px-2 py-1 text-black-300">
                    <input
                      type="checkbox"
                      name={formFieldName}
                      value={option}
                      className="cursor-pointer"
                      onChange={handleChange}
                    />
                    <span className="ml-1">{option}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
