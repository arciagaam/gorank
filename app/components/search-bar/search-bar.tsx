import { SearchIcon } from "lucide-react"

type SearchBarProps = {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const SearchBar = ({ placeholder = "Search", value, onChange }: SearchBarProps) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className="flex rounded-full bg-white border border-gray-200 py-3 px-4 w-full lg:w-[50vw] shadow focus-within:shadow-md">
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                className="outline-none w-full text-sm md:text-base"
                onChange={handleInputChange}
            />
            <button className="p-1 md:p-0 touch-target">
                <SearchIcon className="w-4 h-4 md:w-5 md:h-5" />
            </button>
        </div>
    )
}