import SkeletonBaseElement from "./SkeletonBase";

const InfoSkeleton: React.FC = () => {
  return (
    <div className="grid place-items-center relative border-secondary border-b md:mb-5 lg:w-11/12 lg:m-auto lg:mb-8">
      <div className="md:grid md:place-items-center lg:mt-5">
        <div className="flex justify-center items-center gap-3 font-medium text-lg mb-2 md:text-3xl lg:text-2xl">
          {/* Placeholder for Avatar */}
          <SkeletonBaseElement type="w-10 h-10 rounded-full md:w-20 md:h-20 lg:w-16 lg:h-16" />

          <SkeletonBaseElement type="w-28 h-6 md:w-60 lg:w-40" />
        </div>
        <div className="text-sm mb-2 md:text-2xl lg:text-base">
          <SkeletonBaseElement type="w-full md:w-96 lg:w-72 h-6" />
        </div>
        <div className="ms-20 mb-2 md:text-2xl md:mt-2 md:mb-3 lg:text-xl">
          {/* Placeholder for Repository Count */}
          <SkeletonBaseElement type="w-32 md:w-48 lg:w-72 h-6" />
        </div>
        <div className="flex gap-4 justify-center items-center mb-1 md:mb-3 md:gap-8">
          {/* Placeholder for Font Awesome Icons */}
          <SkeletonBaseElement type="w-6 h-6 md:w-10 md:h-10 lg:w-8 lg:h-8" />
          <SkeletonBaseElement type="w-6 h-6 md:w-10 md:h-10 lg:w-8 lg:h-8" />
          <SkeletonBaseElement type="w-6 h-6 md:w-10 md:h-10 lg:w-8 lg:h-8" />
        </div>
      </div>
    </div>
  );
}

export default InfoSkeleton;
