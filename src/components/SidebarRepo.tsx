import useFetch from "./UseFetch";
import { Link } from "react-router-dom";
import { useState, FC } from "react";
import SidebarSearchBar from "./SidebarSearch";
import SidebarSkeleton from "./skeletons/SidebarRepoSkeleton";

const SidebarRepoList: FC = () => {
  const [sidebarSearchQuery, setSidebarSearchQuery] = useState<string>("");

  interface SidebarRepoTypes {
    id: number;
    full_name: string;
  }

  const { data, error } = useFetch<SidebarRepoTypes[]>(
    "https://api.github.com/users/Kenbaz/repos"
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return (
      <SidebarSkeleton/>
    )
  }

  const filteredData = sidebarSearchQuery
    ? data.filter((repo) =>
        repo.full_name.toLowerCase().includes(sidebarSearchQuery.toLowerCase())
      )
    : data;

  return (
    <div className="sidebar-container lg:mt-10">
      <h3 className="ms-4 mb-3 font-medium">Top Repositories</h3>
      <div className="lg:w-11/12 lg:m-auto lg:h-10 lg:rounded-md">
        <SidebarSearchBar onSearch={setSidebarSearchQuery} />
      </div>
      <div className="sidebar-repo-wrapper ms-4 mt-2">
        {filteredData.map((repo) => (
          <div className="sidebar-repo-container mb-2" key={repo.id}>
            <Link to={`/RepoDetails/${repo.id}`}>
              <p className="data">{repo.full_name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarRepoList;
