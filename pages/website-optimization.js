import {
    AnnotationIcon,
    GlobeAltIcon,
    LightningBoltIcon,
    MailIcon,
    ScaleIcon,
    CheckIcon,
} from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/solid";
import GradientFeatures from "../components/features-gradient";
import Testimonials from "../components/testimonials";
import CTASimple from "../components/cta-simple";

const includedFeatures = [
    "Private forum access",
    "Member resources",
    "Entry to annual conference",
    "Official member t-shirt",
];

const features = [
    "Vitae in pulvinar odio id utobortis in inter.",
    "Sed sed id viverra viverra augue eget massa.",
    "Urna, gravida amet, a, integer venenatis.",
    "Lobortis sed pharetra amet vitae eleifend.",
    "Ullamcorper blandit a consequat donec elit aoreet.",
    "Dolor quo assumenda.",
    "Esse rerum distinctio maiores maiores.",
    "Eos enim officiis ratione.",
    "Tempore molestiae aliquid excepturi.",
    "Perspiciatis eveniet inventore eum et aliquam.",
];

const transferFeatures = [
    {
        id: 1,
        name: "Competitive exchange rates",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: GlobeAltIcon,
    },
    {
        id: 2,
        name: "No hidden fees",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: ScaleIcon,
    },
    {
        id: 3,
        name: "Transfers are instant",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: LightningBoltIcon,
    },
];

const communicationFeatures = [
    {
        id: 1,
        name: "Mobile notifications",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: AnnotationIcon,
    },
    {
        id: 2,
        name: "Reminder emails",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: MailIcon,
    },
];

const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
];

export default function Example() {
    return (
        <div className="bg-gray-50">
            <div className="relative pt-6 pb-16 sm:pb-24">
                <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block">Data to enrich your</span>
                            <span className="block text-blue-600">
                                online business
                            </span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Anim aute id magna aliqua ad ad non deserunt sunt.
                            Qui irure qui lorem cupidatat commodo. Elit sunt
                            amet fugiat veniam occaecat fugiat aliqua.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div
                    className="absolute inset-0 flex flex-col"
                    aria-hidden="true"
                >
                    <div className="flex-1" />
                    <div className="flex-1 w-full bg-gray-800" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <img
                        className="relative rounded-lg shadow-lg"
                        src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
                        alt="App screenshot"
                    />
                </div>
            </div>
            <div className="bg-gray-800">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <h2 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
                        Trusted by over 26,000 forward-thinking companies
                    </h2>
                    <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
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
            </div>

            <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
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

                    <div className="relative">
                        <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            A better way to send money
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Possimus magnam voluptatum cupiditate
                            veritatis in, accusamus quisquam.
                        </p>
                    </div>

                    <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="relative">
                            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                                Transfer funds world-wide
                            </h3>
                            <p className="mt-3 text-lg text-gray-500">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Pariatur minima sequi
                                recusandae, porro maiores officia assumenda
                                aliquam laborum ab aliquid veritatis impedit
                                odit adipisci optio iste blanditiis facere.
                                Totam, velit.
                            </p>

                            <dl className="mt-10 space-y-10">
                                {transferFeatures.map((item) => (
                                    <div key={item.id} className="relative">
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                                <item.icon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                                                {item.name}
                                            </p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">
                                            {item.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <div
                            className="mt-10 -mx-4 relative lg:mt-0"
                            aria-hidden="true"
                        >
                            <svg
                                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                                width={784}
                                height={404}
                                fill="none"
                                viewBox="0 0 784 404"
                            >
                                <defs>
                                    <pattern
                                        id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
                                    width={784}
                                    height={404}
                                    fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                                />
                            </svg>
                            <img
                                className="relative mx-auto"
                                width={490}
                                src="https://tailwindui.com/img/features/feature-example-1.png"
                                alt=""
                            />
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
                                    Always in the loop
                                </h3>
                                <p className="mt-3 text-lg text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Impedit ex obcaecati natus
                                    eligendi delectus, cum deleniti sunt in
                                    labore nihil quod quibusdam expedita nemo.
                                </p>

                                <dl className="mt-10 space-y-10">
                                    {communicationFeatures.map((item) => (
                                        <div key={item.id} className="relative">
                                            <dt>
                                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                                    <item.icon
                                                        className="h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                                                    {item.name}
                                                </p>
                                            </dt>
                                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                                {item.description}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>

                            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                                <svg
                                    className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                                    width={784}
                                    height={404}
                                    fill="none"
                                    viewBox="0 0 784 404"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <pattern
                                            id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
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
                                        width={784}
                                        height={404}
                                        fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                                    />
                                </svg>
                                <img
                                    className="relative mx-auto"
                                    width={490}
                                    src="https://tailwindui.com/img/features/feature-example-2.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GradientFeatures features={transferFeatures} />

            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="pb-16 xl:flex xl:items-center xl:justify-between">
                        <div>
                            <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                                <span className="text-gray-900">
                                    Everything you need for{" "}
                                </span>
                                <span className="text-blue-600">
                                    $99 a month
                                </span>
                            </h1>
                            <p className="mt-5 text-xl text-gray-500">
                                Includes every feature we offer plus unlimited
                                projects and unlimited users.
                            </p>
                        </div>
                        <a
                            href="#"
                            className="mt-8 w-full bg-blue-600 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-blue-700 sm:mt-10 sm:w-auto xl:mt-0"
                        >
                            Get started today
                        </a>
                    </div>
                    <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
                        <div>
                            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
                                Everything you need
                            </h2>
                            <p className="mt-2 text-3xl font-extrabold text-gray-900">
                                All-in-one platform
                            </p>
                            <p className="mt-4 text-lg text-gray-500">
                                Ac euismod vel sit maecenas id pellentesque eu
                                sed consectetur. Malesuada adipiscing sagittis
                                vel nulla nec. Urna, sed a lectus elementum
                                blandit et.
                            </p>
                        </div>
                        <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
                            <ul className="divide-y divide-gray-200">
                                {features
                                    .slice(0, 5)
                                    .map((feature, featureIdx) =>
                                        featureIdx === 0 ? (
                                            <li
                                                key={feature}
                                                className="py-4 flex md:py-0 md:pb-4"
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
                                            <li
                                                key={feature}
                                                className="py-4 flex"
                                            >
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
                                {features.slice(5).map((feature, featureIdx) =>
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
                </div>
            </div>

            <div className="bg-gray-100">
                <div className="pt-12 sm:pt-16 lg:pt-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                                Simple no-tricks pricing
                            </h2>
                            <p className="mt-4 text-xl text-gray-600">
                                If you're not satisfied, contact us within the
                                first 14 days and we'll send you a full refund.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
                    <div className="relative">
                        <div className="absolute inset-0 h-1/2 bg-gray-100" />
                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                                <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                                    <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                                        Lifetime Membership
                                    </h3>
                                    <p className="mt-6 text-base text-gray-500">
                                        Lorem ipsum dolor sit amet consect etur
                                        adipisicing elit. Itaque amet indis
                                        perferendis blanditiis repellendus etur
                                        quidem assumenda.
                                    </p>
                                    <div className="mt-8">
                                        <div className="flex items-center">
                                            <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                                                What's included
                                            </h4>
                                            <div className="flex-1 border-t-2 border-gray-200" />
                                        </div>
                                        <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                            {includedFeatures.map((feature) => (
                                                <li
                                                    key={feature}
                                                    className="flex items-start lg:col-span-1"
                                                >
                                                    <div className="flex-shrink-0">
                                                        <CheckCircleIcon
                                                            className="h-5 w-5 text-green-400"
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                    <p className="ml-3 text-sm text-gray-700">
                                                        {feature}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                                    <p className="text-lg leading-6 font-medium text-gray-900">
                                        Pay once, own it forever
                                    </p>
                                    <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                                        <span>$349</span>
                                        <span className="ml-3 text-xl font-medium text-gray-500">
                                            USD
                                        </span>
                                    </div>
                                    <p className="mt-4 text-sm">
                                        <a
                                            href="#"
                                            className="font-medium text-gray-500 underline"
                                        >
                                            Learn about our membership policy
                                        </a>
                                    </p>
                                    <div className="mt-6">
                                        <div className="rounded-md shadow">
                                            <a
                                                href="#"
                                                className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                                            >
                                                Get Access
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-sm">
                                        <a
                                            href="#"
                                            className="font-medium text-gray-900"
                                        >
                                            Get a free sample{" "}
                                            <span className="font-normal text-gray-500">
                                                (20MB)
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Testimonials />

            <CTASimple />
        </div>
    );
}
