import Date from "./date";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ posts }) {
  return (
    <div className="relative bg-gray-50 pt-16 pb-12 px-4 sm:px-6 lg:pt-24 lg:pb- lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            From our blog
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            We post guides, tips and educational content on our blog. Here are
            some of the latests from our blog.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map(
            ({
              node: {
                title,
                slug,
                excerpt,
                author,
                featuredImage,
                categories,
                readingTime,
                date,
              },
            }) => (
              <div
                key={title}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <Link href={`/blog/${slug}`}>
                    <a aria-label="Open blog post">
                      <Image
                        className="h-48 w-full object-cover"
                        src={featuredImage.node.sourceUrl}
                        alt=""
                        layout="responsive"
                        height="192"
                        width="328"
                      />
                    </a>
                  </Link>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-600">
                      {categories.nodes[0].name}
                    </p>
                    <Link href={`/blog/${slug}`}>
                      <a className="block mt-2">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: title,
                          }}
                          className="text-xl font-semibold text-gray-900"
                        ></p>
                        <div
                          className="mt-3 text-base text-gray-500"
                          dangerouslySetInnerHTML={{
                            __html: excerpt,
                          }}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{author.node.name}</span>
                      <Image
                        className="h-10 w-10"
                        src={author.node.avatar.url}
                        alt="Avatar"
                        layout="fixed"
                        height="40"
                        width="40"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {author.node.name}
                      </p>
                      <div className="flex space-x-1 text-gray-500">
                        <Date dateString={date} />
                        <span aria-hidden="true">&middot;</span>
                        <span>{readingTime} min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
