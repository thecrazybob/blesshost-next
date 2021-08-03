import { CheckIcon, XIcon } from "@heroicons/react/solid";
import AlternatingFeature from "../components/features-alternating";
import Testimonials from "../components/testimonials";
import SimpleCTA from "../components/cta-simple";
import FAQSDark from "../components/faqs-dark";
import { useState } from "react";
import { useCurrency } from "../contexts/CurrencyContext.js";
import priceString from "../lib/pricing";

const plans = [
  {
    pid: 1,
    title: "Starter",
    featured: false,
    description: "All your essential business finances, taken care of.",
    mainFeatures: [
      { id: 1, value: "3 GB storage" },
      { id: 2, value: "Unlimited traffic" },
      { id: 3, value: "Unlimited email accounts" },
      { id: 4, value: "Unlimited databases" },
      { id: 5, value: "One-click installer" },
      { id: 6, value: "Instant setup" },
      { id: 7, value: "24/7 support" },
    ],
  },
  {
    pid: 3,
    title: "Business",
    featured: true,
    description: "The best financial services for your thriving business.",
    mainFeatures: [
      { id: 1, value: "20 GB storage" },
      { id: 2, value: "Unlimited traffic" },
      { id: 3, value: "Unlimited email accounts" },
      { id: 4, value: "Unlimited databases" },
      { id: 5, value: "One-click installer" },
      { id: 6, value: "Instant setup" },
      { id: 7, value: "24/7 support" },
    ],
  },
  {
    pid: 2,
    title: "Professional",
    featured: false,
    description: "Convenient features to take your business to the next level.",
    mainFeatures: [
      { id: 1, value: "7 GB storage" },
      { id: 2, value: "Unlimited traffic" },
      { id: 3, value: "Unlimited email accounts" },
      { id: 4, value: "Unlimited databases" },
      { id: 5, value: "One-click installer" },
      { id: 6, value: "Instant setup" },
      { id: 7, value: "24/7 support" },
    ],
  },
];
const features = [
  {
    title: "Tax Savings",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Easy to use accounting",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Multi-accounts",
    tiers: [
      { title: "starter", value: "3 accounts" },
      { title: "popular", featured: true, value: "Unlimited accounts" },
      { title: "intermediate", value: "7 accounts" },
    ],
  },
  {
    title: "Invoicing",
    tiers: [
      { title: "starter", value: "3 invoices" },
      { title: "popular", featured: true, value: "Unlimited invoices" },
      { title: "intermediate", value: "10 invoices" },
    ],
  },
  {
    title: "Exclusive offers",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "6 months free advisor",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Mobile and web access",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: false },
    ],
  },
];
const perks = [
  {
    title: "24/7 customer support",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Instant notifications",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Budgeting tools",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Digital receipts",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Pots to separate money",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Free bank transfers",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: false },
    ],
  },
  {
    title: "Business debit card",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: false },
    ],
  },
];
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function simpleHostingPage() {
  const [billingInterval, setBillingInterval] = useState("annually");
  const { currency, setCurrency } = useCurrency("");

  return (
    <main>
      {/* Hero card */}
      <div className="relative bg-white">
        <div className="absolute inset-x-0 bottom-0 h-1/2" />
        <div className="mx-auto">
          <div className="relative shadow-xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-blue-700 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-48 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">
                  Traditional hosting with{" "}
                </span>
                <span className="block text-blue-200">
                  Reliability, Security & Performance Built-In
                </span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-blue-200 sm:max-w-3xl">
                You focus on building great sites. We'll do the rest.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <a
                    href="#more"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 sm:px-8"
                  >
                    Learn more
                  </a>
                  <a
                    href="#pricing"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                  >
                    View plans
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing section */}
      <div id="pricing">
        <div className="relative bg-blue-600">
          {/* Overlapping background */}
          <div
            aria-hidden="true"
            className="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block"
          />

          <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              <span className="block lg:inline">Simple pricing, </span>
              <span className="block lg:inline">no commitment.</span>
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Everything you need, nothing you don't. Pick a plan that best
              suits your business.
            </p>
          </div>

          <h2 className="sr-only">Plans</h2>

          {/* Toggle */}
          <div className="relative mt-12 flex justify-center sm:mt-16">
            <div className="bg-blue-700 p-0.5 rounded-lg flex">
              <button
                onClick={() => setBillingInterval("annually")}
                type="button"
                className={`${
                  billingInterval === "annually"
                    ? "relative bg-white  border-blue-700 shadow-sm text-blue-700 whitespace-nowrap hover:bg-blue-50"
                    : "ml-0.5 relative border border-transparent text-blue-200  hover:bg-blue-800"
                }
                whitespace-nowrap py-2 px-6 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white focus:z-10`}
              >
                Yearly billing
              </button>
              <button
                onClick={() => setBillingInterval("monthly")}
                type="button"
                className={`${
                  billingInterval === "monthly"
                    ? "relative bg-white  border-blue-700 shadow-sm text-blue-700 whitespace-nowrap hover:bg-blue-50"
                    : "ml-0.5 relative border border-transparent text-blue-200  hover:bg-blue-800"
                }
                whitespace-nowrap py-2 px-6 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white focus:z-10`}
              >
                Monthly billing
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
            {/* Decorative background */}
            <div
              aria-hidden="true"
              className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-blue-700 rounded-tl-lg rounded-tr-lg lg:block"
            />

            <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
              {plans.map((plan, id, pid) => {
                return (
                  <div
                    key={plan.title}
                    className={classNames(
                      plan.featured
                        ? "bg-white ring-2 ring-blue-700 shadow-md"
                        : "bg-blue-700 lg:bg-transparent",
                      "pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12"
                    )}
                  >
                    <div>
                      <h3
                        className={classNames(
                          plan.featured ? "text-blue-600" : "text-white",
                          "text-sm font-semibold uppercase tracking-wide"
                        )}
                      >
                        {plan.title}
                      </h3>
                      <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                        <div className="mt-3 flex items-center">
                          <p
                            className={classNames(
                              plan.featured ? "text-blue-600" : "text-white",
                              "text-4xl font-extrabold tracking-tight"
                            )}
                          >
                            {priceString({
                              pid: plan.pid,
                              term: billingInterval,
                              currency: currency,
                              monthlyPricing: true,
                            })}
                          </p>
                          <div className="ml-4">
                            <p
                              className={classNames(
                                plan.featured ? "text-gray-700" : "text-white",
                                "text-sm"
                              )}
                            >
                              {" "}
                              {billingInterval == "annually"
                                ? "yearly"
                                : billingInterval}
                            </p>
                            <p
                              className={classNames(
                                plan.featured
                                  ? "text-gray-500"
                                  : "text-blue-200",
                                "text-sm"
                              )}
                            >
                              Billed {billingInterval} (
                              {priceString({
                                pid: plan.pid,
                                term: billingInterval,
                                currency: currency,
                              })}
                              )
                            </p>
                          </div>
                        </div>
                        <a
                          href="#"
                          className={classNames(
                            plan.featured
                              ? "bg-blue-600 text-white hover:bg-blue-700"
                              : "bg-white text-blue-600 hover:bg-blue-50",
                            "mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
                          )}
                        >
                          Buy {plan.title}
                        </a>
                      </div>
                    </div>
                    <h4 className="sr-only">Features</h4>
                    <ul
                      className={classNames(
                        plan.featured
                          ? "border-gray-200 divide-gray-200"
                          : "border-blue-500 divide-blue-500 divide-opacity-75",
                        "mt-7 border-t divide-y lg:border-t-0"
                      )}
                    >
                      {plan.mainFeatures.map((mainFeature) => (
                        <li
                          key={mainFeature.id}
                          className="py-3 flex items-center"
                        >
                          <CheckIcon
                            className={classNames(
                              plan.featured ? "text-blue-500" : "text-blue-200",
                              "w-5 h-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          <span
                            className={classNames(
                              plan.featured ? "text-gray-600" : "text-white",
                              "ml-4 text-sm font-medium"
                            )}
                          >
                            {mainFeature.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Feature comparison */}
        <section
          aria-labelledby="mobileComparisonHeading"
          className="lg:hidden"
        >
          <h2 id="mobileComparisonHeading" className="sr-only">
            Feature comparison
          </h2>

          <div className="mt-16 max-w-2xl mx-auto px-4 space-y-16 sm:px-6">
            {plans.map((plan, planIndex) => (
              <div key={plan.title} className="border-t border-gray-200">
                <div
                  className={classNames(
                    plan.featured ? "border-blue-600" : "border-transparent",
                    "-mt-px pt-6 border-t-2 sm:w-1/2"
                  )}
                >
                  <h3
                    className={classNames(
                      plan.featured ? "text-blue-600" : "text-gray-900",
                      "text-sm font-bold"
                    )}
                  >
                    {plan.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {plan.description}
                  </p>
                </div>
                <h4 className="mt-10 text-sm font-bold text-gray-900">
                  Catered for business
                </h4>

                <div className="mt-6 relative">
                  {/* Fake card background */}
                  <div
                    aria-hidden="true"
                    className="hidden absolute inset-0 pointer-events-none sm:block"
                  >
                    <div
                      className={classNames(
                        plan.featured ? "shadow-md" : "shadow",
                        "absolute right-0 w-1/2 h-full bg-white rounded-lg"
                      )}
                    />
                  </div>

                  <div
                    className={classNames(
                      plan.featured
                        ? "ring-2 ring-blue-600 shadow-md"
                        : "ring-1 ring-black ring-opacity-5 shadow",
                      "relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none"
                    )}
                  >
                    <dl className="divide-y divide-gray-200">
                      {features.map((feature) => (
                        <div
                          key={feature.title}
                          className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2"
                        >
                          <dt className="pr-4 text-sm font-medium text-gray-600">
                            {feature.title}
                          </dt>
                          <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                            {typeof feature.tiers[planIndex].value ===
                            "string" ? (
                              <span
                                className={classNames(
                                  feature.tiers[planIndex].featured
                                    ? "text-blue-600"
                                    : "text-gray-900",
                                  "text-sm font-medium"
                                )}
                              >
                                {feature.tiers[planIndex].value}
                              </span>
                            ) : (
                              <>
                                {feature.tiers[planIndex].value === true ? (
                                  <CheckIcon
                                    className="mx-auto h-5 w-5 text-blue-600"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <XIcon
                                    className="mx-auto h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[planIndex].value === true
                                    ? "Yes"
                                    : "No"}
                                </span>
                              </>
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  {/* Fake card border */}
                  <div
                    aria-hidden="true"
                    className="hidden absolute inset-0 pointer-events-none sm:block"
                  >
                    <div
                      className={classNames(
                        plan.featured
                          ? "ring-2 ring-blue-600"
                          : "ring-1 ring-black ring-opacity-5",
                        "absolute right-0 w-1/2 h-full rounded-lg"
                      )}
                    />
                  </div>
                </div>

                <h4 className="mt-10 text-sm font-bold text-gray-900">
                  Other perks
                </h4>

                <div className="mt-6 relative">
                  {/* Fake card background */}
                  <div
                    aria-hidden="true"
                    className="hidden absolute inset-0 pointer-events-none sm:block"
                  >
                    <div
                      className={classNames(
                        plan.featured ? "shadow-md" : "shadow",
                        "absolute right-0 w-1/2 h-full bg-white rounded-lg"
                      )}
                    />
                  </div>

                  <div
                    className={classNames(
                      plan.featured
                        ? "ring-2 ring-blue-600 shadow-md"
                        : "ring-1 ring-black ring-opacity-5 shadow",
                      "relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none"
                    )}
                  >
                    <dl className="divide-y divide-gray-200">
                      {perks.map((perk) => (
                        <div
                          key={perk.title}
                          className="py-3 flex justify-between sm:grid sm:grid-cols-2"
                        >
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                            {perk.title}
                          </dt>
                          <dd className="text-center sm:px-4">
                            {perk.tiers[planIndex].value === true ? (
                              <CheckIcon
                                className="mx-auto h-5 w-5 text-blue-600"
                                aria-hidden="true"
                              />
                            ) : (
                              <XIcon
                                className="mx-auto h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            )}

                            <span className="sr-only">
                              {perk.tiers[planIndex].value === true
                                ? "Yes"
                                : "No"}
                            </span>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  {/* Fake card border */}
                  <div
                    aria-hidden="true"
                    className="hidden absolute inset-0 pointer-events-none sm:block"
                  >
                    <div
                      className={classNames(
                        plan.featured
                          ? "ring-2 ring-blue-600"
                          : "ring-1 ring-black ring-opacity-5",
                        "absolute right-0 w-1/2 h-full rounded-lg"
                      )}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="comparisonHeading"
          className="hidden lg:block"
        >
          <h2 id="comparisonHeading" className="sr-only">
            Feature comparison
          </h2>

          <div className="mt-24 max-w-7xl mx-auto px-8">
            <div className="w-full border-t border-gray-200 flex items-stretch">
              <div className="-mt-px w-1/4 py-6 pr-4 flex items-end">
                <h3 className="mt-auto text-sm font-bold text-gray-900">
                  Catered for business
                </h3>
              </div>
              {plans.map((plan, index) => (
                <div
                  key={plan.title}
                  aria-hidden="true"
                  className={classNames(
                    index === plans.length - 1 ? "" : "pr-4",
                    "-mt-px pl-4 w-1/4"
                  )}
                >
                  <div
                    className={classNames(
                      plan.featured ? "border-blue-600" : "border-transparent",
                      "py-6 border-t-2"
                    )}
                  >
                    <p
                      className={classNames(
                        plan.featured ? "text-blue-600" : "text-gray-900",
                        "text-sm font-bold"
                      )}
                    >
                      {plan.title}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      {plan.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              {/* Fake card backgrounds */}
              <div
                className="absolute inset-0 flex items-stretch pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-1/4 pr-4" />
                <div className="w-1/4 px-4">
                  <div className="w-full h-full bg-white rounded-lg shadow" />
                </div>
                <div className="w-1/4 px-4">
                  <div className="w-full h-full bg-white rounded-lg shadow-md" />
                </div>
                <div className="w-1/4 pl-4">
                  <div className="w-full h-full bg-white rounded-lg shadow" />
                </div>
              </div>

              <table className="relative w-full">
                <caption className="sr-only">
                  Business feature comparison
                </caption>
                <thead>
                  <tr className="text-left">
                    <th scope="col">
                      <span className="sr-only">Feature</span>
                    </th>
                    {plans.map((plan) => (
                      <th key={plan.title} scope="col">
                        <span className="sr-only">{plan.title} plan</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {features.map((feature, index) => (
                    <tr key={feature.title}>
                      <th
                        scope="row"
                        className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600"
                      >
                        {feature.title}
                      </th>
                      {feature.tiers.map((tier) => (
                        <td
                          key={tier.title}
                          className={classNames(
                            index === feature.tiers.length - 1
                              ? "pl-4"
                              : "px-4",
                            "relative w-1/4 py-0 text-center"
                          )}
                        >
                          <span className="relative w-full h-full py-3">
                            {typeof tier.value === "string" ? (
                              <span
                                className={classNames(
                                  tier.featured
                                    ? "text-blue-600"
                                    : "text-gray-900",
                                  "text-sm font-medium"
                                )}
                              >
                                {tier.value}
                              </span>
                            ) : (
                              <>
                                {tier.value === true ? (
                                  <CheckIcon
                                    className="mx-auto h-5 w-5 text-blue-600"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <XIcon
                                    className="mx-auto h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {tier.value === true ? "Yes" : "No"}
                                </span>
                              </>
                            )}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Fake card borders */}
              <div
                className="absolute inset-0 flex items-stretch pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-1/4 pr-4" />
                <div className="w-1/4 px-4">
                  <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                </div>
                <div className="w-1/4 px-4">
                  <div className="w-full h-full rounded-lg ring-2 ring-blue-600 ring-opacity-100" />
                </div>
                <div className="w-1/4 pl-4">
                  <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                </div>
              </div>
            </div>

            <h3 className="mt-10 text-sm font-bold text-gray-900">
              Other perks
            </h3>

            <div className="mt-6 relative">
              {/* Fake card backgrounds */}
              <div
                className="absolute inset-0 flex items-stretch pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-1/4 pr-4" />
                <div className="w-1/4 px-4">
                  <div className="w-full h-full bg-white rounded-lg shadow" />
                </div>
                <div className="w-1/4 px-4">
                  <div className="w-full h-full bg-white rounded-lg shadow-md" />
                </div>
                <div className="w-1/4 pl-4">
                  <div className="w-full h-full bg-white rounded-lg shadow" />
                </div>
              </div>

              <table className="relative w-full">
                <caption className="sr-only">Perk comparison</caption>
                <thead>
                  <tr className="text-left">
                    <th scope="col">
                      <span className="sr-only">Perk</span>
                    </th>
                    {plans.map((plan) => (
                      <th key={plan.title} scope="col">
                        <span className="sr-only">{plan.title} plan</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {perks.map((perk, index) => (
                    <tr key={perk.title}>
                      <th
                        scope="row"
                        className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600"
                      >
                        {perk.title}
                      </th>
                      {perk.tiers.map((tier) => (
                        <td
                          key={tier.title}
                          className={classNames(
                            index === perk.tiers.length - 1 ? "pl-4" : "px-4",
                            "relative w-1/4 py-0 text-center"
                          )}
                        >
                          <span className="relative w-full h-full py-3">
                            {tier.value === true ? (
                              <CheckIcon
                                className="mx-auto h-5 w-5 text-blue-600"
                                aria-hidden="true"
                              />
                            ) : (
                              <XIcon
                                className="mx-auto h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            )}

                            <span className="sr-only">
                              {tier.value === true ? "Yes" : "No"}
                            </span>
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Fake card borders */}
              <div
                className="absolute inset-0 flex items-stretch pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-1/4 pr-4" />
                <div className="w-1/4 px-4">
                  <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                </div>
                <div className="w-1/4 px-4">
                  <div className="w-full h-full rounded-lg ring-2 ring-blue-600 ring-opacity-100" />
                </div>
                <div className="w-1/4 pl-4">
                  <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Logo cloud */}
      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
              alt="Tuple"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
              alt="Mirage"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
              alt="StaticKit"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
              alt="Transistor"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
              alt="Workcation"
            />
          </div>
        </div>
      </div>

      {/* Alternating Features */}
      <div className="pb-16 bg-gray-50 overflow-hidden">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <svg
            className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
              height={784}
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>

          <div id="more" className="relative mt-10">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why choose BlessHost's 360 Web Hosting for your website?
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              You have never seen this kind of web hosting before. The 360 web
              hosting system is built on a unique clustered architecture that
              delivers faster, more optimized, more reliable hosting services
              for your websites.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Let's do the math!
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Our 360 web hosting comes with FREE $250+ value addons! By
                aggregating all of the basics together in one plan, you
                immediately save $250+ annually. The total value of all included
                services makes our 360 web hosting the most complete and
                attractively priced hosting plan.
              </p>
            </div>

            <div
              className="mt-10 -mx-4 relative lg:mt-0 justify-self-center"
              aria-hidden="true"
            >
              <svg
                className="h-96"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="matrix(2,0,0,2,0,0)">
                  <path
                    d="M192.621,81.888c-3.606-1.389-7.741.88-8.794,1.143.7-.527,1.41-1.139,2.11-1.758,3.359-2.972,7.05-9.069,3.694-13.368a3.634,3.634,0,0,0-4.045-1.319c-3.074,1.069-4.57,5.454-5.629,8.179-1.4,3.607-2.462,7.387-3.517,11.081.263.791.439,1.671.7,2.462a61.588,61.588,0,0,0,8.706.7c2.815,0,8.974-.179,9.147-4.31C195.055,83.294,193.841,82.358,192.621,81.888Zm-7.387-13.015a2.014,2.014,0,0,1,2.638-.264c3.63,2.872-.306,8.661-2.638,10.905-2.022,1.946-4.882,3.929-6.6,5.452-.088.088-.176.176-.264.176C179.1,84.524,181.463,72.276,185.234,68.873Zm8,15.917c.088,1.056-1.4,1.678-2.2,2.023-2.891,1.256-6.244.616-9.234.352a12.366,12.366,0,0,0-2.462-.264c3.254-1.583,7.738-4.124,11.52-3.694C191.876,83.323,193.237,83.76,193.237,84.79Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M45.4,84.175A2.045,2.045,0,0,0,43.382,86.2,2.107,2.107,0,0,0,45.4,88.22a2.023,2.023,0,1,0,0-4.045Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M21.4,87.165c-3.607.608-7.61,1.266-10.2,4.309-2.829,3.322-1.85,6.871-.88,11.081.69,2.993,1.231,6.068,1.935,9.146.088.528.871.265.791-.176-1.766-9.755-3.852-15.062-1.407-18.644,2.214-3.243,6.42-3.694,9.85-4.749C22.187,87.78,21.923,87.076,21.4,87.165Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M25,144.152c1.318-.1.53-.892-.528-1.143-3.508-.833-4.561-3.588-5.365-7.212-.1-.438-.879-.264-.7.176C19.173,139.808,21.1,144.46,25,144.152Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M124.817,55.593a8.637,8.637,0,1,0,5.452,9.5,9,9,0,0,0,.088-1.407A8.425,8.425,0,0,0,124.817,55.593Zm4.4,8.091a7.3,7.3,0,0,1-12.927,4.661,7.3,7.3,0,0,1-.616-8.355,7.494,7.494,0,0,1,7.651-3.429A7.342,7.342,0,0,1,129.214,63.684Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M122.53,63.068c0-1.158-.087-1.509-.087-3.341a8.154,8.154,0,0,1,2.11.263c.44.176.788-.607.352-.791a8.967,8.967,0,0,0-2.55-.7,1.112,1.112,0,0,0-.088-.527c-.088-.616-.968-.616-.968,0V58.5a4.544,4.544,0,0,0-2.2.7c-1.7,1.246-1.769,3.434-.088,4.485a5.331,5.331,0,0,0,2.374.7c0,.968,0,1.935.088,2.991a3.652,3.652,0,0,1-2.023-.968c-.615-.615-1.5.358-.967.968a4.513,4.513,0,0,0,3.078,1.407v.879c.088.792,1.319.792,1.231,0a2.427,2.427,0,0,0-.088-.791c2.708,0,4.035-1.841,3.518-3.518S123.938,63.244,122.53,63.068Zm-3.341-1.846a2.315,2.315,0,0,1,2.11-1.5V62.98C120.278,62.98,118.774,62.189,119.189,61.222Zm5.716,5.188a2.154,2.154,0,0,1-.967.792,3.669,3.669,0,0,1-1.32.176c-.088-.968,0-1.935-.088-2.99.754,0,2.125.393,2.375,1.143A1,1,0,0,1,124.905,66.41Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M104.483,64.831l4.856,10.9A6.791,6.791,0,0,1,106,84.7l-15.39,6.86c.264.44.44.967.7,1.407l15.39-6.86a8.239,8.239,0,0,0,4.133-10.992c-3.86-8.361-4.652-10.573-4.852-10.848Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M74.865,57.616,90.607,50.58a6.831,6.831,0,0,1,8.97,3.43l4.513,10.008c.088-.088.264-.088.352-.176a5.4,5.4,0,0,1,1.055-.44L100.984,53.4a8.343,8.343,0,0,0-10.992-4.222L74.162,56.3A4.656,4.656,0,0,1,74.865,57.616Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M64.928,62.1l8.53-3.869a10.727,10.727,0,0,0-.615-1.5l-8.619,3.87a.776.776,0,0,0-.439,1.055A.9.9,0,0,0,64.928,62.1Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M89.369,92.12l-2.719,1.2a3.471,3.471,0,0,0-1.056-2.2l-8.266-7.475a1.553,1.553,0,0,0-2.551.7,19.466,19.466,0,0,1-9.322,11.7c-.088-.176-5.339-11.873-5.339-11.873a10.674,10.674,0,0,0-1.495.616L60.267,88.4,21.66,94.9a4.552,4.552,0,0,0-3.43,5.628l7.739,32.715a5.133,5.133,0,0,0,4.837,3.957c.44,0-3.3.137,47.049-8.09a4.323,4.323,0,0,0,3.342-5.541L77.592,106.6a34.381,34.381,0,0,0,7.3-8.618L90.079,124.1c1.594,6.664-.838,13.851-7.651,14.95l-51.974,9.762c-6.156,1.143-13.631-1.671-15.39-9.058l-8.53-38.783C4.852,94.246,8.755,87.266,15.5,86.109L56.045,79.25,58.156,84a10.5,10.5,0,0,1,1.407-.7l-4.309-9.5a6.791,6.791,0,0,1,3.342-8.97l1.759-.791a.808.808,0,1,0-.616-1.5l-1.759.791a8.391,8.391,0,0,0-4.221,11.081l1.759,3.87L15.24,85.142C7.832,86.507,3.661,94.06,5.39,101.324l8.531,38.783c1.832,7.617,9.405,11.161,16.621,9.849l17.5-3.254v8c-10.378,2.375-17.977,6.42-17.941,9.938.044,4.222,10.9,6.068,24.185,4.133S78.348,161.916,78.3,157.7c-.044-3.518-7.563-5.364-17.852-4.837V144.24L82.6,140.107c7.277-1.324,10.152-8.93,8.355-16.27l-5.453-27.35c.264-.44.44-.88.616-1.231L89.9,93.527A4.6,4.6,0,0,0,89.369,92.12ZM71.524,157.167a.5.5,0,0,1,.615.792C68,162.1,54.676,167.176,38.017,164.818c-.439-.087-.352-.879.088-.791C49.779,165.265,61.657,163.662,71.524,157.167Zm-12.576,1.671a.624.624,0,1,1-1.232.176,85.028,85.028,0,0,1-.615-10.553c.013-.527.791-.528.879,0A94.119,94.119,0,0,0,58.948,158.838Zm-.44-46.609c-.2,0,.191.651-5.013-9.85a1.027,1.027,0,0,1,0-.88.9.9,0,0,1,.7-.439c5.452-.528,18.38-3.078,22.161-16.182l8.267,7.387a1.745,1.745,0,0,1,.44,1.935C83.07,99.172,76.185,110.821,58.508,112.229Zm21.634,11.608a3.351,3.351,0,0,1-2.55,4.221l-46.258,8a3.951,3.951,0,0,1-4.4-3.078L19.2,100.268a3.388,3.388,0,0,1,2.551-4.309l38.871-6.508c4.573,10.192,2.989,6.77,3.341,7.475a31.756,31.756,0,0,1-10.113,2.727,2.45,2.45,0,0,0-2.023,3.517l4.837,9.762a1.853,1.853,0,0,0,1.583.967h.176a34.066,34.066,0,0,0,18.028-6.507Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M82.868,74.677c7.768-3.329,23.166-10.05,23.305-10.114a.924.924,0,0,0-.791-1.671c-.2.083-2.082.929-2.2.968-8.537,3.794-5.232,1.994-16.445,7.123-1.5.688-3.078,1.407-4.573,2.023-1.9-4.235-5.492-11.95-8.179-17.325a6.1,6.1,0,0,1,.44-1.143c1.411-2.822,3.079-3.633,5.276-7.915,1.757-3.423,3.442-7.759,2.375-11.433-1.134-3.9-4.91-5.723-7.915-4.221-3.1,1.55-3.932,6.306-4.133,9.762-.072,1.232,0,2.374,0,3.606-.88-2.111-2.112-4.219-4.486-4.661-2.405-.449-4.972,1.647-4.221,5.276a9.528,9.528,0,0,0,1.847,3.606,17.327,17.327,0,0,0,5.8,5.364,14.569,14.569,0,0,0,3.166,1.319c.246.122.309.472.44.88.513,1.6,7.218,16.46,7.739,17.5-.1.044-21.991,9.854-22.6,10.465-.615.352-.18,1.482.528,1.231,2.863-1.014,14.5-6.466,23.041-10.2.306.662,8.357,18.569,8.443,18.731a.979.979,0,0,0,1.319.352.968.968,0,0,0,.352-1.319C91.2,92.445,86.562,82.68,82.868,74.677Zm-5.8-41.861a3.266,3.266,0,0,1,3.078,2.726c.546,2.728-.405,7.142-1.847,10.026-1.7,3.407-2.944,4.512-4.837,7.035a46.557,46.557,0,0,1-1.319-9.762C71.769,38.582,72.792,32.205,77.064,32.816ZM63.7,45.919c-.732-1.431-.935-3.268.527-3.957.98-.462,2.6.425,3.078,1.143,1.228,1.579,3.224,7.671,4.222,10.465C69.577,52.273,66.2,50.827,63.7,45.919Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M76.009,98.861c-1.314-1.314-3.559.229-5.013,1.319q-.528-.791-1.055-1.583a24.39,24.39,0,0,1,2.374-1.143c.436-.184.44-.967-.088-.967a6.021,6.021,0,0,0-3.078.967c-.088-.176-.264-.352-.352-.528-.351-.439-.967.088-.7.528l.264.528a5.027,5.027,0,0,0-2.375,3.342c0,1.4.695,1.67,2.111,1.67a5.635,5.635,0,0,0,2.814-1.143c.44.7.967,1.319,1.407,1.935a8.26,8.26,0,0,1-2.9.7c-.88,0-.881,1.394,0,1.319a9.532,9.532,0,0,0,3.694-.968c.175.176.263.44.439.616.44.528,1.407-.176.968-.792a1.934,1.934,0,0,0-.352-.439C75.943,103.038,77.525,100.377,76.009,98.861Zm-8.267,2.99c-.264,0-.528,0-.528-.176-.088-.263.176-.615.264-.879a7.515,7.515,0,0,1,1.407-1.5c.352.528.7,1.055,1.056,1.671,0,.088-1.144.615-1.232.7A7.839,7.839,0,0,0,67.742,101.851Zm6.86.176a4.7,4.7,0,0,1-1.32,1.319c-.527-.7-1.055-1.407-1.495-2.11a10.1,10.1,0,0,1,2.463-1.5.962.962,0,0,1,.967.088C75.569,100.532,74.953,101.5,74.6,102.027Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M140.119,55.857a1.086,1.086,0,0,0,.352.7l11.345,7.914a.876.876,0,0,0,1.055,0,.959.959,0,0,0,.352-1.055L148.65,49.877a1.063,1.063,0,0,0-.616-.616,1.081,1.081,0,0,0-.879.176l-1.759,1.5c-11.734-11.737-25.457-13.008-36.848-7.827a32.557,32.557,0,0,0-6.332,3.694,1.068,1.068,0,0,0-.264,1.231.892.892,0,0,0,1.231.352c6.921-4.091,15.654-5.895,23.481-4.133,8.579,1.93,14.543,8.281,15.742,9.234l-2.023,1.67C140.207,55.241,140.119,55.505,140.119,55.857Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M179.518,98.246a158.938,158.938,0,0,0-6.244-22.162c-.452-1.315-.88-2.814-2.2-3.43a8.174,8.174,0,0,0-3.869-.615c-6.853,0-5.25.234-9.938.351-.615.016-1.231.088-1.847.088s-1.231.176-1.847.176c-2.646.166-6.921.62-8.266.7-1.178.168-4.68.239-6.42.967-1.311.549-8.794,5.98-9.41,6.42a6.4,6.4,0,0,0-1.583,1.407,3.3,3.3,0,0,0-.264,2.2c.3,1.361,2.319,14.113,3.43,18.556-5.277-.792-8.706-1.495-8.794-1.495a.784.784,0,0,0-.968.791c.308,24.366-9.937,57.339-10.025,57.691a.991.991,0,0,0,.088.7.891.891,0,0,0,.615.352c40.1,3.078,62.088,5.98,62.264,5.98a.78.78,0,0,0,.879-.791c.352-25.951-2.022-59.274-2.11-59.538a.77.77,0,0,0-.792-.7c-1.055.088-2.2.088-3.254.088-1.73-5.536-6.66-22.146-6.683-22.25a2.314,2.314,0,0,0-2.463-2.111c-3.87-.044-7.739.352-11.52.616s-15.566.967-17.677,1.143c-.527.088-.527.792,0,.792,5.591,0,29.413-1.507,29.813-1.407.7.176.787,1.144.967,1.758,1.032,3.525,5.365,17.853,6.508,21.547a227.074,227.074,0,0,1-35.7-2.9V103c-3.047-19.391-3.624-19.417-2.99-20.051a7.6,7.6,0,0,1,1.583-1.232c4.937-3.471,7.179-6.173,11.169-6.507,2.155-.181,13.546-1.583,23.129-1.583,5.264,0,6.015.031,6.595,1.67,4.435,12.526,6.61,22.112,6.772,23.569a.65.65,0,0,0,.88.528C179.67,99.234,179.6,98.6,179.518,98.246Zm-8,9.058c.439,5.012,2.638,34.21,2.022,57.778-4.4-.527-25.415-3.078-60.5-5.8,1.671-5.54,10.113-34.122,9.849-56.284C127.9,104.05,151.376,108.271,171.515,107.3Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M168.789,74.5c-.419.209-5.032,4.68-6.157,5.8-.351.352.176.88.616.616,1.355-1.13,6.206-5.112,6.42-5.541A.657.657,0,0,0,168.789,74.5Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M156.652,72.3c.452-.3.176-1.26-.7-.967a15.351,15.351,0,0,0-1.671.879,4.912,4.912,0,0,0-.7.44c-.263.176-.611.358-.879.528-1.206.763-2.39,1.689-2.99,2.11a109.394,109.394,0,0,0-8.794,7.124c-.429.428-.758.663-.616,1.231a131.15,131.15,0,0,1,7.035,16.709c1.486,4.491,1.158,3.649,1.495,4.661.528.088,1.144.088,1.671.176,0-2.71-4.607-15.014-8.09-21.546.838-.838,4.18-3.635,5.1-4.4,1.978-1.637,5.941-4.442,7.3-5.541C156.591,72.264,156.419,72.536,156.652,72.3Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M46.548,102.819l-.792-3.87L26.5,101.939s1.671,7.563,3.166,14.6C34.747,109.928,41.092,107.911,46.548,102.819Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M30.894,122.694c.7,3.342,1.231,5.8,1.231,5.98L51.3,125.508,47.6,107.919C41.355,112.605,34.166,115.985,30.894,122.694Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M56.133,120.935c2.288-.044,16.189-2.7,17.5-2.99a.781.781,0,0,0,.528-.88.716.716,0,0,0-.88-.527c-4.468,1.04-16.013,3.051-17.236,3.43C55.514,120.132,55.606,120.945,56.133,120.935Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M56.133,123.221c-.527.176-.527,1.141.176,1.056,7.472-.907,17.061-2.99,18.38-3.254a.779.779,0,0,0-.439-1.495C71.87,120.03,57.453,122.782,56.133,123.221Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M38.9,130.081a53.285,53.285,0,0,0-5.365,1.407.575.575,0,0,0,.176,1.055c.969.169,4.749-.7,5.628-.879a.731.731,0,0,0,.528-.967A.81.81,0,0,0,38.9,130.081Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M183.563,98.773a.719.719,0,0,0-1.231-.439l-7.651,6.683a.8.8,0,0,0-.264.616c3.693,34.386,2.9,53.645,2.55,58.834a.716.716,0,0,0,1.143.615l14.6-9.673a.715.715,0,0,0,.264-.792C186.827,135.349,184.358,105.614,183.563,98.773Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M160.082,112.492a67.192,67.192,0,0,1-8.882,16.27,19.452,19.452,0,0,1-6.508,5.54A6.87,6.87,0,0,1,136.6,132.9c-2.089-2.219-2.362-5.892-2.462-8.706a53.841,53.841,0,0,1,1.671-14.775c.088-.439-.528-.791-.792-.351-2.022,3.869-2.55,8.354-2.55,12.575,0,4.046.257,8.888,2.99,12.224,4.474,5.462,11.922,1.638,15.654-2.638a41.482,41.482,0,0,0,3.781-5.188,56.852,56.852,0,0,0,5.981-13.456C161.05,112.141,160.265,111.967,160.082,112.492Z"
                    fill="#191919"
                  ></path>
                </g>
              </svg>
            </div>
          </div>

          <svg
            className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
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
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  Powered by the best hosting control panel
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  cPanel is a industry-standard backend administration interface
                  that makes it easy for you to manage your website. You can
                  easily create email addresses, manage your files, install
                  applications and configure your website from your own cPanel
                  account.
                </p>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1 justify-self-center">
                <svg
                  className="h-96"
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="matrix(2,0,0,2,0,0)">
                    <path
                      d="M51.852,83.658c-5.144,4.043-4.981-5.824-2.572-4.96.547.2,2.545,2.2,2.94.918.172-.555-1.286-6.8-1.837-8.084a24.8,24.8,0,0,0,8.451-11.943c0-.551-1.469.184-1.469.184a5.435,5.435,0,0,0,.367-2.389.345.345,0,0,0-.551,0c-.919,1.838-3.123,2.2-4.961,2.389-2.2,0-9.922-1.1-12.678.184-1.286.551-2.756,2.388-2.2,5.7,0,.368.551,2.573.918,2.756a7.867,7.867,0,0,1,4.042,1.1c.184.183,0,.367-.183.367-.735,0-1.287-.184-1.838-.184-2.572-.183-6.247-.183-6.614,3.124-.368,2.572.551,5.145,1.47,7.35,1.1,2.755,7.165,11.759,7.9,12.126a2.427,2.427,0,0,0,.76-.106c.191,1.934.542,3.86.894,5.618.183,1.1,1.286,1.286,1.1,0-.523-1.918-.881-3.836-1.387-5.754,2.617-.612,8.162-2.178,9.288-2.881C54.058,88.987,52.4,83.107,51.852,83.658Zm2.022-21.129a.4.4,0,0,1,.367.367c0,1.133-3.534,1.8-3.675,1.838-.183,0-.367-.368-.183-.368C50.587,64.161,53.37,62.361,53.874,62.529ZM44.5,85.312a.18.18,0,0,1-.184.184c-.551.184-1.1-.368-1.286-.735a16.558,16.558,0,0,1-1.1-1.47,11.078,11.078,0,0,0,1.1,4.226.612.612,0,0,1-.918.735,18.76,18.76,0,0,1-3.124-4.41c-.882-1.673-1.837-3.307-1.653-5.328,0-.184.367-.368.367,0a14.207,14.207,0,0,0,2.2,4.777A12.339,12.339,0,0,0,41.2,85.312a8.149,8.149,0,0,1-.184-3.675.482.482,0,0,1,.919-.183C42.767,83.127,44.743,84.352,44.5,85.312ZM40.645,62.161c-.19.09-.348-.027-.184-.183a6.034,6.034,0,0,1,4.961-1.286,31.121,31.121,0,0,0,4.409.367c.1,0,2.716-.327,1.654.735-1.246.934-4.037.479-5.512.184A8.524,8.524,0,0,0,40.645,62.161Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M61.591,79.616a3.925,3.925,0,0,0,1.469-3.123c0-2.47-2-4.013-3.674-6.064-.908-1.111-2.021-2.021-3.124-3.123-.184-.184-.551,0-.367.367.735.919,1.47,2.022,2.2,2.94,2.162,2.7,3.4,4,3.674,5.512a5.307,5.307,0,0,1-.735,2.756,1.394,1.394,0,0,0-.367-.735c-.184-.183-.429-.17-.368.184.481,2.769,1.1,5.88.184,8.819a6.749,6.749,0,0,1-1.47,2.756c-.735.919-1.837,1.287-2.756,2.022-.184.183-.184.551.184.551,1.286.183,2.388-.735,3.307-1.47A8.94,8.94,0,0,0,61.774,87.7,13.467,13.467,0,0,0,61.591,79.616Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M92.091,98.725c3.077-.88,4.974-2.12,11.024-5.145,2.31-.77,3.409-1.227,4.409-3.307C116,72.634,117.068,61.091,118,58.3A20.215,20.215,0,0,0,118.365,55c0-.552-.735-.552-.919-.184a55.526,55.526,0,0,0-1.1,5.88,131.358,131.358,0,0,1-7.717,24.988c-.9,2.03-1.47,4.96-3.491,6.063a54.577,54.577,0,0,1-6.247,2.94c-2.225,1.061-4.41,2.388-6.8,3.491C91.539,98.357,91.723,98.725,92.091,98.725Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M117.079,52.056c-1.1-.919-2.216-1.639-3.491-2.572a5.25,5.25,0,0,1-1.838-1.654,2.924,2.924,0,0,1,0-2.756,20.5,20.5,0,0,1,1.286-2.94c.368-.918.919-1.837,1.287-2.756.183-.367-.368-.735-.735-.367a13.686,13.686,0,0,0-1.654,2.756c-.735,1.653-1.876,3.679-1.654,5.512a4.411,4.411,0,0,0,2.2,2.94c1.3.9,2.756,1.837,4.042,2.572C117.079,52.791,117.446,52.423,117.079,52.056Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M115.425,42.869c.605-3.327.754-7.094,1.1-9.187.184-1.1.184-2.2.368-3.307.184-.735.367.184.551.368.184.735.545,1.471.735,2.388.534,2.576.735,5.329,1.1,7.9a.462.462,0,0,0,.919,0,29.118,29.118,0,0,0-1.837-11.208,1.376,1.376,0,0,0-1.286-1.1c-1.286,0-1.1,2.2-1.286,2.939a104.274,104.274,0,0,0-.552,10.841C114.874,43.053,115.241,43.053,115.425,42.869Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M125.163,37.173a4.737,4.737,0,0,1,1.47,2.389,6.949,6.949,0,0,1,0,2.756.82.82,0,0,0,0,.919c.184.183.367,0,.551-.184.72-.72.62-2.663.368-3.675a4.287,4.287,0,0,0-2.205-2.756C125.085,36.529,124.979,36.99,125.163,37.173Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M129.389,51.137a15.625,15.625,0,0,0,1.286-4.042c.334-2.393.368-5.512-1.286-7.533-.184-.368-.735,0-.551.367a11.333,11.333,0,0,1,.551,6.982c-.368,2.2-1.7,4.022-2.572,6.064-.389.91.925,11.023,1.286,16.168.374,5.328.367,10.657.367,15.985,0,5.145-.361,10.29-.735,15.618a34.277,34.277,0,0,1-1.286,7.533,11.447,11.447,0,0,1-3.123,4.777,29.706,29.706,0,0,1-6.064,4.777c-1.282.741-2.388,1.47-3.674,2.2a25.2,25.2,0,0,0-3.675,2.389c-.368.183,0,.735.367.551a28.876,28.876,0,0,0,6.982-3.491,41.559,41.559,0,0,0,5.7-4.226,19.217,19.217,0,0,0,3.859-4.593,18.77,18.77,0,0,0,1.837-6.982c2.009-14.568,1.167-35.266-1.1-49.793C128.47,53.526,129.205,51.688,129.389,51.137Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M9.226,151.641c-.26,3.9-2.382,13.641-3.307,17.454C5.093,172.5,5,172.3,5,173.138c0,.367.367.551.735.183a7.994,7.994,0,0,0,1.286-3.307c.535-2.436,2.94-14.532,2.94-18.373C9.777,151.089,9.226,151.089,9.226,151.641Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M120.57,35.887c.367.551.918.919,1.1,1.47a8.232,8.232,0,0,1,.735,3.675c0,1.277,1.437.1.919-2.2a6.807,6.807,0,0,0-1.1-2.572,4.408,4.408,0,0,0-1.47-1.1C120.57,35.336,120.386,35.7,120.57,35.887Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M72.431,140.249c-.368.184-.554-.372-.184-.551,2.739-1.324,36.931-13.78,37.3-13.964-1.469-3.859-12.494-32.521-12.861-33.991a.672.672,0,0,0-.919-.368c-4.042,2.756-28.479,11.392-29.03,11.576C60.672,96.52,42.3,95.6,34.581,99.092a.574.574,0,0,0,0,1.1c1.824.564,3.06,3.059,3.308,3.307-6.615,2.2-12.737,5.835-16.9,11.391-5.362,7.152-5.9,11.774-14.331,38.952a.678.678,0,0,0,.183.552c4.043.735,8.268.918,12.311,1.653-.32-8.945-.16-19.073,2.2-27.744a45.807,45.807,0,0,1,4.41-11.391c.184-.184.551,0,.368.183a29.865,29.865,0,0,0-2.389,6.8c-4.405,13.214-2.863,31.994-2.572,45.933.042,2.021.183,4.043.367,6.064a20.291,20.291,0,0,0,6.247.918c1.838,0,13.776-.786,18.006-1.1,8.812-.658,34.91-1.837,39.32-1.47a.59.59,0,0,0,.551-.551c.092-4.78,2.021-35.277,2.021-37.3A123.68,123.68,0,0,0,72.431,140.249ZM59.2,122.059A32.508,32.508,0,0,0,63.244,132.9a.538.538,0,0,1-.184.918c-.367,0-.735-.735-.918-.918-.735-1.1-1.47-2.389-2.205-3.675a31.491,31.491,0,0,1-2.2-8.268c-.676-5.391,1.2-10.748,3.307-13.229.168-.2,2.573-2.389,2.389-1.654-.184.551-.936,1.086-1.286,1.47a11.858,11.858,0,0,0-2.021,3.675A21.036,21.036,0,0,0,59.2,122.059Zm-5.7-19.292a4.989,4.989,0,0,1,3.124,1.47.352.352,0,0,1-.184.551c-2.791,0-2.485-1.47-14.148-1.47-.367,0-.183-.367,0-.367C44.854,102.754,50.872,102.328,53.506,102.767Z"
                      fill="#2563eb"
                    ></path>
                    <path
                      d="M133.247,23.393c-4.091,0-26.553-.386-30.132,0-2.018.218-4.226.551-5.7,2.2a5.479,5.479,0,0,0-1.47,3.124,44.636,44.636,0,0,0,0,7.165c.17,2.023.16,4.066,1.837,5.7,3.263,3.17,8.817,1.562,12.862,1.654a.276.276,0,0,0,0-.552c-1.654,0-3.491-.183-5.145-.183-3.242,0-6.288-.083-7.717-2.94-.918-1.837-.735-4.226-.735-6.247,0-1.837-.183-4.41.735-6.063s2.944-2.35,4.778-2.573a62.527,62.527,0,0,1,7.533-.367c27.857,0,29.592-.081,30.316,0a7.067,7.067,0,0,1,4.593,2.94,8.96,8.96,0,0,1,1.1,6.063c-.045.272-.254,4.514-1.286,6.247-1.595,2.677-7.584,2.762-9,2.94h-3.308c-.183,0-.918,0-.735.367h.184a45.216,45.216,0,0,0,8.268,0c1.838-.184,3.675-.551,4.777-2.021,1.1-1.286,1.261-2.943,1.47-4.593a30.766,30.766,0,0,0,.368-3.859,22.113,22.113,0,0,0,0-3.491,7.326,7.326,0,0,0-3.675-4.777C142.287,23.687,139.38,23.393,133.247,23.393Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M164.482,81.454a76.382,76.382,0,0,0,12.127.183,13.15,13.15,0,0,0,4.41-.735,6.066,6.066,0,0,0,3.307-3.307,8.334,8.334,0,0,0,.367-2.94c0-2.211.052-2.6-.183-3.307,0-.184-.368-.184-.368,0a5.905,5.905,0,0,0-.184,2.572,12.677,12.677,0,0,1-.367,2.756,4.9,4.9,0,0,1-2.756,3.308,17.028,17.028,0,0,1-4.226.735c-1.47,0-3.124.183-4.593.183-2.389,0-4.961,0-7.35.184C164.3,81.27,164.3,81.454,164.482,81.454Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M121.672,120.038c6.836.149,26.057.614,30.316.184,2.02-.2,4.065-.334,5.7-1.47,2.051-1.428,2.389-3.675,2.389-5.88.445-7.127.533-12.174-6.615-12.677-3.67-.259-7.349,0-11.208,0-9.726,0-9.1.183-10.84.183a.276.276,0,0,0,0,.552c.735,0,2.021.168,2.94.183,5.514.092,11.023-.356,16.536,0,2.939.19,6.833.173,7.9,3.675.949,3.114.731,7.349.183,10.473-.74,4.225-7.166,4.008-10.473,4.042-9,.092-17.822-.184-26.825.184C121.488,119.671,121.488,120.034,121.672,120.038Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M188.735,105.155c-4.079-.407-26.5-.073-27.009.184-.367.184.184,11.024.552,11.024,4.6-.329,26.7-.518,28.479-.918,2.217-.5,3.49-2.94,3.49-5.145C194.431,107.36,191.492,105.523,188.735,105.155Z"
                      fill="#2563eb"
                    ></path>
                    <path
                      d="M112.485,66.939a117.8,117.8,0,0,0-15.434-.552c-2.572,0-5.144,0-7.716.184a27.1,27.1,0,0,0-3.859.184,22.711,22.711,0,0,0-3.675.183,6.051,6.051,0,0,0-4.409,4.043c-.735,1.837.189,3.852,1.653,5.144a8.4,8.4,0,0,0,5.88,1.838c9.352,0,15.463.063,24.988-.552.367,0,.367-.735,0-.551a215.522,215.522,0,0,1-21.865.184c-2.021,0-4.4.156-6.43-.551-1.646-.574-3.491-2.2-3.491-4.226a4.515,4.515,0,0,1,1.1-2.572A4.169,4.169,0,0,1,81.8,67.857c2.236-.372,4.55.006,7.166-.367,4.525,0-3.412-.184,23.7-.184C112.669,67.206,112.669,67.122,112.485,66.939Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M192.043,28.722C190.215,27.6,188,27.8,185.8,27.8c-35.716,0-37.482.139-37.482.919a83.176,83.176,0,0,1-.552,9.554.4.4,0,0,0,.184.735c10.309.589,23.283.039,39.32-.184,1.653-.023,3.491,0,4.96-1.1C195.853,35.71,196.054,31.178,192.043,28.722Z"
                      fill="#2563eb"
                    ></path>
                    <path
                      d="M193.145,68.592c-1.653-1.653-7.717-2.021-7.717-1.286,0,2.94,0,9.738.368,10.105a2.465,2.465,0,0,0,1.653.368,11.849,11.849,0,0,0,3.491-.368,5.521,5.521,0,0,0,3.859-3.858A6.108,6.108,0,0,0,193.145,68.592Z"
                      fill="#2563eb"
                    ></path>
                    <path
                      d="M183.958,65.469c-3-4.5-9.238-3.491-13.412-3.491-2.389,0-4.961,0-7.35-.184-15.27,0-22.5-.786-25.539.735a5.1,5.1,0,0,0-2.94,2.572,5.523,5.523,0,0,0-.57,1.641c-2.516-.005-3.766-.061-4.023.2v.551a1.407,1.407,0,0,0,.919.367c1.794,0,2.559.054,2.958.06-.062.944-.019,1.886-.019,2.7a24.247,24.247,0,0,0,.528,6.8c-3.109,0-3.36-.054-3.835.184l.025.735c.1.1-.462,0,4.151,0a5.119,5.119,0,0,0,2.806,2.756c1.984.661,3.253.551,11.759.551,7.244,0,12-.2,13.045-.183a.276.276,0,1,0,0-.552c-1.1,0-2.388-.183-3.491-.183H147.579c-3.124,0-7.35.735-10.106-.735a5.081,5.081,0,0,1-2.388-4.594c-.184-2.756-.551-6.43.183-9.187a4.2,4.2,0,0,1,1.287-1.837c2.477-2.477,7.834-1.837,38.4-1.837,2.389,0,4.777,0,6.615,1.286a5.626,5.626,0,0,1,2.388,5.512c.184.184.184.184.368,0A4.1,4.1,0,0,0,183.958,65.469Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M144.272,68.225c-1.5,4.487.367,8.855.367,7.165C144.864,74.715,145.083,66.6,144.272,68.225Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M151.253,67.673c-.349,1.223-.183,2.032-.183,6.064,0,1.13.084,1.653.918,1.653.515-.343.368-.623.368-3.674C152.356,65.785,151.033,67.673,151.253,67.673Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M159.705,75.39c.324-.485-.085-10.118-1.286-7.717C158.519,67.673,158.1,77,159.705,75.39Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M165.585,67.857a43.573,43.573,0,0,0-.184,6.063c0,.552,0,1.47.368,1.838.183.184.5.176.551,0a6.883,6.883,0,0,0,.183-2.021,30.906,30.906,0,0,0-.367-6.064C166.136,67.49,165.585,67.49,165.585,67.857Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M173.485,68.041c0,.1-.583,6.6.552,7.533,1.336,1.095.689-4.974.567-5.725C174.083,66.637,173.5,67.641,173.485,68.041Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M105.687,29.824c-.673,2.02-.128,1.983-.551,3.675,0,1.1-.184,2.572.367,3.491.184.367.552.183.552,0,.231-.694.183-1,.183-5.329,0-.551-.183-1.1-.183-1.837C106.238,29.64,105.871,29.456,105.687,29.824Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M112.669,29.273a23.68,23.68,0,0,0-.367,6.063c0,.551,0,1.47.551,1.654h.367c.551-.368.368-1.1.368-1.654a23.986,23.986,0,0,0-.368-6.063C113.036,29.089,112.669,28.905,112.669,29.273Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M127,29.456a43.635,43.635,0,0,0-.183,6.064c0,.551,0,1.47.367,1.837.184.184.538.2.592.021a7.064,7.064,0,0,0,.143-2.042,30.892,30.892,0,0,0-.367-6.063C127.552,29.089,127,29.089,127,29.456Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M134.9,29.64c0,.1-.642,9.278,1.1,7.533.616-.922-.234-6.491-.551-7.717C135.365,29.12,134.9,29.273,134.9,29.64Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M135.82,106.442c-.144,1.008-.061,7.186.735,7.717a.345.345,0,0,0,.551,0c.583-.875-.372-7.089-.551-7.717C136.555,106.074,136,106.074,135.82,106.442Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M142.985,106.809a43.626,43.626,0,0,0-.183,6.063c0,.552,0,1.47.367,1.838.184.183.551.183.551,0,.368-.551.184-1.286.184-2.021a30.906,30.906,0,0,0-.367-6.064C143.537,106.258,142.985,106.442,142.985,106.809Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M152.172,112.321a28.623,28.623,0,0,0-.735-5.7c-.116-.376-.457-.216-.551.184a8.1,8.1,0,0,0-.184,2.021c0,1.955-.124,3.065,0,3.8a2.434,2.434,0,0,0,.74,1.71.344.344,0,0,0,.551,0C152.356,113.791,152.172,113.056,152.172,112.321Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M129.205,109.014c0,.919-.184,1.837-.184,2.756v2.021c0,.368.368.551.735.551,1.319,0,.306-3.261,0-5.144C129.663,108.624,129.205,108.83,129.205,109.014Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M95.4,28.354a8.735,8.735,0,0,0-2.389-.184c-3.861.092-7.9-.367-11.759.184a5.972,5.972,0,0,0-3.307,1.837,5.559,5.559,0,0,0,0,6.8c2.272,2.933,7.25,1.837,12.494,1.837a35.267,35.267,0,0,1,4.41,0,.462.462,0,0,0,0-.919,21.363,21.363,0,0,0-3.308,0c-1.284.2-2.756.184-4.042.368-3.879,0-5.908.195-7.533-.735a4.5,4.5,0,0,1-1.47-6.063c1.1-1.838,3.307-2.205,5.329-2.205,3.123-.184,6.247.183,9.37,0a10.466,10.466,0,0,0,2.389-.184C95.582,28.722,95.582,28.538,95.4,28.354Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M120.281,29.412a6.385,6.385,0,0,0-.079.779c0,1.684-.058,1.963.184,2.205.338.338.735-.5.735-.735a7.985,7.985,0,0,0-.12-2.232C120.935,29.208,120.33,29.138,120.281,29.412Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M57.365,82.189a2.11,2.11,0,0,0,1.653.918c.919,0,1.1.551.551.919a1.806,1.806,0,0,1-2.388-.735C56.547,82.3,56.63,81.454,57.365,82.189Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M55.16,70.8a1.467,1.467,0,0,0-1.47.735c-.551.735-1.011.568-.919-.184a1.753,1.753,0,0,1,1.838-1.653C55.9,69.695,56.078,70.613,55.16,70.8Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M54.425 73.553 A1.47 0.919 0 1 0 57.365 73.553 A1.47 0.919 0 1 0 54.425 73.553 Z"
                      fill="#191919"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <svg
            className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
              height={784}
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Free Website Transfer!
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Don't worry if your website is hosted somewhere else, we will
                take care of the transfer! Migrating from another host can be
                complicated and time consuming. However, your time is important
                to us. Let us take care of everything while you sit back and
                relax. Our free website migration service is included with every
                web hosting plan that we offer.
              </p>
            </div>

            <div
              className="mt-10 -mx-4 relative lg:mt-0 justify-self-center"
              aria-hidden="true"
            >
              <svg
                className="h-96"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="matrix(2,0,0,2,0,0)">
                  <path
                    d="M46.952,153.314a27.424,27.424,0,0,0,6.928.551,48.343,48.343,0,0,0,5.15-.429,2.821,2.821,0,0,0,1.532-.491.286.286,0,0,0-.061-.367c-.6-.342-.726.113-6.682.429-2.478.131-3.046-.062-6.867-.062C46.768,152.945,46.707,153.314,46.952,153.314Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M45.052,156.2a32.216,32.216,0,0,0,9.993,1.164,11.913,11.913,0,0,0,3.31-.367.314.314,0,0,0-.061-.613c-1.927-.216-3.009.945-13.058-.49C44.929,155.766,44.807,156.133,45.052,156.2Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M46.891,159.628a18.14,18.14,0,0,0,6.008.981,24.048,24.048,0,0,0,3-.123,7.554,7.554,0,0,0,2.881-.613c.184-.122.062-.367-.122-.429a15.9,15.9,0,0,0-2.943.184,47.468,47.468,0,0,1-8.828-.49C46.707,159.2,46.646,159.567,46.891,159.628Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M112.55,152.885a48.835,48.835,0,0,0-.245,8.276,70.981,70.981,0,0,0,.552,8.215c.061.49.8.368.8-.123,0-1.348-.184-2.759-.307-4.107-.282-3.109-.306-6.862-.368-8.215,0-1.349-.122-2.759-.184-4.108C112.766,152.617,112.55,152.7,112.55,152.885Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M36.9,160.915c-.368-.858-.8-1.777-1.165-2.635-.122-.307-.551-.246-.735,0a20.348,20.348,0,0,0-1.533,2.452,10.405,10.405,0,0,0-1.1,2.7c-.062.307.367.491.49.245a39.666,39.666,0,0,1,2.452-4.23c.233.513,1.743,4.047,2.023,4.536.246.43.981.124.8-.306A19.985,19.985,0,0,0,36.9,160.915Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M35.182,162.755a.282.282,0,0,0-.552.061c0,1.227-.141-.559.245,6.008.062.552.92.552.92,0-.061-1.042-.123-2.023-.245-3.065A17.1,17.1,0,0,0,35.182,162.755Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M89.254,160.3c-.069-.3-.613-.245-.613.062.061.49.613,5.149.735,5.517-.551.124-42.669,11.159-44.079,11.648-.368-3-.858-6.007-1.349-9.072-.49-3.25-5.157-39.123-5.279-39.919,12,.847,29.441-1.5,41.573-4.528,1.716-.43,5.361-1.422,5.361-1.483,0,2,.391,13.895,1.076,15.95a.3.3,0,0,0,.552-.06c.086-.262-.747-13.613-.8-14.163-.062-.735-.184-1.41-.246-2.145,0-.245-.429-.307-.429,0a29.673,29.673,0,0,0-4.291-.551c-1.349-.124-2.7-.185-3.985-.307-16.447-1.5-28.821-5.626-32.554-6.56-.184-.062-.245,0-.367.123-19.751,5.565-34.586,4.675-39.359,5.272-.689,0,.508,2.506,2.084,9.073a108.553,108.553,0,0,1,3.188,27.465c-.061,3.311-.368,6.622-.613,9.87a.373.373,0,0,0,.552.307c4.055,1.506,12.071,3.018,26.852,8.767,1.226.49,6.621,2.7,7.173,2.758.184.184.613.123.674-.122,1.226-.184,2.453-.551,3.679-.858,1.41-.368,41.259-10.913,41.259-10.913C90.541,166.249,89.365,160.8,89.254,160.3ZM21.2,120.025a120.007,120.007,0,0,0,23.971-4.476.213.213,0,0,0,.122-.061c6.006,2.157,18.339,5.167,31.205,6.5.268.022,5.222.491,6.682.491-5.1,1.173-5.214,1.239-6.989,1.593a161.724,161.724,0,0,1-27.771,3.556c-2.274.083-4.547.138-6.821.183a82.583,82.583,0,0,1-16.23-1.715A160.715,160.715,0,0,1,6.4,120.724C10.472,120.83,17.461,120.372,21.2,120.025Zm-10.162,46c1.005-5.135.855-12.108.537-17.31a110.5,110.5,0,0,0-4.169-23.6c-.223-.724-.987-3.1-1.287-3.8a30.465,30.465,0,0,0,5.149,1.9A120.432,120.432,0,0,0,31.2,127.933a36.058,36.058,0,0,0,6.741.58c.061.673.186,1.2.248,1.872.844,10.983,3.061,25.813,4.72,36.906.491,3.311.92,6.683,1.594,9.993C42.584,176.326,17.152,166.92,11.042,166.026Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M60.991,105.8c-.061.49-.245.98-.306,1.41a11.13,11.13,0,0,0-.184,1.41,37.552,37.552,0,0,0-.123,5.762,9.705,9.705,0,0,0,.43,2.82c.122.246.613.246.674-.061a5.012,5.012,0,0,0-.061-1.349,53.921,53.921,0,0,1-.123-8.522,11.85,11.85,0,0,1,.061-1.47C61.3,105.618,60.991,105.618,60.991,105.8Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M122.3,130.385c8.155,1.038,24.843,1.249,51.619,7.05.613.123.859-.8.246-.919-6.683-1.41-13.365-2.637-20.109-3.617-7.99-1.163-23.8-3.075-31.818-2.821C122.114,130.14,122.114,130.385,122.3,130.385Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M128.612,133.205a40.458,40.458,0,0,0-4.23,4.353c-1.1,1.287-2.7,2.759-3.433,4.292a.188.188,0,0,0,.245.245,17.035,17.035,0,0,0,3.862-3.985,56.28,56.28,0,0,0,3.924-4.66C129.1,133.267,128.8,133.083,128.612,133.205Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M161.35,137.865a12.9,12.9,0,0,0-2.207,2.636c-6.866,8.8-15.383,24-17.565,28.843-.941,2.09-.49,2.2.652.622a48.874,48.874,0,0,0,2.874-5.433,240.155,240.155,0,0,1,16.552-26.485.18.18,0,0,0-.122-.245C161.472,137.8,161.411,137.865,161.35,137.865Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M127.815,139.4a9.309,9.309,0,0,0,6.315,1.533c3.642-.569,5.564-3.984,4.843-6.437-.123-.491-.8-.246-.736.184a4.782,4.782,0,0,1-2.881,5.088c-2.391,1.1-5.089.245-7.357-.8C127.754,138.907,127.571,139.275,127.815,139.4Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M150.131,141.666c-3.434-.982-7.663-1.165-10.3,1.655a5.528,5.528,0,0,0-1.532,4.169,6.063,6.063,0,0,0,2.084,3.739,16.631,16.631,0,0,0,2.146,1.472,5.48,5.48,0,0,0,2.575.674.214.214,0,0,0,.122-.368c-.611-.611-1.349-.372-3.74-1.962a6.235,6.235,0,0,1-2.329-3.126c-.8-3,1.9-5.579,4.659-6.131a15.4,15.4,0,0,1,6.253.307C150.315,142.217,150.437,141.727,150.131,141.666Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M123.953,144.976a11.711,11.711,0,0,1,6.131,1.778c2.877,2.071,2.8,5.743.858,7.234-.307.246.122.859.429.613,2.86-2.119,2.185-7.868-3.372-9.5a13.178,13.178,0,0,0-4.107-.367C123.688,144.77,123.708,144.914,123.953,144.976Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M127.509,157.237c-6.321-3.087-10.587,1.656-8.706,5.089a2.748,2.748,0,0,0,2.575,1.655.289.289,0,0,0,.062-.491,4.585,4.585,0,0,1-1.349-.674c-2.763-2.3.049-7.99,7.3-5.272C127.509,157.6,127.632,157.3,127.509,157.237Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M140.751,159.628a17.8,17.8,0,0,0-5.089-.306,10.773,10.773,0,0,0-3.862.919c-3.707,1.855-2.8,7.311,3.495,8.522a.32.32,0,0,0,.183-.613c-2.268-.736-5.149-1.9-5.149-4.721,0-2.636,3.127-3.31,5.211-3.556a24.084,24.084,0,0,1,5.149,0C140.873,159.935,140.873,159.628,140.751,159.628Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M145.9,136.332a9.269,9.269,0,0,0,5.273,3.065c2,.374,4.835.275,6.069-.674.307-.245-.061-.613-.368-.613-.613.122-1.165.368-1.716.49a9.43,9.43,0,0,1-6.5-.981,13.225,13.225,0,0,1-2.329-1.655C146.084,135.719,145.717,135.964,145.9,136.332Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M153.993,43.576c-.307,0-8.522.061-8.583.061,0,.245-.061.49-.061.736.122,0,9.5.122,10.422.122a13.35,13.35,0,0,0-.062,2.207c0,.981-.06,7.664.062,8.644-.429,0-10.55.778-11.035.859a2.947,2.947,0,0,1-.062.735c.736.062,4.414-.183,5.457-.306,1.042-.061,5.578-.368,6.069-.429.184.122,2.575,1.287,2.637,1.287-2.208.123-13.121.8-14.223.981v.674c1.164.062,12.69-.613,15.264-.8-.061.551-.061,6.314-.061,7.6-.061,2.575-.245,11.1-.183,11.649-.124,0-14.224,1.716-15.266,1.9v.736c1.1,0,15.449-1.778,15.633-1.9a.264.264,0,0,0,.246-.245,27.107,27.107,0,0,0,.183-2.943c2,.236,13.911-1.221,14.04-1.348.428-.307.673-5.457.673-6.621a50.937,50.937,0,0,0-.367-6.867.257.257,0,0,0-.368-.184c-.061,0-2.391-.858-2.882-1.042-.981-.368-8.521-3.74-8.705-3.678a40.017,40.017,0,0,0-5.333.429c-.123-.061-.8-.429-.859-.491,0-.426.123-9.9-.307-11.4,0-.184-.06-.307-.306-.368-.293-.488-10.2-4.134-10.3-4.169,0,.306-.061.613-.061.919C147.31,41,153.748,43.453,153.993,43.576Zm6.376,30.959c0-.1.307-13.242.307-13.242a17.746,17.746,0,0,0,3.126.062c1.381,0,8.673-.2,10.3-.368-.006.1-.367,12.1-.367,12.2C166.463,74.1,161.228,74.333,160.369,74.535Zm2.268-18.146c2.617,1.221,8.508,3.675,9.441,3.862-.1,0-8.236.3-8.337.307a17.789,17.789,0,0,0-3.127.122c0-1.29.062-1.778,0-2.513a.443.443,0,0,0-.123-.859h-.428c0-.255-1.247-.858-1.349-.858C159.3,56.45,158.542,56.389,162.637,56.389Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M112.918,76.865c-.613.8-1.1,1.655-1.656,2.513-2.083-.429-8.337-1.777-9.44-2.023L98.511,76.8c-.184,0-.246.245-.062.245a65.576,65.576,0,0,0,6.438,1.655c2.146.49,4.352.92,6.5,1.471a.409.409,0,0,0,.49-.184c1.227-2.023,2.515-4.046,4.66-5.149,3.622-1.767,8.461,1.324,8.461,7.3a.429.429,0,0,0,.857,0C126.232,75.465,118.606,69.508,112.918,76.865Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M129.287,106.844c-.191-2,.053-5.868-1.1-7.97-.735-1.227-2.207-1.84-3.371-.859-1.595,1.288-1.656,3.74-1.718,5.579,0,.613,0,1.288.062,1.9-.062,0-4.353.061-5.211.245-.246.062-.184.491.061.491.8-.062,4.721-.062,5.15-.062.061.368.061.981.123,1.533-.062,0-4.476.368-4.905.429a.22.22,0,0,0,.062.43c.429,0,4.843-.124,4.9-.184.061.866.763,10.664.98,12.2-.183-.061-4.842.306-5.088.368a.219.219,0,0,0,.062.429c.245,0,4.9-.061,5.088-.122.008.1.254,2.653.307,2.759-.8.06-4.537.551-4.782.613s-.185.367.061.367c.184,0,4.782-.245,4.782-.245.123,1.042.245,2.145.368,3.188,0,.246.429.246.368,0-.184-2.391-1.288-19.128-1.41-21.518-.089-1.674-.267-4.879.49-6.5.7-1.758,2.013-1.853,2.759-.736,1.095,1.694.915,4.661,1.042,7.051,1.131,13.943,1.089,19.248,1.717,21.886.061.306.49.245.552-.062a24.552,24.552,0,0,0-.062-3.678C130.523,123.349,129.295,106.947,129.287,106.844Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M193.6,104.636a3.309,3.309,0,0,0-2.084-1.777c-2.207-.613-3.555,1.839-4.536,3.372a53.751,53.751,0,0,0-3.74,7.234c-.552-.246-6.5-2.207-7.112-2.391.062-.245,1.472-7.357.43-10.361-.43-1.226-1.288-2.759-2.882-2.391-1.471.368-2.268,2.33-2.82,3.556a52.184,52.184,0,0,0-2.452,7.6,4.739,4.739,0,0,0-1.839-.43c.245-1.655,1.042-5.088,1.1-6.253a.378.378,0,0,0,.123-.429c-.466-2.553-2.45-5.268-4.291-7.111-6.889-6.681-17.154-6.624-25.5-1.84a26.067,26.067,0,0,0-4.414,2.882,8.819,8.819,0,0,0-2.207,2.575c-.614,1.226-.307,2.513-.184,3.8a230.674,230.674,0,0,1,1.226,24.583h-.061a.256.256,0,0,0,0,.491,17.592,17.592,0,0,0,4.414.306c5.58.294,12.321.879,18.514,1.779a57.581,57.581,0,0,1,6.376,1.041c.674.185.92-2.82.859-2.82a7.231,7.231,0,0,0,2.207.368c-.123.8-.429,2.882-.429,2.882s.8.8.858.184c.81-5.325,4.195-28.3,8.092-32,1.288-1.165,2.146.674,2.452,1.716,1.205,4.417-.591,10.21-2.145,16.308-1.117,4.216-2.59,9.027-4.6,15.449a.156.156,0,1,0,.306.061l1.288-3.678c-.062.122,6.682,1.9,6.621,2.084a18.31,18.31,0,0,0-.491,2.452c-.061.246.307.307.368.123,1.609-4.691,3.949-16.06,9.135-25.135a24.2,24.2,0,0,1,2.881-4.475,2.1,2.1,0,0,1,3.188-.246c1.751,1.876.246,5.229-.245,6.621-.307,1.042-.674,2.084-.981,3.127-2.469,7.211-2.5,7.365-5.272,14.468-.552,1.287-1.043,2.575-1.594,3.8s-1.1,2.452-1.595,3.74c-.122.368.43.613.675.245a139.793,139.793,0,0,0,5.886-14.039c.431-1.2,3.723-10.324,4.291-12.384C193.842,108.254,194.406,106.286,193.6,104.636ZM138.85,127.442c-.1,0-4.268-.245-4.965-.245h-.675c.368,0-.613-16.8-.735-18.269-.123-1.594-.307-3.249-.491-4.843-.061-.675-.368-4.23-.307-4.353a6.922,6.922,0,0,1,2.146-2.636c1.1-.858,2.33-1.594,3.5-2.33,9.387-5.9,21.314-5.268,27.71,3.862a17.379,17.379,0,0,1,1.9,4.047c.157.59-.613,4.782-.98,6.559a1.693,1.693,0,0,0-1.1.859,1.386,1.386,0,0,0,.062,1.594,1.655,1.655,0,0,0,.489.429c-.673,2.023-2.942,12.629-2.942,12.69a2.194,2.194,0,0,0-.613.43,1.762,1.762,0,0,0-.368,1.716,1.949,1.949,0,0,0,.491.736c0,.061-.429,2.146-.491,2.268A198.111,198.111,0,0,0,138.85,127.442Zm26.056.123c-.062.245-1.165,0-1.288,0a1.581,1.581,0,0,1-1.349-1.1c-.49-1.9,2.943-.8,2.943-.859C165.089,126.278,164.967,126.891,164.906,127.565Zm.367-2.575a2.585,2.585,0,0,0-2.084-.49c.49-2.453,2.146-9.073,2.636-12.2.123.062,1.716.551,1.655.551C167.722,112.851,167.725,111.507,165.273,124.99Zm2.514-12.874c.061-.123-2.023-.552-2.268-.98-.349-.612.238-1.413,1.716-1.227.123,0,.981.245.981.245C168.094,110.767,167.91,111.442,167.787,112.116Zm9.686,18.576c-1.1-.43-6.5-1.84-6.682-1.84.245-.674.49-1.41.735-2.083.491.183,5.334,1.716,6.376,2.145A8.353,8.353,0,0,1,177.473,130.692Zm3.617-11.955c-1.021,2.835-2.6,8.174-2.942,9.441a46.768,46.768,0,0,0-6.376-2.022,112.92,112.92,0,0,0,3.5-11.813,46.848,46.848,0,0,0,6.121,1.942c.368.062.674-.491.306-.675-.919-.429-2.023-.674-3-1.042a26.033,26.033,0,0,0-3.31-.8c.184-.736.368-1.533.552-2.268.664.3,6.452,2.483,6.866,2.575C182.255,115.672,181.643,117.205,181.09,118.737Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M141.671,96.851c-.123-.43-.43-.552-1.165-.307a12.982,12.982,0,0,0-2.943,1.41c-.613.368-2.452,1.226-2.575,2.023,0,5.526,1.039,23.718,1.1,24.339a.354.354,0,0,0,.369.368,11.5,11.5,0,0,0,4.352.122c.92-.306.613-2.207.613-3,.2-3,.511-19.044.307-22.315A6.359,6.359,0,0,0,141.671,96.851ZM141,101.878v5.456c-.061,3.617-.49,15.694-.429,16.614a33.692,33.692,0,0,0-3.494.062c0-1.472-.368-7.663-.491-9.258-.245-4.782-.122-9.747-.981-14.468a14.471,14.471,0,0,1,5.518-3.127A40.8,40.8,0,0,0,141,101.878Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M153.809,95.318s-1.532-.552-1.655-.613c-1.594-.5-4.53-.48-5.825.49a.232.232,0,0,0,.062.368c-.267,16.747-.153,9.547-.184,11.4,0,7.773-.429,12.162-.429,14.407a19.34,19.34,0,0,0-.122,3.25c.06.613,3.8.49,4.842.49.429,0,1.042-8.277,1.472-11.771.81-7.286,2.269-15.871,2.269-17.9A.233.233,0,0,0,153.809,95.318Zm-.675,2.881c-1.8,10.207-3.187,24.3-3.187,26.055-.246,0-3.372-.061-3.556-.061.49-2.941,1.146-21.345.306-28.691.944,0,2.071-.642,4.414-.307.246.062,2.453.552,2.392.859C153.38,96.851,153.254,97.524,153.134,98.2Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M163.066,102.491c0-.061,0-.061.062-.123.245-.8-1.043-2.023-1.594-2.513a4.767,4.767,0,0,0-2.33-1.349c-.367,0-.245.061-.367.306a27.872,27.872,0,0,0-1.166,4.966c-.781,3.651-2.83,15.895-3.249,18.515-.123.8-.8,2.7.123,3.249.367.245,3.8,1.226,3.985.49.687-2.149,1.939-7.615,2.268-9.2C161.472,113.771,162.882,103.288,163.066,102.491Zm-4.046,18.146c-.183.859-.981,4.047-1.226,4.782a24.686,24.686,0,0,1-2.942-.551,43.175,43.175,0,0,1,.735-4.537c.306-1.717,3.433-20.292,3.617-21.151a12.855,12.855,0,0,1,2.33,2.085c.183.184.858.919.8,1.226C161.763,105.9,160.972,112.675,159.02,120.637Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M80.977,42.656a3.331,3.331,0,0,0-1.042-.49A25.918,25.918,0,0,0,74.6,40.939c-1.288-.122-2.759-.122-3.5,1.1A16.282,16.282,0,0,0,69.7,46.58c-.368,1.471-.613,3-.858,4.475-.184,1.226-.552,2.575,0,3.74.368.735,1.042.735,1.778.8,4.254.34,8.7-.144,8.7.122a.3.3,0,0,0,.552.062,9.457,9.457,0,0,0,.736-2.943c.367-2.023.613-4.108.8-6.192C81.529,45.721,82.011,43.464,80.977,42.656Zm-1.594,3.311a.2.2,0,0,1,.123.367,10.526,10.526,0,0,1-3,1.472L71.352,50.2c-.184.061-.306-.123-.122-.246a31.1,31.1,0,0,1,3.923-2.268C76.36,46.959,78.051,45.967,79.383,45.967Zm-2.7,4.046a5.4,5.4,0,0,1-1.349.613c-1.042.49-2.084.981-3.188,1.471a.222.222,0,0,1-.245-.368,12.759,12.759,0,0,1,2.33-1.348,6.115,6.115,0,0,1,2.207-.859C76.935,49.452,76.978,49.721,76.686,50.013Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M194.823,35.483c-6.07-3-7.023-3.882-13.61-7.908a.371.371,0,0,0-.368-.184l-2.575.184c-3.836-.64-30.049-4.3-43.221-5.579-2.207-.276-4.63-.288-5.763-.429a.092.092,0,0,0,0,.184C131,22,172.875,27.7,174.47,27.942c-1.551,0-25.843,2.713-28.814,3.5-.1-.1-54.183-6.358-54.33-6.368,34.778-2.8,31.8-2.4,32.566-2.583.429-.061.307-.674-.123-.735a24.571,24.571,0,0,0-3.678.245c-1.165.122-19.925,1.655-24.646,2.023-1.348.122-7.418.49-8.031.8-.27.135-.01,14.2,0,14.345-.429-.061-11.035-1.593-11.586-1.655-.614-.061-1.227,0-1.778-.061-.123,0-.184.245-.062.245.613.123,1.165.307,1.778.429.552.123,11.219,1.839,11.71,1.9.061,2.513.184,11.648.245,13.732a.429.429,0,0,0,.858,0c.087-5.217-.632-27.047-.8-28.446.577.193,51.659,6.3,55.544,6.8-3.494,1.533-14.346,7.48-14.529,7.664s-.185,6.743-.185,9.2c-.061,9.932-.245,40.892-.245,46.409a.4.4,0,0,0,.368.368c.429,0,9.258-6.989,11.28-8.338.92-.613,1.9-1.164,2.882-1.777a.42.42,0,0,0,.8-.123s11.649-1.778,14.1-2.084c15.439-1.782,22.825-2.043,22.99-2.207a51.088,51.088,0,0,1,10.545,8.276.4.4,0,0,0,.674-.245c.49-6.928,2.636-49.291,2.942-53.459C195.068,35.728,194.946,35.544,194.823,35.483Zm-43.4,48c-1.348.187-7.479,1.165-7.663,1.226a441.62,441.62,0,0,1,1.962-52.785c1.32,0,4.995-.571,6.559-.735,5.692-.749,19.85-2.186,25.933-2.636.735.122,1.472.183,2.207.306.806,29.194.134,37.626-.307,51.742C170.607,81.156,160.985,82.159,151.418,83.486Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M65.1,54a44.1,44.1,0,0,1,3.495-13.733c1.639-3.114,2.451-3.511,5.7-4.414,4.439-1.009,5-1.164,8.031-1.716,1.349-.246,2.759-.43,4.108-.8a.251.251,0,0,0-.062-.491,26.018,26.018,0,0,0-3.739.491c-2.286.457-8.694,1.613-10.852,2.452a6.861,6.861,0,0,0-3.31,3C66.2,42.53,64.881,48.757,64.3,53.14c-.184,1.777-.245,3.617-.368,5.456-.122,2.207-.061,4.475-.245,6.682-.389,4.86,1.486,4.618,6.008,4.966a4.022,4.022,0,0,1,.858,0c.491.061.491-.736,0-.736-.245,0-.551-.122-.8-.122-.566,0-2.537-.181-3.31-.246A2.013,2.013,0,0,1,64.731,68.1a4.723,4.723,0,0,1-.184-2.268C64.793,61.845,64.789,57.921,65.1,54Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M168.216,90.291a4.657,4.657,0,0,0,1.717-1.41c1.41-1.717,2.391-5.518,2.513-6.5-.49.062-6.805.8-9.38,1.1-.674.061-1.1.245-1.164.981a5.944,5.944,0,0,0,3.249,6.008A4.048,4.048,0,0,0,168.216,90.291Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M175.7,82.137c-.8,0-2.391.123-2.821.184.43.981-.123,2.391-.429,3.433a8.147,8.147,0,0,1-3.739,5.211,4.166,4.166,0,0,0,.858-.122C173.305,90.046,176.431,86,175.7,82.137Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M122.727,88.881a10.541,10.541,0,0,0,.368-9.012c-3.651-8.924-13.351-.792-10.851,8.154C114,94.084,119.456,94.165,122.727,88.881Zm-3.679-8.522c-1.036-.5-2.084.43-2.513,1.349a6.621,6.621,0,0,0-.307,4.353,2.3,2.3,0,0,0,1.349,1.717c.491.122.245.8-.184.735-2.1-.233-2.483-3.509-2.023-5.579.59-2.949,2.595-3.779,3.8-2.758C119.294,80.3,119.172,80.419,119.048,80.359Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M124.689,83.486a9.775,9.775,0,0,1-2.208,7.173,10.959,10.959,0,0,1-3.923,2.7,12.884,12.884,0,0,0,1.533-.061,8.24,8.24,0,0,0,5.211-3.188,11.148,11.148,0,0,0,2.268-6.315C127.631,83.425,125.486,83.486,124.689,83.486Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M79.138,81.586a1.528,1.528,0,0,0,.92,0,4.509,4.509,0,0,0,1.962-.552.443.443,0,0,0-.368-.8c-.368.122-1.9.49-1.962.49.184-1.348.981-7.05,1.042-8.521a.219.219,0,0,0-.429-.062c-.522,1.915-1.153,6.243-1.41,8.215C78.77,80.727,78.582,81.351,79.138,81.586Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M84.349,73.493c-.429-.061-.613.491-.552.8.1.706,1.307.5,1.1-.306A.589.589,0,0,0,84.349,73.493Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M77.605,74.106a.587.587,0,0,0,.184-.613.65.65,0,0,0-.551-.49c-.43-.062-.613.49-.552.8A.579.579,0,0,0,77.605,74.106Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M83.062,83.976a6.119,6.119,0,0,1-6.376-.122c-.245-.123-.491.184-.307.368a4.334,4.334,0,0,0,1.594.981,6.473,6.473,0,0,0,5.518-.552C83.981,84.467,83.552,83.731,83.062,83.976Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M117.883,120.577c-.278-4.849-.7-13.879-2.267-18.393-1.971-5.484-5.624-8.755-11.4-8.889-4.314-.092-8.869,1.5-12.99,2.555-.095-.514-.267-1.5-.306-1.9-.332-3.413.417-6.895,1.158-10.284a7.561,7.561,0,0,0,4.169-1.41,3.9,3.9,0,0,0-.245-5.7c2.513-.858,3.187-3.74.673-5.457,2.637-1.41,1.411-5.885-.919-5.946a3.458,3.458,0,0,0-3.862-5.028c-.307-3.617-4.844-3.984-7.173-2.635-1.288-1.962-6.131-1.9-7.418,1.9-2.943-.92-5.272,2.023-4.537,5.149a2.055,2.055,0,0,0-1.717,2.024c-.121,1.936,1.813,3.5,2.269,5.211.718,2.393-.8,4.486-.8,13.119a6.228,6.228,0,0,0,.49,3c.859,1.655,5.27,3,5.273,3.188a6.283,6.283,0,0,1-1.82,4.481c-3.794-1.1-6.087-2.327-10.809-3.439a7.965,7.965,0,0,0-3.494-.123c-4.493.946-8.078,5.588-9.565,9.933-1.4,3.842-1.717,8.679-1.717,12.751,0,.061.269.1.331.039.673-5.4.835-11.2,3.777-15.857a14.254,14.254,0,0,1,4.844-4.9c2.262-1.357,4.14-1.357,6.682-.613,5.424,1.587,10.668,4.107,16.43,4.475,8.59.543,17.828-5.4,24.891-2.82a10.813,10.813,0,0,1,5.517,4.659,21.933,21.933,0,0,1,2.514,7.787c1.542,10.8,1.638,30.253.8,36.967a7.909,7.909,0,0,1-1.349,3.617,9.108,9.108,0,0,1-2.514,2.33,36.961,36.961,0,0,1-7.05,3.31A106.055,106.055,0,0,1,76.5,160.487c-1.069-11-.882-12.551-1.838-14.224,4.762-1.536,13.4-6.011,30.163-8.276.49-.061.368-.919-.123-.859-1.9.246-3.863.491-5.762.859a87.737,87.737,0,0,1-1.158-19.445,37.351,37.351,0,0,1,.522-4.857c.074-.446-.38-.783-.541-.108-1.7,7.138-1.095,17.31.194,24.533a101.35,101.35,0,0,0-17.471,4.966,40.063,40.063,0,0,0-6.193,2.82c-.122-.122-.489,0-.367.184a9.273,9.273,0,0,1,.466,1.774c-2.193.88-4.075,2.392-6.719,1.291a16.345,16.345,0,0,1-1.962-1.165,14.045,14.045,0,0,0-8.4-2.146A10.782,10.782,0,0,0,52.532,147c-.307.184-.123.736.245.614a20.949,20.949,0,0,1,4.352-.859c7.622-.317,8.794,3.981,12.752,3.617a10.817,10.817,0,0,0,2.575-.674,12.186,12.186,0,0,0,2.028-1.2,8.247,8.247,0,0,1,.056.9c.121,1.206.021.592.657,7.589a48.354,48.354,0,0,1-20.765,6.695c-2.085.179-4.169.245-6.314.307a.157.157,0,0,0-.062.306c9,1.162,19.458-1.649,27.2-6.329a11.594,11.594,0,0,0,.323,2.957.367.367,0,0,0,.368.492,101.6,101.6,0,0,0,34.392-8.706,13.187,13.187,0,0,0,5.7-4.292c1.656-2.391,1.533-5.579,1.717-8.337A147.729,147.729,0,0,0,117.883,120.577Zm-30.9-23.911a23.954,23.954,0,0,1-9.573-.82A5.969,5.969,0,0,0,79.077,91.4a19.445,19.445,0,0,0,4.169.919c.183,0,.49.061.613-.122a.518.518,0,0,0-.123-.737c-.563-.421-2.747-.174-7.235-2.022a5.135,5.135,0,0,1-2.635-2.023c-.883-1.5-.433-2.073,1.165-20.047,2.635.551,5.333,0,8.031.122,4.291.123,7.663,2.575,7.663,7.051a21.382,21.382,0,0,1-1.042,3.31c-.061.367.307.8.612.613.43-1.594,2.514-2.207,4.109-1.778s4.48,5.854-2.392,6.008a1.07,1.07,0,0,0-.613.184A45.14,45.14,0,0,0,90.227,93.96a19.476,19.476,0,0,0,.3,2.063A26.589,26.589,0,0,1,86.986,96.666Z"
                    fill="#191919"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <FAQSDark faqs={faqs} />
      <SimpleCTA />
    </main>
  );
}
