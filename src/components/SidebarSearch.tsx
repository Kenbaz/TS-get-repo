import { useState, FC, ChangeEvent } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
}

const SidebarSearchBar: FC<SearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  }

  return (
    <div className="w-full rounded-md border-2 border-secondary hover:border-cyan-700 h-full">
      <input
        className="w-full h-full rounded-md placeholder-gray-800 bg-tinWhite text-gray-800 relative font-medium focus:outline-none lg:text-md md:pl-4"
        type="text"
        placeholder="Search repository..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};

export default SidebarSearchBar;
