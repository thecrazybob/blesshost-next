import { CheckIcon, XIcon } from "@heroicons/react/solid";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import lauraImg from "../public/img/testimonials/laura.jpg";
import madianImg from "../public/img/testimonials/madian.jpg";
import Seo from "../components/seo";
import { useRouter } from "next/router";
import { useState } from "react";
import priceString from "../lib/pricing";
import { useCurrency } from "../contexts/CurrencyContext";
import { useCart } from "../contexts/CartContext";

const plans = [
  {
    pid: -2,
    title: "Standard",
    featured: false,
    description: "Included free-of-charge with all of our services.",
    mainFeatures: [
      { id: 1, value: "24x7 email, phone and chat" },
      { id: 2, value: "Access to knowledgebase" },
      { id: 3, value: "cPanel support" },
    ],
  },
  {
    pid: 206,
    title: "Enterprise",
    featured: true,
    description:
      "The best and quickest support that you can get for your business.",
    mainFeatures: [
      { id: 1, value: "24x7 email, phone and chat" },
      { id: 2, value: "Access to knowledgebase" },
      { id: 3, value: "cPanel support" },
      { id: 4, value: "3-6 hour avg. response time" },
      { id: 5, value: "Senior support team" },
      { id: 6, value: "Support for WordPress & Laravel" },
      { id: 7, value: "Dedicated account manager" },
      { id: 9, value: "Server, email setup and configuration" },
      { id: 10, value: "Website optimization & troubleshooting" },
      { id: 11, value: "Proactive monitoring" },
      { id: 12, value: "Backup configuration and restoration" },
    ],
  },
  {
    pid: 205,
    title: "Premium",
    featured: false,
    description: "For startups and fast-growing businesses.",
    mainFeatures: [
      { id: 1, value: "24x7 email, phone and chat" },
      { id: 2, value: "Access to knowledgebase" },
      { id: 3, value: "cPanel support" },
      { id: 4, value: "12-24 hour avg. response time" },
      { id: 5, value: "Senior support team" },
      { id: 6, value: "Support for WordPress & Laravel" },
    ],
  },
];
const features = [
  {
    title: "Email, phone and chat",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Technical support",
    tiers: [
      { title: "starter", value: "Basic" },
      { title: "popular", featured: true, value: "Expert" },
      { title: "intermediate", value: "Expert" },
    ],
  },
  {
    title: "Response times",
    tiers: [
      { title: "starter", value: "12-48 hours" },
      { title: "popular", featured: true, value: "3-6 hours" },
      { title: "intermediate", value: "12-24 hours" },
    ],
  },
  {
    title: "Dedicated phone number",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Dedicated account manager",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: false },
    ],
  },
  {
    title: "Assistance via TeamViewer, AnyDesk",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: "Urgent issues only" },
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
    title: "WordPress support",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Laravel support",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Linux & Windows Server support",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: false },
    ],
  },
  {
    title: "Proactive monitoring",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: false },
    ],
  },
  {
    title: "Backup restoration",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: false },
    ],
  },
  {
    title: "Emergency support",
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
    question: "Which support level should I get?",
    answer:
      "We have different levels of support depending on what you need displayed above. If you are unsure about your needs, don't hesitate to contact us.",
  },
  {
    id: 2,
    question: "How fast would my concerns be resolved?",
    answer:
      "Depending on the complexity of the problem, the duration could range from a few minutes to a couple of days. However, our team will keep you updated along the way. Rest assured that a well-trained team of support personnel are working on your tickets.",
  },
  {
    id: 3,
    question:
      "Can I ask for assistance via remote control apps like Teamviewer and AnyDesk?",
    answer:
      "Yes, both our premium and enterprise plans include support via remote control applications.",
  },
  {
    id: 4,
    question: "What if I am not satisfied with my dedicated account manager?",
    answer:
      "You can always request to change your dedicated account manager. We will assign a new account manager to you almost instantly upon receiving your request.",
  },
  {
    id: 5,
    question: "How do I get in touch with my dedicated account manager?",
    answer:
      "Once you have signed up for our Enterprise plan, your dedicated account manager will get in touch with you and provide you a phone number and email through which you can reach out to your account manager.",
  },
  {
    id: 6,
    question: "Is it possible to upgrade/downgrade from a support plan?",
    answer:
      "Yes, at any time you may choose to upgrade or downgrade your support plan. At the end of the billing period, your account will be automatically switched to your newly requested plan.",
  },
];

const seo = {
  pageTitle: "Dedicated Support",
  title: "Dedicated support services for hosting management | BlessHost",
  metaDesc:
    "We provide dedicated support services via emails, live chats, phone calls, and even office visits. Simple pricing with no commitments.",
  keywords:
    "dedicated support services, dedicated customer support, dedicated support, dedicated support team",
  opengraphImage: {},
};

seo.opengraphImage.sourceUrl = `${process.env.OG_URL}/${seo.pageTitle}?description=${seo.metaDesc}`;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DedicatedSupportPage() {
  const { addProductToCart } = useCart();
  const [billingInterval, setBillingInterval] = useState("annually");
  const { currency } = useCurrency();
  const router = useRouter();

  seo.canonical = `${process.env.NEXT_PUBLIC_BASE_URL}${router.route}`;

  const toggleOptions = [
    {
      id: "annually",
      name: "Yearly billing",
    },
    {
      id: "monthly",
      name: "Monthly billing",
    },
  ];

  return (
    <>
      <Seo seo={seo} />
      {/* Hero card */}
      <div className="relative bg-white">
        <div className="absolute inset-x-0 bottom-0 h-1/2" />
        <div className="mx-auto">
          <div className="relative shadow-xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1574790398664-0cb03682ed1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2702&q=80"
                alt="People working on computers"
              />
              <div className="absolute inset-0 bg-blue-700 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-48 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">
                  Get the help you need with our
                </span>
                <span className="block text-blue-200">
                  dedicated support plans
                </span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-blue-200 sm:max-w-3xl">
                Let one of our expert team members help you with your concerns
                and almost instant response times.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <a
                    href="#pricing"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 sm:px-8"
                  >
                    View plans
                  </a>

                  <Link href="/contact">
                    <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                      Contact us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing section */}
      <Tab.Group
        onChange={(index) => {
          setBillingInterval(toggleOptions[index].id);
        }}
      >
        <div id="pricing">
          <div className="relative bg-blue-600">
            {/* Overlapping background */}
            <div
              aria-hidden="true"
              className="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block"
            />

            <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                <span className="block lg:inline">Simple pricing,</span>
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
              <Tab.List className="bg-blue-700 p-0.5 rounded-lg flex">
                {toggleOptions.map((option) => (
                  <Tab
                    key={option.id}
                    className={({ selected }) =>
                      classNames(
                        "relative py-2 px-6 rounded-md text-sm font-medium whitespace-nowrap border",
                        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white focus:z-10",
                        selected
                          ? "bg-white shadow-sm border-blue-700 text-blue-700 hover:bg-blue-50"
                          : "text-blue-200 border-transparent hover:text-white ml-0.5 hover:bg-blue-800"
                      )
                    }
                  >
                    {option.name}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            {/* Cards */}
            <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
              {/* Decorative background */}
              <div
                aria-hidden="true"
                className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-blue-700 rounded-tl-lg rounded-tr-lg lg:block"
              />

              <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
                {plans.map((plan) => (
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
                              {`Billed ${
                                plan.pid != "-2" ? billingInterval : "never"
                              }`}
                              (
                              {priceString({
                                pid: plan.pid,
                                term: billingInterval,
                                currency: currency,
                              })}
                              )
                            </p>
                          </div>
                        </div>
                        {plan.pid === -2 ? null : (
                          <button
                            onClick={() =>
                              addProductToCart(plan, billingInterval)
                            }
                            className={classNames(
                              plan.featured
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "bg-white text-blue-600 hover:bg-blue-50",
                              "mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
                            )}
                          >
                            Buy {plan.title}
                          </button>
                        )}
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
                ))}
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
                        plan.featured
                          ? "border-blue-600"
                          : "border-transparent",
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
                                ? "px-4"
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
                              index === perk.tiers.length - 1 ? "px-4" : "px-4",
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
      </Tab.Group>
      {/* FAQ */}

      <div className="bg-gray-900 mt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-20">
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="font-semibold text-white">{faq.question}</dt>
                  <dd className="mt-3 text-gray-400">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <section className="bg-blue-800">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
          <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-blue-900 lg:pr-16">
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative">
                  BlessHost's team is always there to support us on any
                  technical issues related to our website. They are organized
                  and creative. They insure that the work is done the soonest
                  and this is something that we seek for when running a
                  business.
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                    <Image
                      className="rounded-full"
                      src={lauraImg}
                      layout="fixed"
                      width={48}
                      height={48}
                      alt="Laura-Helene Kopinski"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">
                      Laura-Helene Kopinski
                    </div>
                    <div className="text-base font-medium text-blue-200">
                      Founder, Inner Seed
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          <div className="py-12 px-4 border-t-2 border-blue-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative">
                  I'd like to thank you for a long partnership with outstanding
                  customer service every time I deal with you - this is why I
                  continue to recommend you guys and don't use anyone else for
                  any of my websites or domain names! Keep up the excellent
                  work!
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                    <Image
                      className="rounded-full"
                      src={madianImg}
                      layout="fixed"
                      width={48}
                      height={48}
                      alt="Madian Romero"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">
                      Madian Romero
                    </div>
                    <div className="text-base font-medium text-blue-200">
                      Illustration Artist
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
      {/* CTA */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready for dedicated support?</span>
            <span className="block text-blue-600">
              Get started by contacting us right now.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/contact">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Contact Us
                </a>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                View plans
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
