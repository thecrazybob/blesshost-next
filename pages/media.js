import TitleBar from "../components/title-bar";

const colors = [
  {
    name: "Bleu de France",
    hex: "#3e83f8",
    class: "bg-blesshost-blue",
  },
  {
    name: "Madison",
    hex: "#2a3e53",
    class: "bg-blesshost-darkblue",
  },
];

const files = [
  {
    title: "Logo Light",
    png: "/img/media-kit/1.png",
    svg: "/img/media-kit/1.svg",
    source: "/img/media-kit/1.svg",
  },
  {
    title: "Badge",
    png: "/img/media-kit/2.png",
    svg: "/img/media-kit/2.svg",
    source: "/img/media-kit/2.svg",
  },
  {
    title: "Cloud and BH",
    png: "/img/media-kit/3.png",
    svg: "/img/media-kit/3.svg",
    source: "/img/media-kit/3.svg",
  },
  {
    title: "Text under cloud",
    png: "/img/media-kit/4.png",
    svg: "/img/media-kit/4.svg",
    source: "/img/media-kit/4.svg",
  },
  {
    title: "Logo Dark",
    png: "/img/media-kit/1a.png",
    svg: "/img/media-kit/1a.svg",
    source: "/img/media-kit/1a.svg",
    dark: true,
  },
  {
    title: "Badge Dark",
    png: "/img/media-kit/2a.png",
    svg: "/img/media-kit/2a.svg",
    source: "/img/media-kit/2a.svg",
    dark: true,
  },
  {
    title: "Cloud and BH Dark",
    png: "/img/media-kit/3a.png",
    svg: "/img/media-kit/3a.svg",
    source: "/img/media-kit/3a.svg",
    dark: true,
  },
  {
    title: "Text under cloud Dark",
    png: "/img/media-kit/4a.png",
    svg: "/img/media-kit/4a.svg",
    source: "/img/media-kit/4a.svg",
    dark: true,
  },
  {
    title: "BH under cloud",
    png: "/img/media-kit/5.png",
    svg: "/img/media-kit/5.svg",
    source: "/img/media-kit/5.svg",
  },
  {
    title: "BH under cloud Dark",
    png: "/img/media-kit/5a.png",
    svg: "/img/media-kit/5a.svg",
    source: "/img/media-kit/5a.svg",
    dark: true,
  },
  {
    title: "BH cloud",
    png: "/img/media-kit/6.png",
    svg: "/img/media-kit/6.svg",
    source: "/img/media-kit/6.svg",
  },
  {
    title: "BH cloud Dark",
    png: "/img/media-kit/6a.png",
    svg: "/img/media-kit/6a.svg",
    source: "/img/media-kit/6a.svg",
    dark: true,
  },
];

export default function mediaPage() {
  return (
    <div className="text-center md:text-left mb-16 lg:mt-0 mx-auto max-w-7xl px-4 sm:px-6">
      <TitleBar
        subheading="About BlessHost"
        title="Media Kit"
        description="You can find a wide variety of our logos and banners designed to the perfection by the best of our designers."
      />
      <div>
        <ul
          role="list"
          className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {files.map((file) => (
            <li key={file.source} className="relative">
              <div
                className={`${
                  file.dark === true ? "bg-gray-800" : "bg-gray-100"
                } group block w-full aspect-w-10 aspect-h-7 rounded-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-blue-500 overflow-hidden`}
              >
                <img
                  src={file.source}
                  alt={file.title}
                  className="px-6 pointer-events-none group-hover:opacity-75"
                />
                <a
                  href={file.source}
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">View details for {file.title}</span>
                </a>
              </div>
              <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                {file.title}
              </p>
              <p className="block text-sm font-medium text-gray-500">
                <a
                  download
                  className="hover:border-b border-gray-800 transition-all ease-in-out duration-75"
                  href={file.svg}
                >
                  SVG
                </a>{" "}
                <a
                  download
                  className="hover:border-b border-gray-800 transition-all ease-in-out duration-75"
                  href={file.png}
                >
                  PNG
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <TitleBar
        title="Brand Colors"
        description="The amazing colors we use that make up our identity"
        subheading="Media Kit"
      />
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {colors.map((color) => (
          <div
            key={color.name}
            className="rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400"
          >
            <div className="flex-shrink-0">
              <div className={`h-10 w-10 rounded-full ${color.class}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="focus:outline-none">
                <p className="text-sm font-medium text-gray-900">
                  {color.name}
                </p>
                <p className="text-sm text-gray-500 truncate uppercase">
                  {color.hex}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(color.hex);
              }}
              type="button"
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Copy to clipboard
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
