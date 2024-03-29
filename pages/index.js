import React from "react";
const ContactForm = dynamic(() => import("../components/contact-form"));
import { getHomePosts } from "../lib/api";
import LatestBlog from "../components/latest-blog";
import Stats from "../components/stats";
import GradientFeatures from "../components/features-gradient";
import Testimonials from "../components/testimonials";
import Typed from "typed.js";
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
import { SparklesIcon } from "@heroicons/react/outline";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";
import shouketImg from "../public/img/testimonials/shouket.jpg";
import adnanImg from "../public/img/testimonials/adnan.jpg";
import priceString from "../lib/pricing";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { useCurrency } from "../contexts/CurrencyContext";
import Seo from "../components/seo";
import dynamic from "next/dynamic";

const features = [
  {
    name: "Based in Abu Dhabi, UAE",
    description:
      "Head office is located in the capital city Abu Dhabi, UAE so you can either visit us or call us whenever you wish.",
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

const seo = {
  pageTitle: "Web Hosting & Website Design",
  title:
    "Web Hosting, Website Design and Digital Marketing Company | BlessHost",
  metaDesc:
    "We are a web hosting, web design, and digital marketing company based in Dubai & Abu Dhabi. Call now to get a free quote. ",
  keywords:
    "web design agency dubai, freelance web designer dubai, web design abu dhabi, web design company",
  opengraphImage: {},
};

seo.opengraphImage.sourceUrl = `${process.env.OG_URL}/${seo.pageTitle}?description=${seo.metaDesc}`;
seo.canonical = `${process.env.NEXT_PUBLIC_BASE_URL}`;

export default function HomePage({ homePosts }) {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);
  //Fetch params from url
  const { query } = useRouter();

  React.useEffect(() => {
    const options = {
      strings: ["a website", "a domain", "an email", "an identity", "a store"],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 2000,
      shuffle: true,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  const { currency } = useCurrency();

  if (query.aff) {
    setCookie(null, "affiliate_id", query.aff, {
      maxAge: 30 * 24 * 60 * 5,
    });
  }

  return (
    <>
      <Seo seo={seo} />
      <div className="text-center md:text-left sm:my-4 md:my-20 lg:my-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="bg-gray-50">
          <div className="grid grid-cols-1 items-center justify-between gap-x-5 md:grid-cols-2">
            <div>
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="inline">Get </span>
                <span className="inline text-blue-600">
                  <span style={{ whiteSpace: "pre" }} ref={el} />
                </span>
                <span className="block">for your online presence</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Are you looking to boost your business by having an online
                presence? Reach a wider customer base, increase sales and
                improve customer satisfaction with our digital services.
              </p>
              <div className="mt-8 md:mb-0 mb-20 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-base font-medium text-gray-900">
                  Search for a domain name
                </p>
                <form
                  action={`https://billing.blesshost.com/cart.php?a=add&domain=register&currency=${
                    currency?.name == "USD" ? 1 : 2
                  }`}
                  method="POST"
                  className="mt-3 sm:flex"
                >
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="text"
                    name="sld"
                    id="domain-search"
                    className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:flex-1 border-gray-300"
                    placeholder="youramazingwebsite.com"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  >
                    Search
                  </button>
                </form>
                <div className="mt-3 text-sm text-gray-500 flex justify-between">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-gray-800">
                    .com{" "}
                    {priceString({
                      term: "annually",
                      currency: currency,
                      customPricingArray: { AED: "49.91", USD: "13.60" },
                    })}
                  </span>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-gray-800">
                    .net{" "}
                    {priceString({
                      term: "annually",
                      currency: currency,
                      customPricingArray: { AED: "55.01", USD: "14.99" },
                    })}
                  </span>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-gray-800">
                    .org{" "}
                    {priceString({
                      term: "annually",
                      currency: currency,
                      customPricingArray: { AED: "48.41", USD: "13.19" },
                    })}
                  </span>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-gray-800">
                    .ae{" "}
                    {priceString({
                      term: "annually",
                      currency: currency,
                      customPricingArray: { AED: "149.77", USD: "40.81" },
                    })}
                  </span>
                </div>
              </div>
            </div>

            <div className="order-first md:order-last">
              <svg
                className="h-96 md:h-full mx-auto"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="matrix(6,0,0,6,0,0)">
                  <path
                    d="M147.329,167.6c-4.1-.274-7.911-.987-12.093-1.24-4.991-.3-9.578-.091-14.9-.028a43.688,43.688,0,0,0-8.484.7,9.082,9.082,0,0,0-3.385,1.25.39.39,0,0,0,.25.7,24.943,24.943,0,0,0,3.559,1.143,2.165,2.165,0,0,1,.013-.236c.084-.639.466-1.693,1.032-1.606.583.079.635,1.2.5,1.852-.157.822-.666,1.165-1.058,1.023a34.592,34.592,0,0,0-.006,4.086.677.677,0,0,0,.574.617c2.18.338,4.367.567,6.561.7,4.87.3,14.227.242,16.116.1a20.944,20.944,0,0,0,4.237-.715.769.769,0,0,0,.553-.8c0-.056-.009-.112-.013-.167-.606-.217-.759-2.194-.8-2.827-.064-.943-.375-4.219.574-4.258.739-.03.87,1.959.922,3.1a13.845,13.845,0,0,0,6.243-1.981A.782.782,0,0,0,147.329,167.6Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M167.477,72.168c-1.248-6.331-2.776-12.67-6.79-17.736.194-.025.391-.056.585-.091a.472.472,0,0,0,.38-.546.467.467,0,0,0-.546-.377,8.94,8.94,0,0,1-5.969-1.11.5.5,0,0,0-.522.046c-2.874,2.2-6.568,3.617-9.994,2.356a.527.527,0,0,0-.582.155c-4.639,5.458-14.532,6.014-20.2,1.807a.587.587,0,0,0-.644-.039,45.6,45.6,0,0,1-19.479,5.533,22.426,22.426,0,0,0,7.181-4.543.7.7,0,0,0-.169-1.12,2.845,2.845,0,0,1-1.709-2.87c.265-3.24,4.573-5.932,7.625-7.009a18.851,18.851,0,0,1,6.892-1.028.726.726,0,0,0,.613-.3,12.154,12.154,0,0,1,11.791-5,.741.741,0,0,0,.651-1.265c-5.189-4.954-12.058-7.6-18.788-9.973-24.384-8.6-54.276-9.168-73.391,8.4a.769.769,0,0,0,.254,1.289,11.525,11.525,0,0,1,5.075,3.687,1.96,1.96,0,0,1-.479,2.987.77.77,0,0,0,.162,1.306,5.454,5.454,0,0,1,3.166,3.388c.872,3.174-2.433,5.846-5.519,6.942a10.867,10.867,0,0,1-4.972.584.772.772,0,0,0-.666,1.289c4.139,4.473,10.081,6.291,16.161,6-4.605,2.053-10.023,1.311-14.784-.457a17.631,17.631,0,0,1-6.61-3.878.779.779,0,0,0-.92-.155,9.647,9.647,0,0,1-9.322-.44.778.778,0,0,0-1.091.289C20.033,69.141,16.73,82.11,16.4,92.319a.774.774,0,0,0,.835.8c9.454-.69,22.06.527,25.015,9.576a.78.78,0,0,0,.747.535c8.9-.111,14.639,7.132,15.872,15.735a.773.773,0,0,0,.6.648c2.922.675,3.06,1.813,3.9,1.391a.769.769,0,0,0,.422-.672c.149-6.513,3.052-11.6,7.906-15.8a.761.761,0,0,0,.251-.746C71.243,100.516,69.669,82,69.871,74.6a14.459,14.459,0,0,1,.7-3.793c.031-.1,4.958-14.721,6.865-17.084.9-1.11,1.777-1.567,2.922-.24A11.659,11.659,0,0,1,82.13,57c2.129,5.964,5.317,11.376,7.339,17.373a13.243,13.243,0,0,1,.6,4.293c0,.1-.545,17.137-.972,26.05a.747.747,0,0,0,.334.652,30.986,30.986,0,0,1,6.234,6.061.727.727,0,0,0,1.159-.063c3.682-5.507,11.163-11.4,17.193-8.632a.688.688,0,0,0,.926-.377,42.5,42.5,0,0,1,4.7-9.238A31.644,31.644,0,0,1,133.985,82c5.762-2.113,12.013-2.036,17.246,2.1a.536.536,0,0,0,.789-.134c3.859-6.06,7.972-10.05,15.08-11.255A.46.46,0,0,0,167.477,72.168Z"
                    fill="#3e83f8"
                  ></path>
                  <path
                    d="M86.413,132.259a8.081,8.081,0,0,0-1.5-3.99,3.39,3.39,0,0,0-2.87-1.359c-2.455.106-3.981,3.593-3.582,5.909.458,2.623,2.41,6.275,3.258,8.294a12.742,12.742,0,0,1,.729,2.124.47.47,0,0,0,.919-.071C83.86,140.3,86.773,135.978,86.413,132.259Z"
                    fill="#3e83f8"
                  ></path>
                  <path
                    d="M178.4,116.589c-.916-.114-3.7-.021-4.7-.266-.642-.16-.94-.4-.955-1.05a16.655,16.655,0,0,1,.18-2.395.765.765,0,0,0-.359-.8,10.923,10.923,0,0,1-1.779-1.251,40.1,40.1,0,0,0,3.092-4.247.47.47,0,0,0-.722-.6c-1.17,1.17-1.8,1.877-3.588,3.951a1.317,1.317,0,0,0-.441.666c-.132.572.255,1.028.691,1.423a10.733,10.733,0,0,0,1.5,1.109,16.015,16.015,0,0,0-.119,2.405,2.383,2.383,0,0,0,1.563,2.11,7.632,7.632,0,0,0,2.726.342,22.051,22.051,0,0,0-.025,4.314.389.389,0,0,0,.356.415.385.385,0,0,0,.419-.355l.743-4.287c.394.02,1.026.041,1.214.034.428-.009,1.363-.333,1.363-.75C179.557,117.045,178.745,116.634,178.4,116.589Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M174.416,114.44a1.856,1.856,0,0,0,2.247.8,2.363,2.363,0,0,0,1.381-1.43c.179-.549.037-1.622-.448-1.63-.22,0-.778.808-.841.909-.367.589-.721,1-1.177.44-.685-.682-.754-.841-1.07-.75C173.945,112.94,174.159,113.847,174.416,114.44Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M185.777,107.78a2.9,2.9,0,0,0-1.264-.264.47.47,0,1,0-.141.93,1.834,1.834,0,0,1,1.3,1.014,1.978,1.978,0,0,1-1.93,2.552c-.608.019-1.672.148-1.68.743,0,.265.507.808,1.582.819,0,1.461.006,4.642.1,5.835.065.849.272,2.3.3,2.476a.391.391,0,0,0,.38.4.4.4,0,0,0,.4-.381c.445-2.5.363-1.717.363-8.593C187.506,112.08,188.189,109.012,185.777,107.78Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M173.984,104.691a9.079,9.079,0,0,1,.074-2.832,4.263,4.263,0,0,1,.976-2c1.75-2.006,5.172-1.944,7.469-.641,1.513.849,2.579,2.128,4.462,2.61,2.363.568,4.164-.491,4.8-2.06a.4.4,0,0,0-.169-.525.386.386,0,0,0-.522.166,3.214,3.214,0,0,1-3.722.982c-1.491-.421-2.66-1.709-4.082-2.525-2.946-1.67-7.141-1.61-9.378,1.011a4.87,4.87,0,0,0-1.2,2.8,8.85,8.85,0,0,0,.373,3.2.47.47,0,1,0,.919-.193Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M175.852,104.02c.334-1.67,2.744-2.8,4.4-2.392,3.487.822,6.547,3.724,10.829,2.434a6.019,6.019,0,0,0,1.751-.863,6.47,6.47,0,0,0,1.627-1.616.39.39,0,1,0-.613-.483,7.506,7.506,0,0,1-3.173,1.546c-3.61,1-6.4-1.67-10.072-2.511-2.717-.595-5.611,1.237-5.678,3.783a.473.473,0,0,0,.42.517A.468.468,0,0,0,175.852,104.02Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M179.886,104.338c1.677-.531,3.25.825,4.828,1.687,3.093,1.648,6.934,2.283,9.2-.394a.39.39,0,0,0-.507-.592,5.224,5.224,0,0,1-.768.366,6.366,6.366,0,0,1-1.169.338,8.719,8.719,0,0,1-6.022-1.077c-1.711-.905-3.64-2.619-5.956-1.18a.47.47,0,1,0,.395.852Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M188.626,110.231a4.674,4.674,0,0,0,3.67-.116c.176-.12.915-.8.715-1.149-.237-.418-2.175.015-2.582.029-1.116.049-2.3-.486-2.6.024C187.564,109.461,188.408,110.107,188.626,110.231Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M187.424,113.947a4.684,4.684,0,0,0,2.9.352c.952-.214,1.4-.938,1.306-1.191-.206-.481-2-.263-2.43-.288a6.293,6.293,0,0,1-1.239-.212c-.782-.113-1.081-.145-1.254.141C186.457,113.179,187.269,113.845,187.424,113.947Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M186.659,116.846a5.368,5.368,0,0,0,3.533-.134c.106-.06.953-.689.806-1.053-.128-.311-1.27-.3-1.423-.278a7.08,7.08,0,0,1-2.567.06c-.1-.006-1.2.019-1.314.394C185.558,116.29,186.531,116.792,186.659,116.846Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M156.809,133.7c-.349-3.793-3.261-6.448-6.994-8.213-5.467-2.58-12.982-4.007-22.138-3.187-5.606.522-11.319,1.325-15.679,4.839-3.445,2.8-5.531,6.6-7.766,10.178-3.655,5.874,4.439,11.758,10.618,14.8a9.539,9.539,0,0,1-5.374,4.162.773.773,0,0,0-.549.525c-1.1,3.637-.831,7.951-.7,11.724a.779.779,0,0,0,.324.6c.66.468.893-.321,5.977-.979,7.081-.916,20.773-.782,32.612,1.078a.778.778,0,0,0,.89-.856,86.457,86.457,0,0,1,.029-18c4.762-3.155,8.38-9.919,8.755-14.461A13.683,13.683,0,0,0,156.809,133.7Z"
                    fill="#3e83f8"
                  ></path>
                  <path
                    d="M118.953,152.475c2.4-4.809,5.655-9.832,6.814-16.365.7-3.857.062-7.315-3.278-9.365a.39.39,0,0,1,.355-.694,7.226,7.226,0,0,1,4.205,4.3c1.347,3.843-.365,9.514-1.944,13.288a73.718,73.718,0,0,1-5.261,9.9.636.636,0,0,1-.761.292l-2.736-1.106a.47.47,0,0,1,.32-.884Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M149.418,128.655a10.445,10.445,0,0,1,1.465,2.673,13.154,13.154,0,0,1-.113,9.276,57.279,57.279,0,0,1-2.937,6.266.384.384,0,0,0,.084.542.392.392,0,0,0,.546-.085,15.792,15.792,0,0,0,3.769-6.212c1.6-4.513,1.529-9.977-2.142-13.115a.469.469,0,0,0-.672.655Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M102.376,142.134a11.552,11.552,0,0,0-1.476,3.113c-1.689,5.841.377,12.515,6.579,12.118a.39.39,0,0,0,.056-.778,8.989,8.989,0,0,1-2.521-1c-3.334-1.94-3.535-6.228-2.68-9.97a22.394,22.394,0,0,1,.873-3.05.469.469,0,1,0-.831-.436Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M194.975,141.438c-.525-1.956-1.068-3.822-1.539-5.948-1.172-5.405-1.951-9.708-7.314-12.2-3.158-1.461-6.347-.687-7.692-.419-10.253,2.067-14.385,9.585-17.01,19.715-.49,1.9-4.585,20.532-5.269,23.476a.456.456,0,0,0,.293.535,28.653,28.653,0,0,0,3.384.936c.875.172.866-.243.607-.98a4.46,4.46,0,0,1-.188-.7c-.053-.306-.1-.634.092-.827a.5.5,0,0,0-.067-.757c-1.1-.831-.823-2.271.053-3.325a.568.568,0,0,0,.028-.666,1.9,1.9,0,0,1-.384-1.447c.323-1.309,3.181-1.778,4.751-1.127a.657.657,0,0,0,.88-.437l.317-1.085a.671.671,0,0,0-.377-.8c-1.366-.62-.892-1.651.451-1.941a6.41,6.41,0,0,1,5.058,1.877.74.74,0,0,0,.961.106,15.2,15.2,0,0,1,1.412-.8.752.752,0,0,0,.37-.835c-.289-1.194-.439-2.447-.641-3.708a141.362,141.362,0,0,0,15.753-5.047c.36,1.607.528,2.893.775,4.462a.77.77,0,0,0,1.525-.021,59.33,59.33,0,0,0,.486-6.054l2.827-1.064A.772.772,0,0,0,194.975,141.438Z"
                    fill="#3e83f8"
                  ></path>
                  <path
                    d="M175.136,126.487c-4.99,2.257-6.1,7.547-5.575,12.977a24.566,24.566,0,0,0,1.842,7.53.388.388,0,0,0,.476.275.383.383,0,0,0,.275-.472c-.113-.754-.469-3.374-.557-3.9a25.3,25.3,0,0,1-.324-8.879A10.4,10.4,0,0,1,175.6,127.3a.469.469,0,1,0-.462-.817Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M161.654,159.591c.1,0,2.491-.186,2.592-.2.175-.022,1.21-.335,1.243-.666.063-.64-1.474-.857-2.127-.838-.906.036-3.1.317-2.948,1.169C160.477,159.471,161.554,159.591,161.654,159.591Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M161.376,163.254c.1-.007,2.53-.4,2.631-.416.183-.04,1.2-.41,1.215-.75.021-.643-1.548-.76-2.237-.676-.912.106-3.138.584-2.912,1.426C160.181,163.248,161.276,163.263,161.376,163.254Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M162.009,166.127a21.016,21.016,0,0,1,6.367.18c1.324.185,2.949.883,4.43,1.208,5.7,1.209,11.984,1.15,14.968-3.881a11.958,11.958,0,0,0,1.4-3.265,36.692,36.692,0,0,0,.592-10.653c-.127-1.448-.331-2.881-.564-4.353a.389.389,0,1,0-.774.081c.206,3.915.153,10.943-.754,14.555a10.611,10.611,0,0,1-1.233,2.843c-2.577,4.356-8.365,4.222-13.319,3.19a43.554,43.554,0,0,0-4.575-1.144,19.25,19.25,0,0,0-6.73.32.47.47,0,0,0,.194.919Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M178.757,152.5c-.147-.4-1.162-.343-1.563-.19a7.768,7.768,0,0,0-1.458.743c-.106-.321-.214-.64-.336-.954-.247-.641-.55-1.247-.821-1.88a.468.468,0,1,0-.9.267,20.375,20.375,0,0,0,.754,3.42c-1.216.7-2.074,1.1-3.286,1.888-1.47-1.383-3.048-2.421-4.994-1.9a.388.388,0,1,0,.081.771,3.69,3.69,0,0,1,.789.177,10.451,10.451,0,0,1,3.5,2.5.779.779,0,0,0,.989.081c.509-.362,5.422-3.275,5.753-3.449C177.479,153.868,179,153.134,178.757,152.5Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M179.1,168.561a32.559,32.559,0,0,1-5.617-.239c-2.624-.467-4.885-1.483-7.663-1.687a26.531,26.531,0,0,0-4.783.595.776.776,0,0,0-.69.813c.09,1.854.277,3.4.457,5.357a.771.771,0,0,0,.775.7c12.027-.12,15.141-.138,15.917-.18.546-.029.577-.232.817-.724a16.69,16.69,0,0,0,1.425-3.921A.625.625,0,0,0,179.1,168.561Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M83.7,77.686c-2.113-1.851-7.135-2.048-8.638,1.389a5.288,5.288,0,0,0,2.168,6.813,6.212,6.212,0,0,0,3.4.754C84.637,86.358,86.609,80.22,83.7,77.686Zm-6.209,6.456a4.387,4.387,0,0,1-.862-4.892c1-2.224,3.284-2.1,5.441-.99C80.611,80.278,78.861,82.053,77.491,84.142Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M167.709,73.118a.394.394,0,0,0-.444-.325c-6.387.837-12.383,4.158-15.619,9.9a20.152,20.152,0,0,0-18.331-1.321c-8.512,3.42-15.643,11.886-19.144,20.419-5.921-1.464-11.948,1.626-15.8,6.287a.469.469,0,1,0,.711.612c3.694-4.1,9.376-6.774,14.659-5.471a20.334,20.334,0,0,0-.854,4.706c.008.316.155,1.672.6,1.694s.8-1.4.888-1.842c.8-4.042.732-5.966,4.618-11.923,3.7-5.68,8.948-10.643,14.9-13.035a18.743,18.743,0,0,1,17.12,1.25,13.253,13.253,0,0,0-1.176,3.179c-.043.328-.084,1.49.3,1.588.4.1,1.037-1.1,1.191-1.486,2.092-4.929,3.265-7.455,7.74-10.429a22.556,22.556,0,0,1,8.315-3.353A.393.393,0,0,0,167.709,73.118Z"
                    fill="#060000"
                  ></path>
                  <path
                    d="M59.549,117.948c-.4-9.073-7.667-16.761-16.658-15.878-2.678-5.548-8.86-9.939-18.873-9.939a.468.468,0,0,0-.49.448.473.473,0,0,0,.451.489A28.624,28.624,0,0,1,34.439,95.8a14.909,14.909,0,0,1,7.268,7.417.776.776,0,0,0,.818.458c7.659-1.06,13.59,4.736,15.65,12.012a19.462,19.462,0,0,1,.477,2.088,6.149,6.149,0,0,0-1.847.036c-.264.062-1.323.429-1.246.9.065.425,1.26.527,1.373.536a10.931,10.931,0,0,1,1.789.116c.732.13,2.709,1.014,3.018.634C61.948,119.724,61.558,118.485,59.549,117.948Z"
                    fill="#060000"
                  ></path>
                  <path
                    d="M111.18,56.488c-3.125-1.684-2.908-5.151-.211-7.65,3.17-2.92,7.549-4.2,11.879-4.567a.469.469,0,0,1,.091.933c-11.194,1.3-15.917,8.5-10.258,10.343a.732.732,0,0,1,.3,1.194,23.989,23.989,0,0,1-6.7,5.132,40.782,40.782,0,0,0,16.461-5.5.782.782,0,0,1,.884.049c5.555,4.307,14.376,3.435,18.81-2.2a.774.774,0,0,1,.8-.271c3.151.789,8.053.433,10.481-1.733a.77.77,0,0,1,.775-.145c5.963,2.259,13.114.608,17.074-4.342a.637.637,0,0,1,.658-.222c4.164,1.146,9.213.658,12.038-2.655a.389.389,0,0,1,.6.493c-2.859,3.632-8.011,4.46-12.548,3.483a16.294,16.294,0,0,1-17.937,4.821c-2.813,2.19-7.6,2.62-11.033,1.909a15.4,15.4,0,0,1-20.237,2.416c-7.02,4.163-15.412,5.9-23.7,5.8a.762.762,0,0,1-.035-1.522A18.817,18.817,0,0,0,111.18,56.488Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M52.638,65.3A18.085,18.085,0,0,1,40.9,58.553a.761.761,0,0,1,.553-1.208c3.311-.263,8.339-2.416,9.91-5.191,1-1.768.437-3.747-2.8-5.726a.569.569,0,0,1-.183-.81c1.6-2.244-.2-4.6-2.578-5.956a.387.387,0,1,1,.366-.683c2.71,1.376,4.821,3.993,3.455,6.751,3.761,2.325,4.135,4.9,2.962,7.1-1.616,3.034-6.2,5.187-9.629,5.839,4.169,4.578,11.675,6.576,17.366,4.455a.778.778,0,0,1,.648,1.409c-8,4.445-18.437,2.22-25.388-3.462-6.6,2.635-12.595-.784-15.785-7.216A15.044,15.044,0,0,1,5.03,44.48a.469.469,0,0,1,.877-.334c2.119,5.283,8.556,9.06,14.228,8.2a.723.723,0,0,1,.761.412c2.87,6.065,8.343,9.435,14.517,6.716a.773.773,0,0,1,.81.117A24.068,24.068,0,0,0,52.638,65.3Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M175.8,106.506c.363.064.57.6.468,1.194s-.482,1.029-.841.965-.574-.6-.469-1.194S175.437,106.443,175.8,106.506Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M134.956,106.2c.32.095.44.659.26,1.254s-.581,1-.9.909-.44-.655-.264-1.254S134.632,106.105,134.956,106.2Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M67.817,173.066c-1.612-7.512-11.065-9.662-17.989-6.438a11.732,11.732,0,0,0-12.978-6.42c-4.651-9.627-13.613-15.7-26.04-15.634a.456.456,0,0,0-.461.448.449.449,0,0,0,.443.461c10.735.449,19.973,5.515,24.706,15.371a11.789,11.789,0,0,0-4.6,2.775c-.193.216-1.055,1.281-.75,1.609.3.31,1.664-.581,1.841-.7,3.551-2.456,6.631-4.052,10.809-2.444a10.59,10.59,0,0,1,5.977,5.83.743.743,0,0,0,1.046.374c5.63-3.119,15.382-2.094,17.267,4.955a.376.376,0,1,0,.729-.183Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M104.279,159.813a5.244,5.244,0,0,0-3.036-1.1,11.94,11.94,0,0,0-4.38.593,9.9,9.9,0,0,0-5.939-3.449,7.633,7.633,0,0,0-6.183,1.307,67.452,67.452,0,0,1,.912-10.688c.462-2.378,1.669-4.654,2.455-7.008a21.4,21.4,0,0,0,.958-9.407,9.921,9.921,0,0,0-2.117-5.533,5.732,5.732,0,0,0-4.432-1.995c.045-.353.09-.722.137-1.111l4.837-.093a.775.775,0,0,0,.764-.737c.043-.71.041-1.853.035-2.567l1.115-.495c3.254,3.373,6.591,7.04,8.4,11.34a.778.778,0,0,0,1.493-.356c-.519-7.392-.184-14.055-4.874-19.521a51.068,51.068,0,0,0-4.381-4.247.559.559,0,0,0-.094-.07c.3-5.261.6-16.493.445-22.557-.094-3.326-.267-5.156-.515-7.784a.817.817,0,0,0-.038-.412C87.769,68,86.392,65.134,82.971,57.382a17.2,17.2,0,0,0-2.155-4.343,2.882,2.882,0,0,0-2.332-1.127c-2.158.113-2.98,3.829-3.575,5.392-2.167,5.743-3.973,11.477-5.638,17.383a.761.761,0,0,0,.223.774c.26,3.808.889,18.218,1.644,29.46a.477.477,0,0,0-.242.124,51.514,51.514,0,0,0-4.381,4.247c-4.7,5.458-4.356,12.213-4.877,19.521a.778.778,0,0,0,1.493.356c1.928-4.592,5.586-8.442,9.063-12.025.023.234.07.721.07.721a.471.471,0,0,0,.669.5c.535.06.623.066,1.2.135a15.32,15.32,0,0,0,.131,2.515.682.682,0,0,0,.694.56l4.608-.09c.07.554.143,1.115.223,1.706a10.017,10.017,0,0,0-5.362,6.475c-1.455,6.411,3.316,11.815,4.99,17.433.678,2.271.542,4.962.711,7.361.075.938.156,1.907.239,2.886-3.854-2.768-9.366-1.476-13.064,1.272-3.569-2.225-8.928-2.568-14.8.838a.453.453,0,1,0,.405.81,22.012,22.012,0,0,1,8.629-1.853,9.952,9.952,0,0,1,5.367,1.744.757.757,0,0,0,.908-.032c3.95-3.253,9.607-3.434,12.635-1.764.228,2.747.441,5.525.49,7.914a.47.47,0,0,0,.94,0c.049-4.922-.184-7.595-.37-11.9-.13-2.519.1-5.073-.662-7.7-1.612-5.472-6.237-10.9-4.916-16.662a8.391,8.391,0,0,1,4.053-5.184l.028-.015c.17,1.187.367,2.529.608,4.154l-.042.909a.469.469,0,0,0,.433.5.5.5,0,0,0,.521-.564c.236-2.091.491-3.652.775-5.7a4.245,4.245,0,0,1,3.5,1.469,8.663,8.663,0,0,1,1.726,4.681,19.972,19.972,0,0,1-.877,8.723c-.8,2.44-1.975,4.6-2.469,7.213-1.267,6.976-.248,13.552-.676,20.1a.387.387,0,0,0,.356.415.392.392,0,0,0,.422-.356c.259-2.583.343-5.245.42-7.894a8.625,8.625,0,0,1,5.943-1.126,16.361,16.361,0,0,1,5.194,2.34,9.326,9.326,0,0,0-2.461,1.407c-.247.2-.468.412-.687.63a.452.452,0,0,0,.525.736c.127-.062,2.313-1.04,2.655-1.183a12.6,12.6,0,0,1,5.294-1.085,24.242,24.242,0,0,1,2.792.314A.376.376,0,0,0,104.279,159.813ZM87.052,119.006c-.043.8-.586,1.336-.835,1.328-1.032-.052-.937-3.254.067-3.254C86.889,117.08,87.084,118.237,87.052,119.006ZM75.071,67.864a17.919,17.919,0,0,1,.144-2.666c.132-.982,1.321-7.887,1.342-7.988a5.578,5.578,0,0,1,1.2-2.585.471.471,0,0,1,.655-.123.466.466,0,0,1,.124.652,4.349,4.349,0,0,0-.331,1.158c-.026.12-1.062,7.133-1.529,9.15a13.975,13.975,0,0,1-.849,2.56.388.388,0,1,1-.76-.158Zm-1.1,2.943c.077-.491.686-1.014,1.018-.933a1.135,1.135,0,0,1,.5,1.264.793.793,0,0,1-.926.645A.808.808,0,0,1,73.971,70.807Zm2.056,49.86c-.257.021-.8-.555-.881-1.229-.169-1.4.358-1.893.641-1.908.545-.031.835,1,.887,1.546C76.789,120.064,76.278,120.651,76.027,120.667Zm3.252-.439a1.41,1.41,0,0,1-.933-1.211c-.134-.8-.018-1.917.584-1.966C79.844,116.989,80.423,120.078,79.279,120.228Zm2.186-15.648a.773.773,0,0,0-1.078-.12c-2.305,1.779-1.986,5.012-1.747,7.885.095,1.073.181,2.025.261,2.891a14.986,14.986,0,0,0-5.853,1.938,133.589,133.589,0,0,0-.518-14.5c-1.141-17.109-1.049-20.283-2.037-27.119,4.271-.984,16.223-.962,18.6-.947-.064,3.242-.452,24.985-.553,27.658-.239,6.309-.573,8.792-.185,13.5a27.81,27.81,0,0,0-5.14-.713,31.152,31.152,0,0,0-.284-7.305A7.554,7.554,0,0,0,81.465,104.58Zm1.024,14.059c.058-.852.416-1.742.9-1.722.606.024.754,1.195.659,1.965a1.41,1.41,0,0,1-.888,1.275C82.622,120.112,82.439,119.39,82.489,118.639Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M62.243,163.668c.633-.236,1.557-.466,1.737-.514a11.722,11.722,0,0,1,4.092-.5,16.512,16.512,0,0,1,4.1.853c.19.056,1.531.413,1.792.493a.375.375,0,1,0,.36-.659,9.1,9.1,0,0,0-1.649-1.109,12.347,12.347,0,0,0-9.146-.391,7.813,7.813,0,0,0-1.725,1.039.454.454,0,0,0,.443.792Z"
                    fill="#293c4f"
                  ></path>
                  <path
                    d="M146.775,104.338a7.931,7.931,0,0,0-3.308-3.155,17.064,17.064,0,0,0-.542-3.751,6.985,6.985,0,0,0-5.349-4.648,5.458,5.458,0,0,0-6.53,6.258,8.428,8.428,0,0,0,.9,2.627,8.92,8.92,0,0,0,1.518,2.215,13.906,13.906,0,0,0-1.536,2.918,6.76,6.76,0,0,0-3.184,3.593.776.776,0,0,0,.363,1.007l1.017.507c-.047,3.272.92,6.244,3.98,7.4-.077.771-.077.977-.1,1.989a.389.389,0,1,0,.771.11l.546-1.964c1.894.3,5.039-.252,7.226-.779a21.04,21.04,0,0,0,.03,2.16c.027.564.2,1.857.729,1.891.476.032.792-1.022.814-1.711.013-.386-.041-1.737-.074-2.124a4.708,4.708,0,0,0-.143-.988c.813-1.518,1.528-2.938,2.146-4.221C147.54,110.484,148.51,107.411,146.775,104.338ZM132.692,98.4a3.945,3.945,0,0,1,.652-2.141c1.5-2.474,4.431-2.47,2.377-.416a5.825,5.825,0,0,0-1.046,1.226,5.189,5.189,0,0,0-.57,1.458C133.511,100.444,132.844,99.579,132.692,98.4Zm4.221,14.293a2.729,2.729,0,0,1-1.729.359.74.74,0,0,0-.774.754c.049,1.4.014,2.774.181,4.226-2.446-1.3-3.033-3.613-2.9-6.562a.778.778,0,0,0-.426-.729l-.782-.384a6.957,6.957,0,0,1,.75-1.134c1.121-1.361,1.736-.942,1.962-1.606a29.549,29.549,0,0,1,1.1-3.082,7.444,7.444,0,0,0,2.074.893c-.375,1.283-.487,1.927-.824,3.585a.761.761,0,0,0,.531.887,2.731,2.731,0,0,1,1.17.539A1.669,1.669,0,0,1,136.913,112.692Z"
                    fill="#293c4f"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
            Trusted by 1,000+ companies in the United Arab Emirates
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Image
                className="h-12"
                width={170}
                height={65}
                src={"/img/uae-clients/arrow-aviation.svg"}
                alt="Arrow Aviation Services"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Image
                className="h-12"
                width={170}
                height={65}
                src={"/img/uae-clients/ocean-dream-boats.svg"}
                alt="Ocean Dream Boats"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Image
                className="h-12"
                width={170}
                height={65}
                src={"/img/uae-clients/vaheed.svg"}
                alt="Vaheed"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <Image
                className="h-12"
                width={170}
                height={65}
                src={"/img/uae-clients/cascade-virtual.svg"}
                alt="Cascade Virtual"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <Image
                className="h-12"
                width={170}
                height={65}
                src={"/img/uae-clients/inner-seed.svg"}
                alt="Inner Seed"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative pt-16 pb-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
        />
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
                    <InboxIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    360 Unlimited Web Hosting
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    The infrastructure of 360 web hosting is built on a unique
                    clustered architecture that delivers faster, more scalable,
                    more reliable hosting service for your sites, also our
                    hosting is optimized for CMS based websites like WordPress
                    and Joomla. Install 70+ popular scripts using 1 click.
                  </p>
                  <div className="mt-6">
                    <Link href="/web-hosting">
                      <a className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-700">
                        Get started
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <blockquote>
                  <div>
                    <p className="text-base text-gray-500">
                      &ldquo;For a small/medium size business the cost is
                      attractive and the customer support is awesome. When it
                      comes to support, the BlessHost team is extremely helpful.
                      I am a client of several years and my website haven't
                      faced any downtime until now. &rdquo;
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 h-10">
                        <Image
                          layout="fixed"
                          height={36}
                          width={36}
                          className="h-6 w-6 rounded-full"
                          src={adnanImg}
                          alt="Adnan Yasin, Managing Partner at Crepeaholic"
                        />
                      </div>
                      <div className="text-base font-medium text-gray-700">
                        Adnan Yasin, Managing Partner at Crepeaholic
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className=" pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/img/website-speed.jpg"
                  alt="Website Speed"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
                    <SparklesIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Website Design & Development
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Beautiful Websites. Increased Conversions. Create a website
                    that best represents your business and you are going to be
                    proud of. We design and develop services specialized in the
                    development of stylish modern websites, and digital stores
                    for customers around the globe. Our Website designers are
                    based in Abu Dhabi, UAE. Inquire now to get a free quote.
                  </p>
                  <div className="mt-6">
                    <Link href="/website-design">
                      <a className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-700">
                        Get started
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <blockquote>
                  <div>
                    <p className="text-base text-gray-500">
                      &ldquo;Brilliant and skilled people with extensive web
                      development experience in complex e-commerce websites.
                      Thanks to their highly creative approach that led to
                      successful results. &rdquo;
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 h-10">
                        <Image
                          layout="fixed"
                          height={36}
                          width={36}
                          className="h-6 w-6 rounded-full"
                          src={shouketImg}
                          alt="Shouket Ali, General Manager at Al Jazira Royal Hotel"
                        />
                      </div>
                      <div className="text-base font-medium text-gray-700">
                        Shouket Ali, General Manager at Al Jazira Royal Hotel
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/img/website-design.jpg"
                  alt="Website Design"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <GradientFeatures
        title="Why should you trust BlessHost?"
        description="With years of experience in web hosting, web designing and web development, we know what it takes to get for your business to succeed online. We will make sure you have all the necessary requirements for your online business and that you do not have to worry about maintaining your online identity."
        features={features}
      ></GradientFeatures>

      <Testimonials />

      <LatestBlog homePosts={homePosts} />

      <Stats></Stats>

      <ContactForm />

      <div className="relative bg-gray-900">
        <div className="relative h-56 bg-blue-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <Image
            className="w-full h-full object-cover"
            layout="fill"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
            alt=""
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 mix-blend-multiply"
          />
        </div>
        <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
              Award winning support
            </h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              We’re here to help
            </p>
            <p className="mt-3 text-lg text-gray-300">
              Either you're starting from scratch or need help with existing
              website, our team of experts are available to help you choose the
              best solution for your needs. If you are still undecided, do not
              hesitate and get in touch with us right away.
            </p>
            <div className="mt-8 mb-2">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="https://wa.me/+971544423111"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  Chat with us
                  <ExternalLinkIcon
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const homePosts = await getHomePosts();
  return {
    props: { homePosts },
  };
}
