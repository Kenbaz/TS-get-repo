import SkeletonBaseElement from "./SkeletonBase";

const RepositoryHomeSkeleton: React.FC = () => {
  return (
    <div className="fragment mt-2">
      <div className="main-repo-container w-11/12 rounded-lg m-auto transition ease-linear duration-500">
        <div className="all-repos-container grid place-items-center gap-3">
          <SkeletonBaseElement type="w-40 md:w-80 lg:w-96 h-8 md:h-12 lg:h-10" />
          <div className="repo-wrapper gap-3 w-11/12 grid md:gap-4 lg:repo-grid lg:mb-7">
            <div className="repo-container border w-11/12 m-auto border-secondary rounded-md grid place-items-center lg:w-full lg:rounded-lg lg:h-64">
              <SkeletonBaseElement type=" title w-36 md:w-48 lg:w-64 h-6 md:h-12 lg:text-xl lg:font-medium mt-3" />
              <SkeletonBaseElement type=" text" />
              <SkeletonBaseElement type=" text" />
              <SkeletonBaseElement type=" text" />
              <div className="mt-2 flex gap-2 mb-2 md:mb-3">
                <SkeletonBaseElement type="w-24 h-8 md:w-32 md:h-12 lg:w-28 lg:h-10" />
                <SkeletonBaseElement type="w-24 h-8 md:w-32 md:h-12 lg:w-28 lg:h-10" />
              </div>
            </div>
            <div className="repo-container border w-11/12 m-auto border-secondary rounded-md grid place-items-center lg:w-full lg:rounded-lg lg:h-64">
              <SkeletonBaseElement type=" title w-36 md:w-48 lg:w-64 h-6 md:h-12 lg:text-xl lg:font-medium mt-3" />
              <SkeletonBaseElement type=" text" />
              <SkeletonBaseElement type=" text" />
              <SkeletonBaseElement type=" text" />
              <div className="mt-2 flex gap-2 mb-2 md:mb-3">
                <SkeletonBaseElement type="w-24 h-8 md:w-32 md:h-12 lg:w-28 lg:h-10" />
                <SkeletonBaseElement type="w-24 h-8 md:w-32 md:h-12 lg:w-28 lg:h-10" />
              </div>
            </div>
            <div className="repo-container border w-11/12 m-auto border-secondary rounded-md grid place-items-center lg:w-full lg:rounded-lg lg:h-64">
              <SkeletonBaseElement type=" title w-36 md:w-48 lg:w-64 h-6 md:h-12 lg:text-xl lg:font-medium mt-3" />
              <SkeletonBaseElement type=" text" />
              <SkeletonBaseElement type=" text" />
              <SkeletonBaseElement type=" text" />
              <div className="mt-2 flex gap-2 mb-2 md:mb-3">
                <SkeletonBaseElement type="w-24 h-8 md:w-32 md:h-12 lg:w-28 lg:h-10" />
                <SkeletonBaseElement type="w-24 h-8 md:w-32 md:h-12 lg:w-28 lg:h-10" />
              </div>
            </div>
            <div className="repo-container border w-11/12 m-auto border-secondary rounded-md grid place-items-center lg:w-full lg:rounded-lg lg:h-64">
              <SkeletonBaseElement type=" title w-36 md:w-48 lg:w-64 h-6 md:h-12 lg:text-xl lg:font-medium mt-3" />
              <SkeletonBaseElement type=" text" />
              <SkeletonBaseElement type=" text" />
              <SkeletonBaseElement type=" text" />
              <div className="mt-2 flex gap-2 mb-2 md:mb-3">
                <SkeletonBaseElement type="w-24 h-8 md:w-32 md:h-12 lg:w-28 lg:h-10" />
                <SkeletonBaseElement type="w-24 h-8 md:w-32 md:h-12 lg:w-28 lg:h-10" />
              </div>
            </div>
          </div>
          <div className="flex justify-around gap-3">
            <SkeletonBaseElement type="w-24 md:w-24 lg:w-36 h-8 md:h-12 lg:mb-5" />
            <SkeletonBaseElement type="h-8 w-24 md:h-12 md:w-24 lg:w-36 lg:mb-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepositoryHomeSkeleton;
