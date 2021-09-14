import { CheckCircleIcon } from "@heroicons/react/solid";
import FeaturesGradient from "../components/features-gradient";
import Testimonials from "../components/testimonials";
import FAQsBrand from "../components/faqs-brand";
import SimpleCTA from "../components/cta-simple";
import {
  ArrowUpIcon,
  ChatIcon,
  DatabaseIcon,
  LockClosedIcon,
  MailIcon,
  ShieldCheckIcon,
  TruckIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import priceString from "../lib/pricing";
import { useState } from "react";
import { useCurrency } from "../contexts/CurrencyContext";
import Seo from "../components/seo";
import { useRouter } from "next/router";
import WHMCSLink from "../components/whmcs-link";

const includedFeatures = [
  "30 GB Cloud Email Storage",
  "Business email addresse (name@yourdomain.com)",
  "Work from anywhere",
  "Integrated online calendars",
  "Safe and secure",
  "24/7 phone and email support",
  "Online text documents, spreadsheets and slides",
  "Easy Mail Migration",
  "100% Service Uptime Guarantee",
  "Ultimate Spam Protection",
  "No Advertising",
  "Video meetings up to 250 participants",
];

const faqs = [
  {
    id: 1,
    question: "How does Google Workspace pricing work?",
    answer:
      "The Google Workspace pricing is per-seat, or per-user. Each seat (user) on your Google Workspace account will cost $6.95/month.",
  },
  {
    id: 2,
    question:
      "If I only want one of the products, do I have to buy the entire suite?",
    answer:
      "Yes, Google Workspace by Google Cloud is designed as an all-in-one solution with integrated tools that work seamlessly together. ",
  },
  {
    id: 3,
    question: "Do I need a Google Account in order to use Google Workspace?",
    answer: "No, you don’t need to have a Google Account.",
  },
  {
    id: 4,
    question: "Do I need a domain name in order to use Google Workspace?",
    answer: "To use Google Workspace by Google Cloud, you need your domain.",
  },
  {
    id: 5,
    question: "What payment methods do you currently accept?",
    answer: "We currently accept PayPal, Credit/Debit Cards and Bitcoin.",
  },
  {
    id: 6,
    question: "If I need support, how can I reach you?",
    answer: "You can reach us by email, phone, WhatsApp and live chat.",
  },
  {
    id: 7,
    question:
      "My Google Workspace account is currently with another provider, how can I transfer it here?",
    answer:
      "Provide us your transfer authorization code from your Google Workspace control panel and we will transfer your Google Workspace account.",
  },
  {
    id: 8,
    question: "Can I migrate my existing email to Google Workspace?",
    answer:
      "Yes. Google Workspace migration tools are available for importing your old emails from legacy environments such as Microsoft®, IBM® Notes®, and other email systems.",
  },
];

const features = [
  {
    name: "Email @ Your Domain",
    description:
      "Instead of @gmail.com, send emails from yourname@yourbusiness.com with an ad-free, professional version of Gmail powered by Google Cloud.",
    icon: MailIcon,
  },

  {
    name: "Ultimate Spam Protection",
    description:
      "Google uses advanced spam detection algorithms to protect you from scams, and keep unwanted mail out of your inbox.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Easy Mail Migration",
    description:
      "You can easily migrate your existing email to Google without the help of third-party solutions with just a few clicks.",
    icon: TruckIcon,
  },
  {
    name: "30GB of Cloud Storage",
    description:
      "Google gives you plenty of space for all your mail and documents, plus powerful tools to create documents, spreadsheets, and more.",
    icon: DatabaseIcon,
  },
  {
    name: "100% Uptime",
    description:
      "Google is the only cloud that can guarantee 100%. uptime for your mail, storage, and applications.",
    icon: ArrowUpIcon,
  },
  {
    name: "Communication",
    description:
      "Business email, shared calendars, and video conferencing that brings your team closer together from anywhere.",
    icon: UsersIcon,
  },
  {
    name: "Business-grade security",
    description:
      "Keep all your company data safe and protected even in the event of lost or stolen devices.",
    icon: LockClosedIcon,
  },
  {
    name: "Collaborate in real-time",
    description:
      "Easily work on documents, spreadsheets, and slides across your devices, with or without internet.",
    icon: ChatIcon,
  },
];

const seo = {
  pageTitle: "Google Workspace",
  title: "Buy Google Workspace in Dubai & Abu Dhabi | BlessHost",
  metaDesc:
    "Get Google Workspace Emails & Collaboration suite including Google Meet & Docs in the UAE. BlessHost is an authorized Google Partner.",
  keywords:
    "what is a google workspace, workspace google, google workspace, google workspace UAE",
  opengraphImage: {},
};

seo.opengraphImage.sourceUrl = `${process.env.OG_URL}/${seo.pageTitle}?description=${seo.metaDesc}`;

export default function GoogleWorkspacePage() {
  const [billingInterval, setBillingInterval] = useState("annually");
  const { currency } = useCurrency("");
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  seo.canonical = `${process.env.NEXT_PUBLIC_BASE_URL}${router.route}`;

  return (
    <>
      <Seo seo={seo} />

      <div className="bg-gray-100">
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                Google Workspace
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Google's all-in-one cloud-based suite for email, shared, and
                collaboration for individuals and businesses.
              </p>
            </div>
          </div>
        </div>
        <div id="pricing" className="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-100" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                  <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    Powered by Google Cloud
                  </h3>
                  <p className="mt-6 text-base text-gray-500">
                    Google Workspace is an Enterprise-ready all-in-one suite to
                    communicate, store and create. Whether you’re in the office
                    or on the road, you and your team are in sync with access to
                    all the latest documents.
                  </p>
                  <div className="mt-8">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-blue-600">
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
                    Starting from
                  </p>
                  <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                    <span>
                      {priceString({
                        customPricingArray: { AED: "25", USD: "6.95" },
                        currency: currency,
                        term: billingInterval,
                      })}
                    </span>
                    <span className="ml-3 text-xl font-medium text-gray-500">
                      {currency.name == "USD" ? currency.name : currency.symbol}
                    </span>
                  </div>
                  <div className="relative pt-4">
                    <p className="text-sm leading-6 font-medium text-gray-900 uppercase">
                      Number of Accounts:
                    </p>
                    <div className="w-full flex flex-row justify-between">
                      <p className="text-xs px-1 rounded-md">1</p>
                      <p className="text-xs px-1 rounded-md">100</p>
                    </div>
                    <input
                      onChange={(e) => setQuantity(e.target.value)}
                      type="range"
                      className="w-full"
                      min="1"
                      defaultValue="1"
                      max="100"
                    />
                  </div>
                  <div className="mt-2">
                    <p className="font-medium text-gray-900">
                      {quantity} {quantity > 1 ? "emails" : "email"}
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="rounded-md shadow">
                      <WHMCSLink
                        pid="135"
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                        label="Order now"
                        configOption={`configoption[158]=${quantity}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeaturesGradient
        title="Google Workspace makes working together a lot easier."
        features={features}
      />

      <Testimonials />

      <FAQsBrand faqs={faqs} />

      <SimpleCTA
        normalText="Ready to switch to yourname@yourbusiness.com?"
        strongText="Get started with Google Workspace today."
        normalButton={{
          label: "Contact us",
          href: "/contact",
        }}
        strongButton={{
          label: "View pricing",
          href: "#pricing",
        }}
      />
    </>
  );
}
