import ContactForm from "../components/contact-form";
import CTAImage from "../components/cta-image";
import LatestBlog from "../components/latest-blog";
import Stats from "../components/stats";
import GradientFeatures from "../components/features-gradient";
import Testimonials from "../components/testimonials";
import AlternatingFeature from "../components/features-alternating";

import {
    ChatAltIcon,
    DocumentReportIcon,
    HeartIcon,
    InboxIcon,
    PencilAltIcon,
    ReplyIcon,
    TrashIcon,
    UsersIcon,
} from "@heroicons/react/outline";

const features = [
    {
        name: "Based in the UAE",
        description:
            "Headquartered in the heart of UAE so you can either visit us or call us whenever you wish.",
        icon: InboxIcon,
    },
    {
        name: "24/7 Support",
        description:
            "Our support team is always available to assist you via Live chat, WhatsApp, Email and Phone.",
        icon: UsersIcon,
    },
    {
        name: "Expert Team",
        description:
            "The BlessHost family consists of developers who have years of experience with websites.",
        icon: TrashIcon,
    },
    {
        name: "Flexible Services",
        description:
            "Our services are for suitable for everyone, from startups to large-scale corporations.",
        icon: PencilAltIcon,
    },
    {
        name: "Quality with Affordability",
        description:
            "We truly care about your business's online identity so our focus is always to improve your website.",
        icon: DocumentReportIcon,
    },
    {
        name: "Everything-included",
        description:
            "In the rapidly changing world of internet, our aim is to provide you access to the finest tools.",
        icon: ReplyIcon,
    },
    {
        name: "E-commerce",
        description:
            "Getting an impressive online store can be exhausting. Our team can help you get started right away.",
        icon: ChatAltIcon,
    },
    {
        name: "Establish your brand",
        description:
            "Just having a website, or a social page is not enough anymore. Let us help you establish your brand online.",
        icon: HeartIcon,
    },
];

export default function Home() {
    return (
        <>
            <div className="bg-gray-50">
                <div className="mt-8 mb-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="inline">Get a </span>
                            <span className="inline text-blue-600">
                                website
                            </span>
                            <span className="block">for your business</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Are you missing out on online business? Reach a
                            wider customer base, increase sales and improve
                            customer satisfaction with our online website
                            services.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50">
                <div className="relative overflow-hidden">
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
                </div>
                <div className="bg-gray-800">
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                        <h2 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
                            Trusted by over 1,000 companies in the United Arab
                            Emirates
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
            </div>

            <AlternatingFeature></AlternatingFeature>

            <GradientFeatures
                title="Why should you trust BlessHost?"
                description="With years of experience in web hosting, web designing and web development, we know what it takes to get for your business to succeed online. We will make sure you have all the necessary requirements for your online business and that you do not have to worry about maintaining your online identity."
                features={features}
            ></GradientFeatures>

            <Testimonials />

            <LatestBlog />

            <Stats></Stats>

            <ContactForm />

            <CTAImage />
        </>
    );
}
