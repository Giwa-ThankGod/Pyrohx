import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectOption = {
  label: string;
  value: string;
};

type SelectInputProps = {
  label: string;
  name: string;
  value?: string;
  onChange: (event: {
    target: {
      name: string;
      value: string;
    };
  }) => void;
  options?: SelectOption[];
  placeholder?: string;
  className?: string;
};

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  className = "",
}) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm">
        {label}
      </label>

      <Select
        value={value}
        onValueChange={(val: string) =>
          onChange({ target: { name, value: val } })
        }
      >
        <SelectTrigger
          className={`w-full !h-12 mt-1 px-5 font-light border border-gray-200 cursor-pointer focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl shadow-none ${className}`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent className="bg-white font-light border border-gray-200">
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectInput;