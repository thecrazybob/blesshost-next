import Image from "next/image";
import Link from "next/link";
import CTASimple from "./cta-simple";
import { useNextSanityImage } from "next-sanity-image";

export default function portfolio({
  header,
  footer = true,
  portfolio,
  client,
}) {
  return (
    <div
      className={
        header
          ? "relative bg-gray-50 pb-20 px-4 sm:px-6 lg:pb-16 lg:px-8 pt-16 lg:pt-24"
          : "relative bg-gray-50 pb-20 px-4 sm:px-6 lg:pb-16 lg:px-8 pt-0"
      }
    >
      {header ? (
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
      ) : null}
      <div className="relative mx-auto max-w-7xl">
        {header ? (
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Some of our work
            </h2>
            <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
              Here are some of the websites that we have helped our clients
              with.
            </p>
          </div>
        ) : null}
        <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {portfolio.map((item) => (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <a
                  href={item.websiteUrl}
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  <Image
                    alt="Website screenshot"
                    layout="intrinsic"
                    className="object-cover w-full h-48"
                    src={useNextSanityImage(client, item.mainImage)}
                  />
                </a>
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    <a>{item.category}</a>
                  </p>
                  <a
                    href={item.websiteUrl}
                    className="block mt-2"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    <p className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {item.subcategory}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!footer ? (
          <CTASimple
            className="-mb-16"
            normalText="Ready to get your own professional website?"
            strongText="Talk to us today!"
            normalButton={{
              label: "Learn more",
              href: "/website-design",
            }}
            strongButton={{ label: "Get in touch with us!", href: "/contact" }}
          />
        ) : (
          ""
        )}

        {footer ? (
          <div className="flex justify-center mt-10">
            <Link href="/portfolio">
              <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-blue-600 border border-gray-400 rounded-md hover:bg-blue-700">
                See our complete portfolio
              </a>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
