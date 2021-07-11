import Portfolio from "../components/portfolio";
import TitleBar from "../components/title-bar";

const portfolio = [
    {
        title: "Boost your conversion rate",
        href: "#",
        category: { name: "E-commerce", href: "#" },
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",

        imageUrl:
            "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
    {
        title: "How to use search engine optimization to drive sales",
        href: "#",
        category: { name: "Blog", href: "#" },
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",

        imageUrl:
            "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
    {
        title: "Improve your customer experience",
        href: "#",
        category: { name: "Company", href: "#" },
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",

        imageUrl:
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
];
export default function Page() {
    return (
        <>
            <div className="relative bg-indigo-800">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
                        alt=""
                    />
                    <div
                        className="absolute inset-0 bg-indigo-800 mix-blend-multiply"
                        aria-hidden="true"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Get in touch
                    </h1>
                    <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                        Mattis amet hendrerit dolor, quisque lorem pharetra.
                        Pellentesque lacus nisi urna, arcu sociis eu. Orci vel
                        lectus nisl eget eget ut consectetur. Sit justo viverra
                        non adipisicing elit distinctio.
                    </p>
                </div>
            </div>
            <Portfolio header={false} portfolio={portfolio} />
        </>
    );
}
