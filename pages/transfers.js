import Features from "../components/features-tick";
import FAQSDark from "../components/faqs-dark";
import CTASimple from "../components/cta-simple";
import Testimonials from "../components/testimonials";

const features = [
    {
        name: "Invite team members",
        description:
            "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
    },
    {
        name: "Notifications",
        description:
            "Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.",
    },
    {
        name: "List view",
        description:
            "Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.",
    },
    {
        name: "Boards",
        description:
            "Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.",
    },
    {
        name: "Keyboard shortcuts",
        description:
            "Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.",
    },
    {
        name: "Reporting",
        description:
            "Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.",
    },
    {
        name: "Calendars",
        description:
            "Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.",
    },
    {
        name: "Mobile app",
        description:
            "Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.",
    },
];
const faqs = [
    {
        question: "Calendars",
        answer: "Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.",
    },
];
export default function Transfers() {
    return (
        <>
            <main className="lg:relative">
                <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                    <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                            <span className="block xl:inline">
                                Data to enrich your
                            </span>{" "}
                            <span className="block text-blue-600 xl:inline">
                                online business
                            </span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            Anim aute id magna aliqua ad ad non deserunt sunt.
                            Qui irure qui lorem cupidatat commodo. Elit sunt
                            amet fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                                >
                                    Get started
                                </a>
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                                >
                                    Live demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                    <img
                        className="absolute inset-0 w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                        alt=""
                    />
                </div>
            </main>

            <Features features={features} />

            <div className="relative bg-white">
                <div className="lg:absolute lg:inset-0">
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <img
                            className="h-56 w-full object-cover lg:absolute lg:h-full"
                            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                            alt=""
                        />
                    </div>
                </div>
                <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
                    <div className="lg:pr-8">
                        <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                Let's work together
                            </h2>
                            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                                We’d love to hear from you! Send us a message
                                using the form opposite, or email us. We’d love
                                to hear from you! Send us a message using the
                                form opposite, or email us.
                            </p>
                            <form
                                action="#"
                                method="POST"
                                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                            >
                                <div>
                                    <label
                                        htmlFor="first_name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        First name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            autoComplete="given-name"
                                            className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="last_name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Last name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            autoComplete="family-name"
                                            className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="company"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Company
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            autoComplete="organization"
                                            className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Phone
                                        </label>
                                        <span
                                            id="phone_description"
                                            className="text-sm text-gray-500"
                                        >
                                            Optional
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            aria-describedby="phone_description"
                                            className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label
                                            htmlFor="how_can_we_help"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            How can we help you?
                                        </label>
                                        <span
                                            id="how_can_we_help_description"
                                            className="text-sm text-gray-500"
                                        >
                                            Max. 500 characters
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <textarea
                                            id="how_can_we_help"
                                            name="how_can_we_help"
                                            aria-describedby="how_can_we_help_description"
                                            rows={4}
                                            className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <fieldset className="sm:col-span-2">
                                    <legend className="block text-sm font-medium text-gray-700">
                                        Expected budget
                                    </legend>
                                    <div className="mt-4 grid grid-cols-1 gap-y-4">
                                        <div className="flex items-center">
                                            <input
                                                id="budget_under_25k"
                                                name="budget"
                                                defaultValue="under_25k"
                                                type="radio"
                                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                            />
                                            <label
                                                htmlFor="budget_under_25k"
                                                className="ml-3"
                                            >
                                                <span className="block text-sm text-gray-700">
                                                    Less than $25K
                                                </span>
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="budget_25k-50k"
                                                name="budget"
                                                defaultValue="25k-50k"
                                                type="radio"
                                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                            />
                                            <label
                                                htmlFor="budget_25k-50k"
                                                className="ml-3"
                                            >
                                                <span className="block text-sm text-gray-700">
                                                    $25K – $50K
                                                </span>
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="budget_50k-100k"
                                                name="budget"
                                                defaultValue="50k-100k"
                                                type="radio"
                                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                            />
                                            <label
                                                htmlFor="budget_50k-100k"
                                                className="ml-3"
                                            >
                                                <span className="block text-sm text-gray-700">
                                                    $50K – $100K
                                                </span>
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="budget_over_100k"
                                                name="budget"
                                                defaultValue="over_100k"
                                                type="radio"
                                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                            />
                                            <label
                                                htmlFor="budget_over_100k"
                                                className="ml-3"
                                            >
                                                <span className="block text-sm text-gray-700">
                                                    $100K+
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="how_did_you_hear_about_us"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        How did you hear about us?
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="how_did_you_hear_about_us"
                                            id="how_did_you_hear_about_us"
                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="text-right sm:col-span-2">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Testimonials />
            <FAQSDark faqs={faqs} />
            <CTASimple />
        </>
    );
}
