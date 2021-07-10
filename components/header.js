import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
    ClockIcon,
    CloudIcon,
    CodeIcon,
    CollectionIcon,
    CursorClickIcon,
    DatabaseIcon,
    GlobeIcon,
    MailIcon,
    MenuIcon,
    PresentationChartBarIcon,
    SearchIcon,
    ServerIcon,
    TemplateIcon,
    XIcon,
    SpeakerphoneIcon,
    LockClosedIcon,
    BriefcaseIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import blesshostLogo from "../public/logo.svg";
import Link from "next/link";

const hosting = [
    {
        name: "Web Hosting",
        description: "Suitable hosting for small and medium size businesses.",
        href: "/web-hosting",
        icon: GlobeIcon,
    },
    {
        name: "Simple Hosting",
        description: "Hosting optimized for improved perfomance.",
        href: "/simple-hosting",
        icon: CollectionIcon,
    },
    {
        name: "Virtual Servers",
        description:
            "Get scalable dedicated resources with easy upgrade options.",
        href: "/vps-hosting",
        icon: DatabaseIcon,
    },
    {
        name: "Dedicated Servers",
        description: "Suitable for large organizations or E-commerce websites.",
        href: "/dedicated-hosting",
        icon: ServerIcon,
    },
    {
        name: "Managed Hosting",
        description: "Sit back and relax while we manage your hosting servers.",
        href: "/managed-hosting",
        icon: CloudIcon,
    },
    {
        name: "Google Workspace",
        description: "Host business emails ending with yourcompanyname.com",
        href: "/google-workspace",
        icon: MailIcon,
    },
];

const websites = [
    {
        name: "Website Design",
        description: "We create digital experiences that excite and inspire",
        href: "/website-design",
        icon: TemplateIcon,
    },
    {
        name: "Speed Optimization",
        description: "Avoid losing potential customers due to lazy load time",
        href: "/website-optimization",
        icon: ClockIcon,
    },
    {
        name: "Website Maintenance",
        description: "Annual maintenance packages to keep your website updated",
        href: "/website-maintenance",
        icon: CodeIcon,
    },
    {
        name: "Website Security",
        description: "SSL Certificates, Routine Backups and more.",
        href: "/website-security",
        icon: LockClosedIcon,
    },
];

const marketing = [
    {
        name: "SEO",
        description:
            "Search Engine Optimization to expand your digital presence",
        href: "/seo",
        icon: PresentationChartBarIcon,
    },
    {
        name: "Social Media",
        description: "Social media management by social media experts",
        href: "/social-media",
        icon: CursorClickIcon,
    },
    {
        name: "Email Marketing",
        description: "Turn more first-time shoppers into lifelong customers",
        href: "/email-marketing",
        icon: SpeakerphoneIcon,
    },
    {
        name: "Google Ads",
        description: "Generate more leads and sales through paid ads",
        href: "/google-marketing",
        icon: SearchIcon,
    },
];

const support = [
    {
        name: "Blog",
        description: "Learn about tips, product updates and company culture.",
        href: "/blog",
    },
    {
        name: "Contact Us",
        description: "Get a personalized solution for your business",
        href: "/contact",
    },
    {
        name: "Affiliates",
        description: "BlessHost offers the most rewarding affiliate programs",
        href: "/affiliates",
    },
    {
        name: "Status",
        description: "Monitor status of our hosting servers in real time",
        href: "/status",
    },
    {
        name: "Dedicated Support",
        description:
            "Get quick response time, technical help and phone support.",
        href: "/dedicated-support",
    },
];

const mobileMenu = [
    {
        name: "Web Hosting",
        description: "Suitable hosting for small and medium size businesses.",
        href: "/web-hosting",
        icon: GlobeIcon,
    },
    {
        name: "Website Design",
        description: "We create digital experiences that excite and inspire",
        href: "/website-design",
        icon: TemplateIcon,
    },
    {
        name: "Website Maintenance",
        description: "Annual maintenance packages to keep your website updated",
        href: "/website-maintenance",
        icon: CodeIcon,
    },
    {
        name: "SEO",
        description:
            "Search Engine Optimization to expand your digital presence",
        href: "/seo",
        icon: PresentationChartBarIcon,
    },
    {
        name: "Portfolio",
        description:
            "Search Engine Optimization to expand your digital presence",
        href: "/portfolio",
        icon: BriefcaseIcon,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Header() {
    return (
        <header className="sticky top-0 inset-y-0 z-50 filter shadow-md ">
            <Popover className="z-10 relative bg-white">
                {({ open }) => (
                    <>
                        <div className="flex justify-between items-center px-4 py-6 sm:px-6 lg:justify-start lg:space-x-10">
                            <div className="flex justify-start items-center h-16 lg:w-0 lg:flex-1">
                                <Link href="/">
                                    <a>
                                        <span className="sr-only">
                                            BlessHost
                                        </span>
                                        <Image
                                            src={blesshostLogo}
                                            layout="fixed"
                                            height={80}
                                            width={280}
                                            className="h-16 w-auto"
                                        ></Image>
                                    </a>
                                </Link>
                            </div>
                            <div className="-mr-2 -my-2 lg:hidden">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </Popover.Button>
                            </div>
                            <Popover.Group
                                as="nav"
                                className="hidden lg:flex space-x-6"
                            >
                                <Popover className="relative">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open
                                                        ? "text-gray-900"
                                                        : "text-gray-500",
                                                    "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                )}
                                            >
                                                <span>Hosting</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open
                                                            ? "text-gray-600"
                                                            : "text-gray-400",
                                                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel
                                                    static
                                                    className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                                >
                                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                                            {hosting.map(
                                                                (item) => (
                                                                    <Link
                                                                        key={
                                                                            item.name
                                                                        }
                                                                        href={
                                                                            item.href
                                                                        }
                                                                    >
                                                                        <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white sm:h-12 sm:w-12">
                                                                                <item.icon
                                                                                    className="h-6 w-6"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </div>
                                                                            <div className="ml-4">
                                                                                <p className="text-base font-medium text-gray-900">
                                                                                    {
                                                                                        item.name
                                                                                    }
                                                                                </p>
                                                                                <p className="mt-1 text-sm text-gray-500">
                                                                                    {
                                                                                        item.description
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        </a>
                                                                    </Link>
                                                                )
                                                            )}
                                                        </div>
                                                        <div className="p-5 bg-gray-50 sm:p-8">
                                                            <Link href="/transfers">
                                                                <a className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                                                                    <div className="flex items-center">
                                                                        <div className="text-base font-medium text-gray-900">
                                                                            Transfers
                                                                        </div>
                                                                        <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-blue-100 text-blue-800">
                                                                            Free
                                                                        </span>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-gray-500">
                                                                        Let us
                                                                        move
                                                                        your
                                                                        website
                                                                        and
                                                                        emails
                                                                        to us
                                                                        within
                                                                        24
                                                                        hours.
                                                                    </p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>

                                <Popover className="relative">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open
                                                        ? "text-gray-900"
                                                        : "text-gray-500",
                                                    "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                )}
                                            >
                                                <span>Websites</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open
                                                            ? "text-gray-600"
                                                            : "text-gray-400",
                                                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel
                                                    static
                                                    className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                                >
                                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                                            {websites.map(
                                                                (item) => (
                                                                    <Link
                                                                        key={
                                                                            item.name
                                                                        }
                                                                        href={
                                                                            item.href
                                                                        }
                                                                    >
                                                                        <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white sm:h-12 sm:w-12">
                                                                                <item.icon
                                                                                    className="h-6 w-6"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </div>
                                                                            <div className="ml-4">
                                                                                <p className="text-base font-medium text-gray-900">
                                                                                    {
                                                                                        item.name
                                                                                    }
                                                                                </p>
                                                                                <p className="mt-1 text-sm text-gray-500">
                                                                                    {
                                                                                        item.description
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        </a>
                                                                    </Link>
                                                                )
                                                            )}
                                                        </div>
                                                        <div className="p-5 bg-gray-50 sm:p-8">
                                                            <Link href="/portfolio">
                                                                <a className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                                                                    <div className="flex items-center">
                                                                        <div className="text-base font-medium text-gray-900">
                                                                            Portfolio
                                                                        </div>
                                                                        <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-blue-100 text-blue-800">
                                                                            Free
                                                                        </span>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-gray-500">
                                                                        See our
                                                                        extensive
                                                                        portfolio
                                                                        for the
                                                                        work we
                                                                        have
                                                                        done!
                                                                    </p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>

                                <Popover className="relative">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open
                                                        ? "text-gray-900"
                                                        : "text-gray-500",
                                                    "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                )}
                                            >
                                                <span>Marketing</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open
                                                            ? "text-gray-600"
                                                            : "text-gray-400",
                                                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel
                                                    static
                                                    className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                                >
                                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                                            {marketing.map(
                                                                (item) => (
                                                                    <Link
                                                                        key={
                                                                            item.name
                                                                        }
                                                                        href={
                                                                            item.href
                                                                        }
                                                                    >
                                                                        <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white sm:h-12 sm:w-12">
                                                                                <item.icon
                                                                                    className="h-6 w-6"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </div>
                                                                            <div className="ml-4">
                                                                                <p className="text-base font-medium text-gray-900">
                                                                                    {
                                                                                        item.name
                                                                                    }
                                                                                </p>
                                                                                <p className="mt-1 text-sm text-gray-500">
                                                                                    {
                                                                                        item.description
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        </a>
                                                                    </Link>
                                                                )
                                                            )}
                                                        </div>
                                                        <div className="p-5 bg-gray-50 sm:p-8">
                                                            <Link href="/seo-report">
                                                                <a className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                                                                    <div className="flex items-center">
                                                                        <div className="text-base font-medium text-gray-900">
                                                                            SEO
                                                                            Report
                                                                        </div>
                                                                        <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-blue-100 text-blue-800">
                                                                            Free
                                                                        </span>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-gray-500">
                                                                        We will
                                                                        generate
                                                                        an SEO
                                                                        report
                                                                        for your
                                                                        website
                                                                    </p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>

                                <Popover className="relative">
                                    {({ open }) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open
                                                        ? "text-gray-900"
                                                        : "text-gray-500",
                                                    "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                )}
                                            >
                                                <span>Support</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open
                                                            ? "text-gray-600"
                                                            : "text-gray-400",
                                                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel
                                                    static
                                                    className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"
                                                >
                                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                            {support.map(
                                                                (item) => (
                                                                    <Link
                                                                        key={
                                                                            item.name
                                                                        }
                                                                        href={
                                                                            item.href
                                                                        }
                                                                    >
                                                                        <a className="-m-3 p-3 block rounded-md hover:bg-gray-50">
                                                                            <p className="text-base font-medium text-gray-900">
                                                                                {
                                                                                    item.name
                                                                                }
                                                                            </p>
                                                                            <p className="mt-1 text-sm text-gray-500">
                                                                                {
                                                                                    item.description
                                                                                }
                                                                            </p>
                                                                        </a>
                                                                    </Link>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            </Popover.Group>
                            <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
                                <a
                                    href="#"
                                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                                >
                                    Sign in
                                </a>
                                <a
                                    href="#"
                                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                                >
                                    Sign up
                                </a>
                            </div>
                        </div>

                        <Transition
                            show={open}
                            as={Fragment}
                            enter="duration-200 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                static
                                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
                            >
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                    <div className="pt-5 pb-6 px-5">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <Image
                                                    height={50}
                                                    width={240}
                                                    src={blesshostLogo}
                                                ></Image>
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                                    <span className="sr-only">
                                                        Close menu
                                                    </span>
                                                    <XIcon
                                                        className="h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <nav className="grid grid-cols-1 gap-7">
                                                {mobileMenu.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                    >
                                                        <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                                                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white">
                                                                <item.icon
                                                                    className="h-6 w-6"
                                                                    aria-hidden="true"
                                                                />
                                                            </div>
                                                            <div className="ml-4 text-base font-medium text-gray-900">
                                                                {item.name}
                                                            </div>
                                                        </a>
                                                    </Link>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="py-6 px-5">
                                        <div className="grid grid-cols-2 gap-4">
                                            <Link href="/vps-hosting">
                                                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                    Virtual Servers
                                                </a>
                                            </Link>

                                            <Link href="/dedicated-hosting">
                                                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                    Dedicated Servers
                                                </a>
                                            </Link>

                                            <Link href="/about">
                                                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                    About Us
                                                </a>
                                            </Link>

                                            <Link href="/contact">
                                                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                    Contact Us
                                                </a>
                                            </Link>

                                            <Link href="/affiliates">
                                                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                    Affiliates
                                                </a>
                                            </Link>

                                            <Link href="/careers">
                                                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                    Careers
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="mt-6">
                                            <a
                                                href="#"
                                                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                                            >
                                                Sign up
                                            </a>
                                            <p className="mt-6 text-center text-base font-medium text-gray-500">
                                                Existing customer?{" "}
                                                <a
                                                    href="#"
                                                    className="text-blue-600 hover:text-blue-500"
                                                >
                                                    Sign in
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </header>
    );
}
