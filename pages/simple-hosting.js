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
        title: "Starter",
        featured: false,
        description: "All your essential business finances, taken care of.",
        prices: [
            {
                unit_amount: 9.49,
                currency: "USD",
                interval: "month",
            },
            {
                unit_amount: 71.4,
                currency: "USD",
                interval: "year",
            },
            {
                unit_amount: 200,
                currency: "AED",
                interval: "month",
            },
            {
                unit_amount: 1200,
                currency: "AED",
                interval: "year",
            },
        ],
        mainFeatures: [
            { id: 1, value: "Basic invoicing" },
            { id: 2, value: "Easy to use accounting" },
            { id: 3, value: "Mutli-accounts" },
        ],
    },
    {
        title: "Scale",
        featured: true,
        description: "The best financial services for your thriving business.",
        prices: [
            {
                unit_amount: 12.95,
                currency: "USD",
                interval: "month",
            },
            {
                unit_amount: 119.4,
                currency: "USD",
                interval: "year",
            },
            {
                unit_amount: 200,
                currency: "AED",
                interval: "month",
            },
            {
                unit_amount: 1200,
                currency: "AED",
                interval: "year",
            },
        ],
        mainFeatures: [
            { id: 1, value: "Advanced invoicing" },
            { id: 2, value: "Easy to use accounting" },
            { id: 3, value: "Mutli-accounts" },
            { id: 4, value: "Tax planning toolkit" },
            { id: 5, value: "VAT & VATMOSS filing" },
            { id: 6, value: "Free bank transfers" },
        ],
    },
    {
        title: "Growth",
        featured: false,
        description:
            "Convenient features to take your business to the next level.",
        prices: [
            {
                unit_amount: 10.95,
                currency: "USD",
                interval: "month",
            },
            {
                unit_amount: 95.4,
                currency: "USD",
                interval: "year",
            },
            {
                unit_amount: 200,
                currency: "AED",
                interval: "month",
            },
            {
                unit_amount: 1200,
                currency: "AED",
                interval: "year",
            },
        ],
        mainFeatures: [
            { id: 1, value: "Basic invoicing" },
            { id: 2, value: "Easy to use accounting" },
            { id: 3, value: "Mutli-accounts" },
            { id: 4, value: "Tax planning toolkit" },
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
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function simpleHostingPage() {
    const [billingInterval, setBillingInterval] = useState("year");
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
                                    Take control of your
                                </span>
                                <span className="block text-blue-200">
                                    customer support
                                </span>
                            </h1>
                            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-blue-200 sm:max-w-3xl">
                                Anim aute id magna aliqua ad ad non deserunt
                                sunt. Qui irure qui lorem cupidatat commodo.
                                Elit sunt amet fugiat veniam occaecat fugiat
                                aliqua.
                            </p>
                            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                    <a
                                        href="#"
                                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 sm:px-8"
                                    >
                                        Get started
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                                    >
                                        Live demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing section */}
            <div>
                <div className="relative bg-blue-600">
                    {/* Overlapping background */}
                    <div
                        aria-hidden="true"
                        className="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block"
                    />

                    <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                            <span className="block lg:inline">
                                Simple pricing,
                            </span>
                            <span className="block lg:inline">
                                no commitment.
                            </span>
                        </h1>
                        <p className="mt-4 text-xl text-blue-100">
                            Everything you need, nothing you don't. Pick a plan
                            that best suits your business.
                        </p>
                    </div>

                    <h2 className="sr-only">Plans</h2>

                    {/* Toggle */}
                    <div className="relative mt-12 flex justify-center sm:mt-16">
                        <div className="bg-blue-700 p-0.5 rounded-lg flex">
                            <button
                                onClick={() => setBillingInterval("month")}
                                type="button"
                                className={`${
                                    billingInterval === "month"
                                        ? "relative bg-white  border-blue-700 shadow-sm text-blue-700 whitespace-nowrap hover:bg-blue-50"
                                        : "ml-0.5 relative border border-transparent text-blue-200  hover:bg-blue-800"
                                }
                whitespace-nowrap py-2 px-6 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white focus:z-10`}
                            >
                                Monthly billing
                            </button>
                            <button
                                onClick={() => setBillingInterval("year")}
                                type="button"
                                className={`${
                                    billingInterval === "year"
                                        ? "relative bg-white  border-blue-700 shadow-sm text-blue-700 whitespace-nowrap hover:bg-blue-50"
                                        : "ml-0.5 relative border border-transparent text-blue-200  hover:bg-blue-800"
                                }
                whitespace-nowrap py-2 px-6 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white focus:z-10`}
                            >
                                Yearly billing
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
                            {plans.map((plan, id) => {
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
                                                    plan.featured
                                                        ? "text-blue-600"
                                                        : "text-white",
                                                    "text-sm font-semibold uppercase tracking-wide"
                                                )}
                                            >
                                                {plan.title}
                                            </h3>
                                            <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                                                <div className="mt-3 flex items-center">
                                                    <p
                                                        className={classNames(
                                                            plan.featured
                                                                ? "text-blue-600"
                                                                : "text-white",
                                                            "text-4xl font-extrabold tracking-tight"
                                                        )}
                                                    >
                                                        {priceString(
                                                            id,
                                                            null,
                                                            true,
                                                            plans,
                                                            currency,
                                                            billingInterval
                                                        )}
                                                    </p>
                                                    <div className="ml-4">
                                                        <p
                                                            className={classNames(
                                                                plan.featured
                                                                    ? "text-gray-700"
                                                                    : "text-white",
                                                                "text-sm"
                                                            )}
                                                        >
                                                            USD / mo
                                                        </p>
                                                        <p
                                                            className={classNames(
                                                                plan.featured
                                                                    ? "text-gray-500"
                                                                    : "text-blue-200",
                                                                "text-sm"
                                                            )}
                                                        >
                                                            Billed{" "}
                                                            {billingInterval +
                                                                "ly"}{" "}
                                                            (
                                                            {priceString(
                                                                id,
                                                                billingInterval,
                                                                null,
                                                                plans,
                                                                currency
                                                            )}
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
                                            {plan.mainFeatures.map(
                                                (mainFeature) => (
                                                    <li
                                                        key={mainFeature.id}
                                                        className="py-3 flex items-center"
                                                    >
                                                        <CheckIcon
                                                            className={classNames(
                                                                plan.featured
                                                                    ? "text-blue-500"
                                                                    : "text-blue-200",
                                                                "w-5 h-5 flex-shrink-0"
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                        <span
                                                            className={classNames(
                                                                plan.featured
                                                                    ? "text-gray-600"
                                                                    : "text-white",
                                                                "ml-4 text-sm font-medium"
                                                            )}
                                                        >
                                                            {mainFeature.value}
                                                        </span>
                                                    </li>
                                                )
                                            )}
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
                            <div
                                key={plan.title}
                                className="border-t border-gray-200"
                            >
                                <div
                                    className={classNames(
                                        plan.featured
                                            ? "border-blue-600"
                                            : "border-transparent",
                                        "-mt-px pt-6 border-t-2 sm:w-1/2"
                                    )}
                                >
                                    <h3
                                        className={classNames(
                                            plan.featured
                                                ? "text-blue-600"
                                                : "text-gray-900",
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
                                                plan.featured
                                                    ? "shadow-md"
                                                    : "shadow",
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
                                                        {typeof feature.tiers[
                                                            planIndex
                                                        ].value === "string" ? (
                                                            <span
                                                                className={classNames(
                                                                    feature
                                                                        .tiers[
                                                                        planIndex
                                                                    ].featured
                                                                        ? "text-blue-600"
                                                                        : "text-gray-900",
                                                                    "text-sm font-medium"
                                                                )}
                                                            >
                                                                {
                                                                    feature
                                                                        .tiers[
                                                                        planIndex
                                                                    ].value
                                                                }
                                                            </span>
                                                        ) : (
                                                            <>
                                                                {feature.tiers[
                                                                    planIndex
                                                                ].value ===
                                                                true ? (
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
                                                                    {feature
                                                                        .tiers[
                                                                        planIndex
                                                                    ].value ===
                                                                    true
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
                                                plan.featured
                                                    ? "shadow-md"
                                                    : "shadow",
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
                                                        {perk.tiers[planIndex]
                                                            .value === true ? (
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
                                                            {perk.tiers[
                                                                planIndex
                                                            ].value === true
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
                                        index === plans.length - 1
                                            ? ""
                                            : "pr-4",
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
                                                plan.featured
                                                    ? "text-blue-600"
                                                    : "text-gray-900",
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
                                            <span className="sr-only">
                                                Feature
                                            </span>
                                        </th>
                                        {plans.map((plan) => (
                                            <th key={plan.title} scope="col">
                                                <span className="sr-only">
                                                    {plan.title} plan
                                                </span>
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
                                                        index ===
                                                            feature.tiers
                                                                .length -
                                                                1
                                                            ? "pl-4"
                                                            : "px-4",
                                                        "relative w-1/4 py-0 text-center"
                                                    )}
                                                >
                                                    <span className="relative w-full h-full py-3">
                                                        {typeof tier.value ===
                                                        "string" ? (
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
                                                                {tier.value ===
                                                                true ? (
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
                                                                    {tier.value ===
                                                                    true
                                                                        ? "Yes"
                                                                        : "No"}
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
                                <caption className="sr-only">
                                    Perk comparison
                                </caption>
                                <thead>
                                    <tr className="text-left">
                                        <th scope="col">
                                            <span className="sr-only">
                                                Perk
                                            </span>
                                        </th>
                                        {plans.map((plan) => (
                                            <th key={plan.title} scope="col">
                                                <span className="sr-only">
                                                    {plan.title} plan
                                                </span>
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
                                                        index ===
                                                            perk.tiers.length -
                                                                1
                                                            ? "pl-4"
                                                            : "px-4",
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
                                                            {tier.value === true
                                                                ? "Yes"
                                                                : "No"}
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

            <AlternatingFeature />
            <Testimonials />
            <FAQSDark faqs={faqs} />
            <SimpleCTA />
        </main>
    );
}
