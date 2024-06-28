import SkeletonBaseElement from "./SkeletonBase";

const SidebarSkeleton: React.FC = () => {
    return (
      <>
        <div className="sidebar-container lg:mt-10">
          <SkeletonBaseElement type="w-36 h-6 mb-3 ml-4 font-medium" />

          <div className="lg:w-11/12 lg:m-auto lg:h-8">
            <SkeletonBaseElement type="w-full h-full" />
          </div>
          <div className="sidebar-repo-wrapper ms-4 mt-2">
            <SkeletonBaseElement type="w-[200px] h-5 mb-2" />
            <SkeletonBaseElement type="w-[200px] h-5 mb-2" />
            <SkeletonBaseElement type="w-[200px] h-5 mb-2" />
            <SkeletonBaseElement type="w-[200px] h-5 mb-2" />
            <SkeletonBaseElement type="w-[200px] h-5 mb-2" />
            <SkeletonBaseElement type="w-[200px] h-5 mb-2" />
            <SkeletonBaseElement type="w-[200px] h-5 mb-2" />
            <SkeletonBaseElement type="w-[200px] h-5 mb-2" />
            <SkeletonBaseElement type="w-[200px] h-5 mb-2" />
            <SkeletonBaseElement type="w-[200px] h-5 mb-2" />
            <SkeletonBaseElement type="w-[200px] h-5 mb-2" />
            <SkeletonBaseElement type="w-[200px] h-5 mb-2" />
            <SkeletonBaseElement type="w-[200px] h-5 mb-2" />
            <SkeletonBaseElement type="w-[200px] h-5 mb-2" />
          </div>
        </div>
      </>
    );
}

export default SidebarSkeleton;