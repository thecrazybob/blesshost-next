import Date from "./date";
import Link from "next/link";
import Image from 'next/image'


export default function BlogCard({ posts }) {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map(({ node }) => (
            <div
              key={node.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={node.featuredImage.node.sourceUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a
                      href={node.categories.nodes[0].link}
                      className="hover:underline"
                    >
                      {node.categories.nodes[0].name}
                    </a>
                  </p>
                  <Link href={`/blog/${node.slug}`}>
                    <a className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {node.title}
                      </p>
                      <div
                        className="mt-3 text-base text-gray-500"
                        dangerouslySetInnerHTML={{ __html: node.excerpt }}
                      />
                    </a>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <span className="sr-only">{node.author.node.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={node.author.node.avatar.url}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href="#" className="hover:underline">
                        {node.author.node.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <Date dateString={node.date} />
                      <span aria-hidden="true">&middot;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
