import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

import {
  NewspaperIcon,
  OfficeBuildingIcon,
  PaperClipIcon,
} from "@heroicons/react/outline";

const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "5" },
  { label: "Beta Users", value: "521" },
  { label: "Raised", value: "$25M" },
];

const supportLinks = [
  {
    name: "Data centers",
    href: "/data-centers",
    description:
      "Have a look of our various data centers throughout the world from where we provision our hosting services.",
    label: "See our data centers",
    icon: OfficeBuildingIcon,
  },
  {
    name: "Blog",
    href: "/blog",
    description:
      "We post guides, tips and educational content on our blog. Read the latest articles on our blog over here.",
    label: "Visit our blog",
    icon: NewspaperIcon,
  },
  {
    name: "Media Kit",
    href: "/media",
    description:
      "If you are looking for our logos and banners in SVG, PNG and JPEG formats, you can find them over here.",
    label: "See our media center",
    icon: PaperClipIcon,
  },
];

export default function aboutPage() {
  const { data } = useSWR("/api/tickets", fetcher);

  return (
    <>
      {/* Title and Cards section */}
      <div className="bg-white">
        {/* Header */}
        <div className="relative pb-32 bg-gray-800">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80&&sat=-100"
              alt="People working on laptops"
            />
            <div
              className="absolute inset-0 bg-gray-600 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              About <span className="text-blue-600">BlessHost</span>
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              We are a team of designers, developers, marketers and geeks whose
              aim is to help their clients achieve the best on the internet.
            </p>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="-mt-32 max-w-7xl mx-auto relative z-10 pb-16 px-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            {supportLinks.map((link) => (
              <div
                key={link.name}
                className="flex flex-col bg-white rounded-2xl shadow-xl"
              >
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <div className="absolute top-0 p-5 inline-block bg-blue-600 rounded-xl shadow-lg transform -translate-y-1/2">
                    <link.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">
                    {link.name}
                  </h3>
                  <p className="mt-4 text-base text-gray-500">
                    {link.description}
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                  <Link href={link.href}>
                    <a className="text-base font-medium text-blue-700 hover:text-blue-600">
                      {link.label}
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* /Title and Cards Section */}

      <div className="relative mt-20">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/img/testimonials/shouket.jpg"
                  alt="Shouket Ali"
                />
                <div className="absolute inset-0 bg-blue-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-blue-600 opacity-70" />
                <div className="relative px-8">
                  <div>
                    <Image
                      width={144}
                      height={50}
                      className="h-12"
                      src="/img/aljazira.png"
                      alt="Al Jazira Royal Hotel"
                    />
                  </div>
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative">
                        Brilliant and skilled people with extensive web
                        development experience in complex e-commerce websites.
                        Thanks to their highly creative approach that led to
                        successful results.
                      </p>
                    </div>

                    <footer className="mt-4">
                      <p className="text-base font-semibold text-blue-200">
                        Shouket Ali, General Manager at Al Jazira Royal Hotel
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                On a mission to empower online businesses
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  Since day one, our aim is to help businesses get online and
                  help the existing online business reach their maximum
                  potential.
                </p>
                <p className="text-base leading-7">
                  We are not just another company providing web hosting and
                  development services. As our motto "Quality with
                  Affordability" defines it, we strive to deliver quality
                  services at an affordable price. We make sure we stay true to
                  our promise by working closely with our clients to ensure
                  their satisfaction.
                </p>
                <p className="text-base leading-7">
                  In the UAE, BlessHost has helped thousands of clients create
                  and optimize incredible online businesses. Unlike others, our
                  team is based in the United Arab Emirates and we are always
                  reachable. We have been expanding contiously over the past few
                  years, which has allowed us to provide hosting services from 4
                  data centers around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              BlessHost has helped thousands get online
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Here are some of the milestones that we have achieved.
            </p>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Tickets solved
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-600">
                      {data ?? "1391"}
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Data centers
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-600">
                      4
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Websites
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-600">
                      1K+
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Logo Cloud */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
            We have partnered with the best in the technology business
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Image
                layout="fixed"
                height={48}
                width={300}
                className="max-h-12"
                src="/img/logos/amd.svg"
                alt="AMD"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Image
                layout="fixed"
                height={48}
                width={300}
                className="max-h-12"
                src="/img/logos/cpanel.svg"
                alt="cPanel"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Image
                layout="fixed"
                height={48}
                width={300}
                className="max-h-12"
                src="/img/logos/statamic.svg"
                alt="Statamic"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Image
                layout="fixed"
                height={48}
                width={300}
                className="max-h-12"
                src="/img/logos/laravel.svg"
                alt="Laravel"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Image
                layout="fixed"
                height={48}
                width={300}
                className="max-h-12"
                src="/img/logos/dell.svg"
                alt="Dell"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Image
                layout="fixed"
                height={48}
                width={300}
                className="max-h-12"
                src="/img/logos/microsoft.svg"
                alt="Microsoft"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Image
                layout="fixed"
                height={48}
                width={300}
                className="max-h-12"
                src="/img/logos/intel.svg"
                alt="Intel"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Image
                layout="fixed"
                height={48}
                width={300}
                className="max-h-12"
                src="/img/logos/wordpress.svg"
                alt="WordPress"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Image
                layout="fixed"
                height={48}
                width={300}
                className="max-h-12"
                src="/img/logos/cloudflare.svg"
                alt="Cloudflare"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Image
                layout="fixed"
                height={48}
                width={300}
                className="max-h-12"
                src="/img/logos/sectigo.svg"
                alt="Sectigo"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Image
                layout="fixed"
                height={48}
                width={300}
                className="max-h-12"
                src="/img/logos/codeguard.svg"
                alt="CodeGuard"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Image
                layout="fixed"
                height={48}
                width={300}
                className="max-h-12"
                src="/img/logos/google-workspace.svg"
                alt="Google Workspace"
              />
            </div>
          </div>
        </div>
      </div>
      {/* /Partners Logo Cloud */}

      <section
        className="relative mb-10 bg-white"
        aria-labelledby="join-heading"
      >
        <div
          className="hidden absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:block"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto bg-blue-600 lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
              <div
                className="absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:hidden"
                aria-hidden="true"
              />
              <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                  <img
                    className="object-cover object-center rounded-3xl shadow-2xl"
                    src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                    alt="Two people talking in an office"
                  />
                </div>
              </div>
            </div>

            <div className="relative bg-blue-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
              <div
                className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-blue-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
                <svg
                  className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-blue-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
              </div>
              <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                <h2
                  className="text-3xl font-extrabold text-white"
                  id="join-heading"
                >
                  Join our team
                </h2>
                <p className="text-lg text-white">
                  Become a part of the BlessHost family and use your talents to
                  the best. We are one of the fastest growing digital agencies
                  in the UAE.
                </p>

                <Link href="/careers">
                  <a className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-blue-700 hover:bg-blue-gray-50 sm:inline-block sm:w-auto">
                    Explore open positions
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
