import useFetch from "./UseFetch";
import { lazy, Suspense } from "react";
const Avatar = lazy(() => import("./Avatar"));
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import InfoSkeleton from "./skeletons/InfoSkeleton";

interface GitHubUser {
    public_repos: number
}

const Info: React.FC = () => {
    const { data, error } = useFetch<GitHubUser>("https://api.github.com/users/Kenbaz");

    if (error) {
        return (
            <div>
                Fetch Error, please refresh page
            </div>
        )
    }

    if (!data) {
        return (
            <InfoSkeleton/>
        )
    }

    const repoCount = data.public_repos;

    return (
      <div className="mt-3 grid place-items-center border-secondary border-b md:mb-5  lg:w-11/12 lg:m-auto lg:mb-4">
        <div className="md:grid md:place-items-center lg:mt-8">
          <div className="flex justify-center items-center gap-3 font-medium text-lg mb-2 md:text-3xl lg:text-2xl">
            <Suspense>
              <Avatar />
            </Suspense>
            <p>Kenneth Bassey</p>
          </div>
          <div className="text-sm mb-2 md:text-2xl lg:text-base">
            Web Developer <span className="text-secondary">|</span> HTML{" "}
            <span className="text-secondary">|</span> CSS{" "}
            <span className="text-secondary">|</span> JavaScript{" "}
            <span className="text-secondary">|</span> React <br />{" "}
            <span className="text-secondary">|</span> Python{" "}
            <span className="text-secondary">|</span> Django{" "}
            <span className="text-secondary">|</span> Tailwindcss
          </div>
          <div className="ms-20 mb-2 md:text-2xl md:mt-2 md:mb-3 lg:text-xl">
            <Suspense>Public Repository: {repoCount}</Suspense>
          </div>
          <div className="flex gap-4 justify-center items-center mb-1 md:mb-3 md:gap-8">
            <a href="mailto:kbassey016@gmail.com" target="_blank">
              <FontAwesomeIcon
                className="w-6 h-6 md:w-10 md:h-10 lg:w-8 lg:h-8"
                icon={faEnvelope}
              />
            </a>
            <a href="https://github.com/Kenbaz" target="_blank">
              <FontAwesomeIcon
                className="w-6 h-6 md:w-10 md:h-10 lg:w-8 lg:h-8"
                icon={faGithub}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/kenneth-bassey-593150251"
              target="_blank"
            >
              <FontAwesomeIcon
                className="w-6 h-6 md:w-10 md:h-10 lg:w-8 lg:h-8"
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
      </div>
    );
}

export default Info;