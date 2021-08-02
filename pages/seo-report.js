import Features from "../components/features-tick";
import FAQSDark from "../components/faqs-dark";
import CTASimple from "../components/cta-simple";
import Testimonials from "../components/testimonials";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    name: "Keyword rankings",
    description: "Your website's rank for its popular keywords",
  },
  {
    name: "Backlinks",
    description: "Number and quality of backlinks to your site",
  },
  {
    name: "Technical Insights",
    description: "Broken links, sitemap and access to crawlers",
  },
  {
    name: "Security Improvements",
    description: "SSL certificate, malicious scripts and reliability",
  },
  {
    name: "Speed analysis",
    description: "The time it takes to browse your website",
  },
  {
    name: "Off-page metrics",
    description: "Social media, reviews, and references to your website",
  },
  {
    name: "On-page metrics",
    description: "Title tags, descriptions, keywords and content",
  },
  {
    name: "Mobile friendliness",
    description: "Ease-of-navigation on mobile devices",
  },
];
const faqs = [
  {
    question: "What is SEO?",
    answer:
      "SEO is focused on bringing in website traffic through search result rankings, without paying for ads. It’s important to develop a strong SEO strategy because search engines are the primary source of traffic.",
  },
  {
    question: "How long does SEO take?",
    answer:
      "SEO requires ongoing attention and is definitely not a one time thing. Your SEO strategy takes time and planning to achieve and maintain search rankings, and overall traffic growth.",
  },
  {
    question: "Can I just buy ads and skip SEO?",
    answer:
      "SEO and paid advertising work better when used together. SEO creates awareness and interest through content, where as paid advertising tends to drive users to take action.",
  },
  {
    question: "What will the SEO report include?",
    answer:
      "The SEO report will include a score for your website, on-site and off-site SEO analysis, and recommendations on how to improve your SEO score. The SEO report will be sent to you via email.",
  },
];
export default function seoReportPage() {
  return (
    <>
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Get a </span>
              <span className="block xl:inline">free complete </span>
              <span className="block text-blue-600 xl:inline">SEO Report</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Find out how your website is currently doing on the leaderboards
              of search engines like Google.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#form"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Fill the form
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="/seo">
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    View our SEO plans
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            layout="fill"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2791&q=80"
            alt=""
          />
        </div>
      </main>

      <Features
        title="What does our SEO report include?"
        description="We analyze multiple SEO factors in our SEO report."
        features={features}
      />

      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              layout="fill"
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1612914033131-2fbd331a3806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80"
              alt=""
            />
          </div>
        </div>
        <div
          id="form"
          className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2"
        >
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Request a free SEO report
              </h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                Our comprehensive SEO report includes the result of multiple
                on-site and off-site tests on your website. It also points out
                recommendations so you can act on it and improve your search
                engine rankings.
              </p>
              <form
                action="#"
                method="POST"
                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div className="sm:col-span-2">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <span
                      id="phone_description"
                      className="text-sm text-gray-500"
                    >
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone_description"
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company Website
                    </label>
                    <span
                      id="company_website"
                      className="text-sm text-gray-500"
                    >
                      Please enter a valid URL
                    </span>
                  </div>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">https://</span>
                    </div>
                    <input
                      type="text"
                      name="company_website"
                      id="company_website"
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="how_did_you_hear_about_us"
                      className="block text-sm font-medium text-gray-700"
                    >
                      How did you hear about us?
                    </label>
                    <span
                      id="phone_description"
                      className="text-sm text-gray-500"
                    >
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="how_did_you_hear_about_us"
                      id="how_did_you_hear_about_us"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="text-right sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <FAQSDark faqs={faqs} />
      <CTASimple
        normalText="Do you want our team to manage your SEO?"
        strongText="Sign up for one of our SEO plans"
        normalButton={{ label: "Get SEO report", href: "#form" }}
        strongButton={{ label: "View our SEO plans", href: "/seo" }}
      />
    </>
  );
}
