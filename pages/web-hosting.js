import {
    CalendarIcon,
    CheckIcon,
    PlusIcon,
    UsersIcon,
    ViewBoardsIcon,
    ViewListIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import WHMCSLink from "../components/whmcs-link";

const features = [
    {
        name: "Bullet-proof protection",
        description:
            "Our servers are protected against DDoS attacks. Websites hosted with us are monitored and backed up daily in a remote region.",
        icon: ViewListIcon,
    },
    {
        name: "Unlimited data",
        description:
            "You can install any number of applications, create unlimited email accounts and store unlimited data on your 360 Web Hosting account.",
        icon: ViewBoardsIcon,
    },
    {
        name: "360 Coverage",
        description:
            "Whether you want to host a WordPress website or a customized web application, our 360 Web Hosting supports one-click installation of over 200 applications.",
        icon: CalendarIcon,
    },
    {
        name: "Expert Support",
        description:
            "Our team of experts based in the United Arab Emirates are there to help you 24/7/365. No more talking to the robots and struggling to contact actual human support.",
        icon: UsersIcon,
    },
];
const checklist = [
    "Unlimited storage",
    "Unlimited visitors",
    "Unlimited emails",
    "Free website transfer",
    "Free domain name",
    "One-click app install",
    "24/7 support",
    "Cancel any time",
];
const logos = [
    {
        name: "Workcation",
        url: "https://tailwindui.com/img/logos/workcation-logo-blue-900.svg",
    },
    {
        name: "Tuple",
        url: "https://tailwindui.com/img/logos/tuple-logo-blue-900.svg",
    },
    {
        name: "Level",
        url: "https://tailwindui.com/img/logos/level-logo-blue-900.svg",
    },
];
const faqs = [
    {
        id: 1,
        question: "What is web hosting and how does it help my website?",
        answer: 'To create a website, a domain and web hosting is necessary. Domain is the name of the website, e.g. our domain name is "blesshost.com". Once you have selected a domain name, web hosting is where you store the content of the website',
    },
    {
        id: 2,
        question: "Can I install popular applications like WordPress myself?",
        answer: "Yes, we have partnered with Softaculous which allows our customers to install over 200+ applications like WordPress, Laravel and Magento  using a single click.",
    },
    {
        id: 3,
        question:
            "What happens when I want to transfer my hosting somewhere else?",
        answer: "As long as your account is active, you can transfer your website from our 360 Web Hosting to any other host.",
    },
    {
        id: 4,
        question:
            "My website is currently hosted on another host, how can I transfer it here?",
        answer: "BlessHost takes care of website transfers, just create a ticket with your previous host login info and your website will be transferred within 24 hours.",
    },
    {
        id: 5,
        question: "How do I reach BlessHost support team when I need help?",
        answer: "Our team is available 24/7/365 to help you via live chat, email, our ticket system, phone and WhatsApp. Our team is always ready to help you out.",
    },
    {
        id: 6,
        question: "How do I pay for my own 360 Web Hosting account?",
        answer: "You can pay via any VISA / Mastercard card, PayPal or Bitcoin (and other popular cryptocurrencies such as ETH).",
    },
];
import AlternatingFeature from "../components/features-alternating";
import Testimonials from "../components/testimonials";

export default function WebHosting() {
    return (
        <div className="bg-white">
            <div className="relative">
                <div class="absolute inset-0">
                    <img
                        class="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
                        alt="People working on laptops"
                    />
                    <div class="absolute inset-0 bg-blue-700 mix-blend-multiply"></div>
                </div>
                <div className="relative">
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-base font-semibold text-blue-300 uppercase tracking-wide">
                                UAE & European Hosting
                            </h1>
                            <p className="mt-1 text-4xl font-extrabold text-gray-200 sm:text-5xl sm:tracking-tight lg:text-6xl">
                                360 Website Hosting
                            </p>
                            <p className="max-w-xl mx-auto mt-5 text-xl text-gray-300">
                                For a flat price, get unlimited website hosting
                                hosted in either the United Arab Emirates or the
                                EU
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Split brand panel */}
            <div className="relative bg-white">
                <div className="absolute inset-0" aria-hidden="true">
                    <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-blue-600 to-blue-700" />
                </div>
                <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:px-8">
                    <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
                        <div className="max-w-lg mx-auto lg:mx-0">
                            <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
                                Super-charged Hosting
                            </h2>
                            <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                                Everything included and optimized to get your
                                website run faster, smoother and secure.
                            </p>
                            <dl className="mt-12 space-y-10">
                                {features.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className="relative"
                                    >
                                        <dt>
                                            <div className="absolute h-12 w-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-md flex items-center justify-center">
                                                <feature.icon
                                                    className="h-6 w-6 text-white"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                                                {feature.name}
                                            </p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">
                                            {feature.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-8">
                        <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
                            <div>
                                <h2 className="sr-only">Price</h2>
                                <span className="flex flex-col text-center">
                                    <span className="text-5xl font-extrabold text-white tracking-tight">
                                        $20
                                    </span>
                                    <span className="mt-2 text-base font-medium text-blue-100">
                                        Monthly
                                    </span>
                                </span>
                            </div>
                            <ul className="rounded overflow-hidden grid gap-px sm:grid-cols-2">
                                {checklist.map((item) => (
                                    <li
                                        key={item}
                                        className="bg-blue-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white"
                                    >
                                        <CheckIcon
                                            className="h-6 w-6 text-blue-200"
                                            aria-hidden="true"
                                        />
                                        <span className="ml-3">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <WHMCSLink
                                pid={91}
                                currency={2}
                                label="Get started today"
                                className="w-full bg-white border border-transparent rounded-md py-4 px-8 flex items-center justify-center text-lg leading-6 font-medium text-blue-700 hover:bg-blue-50 md:px-10"
                            />
                            <a
                                href="/simple-hosting"
                                className="block text-center text-base font-medium text-blue-100 hover:text-white"
                            >
                                Are you looking for simple hosting?
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo cloud */}
            <div className="bg-blue-300 bg-opacity-50">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <h2 className="max-w-md mx-auto text-3xl font-extrabold text-blue-800 text-center lg:max-w-xl lg:text-left">
                            Companies in the UAE that are powered by our 360 Web
                            Hosting
                        </h2>
                        <div className="mt-8 flow-root lg:mt-0 self-center">
                            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                                {logos.map((logo) => (
                                    <div
                                        key={logo.name}
                                        className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4"
                                    >
                                        <img
                                            className="h-12"
                                            src={logo.url}
                                            alt={logo.name}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AlternatingFeature></AlternatingFeature>

            {/* Feature section with brand panel */}
            <div className="relative">
                <div
                    className="absolute inset-0 flex flex-col"
                    aria-hidden="true"
                >
                    <div className="flex-1 bg-gray-50" />
                    <div className="flex-1" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                        <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                            <div className="lg:self-center">
                                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                    <span className="block">
                                        Are you hosting your website somewhere
                                        else?
                                    </span>
                                    <span className="block text-xl text-blue-900">
                                        We can transfer it within{" "}
                                        <span className="border-b-2">
                                            24 hours
                                        </span>
                                    </span>
                                </h2>
                                <p className="mt-4 text-lg leading-6 text-blue-50">
                                    We can transfer your website from any other
                                    host without any downtime and hassle. Just
                                    fill out our website transfer form and enjoy
                                    the perks of our 360 Web Hosting.
                                </p>
                                <Link href="/transfers">
                                    <a className="mt-8 bg-blue-100 border border-transparent rounded-md shadow py-3 px-6 inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-500">
                                        Transfer my website
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                            <img
                                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                                src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                                alt="App screenshot"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Testimonials></Testimonials>

            {/* FAQs */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">
                    Frequently asked questions
                </h2>
                <div className="mt-12">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
                        {faqs.map((item) => (
                            <div key={item.id}>
                                <dt className="text-lg leading-6 font-medium text-gray-900">
                                    {item.question}
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    {item.answer}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            {/* CTA section */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600">
                <div className="max-w-2xl mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Supercharge your website</span>
                        <span className="block text-blue-900">
                            Get your website live today!
                        </span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-blue-100">
                        With instant provisioning, your 360 Web Hosting account
                        will be delivered right away to your email. If you are
                        still unsure, let our team of experts help you.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <WHMCSLink
                            label="Order now"
                            pid="91"
                            className="mt-8 w-full bg-blue-50 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-blue-700 hover:bg-blue-100 sm:w-auto"
                        />
                        <a
                            href="#"
                            className="mt-8 w-full bg-blue-600 border border-blue-600 rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-gray-200 hover:bg-blue-700 sm:w-auto"
                        >
                            Chat with us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
