import ContactForm from "../components/contact-form";
import FAQSDark from "../components/faqs-dark";
import CTASimple from "../components/cta-simple";
import Testimonials from "../components/testimonials";
import { useState } from "react";
import webmasterImg from "../public/img/webmaster.jpg";
import youtubeThumbnail from "../public/img/seo-video.jpg";
import {
    AdjustmentsIcon,
    CheckIcon,
    DocumentReportIcon,
    DocumentSearchIcon,
    DocumentTextIcon,
    LinkIcon,
    PresentationChartLineIcon,
    SupportIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

const firstFeatures = [
    {
        id: 1,
        name: "Robust Strategy for Keyword Research",
        description:
            "Ensure relevance for the main transactional search words that place your company at the forefront as customers seek your services.",
        icon: PresentationChartLineIcon,
    },
    {
        id: 2,
        name: "Professional SEO & Content Audit",
        description:
            "Our audit will mark the improvements required for your website and our expert analysis of the content would aim for more efficiency.",
        icon: DocumentSearchIcon,
    },
    {
        id: 3,
        name: "Title & Meta Tag Optimization",
        description:
            "Our skilled meta tag optimization services provide meta tags for each of your website's essential pages.",
        icon: AdjustmentsIcon,
    },
];
const secondFeatures = [
    {
        id: 1,
        name: "Monthly Link Building",
        description:
            "It's a method of obtaining hyperlinks from other websites to your own website that can effectively put you ahead of other competitors.",
        icon: LinkIcon,
    },
    {
        id: 2,
        name: "Sitemap Generation and Submission",
        description:
            "Our team will generate a sitemap and submit it to the popular search engines so all pages on your website are indexed properly.",
        icon: DocumentTextIcon,
    },
];
const thirdFeatures = [
    {
        id: 1,
        name: "Monthly Ranking Reports",
        description:
            "A comprehensive monthly ranking summary will be given to allow you to keep track of your performance rating on your website.",
        icon: DocumentReportIcon,
    },
    {
        id: 2,
        name: "Dedicated Support Team",
        description:
            "BlessHost's SEO team is comprised of seasoned SEO professionals who understand every aspect of SEO (search engine optimization).",
        icon: SupportIcon,
    },
];
const pricing = {
    tiers: [
        {
            title: "Essential",
            price: 24,
            frequency: "/month",
            description:
                "The essentials to get you started on your journey to the first-page.",
            features: [
                "Professional SEO Audit for 5 pages",
                "Campaign optimized for 3 keywords",
                "3 monthly authority sites created",
                "Analytics/Webmaster management",
                "Internal/External Link Building",
            ],
            cta: "Contact us",
            mostPopular: false,
        },
        {
            title: "Professional",
            price: 32,
            frequency: "/month",
            description:
                "A plan that scales with your rapidly growing business.",
            features: [
                "Professional SEO Audit for 10 pages",
                "Campaign optimized for 6 keywords",
                "6 monthly authority sites created",
                "Analytics/Webmaster management",
                "Internal/External Link Building",
            ],
            cta: "Contact us",
            mostPopular: true,
        },
        {
            title: "Business",
            price: 48,
            frequency: "/month",
            description:
                "Boost your journey with a dedicated specialist and a personalized campaign.",
            features: [
                "Dedicated SEO Specialist",
                "Campaign optimized for selected keywords",
                "Dedicated Marketing Consultant",
                "Analytics/Webmaster management",
                "Internal/External Link Building",
            ],
            cta: "Contact us",
            mostPopular: false,
        },
    ],
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const faqs = [
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 2,
        question: "How do you make holy water?",
        answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 3,
        question: "Why do you never see elephants hiding in trees?",
        answer: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 4,
        question: "What do you call someone with no body and no nose?",
        answer: "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 5,
        question: "Why can't you hear a pterodactyl go to the bathroom?",
        answer: "Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 6,
        question: "Why did the invisible man turn down the job offer?",
        answer: "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
];
export default function Example() {
    const [showVideo, setShowVideo] = useState(false);

    function playVideo() {
        setShowVideo(!showVideo);
    }

    return (
        <>
            <main className="mt-16 lg:mt-32 mx-auto max-w-7xl px-4 sm:mb-24 sm:px-6 lg:mb-32">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        <h1>
                            <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                                Get your website to the top
                            </span>
                            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                                <span className="block text-gray-900">
                                    Appear on the{" "}
                                    <span className="block text-blue-600">
                                        first-page of Google
                                    </span>
                                    with our SEO services
                                </span>
                            </span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            Let us take care of your SEO with search
                            optimization strategies that are specifically
                            designed for your business so you can appear on the
                            first-page of popular search engines including
                            Google, Bing and Yahoo!
                        </p>
                        <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                            >
                                View plans
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                            {showVideo ? (
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/RoNPq-WnXuI?autoplay=1"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            ) : (
                                <button
                                    onClick={playVideo}
                                    type="button"
                                    className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    <span className="sr-only">
                                        Watch our video to learn more
                                    </span>
                                    <Image
                                        className="w-full"
                                        layout="responsive"
                                        objectFit="contain"
                                        src={youtubeThumbnail}
                                        height={315}
                                        width={560}
                                        alt=""
                                    />
                                    <div
                                        className="absolute inset-0 w-full h-full flex items-center justify-center"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            className="h-20 w-20 text-blue-500"
                                            fill="currentColor"
                                            viewBox="0 0 84 84"
                                        >
                                            <circle
                                                opacity="0.9"
                                                cx={42}
                                                cy={42}
                                                r={42}
                                                fill="white"
                                            />
                                            <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                                        </svg>
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <div className="relative bg-gray-50 pt-16 overflow-hidden sm:pt-24 lg:pt-32">
                <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                            Our Techniques
                        </h2>
                        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                            Why do you need SEO?
                        </p>
                        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                            Search engine optimization (SEO) is a collection of
                            techniques and best practices aimed at improving a
                            site's visibility in Google Search Results to
                            attract qualified traffic.
                        </p>
                    </div>
                    <div className="mt-12">
                        <Image
                            layout="intrinsic"
                            objectFit="contain"
                            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                            src={webmasterImg}
                            alt=""
                        />
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
                            Why should you trust us for SEO of your website?
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                            It's not just about getting a website to attract
                            your customers, but getting your website identified.
                            We have the experience and the tools to boost your
                            presence online.
                        </p>
                    </div>

                    <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="relative">
                            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                                Appear on the Front Page of Google!
                            </h3>
                            <p className="mt-3 text-lg text-gray-500">
                                We provide qualified SEO services that help
                                websites significantly improve their organic
                                search scores to compete for the highest
                                rankings on competitive keywords.
                            </p>

                            <dl className="mt-10 space-y-10">
                                {firstFeatures.map((item) => (
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
                            className="mt-10 -mx-4 relative lg:mt-0 justify-self-center"
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
                            <svg
                                className="h-120 w-120"
                                viewBox="0 0 140 140"
                                height="140"
                                width="140"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g transform="matrix(0.7,0,0,0.7,0,0)">
                                    <path
                                        d="M20.555,168.773a59.7,59.7,0,0,0-5.2,2.991c-.567.344-1.544.711-1.762,1.395a.834.834,0,0,0,.757,1.111,14.483,14.483,0,0,0,2.837-.095c3.364-.249,3.791.143,5.853.213a5.34,5.34,0,0,0,2.352-.284,1.2,1.2,0,0,0,.639-1.655,13.574,13.574,0,0,1-1.395-2.6.243.243,0,0,0-.473.06c-.12,1.644,2.013,2.851,1.087,3.511-.981.7-4.969-.1-6.916-.024-1,.037-3.289.226-3.582.178-.26.059-.4-.06-.426-.379.655-.545,4.2-2.442,6.408-4.114A.177.177,0,1,0,20.555,168.773Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M48.87,167.5c-.3,2.523-1.3,3.755-.52,4.658.542.628,1.714.521,2.459.579,1.99.155,4.554.133,6.549.083a6.9,6.9,0,0,0,2.6-.26,1.286,1.286,0,0,0,.781-1.549c-.535-1.431-4.483-1.281-6.751-3.559-.271-.272-.638.13-.414.414,1.91,2.414,6.628,2.272,6.621,3.523-.006,1.064-2.294.8-2.956.816a63.838,63.838,0,0,1-6.549-.083,4.438,4.438,0,0,1-1.727-.236c-.906-.528.377-2.058.284-4.339C49.24,167.342,48.9,167.271,48.87,167.5Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M147.233,166.443c-1.228.375-1.483.559-6.94,2.921-.733.317-2.089.615-2.305,1.525a1.483,1.483,0,0,0,.969,1.608,8.271,8.271,0,0,0,3.287.094c2.317-.106,5.264-.32,7.6-.567a10.019,10.019,0,0,0,3.074-.52c2.165-.991,1.215-3.816-.154-5.084a.272.272,0,0,0-.425.331,8.37,8.37,0,0,1,1.194,2.258,1.712,1.712,0,0,1-1.265,2.057c-1.121.324-11.866,1.208-12.9.958-.426-.1-1.037-.508-.851-1.041.156-.448.9-.643,1.277-.815,3.327-1.5,5.431-2.235,7.519-3.464C147.458,166.609,147.387,166.4,147.233,166.443Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M170.394,166.68c1.818,1.036,5.637,2.582,8.051,3.712.484.227,1,.6.626,1.171a1.534,1.534,0,0,1-1.277.52,49.3,49.3,0,0,1-5.828-.331c-1.962-.155-3.972-.263-5.923-.568-.993-.155-1.874-.6-1.9-1.738-.028-1.087.761-1.818,1.23-2.707a.274.274,0,0,0-.426-.331c-1.223,1.105-2.23,3.533-.65,4.788a4.778,4.778,0,0,0,2.518.721c2.3.255,5.09.489,7.72.627,2.032.107,4.8.626,5.191-1.147.212-.957-.732-1.339-1.443-1.655-1.286-.573-2.578-1.12-3.854-1.679a34.914,34.914,0,0,0-3.937-1.608C170.346,166.4,170.265,166.607,170.394,166.68Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M95.451,137.75c-5.412-3.1-16.939-8.865-17.214-9.091-.071-.059-.106-.083-.118-.083-.021-.075-.062-.192-.074-.24-.067-.283-.421-2.251-3.875-18.18a.288.288,0,0,0-.52-.082c-9.033,1.572-15.81,10.735-14.814,19.826,1.37,12.5,15.775,22.942,30.715,14.211a14.7,14.7,0,0,0,5.994-5.982A.276.276,0,0,0,95.451,137.75Z"
                                        fill="#2563eb"
                                    ></path>
                                    <path
                                        d="M97.732,117.628c-4.227-9.156-15.183-13.268-22.462-11.42-.352.089.159,1.021,4.2,19.862.1.485.058.946.52,1.17.637.309,14.565,6.845,17.308,8.134a.277.277,0,0,0,.39-.154C99.505,129.564,100.3,123.2,97.732,117.628Zm-17.674,8.761c-.447-1.449,0-.382-2.471-11.385-.638-2.838-1.182-5.722-1.986-8.513a22.794,22.794,0,0,1,8.736.6,20.2,20.2,0,0,1,12.509,9.9c2.905,5.5,2.252,11.817.425,17.793C79.01,126.192,80.229,126.944,80.058,126.389Z"
                                        fill="#2563eb"
                                    ></path>
                                    <path
                                        d="M156.384,79.938a.473.473,0,0,0,0-.946A.473.473,0,0,0,156.384,79.938Z"
                                        fill="#2563eb"
                                    ></path>
                                    <path
                                        d="M141.168,146.345c.123,0-.124-.006-.177-.023-1.4-.156-40.615.733-43.247.626-.236-.009-.225.332,0,.355,2.918.3,38.466-.3,43.424-.3C141.594,147.055,141.594,146.381,141.168,146.345Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M104.932,145.8a.225.225,0,0,0,.449,0c.208-2.182.119-3.063.119-12.437a9.922,9.922,0,0,1,0-1.88c.153-.733,1.04-.591,1.655-.638s3-.213,3.57-.248a10.573,10.573,0,0,1,1.774-.119c.673.079.545.84.567,1.36.026.615.312,10.771.461,13.478.021.378.6.39.591,0-.059-2.755-.353-13.62-.39-14.258A1.37,1.37,0,0,0,113.3,130a1.669,1.669,0,0,0-1.194-.19c-.7.045-4.86.305-6.243.426-1.194.1-1.08,1.111-1.076,2.069C104.834,142.358,104.743,144.137,104.932,145.8Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M118.032,145.482a.225.225,0,0,0,.449,0c.257-3.169.118-6.408.118-9.576,0-10.859-.009-10.4.012-10.617.052-.543.331-.553.839-.6l5.782-.555c.473-.045.779-.095.886.449.079.4.332,14.389.52,20.264a.3.3,0,0,0,.592,0c-.445-22.059-.35-20.272-.544-20.749-.427-1.045-1.5-.651-3.559-.449-4.486.439-4.5.37-4.812.627a1.687,1.687,0,0,0-.413,1.371C117.9,125.753,117.858,143.349,118.032,145.482Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M130.351,145.057a.225.225,0,0,0,.449,0c.3-5.935-.037-27.771.189-28.457.179-.544.863-.471,1.348-.532.544-.069,3.7-.491,4.741-.627.472-.062,1.019-.3,1.265.237a3.59,3.59,0,0,1,.13,1.371c.035,4.268.345,22.345.484,27.109a.3.3,0,0,0,.592,0c-.511-28.84.022-28.914-1.124-29.45-.365-.171-.207-.122-6.2.674-.709.094-1.544.033-1.844.8a8.366,8.366,0,0,0-.165,2.908C130.221,143.039,130.206,143.038,130.351,145.057Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M124.345,78.957a82.6,82.6,0,0,0-.39-8.678c-.219-1.706-.252-3.362-1.951-3.641-1.032-.17-7.2-.29-8.82-.308a265.2,265.2,0,0,0-27.475,1.147c-.225.036-.154.37.047.379,2.753.114,10.254-.76,23.421-.84,1.709-.01,12.008.028,13,.367.542.183.7.674.8,1.182.678,3.186.615,8.424.686,10.912a3.44,3.44,0,0,1-.047,1.3c-.245.581-1.052.6-1.9.65-1.323.082-26,.8-26.1.8a.26.26,0,0,0,0,.52c1.8,0,25.887-.567,26.991-.721a1.963,1.963,0,0,0,1.56-.792A4.6,4.6,0,0,0,124.345,78.957Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M91.679,71.107a.308.308,0,0,0-.555.071c-.578,2.305-1.161,4.605-1.644,6.939a.172.172,0,0,0,.331.095c.267-.825.509-1.655.745-2.5.426-.023.851-.059,1.277-.094a5.667,5.667,0,0,0,.9-.071,10.883,10.883,0,0,0,.627,1.927c.108.224.461.106.461-.13C93.819,75.864,92.327,72.418,91.679,71.107Zm-1.017,4.208c.284-1.04.556-2.092.828-3.144a25.451,25.451,0,0,1,1.1,2.873A11.136,11.136,0,0,0,90.662,75.315Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M98.217,77.183c.379-.081.225-.66-.165-.579-.815.169-2.043.6-2.566-.272a4.067,4.067,0,0,1-.52-1.7,17.738,17.738,0,0,0,3.026-.2c.355-.038.379-.568,0-.568a9.606,9.606,0,0,0-3.062.39,10.128,10.128,0,0,1,.024-1.371c.075-.944.005-.964.532-1.052.84-.141,1.715-.137,2.554-.272.213-.034.153-.365-.048-.367-3.548-.032-3.511-.139-3.653,1.49-.121,1.392-.07,3.46.934,4.422C96,77.8,97.378,77.364,98.217,77.183Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M102.154,74.713a.3.3,0,0,0,.461-.06,21.751,21.751,0,0,0,1.064-2.2c.307,1.526.534,3.064.721,4.6.045.367.624.367.58,0a56.423,56.423,0,0,0-.934-5.686c-.07-.308-.474-.249-.568,0a25.026,25.026,0,0,1-1.206,2.66c-.887-.8-1.751-1.631-2.577-2.5-.156-.163-.512-.047-.485.2.2,1.824.254,3.653.461,5.474a.166.166,0,0,0,.331,0,21.149,21.149,0,0,0-.13-4.682C100.629,73.27,101.383,74.006,102.154,74.713Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M106.126,77.467c.012,0,.024-.012.036-.012a.318.318,0,0,0,0-.614c-.012,0-.024-.012-.036-.012a.332.332,0,0,0-.413.319A.328.328,0,0,0,106.126,77.467Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M110.631,72.017c.142.118.4-.035.283-.213a1.441,1.441,0,0,0-2.1-.354c-.814.617-.828,2-.8,2.932a3.2,3.2,0,0,0,1.029,2.577,1.357,1.357,0,0,0,2-.26c.143-.26-.179-.451-.379-.3-.716.555-1.948.193-2.033-2.021a6.438,6.438,0,0,1,.177-1.88A1.081,1.081,0,0,1,110.631,72.017Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M114.851,76.486a4.216,4.216,0,0,0,.2-3.9c-.238-.622-.909-1.361-1.594-1.334-1.534.06-1.706,3.168-1.1,4.633C112.775,76.9,114.06,77.527,114.851,76.486Zm-1.341-4.6c.673.019,1.009.951,1.152,1.562a3.421,3.421,0,0,1-.248,2.577c-.385.594-1.049.4-1.383-.118C112.454,75.015,112.279,71.852,113.51,71.886Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M118.836,74.724a.324.324,0,0,0,.5-.059,9.679,9.679,0,0,0,.674-1.466c.189,1.041.5,2.071.757,3.074a.325.325,0,0,0,.626-.177,18.065,18.065,0,0,1-.9-4.6.321.321,0,0,0-.627-.083,11.312,11.312,0,0,1-.887,2.566c-.756-.733-1.5-1.483-2.2-2.27-.167-.188-.554-.048-.52.212.212,1.631.232,3.275.4,4.907a.178.178,0,0,0,.355,0,18.223,18.223,0,0,0-.047-4C117.571,73.483,118.19,74.117,118.836,74.724Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M85.52,59.544c2.037-10.917,10.126-20.564,21.99-22.179,9.841-1.34,20.768,2.7,26.967,10.6l8.914-7.543C133.736,28.534,115.752,22.7,100.416,27.02,83.4,31.82,72.585,49.889,73.532,66.543,86.045,59.14,85.52,59.644,85.52,59.544Z"
                                        fill="#2563eb"
                                    ></path>
                                    <path
                                        d="M77.729,44.742c.141-.26.283-.52.437-.78-6.55.059-41.072.458-44.062.556-3.891.128-7.817.93-9.092,4.587-.709,2.033-.569,4.363-.544,9.517.018,3.594-.019,7.2.083,10.794a.243.243,0,0,0,.485,0c.188-16.823-.166-18.415.91-20.666,1.31-2.738,4.658-3.329,7.425-3.44C37.022,45.163,54.327,44.986,77.729,44.742Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M128.483,43.548c-1.573.012-31.283.26-33.092.272q-.425.373-.851.781c.556,0,31.46-.261,34.948-.284C129.168,44.045,128.826,43.8,128.483,43.548Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M192.62,52.64c-1.355.038-33.314.307-41.781.4.071.284.142.567.2.851.4,0,41.414-.392,41.58-.4C193.163,53.46,193.164,52.625,192.62,52.64Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M120.81,53.94c.853.3-.206.206,6.431.166l1.017-.851c-3.062.023-6.124.059-9.186.082Q119.94,53.638,120.81,53.94Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M74.1,53.739c-2.577.024-47.952.711-48.118.722a.16.16,0,0,0,0,.319c4.085-.028,43.756-.189,47.9-.213C73.945,54.283,74.016,54.011,74.1,53.739Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M88.322,53.609c-.119.272-.237.544-.343.828,2.447-.024,4.882-.036,7.33-.059.094-.045,1.374-.688,1.69-.84C90.782,53.59,90.23,53.609,88.322,53.609Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M66.486,75.93a4.17,4.17,0,0,0,.141,1.277.116.116,0,0,0,.2,0,2.124,2.124,0,0,0,.083-1.442,4.837,4.837,0,0,0-.544-1.679.131.131,0,0,0-.236.106A11.322,11.322,0,0,1,66.486,75.93Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M67.207,76.545c.012.083.13.083.177.024a4.06,4.06,0,0,0-.059-3.157.141.141,0,0,0-.272.071A14.925,14.925,0,0,1,67.207,76.545Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M67.881,76.521c.614-.177.835-1.3.91-1.832a4.066,4.066,0,0,0-.319-2.258c-.062-.141-.282-.036-.237.106a4.326,4.326,0,0,1-.177,3.2c-.115.25-.284.438-.26.721C67.8,76.51,67.833,76.545,67.881,76.521Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M31.786,77.373c-.707.23-1.667,1.17-1.253,2a.19.19,0,0,0,.331,0c.254-.417.292-1.012,1.1-1.325C32.379,77.885,32.213,77.234,31.786,77.373Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M36.007,76.675c-.616-.707-1.916-.586-2.069.024a.152.152,0,0,0,.106.189c.408.058.869-.268,1.49.26A.335.335,0,0,0,36.007,76.675Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M31.857,79.666a.438.438,0,1,0,.438-.437A.436.436,0,0,0,31.857,79.666Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M33.252,77.775c.776,1.644,2.036,2.923,1.738,3.345-.21.3-.744.1-.993.024s-.367.322-.118.414c.624.231,1.806.189,1.631-.78a4.672,4.672,0,0,0-.9-1.5c-.377-.556-.756-1.112-1.17-1.631C33.347,77.526,33.2,77.669,33.252,77.775Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M35.168,83.047c-.3.213-.332.77-.816.663s-.644-.854-.757-1.242a.139.139,0,0,0-.272.036,1.91,1.91,0,0,0,.189,1.194,1.038,1.038,0,0,0,1.691.272C35.755,83.386,35.364,82.906,35.168,83.047Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M35.262,78.46a.356.356,0,0,0,.189.686A.356.356,0,0,0,35.262,78.46Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M37.024,89.124a7.023,7.023,0,0,0-2.885,2.081.142.142,0,0,0,.2.2,17.959,17.959,0,0,1,2.837-1.915A.2.2,0,0,0,37.024,89.124Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M35.416,92.174a.142.142,0,0,0,.2.2c1.845-1.473,1.878-1.212,2.282-1.655a.158.158,0,0,0-.154-.26A7.423,7.423,0,0,0,35.416,92.174Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M157.992,126.211c-2.176-1.114-3.618-2.861-9.707-9.458-2.386,13.264-4.594,26.838-6.031,36.168-22.092.287-64.024.83-89.25,1.139-.09-11.692-.633-24.707-2.55-34.942.6-.154,1.2-.306,1.8-.485a.242.242,0,0,0,.166-.3c-1.276-4.165-4.471-14.537-6.538-19.7,10.581.182,13.984,1.108,16.256-9.3a42.71,42.71,0,0,0,1.017-7.176.2.2,0,0,0-.119-.319l-.106-.036a2.682,2.682,0,0,1,1.383-1.75c.567-.238,1.13-.311,1.525-.815a3.023,3.023,0,0,0-.2-3.453.143.143,0,0,0-.236.095,2.117,2.117,0,0,0,.248.863,2.254,2.254,0,0,1-.13,2.223,2.18,2.18,0,0,1-1.135.591,2.3,2.3,0,0,0-1.632,2.175,16.5,16.5,0,0,1-2.234-.757c.34-1.019-.219-2.706.544-4.09.746-1.353,2.542-1.513,2.553-2.518a.166.166,0,0,0-.283-.118,6.786,6.786,0,0,1-.745.721,4.3,4.3,0,0,0-2.01,1.844c-.616,1.264-.272,2.66-.437,4-.071-.035-.142-.059-.213-.095a.234.234,0,0,0-.284.036,50.824,50.824,0,0,0-5.521,8.169,7.032,7.032,0,0,0-2-.827,50.946,50.946,0,0,0-7.342-1.987c-2.411-.463-5.658-1.157-7.637.733-.121.116.036.332.177.237,2.372-1.6,5.379-.887,7.98-.355a50.069,50.069,0,0,1,6.574,1.821,9.963,9.963,0,0,0,2.069.709,14.76,14.76,0,0,0-.875,2.128.137.137,0,0,0,.248.107,53.238,53.238,0,0,1,6.526-10.262,12.3,12.3,0,0,0,2.9,1.017c-.271,1.517-.142,2.267-.852,5.852-2.3,11.6-5.464,10.134-16.267,10.049-.121,0-.326.095-.272.272,1.292,4.238,3.488,9.827,6.5,19.8-8.359,2.4-23.679,4.866-26.825,4.919a37.953,37.953,0,0,1,.083-5.06c2.637.517,5.179-1.725,6.762-3.89,2.983-4.079,4.024-10.774,4.576-15.854.037-.223-.266-.266-.757-.485a.232.232,0,0,0,.118-.059c1.157-1.148,2.012-2.361,1.135-3.736-.12-.188-.4-.425-.39-.65.013-.272.606-.575.839-.745a10.069,10.069,0,0,0,.828-.7.142.142,0,0,0-.166-.225,19.292,19.292,0,0,0-1.82,1.23c-.273.212-.383.381-.178.7.417.644.932,1.1.71,1.963a4.254,4.254,0,0,1-1.3,1.832.221.221,0,0,0-.024.3c-.354-.154-.722-.293-1.087-.438a8.337,8.337,0,0,0-1.135-.449c.3-.447.121-.737-.071-1.3a8.42,8.42,0,0,1-.674-2.837,3.514,3.514,0,0,1,1.182-2.364c.65-.627,1.5-.958,2.176-1.537a.186.186,0,0,0-.178-.308,7,7,0,0,0-2.163,1.384c-2.13,1.879-1.51,3.656-.65,6.076.121.342.118.355-.036.792,0,.012-.012.024-.012.036-.513,0-1.154.772-1.5,1.088-3.348,3.042-7.611,8.445-8.217,12.78-.035.248.352.283.414.059a24.033,24.033,0,0,1,4.823-8.879,26.97,26.97,0,0,1,4.481-4.528c.5.1,2.5.934,3.1,1.182a67.056,67.056,0,0,1-1.147,7.188c-.931,4.332-2.5,8.622-6.195,11.031-2.187,1.425-4.036,1.267-5.97-.627-2.875-2.814-4.351-8.182-4.54-12.165-.365-7.664,3.521-13.4,8.417-15.653,2.2-1.013,2.112-.585,3.452.012a4.347,4.347,0,0,0,3.074.165.135.135,0,0,0-.071-.26,4.281,4.281,0,0,1-3.121-.52c.034-.1-.018-.278-.283-3.275a.259.259,0,0,0-.331-.248c-1.256.474-2.034-.934-1.727-2.022a1.705,1.705,0,0,1,2.483-1.088c.161.081.283-.141.213-.283a3.813,3.813,0,0,1-.65-2.329c.373-1.765,3.616-2.415,5.3-3.086a2.613,2.613,0,0,0,.97-.627c1.016,2.542,2.043,5.368,1.726,8.158-.3,2.622-2.275,3.637-4.446,2.849a17.419,17.419,0,0,1-2.033-1.147.217.217,0,0,0-.26.343,4.954,4.954,0,0,0,4.906,1.419,1.457,1.457,0,0,0,.107.556c.1.27.213.553.52.6a.156.156,0,0,0,.154-.119c.069-.324-.186-.466-.284-1a1.725,1.725,0,0,0-.059-.212,3.582,3.582,0,0,0,1.773-2.2c.647-2.151-.052-6.613-1.9-9.47.792-1.232-.866-3.111-2.034-3.961-3.427-2.494-9.891.5-10.273,5.663a6.605,6.605,0,0,0,3.109,6.124.32.32,0,0,0,.153.036,2,2,0,0,0,2.117,2.376c.071.875.13,1.75.212,2.625a3.091,3.091,0,0,0-2.612.3,13.941,13.941,0,0,0-4.777,3.429c-8.31,9.061-3.1,25,2.743,26.861a33.9,33.9,0,0,0-.106,5.473.282.282,0,0,0,.272.272c.721,0,1.454-.035,2.187-.094-4.822,16.256-7.015,42.626-7.058,42.726a.286.286,0,0,0,.165.414,16.779,16.779,0,0,0,4.339.544.288.288,0,0,0,.485-.107c1.613-4.083,13.631-33.658,14.151-34.959,2.146,4.486,2.454,9.136,6.146,21.938-7.824.093-12.76.147-12.92.135-.5-.037-.5.745,0,.78.315.022,5.317-.026,13.152-.118.578,1.985,1.237,4.158,1.993,6.55,1.188,3.757,1.151,4.026,1.561,3.948,3.61-.687,4.015-.486,4.019-.922.03-3.036.046-6.292.025-9.667,25.19-.31,67.02-.88,89.129-1.183-.531,3.463-.948,6.293-1.218,8.237a.273.273,0,0,0,.248.332c.144.018,15.975,2.016,17.947,2.092C158.7,160.049,158.424,130.487,157.992,126.211Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M31.455,92.588C24.787,96.466,7.9,105.982,7.787,106.042c-.3.152-.035.594.26.449,12.5-6.139,17.1-8.657,23.633-12.165A6.172,6.172,0,0,1,31.455,92.588Z"
                                        fill="#2563eb"
                                    ></path>
                                    <path
                                        d="M159.919,34.741c-.182-1.738-.438-3.464-.792-5.179a1.465,1.465,0,0,0-1.762-1.005c-6.858,1.246-8.5.716-10.356,1.8a.553.553,0,0,0,0,.946c1.489.816,3.476.659,5.119.591q1.544-.063,3.085-.224c-.1.084-29.267,24.751-29.379,24.863-1.637-.255-14.877-5.125-17.461-5.935-2.992-.939-2.415-.707-4.044.212-2.16,1.22-7.062,3.654-9.328,4.789-11.432,5.723-35.99,20.887-57.138,33.256a.92.92,0,0,1,.036.922.871.871,0,0,1,.78.769c2.6-1.419,19.968-11,26.068-14.317a.883.883,0,0,1,.887-1.159c-.164-.623-.343-1-.035-1.395a.816.816,0,0,1,.756-.319.845.845,0,0,1,1.194-.638.839.839,0,0,1,1.573-.544,4.99,4.99,0,0,1,.4,1.454c11.73-6.368,24.35-13,36.567-18.822,6.222,2.132,12.015,3.874,18.526,5.711.544.153,1.641.7,2.163.343.366-.247,29.562-28.484,29.781-28.717.478,4.1.237,6.3,1.679,7.341a.8.8,0,0,0,.946-.118C160.371,38.353,160.057,36.065,159.919,34.741Z"
                                        fill="#2563eb"
                                    ></path>
                                    <path
                                        d="M140.506,100.273c-.154-.479-.557-.445-1.6-1.7-.556-.673-1.011-1.46-1.584-2.116a.115.115,0,0,0-.189.118,9.47,9.47,0,0,0,1.4,2.341c.4.51,1.111,1.573,1.832,1.561A.158.158,0,0,0,140.506,100.273Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M135.458,97.116a10.073,10.073,0,0,0,1.655,2.258c.533.544,1.3,1.466,2.069,1.644a.184.184,0,0,0,.2-.272c-.442-.76-.584-.128-3.736-3.783C135.564,96.844,135.387,96.986,135.458,97.116Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M134.879,98.83a9.434,9.434,0,0,0,1.749,1.833,5.11,5.11,0,0,0,2.022,1.3.17.17,0,0,0,.166-.283,3.24,3.24,0,0,0-.84-.627,25.144,25.144,0,0,1-2.885-2.376C134.973,98.594,134.795,98.713,134.879,98.83Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M155.757,80.683c-.1-.625-1.245-1.132-1.525-.378-.057.154.165.271.272.153a.431.431,0,0,1,.532-.059.892.892,0,0,1,.355.438C155.507,81.05,155.79,80.884,155.757,80.683Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M156.242,83.828c.083-.012.167-.1.106-.178-.115-.155-.366-.212-.461-.354-.218-.328.585-.572.6-2.046a.121.121,0,0,0-.236-.035,3.982,3.982,0,0,1-.414,1.123c-.132.236-.455.507-.508.757C155.239,83.53,155.876,83.877,156.242,83.828Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M157.72,84.041c-.268.206-.283.58-.532.815a1.275,1.275,0,0,1-1.159.213c-.118-.012-.165.153-.094.225a1.126,1.126,0,0,0,1.383-.012c.318-.226.815-.792.591-1.206A.145.145,0,0,0,157.72,84.041Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M175.548,104.34a33.511,33.511,0,0,0-1.525-6.254c-1.186-3.51-3.263-7.425-6.762-9.092a8.664,8.664,0,0,0,.011-7.566c-.2-.415-.5-.781-.685-1.206a3.243,3.243,0,0,1-.012-1.573c.219-3.309-1.385-6.911-4.776-7.885a5.433,5.433,0,0,0-4.682.721c-1.434-1.337-4.114.735-4.292,2.991-.1,1.3-.422,1.062-.839,1.963a3.411,3.411,0,0,0-.272,1.655,7.422,7.422,0,0,0,1.679,3.665c.1.1-.4,2.367.414,4.161a2.906,2.906,0,0,0,2.872,1.785,3,3,0,0,1-.011,1.372c-2.928-.783-8.506-.172-12.65,2.861a.125.125,0,0,0,.13.213,19.136,19.136,0,0,1,9.635-2.814,11.253,11.253,0,0,1,2.683.2c1.368.339,2.472,1.763,6.373-.887a.213.213,0,0,0,.106-.13,6.535,6.535,0,0,1,3.665.7c4.919,2.4,6.987,8.436,8.134,13.8a9.148,9.148,0,0,1-.283,5.816,7.612,7.612,0,0,1-3.275,3.535,12.193,12.193,0,0,1-5.663,1.064,27.549,27.549,0,0,1-11.137-1.986,29.38,29.38,0,0,1-2.92-1.478c-.806-.446-1.336.108-2.081.45a14.509,14.509,0,0,1-6.041.945,21.785,21.785,0,0,1,4.563-12.189,28.62,28.62,0,0,1,4.174,5.486.244.244,0,0,0,.283.118,25.142,25.142,0,0,1,16.611-.2c.261.081.354-.306.106-.4a20.837,20.837,0,0,0-3.393-.98,10.606,10.606,0,0,0-.863-4.541.14.14,0,0,0-.26.071,13.074,13.074,0,0,0,.473,2.246c.137.711.2,1.439.295,2.156a25.485,25.485,0,0,0-12.933,1.107,29.563,29.563,0,0,0-4.327-5.639.274.274,0,0,0-.379,0,19.344,19.344,0,0,0-2.278,3.336c-1.276-1.292-1.015-1.615-1.836-2.6-.957-1.15-1.992-.932-3.133-2.447-.132-.176-.4.023-.355.2.363,1.393,2.353,1.6,3.181,2.624.6.742,1,2.18,1.96,2.572a21.836,21.836,0,0,0-1.512,3.768c-.743-1.125-2.784-1.165-3.9-1.528-1.454-.472-3.281-2.157-4.847-3.239-.14-.1-.3.13-.177.248,3.477,3.477,5.075,3.532,6.656,3.913a4.014,4.014,0,0,1,2.118,1.134,24.939,24.939,0,0,0-.829,5.1.3.3,0,0,0,.295.3c2.195,0,4.9-.037,6.916-1.146.574-.316.767-.6,1.561-.142a27.048,27.048,0,0,0,14.211,3.31,12.62,12.62,0,0,0,5.663-1.076A8.121,8.121,0,0,0,175.548,104.34ZM161.491,83.721a.247.247,0,0,0-.248.19,7.026,7.026,0,0,0,1.017,4.457c-1.384.91-3.017,1.692-4.67,1-.177-.073-.355-.141-.532-.2a1.316,1.316,0,0,0-.036-1.525c.036,0,.071-.011.095-.011a4.56,4.56,0,0,0,3.133-2.743.194.194,0,0,0-.319-.189c-.4.459-.707.995-1.147,1.43-1.822,1.8-4.333,1.281-4.8-1.478-.494-2.919.827-7.982.922-8.465a12.854,12.854,0,0,0,3.748,4.3,1.109,1.109,0,0,0-1.466.508.119.119,0,0,0,.177.13c.774-.566,1.062-.213,1.3-.236.181-.018.231-.214.052-.351a6.78,6.78,0,0,0,3.424.954C163.8,81.616,163.464,83.921,161.491,83.721Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M168.514,114.578a30.487,30.487,0,0,1-3.618.237,27.293,27.293,0,0,1-13.785-3.429c-.357-.209-.184-.152-.757.154a11.231,11.231,0,0,1-4.492,1.158c3.447,3.8,9.519,10.543,11.278,11.882,5.923,4.506,13.443-1.788,12.438-6.822A11.784,11.784,0,0,0,168.514,114.578Z"
                                        fill="#2563eb"
                                    ></path>
                                    <path
                                        d="M139.785,105.889c.816.922,1.643,1.856,2.471,2.778.106-.6.236-1.206.378-1.8C141.865,106.229,141.034,106.253,139.785,105.889Z"
                                        fill="#2563eb"
                                    ></path>
                                    <path
                                        d="M128.057,100.557c-1.384-.009-2.061-1.389-2.447-2.708a2.009,2.009,0,0,0-.343-.851.128.128,0,0,0-.213.059,2.785,2.785,0,0,0,.308,1.525,4.8,4.8,0,0,0,.733,1.36c.377.473,1.445,1.457,2.057.827A.127.127,0,0,0,128.057,100.557Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M126.083,101.041c-2.209-1.919-1.86-3.44-2.365-4.327a.186.186,0,0,0-.343.095,8.064,8.064,0,0,0,.863,2.814,3.4,3.4,0,0,0,1.7,1.667A.15.15,0,0,0,126.083,101.041Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M124.5,101.171c-1.546-.461-1.79-2.35-2.365-3.57a.2.2,0,0,0-.378.106c.084,1.242,1.194,3.748,2.707,3.736A.138.138,0,0,0,124.5,101.171Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M122.9,101.715c-1.541.124-1.846-2.064-2.329-2.754a.178.178,0,0,0-.331.094c-.08,1.038,1.527,3.829,2.755,2.944C123.093,101.93,123.068,101.7,122.9,101.715Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M143.225,86.31c8.748-12.574,10.664-29.647,2.684-42.407-2.967,2.849-5.911,5.675-8.76,8.37,6.88,14.561-2.589,35.149-19.543,38.565-14.295,2.882-31.37-7.666-32.5-24.508-2.573,1.287-8.954,4.747-10.877,5.782,4.309,21.162,26.808,34.117,46.285,29.911a5.029,5.029,0,0,1-1.229-3.051,1.118,1.118,0,0,1,1.56-.945,1.172,1.172,0,0,1,1.6-1.372,1.123,1.123,0,0,1,2.081-.425c.588-.471,1.627-.247,1.951,1.194.163.727.6,1.87,1.3,2.128a38.18,38.18,0,0,0,4.351-2.412c3.292,3.827,2.727,3.21,3.062,3.322a9.594,9.594,0,0,1-.981-1.159.937.937,0,0,1,.7-1.477c-.059-.107-.129-.214-.189-.331a.953.953,0,0,1,1.549-1.088c0,.012.012.012.012.024a.933.933,0,0,1,.934-.852c.9,0,1.23,1.247,2.613,2.8l-.036-.13c-1.494-1.809.511-2.893,1.3-1.891a4.082,4.082,0,0,0,1.419,1.158c1.787.947,1.845,1.447,2.778,3a21.623,21.623,0,0,1,1.762-2.483,1.091,1.091,0,0,1,1.608-.047,31.9,31.9,0,0,1,4.09,5.226,27.135,27.135,0,0,1,4.588-1.064C152.072,96.2,148.109,91.776,143.225,86.31Z"
                                        fill="#2563eb"
                                    ></path>
                                    <path
                                        d="M118.575,103.359c1.892,1.606,5.6,2.333,9.127.993a1.937,1.937,0,0,1,1.147-.26,13.948,13.948,0,0,0,5.415,1.134.177.177,0,0,0,0-.354c-3.914-.211-4.893-1.486-5.959-1.289-.976.181-2.564,1.248-5.923.733a16.757,16.757,0,0,1-3.677-1.194C118.587,103.075,118.481,103.264,118.575,103.359Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M196.773,142.16c.073,3.668.447,6.56-1.194,8.323s-4.59,1.718-6.834,1.762c-1.351.026-5.741.1-10.842.182-2.126-11.611-4.541-21.686-7.391-32.517-.89,4.448-6.541,8.738-11.835,6.621.251,2.675,1.034,35.169.887,37.82,4.706.127,9.527-1.473,19.472-3.878a.263.263,0,0,0,.2-.319c-.391-2.41-.792-4.743-1.2-7.016,4.384-.078,8.305-.15,9.87-.184,3.239-.071,7.771.191,9.245-3.346a9.478,9.478,0,0,0,.5-3.948c-.2-7.169-2.054-89.851-2.2-94.663-.077-2.571-.885-5.265-3.109-6.515-2.912-1.636-7.878-1.353-44.086-1.052l-.816.78c4.741-.035,37.49-.272,39.275-.13,1.927.154,4.354.2,5.911,1.514a6.874,6.874,0,0,1,2.045,5.024C194.724,52.132,196.743,140.67,196.773,142.16Z"
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
                                    Quality Link Building
                                </h3>
                                <p className="mt-3 text-lg text-gray-500">
                                    Our team creates high-quality backlinks to
                                    your website as it is an integral part of
                                    any effective SEO strategy in order to add
                                    value to your page keywords listed within
                                    search engines.
                                </p>

                                <dl className="mt-10 space-y-10">
                                    {secondFeatures.map((item) => (
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

                            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1 justify-self-center">
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
                                <svg
                                    className="h-120 w-120"
                                    viewBox="0 0 140 140"
                                    height="140"
                                    width="140"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g transform="matrix(0.7,0,0,0.7,0,0)">
                                        <path
                                            d="M110.707,46.263c-7.065,2.1-12.708,6.123-15.813,10.005-7.356,8.619-9.961,22.508-4.841,33.885,6.242,13.749,22.553,19.893,37.177,15.878a30.635,30.635,0,0,0,12.716-6.777c.71.71,3.743,3.55,4.388,4.389,1.55-3.033,3.745-6.906,4.39-8.649a14.539,14.539,0,0,0-2.517-2.323,28.538,28.538,0,0,0,4.97-31.369C144.651,47.211,126.881,41.462,110.707,46.263Zm39.114,33.563c-1.175,6.222-4.759,12.462-10.328,15.555-.193.13-.451-.193-.257-.322a26.035,26.035,0,0,0,9.294-26.141c-1.462-6.65-5.191-12.1-9.94-16.975-.065-.064,0-.258.13-.194C146.05,57.094,151.972,68.429,149.821,79.826ZM88.827,77.567a25.868,25.868,0,0,1,2.84-12.2c.064-.129.258-.064.193.065a31.265,31.265,0,0,0-1.1,18.976c1.033,4.131,3.1,7.487,5.357,11.037.194.323-.258.71-.581.452C92.36,92.84,88.948,85.658,88.827,77.567Zm28.464,23.107a25.39,25.39,0,0,1-11.038-2.969C89.38,88.74,90.737,63.453,107.738,54.654c13.559-7.119,33.379-3.233,37.887,12.07A25.045,25.045,0,0,1,144.012,84.8C139.375,94.208,128.456,101.165,117.291,100.674Z"
                                            fill="#2563eb"
                                        ></path>
                                        <path
                                            d="M156.792,134.818c.194,1.42.387,3.033-.517,4.26-1.419,1.808-4.13,2.259-6.2,2.711-5.625,1.3-115.533,20.7-117.923,21.106-3.948.759-6.325.05-7.745-3.679-3.84-10.634-18.942-93.372-18.2-97.075.387-1.936,2.065-2.582,3.743-2.905,2.324-.451,113.6-21.041,119.924-21.751,1.678-.194,3.357-.323,4.97-.516,1.226-.13,2.776-.517,3.873.193,2.068,1.13,3.336,8.581,3.421,11.1a.517.517,0,0,0,1.032,0,31.439,31.439,0,0,0-1.162-6.906c-1.437-5.543-3.17-5.7-6-5.551-12.794,1.037-23.843,3.275-34.984,5.357-7.81,1.484-79,14.781-87.909,16.588-3.545.759-6.726.43-7.809,3.679-.646,2.13-.13,4.453.257,6.583,1.014,5.069,1.37,10.892,7.229,42.083,3.486,18.657,7.1,35.74,8.714,42.729.885,3.734,1.47,8.532,4.454,10.52,3.016,1.961,8.39.222,15.813-1.161,15.619-2.84,103.723-18.4,106.5-18.976,3.042-.666,7.121-1.172,8.778-3.937.839-1.421.581-3.1.388-4.712C157.941,127.735,154.7,117.471,156.792,134.818Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M53.65,68.918c7.682-1.478,31.691-5.744,36.016-6.519.581-.129.322-.968-.258-.839-18.532,2.625-59.751,11.132-59.9,11.424-.064.065,2.13,14.007,2.711,14.91.663.852-2,.936,40.857-7.1,4.324-.839,8.778-1.613,13.038-2.711a.2.2,0,0,0-.065-.387c-8.726,1.081-14.984,2.647-37.565,6.777-5.163.968-10.52,1.614-15.619,3.034.064-.065-2.259-12.909-2.582-13.942C38.159,72.533,45.906,70.409,53.65,68.918Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M34.674,75.373c-.065-.323-.646-.259-.581.064.387,3.034.839,6.132,1.485,9.165.129.646,1.1.388.968-.258C35.969,80.306,34.9,76.725,34.674,75.373Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M25.9,106.741c3.148-.714,58.025-10.972,58.413-11.037.451-.064-.969-7.939-1.42-7.874-8.649,1.613-58.284,10.843-58.478,11.3C24.153,99.577,25.377,106.859,25.9,106.741Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M92.247,133.14c.452-.065-.968-7.94-1.42-7.874-8.649,1.613-58.283,10.843-58.477,11.3-.193.387.968,7.68,1.549,7.616C37,143.532,91.925,133.205,92.247,133.14Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M149.886,95.059c-.623,1.284-5.409,10.528-5.745,11.166a14.456,14.456,0,0,0-1.678,3.485c-.388,2.388,4.453.775,5.421.452a19.053,19.053,0,0,0,10.909-8.262c-.259.452,3.291,2.066,3.679,2.259,2.9,1.227,6.906,2.324,9.875.646.129-.065.064-.323-.064-.323-3.4.189-5.72.422-10.2-1.614a12.151,12.151,0,0,1-2.968-1.678.368.368,0,0,0-.646-.064,20.742,20.742,0,0,1-10.714,8.068c-.775.258-3.292,1.355-4.067.774-.516-.387.71-1.936.9-2.259,1.061-1.877,6.513-13.056,7.552-14.2a5.072,5.072,0,0,1,3.162-1.227c4.97-.71,9.811-1.743,14.845-1.872,6.532,0,5.389.491,8.65.775,1.42.129,2.581-.71,3.808-1.291.645-.323,3.227-1.807,3.872-2.194a.174.174,0,0,0-.129-.323c-5.385,2.154-6.087,3.044-7.487,2.9-2.711-.258-5.357-.839-8.132-.839-5.358,0-10.521,1.1-15.814,1.872C152.3,91.664,151.231,92.286,149.886,95.059Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M165.7,109.387a.261.261,0,1,0-.452-.257c-3.517,5.6-11.569,10.975-17.169,7.615a7.288,7.288,0,0,1-3.162-4.324c-.065-.194-.388-.129-.323.065,0,3.709,3.625,6.264,7.423,6.389a11.648,11.648,0,0,0,5.68-1.484A19.751,19.751,0,0,0,165.7,109.387Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M155.049,123.329c5.008,1.719,10.608-1.624,13.748-5.938a7.233,7.233,0,0,0,1.291-2.13c.064-.129-.129-.323-.259-.193-1.723,1.115-2.662,3.476-5.873,5.614-5.17,3.5-10.064,2.014-11.231,0a.175.175,0,0,0-.323.13A3.659,3.659,0,0,0,155.049,123.329Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M172.67,123.264a9.582,9.582,0,0,0,2.13-4.195c.064-.387-.452-.71-.646-.258-1.266,2.532-2.243,4.3-4.518,6a11.377,11.377,0,0,1-6.971,2.518,4.871,4.871,0,0,1-3.679-1.485c-.129-.194-.451.065-.322.258a3.26,3.26,0,0,0,1.291,1.356,5.932,5.932,0,0,0,1.871.71C164.718,128.72,169.47,127.3,172.67,123.264Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M177.64,122.168a.366.366,0,0,0-.646,0c-.452.9-.387,1.936-.968,2.839a9.316,9.316,0,0,1-2.259,2.517c-1.484,1.162-5.486,3.938-7.358,2.13-.194-.193-.516.065-.387.259,1.355,2,4,.839,5.68,0C174.365,128.638,179.1,124.594,177.64,122.168Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M180.092,125.459c-.256-.453-1.807-1.614-1.871-1.291a10.573,10.573,0,0,1-5.68,5.745.468.468,0,0,0-.194.774,4.814,4.814,0,0,0,5.486.968A4.557,4.557,0,0,0,180.092,125.459Z"
                                            fill="#2563eb"
                                        ></path>
                                        <path
                                            d="M194.551,104.224a24.612,24.612,0,0,0-5.293,1.871c-3.47,1.446-5.669,1.9-6,3.744-.388,2.2-.129,4.132-1.356,6.132a10.669,10.669,0,0,1-3.291,3.292c-.193.129-.065.517.194.451a8.569,8.569,0,0,0,5.292-7.228c.13-.9-.258-2.259.387-3.034a4.472,4.472,0,0,1,2.066-1.033c0-.379,5.624-1.835,8.261-3.485A.384.384,0,0,0,194.551,104.224Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M102.187,74.985c3.34-.517,4.454-.514,4.454-1.1a15.559,15.559,0,0,1,1.162-5.357,13.39,13.39,0,0,1,3.163-4.454.469.469,0,0,0-.194-.774,14.679,14.679,0,0,0-3.744-.646,9.4,9.4,0,0,0-3.744.646c-.193.064-.063.258.065.258a11.639,11.639,0,0,1,6.39.323,12.638,12.638,0,0,0-2.84,4.26,13.271,13.271,0,0,0-1.033,5.292,25.618,25.618,0,0,0-6.648,1.42,15.462,15.462,0,0,1,.517-5.163,21.292,21.292,0,0,1,2.259-4.906c.129-.193-.13-.387-.323-.258A12.5,12.5,0,0,0,98.9,69.37a14.926,14.926,0,0,0-.645,6.067C98.315,76.47,101.222,75.135,102.187,74.985Z"
                                            fill="#2563eb"
                                        ></path>
                                        <path
                                            d="M119.485,96.221c-2.047-.863-3.749-.158-7.874-1.808a24.081,24.081,0,0,1-10-7.939c-.065-.129-.259,0-.194.129a11.017,11.017,0,0,0,1.033,1.937,19.754,19.754,0,0,0,12.327,7.874c1.356.258,3.421.71,4.712,0C119.55,96.414,119.55,96.285,119.485,96.221Z"
                                            fill="#2563eb"
                                        ></path>
                                        <path
                                            d="M107.286,80.407c1.151-.665-.322-2.452-.774-4.195-.065-.323-.968-.065-1.227,0-.387.064-5.679,1.613-7.293,2.9a9.069,9.069,0,0,0,1.872,3.615c.193.193.387-.194.257-.387a26.074,26.074,0,0,1-1.548-2.97A25.515,25.515,0,0,1,106,76.986a17.806,17.806,0,0,0,.774,2.84,43.878,43.878,0,0,0-4.97,2.324,15.481,15.481,0,0,0-1.679,1.162c-.193.193-.064.516.2.387C102.9,82.279,106.961,80.6,107.286,80.407Z"
                                            fill="#2563eb"
                                        ></path>
                                        <path
                                            d="M101.929,85.958c-.193.194.065.645.323.452a62.393,62.393,0,0,1,6.454-3.808c2.711,4.066,8.2,6.067,12.845,6.583.451.065.516-.645.129-.774-4.777-1.227-8.972-2.905-12.716-6.2C108.964,81.556,106.3,81.374,101.929,85.958Z"
                                            fill="#2563eb"
                                        ></path>
                                        <path
                                            d="M121.68,89.9a18.668,18.668,0,0,0-1.743,3.615c-.129.451-.581,1.355-.452,1.871.065.258.517.9.775.323.839-1.807,1.1-3.808,1.807-5.615C122.261,89.83,121.873,89.7,121.68,89.9Z"
                                            fill="#2563eb"
                                        ></path>
                                        <path
                                            d="M140.914,84.409a.467.467,0,0,0,.9-.129c-.322-3.421-1.1-6.777-1.678-10.134-2.056-11.883-2.224-13.434-2.969-15.749,0-.174-.157-.267-.322-.322a22.225,22.225,0,0,0-5.422.645c-2.468.441-16.938,2.3-19.428,2.453-1.032.129-2,.258-2.968.452a.333.333,0,0,0-.259.129c-.129.129,0,.322.129.451a1.252,1.252,0,0,0,.516.065c8.455-.452,16.782-1.743,25.172-2.969.194,0,2.2-.258,2.2-.452.108,2.616,2.707,17.313,3.162,19.88A42.04,42.04,0,0,0,140.914,84.409Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M135.493,60.85a.461.461,0,0,0-.582-.323c-1.237.207-5.227.634-5.227.969,0,.387.451,4.389.58,5.228a.507.507,0,0,0,.645.452c1.614-.259,3.293-.388,4.906-.581a.51.51,0,0,0,.517-.517C136.332,66.014,135.7,61.75,135.493,60.85Zm-5.035,1.1a39.013,39.013,0,0,0,4.195-.451c.129.71.517,3.937.517,4.2-1.356.065-2.647.258-4,.452C131.1,65.433,130.587,62.206,130.458,61.947Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M132.394,64.013c-.129.322-.58,1.161-.065,1.291.323.129.71-.517.839-.775.066,0,1.1,1.033,1.485.516.382-.573-.564-.913-1.226-1.355,0,0,.387-1.291.387-1.42a.33.33,0,0,0-.58-.258,10.291,10.291,0,0,0-.646,1.162,9.187,9.187,0,0,0-1.227-.581c-.261-.264-.717.222-.386.387A16.5,16.5,0,0,1,132.394,64.013Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M126.521,68.466c-4.138.507-14.67,1.76-18.783,2.582a.231.231,0,0,0,.065.452c3.275-.136,16.423-1.741,18.459-2,0,.194,1.1,6.906,1.291,8.326-1.42.13-7.358.9-8.907,1.1s-7.81.968-8.972,1.678a.22.22,0,0,0,.065.387c1.1.194,17.75-2.323,18.589-2.517.452-.129.258-1.1.193-1.42C128.392,76.6,127.166,68.337,126.521,68.466Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M129.1,81.956c-1.292.032-2.581.323-3.808.452a94.481,94.481,0,0,0-11.231,1.678.166.166,0,0,0,.065.323c.645,0,1.291.064,1.936,0,4.389-.323,8.843-.775,13.232-1.485C129.748,82.86,129.619,81.943,129.1,81.956Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M101.671,120.1c-.387-2.84-.9-5.68-1.355-8.52a72.24,72.24,0,0,0-1.808-9.036.165.165,0,0,0-.322.064,72.763,72.763,0,0,0,1.1,9.1c.452,3.034.839,6.132,1.42,9.1.064.452.774.452.968.129,4.038-.327,36.688-5.728,36.79-5.745a.429.429,0,0,0,.452-.516c-.452-3.808-1.291-7.552-2-11.3-.129-.581-.968-.323-.9.258.645,3.55,1.355,7.035,1.742,10.585C137.751,114.563,106.937,119.049,101.671,120.1Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M108.255,107.709a.278.278,0,0,0-.517.129c-.194,1.937.581,4.131.9,6.068a.644.644,0,0,0,.517.387c5.615-.71,19.945-2.905,21.494-3.163.387-.064.322-.387.322-.71a16.525,16.525,0,0,0-.9-4.324c-.13-.194-.517-.194-.517.064a12.356,12.356,0,0,0,.258,4.067c0,.064-20.266,3.033-20.266,2.969A37.971,37.971,0,0,0,108.255,107.709Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M116.258,109.969c1.941-.163,7.32-.825,7.422-.839.582-.066,1.55,0,1.937-.517a.364.364,0,0,0-.064-.581c-.71-.452-2.259.129-2.969.258-4.642.706-9.243.965-10.457,1.42-.193.065-.129.323.064.388A12.991,12.991,0,0,0,116.258,109.969Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M27.9,114.293c8.363-.61,11.132-2.631,37.177-6.39,3.486-.516,7.036-.9,10.521-1.613.452-.065.387-.84-.129-.84-9.3.76-44.811,7.2-47.7,8.2C27.445,113.712,27.445,114.358,27.9,114.293Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M29.7,120.554c3.54-.414,7.164-1.291,10.65-1.936,7.805-1.563,12.6-2.29,16.588-3.486.258-.064.193-.516-.065-.452-.452.065-.839.065-1.291.129-4.691.671-25.417,4.829-25.947,4.97C29.188,119.908,29.251,120.607,29.7,120.554Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M71.142,144.048c-1.643.246-32.724,6.2-35.113,6.842-.387.129-.322.839.13.774,2.194-.258,4.324-.774,6.454-1.162,38.573-7.526,24.171-4.551,31.691-6.325.258-.064.194-.517-.064-.452C73.078,143.854,72.108,143.9,71.142,144.048Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M30.479,127.073c6.42-.642,33.117-6.161,39.565-7.81.452-.129,1.1-1.033.259-.968-2.582.064-5.229,1.1-7.746,1.613-2.582.581-18.2,3.808-23.429,4.777a79.955,79.955,0,0,0-8.714,1.742C30.091,126.621,30.156,127.073,30.479,127.073Z"
                                            fill="#191919"
                                        ></path>
                                        <path
                                            d="M26.929,79.31c-1.921-3.392-7.151.227-6.261,3.292.682,2.159,3.621,2.445,5.486.581,0,0,1.485.9,1.807,1.1.839.452,1.485-.387.581-.968-.322-.194-1.678-.9-1.742-.969A3.229,3.229,0,0,0,26.929,79.31ZM23.96,83.247c-2.461.617-2.776-2-1.356-3.421.71-.645,2.388-1.355,3.227-.387C26.993,80.859,25.311,82.908,23.96,83.247Z"
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
                                You are always in control and informed
                            </h3>
                            <p className="mt-3 text-lg text-gray-500">
                                You can choose to be involved by providing us
                                content ideas and suggestions or you can leave
                                all SEO efforts to our team. Regardless of your
                                involvement level, our SEO team will always
                                provide consistent reporting to ensure that
                                you're informed on current developments.
                            </p>

                            <dl className="mt-10 space-y-10">
                                {thirdFeatures.map((item) => (
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
                            className="mt-10 -mx-4 relative lg:mt-0 justify-self-center"
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
                            <svg
                                className="h-120 w-120"
                                viewBox="0 0 140 140"
                                height="140"
                                width="140"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g transform="matrix(0.7,0,0,0.7,0,0)">
                                    <path
                                        d="M101.6,112.59c-.914,1.119-3.534,3.474-3.739,3.816a.418.418,0,0,0,.458.61,18.9,18.9,0,0,0,3.892-3.434,9.194,9.194,0,0,0,2.365-3.968c.94-3.172-.2-7.978-3.434-9.309-.458-.229-.915.458-.458.763a6.616,6.616,0,0,1,2.976,5.265C103.875,108.713,103.516,110.241,101.6,112.59Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M100.225,119.993c-.229.228,0,.534.305.534a7.725,7.725,0,0,0,3.129-1.832,11.242,11.242,0,0,0,3.815-12.819.4.4,0,0,0-.763.228C108.46,116.251,101.771,118.134,100.225,119.993Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M103.277,122.205c1.036,0,3.563-1.845,3.663-1.908,3.073-2.414,5.464-6.088,4.884-9.92-.077-.458-.763-.3-.763.077a11.508,11.508,0,0,1-4.884,8.928c-2.5,1.788-3.151,2.158-3.205,2.212C102.9,121.9,102.972,122.205,103.277,122.205Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M112.129,119.916a9.863,9.863,0,0,0,2.137-5.037c.075-.534-.688-.534-.916-.152-.536,1.181-.716,2.931-2.061,4.5-1.985,2.265-3.332,2.483-4.121,3.662-.076.153,0,.381.153.306C108.686,123.2,111.355,121.022,112.129,119.916Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M133.113,39.945c2.924,2.082,6.132,2.364,9.616,1.6.076,0,1.526,2.976,1.679,3.281a32.228,32.228,0,0,0,4.883,6.792,9.948,9.948,0,0,0,3.511,2.9,2.185,2.185,0,0,0,1.83,0c1.526-.763,1.069-3.357,2.137-4.654a3.253,3.253,0,0,1,2.823-1.069c2.137.229,3.13,2.519,3.587,4.274a8.728,8.728,0,0,1,.153,5.036c-.687,1.755-2.442,2.442-4.121,2.747-.382.076-.305.611,0,.687a3.883,3.883,0,0,0,4.044-1.221,2.4,2.4,0,0,0,.993,1.908c.387,2.013,4.589,16.421,5.646,18.008-6.27,2.822-6.919,3.066-14.5,6.945-.229-1.756-2.593-5.876-2.975-6.258a8.712,8.712,0,0,0,3.816-6.868c0-.534-.688-.457-.764,0a8.023,8.023,0,0,1-11.446,6.41c-2.671-1.3-4.045-4.044-5.266-6.562-2.7-5.7-2.872-9.345-4.425-10.454-1.222-.916-2.748-1.069-3.511-2.519a29.6,29.6,0,0,0,2.519-4.883c1.145-2.747,1.145-5.952.915-8.928a13.2,13.2,0,0,1,.077-5.189.206.206,0,0,0-.381-.153c-1.327,2.65-.688,4.17-.688,7.02a17.86,17.86,0,0,1-3.2,10.912c-.229.382-.686.84-.61,1.3a3.68,3.68,0,0,0,1.755,2.213c.763.458,1.831.61,2.442,1.3a8.618,8.618,0,0,1,1.3,2.976c1.143,3.544,3.55,10.237,6.715,12.743a8.91,8.91,0,0,0,9.92.992c.382-.228,2.518,5.8,2.748,6.334-.153.076-3.052,1.6-4.427,2.366a.5.5,0,0,0-.076.839,14.257,14.257,0,0,1,3.663,4.35c-17.38,7.244-24.25,29.759-33.729,40.673-6.679,7.944-17.155,13.781-26.86,17.016a108.556,108.556,0,0,1-14.575,3.815c-.153,0-.153.305.076.305,17.228-1.987,31.571-9.461,39.986-18.008,9.718-9.719,15.5-27.86,27.4-37.7,5.417-4.5,12.514-7.707,19.687-5.952.84.229,1.68.458,2.518.763.382.153.688-.458.306-.686-4.1-2.417-9.506-2.009-14.117-.382a10.913,10.913,0,0,0-3.129-4.273c2.1-1.173,18.426-9.424,22.969-10.76.463,6.938.767,11.927,1.145,14.422a.5.5,0,0,0,.61.382c23.255,26.151,15.35,58.725,18.543,87.755.077.458.687.458.687,0-.842-16.341.447-39.475-2.671-55.476-2.014-11.072-6.8-23.741-14.727-31.668-.382-.382-.84-.84-1.3-1.221v-.077c-.715-5.877-.965-11.355-1.6-14.651a.58.58,0,0,0-.61-.916,34.121,34.121,0,0,0-3.587,1.3,40.008,40.008,0,0,0-1.526-4.579c-.458-1.3-3.891-11.751-4.12-12.515,1.908.764,3.816-.3,5.265-1.6,6.8-6.268,9.435-16.756,4.884-24.342,8.771,3.654,18.357-4.208,15.186-14.728a19.755,19.755,0,0,0-8.776-11.294c-9.971-5.5-20.272,1.354-18.772,8.852-.076-.381-1.679-.915-1.984-1.068a13.937,13.937,0,0,0-11.37,1.068,28.426,28.426,0,0,0-11.065-.152c-5.189,1.144-10.073,5.112-10.377,10.759A12.542,12.542,0,0,0,133.113,39.945Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M121.667,40.1c-2.509-3.973-7.173-8.165-12.209-8.088a9.911,9.911,0,0,0-8.012,4.578c-3.358,4.96-3.129,12.057-1.832,17.7,1.6,7.02,6.486,18.466,14.957,19a9.653,9.653,0,0,0,7.173-2.748C129.6,63.143,126.721,48.1,121.667,40.1Zm2.595,24.877c-2.424,6.878-9.891,7.563-15.872-1.908-3.739-5.8-6.563-13.659-5.266-20.679.992-5.037,5.342-10.073,10.836-7.86C124.529,38.625,126.93,57.4,124.262,64.974Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M122.507,83.822c1.234,1.053,3.2.763,4.578.3.611-.152-3.2-8.317-4.807-11.98a.413.413,0,0,0-.611-.153,11.631,11.631,0,0,1-3.51,1.755C117.851,73.9,122.053,83.435,122.507,83.822Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M14.3,96.108c6.335,22.992,9.548,30.385,12.362,37.925,1.45,3.968,2.9,7.936,4.731,11.751,2.906,6.458,6.142,7.184,10.76,6.03,3.434-.841,6.868-1.756,10.225-2.671.229-.077.153-.382-.076-.306-3.51.763-7.02,1.526-10.454,2.289-1.679.382-3.51.688-5.113-.076-2.588-1.151-4.051-4.289-5.113-6.715-1.822-4.142-8.014-21.143-8.546-22.74-4.4-12.9-15.453-51.018-16.941-66.389-.229-2.594-.534-5.57.992-7.859C8.655,44.981,11.4,43.989,13.844,43c28.869-11.649,78.977-24.45,102.634-27.929,5.153-.711,6.942-.845,9.386,4.044a11.765,11.765,0,0,1,1.3,4.5.306.306,0,0,0,.61,0,12.721,12.721,0,0,0-2.9-8.165,5.151,5.151,0,0,0-3.586-1.832C114.419,12.76,48.761,27.451,12.852,42.31c-2.519,1.068-5.113,2.213-6.563,4.579-1.526,2.365-1.374,5.418-1.145,8.088C5.746,64.608,11.688,86.8,14.3,96.108Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M22.009,48.8a13.592,13.592,0,0,0-3.358,1.6c-2.147,1.652-2.076,3.948-1.908,6.639.894,14.3,6.821,37.149,11.218,48.456a.4.4,0,0,0,.763-.229C25.863,95.32,19.1,75.581,17.735,57.8c-.152-2.289-.534-5.189,1.6-6.715a11.524,11.524,0,0,1,3.434-1.526c1.373-.535,2.747-.992,4.12-1.527,45.785-16.419,76.913-20.888,83.634-22.511,2.36-.615,6.392-1.486,7.479.687a71.025,71.025,0,0,1,2.06,8.394c.076.229.534.229.458-.076a62.1,62.1,0,0,0-1.145-6.563,10.513,10.513,0,0,0-.61-2.06c-.763-1.755-2.747-2.06-4.5-1.984a32.177,32.177,0,0,0-5.418.992C105.254,25.733,65.944,32.172,22.009,48.8Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M68.557,28.041c.381-.077.229-.611-.076-.611a2.348,2.348,0,0,0-1.832,3.815,2.6,2.6,0,0,0,2.289.993A2.746,2.746,0,0,0,71,28.041a.5.5,0,0,0-.687-.153c-.534.3,0,1.221,0,1.679a1.78,1.78,0,0,1-.992,1.6A1.618,1.618,0,1,1,68.557,28.041Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M44.214,134.8c-1.6.534-3.357,1.144-4.807,0a8.374,8.374,0,0,1-2.213-3.51c-4.4-11.227.356.529-4.35-10.759a.171.171,0,0,0-.3.152c.534,1.6.992,3.2,1.526,4.808s1.145,3.2,1.679,4.807c.763,2.136,1.6,4.883,3.892,5.876a6.551,6.551,0,0,0,4.807-.306C45.13,135.636,44.9,134.567,44.214,134.8Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M140.134,70.926c1.832-.572,4.921-2.938,6.257-4.273.534-.458-.229-1.221-.763-.763-3.153,2.89-4.469,3.358-5.8,4.578C139.6,70.7,139.829,71,140.134,70.926Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M169.971,159.826a.245.245,0,0,0-.153-.459c-.5,0-12.622,2.935-13.812,3.281a73.769,73.769,0,0,0,12.439-10.53.217.217,0,1,0-.305-.305,105.139,105.139,0,0,1-15.97,12.22c-10.894,6.9-29.423,15.927-36.683,18.99C97.7,190.529,76.545,195.5,65.581,179.742c-5.19-7.555-6.716-17.246-5.342-26.174.152-1.144.306-2.213.458-3.358.076-.534-.687-.763-.839-.228-.3,1.144-.611,2.289-.84,3.434a43.71,43.71,0,0,0-.3,10.529c.9,9.164,5.064,18.208,12.591,23.122,15.052,9.817,38.8.177,54.866-7.86.9-.45,24.683-12.184,27.852-15.337C167.478,160.607,169.133,160.3,169.971,159.826Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M77.027,57.877c3.663-1.068,21.214-5.342,21.061-5.952-1.052-4.206-.983-9.786.992-13.736a.473.473,0,0,0-.534-.686c-13.8,2.548-50.488,12.16-73.485,20.3a.433.433,0,0,0-.3.534c1.068,4.044,2.212,8.775,4.273,12.438C29.629,72.273,32.344,70.644,77.027,57.877Z"
                                        fill="#2563eb"
                                    ></path>
                                    <path
                                        d="M115.868,78.862c-.153-1.145-.382-2.289-.534-3.51,0-.229-.305-.306-.534-.306-9.463,1.374-13.736-11.6-15.873-18.466-.076-.3-19.153,5.189-22.892,6.1a.371.371,0,0,0-.229.458c.183.437,4.417,12.835,4.807,14.346.077.229.382.382.535.229.915-.61,4.731-3.434,5.189-2.289A82.072,82.072,0,0,0,92.365,87.1c5.952-2.136,21.443-7.325,23.121-7.86C115.792,79.243,115.944,79.091,115.868,78.862Z"
                                        fill="#2563eb"
                                    ></path>
                                    <path
                                        d="M120.522,45.363c-1.067-3.282-2.365-7.1-5.646-8.7a6.831,6.831,0,0,0-7.859,1.755c-2.672,2.977-2.824,7.326-2.061,11.142C105.032,49.941,120.522,45.515,120.522,45.363Z"
                                        fill="#2563eb"
                                    ></path>
                                    <path
                                        d="M122.736,52.154c.076-.229-.077-.458-.382-.382-2.213.382-14.956,4.045-15.49,4.2a.37.37,0,0,0-.229.458c1.526,4.426,4.731,10.607,10.072,11.37,5.876.84,6.868-7.554,6.639-11.675A30.808,30.808,0,0,0,122.736,52.154Z"
                                        fill="#2563eb"
                                    ></path>
                                    <path
                                        d="M67.412,113.125c.534-.611.076-1.3-.305-1.832-.916-1.526-1.908-2.976-2.824-4.5-.381-.611-.763-1.145-1.526-.839-.687.305-6.562,4.5-6.562,4.5-.153,0-.229.152-.229.305a1.224,1.224,0,0,0,.381.839c.153.306,3.511,4.731,4.35,5.723.076.153.458.153.61.153A50.657,50.657,0,0,0,67.412,113.125Zm-6.105,3.281c-.763-.992-4.425-5.571-4.5-5.647,1.374-.992,5.876-3.815,6.1-3.892,0,0,3.586,5.418,3.663,5.571C66.573,112.438,61.842,115.948,61.307,116.406Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M68.252,128.081a.458.458,0,0,0,.686.381,53.4,53.4,0,0,0,4.96-3.509c.535-.382,1.679-.992,1.527-1.832-.077-.3-3.739-6.258-3.968-6.487-.458-.457-1.221.077-1.679.306-1.679.916-6.41,3.891-6.105,4.579A72.533,72.533,0,0,0,68.252,128.081Zm2.365-10.455,3.587,5.647c-.077.077-5.189,3.816-5.571,4.2-.152-.3-3.739-5.647-3.892-6.028C64.894,121.366,70.236,117.779,70.617,117.626Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M62.834,108.241c-.382.229-.382.763-.458,1.144a19.321,19.321,0,0,0-.306,3.282,2.909,2.909,0,0,0-1.6-.077c-.229.077-.305.458-.076.534.3.154,1.678.458,1.984.611a.489.489,0,0,0,.61-.457,25.655,25.655,0,0,1,.382-3.816c.076-.381.229-.763.076-1.069A.422.422,0,0,0,62.834,108.241Z"
                                        fill="#2563eb"
                                    ></path>
                                    <path
                                        d="M70.846,124.8a.522.522,0,0,0,.61-.458c-.228-1.756-.381-3.586-.61-5.342-.076-.305-.382-.992-.763-.611s.218,5.331.305,5.419a8.371,8.371,0,0,1-1.3-.382.293.293,0,0,0-.3.458A6.219,6.219,0,0,0,70.846,124.8Z"
                                        fill="#2563eb"
                                    ></path>
                                    <path
                                        d="M71.914,132.506c0,.077,3.663,4.96,4.2,5.724.458.534.916,1.6,1.755,1.144a46.156,46.156,0,0,0,6.487-4.807c.229-.534-.306-.992-.458-1.22s-3.434-4.579-4.35-5.648a1.128,1.128,0,0,0-1.373-.457c-1.145.457-5.189,3.663-6.334,4.426C71.533,131.9,71.762,132.2,71.914,132.506Zm6.716-4.348s4.654,5.875,4.96,6.1c-2.061,1.374-4.045,2.823-6.029,4.2,0,0-4.578-6.257-4.655-6.41C74.051,131.362,78.477,128.158,78.63,128.158Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M75.653,133.881c.763.076,1.45.152,2.213.229,0,0,.382,2.364.458,2.518.076.381.839.457.763,0-.076-.992-.229-2.443-.229-2.443a5.682,5.682,0,0,0,2.366.154.4.4,0,0,0,.076-.611c-.3-.381-2.213-.534-2.671-.61-.152-.687-.381-1.3-.534-1.985a.234.234,0,0,0-.458.077c0,.458.153,1.755.153,1.908a18.655,18.655,0,0,0-2.06.076C75.272,133.27,75.195,133.8,75.653,133.881Z"
                                        fill="#2563eb"
                                    ></path>
                                    <path
                                        d="M80.232,143.8c.687,1.145,5.189,7.1,5.342,7.1.252,0,6.789-4.515,7.1-4.885s.153-.686-.152-.992c-.306-.381-5.189-6.714-5.647-6.562a48.333,48.333,0,0,0-6.715,4.96C80.079,143.419,80.079,143.648,80.232,143.8Zm6.715-4.427c.076.077,4.426,5.953,4.579,6.105-.306.23-5.189,3.586-5.876,4.121-.382-.457-3.892-5.113-4.731-6.029C82.292,142.656,86.871,139.374,86.947,139.374Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M86.794,95.65c-.763-.077-1.6.687-2.213,1.068-8.358,5.015-12.249,7.271-15.872,9.844a.308.308,0,0,0,.3.534c3.475-1.78,16.962-10,16.1-9.462.61-.382,1.678-.763,1.984-1.45C87.176,95.879,87.023,95.65,86.794,95.65Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M86.718,110.454c-.916.534-1.679,1.145-2.595,1.755s-1.755,1.145-2.67,1.755c-1.843,1.173-4.487,2.581-5.266,3.281a.32.32,0,0,0,.306.534c1.547-.357,9.542-5.568,10.759-6.562C87.71,110.912,87.176,110.225,86.718,110.454Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M89.618,109.309c.1-.05,6.849-4.255,7.1-4.5.229-.305-.153-.687-.458-.61a37.042,37.042,0,0,0-7.021,4.654C88.931,109.08,89.313,109.462,89.618,109.309Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M83.437,128.768c-.3.232.076.763.381.534,3.563-1.918,7.7-5.1,10-6.41a16.409,16.409,0,0,0,1.45-.992.438.438,0,0,0-.534-.687C94.538,121.3,86.244,126.618,83.437,128.768Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M95.112,138.917c6.792-5.283,8.628-6.456,10.53-7.936,1.769-1.375,3.587-2.45,4.35-3.129.382-.381-.076-.992-.61-.763-1.242.621-15.669,11.465-16.941,12.9a.353.353,0,0,0,.458.534A16.53,16.53,0,0,0,95.112,138.917Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M129.069,85.2c1.371-.782,1.373-1.793.992-1.6a3.465,3.465,0,0,0-1.449.61c-2.29,1.374-5.266,1.832-7.478,0a6.694,6.694,0,0,1-1.756-2.365c-.076-.229-.382-.229-.382.076C119,86.326,125.388,87.825,129.069,85.2Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M121.9,88.324a6.154,6.154,0,0,0,4.96.764c1.449-.306,3.662-1.221,4.5-2.519.229-.305-.153-.686-.457-.61a7.407,7.407,0,0,0-1.985,1.145,7.968,7.968,0,0,1-6.715.61A.341.341,0,0,0,121.9,88.324Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M124.033,91.529c2.84,1.182,7.1.382,8.623-2.442a.473.473,0,0,0-.763-.534,13.8,13.8,0,0,1-1.6,1.374,7.8,7.8,0,0,1-6.1.992A.318.318,0,0,0,124.033,91.529Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M125.635,94.658c2.671,1.068,6.105-.305,8.013-2.289.305-.306.686-.687.534-1.145a.535.535,0,0,0-.382-.305c-.906-.114-1.748,1.791-3.663,2.365a12.426,12.426,0,0,1-4.425.611A.415.415,0,0,0,125.635,94.658Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M138.913,88.248c.3.458,1.068.153.84-.381-3.168-7.822-11.959-7.228-12.973-14.346a.317.317,0,0,0-.61,0,4.507,4.507,0,0,0,0,1.755,8.671,8.671,0,0,0,3.2,4.5C132.519,82.272,136.033,83.351,138.913,88.248Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M141.507,49.712c.23-.076.077-.458-.152-.381-1.08.18-4.508.838-4.96,1.831-.077.229-.077.611.229.611a26.536,26.536,0,0,0,5.342-.458.556.556,0,0,0-.306-1.069c-.763.153-1.526.306-2.212.382A15.593,15.593,0,0,0,141.507,49.712Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M34.6,84.509c1.239,4.192,5.571,7.326,10.226,6.105,8.546-2.213,10-15.262.534-17.246C39.021,72.079,32.694,78.06,34.6,84.509Z"
                                        fill="#2563eb"
                                    ></path>
                                    <path
                                        d="M68.1,77.565c.229-.153,1.907,1.831,2.518,2.594a31.511,31.511,0,0,1,2.671-1.678,8.269,8.269,0,0,0-5.647-12.21,9.375,9.375,0,0,0-10.836,6.563,8.843,8.843,0,0,0,3.968,9.844C63.139,80.922,65.581,79.244,68.1,77.565Z"
                                        fill="#2563eb"
                                    ></path>
                                    <path
                                        d="M48.03,105.723c-1.2,1.2-2.056,1.534-1.374,2.67C49.42,114.172,73.415,148.08,81,154.713a.218.218,0,1,0,.3-.306C69.876,141.2,52.69,116.692,47.953,108.7c-1.3-2.213,3.968-5.189,5.495-6.487a368.069,368.069,0,0,1,31.668-23.2c4.713,10.128,13.435,23.449,17.093,28.386.381.535,1.3.077.915-.534-4.455-7.185-11.536-16.262-17.245-29a.545.545,0,0,0-.763-.229C71.976,86.4,54.054,100.344,48.03,105.723Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M77.485,79.473a.308.308,0,0,0-.3-.535,183.008,183.008,0,0,0-15.872,9.921c-.611.381-1.145.839-1.679,1.22a102.6,102.6,0,0,0-19.688,17.857.577.577,0,0,0-.076.61c6.5,14.306,24.972,34.423,32.2,38.917.153.077.382-.152.229-.305-3.857-4-6.231-5.572-13.583-13.659-6.184-6.882-14.045-16.76-17.932-25.182C54.491,92.234,69.241,84.968,77.485,79.473Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M66.039,145.785c.3.152.686.229.915.381a.171.171,0,0,0,.153-.306,5.83,5.83,0,0,1-.839-.609,76.073,76.073,0,0,1-6.716-5.114c-10.887-8.931-26.722-27.264-27.394-28.616,1.178-1.761,21.307-21.4,32.965-30.141.229-.152,0-.457-.229-.3-6.778,4.46-11.969,9.07-18.085,14.728-3.045,2.8-12.851,12.017-15.491,15.185a.8.8,0,0,0-.076.992c2.333,3.606,13.438,15.5,16.941,19C52.52,134.975,60.3,142.916,66.039,145.785Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M120.446,130.98a.386.386,0,0,0,.535-.533c-.073-.139-7.771-9.135-7.86-9.234-.153-.153-.382.077-.3.229C113.935,123.682,118.49,129.863,120.446,130.98Z"
                                        fill="#191919"
                                    ></path>
                                    <path
                                        d="M128.383,96.642a29.24,29.24,0,0,0,3.357,6.41c1.6,1.6,3.74.153,3.74-1.832,0-2.136-1.222-4.425-1.908-6.409a.537.537,0,0,0-.763-.306,8.648,8.648,0,0,1-4.122,1.221C128.23,95.65,128.233,96.107,128.383,96.642Z"
                                        fill="#191919"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-24 px-4  sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
                        Pricing plans for teams of all sizes
                    </h2>
                    <p className="mt-6 max-w-2xl text-xl text-gray-500">
                        Choose an affordable plan that's packed with the best
                        features for engaging your audience, creating customer
                        loyalty, and driving sales.
                    </p>

                    {/* Tiers */}
                    <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                        {pricing.tiers.map((tier) => (
                            <div
                                key={tier.title}
                                className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
                            >
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {tier.title}
                                    </h3>
                                    {tier.mostPopular ? (
                                        <p className="absolute top-0 py-1.5 px-4 bg-blue-600 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                                            Most popular
                                        </p>
                                    ) : null}
                                    <p className="mt-4 flex items-baseline text-gray-900">
                                        <span className="text-5xl font-extrabold tracking-tight">
                                            ${tier.price}
                                        </span>
                                        <span className="ml-1 text-xl font-semibold">
                                            {tier.frequency}
                                        </span>
                                    </p>
                                    <p className="mt-6 text-gray-500">
                                        {tier.description}
                                    </p>

                                    {/* Feature list */}
                                    <ul role="list" className="mt-6 space-y-6">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex">
                                                <CheckIcon
                                                    className="flex-shrink-0 w-6 h-6 text-blue-500"
                                                    aria-hidden="true"
                                                />
                                                <span className="ml-3 text-gray-500">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href="#"
                                    className={classNames(
                                        tier.mostPopular
                                            ? "bg-blue-600 text-white hover:bg-blue-600"
                                            : "bg-blue-100 text-blue-700 hover:bg-blue-200",
                                        "mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                                    )}
                                >
                                    {tier.cta}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Testimonials />
            <ContactForm />
            <FAQSDark faqs={faqs} />
            <CTASimple />
        </>
    );
}
