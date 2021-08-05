import { CheckIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Testimonials from "../components/testimonials";
import SimpleCTA from "../components/cta-simple";
import FAQSDark from "../components/faqs-dark";
import { useState } from "react";
import { useCurrency } from "../contexts/CurrencyContext.js";
import priceString from "../lib/pricing";
import WHMCSLink from "../components/whmcs-link";
import Image from "next/image";

const securityFeatures = [
  {
    id: 1,
    name: "The hosting software is updated regularly to keep your website protected.",
  },
  {
    id: 2,
    name: "All the susceptibilities are regularly scanned and blocked to protect your site.",
  },
  {
    id: 3,
    name: "Your website is isolated from other customers on the server.",
  },
  {
    id: 4,
    name: "Protecting your server from a distributed denial of service (DDoS) attack.",
  },
];

const performanceFeatures = [
  {
    id: 1,
    name: "We use modern and improved configurations for your website",
  },
  {
    id: 2,
    name: "Our server side caching will minimize page generation time.",
  },
  {
    id: 3,
    name: "We provide access to the world’s best content delivery network just with a click.",
  },
  {
    id: 4,
    name: "Updated configuration to HTTP & MySQL to increase performance with uncompromising reliability.",
  },
];

const reliabilityFeatures = [
  {
    id: 1,
    name: "Our storage arrays will ensure multiple server storage & file system integrity.",
  },
  {
    id: 2,
    name: "Your website is backed up regularly to our off-site backup servers.",
  },
  {
    id: 3,
    name: "Your server will be monitored 24/7 to pro-actively prevent issues.",
  },
  {
    id: 4,
    name: "Our Website Support specialists are available to support you 24/7.",
  },
];

const faqs = [
  {
    id: 1,
    question: "What is web hosting and how does it help my website?",
    answer:
      'To create a website, a domain and web hosting is necessary. Domain is the name of the website, e.g. our domain name is "blesshost.com". Once you have selected a domain name, web hosting is where you store the content of the website',
  },
  {
    id: 2,
    question: "Can I install popular applications like WordPress myself?",
    answer:
      "Yes, we have partnered with Softaculous which allows our customers to install over 200+ applications like WordPress, Laravel and Magento  using a single click.",
  },
  {
    id: 3,
    question: "What happens when I want to transfer my hosting somewhere else?",
    answer:
      "As long as your account is active, you can transfer your website from our Simple Web Hosting to any other host.",
  },
  {
    id: 4,
    question:
      "My website is currently hosted on another host, how can I transfer it here?",
    answer:
      "BlessHost takes care of website transfers, just create a ticket with your previous host login info and your website will be transferred within 24 hours.",
  },
  {
    id: 5,
    question: "How do I reach BlessHost support team when I need help?",
    answer:
      "Our team is available 24/7/365 to help you via live chat, email, our ticket system, phone and WhatsApp. Our team is always ready to help you out.",
  },
  {
    id: 6,
    question: "How do I pay for my own Simple Web Hosting account?",
    answer:
      "You can pay via any VISA / Mastercard card, PayPal or Bitcoin (and other popular cryptocurrencies such as ETH).",
  },
];

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function simpleHostingPage() {
  const [billingInterval, setBillingInterval] = useState("annually");
  const { currency, setCurrency } = useCurrency("");

  return (
    <main>
      {/* Hero card */}
      <div className="md:h-[screen-wh] relative bg-white">
        <div className="absolute inset-x-0 bottom-0 h-1/2" />
        <div className="mx-auto h-full">
          <div className="relative shadow-xl sm:overflow-hidden h-full">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80&sat=-100"
                alt="Laptop on a desk"
              />
              <div className="absolute inset-0 bg-blue-800 mix-blend-multiply" />
            </div>
            <div className="relative flex h-full flex-col justify-center px-4 py-16 sm:px-6 sm:py-24 lg:py-48 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">
                  Traditional Hosting with{" "}
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
        <div className="relative bg-blue-600 pb-16">
          {/* Overlapping background */}
          <div
            aria-hidden="true"
            className="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block"
          />

          <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
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
              className="hidden absolute top-4 bottom-2 left-8 right-8 inset-0 bg-blue-700 rounded-tl-lg rounded-tr-lg lg:block"
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

                        <WHMCSLink
                          label={`Buy ${plan.title}`}
                          pid={plan.pid}
                          term={billingInterval}
                          currency={currency}
                          className={classNames(
                            plan.featured
                              ? "bg-blue-600 text-white hover:bg-blue-700"
                              : "bg-white text-blue-600 hover:bg-blue-50",
                            "mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
                          )}
                        />
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

          <div id="more" className="relative mt-10 lg:mt-16">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why choose our Simple Web Hosting for your website?
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              With our unique approach to hosting infrastructure, we deliver
              amazing server speeds, unparalleled website performance and
              deliver 100% uptime, backed by a guarantee.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Improved Security
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Our hosting uses a security first approach
              </p>
              <div className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6">
                {securityFeatures.map((feature) => (
                  <div key={feature.id} className="relative">
                    <dt>
                      <CheckIcon
                        className="absolute h-6 w-6 text-green-500"
                        aria-hidden="true"
                      />
                      <p className="ml-9 text-base leading-6 font-medium text-gray-500">
                        {feature.name}
                      </p>
                    </dt>
                  </div>
                ))}
              </div>
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
                    d="M139.148,161.774a31.7,31.7,0,0,0,9.154-1.743q-1.956-7.877-4.138-15.687C142.273,150.321,140.67,155.934,139.148,161.774Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M150.72,113.8c.112.1.124.112.09.078S150.754,113.835,150.72,113.8Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M155.139,123.473a.708.708,0,0,1-.033.247c.011.011.011.034.022.045q1.788,7.522,3.171,15.136c-.011-.652,0-10.863,0-15.327A14.879,14.879,0,0,1,155.139,123.473Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M125.721,27.4C120.184,13.61,106.908,9.471,92.165,11.367a39.177,39.177,0,0,0-6.027,1.17c-11.125,3.256-21.663,15.8-21.862,36.176-.01,1.035.029,2.058.045,3.081a.113.113,0,0,0,.1.113l-.012.078a.2.2,0,1,0-.022.394c2.94.131,5.481.117,7.849.056,2.75-.071,3.054.111,3.025-.933-.237-8.609,1.657-17.791,7.4-24.11a16.925,16.925,0,0,1,7.354-4.948c5.72-1.772,13.213-1.71,18.656,1.642a16.588,16.588,0,0,1,5.927,6.4c3.361,6.315,3.339,13.788,3.756,20.568a4.093,4.093,0,0,1,.056,1.136.2.2,0,0,0,.191.247c1.823.04,3.644.119,5.465.1,4.3-.041,4.207-.264,5.2-.147a.208.208,0,0,0,.2-.2C128.926,43.934,128.865,35.232,125.721,27.4Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M44.226,123.979c-.292-.675-.585-1.35-.866-2.025a19.2,19.2,0,0,1-5.409-.224c0,20.448-.375,25.067,1.394,29.924C40.432,142.529,41.614,133.121,44.226,123.979Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M56.247,147.7c-1.4,4.333-2.847,9.361-3.958,13.528a50.82,50.82,0,0,0,7.456.686Q58.041,154.791,56.247,147.7Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M55.707,88.556c-.035-.249-.292-.3-.506-.315a2.465,2.465,0,0,0-.719.045c-.147.033-.208.3-.045.348a4.62,4.62,0,0,0,.7.191C55.264,88.849,55.772,89.014,55.707,88.556Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M59.576,84.62a.177.177,0,0,0,0,.337c.912.368.292,1.434-.484,1.439a.328.328,0,0,0-.326.327c.011,1.282.05,2.552.09,3.834.013.416.67.428.652,0-.047-1.18-.067-2.373-.078-3.553a1.516,1.516,0,0,0,1.135-1.192C60.662,85.271,60.26,84.333,59.576,84.62Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M74.78,97.833A17.156,17.156,0,0,0,63.231,90.5c-.82-.158-2.536-.361-3.217.124a11.511,11.511,0,0,1-2.53,1.765,5.605,5.605,0,0,1-4.116-.663,3.514,3.514,0,0,0-2.609-.945c-3.981-.112-7.073,1.7-10.154,4.15a30.821,30.821,0,0,0-9.165,12.19.327.327,0,0,0,.034.3c-4.3,10.61,6.491,18.735,25.212,8.895,5.354-2.813,6.8-4.373,8.749-5.06a.168.168,0,0,0,.146.214,8.956,8.956,0,0,1,3.43,1.181c2.038.99,2.082,1.48,2.631,1.327a.18.18,0,0,0,.135-.18c-.034-.507-.641-.731-1.034-.968-1.231-.739-3.349-1.835-4.78-1.743.147-.033.293-.066.45-.09.507-.075.293-.854-.214-.776-2.051.318-3.215,1.607-7.883,4.263-5.405,3.073-11.4,5.6-17.587,5.42-7.1-.212-11.429-4.909-8.648-12.314a64.92,64.92,0,0,1,10.071.575c.239-1.118.718-2.95.994-4.106a2.913,2.913,0,0,1,.506-1.417.162.162,0,0,1,.27.067,3.16,3.16,0,0,1-.225,1.6c-1.561,6.446-1.653,7.512-1.653,7.512a11,11,0,0,0-2.451,1.383c-.405.293-.022.98.4.686.732-.5,1.484-.955,2.226-1.417a.376.376,0,0,0,.293-.022c6.357-3.28,15.2-5.265,21.433-3.4,2.247.673,2.64,1.524,3.512,1.124a11.735,11.735,0,0,1,.008-6.7.222.222,0,0,1,.427.124,16.082,16.082,0,0,0,.094,6.229c.643.117,1.015-.121,9.611,1.114a.435.435,0,0,0,.81-.191A21.556,21.556,0,0,0,74.78,97.833Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M83.315,192.171c-1.053-.659-2.383-.688-3.5-1.226-1.169-.564-2.2-1.336-3.307-1.99-1.512-.9-2.334-1.308-3.677-.3-1.484,1.109-2.6.785-4.363-.011-.528-.238-.991.542-.461.787a6.8,6.8,0,0,0,3.317.866c1.631-.129,1.844-1.021,2.7-1.282.562-.172,1.171.246,1.642.506a35.021,35.021,0,0,0,4.42,2.519c.954.364,2.159.393,2.98,1.046.72.573-.54.887-.979.933-.8.083-10.944.093-12.235.011-2.066-.131-1.737-.857-2.181-4.88a.253.253,0,0,0-.506,0,14.7,14.7,0,0,0,.269,4.239c.632,1.994,3.062,1.591,11.786,1.575,2.142,0,3.259.057,4.1-.36C84.4,194.068,84.649,193.005,83.315,192.171Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M44.282,189.168a21.933,21.933,0,0,1-.483,3.88c-.352,1.18-1.811,1.012-2.789,1.023-2.733.033-9.435.012-10.054.012a4.264,4.264,0,0,1-1.956-.27c-.777-.4.078-.89.539-1.069a14.547,14.547,0,0,1,1.53-.427c2.227-.595,3.858-2.235,5.926-3.137a1.462,1.462,0,0,1,1.709.337c1.7,1.3,3.276.825,5.241-.079.53-.244.066-1.015-.461-.787-3.914,1.7-3.886-.184-5.387-.54-1.755-.416-4.387,2.43-6.972,3.228-.585.18-1.192.282-1.766.494-.887.329-2.2,1.2-1.405,2.272.778,1.044,2.474.856,3.61.866,3.137.027,6.286.051,9.423-.034,1.159-.031,2.708.033,3.351-1.147a5.362,5.362,0,0,0,.405-2.069,12.664,12.664,0,0,0,.011-2.553A.236.236,0,1,0,44.282,189.168Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M171.378,190.923c-1.059-.65-2.383-.688-3.5-1.226-1.168-.564-2.2-1.337-3.306-1.991-1.512-.9-2.334-1.307-3.677-.3-1.484,1.109-2.6.785-4.363-.011-.528-.238-.991.542-.461.787a6.8,6.8,0,0,0,3.317.866c1.63-.129,1.844-1.021,2.7-1.282.562-.172,1.17.246,1.642.506a35.2,35.2,0,0,0,4.419,2.519c.955.364,2.16.393,2.98,1.045.721.573-.539.888-.978.934-.795.083-10.945.093-12.235.011-2.066-.131-1.737-.857-2.182-4.88a.253.253,0,0,0-.506,0,14.7,14.7,0,0,0,.27,4.239c.632,1.994,3.062,1.59,11.785,1.574,2.143,0,3.259.058,4.105-.359C172.467,192.819,172.718,191.744,171.378,190.923Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M132.345,187.909a21.911,21.911,0,0,1-.484,3.879c-.351,1.18-1.81,1.012-2.788,1.024-2.733.032-9.435.011-10.054.011a4.271,4.271,0,0,1-1.957-.27c-.776-.4.079-.889.54-1.068a14.8,14.8,0,0,1,1.53-.428c2.226-.594,3.858-2.235,5.926-3.137a1.464,1.464,0,0,1,1.709.337c1.7,1.3,3.275.826,5.241-.078.53-.244.066-1.016-.461-.788-3.914,1.7-3.886-.183-5.387-.539-1.755-.417-4.387,2.43-6.972,3.227-.585.18-1.192.283-1.766.5-.887.328-2.2,1.2-1.405,2.272.777,1.044,2.474.856,3.609.865,3.138.027,6.287.052,9.424-.033,1.158-.032,2.708.032,3.351-1.147a5.389,5.389,0,0,0,.405-2.07,12.8,12.8,0,0,0,.011-2.552A.236.236,0,1,0,132.345,187.909Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M139.643,87.7c.431.076.378.169.641.225.424.089.554-.763-.63-.517A.151.151,0,0,0,139.643,87.7Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M137.923,77.119a1.086,1.086,0,0,0-.315.978.753.753,0,0,0,1.327.383,1.152,1.152,0,0,0,.011-1.417.964.964,0,0,0,.394-1.035.7.7,0,0,0-.034-.337c0-.011.011-.011.011-.023a.708.708,0,0,0-.011-.731c-.1-.157-.382-.247-.517-.067a.714.714,0,0,0-.18.349.329.329,0,0,0-.1.067.964.964,0,0,0-.607.945.907.907,0,0,0,.146.764A1.313,1.313,0,0,0,137.923,77.119Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M140.1,76.557c-.3.731-.157,1.875.72,1.788.933-.093.933-1.451.349-1.979.408-.572.009-1.4-.563-1.35-.011-.034-.033-.056-.045-.09-.074-.209-.349-.214-.494-.169-.271.085-.312.456-.2.675A.933.933,0,0,0,140.1,76.557Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M141.926,76.152a.25.25,0,0,0,.09.056,1.221,1.221,0,0,0,.45.967c-.541,1.026-.07,1.752.528,1.721.736-.038,1.282-1.526.765-2.092.235-.737-.463-1.408-1.248-1.428-.136-.363-.842-.305-.889.045C141.559,75.74,141.616,76.048,141.926,76.152Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M143.782,79.492a1.3,1.3,0,0,0-.09,1.079c.422.913,1.9.157,1.473-1.079a.977.977,0,0,0-.158-1.586.576.576,0,0,0-.045-.371.454.454,0,0,0-.854.214.563.563,0,0,0,.18.405,1.116,1.116,0,0,0-.18,1.023A2.219,2.219,0,0,0,143.782,79.492Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M145.041,80.931a1.525,1.525,0,0,0-.427,1.383,1.308,1.308,0,0,0-.349.922.6.6,0,0,0,1.08.315,1.045,1.045,0,0,0,.112-.9,1.123,1.123,0,0,0,.293-1.35.32.32,0,0,0,0-.247C145.832,80.642,145.206,80.273,145.041,80.931Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M145.457,84.316a1.123,1.123,0,0,0,1.7.821c.271-.213-.022-.619-.315-.551-.451.105-.571-.05-1-.5A.23.23,0,0,0,145.457,84.316Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M146.2,86.194a3.8,3.8,0,0,1-.641-.517c-.193-.167-.539.056-.371.292a5.3,5.3,0,0,0,.529.72.6.6,0,0,0,.832.067.311.311,0,0,0-.135-.506A.883.883,0,0,0,146.2,86.194Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M138.2,81.325c.279.182.529-.26.258-.45-.336-.237-1.043-.291-1.281.112a.191.191,0,0,0,.157.282C137.584,81.249,137.776,81.045,138.2,81.325Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M141.173,80.931a.211.211,0,0,0,.2.349,2.992,2.992,0,0,1,.517-.113c.18,0,.338.09.518.09a.226.226,0,0,0,.157-.382A1.111,1.111,0,0,0,141.173,80.931Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M135.381,85.126c.327-.077.247-.481,0-.585a.612.612,0,0,1-.416-.607c.006-.315.215-.4.484-.5a.254.254,0,0,0,0-.484c-.587-.241-1.125.45-1.136.979S134.741,85.276,135.381,85.126Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M144.119,119.447a42.05,42.05,0,0,1-6.219,1.619c-5.732.908-13.712-.022-17.059-4.689A10.6,10.6,0,0,1,119,110.855a34.109,34.109,0,0,1,10.941-1.934c.349,0,.73-.066.979.2.365.395.655,1.527,1.136,1.642.519.125,0-.322,3.294-1.1a30.751,30.751,0,0,1,11.5-.27,50.243,50.243,0,0,1,8.748,2.2c2.741,1.355,3.1,2.444,3.959,2.587a.184.184,0,0,0,.225-.225,2.584,2.584,0,0,0-.945-1.136,8.979,8.979,0,0,0-3.16-1.867c0-.315-.054-.211.1-.247a35.7,35.7,0,0,1,9.795-.821.46.46,0,0,0,.461-.461,23.118,23.118,0,0,0-7.276-13.944c-3.425-3.356-7.86-5.983-12.786-5.972a5.368,5.368,0,0,0-1.686.169q-.086-1.788,0-3.576a1.3,1.3,0,0,0,.955-1.99c-.092-.122-.292-.023-.292.123,0,.653-.18,1.3-.967,1.26a.323.323,0,0,0-.315.315,26.6,26.6,0,0,0-.034,3.992.316.316,0,0,0,.192.281,3.37,3.37,0,0,1-.8.45c-1.073.5-3.2,1.012-4.251.112a.247.247,0,0,0,.09-.2c.006-.36.012-.709,0-1.057.1.009,2.266.167,2.812.123.292-.023.4-.483.078-.539-1.9-.327-4.627.44-5.375-1.946a8.019,8.019,0,0,1-.056-3.137c.061-.657.462-3.395.213-3.644a1.522,1.522,0,0,0,.405-1.956,1.812,1.812,0,0,0,.349-1.125.925.925,0,0,0,.349-.427c.232-.548-.058-.918-.394-.832a.781.781,0,0,0-.574.551c-.033,0-.078-.011-.112-.012a.893.893,0,0,0-.81.787,2.7,2.7,0,0,0,.034,1.08c-.678.6-.542,2,.416,2a11.97,11.97,0,0,0-.247,1.911c-.335,3.177-1,6.575,2.462,7.108-.045.269-.078.551-.1.82a.386.386,0,0,0-.326-.045c-.127.055-.1-.008-1.293-.033a13.354,13.354,0,0,0-9.885,3.475c-4.1,3.594-6.891,7.784-8.715,16.879-.059.292.191.641.517.517.012,0,.023-.011.034-.011-.4,2.721,1.39,6.824,5.342,8.884,5.056,2.636,11.119,2.77,16.722,1.394a17.933,17.933,0,0,0,3.666-1.169C144.749,119.908,144.49,119.357,144.119,119.447Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M165.676,110.1a.242.242,0,0,0-.472.067c-.077,2.053.751,5.189-.866,7.85a7.909,7.909,0,0,1-6.331,3.407c-3.025.193-6.061-.765-8.884-1.754-5.508-1.931-4.836-3.03-11.763-6.871a11.016,11.016,0,0,0-4.363-1.71c-.6-.049-.6.879,0,.934a11.725,11.725,0,0,1,4.42,1.867c6.529,3.65,5.771,4.737,11.819,6.781,2.9.98,6.028,1.927,9.131,1.63a8.644,8.644,0,0,0,6.331-3.34C166.341,116.623,166.4,112.536,165.676,110.1Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M130.085,113.981c-.072.19.112.341.27.36.538.067,1.138-.49,1.608-.719.587-.287,1.18-.586,1.776-.855.225-.1.057-.416-.157-.382a7.9,7.9,0,0,0-1.99.584C131.076,113.2,130.3,113.415,130.085,113.981Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M45.53,123.585c.091.223.2.2.2.259a35.069,35.069,0,0,1,6.848-1.249c0-.236.011-.483.023-.719a.206.206,0,0,1,.146-.191,7.037,7.037,0,0,1,2.575-.282c.112.014.113.2,0,.225-.785.146-1.563.2-2.339.394a7.506,7.506,0,0,0,.068,1.732c.854-.034,1.709-.081,2.575-.113.523-.019.416.093.416-2.226a.191.191,0,0,1,.382,0c0,.348.011.686.011,1.034a36.668,36.668,0,0,1,6.961.787c-.086-.216-.173,0,.338-1.225.556-1.332-3.7-.7-7.186-4.431a.392.392,0,0,0-.472-.056,40.909,40.909,0,0,1-11.133,3.654.385.385,0,0,0-.27.473C44.943,122.32,45.264,122.931,45.53,123.585Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M71.226,158.884c-.722-6.291-2.226-18.068-3.745-24.267a53.878,53.878,0,0,0-4-11.189.233.233,0,0,1-.281.236,37.677,37.677,0,0,0-6.77-.754c0,.587.066.934-.258,1.08a4.414,4.414,0,0,1-1.451.1c-1.789.08-1.979.149-2.013-.067-.052-.327-.1-.653-.124-.99a39.313,39.313,0,0,0-6.983,1.237c-.939,3.192-1.849,7.288-2.463,10.559-1.6,8.536-3.466,25.026-3.97,32.207a73.189,73.189,0,0,0,.7,18.353.348.348,0,0,0,.247.247,13.866,13.866,0,0,0,4.5.54c.54-.014.761-.237.81-.776a81,81,0,0,1,2.553-12.865c2.42-9.65,4.994-19.922,8.456-29.665.2.8,10.02,41.567,10.278,42.98a.368.368,0,0,0,.259.259,11.031,11.031,0,0,0,5.049-.462.383.383,0,0,0,.27-.348A148.18,148.18,0,0,0,71.226,158.884Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M147.245,122.708c-1.3.121-1.547.147-1.608-.068-.472-.011-.956,0-1.428.023v1.147h-.023c-.01.155-.042.63.113.63.112.084-.026.045,2.271.045.09,0,.417.056.5,0,.113-.09.076-.113.1-.259.02-.113.034-.225.045-.337a2.936,2.936,0,0,1,.023-.439C147.234,123.2,147.234,122.955,147.245,122.708Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M135.156,123.967c1.924-.723,6.024-.634,8.659-.6,0-.292.012-.584.012-.877a.2.2,0,0,1,.191-.191,8.935,8.935,0,0,1,1.934.1c.5-.078,1-.068,1.5-.112a.21.21,0,0,1,.2.2c-.023.326-.034.652-.056.979,1.039.037,5.7.284,6.173.337a.146.146,0,0,0-.045-.034c.045-.168.089-.326.135-.495a.432.432,0,0,0-.483-.539c-1.413-.492-3.513-.5-6.894-2.148-.248-.122-.674-.445-.967-.439-.27.006-.6.3-.821.428a12.251,12.251,0,0,1-4.487,1.439c-1.619.194-3.206.547-4.824.742a.4.4,0,0,0-.382.506A4.788,4.788,0,0,1,135.156,123.967Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M153.992,124.305c-.7-.011-2.161-.234-6.4-.394,0,1.137-.018.967-1.889.967-.817,0-1.579.1-1.777-.157-.176-.228-.079-.74-.079-.911-5-.076-6.2-.049-8.715.506-4.631,19.259-9.249,40.758-9.323,60.512a.568.568,0,0,0,.551.551c1.946.082,3.891.192,5.837.269a.565.565,0,0,0,.54-.708c-.164-.163,4.467-23.106,11.5-44.554Q147.3,151,149.91,161.718c6.289,25.8,4.517,24.005,5.949,24.583a4.431,4.431,0,0,0,2.215-.09c1.894-.273,3.706-.126,3.7-2.058C161.729,168.907,159.034,144.471,153.992,124.305Zm-21.3,60.579c-.012-.034,0-.056,0,0Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M144.884,47.735a2.485,2.485,0,0,0-1.136-.338,12.183,12.183,0,0,0,.135-2.361.282.282,0,0,0-.563,0c-.1.787-.191,1.563-.314,2.35a12.418,12.418,0,0,0-1.586.191c-.315.055-.225.531.067.54.45.014.9.045,1.35.1a5.1,5.1,0,0,0-.236,1.721c.022.169.257.336.393.157a4.024,4.024,0,0,0,.619-1.788,4.191,4.191,0,0,0,1.181.068C145.109,48.331,145.11,47.879,144.884,47.735Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M63.647,25.885c-.573.186-1.257.659-1.575.765-.213-.506-.394-1.024-.618-1.519-.158-.348-.629-.078-.574.248a7.928,7.928,0,0,0,.484,1.585c-.236.09-.483.184-.742.259a.262.262,0,0,0,.135.506c.27-.056.551-.112.832-.191a3.014,3.014,0,0,0,.765,1.147.244.244,0,0,0,.4-.236,4.192,4.192,0,0,0-.416-1.17,3.506,3.506,0,0,0,1.53-1.079C64.007,26.054,63.815,25.84,63.647,25.885Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M113.666,34.2a4.619,4.619,0,0,0-1.012.034c.023-.36.05-.721.1-1.08s-.473-.517-.551-.146a12.984,12.984,0,0,0-.213,1.338c-.27.045-.529.1-.776.135-.338.052-.259.638.079.6.2-.024.416-.045.641-.067a1.172,1.172,0,0,0,.247,1.068.191.191,0,0,0,.259,0c.3-.3.191-.742.191-1.147a4.415,4.415,0,0,0,1.091-.27A.235.235,0,0,0,113.666,34.2Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M97.5,43.158a6.341,6.341,0,0,0-1.124.09q-.253-.742-.54-1.485c-.125-.325-.64-.191-.528.147.159.483.3.967.449,1.45-.371.079-.731.166-1.068.225-.484.086-.282.638.2.551.326-.058.686-.1,1.046-.157a4.055,4.055,0,0,0,.608,1.675.21.21,0,0,0,.348-.09,3.273,3.273,0,0,0-.315-1.686,4.968,4.968,0,0,0,1.069-.3C97.934,43.484,97.788,43.168,97.5,43.158Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M84.878,7.251a5.32,5.32,0,0,0-1.473.023,9.845,9.845,0,0,0-.54-2.1c-.114-.3-.583-.181-.483.135a9.961,9.961,0,0,1,.4,2c-.494.012-1,0-1.5-.022-.394-.02-.382.583,0,.607.506.032,1.023.056,1.529.045a15.616,15.616,0,0,0-.011,2.081.222.222,0,0,0,.394.056,3.466,3.466,0,0,0,.281-2.159,3.442,3.442,0,0,0,1.45-.293A.207.207,0,0,0,84.878,7.251Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M147.29,87.971a2.308,2.308,0,0,1-.787.27c4.273.09,8.22,2.125,11.493,4.846-.214-5.557-.617-11.019-1.282-16.294-.793-6.291-1.641-14.026-6.05-18.139-4.948-4.615-12.478-4.212-18.87-4.3-3.374-.044-66.359-.113-73.14.079A25.1,25.1,0,0,0,49.365,56.2c-6.26,2.714-7.937,8.366-9.041,15.068a183.825,183.825,0,0,0-2.159,23.953c3.253-2.985,7.318-5.689,11.751-5.836-.861-1.608-.635-3.4-.506-5.016a2.015,2.015,0,0,1,.09-1.034c.045-.54.1-1.069.146-1.608a5.017,5.017,0,0,1-1.3-6.422c1.325-2.245,4.62-2.937,7.309-.775.586.47,1.012,1.158,1.62,1.585.3.214.708.058,1.045.011a3.183,3.183,0,0,1,3.419,1.6c.917,1.734.485,4.457-.157,6.3a2.753,2.753,0,0,1-.709,3.823c.011.394.011.776.023,1.17a11.531,11.531,0,0,1,4.093.517c8.375,2.184,13.176,8.651,14.462,16.879a28.656,28.656,0,0,1,.191,5.8.46.46,0,0,1-.473.461c-.862,7.254-5.631,11.834-14.225,9.795-.056.146-.113.281-.169.427a56.773,56.773,0,0,1,4.24,12.224c1.514,6.493,3.349,20.892,3.947,26.989,15.379,0,25.544-.265,25.651-.371,9.456.293,18.094.475,27.708.315,1.741-12.833,4.569-25.582,7.479-38.122-.034-.169-.079-.338-.113-.5-7.65-.093-15.159-3.083-16.429-10.627-.1.034-.2.077-.3.112-.362.129-.652-.258-.585-.584,1.612-7.825,3.009-13.859,9.289-19.511a14.278,14.278,0,0,1,9.367-4.015,5.387,5.387,0,0,1-.809-2.62,2.584,2.584,0,0,1,.315-4.644c.022-.259.056-.529.078-.787a2.231,2.231,0,0,1-.495-1.192,4.475,4.475,0,0,1,.315-1.789c.188-.677.076-1.749,1.192-2.35a2.02,2.02,0,0,1,1.6-.944c.011-.012.023-.034.034-.045a.484.484,0,0,1,.2-.169c.469-.755,1.046-.846,2.306-1.383a.486.486,0,0,1,.7.281c.073.321-.162-.141.911.472.371-.228.6.088.854.158a8.012,8.012,0,0,1,1.181.011.481.481,0,0,1,.472.472v.1a2.611,2.611,0,0,1,1.215,1.608,1.78,1.78,0,0,1,1.237,1.192,2.577,2.577,0,0,1,.337,2.508,1.781,1.781,0,0,1,.551,1.417,4.248,4.248,0,0,1-.348,2.047.5.5,0,0,1,.416.326.471.471,0,0,1-.158.731q.507.64,1.013,1.282c.454.579-.33,1-1.046,1.147.135.225.281.45.416.675A.539.539,0,0,1,147.29,87.971ZM54.83,59.846a9.911,9.911,0,0,0-6.41,4.262,12.5,12.5,0,0,0-1.866,6.129,5.174,5.174,0,0,1-.3,2.058.476.476,0,0,1-.821,0,3.976,3.976,0,0,1-.281-2.351c.416-5.818,3.946-10.953,9.682-10.672A.288.288,0,0,1,54.83,59.846ZM76.1,63.771a2.333,2.333,0,0,1-.314.776c-.092.134-.346.145-.383-.045a2.517,2.517,0,0,1,.045-.979c-.337-.146-.66-.3-.989-.461-.212-.1-.056-.428.157-.371.327.088.641.191.956.292.112-.506.243-1,.393-1.506.083-.28.566-.236.529.067a14.022,14.022,0,0,1-.259,1.664C76.757,63.472,76.631,63.878,76.1,63.771ZM97.979,58.62c.371.019.742.012,1.113,0-.045-.348-.116-.685-.191-1.023a.216.216,0,0,1,.416-.113A8.862,8.862,0,0,1,99.6,58.6a18.031,18.031,0,0,1,2.092-.023.138.138,0,0,1,.034.27,7.246,7.246,0,0,1-2.024.326c.022.124.033.259.045.383a3.82,3.82,0,0,1-.1,1.934c-.069.145-.261.091-.315-.045a12.892,12.892,0,0,1-.168-2.272c-.394-.011-.787-.036-1.181-.067C97.664,59.079,97.664,58.6,97.979,58.62ZM101.634,95.7c.391,12.582,1.8,29.234,2.856,38.089.4,3.385,1.034,6.747,1.372,10.143.011.112-.1.192-.2.2-2.539.254-5.095.068-7.625.282a44.931,44.931,0,0,1-6.376.045c-.1-.012-.213-.09-.2-.2.385-3.991,2.171-26.19,2.642-33.3.327-4.936.6-9.862.889-14.8-6.682-1.2-9.885-7.589-8.479-13.831.838-6.076,6.745-11.285,13.179-10.571,5.859.65,10.853,5.476,11.043,11.47A12.41,12.41,0,0,1,101.634,95.7Zm21.017-26.977a2.974,2.974,0,0,1-.787.427,7.382,7.382,0,0,1,.495,1.687c.023.247-.326.3-.439.123a7.422,7.422,0,0,1-.629-1.641,5.509,5.509,0,0,1-.877.1c-.315.011-.3-.447,0-.472a6.952,6.952,0,0,0,.719-.113c-.157-.483-.307-.977-.45-1.462-.092-.314.361-.416.473-.135.192.483.371.967.54,1.462.281-.079.561-.159.843-.236A.143.143,0,0,1,122.651,68.719Zm17.15-8.378a2.308,2.308,0,0,1-.743-.056,2.266,2.266,0,0,1-.314.865.2.2,0,0,1-.349-.044,2.276,2.276,0,0,1-.067-.945c-.27-.045-.528-.093-.8-.146-.359-.071-.2-.6.146-.551.237.032.484.056.743.09.078-.394.167-.776.224-1.1s.6-.237.563.078-.045.72-.079,1.125a3.506,3.506,0,0,1,.787.236C140.16,60.006,140.015,60.309,139.8,60.341Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M60.251,78.041c-.708-.8-1.676-.472-2.6-.416-1.125.068-1.732-.9-2.452-1.608-1.36-1.339-3.661-2.042-5.217-.585a3.588,3.588,0,0,0,.371,5.139,4.039,4.039,0,0,0,.944.551,11.949,11.949,0,0,0-.36,2.238.834.834,0,0,0-.135,1.316,7.255,7.255,0,0,0,.18,3.767,2.962,2.962,0,0,0,2.778,1.912c-.022.225-.034.461-.045.686s-.087.492.056.686a.169.169,0,0,0,.248.034c.2-.176.146-.473.146-.72a6.419,6.419,0,0,0-.034-.664c.81.034,1.653-.033,2.44-.033a.338.338,0,0,0,0-.675c-2.446,0-4.458.457-5.094-1.889a8.425,8.425,0,0,1-.09-2.767H51.4c.743.248,2.429.641,2.6-.506a.085.085,0,0,1,.011-.056c.147-.045.315-.09.473-.124-.057.844-.111,1.7-.214,2.542a.358.358,0,0,0,.349.348c.438,0,.866.1,1.3.1.281,0,.439-.441.158-.574A2.708,2.708,0,0,0,55,86.531c.079-.719.124-1.45.146-2.17a.672.672,0,0,1,.225.135.231.231,0,0,0,.113.067c.191,1.069,1.877.695,2.586.45,1.1-.38,1.026-1.376.292-1.743,0-.011,0-.011.012-.022a2.64,2.64,0,0,1,1.09,1,.358.358,0,0,0,.641-.079,9.539,9.539,0,0,0,.776-3.531A3.8,3.8,0,0,0,60.251,78.041Zm-7.332,5.994a1.223,1.223,0,0,1-.574.562.18.18,0,0,1-.2-.258C52.3,84.085,52.981,83.722,52.919,84.035Zm4.183-.18a2.816,2.816,0,0,1-.866.675c-.169.065-.239-.16-.157-.27a2.579,2.579,0,0,1,.854-.607C57.057,83.619,57.17,83.754,57.1,83.855Zm.821-.72A2.7,2.7,0,0,0,55.6,83.8c-.844-.482-.281.507-.63-1.923-.032-.225-.359-.146-.371.056q-.05.861-.1,1.721a1.808,1.808,0,0,0-.6.281c-.325-.651-1.595-.923-2.362-.8a15.1,15.1,0,0,0,.057-1.878,7.935,7.935,0,0,0,2.327.3,30.129,30.129,0,0,0,4.026-.281A14.584,14.584,0,0,1,57.923,83.135Zm2.226-2.6a9.378,9.378,0,0,1-.528,2.811,3.316,3.316,0,0,0-.787-.63c.045-.573.081-1.158.123-1.732a.331.331,0,0,0-.551-.258c-.165-.207-.283.013-3.362.112a9.493,9.493,0,0,1-3.126-.225,2.842,2.842,0,0,1-1.991-1.923c-.837-2.92,2.261-4.9,5.128-1.833a4.626,4.626,0,0,0,1.7,1.361C58.2,78.746,60.268,76.839,60.149,80.538Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M142.736,81.853a1.373,1.373,0,0,0-2.092.585,1.562,1.562,0,0,0-.686-.135c0-.416,0-.843-.034-1.259-.013-.191-.327-.259-.359-.045-.071.46-.113.922-.147,1.383a.83.83,0,0,0-.247.124,1.409,1.409,0,0,0-2.676.056,1.34,1.34,0,0,0,2.091,1.417,1.221,1.221,0,0,0,.641-.934c.056-.033.113-.056.169-.09-.021.269-.075,1.564-.079,1.665-.025.579-.164,1.193.191,1.282a3.435,3.435,0,0,0,1.406-.012c.248-.055.214-.394,0-.472a4.08,4.08,0,0,0-1.057-.056,8.712,8.712,0,0,1,.056-.945c.053-1.5.025-1.316.045-1.574.553.031.506.208.607.259a1.368,1.368,0,0,0,2.137.877A1.248,1.248,0,0,0,142.736,81.853Zm-4.959.608c-.151.128-.224.2-.269.237-.173.148-.342.041-.249-.147s.408-.467.563-.282A.175.175,0,0,1,137.777,82.461Zm3.857-.023a1.716,1.716,0,0,1-.36.439c-.126.138-.38-.024-.259-.18s.2-.249.36-.439A.159.159,0,0,1,141.634,82.438Z"
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

          <div className="z-10 relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  Blazing fast performance
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  Reliably Fast Page Loads
                </p>
                <div className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-2">
                  {performanceFeatures.map((feature) => (
                    <div key={feature.id} className="relative">
                      <dt>
                        <CheckIcon
                          className="absolute h-6 w-6 text-green-500"
                          aria-hidden="true"
                        />
                        <p className="ml-9 text-base leading-6 font-medium text-gray-500">
                          {feature.name}
                        </p>
                      </dt>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1 justify-self-center">
                <svg
                  className="h-96"
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="matrix(2,0,0,2,0,0)">
                    <path
                      d="M67.449,114.894c-.525.408-18.72,34.759-18.507,35.1.333.533,23.712,1.056,24.145.7a17.708,17.708,0,0,0,2.173-4.255c-1.421-1.58-.95-3.737,0-6.6s3.373-7.331,6.708-3.988c.524-.661,10.431-20.164,10.2-20.658S67.98,114.482,67.449,114.894Z"
                      fill="#2563eb"
                    ></path>
                    <path
                      d="M56.175,118.077a2.909,2.909,0,0,0,1.147-1.147c-.76-.706-7.878-8.236-8.707-6.655S54.382,116.93,56.175,118.077Z"
                      fill="#2563eb"
                    ></path>
                    <path
                      d="M62.6,122.309c.047-.22-.334-.82-1.519-2.089a6.505,6.505,0,0,1-.912,1.375C60.885,121.891,62.557,122.522,62.6,122.309Z"
                      fill="#2563eb"
                    ></path>
                    <path
                      d="M68.057,39.862c17.634-5.782,34.812-11.9,52.255-18.234.274.623.844,2.583,1.52,2.583s2.887-3.8,3.441-4.558a.645.645,0,0,0-.357-.942c-.759-.2-5.386-1.573-5.751-.859s.539,2.363.7,2.735c-15.073,5.478-32.251,11.237-51.936,18.135a1.787,1.787,0,0,0-2.887-.456c-6.169-3.228-12.262-6.67-18.416-9.876,0-2.363-3.8-2.014-3.389.364C32.9,35.8,22.974,43.038,12.338,49.6a1.6,1.6,0,0,0-2.7,1.694c.843,2.051,3.213,1.117,3.153-.714C22.207,45.887,34.461,36.291,43.8,29.833a1.519,1.519,0,0,0,2.423-.243l18.333,9.976a1.77,1.77,0,0,0,3.5.3Z"
                      fill="#2563eb"
                    ></path>
                    <path
                      d="M153.148,121.2c-.2,19.647,1.668,40.177,1.945,61.995a.657.657,0,0,0,.654.653.649.649,0,0,0,.653-.653c-.312-19.761-.4-42.166-1.793-62A.761.761,0,0,0,153.148,121.2Z"
                      fill="#2563eb"
                    ></path>
                    <path
                      d="M120.229,88.067c-8.008-6.381-21.972-8.585-32.388,0a55.041,55.041,0,0,0,4.034,6.77,21.022,21.022,0,0,1,23.605.288C116.3,94.115,119.226,89.747,120.229,88.067Z"
                      fill="#2563eb"
                    ></path>
                    <path
                      d="M84.49,57.564c-1.25.674-1.838,6.427.418,7.24s27.313.266,28.559.274c-.046-2.143-.076-6.443,0-8.168C111.279,56.857,85.747,56.886,84.49,57.564Z"
                      fill="#2563eb"
                    ></path>
                    <path
                      d="M154.668,33.6c-2.88-.19-10.568,14.929-14.5,29.136,4.726-.388,26.5.478,29.744.478C165.243,47.33,157.562,33.792,154.668,33.6Z"
                      fill="#2563eb"
                    ></path>
                    <path
                      d="M129.946,181.926c1.884-.288-7.7-21.463,5.4-31.149-1.193-4.323-4.035-22.557-4.232-27.587C96.168,137.663,125.22,182.649,129.946,181.926Z"
                      fill="#2563eb"
                    ></path>
                    <path
                      d="M177.908,122.765c-.212,5.037-3.236,23.028-4.459,27.4,13.1,9.657,4.159,30.852,6.04,31.15C184.206,182.057,212.818,137.238,177.908,122.765Z"
                      fill="#2563eb"
                    ></path>
                    <path
                      d="M44.292,123.509a1.193,1.193,0,0,0-1.519,0q-7.385,4.712-14.617,9.983c.243-.957.7-3.794,1.6-6.769.138-.455-.618-.571-.882-.182a59.7,59.7,0,0,0-2.051,7.9c-2.955,2.226-5.871,4.112-8.851,6.693-.4.343.152.965.57.692,8.53-5.579,16.175-12.088,25.2-17.565a18.183,18.183,0,0,1,5.547,10.8,150.072,150.072,0,0,1-20.263,20.725c-11.087,9.31-23.919,4.263-22.739-10.378.6-7.483,6.71-29.621,12.43-35.351,2.975-2.981,7.9-5.5,11.593-7.544.616-.341.1-1.219-.524-.942a49.9,49.9,0,0,0-11.062,6.693c-6.937,5.608-12.742,27.982-13.592,36.3C3.491,160.67,17.351,166.956,29.69,156.748A137.388,137.388,0,0,0,49.519,136.63c.915-1.145.9-1.794.6-3.282C49.572,130.627,47.278,125.515,44.292,123.509Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M16.8,163.168c-.659,4.474-2.3,20.151-1.694,24.608.074.54.877.38.881-.076a162.927,162.927,0,0,1,1.93-24.471C18.033,162.5,16.9,162.454,16.8,163.168Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M54.275,153.382c.458,11.457.323,24.363.472,35.708.008.616.952.532.957-.076.1-11.327.284-24.13-.274-35.707A.579.579,0,0,0,54.275,153.382Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M59.92,175.78c-1.208-.224-1.048,3.655.16,3.1C60.756,178.568,61.006,175.981,59.92,175.78Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M59.829,161.694c-.29-.995-1.833.125-1.215,1.892C58.935,164.507,60.35,163.48,59.829,161.694Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M68.665,112.85a17.806,17.806,0,0,0-4.832-4.315.471.471,0,0,0-.539.76,27.337,27.337,0,0,1,4.49,4.269A.567.567,0,0,0,68.665,112.85Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M68.338,153.231c.241,3.988,2.167,18.766,3.715,35.951.061.668,1.153.448,1.117-.175-.6-10.6-2.888-26.464-3.89-35.807C69.216,152.6,68.3,152.615,68.338,153.231Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M35.821,117.219c.336.756,6.7,3.924,7.773,4.33.593.226.7-.724.121-1a47.447,47.447,0,0,1-6.724-3.8c.274-1.815,2.714-5.554,2.523-5.872-.46-.763-9.269-1.7-9.3-2.971.35-2.105,4.372-6.994,5.7-8.608.411-.5-.125-1.219-.593-.76-1.921,1.886-6.311,6.838-6.04,9.7.169,1.785,6.974,2.978,8.9,3.206C37.759,112.212,35.547,116.6,35.821,117.219Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M51.1,109.226c.774-.861,2.2-4.975,1.77-6.078-.122-.311-.694-.843-.76-.083a17.325,17.325,0,0,1-1.8,5.751C50.217,109.036,50.51,109.882,51.1,109.226Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M47.263,109.074a29.879,29.879,0,0,1-8.562-7.886c-.368-.5-1.076.056-.76.57a25.182,25.182,0,0,0,8.843,8.456C47.405,110.577,48.028,109.534,47.263,109.074Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M52.505,100.406c-.623-.106-.758.61-.182.828a25.023,25.023,0,0,1,8.22,5.318,12.247,12.247,0,0,1-4.406,5.083c-.9.579.576,2.58,4.7-3.153.639-.888,1.526-1.9.759-2.7C59.784,103.893,55.24,100.871,52.505,100.406Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M55.043,89.709c.654.126,1.117.1,1.337-.608a18.5,18.5,0,0,0,.76-3.5c.072-.66-.626-1.063-.76-.06a20.484,20.484,0,0,1-.76,3.388,6.4,6.4,0,0,1-1.831-.509C53.255,88.185,52.91,89.3,55.043,89.709Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M53.09,81.443a3.27,3.27,0,0,1,1.345,1.519c.188.415.631.312.676-.213a2.135,2.135,0,0,0-1.671-1.99C52.9,80.638,52.667,81.2,53.09,81.443Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M49.565,88.569A3.222,3.222,0,0,0,52.3,92.436c.76.046.76-.473.448-.577-1.1-.37-2.645-1.291-2.355-3.138A.421.421,0,0,0,49.565,88.569Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M59.525,84.649c-.524.387-.368.926.175.759a2.736,2.736,0,0,1,1.679,0c.335.113.4-.4,0-.683A1.687,1.687,0,0,0,59.525,84.649Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M60.186,118.343a11.466,11.466,0,0,1-4.794,5.174.466.466,0,0,0,.441.821,10.2,10.2,0,0,0,4.969-5.319C61.012,118.47,60.446,117.805,60.186,118.343Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M46.473,122.469c-.432.4.19,1.011.638.653,2.175-1.737,3.04-4.412,5.318-5.577.624-.318.085-1.258-.532-.942C49.4,117.885,48.439,120.629,46.473,122.469Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M56.342,127.551a5.715,5.715,0,0,0,2.363-2.75c.144-.418-.111-1.518-.578-.661-.754,1.386-1.519,1.679-2.34,2.667a.464.464,0,1,0,.555.744Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M57.542,127.9c-2.037,2.871-3.328,4.212-6.412,5.029-.456.121-.478.9.061.882,3.039-.093,5.262-2.793,6.838-5.129C58.384,128.156,57.914,127.376,57.542,127.9Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M52.931,121.967c2.279-.76,5.914-2.195,6.48-4.756.153-.691-.7-1.048-.927-.395-.874,2.57-3.8,3.13-5.91,4.346A.448.448,0,0,0,52.931,121.967Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M76.711,140.573c-.676-.009-.76.6-.274.882a2.9,2.9,0,0,1,1.915,2.438c.068.759,1.267.965,1.192-.281A3.717,3.717,0,0,0,76.711,140.573Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M79.689,135.886c-.654-.137-.9.507-.334.934,1.065.81,1.292,1.163,1.42,2.2.094.76,1.626.676,1.087-1.064A3.67,3.67,0,0,0,79.689,135.886Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M77.508,138.757c.745.775,1.953.935,2.021,2.485a.594.594,0,0,0,1.163,0,2.764,2.764,0,0,0-.76-2.013C77.975,137.166,76.957,138.184,77.508,138.757Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M75.282,144c-.241.821,1.52.509,1.52,2.279,0,.486-.516,1.137.121,1.4,1.012.414,1.269-1.6.623-2.781C76.993,143.885,75.5,143.271,75.282,144Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M104.578,79.11c-.058-.912,0-2.621-.7-2.553s-.475,1.573-.433,2.606C103.494,80.356,104.657,80.356,104.578,79.11Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M123.64,82.028c-.693-.331-1.3,1.121-1.77,2.028-.77,1.477.318,1.383.486,1.14C122.712,84.679,124.481,82.428,123.64,82.028Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M84.627,83.615c-.434.471.418,1.155,1.185,2.211a.563.563,0,0,0,1.034-.357C86.754,85.089,85.287,82.9,84.627,83.615Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M123.518,54.031c-.018-.759-.053-1.466-.106-2.2a.434.434,0,0,0-.859,0,17.639,17.639,0,0,1-.136,2.332C122.3,55.007,123.553,55.453,123.518,54.031Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M84.87,54.6a17.933,17.933,0,0,0-.167-2.788c-.045-.692-.9-.365-.912-.1a27.638,27.638,0,0,0,.046,2.864C83.88,55.163,84.858,55,84.87,54.6Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M105.353,54.2a10.4,10.4,0,0,0-.076-2.279c-.057-.381-1.162-1.381-.76,2C104.663,55.146,105.323,54.624,105.353,54.2Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M121.239,56.69a39.863,39.863,0,0,0-6.237.167.464.464,0,0,0,.06.92c6.56.345,8.056-1.072,8.13,2.955.047,2.568-.471,2.923-2.545,2.986-1.71.051-3.405.119-5.106.228a.564.564,0,1,0,.084,1.124c1.086,0,6.781-.1,7.6-.463,1.409-.633,1.33-4.825.851-6.154S122.563,56.774,121.239,56.69Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M124.126,10.878c-.091,1.094-.167,2.18-.2,3.274a.57.57,0,0,0,1.109.107c.038-1.132.014-2.28,0-3.4a.456.456,0,1,0-.912.023Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M10.621,19.455c.813-.013.66-1.474.615-2-.123-1.436-.29-2.872-.486-4.308-.077-.562-1.048-.4-1,.175C9.823,14.3,9.686,19.47,10.621,19.455Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M67.092,17.419a38.567,38.567,0,0,1-.129-4.034.471.471,0,0,0-.942,0c-.106,1.519-.144,3.039-.144,4.558C65.877,19.037,67.339,18.626,67.092,17.419Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M137.589,149.736c-2.912-21.886-9.179-52.49,2.97-84.522.314-.827-.987-1.17-1.314-.372-8.361,20.428-8.282,44.115-5.728,65.718.768,6.5,1.694,13.022,3.039,19.442C136.662,150.708,137.68,150.42,137.589,149.736Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M175.606,83.289A101.843,101.843,0,0,0,171,65.526a.563.563,0,0,0-1.056.365c2.952,11.888,5.158,19.373,5.934,31.8,1.123,17.991-1.975,34.123-5.44,51.526a.717.717,0,0,0,1.406.281C176.542,126.038,179.664,107.328,175.606,83.289Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M156.187,96.592c-.759.3-5.447,5.8-5.873,6.321-.531.654.266,1.307.76.851s5.646-5.515,5.949-6.435A.6.6,0,0,0,156.187,96.592Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M151.629,98.408a50.261,50.261,0,0,0,5.242-5.919.646.646,0,0,0-1.041-.76c-1.654,1.97-3.349,3.939-4.961,5.964C150.508,98.148,151.221,98.805,151.629,98.408Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M164.165,106.028c7.517-10.1-4.157-24.077-15.72-18.029-8.714,4.558-8.644,18.59,1.246,22.321A12.576,12.576,0,0,0,164.165,106.028Zm-13.6,2.575a10.517,10.517,0,0,1-2.743-18.089c8.44-6.527,20.484,2.85,15.7,12.915A10.669,10.669,0,0,1,150.565,108.6Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M102.527,99.129c-1.154,2.333,1.07,3.532,2.59,2.09,1.01-.958,7.811-12.665,7.15-12.916C111.834,88.067,103.675,96.805,102.527,99.129Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M137,151.552c.835,3.358,5.038,17.706,6.473,18.066.631.158,5.037.107,9.876-.038-.068-6.032-.243-12.08-.372-18.112C146.151,151.468,139.473,151.483,137,151.552Zm9.755,14.883c-.447-1.615-1.78-9.247-1.558-11.077.06-.494.948-.661,1.026-.114.521,3.671.955,7.237,1.52,10.948C147.833,166.761,146.906,166.968,146.759,166.435Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M157.046,169.443c4.923-.19,9.351-.464,9.61-.691.576-.5,3.237-11.229,4.316-17.2-1.261,0-7.453-.069-14.276-.076Q156.871,160.455,157.046,169.443Zm6.207-14.328c.012-.593,1.077-.4,1.041.091-.23,3.114-.632,8.579-1.018,10.477-.135.661-1.149.6-1.064-.084A103.135,103.135,0,0,0,163.253,155.115Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M37.979,96.311a23.144,23.144,0,0,0-.456,3.122.438.438,0,0,0,.859.1A72.714,72.714,0,0,1,43.1,84.337a1.8,1.8,0,0,0-.35-2.013c-.824-.848-1.519-2.56-.524-4.9,1.079-2.538,3.487-3.038,3.8-1.52.156.761.717.465,1.238-.661a19.907,19.907,0,0,1,6.473-6.883c.5-.3.942.2.464.585a21.105,21.105,0,0,0-5.364,6.473c5.736,4.376,17,8.436,18.993,7.6.593-.25,5.008-11.929-1.329-18.7-5.265-5.623-16.453-8.924-26.675.144-11.051,9.8-13.675,30.755-13.25,31.043S35.054,96.212,37.979,96.311Z"
                      fill="#191919"
                    ></path>
                    <path
                      d="M64.881,85.1c.152-.25.3-.5.449-.759a.437.437,0,0,0-.76-.433c-2.37,3.608-6.994,9.881-10.4,12.421-1.981,1.477-4.862,2.28-6.921.494s-2.987-4.991-3.427-7.179c-.106-.532-.691-.312-.691.266,0,3.191,2.4,9.443,7.21,9.193a19.645,19.645,0,0,0-.144,5.713c.063.5.931.516.911,0a27.948,27.948,0,0,1,.365-5.85,8.658,8.658,0,0,0,3.145-1.421c5.455.813,16.259.456,16.6-.19S67.373,95.133,64.881,85.1Z"
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
                Rock solid reliability
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                We believe in Server Uptime & Reliability
              </p>
              <div className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-2">
                {reliabilityFeatures.map((feature) => (
                  <div key={feature.id} className="relative">
                    <dt>
                      <CheckIcon
                        className="absolute h-6 w-6 text-green-500"
                        aria-hidden="true"
                      />
                      <p className="ml-9 text-base leading-6 font-medium text-gray-500">
                        {feature.name}
                      </p>
                    </dt>
                  </div>
                ))}
              </div>
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
                    d="M6.254,77.728a.58.58,0,0,0,1.16,0c.107-.824-.408-42.3-1.243-42.3C5.174,35.424,6.163,76.832,6.254,77.728Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M54.438,15.212c-.23-.923-13.757-6.793-15.3-6.793-.7.4-33.835,25.174-33.219,25.79.028.028,12.288,6.545,14.663,7.428-.11,1.8,1.132,41.668,1.463,45.4-35.867-19.246-2.28,1.828.553.884C24.189,86.992,55.5,65.51,55.322,64.473,55.543,62.43,54.8,19.409,54.438,15.212ZM6.917,33.906c2.706-1.767,31.478-23.278,32.61-24.3A137.188,137.188,0,0,0,53.334,15.35C50.766,17.117,22.325,39.4,21.11,40.56A134.427,134.427,0,0,0,6.917,33.906ZM22.794,86.923c.138-3.618-.8-43.656-.994-45.368,2.678-1.712,29.491-23.361,31.948-25.57-.166,3.838.166,46.169.414,48.212C51.429,65.744,25.113,85.017,22.794,86.923Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M194.16,35.507c-1.289-7.737-1.125,45.252-1.022,46.059A136.372,136.372,0,0,0,177.9,88.027c.331-3.7,1.629-44.457,1.464-46.362,2.4-.884,12.343-5.716,14.607-7.345.77-.77-32.876-25.719-33.136-25.873a.567.567,0,0,0-.69.883c2.368,2.27,30.126,22.781,32.915,24.6a146.317,146.317,0,0,0-14.221,6.627c-1.16-1.076-29.6-23.388-32.224-25.21a108.448,108.448,0,0,0,12.729-5.329.577.577,0,0,0-.442-1.05c-1.712.477-12.839,5.19-13.364,6.241-.194,2.386-1.358,49.213-.746,49.7,2.32,2.154,29.64,22.155,32.556,23.941.8.492,14.082-5.054,16.6-6.351C194.638,82.194,194.323,37.281,194.16,35.507ZM177.206,87.862C174.942,85.984,147.218,65,145.837,64.2c.221-1.96.58-44.291.415-48.212,2.374,2.154,30.65,24.714,31.948,25.57C177.979,43.239,177.068,84.106,177.206,87.862Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M54.521,136.736c0-1.358-14.121,5.822-15.3,6.545C38.064,142.2,9.623,119.893,7,118.1a137.551,137.551,0,0,0,13.834-5.744c.876.8,31.691,24.4,32.17,23.444.356-.713-31.117-24.246-31.811-24.659-.572-.34-14.871,5.969-15.3,6.821-.193,2.384-1.324,49.119-.718,49.7.875.842,33.422,23.029,34.157,23.029,1.449-.263,16.09-5.532,15.96-6.572C55.543,182.105,54.88,140.768,54.521,136.736ZM39.334,189.974c-2.43-2.043-31.7-22.228-33.108-23.057.221-1.96.58-44.291.414-48.212,2.375,2.154,30.623,24.714,31.949,25.57-.442,3.479.082,40.619.276,44.512,1.244,7.465,1.024-42.985.939-44.4a133.667,133.667,0,0,0,14.082-7.013c-.193,3.727.111,44.456.3,46.307A127.89,127.89,0,0,0,39.334,189.974Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M194.077,117.96c-.235-.941-12.874-6.276-14.855-6.848-.5-.2-32.372,24.283-33.661,25.431-.1.1-.353-1.519-.883,47.577-.15,1.049,14.407,6.619,16.07,6.931.808,0,.707-46.61.691-46.749,2.706-1.712,29.49-23.333,31.948-25.569-.166,3.838.166,46.169.414,48.212C190.1,169.1,153.446,196.084,161.77,191c1.079-.659,33.366-22.727,33.191-23.775C195.182,165.15,194.409,122.129,194.077,117.96Zm-48.212,65.719c.193-1.851.5-42.469.3-46.307a139.311,139.311,0,0,0,14.082,7.013c-.138,1.823-.11,42,.221,45.755C158.153,188.842,148.35,184.341,145.865,183.679Zm14.911-40.4a137.123,137.123,0,0,0-14.221-6.627c2.706-1.768,31.479-23.278,32.611-24.3a130.971,130.971,0,0,0,13.807,5.744C190.432,119.837,161.963,142.121,160.776,143.281Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M122.919,65.164c0-1.383-50.7-.1-51.36-.056-.943,0-.764,33.633-.58,35.207,0,1.157,3.064.525,19.3.525,0,3.6,1.334,1.867-2.264,2.347-.1,0-5.086,7.262-3.645,7.262,1.372.095,26.95.253,26.95-1.049,0-.092-4.821-6.727-4.86-6.766a14.361,14.361,0,0,0-2.651.139c0-3.785-1.684,3.258-.828,3.258.567,0,.828-1.826.828-2.679,4.671.161.3-1.271,6.02,5.661-4.087.193-20.682.469-24.852.8,4.672-7.059,1.806-5.669,5.661-6.02a10.007,10.007,0,0,0,.663,2.679c.766.766,9.55.262,10.023.193.693-.1,1.4-1.343-9.222-.359,0-.262-.751-4.283-1.05-5.44,77.062-1.085-10.117-1.9-18.832-1.16.249-2.65-.027-31.119-.276-33.881,4.114.249,47.826.194,49.814,0-.079.929-.309,33.44.663,33.44C123.255,99.127,123.118,66.841,122.919,65.164Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M123.609,118.871c-1.69-.169-.457-.693-2.209-3.231a.328.328,0,0,0-.608.166,11.376,11.376,0,0,0,.691,2.9c-7.107-.148-3.255.848-5.937-3.037-.26-.377-1.175-.762.083,3.01-7.91-.147-3.954.743-6.544-3.01-.259-.374-1.167-.767.082,2.982-8.407,0-4.421.748-6.24-3.12a.315.315,0,0,0-.58.083,14.229,14.229,0,0,0,.055,3.092c-8.907.172-5.283.992-5.964-3.092-.077-.231-.34-.351-.608-.083-1.772,4.018,1.483,3.306-4.666,3.479.819-2.549.4-4.729-1.243.055-8.378.275-5.636.854-5.688-2.485a.315.315,0,0,0-.58-.166c-2.277,3.446,1.323,2.666-5.219,2.927,1.051-3.853.274-4.492-1.242.056-1.519.082-3.068.2-4.557.414-.359.051-.276.635.083.635,5.315,0,4.02-.526,3.7,1.767-.061.438.918,2.169,1.768-1.8,5.106-.106,3.9-.546,3.534,1.8-.079.5.962,2.12,1.8-1.905,7.618-.209,5.956-.774,5.55,1.905-.067.443.887,2.195,1.85-2.071,5.1-.14,3.894-.636,3.894,1.491a.584.584,0,0,0,1.132.166c.656-2.3-1.265-1.878,6.6-1.878.159,3.648,1.381,2.046,1.381,1.767,0-2.225-1.505-1.767,5.633-1.767,1.013,3.474,1.881,1.892,1.8,1.464-.373-1.845-1.654-1.511,4.694-1.409,1.034,3.4,1.846,1.85,1.767,1.409-.391-2.183-1.422-1.14,4.142-1.243.8,2.781,2.362,2.608,1.353-.083C124.437,120.031,124.3,118.981,123.609,118.871Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M123.416,112.824c-1.357-.163-50.451-.082-51.057.524A99.518,99.518,0,0,0,67,126.382c-.423,1.555,61.68.358,62.433.331C131.97,126.622,123.93,112.971,123.416,112.824Zm-50.5,1.021c4.142.249,48.1.359,50.145.166a117.037,117.037,0,0,0,5.964,11.349c-4.915-.166-58.208.331-60.5.525A110.206,110.206,0,0,0,72.912,113.845Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M79.7,88.524c-.688,0-.688,1.381,0,1.381S80.407,88.524,79.7,88.524Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M105.964,92.8c-.694,0-.695,1.381,0,1.381S106.645,92.8,105.964,92.8Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M102.954,71.459c-.688,0-.688,1.381,0,1.381S103.643,71.459,102.954,71.459Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M79.7,92.8c-.688,0-.688,1.381,0,1.381S80.407,92.8,79.7,92.8Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M102.954,84.272c-.688,0-.688,1.38,0,1.38S103.643,84.272,102.954,84.272Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M93.732,84.272c-.688,0-.689,1.38,0,1.38S94.435,84.272,93.732,84.272Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M84.537,75.712c-.688,0-.689,1.38,0,1.38S85.24,75.712,84.537,75.712Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M93.732,88.524c-.688,0-.689,1.381,0,1.381S94.435,88.524,93.732,88.524Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M107.759,75.712c-.688,0-.688,1.38,0,1.38S108.462,75.712,107.759,75.712Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M107.759,71.459c-.688,0-.688,1.381,0,1.381S108.462,71.459,107.759,71.459Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M107.759,88.524c-.688,0-.688,1.381,0,1.381S108.462,88.524,107.759,88.524Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M101.132,77.065c.7,0,.681-1.381,0-1.381S100.429,77.065,101.132,77.065Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M115.159,81.345c.688,0,.689-1.381,0-1.381S114.456,81.345,115.159,81.345Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M107.759,84.272c-.688,0-.688,1.38,0,1.38S108.462,84.272,107.759,84.272Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M98.564,92.8c-.688,0-.688,1.381,0,1.381S99.267,92.8,98.564,92.8Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M98.564,88.524c-.688,0-.688,1.381,0,1.381S99.267,88.524,98.564,88.524Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M93.732,75.712c-.688,0-.689,1.38,0,1.38S94.435,75.712,93.732,75.712Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M79.7,71.459c-.688,0-.688,1.381,0,1.381S80.407,71.459,79.7,71.459Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M84.537,92.8c-.688,0-.689,1.381,0,1.381S85.24,92.8,84.537,92.8Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M84.537,79.992c-.688,0-.689,1.38,0,1.38S85.24,79.992,84.537,79.992Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M84.537,88.524c-.688,0-.689,1.381,0,1.381S85.24,88.524,84.537,88.524Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M93.732,71.459c-.688,0-.689,1.381,0,1.381S94.435,71.459,93.732,71.459Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M101.132,88.524c-.694,0-.7,1.381,0,1.381S101.813,88.524,101.132,88.524Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M79.7,75.712c-.688,0-.688,1.38,0,1.38S80.407,75.712,79.7,75.712Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M79.7,84.272c-.688,0-.688,1.38,0,1.38S80.407,84.272,79.7,84.272Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M98.564,75.712c-.688,0-.688,1.38,0,1.38S99.267,75.712,98.564,75.712Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M101.132,92.8c-.694,0-.7,1.381,0,1.381S101.813,92.8,101.132,92.8Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M98.564,79.992c-.688,0-.688,1.38,0,1.38S99.267,79.992,98.564,79.992Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M79.7,79.992c-.688,0-.688,1.38,0,1.38S80.407,79.992,79.7,79.992Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M88.9,71.459c-.688,0-.688,1.381,0,1.381S89.6,71.459,88.9,71.459Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M115.159,88.524c-.694,0-.7,1.381,0,1.381S115.854,88.524,115.159,88.524Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M116.982,84.272c-.688,0-.689,1.38,0,1.38S117.685,84.272,116.982,84.272Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M91.937,81.345c.688,0,.688-1.381,0-1.381S91.234,81.345,91.937,81.345Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M112.591,79.992c-.688,0-.688,1.38,0,1.38S113.3,79.992,112.591,79.992Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M112.591,75.712c-.688,0-.688,1.38,0,1.38S113.3,75.712,112.591,75.712Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M116.982,71.459c-.688,0-.689,1.381,0,1.381S117.685,71.459,116.982,71.459Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M105.964,81.345c.688,0,.689-1.381,0-1.381S105.261,81.345,105.964,81.345Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M101.132,81.345c.7,0,.681-1.381,0-1.381S100.429,81.345,101.132,81.345Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M75.176,68.864V97.2h44.76V68.864Zm38.907,1.96a.276.276,0,1,1,.552,0c0,2.821.095,2.927-.276,2.927S114.083,73.657,114.083,70.824Zm1.132,4.336c1.407.058,1.3,2.457-.056,2.457C113.746,77.617,113.747,75.1,115.215,75.16Zm0,4.28c1.407.058,1.3,2.457-.056,2.457C113.746,81.9,113.747,79.378,115.215,79.44Zm-1.132,4.2a.276.276,0,1,1,.552,0c0,2.821.095,2.927-.276,2.927S114.083,86.47,114.083,83.637Zm-2.127-12.813a.277.277,0,1,1,.553,0c0,2.821.094,2.927-.277,2.927S111.956,73.657,111.956,70.824Zm-6.737,0a.276.276,0,1,1,.552,0c0,2.821.095,2.927-.276,2.927S105.219,73.657,105.219,70.824Zm0,4.253a.276.276,0,1,1,.552,0c0,2.821.095,2.927-.276,2.927S105.219,77.91,105.219,75.077Zm.773,4.363c1.413.06,1.292,2.457-.055,2.457C104.5,81.9,104.571,79.379,105.992,79.44Zm-.773,6.848c0-2.821-.095-2.927.276-2.927s.276.094.276,2.927A.282.282,0,0,1,105.219,86.288Zm.552,1.6c0,2.821.095,2.927-.276,2.927s-.276-.094-.276-2.927A.276.276,0,0,1,105.771,87.889Zm-5.716-17.065a.276.276,0,1,1,.552,0c0,2.821.095,2.927-.276,2.927S100.055,73.657,100.055,70.824Zm1.1,4.336c1.412.06,1.292,2.457-.056,2.457C99.672,77.617,99.739,75.1,101.16,75.16Zm0,4.28c1.412.06,1.292,2.457-.056,2.457C99.672,81.9,99.739,79.379,101.16,79.44Zm-1.1,4.2a.276.276,0,1,1,.552,0c0,2.821.095,2.927-.276,2.927S100.055,86.47,100.055,83.637ZM97.929,70.824a.276.276,0,1,1,.552,0c0,2.821.095,2.927-.276,2.927S97.929,73.657,97.929,70.824Zm-6.765,0a.276.276,0,1,1,.552,0c0,2.821.1,2.927-.276,2.927S91.164,73.657,91.164,70.824Zm0,4.253a.276.276,0,1,1,.552,0c0,2.821.1,2.927-.276,2.927S91.164,77.91,91.164,75.077Zm.8,4.363c1.407.058,1.3,2.457-.056,2.457C90.486,81.9,90.528,79.38,91.965,79.44Zm-.8,6.848c0-2.821-.095-2.927.276-2.927s.276.094.276,2.927A.283.283,0,0,1,91.164,86.288Zm.552,1.6c0,2.821.1,2.927-.276,2.927s-.276-.094-.276-2.927C91.164,87.5,91.772,87.554,91.716,87.889ZM86,70.824a.276.276,0,1,1,.552,0c0,2.821.095,2.927-.276,2.927S86,73.657,86,70.824Zm1.132,4.336c1.408.058,1.3,2.457-.055,2.457C85.654,77.617,85.7,75.1,87.132,75.16Zm0,4.28c1.408.058,1.3,2.457-.055,2.457C85.654,81.9,85.7,79.38,87.132,79.44ZM86,83.637a.276.276,0,1,1,.552,0c0,2.821.095,2.927-.276,2.927S86,86.47,86,83.637ZM83.9,70.824a.276.276,0,1,1,.552,0c0,2.821.1,2.927-.276,2.927S83.9,73.657,83.9,70.824ZM77.689,94.792a.277.277,0,1,1-.553,0c0-2.821-.094-2.927.276-2.927S77.689,91.959,77.689,94.792Zm0-4.28a.277.277,0,1,1-.553,0c0-2.821-.094-2.927.276-2.927S77.689,87.679,77.689,90.512Zm0-4.224a.277.277,0,1,1-.553,0c0-2.821-.094-2.927.276-2.927S77.689,83.455,77.689,86.288Zm0-4.28a.277.277,0,1,1-.553,0c0-2.821-.094-2.927.276-2.927S77.689,79.174,77.689,82.008Zm0-4.28a.277.277,0,1,1-.553,0c0-2.822-.094-2.927.276-2.927S77.689,74.894,77.689,77.728Zm0-4.253a.277.277,0,1,1-.553,0c0-2.821-.094-2.927.276-2.927S77.689,70.642,77.689,73.475Zm1.96,21.235c-1.407-.059-1.3-2.458.055-2.458C81.118,92.252,81.117,94.771,79.649,94.71Zm0-4.28c-1.407-.059-1.3-2.458.055-2.458C81.118,87.972,81.117,90.491,79.649,90.43Zm0-4.253c-1.407-.059-1.3-2.457.055-2.457C81.118,83.72,81.117,86.238,79.649,86.177Zm0-4.28c-1.407-.059-1.3-2.457.055-2.457C81.118,79.44,81.117,81.958,79.649,81.9Zm0-4.28c-1.407-.059-1.3-2.457.055-2.457C81.118,75.16,81.117,77.678,79.649,77.617Zm0-4.225c-1.39-.03-1.313-2.457.055-2.457C81.1,70.935,81.127,73.424,79.649,73.392ZM82.521,94.82a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S82.521,91.987,82.521,94.82Zm0-4.28a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S82.521,87.707,82.521,90.54Zm0-4.252a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S82.521,83.455,82.521,86.288Zm0-4.28a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S82.521,79.174,82.521,82.008Zm0-4.28a.276.276,0,1,1-.552,0c0-2.822-.095-2.927.276-2.927S82.521,74.894,82.521,77.728Zm0-4.253a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S82.521,70.642,82.521,73.475Zm1.96,21.235c-1.407-.059-1.3-2.458.056-2.458C85.95,92.252,85.949,94.771,84.481,94.71Zm0-4.28c-1.407-.059-1.3-2.458.056-2.458C85.95,87.972,85.949,90.491,84.481,90.43ZM83.9,86.288c0-2.821-.095-2.927.276-2.927s.276.094.276,2.927A.276.276,0,0,1,83.9,86.288Zm.579-4.391c-1.407-.059-1.3-2.457.056-2.457C85.95,79.44,85.949,81.958,84.481,81.9Zm0-4.252c-1.39-.03-1.313-2.458.056-2.458C85.936,75.187,85.96,77.677,84.481,77.645ZM87.105,94.71c-1.412,0-1.424-2.52.055-2.458C88.567,92.311,88.456,94.71,87.105,94.71Zm0-4.28c-1.412,0-1.424-2.52.055-2.458C88.567,88.031,88.456,90.43,87.105,90.43Zm2.54,4.362a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S89.645,91.959,89.645,94.792Zm0-4.28a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S89.645,87.679,89.645,90.512Zm-.773-4.335c-1.408-.059-1.3-2.457.055-2.457C90.35,83.72,90.308,86.237,88.872,86.177Zm.773-6.82c0,2.821.095,2.927-.276,2.927s-.276-.094-.276-2.927A.276.276,0,1,1,89.645,79.357Zm-.552-1.629c0-2.822-.095-2.927.276-2.927s.276.093.276,2.927A.276.276,0,0,1,89.093,77.728Zm-.221-4.363c-1.408-.059-1.3-2.458.055-2.458C90.35,70.907,90.308,73.425,88.872,73.365ZM91.937,94.71c-1.412,0-1.424-2.52.055-2.458C93.4,92.311,93.288,94.71,91.937,94.71Zm2.54.082a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S94.477,91.959,94.477,94.792Zm-.8-4.362c-1.408-.059-1.3-2.458.055-2.458C95.146,87.972,95.144,90.491,93.677,90.43Zm0-4.253c-1.408-.059-1.3-2.457.055-2.457C95.146,83.72,95.144,86.238,93.677,86.177Zm.248-4.169c0-2.821-.095-2.927.276-2.927s.276.093.276,2.927A.276.276,0,1,1,93.925,82.008Zm-.248-4.363c-1.39-.03-1.314-2.458.055-2.458C95.131,75.187,95.155,77.677,93.677,77.645Zm0-4.253c-1.39-.03-1.314-2.457.055-2.457C95.131,70.935,95.155,73.424,93.677,73.392ZM96.548,94.82a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S96.548,91.987,96.548,94.82Zm0-4.28a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S96.548,87.707,96.548,90.54Zm0-4.252a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S96.548,83.455,96.548,86.288Zm0-4.28a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S96.548,79.174,96.548,82.008Zm0-4.28a.276.276,0,1,1-.552,0c0-2.822-.095-2.927.276-2.927S96.548,74.894,96.548,77.728Zm0-4.253a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S96.548,70.642,96.548,73.475ZM98.509,94.71c-1.408-.059-1.3-2.458.055-2.458C99.978,92.252,99.976,94.771,98.509,94.71Zm0-4.28c-1.408-.059-1.3-2.458.055-2.458C99.978,87.972,99.976,90.491,98.509,90.43Zm-.58-4.142c0-2.681-.1-2.9.276-2.9s.276.094.276,2.927C98.423,86.608,98.024,86.669,97.929,86.288Zm.58-4.363c-1.39-.03-1.313-2.458.055-2.458C99.963,79.467,99.987,81.957,98.509,81.925Zm0-4.28c-1.39-.03-1.313-2.458.055-2.458C99.963,75.187,99.987,77.677,98.509,77.645Zm2.623,17.065c-1.411,0-1.424-2.52.055-2.458C102.6,92.311,102.483,94.71,101.132,94.71Zm0-4.28c-1.411,0-1.424-2.52.055-2.458C102.6,88.031,102.483,90.43,101.132,90.43Zm2.54,4.362a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S103.672,91.959,103.672,94.792Zm0-4.28a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S103.672,87.679,103.672,90.512Zm-.773-4.335c-1.407-.059-1.3-2.457.055-2.457C104.368,83.72,104.367,86.238,102.9,86.177Zm.773-6.82c0,2.821.095,2.927-.276,2.927s-.276-.094-.276-2.927A.276.276,0,1,1,103.672,79.357Zm-.552-1.629c0-2.822-.095-2.927.276-2.927s.276.093.276,2.927A.276.276,0,0,1,103.12,77.728Zm-.221-4.363c-1.407-.059-1.3-2.458.055-2.458C104.368,70.907,104.367,73.426,102.9,73.365Zm3.065,21.345c-1.411,0-1.423-2.52.056-2.458C107.427,92.311,107.316,94.71,105.964,94.71Zm2.541.082a.277.277,0,1,1-.553,0c0-2.821-.094-2.927.277-2.927S108.505,91.959,108.505,94.792Zm-.773-4.362c-1.408-.059-1.3-2.458.055-2.458C109.21,87.972,109.168,90.489,107.732,90.43Zm0-4.253c-1.408-.059-1.3-2.457.055-2.457C109.21,83.72,109.168,86.237,107.732,86.177Zm.248-4.169c0-2.821-.095-2.927.276-2.927s.276.093.276,2.927C108.532,82.4,107.923,82.348,107.98,82.008Zm-.248-4.391c-1.408-.059-1.3-2.457.055-2.457C109.21,75.16,109.168,77.677,107.732,77.617Zm0-4.252c-1.408-.059-1.3-2.458.055-2.458C109.21,70.907,109.168,73.425,107.732,73.365ZM110.6,94.792a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S110.6,91.959,110.6,94.792Zm0-4.28a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S110.6,87.679,110.6,90.512Zm0-4.252a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S110.6,83.427,110.6,86.26Zm0-4.28a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S110.6,79.147,110.6,81.98Zm0-4.252a.276.276,0,1,1-.552,0c0-2.822-.095-2.927.276-2.927S110.6,74.894,110.6,77.728Zm0-4.253a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S110.6,70.642,110.6,73.475Zm1.961,21.235c-1.408-.059-1.3-2.458.055-2.458C114.042,92.252,114,94.77,112.564,94.71Zm0-4.28c-1.408-.059-1.3-2.458.055-2.458C114.042,87.972,114,90.489,112.564,90.43Zm-.58-4.142c0-2.821-.095-2.927.276-2.927s.276.094.276,2.927A.276.276,0,0,1,111.984,86.288Zm.58-4.391c-1.408-.059-1.3-2.457.055-2.457C114.042,79.44,114,81.957,112.564,81.9Zm0-4.28c-1.408-.059-1.3-2.457.055-2.457C114.042,75.16,114,77.677,112.564,77.617Zm2.6,17.093c-1.411,0-1.423-2.52.056-2.458C116.613,92.31,116.526,94.71,115.159,94.71Zm0-4.28c-1.411,0-1.423-2.52.056-2.458C116.613,88.03,116.526,90.43,115.159,90.43Zm2.568,4.362a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S117.727,91.959,117.727,94.792Zm0-4.28a.276.276,0,1,1-.552,0c0-2.821-.095-2.927.276-2.927S117.727,87.679,117.727,90.512Zm-.8-4.335c-1.408-.059-1.3-2.457.055-2.457C118.4,83.72,118.394,86.238,116.927,86.177Zm.8-6.82c0,2.821.095,2.927-.276,2.927s-.276-.094-.276-2.927A.276.276,0,1,1,117.727,79.357Zm-.552-1.629c0-2.822-.095-2.927.276-2.927s.276.093.276,2.927A.276.276,0,0,1,117.175,77.728Zm-.248-4.363c-1.408-.059-1.3-2.458.055-2.458C118.4,70.907,118.394,73.426,116.927,73.365Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M115.159,77.065c.688,0,.689-1.381,0-1.381S114.456,77.065,115.159,77.065Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M88.9,84.272c-.688,0-.688,1.38,0,1.38S89.6,84.272,88.9,84.272Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M115.159,92.8c-.694,0-.7,1.381,0,1.381S115.854,92.8,115.159,92.8Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M112.591,92.8c-.688,0-.688,1.381,0,1.381S113.3,92.8,112.591,92.8Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M87.105,81.345c.688,0,.688-1.381,0-1.381S86.4,81.345,87.105,81.345Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M87.105,88.524c-.694,0-.7,1.381,0,1.381S87.785,88.524,87.105,88.524Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M87.105,92.8c-.694,0-.7,1.381,0,1.381S87.785,92.8,87.105,92.8Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M91.937,92.8c-.694,0-.695,1.381,0,1.381S92.617,92.8,91.937,92.8Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M112.591,88.524c-.688,0-.688,1.381,0,1.381S113.3,88.524,112.591,88.524Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M87.105,77.065c.688,0,.688-1.381,0-1.381S86.4,77.065,87.105,77.065Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M157.987,76.43c-2.666,1.491-25.542,17.562-27.337,18.942a1.537,1.537,0,0,0-2.485.3c-3.4-2.173-2.751-.68-2.623-.58,19.523,15.3,11.767,33.035-1.491,39.349a1.6,1.6,0,0,0-2.817,1.159c-9.943,3.51-30.762,5.025-45.064-.082a1.392,1.392,0,0,0-1.657-1.547c-6.709,1.032-21.106-16.241-9.637-31.534a1.619,1.619,0,0,0,1.961-2.264A20.636,20.636,0,0,1,69.322,98c.282-.211.537-1.855-3.12,1.685a1.773,1.773,0,0,0-1.133-.028c-.464-.5-23.442-22.361-23.968-21.7-.613.613,22.687,22.368,23,22.643a1.234,1.234,0,0,0,.138,1.215C56,112.271,58.252,128.729,73.3,135.77c0,.055-13.564,9.436-16.1,11.9-3.912,3.805,15.224-9.4,17.12-10.8,13.26,4.736,36.265,3.819,47.467-.111a1.416,1.416,0,0,0,1.684.221c1.325,1.1,17.376,12.851,19.3,13.862,6.041,3.171-18.523-14.977-18.473-15.077,13.447-5.883,21.3-25.174,6.489-38.051C137.54,92.2,164.753,72.647,157.987,76.43Z"
                    fill="#191919"
                  ></path>
                  <path
                    d="M32.044,35.507c-9.987,7.8-7.985,3.586-7.621,19.191C34.3,46.632,32.309,50.851,32.044,35.507ZM26.715,50.391c-.6.057-.472-1.244-.083-1.05a.761.761,0,0,1,.166.332c.58-.442,2.678-2.126,3.175-2.458-.969-.646,1.017-.629.856.055C30.8,47.353,27.461,49.949,26.715,50.391Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M42.565,27.251c-10.536,8.241-8.428,4.013-8.063,19.191C44.932,37.924,42.83,42.164,42.565,27.251ZM38.423,41.113c-1.435.978-1.546-.413-1.105-.138.366.227,3.268-1.972,3.01-2.127-.174-.087-.242-.63.746-.22C41.708,38.89,40.682,39.572,38.423,41.113Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M52.174,19.768c-9.354,7.3-7.488,3.335-7.124,18.114C54.161,30.441,52.307,34.42,52.174,19.768ZM47.756,34.016c-.454.454-1.193-.928-.5-.58.442.221,2.458-1.574,2.927-1.877-.358-.239-.584-.686.773-.415C51.921,31.337,49.521,32.49,47.756,34.016Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M32.32,51c-9.374,9.874-7.982.716-7.51,20.793l7.814-5.937ZM27.488,68.173c-.3.234-.657-.254-.856-.579-.084-.138.193-.359.3-.194.438.548,4.453-2.229,4-2.678-.135-.135-.163-.991.911.083C32.235,65.317,30.885,65.542,27.488,68.173Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M42.869,42.714c-10.435,8.453-8.36,3.881-7.9,21.345l8.2-6.158ZM41.792,57.266c-4.466,3.286-4.538,3.627-4.888,2.927,0-.1,4.409-2.914,3.977-3.2-.209-.093-.246-.661.856-.248C42.032,56.8,41.958,57.211,41.792,57.266Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M52.312,35.038C43.271,42.41,45.056,37.869,45.519,56,54.25,48.865,52.478,53.4,52.312,35.038ZM47.37,52.821c-.353.208-1.254-.128,3.2-3.065C49.109,48.78,54.62,48.531,47.37,52.821Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M25.058,82.063c9.322-6.7,7.76-3.594,7.76-13.2C23.344,76.624,24.877,72.905,25.058,82.063Zm1.85-3.148c-.859-.15,1.31-.4,4.2-2.955-.652-.217-.679-.677.635-.414C32.631,75.9,28.185,79.137,26.908,78.915Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M43.2,60.911c-9.813,7.93-8.215,4.861-8.008,13.834C45,67.7,43.374,70.947,43.2,60.911Zm-.994,7.815c-12.05,7.271-.74-.088-1.077-.138-.359-.054-.22-.613.138-.553C41.712,68.11,42.943,68.281,42.206,68.726Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M52.478,53.373C44.157,60.1,45.5,56.862,45.74,67.152,54.221,61.035,52.478,64.228,52.478,53.373Zm-5.44,11.432c-1.77.547,3.818-2.91,3.673-2.983-.917-.458,1.389-.575.994.083A33.32,33.32,0,0,1,47.038,64.805Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M147.549,19.768c-.132,14.68-1.985,10.708,7.125,18.114C155.038,23.1,156.9,27.07,147.549,19.768Zm5.164,14.441c-8.609-4.3-1.4-4.409-3.7-3.258a16.589,16.589,0,0,0,3.783,2.706C153.252,33.543,153.162,34.434,152.713,34.209Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M157.159,27.251c-.3,14.911-2.4,10.669,8.035,19.191C165.559,31.256,167.662,35.494,157.159,27.251Zm6.323,15.3c0,.948-1.119-.464-5.081-3.314-.9-.539,2.391-1.516.663-.248,1.353.938,3.921,2.954,3.921,2.927C163,41.814,163.482,41.246,163.482,42.549Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M167.679,35.507c-.3,15.362-2.291,11.117,7.594,19.191C175.637,39.092,177.625,43.3,167.679,35.507Zm5.854,14.58c-.582,1.456-.467-.122-4.915-2.485-.347-.185.144-.586.387-.829.193-.193.469.083.3.3-.377.567-.694-.4,3.7,2.844C173.111,49.576,173.674,49.805,173.533,50.087Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M147.411,35.038C147.246,53.412,145.469,48.862,154.2,56,154.668,37.869,156.453,42.41,147.411,35.038Zm5,17.12c0,1.072-5.767-3.286-3.755-3.286.377.094-.644-.059,3.258,2.817C151.912,51.384,152.523,51.25,152.409,52.158Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M156.855,42.714c-.331,18.192-2.395,13.435,7.9,21.815C165.22,46.265,167.284,51.266,156.855,42.714Zm6.1,17.535c0,1.162-5.209-3.106-5.053-3.314.341-.567.692-.419.553,0,4.377,2.859,4.031,2.932,4.031,2.678C162.508,59.376,163.148,58.917,162.957,60.249Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M167.376,51.3c-.332,18.192-2.3,13.512,7.51,21.51C175.317,54.655,177.288,59.336,167.376,51.3Zm5.6,18c-2.327-1.94-5.225-3.862-4.473-4.363.138-.069,4.39,3.812,4.39,3.286.021-.192.552-.731.552.856A.285.285,0,0,1,172.981,69.306Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M147.273,53.373c-.1,10.982-1.85,7.649,6.683,13.779C154.2,56.861,155.526,60.1,147.273,53.373Zm4.612,11.073c-3.9-3.12-3.888-3.06-3.756-3.259.125-.436-.082-.458,3.839,2.679a.235.235,0,0,1,.359,0C152.63,64.114,152,64.556,151.885,64.446Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M156.524,60.911c-.174,10.054-1.768,6.809,8.007,13.834C164.776,65.671,166.362,68.943,156.524,60.911Zm5.964,10.963c-7.022-4.594-4.2-4.1-4.225-3.977-.22,1,4.517,3.324,4.584,3.424C162.957,71.6,162.706,72.016,162.488,71.874Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M167.044,69.5c-.174,8.8-1.69,5.87,7.621,12.564C174.839,74.2,176.358,77.089,167.044,69.5Zm6.1,9.913c-.177.883-5.541-3.043-5.247-4,.077-.25.412-.3.442-.055.154,1.272,3.7,3.12,4.418,3.59C173.016,78.3,173.371,78.938,173.147,79.412Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M7.938,122.571c-.132,14.68-1.985,10.708,7.124,18.114C15.427,125.907,17.291,129.873,7.938,122.571Zm5.55,14.138c-.2.5-.417.213-4.169-2.789-.567-.567,1.752-1.093.552-.193,3.679,2.735,3.177,2.509,3.286,2.292C13.25,135.8,13.777,135.842,13.488,136.709Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M17.52,130.054c-.3,14.946-2.4,10.7,8.035,19.219C25.92,134.093,28.019,138.329,17.52,130.054Zm7.041,15.6c-.1,0-4.335-3.569-4.335-3.672,0-.514.313-.885.414-.58C20.964,142.373,26.924,146.331,24.561,145.655Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M28.068,138.283c-.3,15.362-2.291,11.116,7.594,19.191C36.026,141.867,38.014,146.072,28.068,138.283Zm2.485,12.122a.184.184,0,0,1,.359,0c.129.556,4.044,2.963,4.059,3.065C35.255,155.3,30.416,150.8,30.553,150.405Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M7.8,137.841c-.166,18.364-1.935,13.837,6.793,20.931C15.057,140.646,16.841,145.178,7.8,137.841Zm5.329,18.114c-.055,0-4.712-2.952-3.562-3.755.167-.117-.611-.344,3.48,3.065C13.529,154.782,13.6,155.955,13.129,155.955Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M17.244,145.517c-.332,18.192-2.395,13.428,7.9,21.842l.387-15.1Zm6.572,18.971c-.1,0-4.354-3.11-4.225-4.087.033-.1.172-.187.331-.028C20.628,161.936,26.038,164.488,23.816,164.488Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M27.764,154.1c-.331,18.192-2.295,13.513,7.511,21.511C35.706,157.458,37.677,162.139,27.764,154.1ZM29.973,169.1c-.434-.289.442-1.423.442-.718,0,.552,6.04,4.207,4.115,4.031C34.5,172.385,31.464,170.093,29.973,169.1Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M7.634,156.176c-.1,10.982-1.85,7.649,6.683,13.779C14.56,159.664,15.887,162.9,7.634,156.176ZM9.871,164.1c.131-.087-.583-.25,3.7,2.9a.272.272,0,0,1,.387.083C14.741,169.237,9.136,164.533,9.871,164.1Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M16.885,163.714c-.209,10.079-1.826,6.787,7.98,13.834C25.106,168.6,26.694,171.641,16.885,163.714ZM24.147,174.9c-2.325-1.408-5.686-4.032-4.667-4.032.378,0,.918,1.184,4.7,3.424C24.686,174.034,24.571,175.109,24.147,174.9Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M27.405,172.3c-.173,8.8-1.69,5.871,7.622,12.564C35.2,177.005,36.719,179.892,27.405,172.3Zm2.486,7.317c-.39-.564.233-1.422.3-.911.126.913,3.341,2.789,4.059,3.286.338-.676.6.763.166.691A34.537,34.537,0,0,1,29.891,179.619Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M171.932,138.946c-9.944,7.788-7.959,3.577-7.594,19.191C174.213,150.07,172.23,154.289,171.932,138.946ZM170.5,151.04c-4.538,4.074-5.068,2.859-4.667,2.458.083-.138.332-.083.3.082,0-.11,4.211-2.761,4.2-3.672C170.32,149.23,171.537,150.1,170.5,151.04Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M182.48,130.717c-10.536,8.241-8.428,4.012-8.063,19.191C184.847,141.39,182.745,145.63,182.48,130.717Zm-6.406,15.408c-1.784.594,4.39-3.242,4.39-4.17a.276.276,0,1,1,.552,0C181.154,142.949,177.178,145.876,176.074,146.125Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M192.062,123.206c-9.354,7.3-7.489,3.335-7.125,18.114C194.047,133.914,192.194,137.888,192.062,123.206Zm-5.744,14.469c-.027-.165.193-.221.3-.138.165.166,3.866-2.954,3.866-2.927-.392-.47.607-.594.607-.083C191.15,135.052,186.6,139.387,186.318,137.675Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M172.235,154.74c-9.874,8.032-7.913,3.352-7.483,21.511C174.56,168.252,172.6,172.933,172.235,154.74Zm-1.215,14.028c-6.345,6.475-5.322,2.42-4.694,3.258,1.381-1.187,2.844-2.237,4.115-3.535C169.8,167.214,171.454,168.19,171.02,168.768Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M182.784,146.18l-8.257,6.738.387,15.1C185.205,159.643,183.148,164.41,182.784,146.18Zm-.967,14.028c-6.167,5.71-5.36,3.288-5.081,3.368.178.04,4.551-3.324,4.363-3.7-.071-.142-.024-.331.249-.331C182.053,159.746,182,160.208,181.817,160.208Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M192.2,138.476c-9.041,7.372-7.257,2.832-6.793,20.958C194.138,152.3,192.365,156.84,192.2,138.476Zm-.718,14.055c-.8,1.15-5.765,4.488-4.639,3.065C187.992,154.143,192.572,151.223,191.482,152.531Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M172.594,172.937c-9.316,7.592-7.795,4.71-7.621,12.564C174.285,178.807,172.768,181.735,172.594,172.937Zm-1.1,6.572c-.884.58-4.308,3.2-4.529,3.065-1.074-.672.8-.577,4-3.341C170.565,178.031,172.072,179.218,171.49,179.509Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M183.115,164.349c-9.813,7.93-8.222,4.862-7.98,13.835C184.941,171.136,183.323,174.384,183.115,164.349ZM177.4,175.008c-2.011.86,3.58-3.273,3.866-3.534-.278-.278.055-.729.552-.277C182.579,171.654,178.225,174.655,177.4,175.008Z"
                    fill="#2563eb"
                  ></path>
                  <path
                    d="M192.393,156.811c-8.321,6.73-6.981,3.49-6.738,13.779C194.136,164.473,192.393,167.666,192.393,156.811Zm-.8,7.9c-4,2.92-4.722,3.7-4.722,2.651,0-.1-.75.618,4.115-2.871C190.069,163.915,192.32,163.98,191.592,164.708Z"
                    fill="#2563eb"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section with brand panel */}
      <div className="relative">
        <div className="absolute inset-0 flex flex-col" aria-hidden="true">
          <div className="flex-1 bg-gray-50" />
          <div className="flex-1" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">
                    Are you hosting your website somewhere else?
                  </span>
                  <span className="block text-xl text-blue-900">
                    We can transfer it within{" "}
                    <span className="border-b-2">24 hours</span>
                  </span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-blue-50">
                  We can transfer your website from any other host without any
                  downtime and hassle. Just fill out our website transfer form
                  and enjoy the perks of our Simple Web Hosting.
                </p>
                <Link href="/transfers">
                  <a className="mt-8 bg-blue-100 border border-transparent rounded-md shadow py-3 px-6 inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-500">
                    Transfer my website
                  </a>
                </Link>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <Image
                layout="fill"
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={"/img/dashboard.jpg"}
                alt="Dashboard screenshot"
              />
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <FAQSDark faqs={faqs} />
      <SimpleCTA
        normalText="Ready to get your hosted with us?"
        strongText="Get started today."
        normalButton={{
          label: "Learn more",
          href: "#more",
        }}
        strongButton={{
          label: "View plans",
          href: "#pricing",
        }}
      />
    </main>
  );
}
