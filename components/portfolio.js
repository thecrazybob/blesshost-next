import Image from "next/image";
import Link from "next/link";

export default function portfolio(props) {
  return (
    <div
      className={
        props.header
          ? "relative bg-gray-50 pb-20 px-4 sm:px-6 lg:pb-16 lg:px-8 pt-16 lg:pt-24"
          : "relative bg-gray-50 pb-20 px-4 sm:px-6 lg:pb-16 lg:px-8 pt-0"
      }
    >
      {props.header ? (
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
      ) : null}
      <div className="relative max-w-7xl mx-auto">
        {props.header ? (
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Some of our work
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Here are some of the websites that we have helped our clients
              with.
            </p>
          </div>
        ) : null}
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {props.portfolio.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <a href={item.href} target="_blank" rel="noreferrer">
                  <Image
                    layout="intrinsic"
                    className="h-48 w-full object-cover"
                    src={item.image}
                  />
                </a>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    <a href={item.category.href} className="hover:underline">
                      {item.category.name}
                    </a>
                  </p>
                  <a href={item.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {item.description}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/portfolio">
            <a className="inline-flex border items-center justify-center px-5 py-3 border-gray-400 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              See our complete portfolio
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
