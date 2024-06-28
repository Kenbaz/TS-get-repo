import { useState, ChangeEvent, FC } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const SearchBar: FC<SearchBarProps> = ({
  onSearch,
  currentPage,
  setCurrentPage,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);

    if (query === "") {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(1);
    }
  }

  return (
    <div className="rounded-md w-11/12 h-8 border-2 border-secondary hover:border-cyan-700 md:h-[59px] md:mb-2 md:mt-2 lg:w-3/4 lg:h-11 lg:rounded-lg">
      <input
        className="w-full bg-tinWhite text-gray-800 h-full rounded-md placeholder-gray-800 relative pl-2 text-sm font-medium focus:outline-none md:h-14 md:text-2xl md:pl-4 lg:text-base lg:h-full lg:rounded-lg"
        type="text"
        placeholder="Search repository..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
