import { Fragment, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ClockIcon,
  CloudIcon,
  CodeIcon,
  CollectionIcon,
  CursorClickIcon,
  DatabaseIcon,
  GlobeIcon,
  MailIcon,
  MenuIcon,
  PresentationChartBarIcon,
  SearchIcon,
  ServerIcon,
  TemplateIcon,
  XIcon,
  SpeakerphoneIcon,
  LockClosedIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Checkout from "../components/slide-over";

const hosting = [
  {
    name: "360 Web Hosting",
    description: "Suitable hosting for small and medium size businesses.",
    href: "/web-hosting",
    icon: GlobeIcon,
  },
  {
    name: "Simple Hosting",
    description: "Hosting optimized for improved perfomance.",
    href: "/simple-hosting",
    icon: CollectionIcon,
  },
  {
    name: "Virtual Servers",
    description: "Get scalable dedicated resources with easy upgrade options.",
    href: "/vps-hosting",
    icon: DatabaseIcon,
  },
  {
    name: "Dedicated Servers",
    description: "Suitable for large organizations or E-commerce websites.",
    href: "/dedicated-hosting",
    icon: ServerIcon,
  },
  {
    name: "Managed Hosting",
    description: "Sit back and relax while we manage your hosting servers.",
    href: "/managed-hosting",
    icon: CloudIcon,
  },
  {
    name: "Google Workspace",
    description: "Host business emails ending with yourcompanyname.com",
    href: "/google-workspace",
    icon: MailIcon,
  },
];

const websites = [
  {
    name: "Website Design",
    description: "We create digital experiences that excite and inspire",
    href: "/website-design",
    icon: TemplateIcon,
  },
  {
    name: "Speed Optimization",
    description: "Avoid losing potential customers due to lazy load time",
    href: "/website-optimization",
    icon: ClockIcon,
  },
  {
    name: "Website Maintenance",
    description: "Annual maintenance packages to keep your website updated",
    href: "/website-maintenance",
    icon: CodeIcon,
  },
  {
    name: "Website Security",
    description: "SSL Certificates, Routine Backups and more.",
    href: "/website-security",
    icon: LockClosedIcon,
  },
];

const marketing = [
  {
    name: "SEO",
    description: "Search Engine Optimization to expand your digital presence",
    href: "/seo",
    icon: PresentationChartBarIcon,
  },
  {
    name: "Social Media",
    description: "Social media management by social media experts",
    href: "/social-media",
    icon: CursorClickIcon,
  },
  {
    name: "Email Marketing",
    description: "Turn more first-time shoppers into lifelong customers",
    href: "/email-marketing",
    icon: SpeakerphoneIcon,
  },
  {
    name: "Google Ads",
    description: "Generate more leads and sales through paid ads",
    href: "/google-marketing",
    icon: SearchIcon,
  },
];

const support = [
  {
    name: "Blog",
    description: "Learn about tips, product updates and company culture.",
    href: "/blog",
  },
  {
    name: "Contact Us",
    description: "Get a personalized solution for your business",
    href: "/contact",
  },
  {
    name: "Affiliates",
    description: "BlessHost offers the most rewarding affiliate programs",
    href: "/affiliates",
  },
  {
    name: "Status",
    description: "Monitor status of our hosting servers in real time",
    href: "https://status.blesshost.com",
  },
  {
    name: "Dedicated Support",
    description: "Get quick response time, technical help and phone support.",
    href: "/dedicated-support",
  },
];

const mobileMenu = [
  {
    name: "360 Web Hosting",
    description: "Suitable hosting for small and medium size businesses.",
    href: "/web-hosting",
    icon: GlobeIcon,
  },
  {
    name: "Website Design",
    description: "We create digital experiences that excite and inspire",
    href: "/website-design",
    icon: TemplateIcon,
  },
  {
    name: "Website Maintenance",
    description: "Annual maintenance packages to keep your website updated",
    href: "/website-maintenance",
    icon: CodeIcon,
  },
  {
    name: "SEO",
    description: "Search Engine Optimization to expand your digital presence",
    href: "/seo",
    icon: PresentationChartBarIcon,
  },
  {
    name: "Portfolio",
    description: "Search Engine Optimization to expand your digital presence",
    href: "/portfolio",
    icon: BriefcaseIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import Topbar from "../components/topbar";

export default function Header() {
  const hostingButtonRef = useRef();
  const websitesButtonRef = useRef();
  const marketingButtonRef = useRef();
  const supportButtonRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 inset-y-0 z-50 filter shadow-md">
      <Topbar />
      <Popover className="z-10 relative bg-white">
        {({ open }) => (
          <>
            <div className="flex justify-between items-center px-4 py-6 sm:px-6 lg:justify-start lg:space-x-10">
              <div className="flex justify-start items-center h-16 lg:w-0 lg:flex-1">
                <Link href="/">
                  <a>
                    <span className="sr-only">BlessHost</span>
                    <svg
                      className="h-14 w-auto"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 548.7 100"
                    >
                      <path
                        fill="#3E83F8"
                        d="M401.4 26.3c-10.9 0-19.8 10.2-19.8 22.7s8.9 22.7 19.8 22.7 19.8-10.2 19.8-22.7-8.8-22.7-19.8-22.7zm0 38.6c-7.8 0-14.1-7.2-14.1-15.9 0-8.8 6.3-15.9 14.1-15.9s14.1 7.2 14.1 15.9c0 8.8-6.3 15.9-14.1 15.9z"
                      />
                      <path
                        fill="#2A3E53"
                        d="M228 26.4v45.4h19.6v-6.5h-11.5V26.4H228zm30.3 38.9h17.5v6.5h-25.6V50.4h-2v-6.3h2V26.4h25.3l.3 6.6h-17.5v11.1h16.2v6.3h-16.2v14.9z"
                      />
                      <path
                        fill="#3E83F8"
                        d="M345.1 72V26.7h7.5v17.9h19.9V26.7h6.6V72h-6.6V51.5h-19.9V72h-7.5zM466 72V32.7h-11.6v-6h31.7v6h-12.6V72H466z"
                      />
                      <path
                        fill="#2A3E53"
                        d="M212.1 26.5c7.1 1.4 13.3 11.1 6.6 19.9 15.8 15.9-.6 25.2-4.3 25.2h-20.9V26.5s15.7-.6 18.6 0m.7 15.9c3.7-5.1-.8-8.8-3.3-8.8h-8.2v17c3.3-5.8 8.3-3.8 11.5-8.2m-10.9 22.3s10.7.1 12.3 0 7.5-4.8-1.3-13.3c-13.1 2.4-11 13.3-11 13.3m91.6-38.3c2 0 3.8.3 5.4.9s2.9 1.5 3.9 2.6c1.1 1.1 1.9 2.4 2.4 3.8s.8 3 .8 4.6v1.5h-7v-.7c0-.8-.1-1.7-.3-2.5-.2-.8-.5-1.6-1-2.2-.5-.6-1.1-1.2-1.9-1.6-.8-.4-1.7-.6-2.9-.6s-2.2.2-3 .6c-.8.4-1.4.9-1.8 1.5s-.7 1.2-.9 1.9c-.2.7-.2 1.3-.2 1.9 0 1.2.3 2.2.9 2.9.6.8 1.3 1.4 2.2 2 .9.5 2 1 3.2 1.4s2.4.8 3.7 1.3c1.2.5 2.5 1 3.7 1.6s2.3 1.4 3.2 2.3c.9 1 1.7 2.1 2.2 3.5.6 1.4.9 3.1.9 5.1 0 2.3-.4 4.3-1.1 6-.7 1.7-1.7 3.1-2.9 4.2s-2.7 1.9-4.4 2.4c-1.7.5-3.5.8-5.5.8-2.5 0-4.7-.4-6.4-1.1-1.8-.7-3.2-1.7-4.4-2.9-1.1-1.2-1.9-2.6-2.5-4.1-.5-1.5-.8-3.1-.8-4.7v-1.3-.5h7.2v.8c0 1.4.2 2.5.5 3.5.4 1 .9 1.8 1.5 2.4s1.4 1.1 2.3 1.4c.9.3 1.8.4 2.8.4.9 0 1.7-.1 2.5-.4s1.5-.7 2.1-1.2c.6-.6 1.1-1.2 1.4-2s.5-1.7.5-2.8c0-1.4-.3-2.5-.9-3.4s-1.3-1.6-2.2-2.2c-.9-.6-2-1.1-3.2-1.6-1.2-.4-2.4-.9-3.7-1.3-1.3-.5-2.5-1-3.7-1.6s-2.2-1.3-3.2-2.2c-.9-.9-1.7-2-2.2-3.3-.6-1.3-.8-3-.8-4.9s.3-3.7 1-5.2c.6-1.5 1.5-2.8 2.7-3.9s2.6-1.9 4.3-2.5c1.6-.3 3.5-.6 5.6-.6m30.5 0c2 0 3.8.3 5.4.9s2.9 1.5 3.9 2.6c1.1 1.1 1.9 2.4 2.4 3.8s.8 3 .8 4.6v1.5h-7v-.7c0-.8-.1-1.7-.3-2.5-.2-.8-.5-1.6-1-2.2-.5-.6-1.1-1.2-1.9-1.6-.8-.4-1.7-.6-2.9-.6s-2.2.2-3 .6c-.8.4-1.4.9-1.8 1.5s-.7 1.2-.9 1.9c-.2.7-.2 1.3-.2 1.9 0 1.2.3 2.2.9 2.9.6.8 1.3 1.4 2.2 2 .9.5 2 1 3.2 1.4s2.4.8 3.7 1.3c1.2.5 2.5 1 3.7 1.6s2.3 1.4 3.2 2.3c.9 1 1.7 2.1 2.2 3.5.6 1.4.9 3.1.9 5.1 0 2.3-.4 4.3-1.1 6-.7 1.7-1.7 3.1-2.9 4.2s-2.7 1.9-4.4 2.4c-1.7.5-3.5.8-5.5.8-2.5 0-4.7-.4-6.4-1.1-1.8-.7-3.2-1.7-4.4-2.9-1.1-1.2-1.9-2.6-2.5-4.1-.5-1.5-.8-3.1-.8-4.7v-1.3-.5h7.2v.8c0 1.4.2 2.5.5 3.5.4 1 .9 1.8 1.5 2.4s1.4 1.1 2.3 1.4c.9.3 1.8.4 2.8.4.9 0 1.7-.1 2.5-.4s1.5-.7 2.1-1.2c.6-.6 1.1-1.2 1.4-2s.5-1.7.5-2.8c0-1.4-.3-2.5-.9-3.4s-1.3-1.6-2.2-2.2c-.9-.6-2-1.1-3.2-1.6-1.2-.4-2.4-.9-3.7-1.3-1.3-.5-2.5-1-3.7-1.6s-2.2-1.3-3.2-2.2c-.9-.9-1.7-2-2.2-3.3-.6-1.3-.8-3-.8-4.9s.3-3.7 1-5.2c.6-1.5 1.5-2.8 2.7-3.9s2.6-1.9 4.3-2.5c1.7-.3 3.5-.6 5.6-.6"
                      />
                      <path
                        fill="#3E83F8"
                        d="M438.4 26.4c2 0 3.8.3 5.4.9s2.9 1.5 3.9 2.6c1.1 1.1 1.9 2.4 2.4 3.8s.8 3 .8 4.6v1.5h-7v-.7c0-.8-.1-1.7-.3-2.5-.2-.8-.5-1.6-1-2.2-.5-.6-1.1-1.2-1.9-1.6-.8-.4-1.7-.6-2.9-.6s-2.2.2-3 .6c-.8.4-1.4.9-1.8 1.5s-.7 1.2-.9 1.9c-.2.7-.2 1.3-.2 1.9 0 1.2.3 2.2.9 2.9.6.8 1.3 1.4 2.2 2 .9.5 2 1 3.2 1.4s2.4.8 3.7 1.3c1.2.5 2.5 1 3.7 1.6s2.3 1.4 3.2 2.3c.9 1 1.7 2.1 2.2 3.5.6 1.4.9 3.1.9 5.1 0 2.3-.4 4.3-1.1 6s-1.7 3.1-2.9 4.2-2.7 1.9-4.4 2.4c-1.7.5-3.5.8-5.5.8-2.5 0-4.7-.4-6.4-1.1-1.8-.7-3.2-1.7-4.4-2.9-1.1-1.2-1.9-2.6-2.5-4.1-.5-1.5-.8-3.1-.8-4.7v-1.3-.5h7.2v.8c0 1.4.2 2.5.5 3.5.4 1 .9 1.8 1.5 2.4s1.4 1.1 2.3 1.4c.9.3 1.8.4 2.8.4.9 0 1.7-.1 2.5-.4s1.5-.7 2.1-1.2c.6-.6 1.1-1.2 1.4-2s.5-1.7.5-2.8c0-1.4-.3-2.5-.9-3.4s-1.3-1.6-2.2-2.2c-.9-.6-2-1.1-3.2-1.6-1.2-.4-2.4-.9-3.7-1.3-1.3-.5-2.5-1-3.7-1.6s-2.2-1.3-3.2-2.2c-.9-.9-1.7-2-2.2-3.3-.6-1.3-.8-3-.8-4.9s.3-3.7 1-5.2c.6-1.5 1.5-2.8 2.7-3.9s2.6-1.9 4.3-2.5c1.7-.3 3.5-.6 5.6-.6"
                      />
                      <path
                        fill="#293C4F"
                        d="M136.7 76.7c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5"
                      />
                      <path
                        fill="#3E83F8"
                        d="M153.8 43.6c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5m0 33.1c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5"
                      />
                      <path
                        fill="#293C4F"
                        d="M153.8 93.3c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5m0-33.4c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5"
                      />
                      <path
                        fill="#3E83F8"
                        d="M170.8 27.7c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5"
                      />
                      <path
                        fill="#293C4F"
                        d="M170.8 43.6c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5m0 33.1c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5"
                      />
                      <path
                        fill="#3E83F8"
                        d="M170.8 59.9c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5m0 33.4c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5M158.8 17.2c.3-.1.7-.1 1-.2-7-9.6-19.1-16.7-31.9-16.7-21.1 0-38.3 17.1-38.3 38.3 0 2.6.3 5.1.7 7.5 2.1-1.1 4.3-2 6.8-2.9-.2-1.5-.3-3-.3-4.6 0-17.2 13.9-31.1 31.1-31.1 10.3 0 20.2 5.8 25.9 13.6.9-2.1 2.8-3.6 5-3.9z"
                      />
                      <path
                        fill="#3E83F8"
                        d="M134.9 93.3c0-1.3.4-2.6 1.1-3.6H89.9c-11.1 0-20.1-9-20.1-20.1s9-20.1 20.1-20.1c3 0 5.8.6 8.3 1.8 4.1 2.1 7.3-4.4 3.2-6.4-3.5-1.6-7.4-2.6-11.5-2.6-15.1 0-27.3 12.2-27.3 27.3s12.2 27.3 27.3 27.3H136c-.7-1.1-1.1-2.3-1.1-3.6z"
                      />
                      <path
                        d="M205.8 85.9c0-4.4 2.9-7.6 7.3-7.6s7.3 3.3 7.3 7.6c0 2.2-.8 4.1-2 5.5l1.4 1.5-1.3 1.1-1.4-1.5c-1.1.7-2.5 1.1-4 1.1-4.4-.1-7.3-3.4-7.3-7.7zm10.1 5.2l-2.1-2.3 1.3-1.1 2.1 2.3c.9-1.1 1.4-2.5 1.4-4.1 0-3.5-2.1-6-5.4-6-3.3 0-5.4 2.5-5.4 6 0 3.4 2.1 6 5.4 6 1 0 1.9-.3 2.7-.8zm15.6 2.2v-1.5c-.8.9-2.2 1.8-3.8 1.8-2.2 0-3.4-1.1-3.4-3.4v-7.6h1.7v7c0 1.9 1 2.4 2.4 2.4 1.3 0 2.5-.8 3.2-1.6v-7.9h1.7v10.7l-1.8.1zm12.7 0V92c-.9 1-2.1 1.5-3.5 1.5-1.8 0-3.7-1.2-3.7-3.5 0-2.4 1.9-3.5 3.7-3.5 1.5 0 2.7.5 3.5 1.5v-2c0-1.4-1.2-2.3-2.7-2.3-1.3 0-2.3.5-3.3 1.5l-.8-1.2c1.2-1.2 2.5-1.8 4.3-1.8 2.3 0 4.1 1 4.1 3.6v7.4l-1.6.1zm0-2.3v-2c-.6-.9-1.8-1.3-2.9-1.3-1.6 0-2.6 1-2.6 2.3 0 1.4 1.1 2.3 2.6 2.3 1.1 0 2.2-.4 2.9-1.3zm6 2.3V78.5h1.7v14.8h-1.7zm5.7-13.4c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1zm.2 13.4V82.6h1.7v10.7h-1.7zm6.4-2.3v-7h-1.8v-1.5h1.8v-2.9h1.7v2.9h2.2V84h-2.2v6.6c0 .8.4 1.4 1.1 1.4.5 0 .9-.2 1.1-.4l.5 1.2c-.4.4-1 .7-2 .7-1.6 0-2.4-.9-2.4-2.5zm6.8 4.9c.2.1.6.2.9.2.7 0 1.2-.2 1.6-1.1l.7-1.6-4.5-10.8h1.8l3.6 8.8 3.5-8.8h1.8l-5.4 12.9c-.6 1.6-1.7 2.1-3.1 2.2-.4 0-.9-.1-1.2-.2l.3-1.6zm28.2-2.6l-2.8-8.6-2.8 8.6h-1.7l-3.4-10.7h1.7l2.6 8.5 2.8-8.5h1.4l2.8 8.5 2.6-8.5h1.7L299 93.3h-1.5zm7.7-13.4c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1zm.3 13.4V82.6h1.7v10.7h-1.7zm6.3-2.3v-7H310v-1.5h1.8v-2.9h1.7v2.9h2.2V84h-2.2v6.6c0 .8.4 1.4 1.1 1.4.5 0 .9-.2 1.1-.4l.5 1.2c-.4.4-1 .7-2 .7-1.6 0-2.4-.9-2.4-2.5zm14.4 2.3v-7c0-1.9-1-2.4-2.4-2.4-1.3 0-2.5.8-3.2 1.7v7.8H319V78.5h1.7v5.6c.8-.9 2.2-1.8 3.8-1.8 2.2 0 3.4 1.1 3.4 3.4v7.6h-1.7zm23.3 0l-1.3-3.3h-7.4l-1.3 3.3h-2.1l5.9-14.8h2.3l6 14.8h-2.1zm-5-12.9l-3.1 8h6.3l-3.2-8zm10.2 12.9V84H353v-1.5h1.8v-.8c0-2.2 1.2-3.5 3.1-3.5.8 0 1.6.2 2.3.8l-.7 1.1c-.4-.3-.8-.5-1.3-.5-1.1 0-1.7.8-1.7 2.1v.8h2.2V84h-2.2v9.2l-1.8.1zm6.3 0V84h-1.8v-1.5h1.8v-.8c0-2.2 1.2-3.5 3.1-3.5.8 0 1.6.2 2.3.8l-.7 1.1c-.4-.3-.8-.5-1.3-.5-1.1 0-1.7.8-1.7 2.1v.8h2.2V84h-2.2v9.2l-1.7.1zm6.2-5.4c0-3.1 2-5.6 5.3-5.6s5.3 2.5 5.3 5.6-2 5.6-5.3 5.6-5.3-2.5-5.3-5.6zm8.9 0c0-2.2-1.3-4.1-3.5-4.1-2.3 0-3.6 1.9-3.6 4.1s1.3 4.1 3.6 4.1c2.2 0 3.5-1.9 3.5-4.1zm5.4 5.4V82.6h1.7v1.7c.9-1.1 2.1-2 3.6-2V84c-.2 0-.4-.1-.7-.1-1 0-2.4.8-2.9 1.7v7.6l-1.7.1zm16.1 0v-1.6c-.8 1.1-2.1 1.9-3.6 1.9-2.8 0-4.8-2.1-4.8-5.6 0-3.4 1.9-5.6 4.8-5.6 1.4 0 2.7.7 3.6 1.9v-5.7h1.7v14.8h-1.7v-.1zm0-2.9v-4.9c-.6-.9-1.9-1.7-3.2-1.7-2.1 0-3.4 1.8-3.4 4.1 0 2.4 1.3 4.1 3.4 4.1 1.3 0 2.6-.7 3.2-1.6zm12.6 2.9V92c-.9 1-2.1 1.5-3.5 1.5-1.8 0-3.7-1.2-3.7-3.5 0-2.4 1.9-3.5 3.7-3.5 1.5 0 2.7.5 3.5 1.5v-2c0-1.4-1.2-2.3-2.7-2.3-1.3 0-2.3.5-3.3 1.5l-.8-1.2c1.2-1.2 2.5-1.8 4.3-1.8 2.3 0 4.1 1 4.1 3.6v7.4l-1.6.1zm0-2.3v-2c-.6-.9-1.8-1.3-2.9-1.3-1.6 0-2.6 1-2.6 2.3 0 1.4 1.1 2.3 2.6 2.3 1.2 0 2.3-.4 2.9-1.3zm6 2.3V78.5h1.7v5.7c.9-1.2 2.1-1.9 3.6-1.9 2.8 0 4.8 2.2 4.8 5.6 0 3.5-2 5.6-4.8 5.6-1.5 0-2.8-.8-3.6-1.9v1.6h-1.7v.1zm4.9-1.3c2.2 0 3.5-1.8 3.5-4.1 0-2.4-1.3-4.1-3.5-4.1-1.3 0-2.6.8-3.2 1.7v4.9c.6.9 1.9 1.6 3.2 1.6zm8.6-12.1c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1zm.3 13.4V82.6h1.7v10.7H430zm5.9 0V78.5h1.7v14.8h-1.7zm5.7-13.4c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1zm.3 13.4V82.6h1.7v10.7h-1.7zm6.3-2.3v-7h-1.8v-1.5h1.8v-2.9h1.7v2.9h2.2V84h-2.2v6.6c0 .8.4 1.4 1.1 1.4.5 0 .9-.2 1.1-.4l.5 1.2c-.4.4-1 .7-2 .7-1.6 0-2.4-.9-2.4-2.5zm6.9 4.9c.2.1.6.2.9.2.7 0 1.2-.2 1.6-1.1l.7-1.6-4.5-10.8h1.8l3.6 8.8 3.5-8.8h1.8l-5.4 12.9c-.6 1.6-1.7 2.1-3.1 2.2-.4 0-.9-.1-1.2-.2l.3-1.6z"
                        fill="#4c4c4c"
                      />
                      <path
                        fill="#3E83F8"
                        d="M187 43.6c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5m0 33.1c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5"
                      />
                      <path
                        fill="#293C4F"
                        d="M187 59.9c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="-mr-2 -my-2 lg:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden lg:flex space-x-6">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        ref={hostingButtonRef}
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        )}
                      >
                        <span>Hosting</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                              {hosting.map((item) => (
                                <div
                                  key={item.name}
                                  onClick={() =>
                                    hostingButtonRef.current?.click()
                                  }
                                >
                                  <Link href={item.href}>
                                    <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white sm:h-12 sm:w-12">
                                        <item.icon
                                          className="h-6 w-6"
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                </div>
                              ))}
                            </div>
                            <div className="p-5 bg-gray-50 sm:p-8">
                              <div
                                onClick={() =>
                                  hostingButtonRef.current?.click()
                                }
                              >
                                <Link href="/transfers">
                                  <a className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                                    <div className="flex items-center">
                                      <div className="text-base font-medium text-gray-900">
                                        Transfers
                                      </div>
                                      <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-blue-100 text-blue-700">
                                        Free
                                      </span>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      Let us move your website and emails to us
                                      within 24 hours.
                                    </p>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        ref={websitesButtonRef}
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        )}
                      >
                        <span>Websites</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                              {websites.map((item) => (
                                <div
                                  key={item.name}
                                  onClick={() =>
                                    websitesButtonRef.current?.click()
                                  }
                                >
                                  <Link href={item.href}>
                                    <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white sm:h-12 sm:w-12">
                                        <item.icon
                                          className="h-6 w-6"
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                </div>
                              ))}
                            </div>
                            <div
                              onClick={() => websitesButtonRef.current?.click()}
                              className="p-5 bg-gray-50 sm:p-8"
                            >
                              <Link href="/portfolio">
                                <a className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                                  <div className="flex items-center">
                                    <div className="text-base font-medium text-gray-900">
                                      Portfolio
                                    </div>
                                    <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-blue-100 text-blue-700">
                                      Updated
                                    </span>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">
                                    See our extensive portfolio for the work we
                                    have done!
                                  </p>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        ref={marketingButtonRef}
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        )}
                      >
                        <span>Marketing</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                              {marketing.map((item) => (
                                <div
                                  onClick={() =>
                                    marketingButtonRef.current?.click()
                                  }
                                  key={item.name}
                                >
                                  <Link href={item.href}>
                                    <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white sm:h-12 sm:w-12">
                                        <item.icon
                                          className="h-6 w-6"
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                </div>
                              ))}
                            </div>
                            <div
                              onClick={() =>
                                marketingButtonRef.current?.click()
                              }
                              className="p-5 bg-gray-50 sm:p-8"
                            >
                              <Link href="/seo-report">
                                <a className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                                  <div className="flex items-center">
                                    <div className="text-base font-medium text-gray-900">
                                      SEO Report
                                    </div>
                                    <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-blue-100 text-blue-700">
                                      Free
                                    </span>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">
                                    We will generate an SEO report for your
                                    website
                                  </p>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        ref={supportButtonRef}
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        )}
                      >
                        <span>Support</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {support.map((item) => (
                                <div
                                  onClick={() =>
                                    supportButtonRef.current?.click()
                                  }
                                  key={item.name}
                                >
                                  <Link href={item.href}>
                                    <a className="-m-3 p-3 block rounded-md hover:bg-gray-50">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                        {item.name == "Status" ? (
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ml-1 mb-1 w-5 h-5 inline"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                          >
                                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                          </svg>
                                        ) : null}
                                      </p>

                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </a>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
              <div className="hidden text-gray-500 lg:flex items-center justify-end lg:flex-1 lg:w-0">
                <button
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  <Checkout open={isOpen} setOpen={setIsOpen} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-6 mb-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </button>
                <a
                  href="https://billing.blesshost.com/index.php?rp=/login"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                </a>
                <a
                  href="https://billing.blesshost.com/register.php"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Sign up
                </a>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <svg
                          className="h-10 -ml-5"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 548.7 100"
                        >
                          <path
                            fill="#3E83F8"
                            d="M401.4 26.3c-10.9 0-19.8 10.2-19.8 22.7s8.9 22.7 19.8 22.7 19.8-10.2 19.8-22.7-8.8-22.7-19.8-22.7zm0 38.6c-7.8 0-14.1-7.2-14.1-15.9 0-8.8 6.3-15.9 14.1-15.9s14.1 7.2 14.1 15.9c0 8.8-6.3 15.9-14.1 15.9z"
                          />
                          <path
                            fill="#2A3E53"
                            d="M228 26.4v45.4h19.6v-6.5h-11.5V26.4H228zm30.3 38.9h17.5v6.5h-25.6V50.4h-2v-6.3h2V26.4h25.3l.3 6.6h-17.5v11.1h16.2v6.3h-16.2v14.9z"
                          />
                          <path
                            fill="#3E83F8"
                            d="M345.1 72V26.7h7.5v17.9h19.9V26.7h6.6V72h-6.6V51.5h-19.9V72h-7.5zM466 72V32.7h-11.6v-6h31.7v6h-12.6V72H466z"
                          />
                          <path
                            fill="#2A3E53"
                            d="M212.1 26.5c7.1 1.4 13.3 11.1 6.6 19.9 15.8 15.9-.6 25.2-4.3 25.2h-20.9V26.5s15.7-.6 18.6 0m.7 15.9c3.7-5.1-.8-8.8-3.3-8.8h-8.2v17c3.3-5.8 8.3-3.8 11.5-8.2m-10.9 22.3s10.7.1 12.3 0 7.5-4.8-1.3-13.3c-13.1 2.4-11 13.3-11 13.3m91.6-38.3c2 0 3.8.3 5.4.9s2.9 1.5 3.9 2.6c1.1 1.1 1.9 2.4 2.4 3.8s.8 3 .8 4.6v1.5h-7v-.7c0-.8-.1-1.7-.3-2.5-.2-.8-.5-1.6-1-2.2-.5-.6-1.1-1.2-1.9-1.6-.8-.4-1.7-.6-2.9-.6s-2.2.2-3 .6c-.8.4-1.4.9-1.8 1.5s-.7 1.2-.9 1.9c-.2.7-.2 1.3-.2 1.9 0 1.2.3 2.2.9 2.9.6.8 1.3 1.4 2.2 2 .9.5 2 1 3.2 1.4s2.4.8 3.7 1.3c1.2.5 2.5 1 3.7 1.6s2.3 1.4 3.2 2.3c.9 1 1.7 2.1 2.2 3.5.6 1.4.9 3.1.9 5.1 0 2.3-.4 4.3-1.1 6-.7 1.7-1.7 3.1-2.9 4.2s-2.7 1.9-4.4 2.4c-1.7.5-3.5.8-5.5.8-2.5 0-4.7-.4-6.4-1.1-1.8-.7-3.2-1.7-4.4-2.9-1.1-1.2-1.9-2.6-2.5-4.1-.5-1.5-.8-3.1-.8-4.7v-1.3-.5h7.2v.8c0 1.4.2 2.5.5 3.5.4 1 .9 1.8 1.5 2.4s1.4 1.1 2.3 1.4c.9.3 1.8.4 2.8.4.9 0 1.7-.1 2.5-.4s1.5-.7 2.1-1.2c.6-.6 1.1-1.2 1.4-2s.5-1.7.5-2.8c0-1.4-.3-2.5-.9-3.4s-1.3-1.6-2.2-2.2c-.9-.6-2-1.1-3.2-1.6-1.2-.4-2.4-.9-3.7-1.3-1.3-.5-2.5-1-3.7-1.6s-2.2-1.3-3.2-2.2c-.9-.9-1.7-2-2.2-3.3-.6-1.3-.8-3-.8-4.9s.3-3.7 1-5.2c.6-1.5 1.5-2.8 2.7-3.9s2.6-1.9 4.3-2.5c1.6-.3 3.5-.6 5.6-.6m30.5 0c2 0 3.8.3 5.4.9s2.9 1.5 3.9 2.6c1.1 1.1 1.9 2.4 2.4 3.8s.8 3 .8 4.6v1.5h-7v-.7c0-.8-.1-1.7-.3-2.5-.2-.8-.5-1.6-1-2.2-.5-.6-1.1-1.2-1.9-1.6-.8-.4-1.7-.6-2.9-.6s-2.2.2-3 .6c-.8.4-1.4.9-1.8 1.5s-.7 1.2-.9 1.9c-.2.7-.2 1.3-.2 1.9 0 1.2.3 2.2.9 2.9.6.8 1.3 1.4 2.2 2 .9.5 2 1 3.2 1.4s2.4.8 3.7 1.3c1.2.5 2.5 1 3.7 1.6s2.3 1.4 3.2 2.3c.9 1 1.7 2.1 2.2 3.5.6 1.4.9 3.1.9 5.1 0 2.3-.4 4.3-1.1 6-.7 1.7-1.7 3.1-2.9 4.2s-2.7 1.9-4.4 2.4c-1.7.5-3.5.8-5.5.8-2.5 0-4.7-.4-6.4-1.1-1.8-.7-3.2-1.7-4.4-2.9-1.1-1.2-1.9-2.6-2.5-4.1-.5-1.5-.8-3.1-.8-4.7v-1.3-.5h7.2v.8c0 1.4.2 2.5.5 3.5.4 1 .9 1.8 1.5 2.4s1.4 1.1 2.3 1.4c.9.3 1.8.4 2.8.4.9 0 1.7-.1 2.5-.4s1.5-.7 2.1-1.2c.6-.6 1.1-1.2 1.4-2s.5-1.7.5-2.8c0-1.4-.3-2.5-.9-3.4s-1.3-1.6-2.2-2.2c-.9-.6-2-1.1-3.2-1.6-1.2-.4-2.4-.9-3.7-1.3-1.3-.5-2.5-1-3.7-1.6s-2.2-1.3-3.2-2.2c-.9-.9-1.7-2-2.2-3.3-.6-1.3-.8-3-.8-4.9s.3-3.7 1-5.2c.6-1.5 1.5-2.8 2.7-3.9s2.6-1.9 4.3-2.5c1.7-.3 3.5-.6 5.6-.6"
                          />
                          <path
                            fill="#3E83F8"
                            d="M438.4 26.4c2 0 3.8.3 5.4.9s2.9 1.5 3.9 2.6c1.1 1.1 1.9 2.4 2.4 3.8s.8 3 .8 4.6v1.5h-7v-.7c0-.8-.1-1.7-.3-2.5-.2-.8-.5-1.6-1-2.2-.5-.6-1.1-1.2-1.9-1.6-.8-.4-1.7-.6-2.9-.6s-2.2.2-3 .6c-.8.4-1.4.9-1.8 1.5s-.7 1.2-.9 1.9c-.2.7-.2 1.3-.2 1.9 0 1.2.3 2.2.9 2.9.6.8 1.3 1.4 2.2 2 .9.5 2 1 3.2 1.4s2.4.8 3.7 1.3c1.2.5 2.5 1 3.7 1.6s2.3 1.4 3.2 2.3c.9 1 1.7 2.1 2.2 3.5.6 1.4.9 3.1.9 5.1 0 2.3-.4 4.3-1.1 6s-1.7 3.1-2.9 4.2-2.7 1.9-4.4 2.4c-1.7.5-3.5.8-5.5.8-2.5 0-4.7-.4-6.4-1.1-1.8-.7-3.2-1.7-4.4-2.9-1.1-1.2-1.9-2.6-2.5-4.1-.5-1.5-.8-3.1-.8-4.7v-1.3-.5h7.2v.8c0 1.4.2 2.5.5 3.5.4 1 .9 1.8 1.5 2.4s1.4 1.1 2.3 1.4c.9.3 1.8.4 2.8.4.9 0 1.7-.1 2.5-.4s1.5-.7 2.1-1.2c.6-.6 1.1-1.2 1.4-2s.5-1.7.5-2.8c0-1.4-.3-2.5-.9-3.4s-1.3-1.6-2.2-2.2c-.9-.6-2-1.1-3.2-1.6-1.2-.4-2.4-.9-3.7-1.3-1.3-.5-2.5-1-3.7-1.6s-2.2-1.3-3.2-2.2c-.9-.9-1.7-2-2.2-3.3-.6-1.3-.8-3-.8-4.9s.3-3.7 1-5.2c.6-1.5 1.5-2.8 2.7-3.9s2.6-1.9 4.3-2.5c1.7-.3 3.5-.6 5.6-.6"
                          />
                          <path
                            fill="#293C4F"
                            d="M136.7 76.7c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5"
                          />
                          <path
                            fill="#3E83F8"
                            d="M153.8 43.6c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5m0 33.1c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5"
                          />
                          <path
                            fill="#293C4F"
                            d="M153.8 93.3c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5m0-33.4c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5"
                          />
                          <path
                            fill="#3E83F8"
                            d="M170.8 27.7c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5"
                          />
                          <path
                            fill="#293C4F"
                            d="M170.8 43.6c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5m0 33.1c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5"
                          />
                          <path
                            fill="#3E83F8"
                            d="M170.8 59.9c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5m0 33.4c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5M158.8 17.2c.3-.1.7-.1 1-.2-7-9.6-19.1-16.7-31.9-16.7-21.1 0-38.3 17.1-38.3 38.3 0 2.6.3 5.1.7 7.5 2.1-1.1 4.3-2 6.8-2.9-.2-1.5-.3-3-.3-4.6 0-17.2 13.9-31.1 31.1-31.1 10.3 0 20.2 5.8 25.9 13.6.9-2.1 2.8-3.6 5-3.9z"
                          />
                          <path
                            fill="#3E83F8"
                            d="M134.9 93.3c0-1.3.4-2.6 1.1-3.6H89.9c-11.1 0-20.1-9-20.1-20.1s9-20.1 20.1-20.1c3 0 5.8.6 8.3 1.8 4.1 2.1 7.3-4.4 3.2-6.4-3.5-1.6-7.4-2.6-11.5-2.6-15.1 0-27.3 12.2-27.3 27.3s12.2 27.3 27.3 27.3H136c-.7-1.1-1.1-2.3-1.1-3.6z"
                          />
                          <path
                            d="M205.8 85.9c0-4.4 2.9-7.6 7.3-7.6s7.3 3.3 7.3 7.6c0 2.2-.8 4.1-2 5.5l1.4 1.5-1.3 1.1-1.4-1.5c-1.1.7-2.5 1.1-4 1.1-4.4-.1-7.3-3.4-7.3-7.7zm10.1 5.2l-2.1-2.3 1.3-1.1 2.1 2.3c.9-1.1 1.4-2.5 1.4-4.1 0-3.5-2.1-6-5.4-6-3.3 0-5.4 2.5-5.4 6 0 3.4 2.1 6 5.4 6 1 0 1.9-.3 2.7-.8zm15.6 2.2v-1.5c-.8.9-2.2 1.8-3.8 1.8-2.2 0-3.4-1.1-3.4-3.4v-7.6h1.7v7c0 1.9 1 2.4 2.4 2.4 1.3 0 2.5-.8 3.2-1.6v-7.9h1.7v10.7l-1.8.1zm12.7 0V92c-.9 1-2.1 1.5-3.5 1.5-1.8 0-3.7-1.2-3.7-3.5 0-2.4 1.9-3.5 3.7-3.5 1.5 0 2.7.5 3.5 1.5v-2c0-1.4-1.2-2.3-2.7-2.3-1.3 0-2.3.5-3.3 1.5l-.8-1.2c1.2-1.2 2.5-1.8 4.3-1.8 2.3 0 4.1 1 4.1 3.6v7.4l-1.6.1zm0-2.3v-2c-.6-.9-1.8-1.3-2.9-1.3-1.6 0-2.6 1-2.6 2.3 0 1.4 1.1 2.3 2.6 2.3 1.1 0 2.2-.4 2.9-1.3zm6 2.3V78.5h1.7v14.8h-1.7zm5.7-13.4c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1zm.2 13.4V82.6h1.7v10.7h-1.7zm6.4-2.3v-7h-1.8v-1.5h1.8v-2.9h1.7v2.9h2.2V84h-2.2v6.6c0 .8.4 1.4 1.1 1.4.5 0 .9-.2 1.1-.4l.5 1.2c-.4.4-1 .7-2 .7-1.6 0-2.4-.9-2.4-2.5zm6.8 4.9c.2.1.6.2.9.2.7 0 1.2-.2 1.6-1.1l.7-1.6-4.5-10.8h1.8l3.6 8.8 3.5-8.8h1.8l-5.4 12.9c-.6 1.6-1.7 2.1-3.1 2.2-.4 0-.9-.1-1.2-.2l.3-1.6zm28.2-2.6l-2.8-8.6-2.8 8.6h-1.7l-3.4-10.7h1.7l2.6 8.5 2.8-8.5h1.4l2.8 8.5 2.6-8.5h1.7L299 93.3h-1.5zm7.7-13.4c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1zm.3 13.4V82.6h1.7v10.7h-1.7zm6.3-2.3v-7H310v-1.5h1.8v-2.9h1.7v2.9h2.2V84h-2.2v6.6c0 .8.4 1.4 1.1 1.4.5 0 .9-.2 1.1-.4l.5 1.2c-.4.4-1 .7-2 .7-1.6 0-2.4-.9-2.4-2.5zm14.4 2.3v-7c0-1.9-1-2.4-2.4-2.4-1.3 0-2.5.8-3.2 1.7v7.8H319V78.5h1.7v5.6c.8-.9 2.2-1.8 3.8-1.8 2.2 0 3.4 1.1 3.4 3.4v7.6h-1.7zm23.3 0l-1.3-3.3h-7.4l-1.3 3.3h-2.1l5.9-14.8h2.3l6 14.8h-2.1zm-5-12.9l-3.1 8h6.3l-3.2-8zm10.2 12.9V84H353v-1.5h1.8v-.8c0-2.2 1.2-3.5 3.1-3.5.8 0 1.6.2 2.3.8l-.7 1.1c-.4-.3-.8-.5-1.3-.5-1.1 0-1.7.8-1.7 2.1v.8h2.2V84h-2.2v9.2l-1.8.1zm6.3 0V84h-1.8v-1.5h1.8v-.8c0-2.2 1.2-3.5 3.1-3.5.8 0 1.6.2 2.3.8l-.7 1.1c-.4-.3-.8-.5-1.3-.5-1.1 0-1.7.8-1.7 2.1v.8h2.2V84h-2.2v9.2l-1.7.1zm6.2-5.4c0-3.1 2-5.6 5.3-5.6s5.3 2.5 5.3 5.6-2 5.6-5.3 5.6-5.3-2.5-5.3-5.6zm8.9 0c0-2.2-1.3-4.1-3.5-4.1-2.3 0-3.6 1.9-3.6 4.1s1.3 4.1 3.6 4.1c2.2 0 3.5-1.9 3.5-4.1zm5.4 5.4V82.6h1.7v1.7c.9-1.1 2.1-2 3.6-2V84c-.2 0-.4-.1-.7-.1-1 0-2.4.8-2.9 1.7v7.6l-1.7.1zm16.1 0v-1.6c-.8 1.1-2.1 1.9-3.6 1.9-2.8 0-4.8-2.1-4.8-5.6 0-3.4 1.9-5.6 4.8-5.6 1.4 0 2.7.7 3.6 1.9v-5.7h1.7v14.8h-1.7v-.1zm0-2.9v-4.9c-.6-.9-1.9-1.7-3.2-1.7-2.1 0-3.4 1.8-3.4 4.1 0 2.4 1.3 4.1 3.4 4.1 1.3 0 2.6-.7 3.2-1.6zm12.6 2.9V92c-.9 1-2.1 1.5-3.5 1.5-1.8 0-3.7-1.2-3.7-3.5 0-2.4 1.9-3.5 3.7-3.5 1.5 0 2.7.5 3.5 1.5v-2c0-1.4-1.2-2.3-2.7-2.3-1.3 0-2.3.5-3.3 1.5l-.8-1.2c1.2-1.2 2.5-1.8 4.3-1.8 2.3 0 4.1 1 4.1 3.6v7.4l-1.6.1zm0-2.3v-2c-.6-.9-1.8-1.3-2.9-1.3-1.6 0-2.6 1-2.6 2.3 0 1.4 1.1 2.3 2.6 2.3 1.2 0 2.3-.4 2.9-1.3zm6 2.3V78.5h1.7v5.7c.9-1.2 2.1-1.9 3.6-1.9 2.8 0 4.8 2.2 4.8 5.6 0 3.5-2 5.6-4.8 5.6-1.5 0-2.8-.8-3.6-1.9v1.6h-1.7v.1zm4.9-1.3c2.2 0 3.5-1.8 3.5-4.1 0-2.4-1.3-4.1-3.5-4.1-1.3 0-2.6.8-3.2 1.7v4.9c.6.9 1.9 1.6 3.2 1.6zm8.6-12.1c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1zm.3 13.4V82.6h1.7v10.7H430zm5.9 0V78.5h1.7v14.8h-1.7zm5.7-13.4c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1zm.3 13.4V82.6h1.7v10.7h-1.7zm6.3-2.3v-7h-1.8v-1.5h1.8v-2.9h1.7v2.9h2.2V84h-2.2v6.6c0 .8.4 1.4 1.1 1.4.5 0 .9-.2 1.1-.4l.5 1.2c-.4.4-1 .7-2 .7-1.6 0-2.4-.9-2.4-2.5zm6.9 4.9c.2.1.6.2.9.2.7 0 1.2-.2 1.6-1.1l.7-1.6-4.5-10.8h1.8l3.6 8.8 3.5-8.8h1.8l-5.4 12.9c-.6 1.6-1.7 2.1-3.1 2.2-.4 0-.9-.1-1.2-.2l.3-1.6z"
                            fill="#4c4c4c"
                          />
                          <path
                            fill="#3E83F8"
                            d="M187 43.6c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5m0 33.1c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5"
                          />
                          <path
                            fill="#293C4F"
                            d="M187 59.9c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5"
                          />
                        </svg>
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid grid-cols-1 gap-7">
                        {mobileMenu.map((item) => (
                          <Link key={item.name} href={item.href}>
                            <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white">
                                <item.icon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-4 text-base font-medium text-gray-900">
                                {item.name}
                              </div>
                            </a>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5">
                    <div className="grid grid-cols-2 gap-4">
                      <Link href="/vps-hosting">
                        <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                          Virtual Servers
                        </a>
                      </Link>

                      <Link href="/dedicated-hosting">
                        <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                          Dedicated Servers
                        </a>
                      </Link>

                      <Link href="/about">
                        <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                          About Us
                        </a>
                      </Link>

                      <Link href="/contact">
                        <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                          Contact Us
                        </a>
                      </Link>

                      <Link href="/blog">
                        <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                          Blog
                        </a>
                      </Link>

                      <Link href="/careers">
                        <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                          Careers
                        </a>
                      </Link>
                    </div>
                    <div className="mt-6">
                      <a
                        href="https://billing.blesshost.com/register.php"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Sign up
                      </a>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?{" "}
                        <a
                          href="https://billing.blesshost.com/index.php?rp=/login"
                          className="text-blue-600 hover:text-blue-500"
                        >
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </header>
  );
}
