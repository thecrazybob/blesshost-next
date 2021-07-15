import Image from "next/image";

const metrics = [
    {
        id: 1,
        stat: "1K+",
        emphasis: "Websites",
        rest: "that we are currently hosting on our servers.",
    },
    {
        id: 2,
        stat: "1K+",
        emphasis: "Clients",
        rest: "that trust us as their online solutions provider.",
    },
    {
        id: 3,
        stat: "90%",
        emphasis: "Tickets",
        rest: "are responded to within 2 hours.",
    },
    {
        id: 4,
        stat: "10M+",
        emphasis: "People",
        rest: "have seen our work.",
    },
];

export default function Stats() {
    return (
        <div className="relative bg-gray-900">
            <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
                <div className="h-full w-full xl:grid xl:grid-cols-2">
                    <div className="h-full xl:relative xl:col-start-2">
                        <Image
                            layout="fill"
                            className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                            alt="People working on laptops"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
                <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                    <h2 className="text-sm font-semibold tracking-wide uppercase">
                        <span className="bg-gradient-to-r from-blue-300 to-blue-300 bg-clip-text text-transparent">
                            BlessHost in Numbers
                        </span>
                    </h2>
                    <p className="mt-3 text-3xl font-extrabold text-white">
                        See how BlessHost differs from others
                    </p>
                    <p className="mt-5 text-lg text-gray-300">
                        We are not just another web hosting company. Our aim is
                        to maximise customer satisfaction by building and
                        hosting awesome websites and providing top-notch
                        customer service. We love making and maintaing appealing
                        websites that are easy to use as well.
                    </p>
                    <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                        {metrics.map((item) => (
                            <p key={item.id}>
                                <span className="block text-2xl font-bold text-white">
                                    {item.stat}
                                </span>
                                <span className="mt-1 block text-base text-gray-300">
                                    <span className="font-medium text-white">
                                        {item.emphasis}
                                    </span>{" "}
                                    {item.rest}
                                </span>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
