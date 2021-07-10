export default function FAQSDark(props) {
    return (
        <section aria-labelledby="faqHeading" className="bg-gray-900">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-2xl lg:mx-auto lg:text-center">
                    <h2
                        id="faqHeading"
                        className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                    >
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Ac euismod vel sit maecenas id pellentesque eu sed
                        consectetur. Malesuada adipiscing sagittis vel nulla
                        nec. Urna, sed a lectus elementum blandit et.
                    </p>
                </div>
                <div className="mt-20">
                    <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
                        {props.faqs.map((faq) => (
                            <div key={faq.id}>
                                <dt className="font-semibold text-white">
                                    {faq.question}
                                </dt>
                                <dd className="mt-3 text-gray-400">
                                    {faq.answer}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
