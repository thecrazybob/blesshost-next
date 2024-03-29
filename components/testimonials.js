import { useEffect, useState } from "react";
import { motion, useTransform, animate, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
const rotation = [-2, 1, -1, 2, -1, 1];

const testimonials = [
    {
        content:
            "BlessHost's team is always there to support us on any technical issues related to our website. They are organized and creative. They insure that the work is done the soonest and this is something that we seek for when running a business.",
        author: {
            name: "Laura-Helene Kopinski",
            role: "Founder, Inner Seed",
            avatar: require("../public/img/testimonials/laura.jpg").default,
        },
    },
    {
        content:
            "For a small/medium size business the cost is attractive and the customer support is awesome. When it comes to support, the BlessHost team is extremely helpful. I am a client of several years and my website haven't faced any downtime until now.",
        author: {
            name: "Adnan Yasin",
            role: "Managing Partner at Crepeaholic",
            avatar: require("../public/img/testimonials/adnan.jpg").default,
        },
    },
    {
        content:
            "Brilliant and skilled people with extensive web development experience in complex e-commerce websites. Thanks to their highly creative approach that led to successful results.",
        author: {
            name: "Shouket Ali",
            role: "General Manager at Al Jazira Royal Hotel",
            avatar: require("../public/img/testimonials/shouket.jpg").default,
        },
    },
    {
        content:
            "EXCELLENT HOSTING. Blesshost has Hosted three of my websites and none of them has gone down in the past whole year. I am so happy I found them. After trying 3 other hosting providers I finally contacted BlessHost and that is when it began. Buy hosting from them. You will be so happy you did.",
        author: {
            name: "Stephanie St. James",
            role: "Singer",
            avatar: require("../public/img/testimonials/stephanie.jpg").default,
        },
    },
    {
        content:
            "I'd like to thank you for a long partnership with outstanding customer service every time I deal with you - this is why I continue to recommend you guys and don't use anyone else for any of my websites or domain names! Keep up the excellent work!",
        author: {
            name: "Madian Romero",
            role: "Illustration Artist",
            avatar: require("../public/img/testimonials/madian.jpg").default,
        },
    },
];

function Testimonial({ testimonial, base, index, total }) {
    const x = useTransform(
        base,
        [0, (100 / total) * (index + 1), (100 / total) * (index + 1), 100],
        [
            "0%",
            `${(index + 1) * -100}%`,
            `${total * 100 - (index + 1) * 100}%`,
            "0%",
        ]
    );
    const [straight, setStraight] = useState(false);
    return (
        <motion.li
            className="px-3 md:px-4 flex-none"
            onMouseEnter={() => setStraight(true)}
            onMouseLeave={() => setStraight(false)}
            style={{ x }}
        >
            <motion.figure
                className="shadow-lg border rounded-xl flex-none w-144 md:w-xl"
                initial={false}
                animate={
                    straight
                        ? { rotate: 0 }
                        : { rotate: rotation[index % rotation.length] }
                }
            >
                <blockquote className="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-medium text-gray-900">
                    <svg
                        width="45"
                        height="36"
                        className="mb-5 fill-current text-gray-600"
                    >
                        <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z" />
                    </svg>
                    {typeof testimonial.content === "string" ? (
                        <p>{testimonial.content}</p>
                    ) : (
                        testimonial.content
                    )}
                </blockquote>
                <figcaption
                    className={`flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-medium text-white from-blue-400 to-blue-600`}
                >
                    <div className="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
                        <Image
                            src={testimonial.author.avatar}
                            alt=""
                            className="w-12 h-12 rounded-full bg-blue-100"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-auto">
                        {testimonial.author.name}
                        {testimonial.author.role && (
                            <>
                                <br />
                                <span className="text-gray-200">
                                    {testimonial.author.role}
                                </span>
                            </>
                        )}
                    </div>
                </figcaption>
            </motion.figure>
        </motion.li>
    );
}

export default function Testimonials() {
    const x = useMotionValue(0);
    const { inView, ref: inViewRef } = useInView({
        threshold: 0,
        rootMargin: "100px",
    });
    const [duration, setDuration] = useState(150);

    useEffect(() => {
        if (!inView) return;

        const controls = animate(x, 100, {
            type: "tween",
            duration,
            ease: "linear",
            loop: Infinity,
        });

        return controls.stop;
    }, [inView, x, duration]);

    return (
        <div
            ref={inViewRef}
            className="relative"
            onMouseEnter={() => setDuration(400)}
            onMouseLeave={() => setDuration(150)}
        >
            <div
                className="absolute right-0 bottom-1/2 left-0 bg-gradient-to-t from-white pointer-events-none"
                style={{ height: 350, maxHeight: "50vh" }}
            />
            <div className="pt-8 bg-white flex overflow-hidden">
                <ul className="flex items-center w-full py-8 mb-10">
                    {testimonials.map((testimonial, i) => (
                        <Testimonial
                            key={i}
                            testimonial={testimonial}
                            base={x}
                            index={i}
                            total={testimonials.length}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
