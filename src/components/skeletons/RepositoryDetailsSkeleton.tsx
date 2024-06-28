import SkeletonBaseElement from "./SkeletonBase";

const RepositoryDetailsSkeleton: React.FC = () => {
    return (
      <div className="details-fragment">
        <div className="grid justify-center mb-10">
          <SkeletonBaseElement type="w-80 h-8 mb-3" />
          <SkeletonBaseElement type="w-60 h-7 mb-2 ms-[45px]" />
        </div>

        <div className="details-container lg:w-1/2 lg:m-auto">
          <main className="main-details">
            <SkeletonBaseElement type="w-72 h-6 mb-1 md:mb-2 ms-2 md:ms-4" />
            <SkeletonBaseElement type="w-72 h-6 mb-1 md:mb-2 ms-2 md:ms-4" />
            <SkeletonBaseElement type="w-72 h-6 mb-1 md:mb-2 ms-2 md:ms-4" />
           
            <SkeletonBaseElement type="w-72 h-6 mt-5 mb-1 md:mb-2 ms-2 md:ms-4" />
            <SkeletonBaseElement type="w-72 h-6 mb-1 md:mb-2 ms-2 md:ms-4" />
            <SkeletonBaseElement type="w-72 h-6 mb-1 md:mb-2 ms-2 md:ms-4" />
            
            <SkeletonBaseElement type="w-72 mt-5 h-6 mb-1 md:mb-2 ms-2 md:ms-4" />
            <SkeletonBaseElement type="w-72 h-6 mb-1 md:mb-2 ms-2 md:ms-4" />
            <SkeletonBaseElement type="w-72 h-6 mb-1 md:mb-2 ms-2 md:ms-4" />
          </main>
        </div>

        <div className="flex justify-center items-center gap-2 md:mt-10 md:gap-5">
          <SkeletonBaseElement type="w-36 h-12 md:w-44 md:h-16 lg:w-36 lg:h-14" />
          <SkeletonBaseElement type="w-36 h-12 md:w-44 md:h-16 lg:w-36 lg:h-14" />
        </div>
      </div>
    );
}

export default RepositoryDetailsSkeleton;