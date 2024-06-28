import { useState, useEffect, lazy, Suspense, FC } from "react";
import { Link } from "react-router-dom";
import useFetch from "./UseFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";
import RepositoryHomeSkeleton from "./skeletons/RepositioryHomeSkeleton";

const SearchBar = lazy(() => import("./Search"));

interface RepositoryTypes {
  id: number;
  name: string;
  description: string;
}

const Repos: FC = () => {
  const [fetchResults, setFetchResults] = useState<RepositoryTypes[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState<RepositoryTypes[]>([]);

  const { data, error, isLoading } = useFetch<RepositoryTypes[]>(
    "https://api.github.com/users/Kenbaz/repos"
  );

  useEffect(() => {
    if (error) {
      setErrorMessage("Failed to fetch");
    }
    if (data) {
      setFetchResults(data);
    }
  }, [data, error]);

  useEffect(() => {
    const filteredRepos = searchQuery
      ? fetchResults.filter((repo) =>
          repo.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : fetchResults;
    setFilteredResults(filteredRepos);
  }, [searchQuery, fetchResults]);

  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentResults = filteredResults.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePrevPage = () => setCurrentPage((prev) => prev - 1);
  const handleNextPage = () => setCurrentPage((prev) => prev + 1);

  const handleDeleteRepo = (repoId: number) => {
    setFetchResults((prev) => prev.filter((repo) => repo.id !== repoId));
  };

  return (
    <div className="fragment mt-2">
      <Helmet title="Repository Home" />
      <div className="main-repo-container relative w-11/12 rounded-lg m-auto transition ease-linear duration-500">
        {isLoading ? (
          <RepositoryHomeSkeleton/>
        ) : errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
          <div className="all-repos-container grid place-items-center">
            {fetchResults && (
              <>
                <div className="flex justify-around w-11/12 m-auto mt-4 mb-4 lg:w-2/3">
                  <Suspense fallback={<div>Loading...</div>}>
                    <SearchBar
                      onSearch={setSearchQuery}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
                  </Suspense>
                </div>
                <h2 className="mb-3 text-lg font-semibold md:text-3xl md:mb-8 lg:text-2xl lg:mb-8">
                  My Public Repositories
                </h2>
              </>
            )}
            <Suspense fallback={<div>Loading...</div>}>
              <div className="repo-wrapper text-sm grid gap-2 md:text-2xl md:gap-4 lg:text-base lg:repo-grid lg:mb-7">
                {currentResults.map((repo) => (
                  <div
                    className="repo-container border w-11/12 m-auto border-secondary rounded-md grid place-items-center lg:w-full lg:rounded-lg lg:h-80"
                    key={repo.id}
                  >
                    <h3 className="font-bold md:text-3xl mt-3 lg:text-xl lg:font-medium lg:-mb-2">
                      {repo.name}
                    </h3>
                    <p className="m-1 mt-0 md:m-3">{repo.description}</p>
                    <div className="flex gap-2 mb-2 md:mb-3">
                      <Link
                        to={`/RepoDetails/${repo.id}`}
                        title="View repository details"
                      >
                        <button
                          type="button"
                          className="info-btn h-8 w-20 p-1 bg-tinWhite text-gray-800 hover:border-cyan-600 md:w-32 md:h-12 lg:w-28 lg:h-10"
                        >
                          More Info
                        </button>
                      </Link>
                      <button
                        type="button"
                        className="delete-btn h-8 p-1 w-20 bg-tinWhite text-gray-800 hover:border-cyan-600 md:w-32 md:h-12 lg:w-28 lg:h-10"
                        onClick={() => handleDeleteRepo(repo.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Suspense>
            <div className="pagination mt-5 mb-5 flex justify-center">
              <Suspense fallback={<div>Loading...</div>}>
                <button
                  className="h-8 p-1 w-20 bg-tinWhite text-gray-800 text-sm md:w-32 md:h-12 md:text-2xl lg:w-28 lg:h-10 lg:text-base"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  <FontAwesomeIcon className="mr-1" icon={faChevronLeft} />
                  Previous
                </button>
                <span className="m-1 text-sm md:m-2 md:text-2xl lg:text-base">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="h-8 py-0 w-20 text-sm bg-tinWhite text-gray-800 md:w-32 md:h-12 md:text-2xl md:py-1 lg:w-24 lg:h-10 lg:text-base relative"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <FontAwesomeIcon
                    className="ms-1 md:absolute md:bottom-[9px] md:mt-2.5 lg:left-16 lg:-top-[-1.2px]"
                    icon={faChevronRight}
                  />
                </button>
              </Suspense>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Repos;
