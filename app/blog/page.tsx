import ImageComponent from "@/components/common/image";
import blogPageData from "@/dummyData/pageData/pages/blog";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-5 px-4 md:px-10 w-full max-w-[1920px] mx-auto border border-blue-500">
      <h1 className="text-4xl font-bold text-center pt-10">
        {blogPageData.title}
      </h1>
      <p className="text-gray-600 text-center max-w-3xl">
        {blogPageData.description}
      </p>

      {/* Grid wrapper */}
      <div className="w-full max-w-7xl border-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogPageData.items.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl border bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-[220px] sm:h-[240px] md:h-[260px] overflow-hidden">
                <ImageComponent
                  src={item.cover}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={800}
                  height={600}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h2 className="text-xl font-semibold line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-base text-gray-600 line-clamp-3">
                  {item.description}
                </p>

                {/* CTA sticks to bottom */}
                <Link href={"blog/" + item.id.toString()} className="mt-auto">
                  <button className="mt-auto inline-flex items-center justify-center self-start rounded-md border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
