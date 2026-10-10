const Loading = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 space-y-6">
        {/* Page Heading Skeleton */}
        <div className="space-y-2 animate-pulse">
          <div className="h-8 w-52 rounded-lg bg-base-300" />
          <div className="h-4 w-72 max-w-full rounded bg-base-300" />
        </div>

        {/* Category Skeleton */}
        <div className="flex gap-3 overflow-hidden animate-pulse">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-10 min-w-24 rounded-xl bg-base-300"
            />
          ))}
        </div>

        {/* Product Cards Skeleton */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse space-y-3 rounded-xl border border-gray-300 bg-base-100 p-4"
            >
              {/* Product Image and Name */}
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 shrink-0 rounded-lg bg-base-300" />

                <div className="flex-1 space-y-2">
                  <div className="h-6 w-3/4 rounded bg-base-300" />
                  <div className="h-4 w-1/2 rounded bg-base-300" />
                </div>
              </div>

              {/* Price and Change */}
              <div className="flex items-end justify-between gap-3">
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-24 rounded bg-base-300" />
                  <div className="h-9 w-36 max-w-full rounded bg-base-300" />
                </div>

                <div className="h-8 w-20 shrink-0 rounded-xl bg-base-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;