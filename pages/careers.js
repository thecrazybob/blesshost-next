import { CheckIcon } from "@heroicons/react/outline";
import { client } from "../lib/sanity";
import Seo from "../components/seo";

const jobs = [
  {
    department: "Marketing",
    title: "Marketing Coordinator",
    description:
      "We are looking for someone who has extensive expertise in social media marketing. Additionally, expertise in other forms of marketing is plus, such as email marketing.",
    requirements: [
      "Knowledge of SEO",
      "Knowledge of social media marketing",
      "Ability to manipulate images",
      "Ability to research keywords",
      "Ability to create reports",
      "Fluent or Native English",
      "Remote option is available",
      "Ability to use Google Adwords, Hootsuite etc.",
    ],
  },
  {
    department: "Development",
    title: "WordPress Developer",
    description:
      "We are looking for someone who has extensive expertise in website development. Additionally, expertise in graphics design is a plus. The applicant should have a portfolio of at least 5 websites.",
    requirements: [
      "Expert in WordPress and its customization",
      "Knowledge of HTML, CSS, PHP, JavaScript",
      "Ability to design responsive websites",
      "Familiar with Search Engine Optimization",
      "Ability to create reports",
      "Fluent or Native English",
      "Remote option is available",
      "Ability to use Google Adwords, Hootsuite etc.",
    ],
  },
];

export default function careersPage({ seo }) {
  return (
    <>
      <Seo seo={seo} />
      {/* Title Section */}
      <div className="relative bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=60&&sat=-100"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-700 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Become a part of BlessHost
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Join one of the fastest digital agencies in the UAE and help us make
            websites that stand out.
          </p>
        </div>
      </div>
      {/* /Title Section */}
      {/* Available positions */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto pb-8 pt-16 px-4 sm:pt-24 sm:px-6 lg:px-8">
          <div className="pb-16 xl:flex xl:items-center xl:justify-between">
            <div>
              <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                <span className="text-gray-900">Currently Open </span>
                <span className="text-blue-600">Positions</span>
              </h1>
              <p className="mt-5 text-xl text-gray-500">
                We are currently looking for talent in the following areas:
              </p>
            </div>
            <div className="text-gray-500">
              To apply, send an email with the job title to
              careers@blesshost.com
            </div>
          </div>
          {jobs.map((job, index) => {
            return (
              <div
                key={index}
                className="border-t border-gray-200 py-16 xl:grid xl:grid-cols-3 xl:items-center xl:gap-x-8"
              >
                <div>
                  <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
                    {job.department}
                  </h2>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900">
                    {job.title}
                  </p>
                  <p className="mt-4 text-lg text-gray-500">
                    {job.description}
                  </p>
                </div>
                <div className="mt-4 sm:mt-8 md:mt-10 md:pt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
                  <ul className="divide-y divide-gray-200">
                    {job.requirements.slice(0, 4).map((feature, featureIdx) =>
                      featureIdx === 0 ? (
                        <li key={feature} className="py-4 flex md:py-0 md:pb-4">
                          <CheckIcon
                            className="flex-shrink-0 h-6 w-6 text-green-500"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base text-gray-500">
                            {feature}
                          </span>
                        </li>
                      ) : (
                        <li key={feature} className="py-4 flex">
                          <CheckIcon
                            className="flex-shrink-0 h-6 w-6 text-green-500"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base text-gray-500">
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                  <ul className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
                    {job.requirements.slice(4).map((feature, featureIdx) =>
                      featureIdx === 0 ? (
                        <li
                          key={feature}
                          className="py-4 flex md:border-t-0 md:py-0 md:pb-4"
                        >
                          <CheckIcon
                            className="flex-shrink-0 h-6 w-6 text-green-500"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base text-gray-500">
                            {feature}
                          </span>
                        </li>
                      ) : (
                        <li key={feature} className="py-4 flex">
                          <CheckIcon
                            className="flex-shrink-0 h-6 w-6 text-green-500"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base text-gray-500">
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* /Available Positions */}
      <div className="bg-gray-100 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Explore Remote Job Opportunities in Dubai
          </h2>
          <a
            href="https://www.remotedxb.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.remotedxb.com/img/twitter-profile.jpg"
              alt="RemoteDXB Logo"
              className="mx-auto mt-8 w-36"
            />
          </a>
          <p className="mt-4 text-lg text-gray-500">
            Visit <a className="text-blue-600" href="https://www.remotedxb.com" target="_blank" rel="noopener noreferrer">Remote Jobs in Dubai</a> to discover more remote job opportunities.
          </p>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  let [{ seo: seo }] = await client.fetch(
    '*[_type == "page" && seo.pageTitle == "Careers"]'
  );
  return {
    props: {
      seo,
    },
  };
}
