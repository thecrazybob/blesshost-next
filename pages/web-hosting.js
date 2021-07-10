import {
    CalendarIcon,
    CheckIcon,
    PlusIcon,
    UsersIcon,
    ViewBoardsIcon,
    ViewListIcon,
} from "@heroicons/react/outline";

const features = [
    {
        name: "List view",
        description:
            "Nunc a, lacinia sed risus neque, arcu, rhoncus. Id mauris justo facilisis aliquam platea vestibulum condimentum morbi.",
        icon: ViewListIcon,
    },
    {
        name: "Boards",
        description:
            "Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.",
        icon: ViewBoardsIcon,
    },
    {
        name: "Calendar",
        description:
            "Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.",
        icon: CalendarIcon,
    },
    {
        name: "Teams",
        description:
            "Tincidunt sollicitudin interdum nunc sit risus at bibendum vitae. Urna, quam ut sit justo non, consectetur et varius.",
        icon: UsersIcon,
    },
];
const checklist = [
    "Unlimited projects",
    "No per user fees",
    "Unlimited storage",
    "24/7 support",
    "Cancel any time",
    "14 days free",
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
import TitleBar from "../components/title-bar";
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
                                Title
                            </h1>
                            <p className="mt-1 text-4xl font-extrabold text-gray-200 sm:text-5xl sm:tracking-tight lg:text-6xl">
                                Title
                            </p>
                            <p className="max-w-xl mx-auto mt-5 text-xl text-gray-300">
                                Title
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Split brand panel */}
            <div className="relative bg-white">
                <div className="absolute inset-0" aria-hidden="true">
                    <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-blue-600 to-blue-400" />
                </div>
                <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:px-8">
                    <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
                        <div className="max-w-lg mx-auto lg:mx-0">
                            <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
                                Full-featublue
                            </h2>
                            <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                                Everything you need to talk with your customers
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
                                <p className="relative grid grid-cols-2">
                                    <span className="flex flex-col text-center">
                                        <span className="text-5xl font-extrabold text-white tracking-tight">
                                            $99
                                        </span>
                                        <span className="mt-2 text-base font-medium text-blue-100">
                                            Setup fee
                                        </span>
                                        <span className="sr-only">plus</span>
                                    </span>
                                    <span
                                        className="pointer-events-none absolute h-12 w-full flex items-center justify-center"
                                        aria-hidden="true"
                                    >
                                        <PlusIcon
                                            className="h-6 w-6 text-blue-200"
                                            aria-hidden="true"
                                        />
                                    </span>
                                    <span>
                                        <span className="flex flex-col text-center">
                                            <span className="text-5xl font-extrabold text-white tracking-tight">
                                                $4
                                            </span>
                                            <span className="mt-2 text-base font-medium text-blue-100">
                                                Per month
                                            </span>
                                        </span>
                                    </span>
                                </p>
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
                            <a
                                href="#"
                                className="w-full bg-white border border-transparent rounded-md py-4 px-8 flex items-center justify-center text-lg leading-6 font-medium text-blue-700 hover:bg-blue-50 md:px-10"
                            >
                                Get started today
                            </a>
                            <a
                                href="#"
                                className="block text-center text-base font-medium text-blue-100 hover:text-white"
                            >
                                Try Workflow Lite for free
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo cloud */}
            <div className="bg-blue-100 bg-opacity-25">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <h2 className="max-w-md mx-auto text-3xl font-extrabold text-blue-900 text-center lg:max-w-xl lg:text-left">
                            The world's most innovative companies use Workflow
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
                    <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                        <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                            <div className="lg:self-center">
                                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                    <span className="block">
                                        Ready to dive in?
                                    </span>
                                    <span className="block text-blue-900">
                                        Start your free trial today.
                                    </span>
                                </h2>
                                <p className="mt-4 text-lg leading-6 text-blue-50">
                                    Ac euismod vel sit maecenas id pellentesque
                                    eu sed consectetur. Malesuada adipiscing
                                    sagittis vel nulla nec.
                                </p>
                                <a
                                    href="#"
                                    className="mt-8 bg-blue-100 border border-transparent rounded-md shadow py-3 px-6 inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-500"
                                >
                                    Sign up for free
                                </a>
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
            <div className="bg-gradient-to-r from-blue-600 to-blue-400">
                <div className="max-w-2xl mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Boost your productivity.</span>
                        <span className="block text-blue-900">
                            Start using Workflow today.
                        </span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-blue-100">
                        Ac euismod vel sit maecenas id pellentesque eu sed
                        consectetur. Malesuada adipiscing sagittis vel nulla
                        nec.
                    </p>
                    <a
                        href="#"
                        className="mt-8 w-full bg-blue-50 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-blue-700 hover:bg-blue-100 sm:w-auto"
                    >
                        Sign up for free
                    </a>
                </div>
            </div>
        </div>
    );
}
