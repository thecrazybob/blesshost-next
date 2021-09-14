import Link from "next/link";
import {
  AnnotationIcon,
  MailIcon,
  PhoneIcon,
  SupportIcon,
} from "@heroicons/react/outline";
import ContactForm from "../components/contact-form";
import Seo from "../components/seo";
import { useRouter } from "next/router";

const supportLinks = [
  {
    name: "Knowledge Base",
    href: "https://billing.blesshost.com/knowledgebase",
    description: "Explore the most common issues and find a solution.",
    label: "Visit our knowledge base",
    icon: AnnotationIcon,
  },
  {
    name: "Live Chat",
    href: "https://wa.me/+971544423111",
    description: "Average waiting time < 1 minute.",
    label: "Chat with us now!",
    icon: SupportIcon,
  },
  {
    name: "Call Us",
    href: "tel:+971544423111",
    description: "Average waiting time < 1 minute.",
    label: "+971 5 444 23111",
    icon: PhoneIcon,
  },
  {
    name: "Send an e-mail",
    href: "mailto:support@blesshost.com",
    description: "Average response time < 3 hours.",
    label: "support@blesshost.com",
    icon: MailIcon,
  },
];

const seo = {
  pageTitle: "Contact",
  title: "Web hosting and web design company with 24/7 support | Blesshost",
  metaDesc:
    "Contact our company for web Hosting, Domain Registration, 24x7 support, server provisioning, and website development in Abu Dhabi and Dubai. ",
  keywords:
    "contact blesshost, Website Development, web hosting companies in abu dhabi",
  opengraphImage: {},
};

seo.opengraphImage.sourceUrl = `${process.env.OG_URL}/${seo.pageTitle}?description=${seo.metaDesc}`;
seo.canonical = `${process.env.BASE_URL}/${seo.pageTitle.toLowerCase()}`;

export default function Page() {
  return (
    <>
      <Seo seo={seo} />
      <div className="bg-gray-100">
        <div className="relative pb-32 bg-gray-800">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
              alt=""
            />
            <div
              className="absolute inset-0 bg-blue-800 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Support
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              You can contact our team of experts through various methods listed
              below.
            </p>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="-mt-32 max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-4 lg:gap-y-0 lg:gap-x-4">
            {supportLinks.map((link) => (
              <div
                key={link.name}
                className="flex flex-col bg-white rounded-2xl shadow-xl"
              >
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <div className="absolute top-0 p-5 inline-block bg-blue-600 rounded-xl shadow-lg transform -translate-y-1/2">
                    <link.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">
                    {link.name}
                  </h3>
                  <p className="mt-4 text-base text-gray-500">
                    {link.description}
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                  <Link href={link.href}>
                    <a className="text-base font-medium text-blue-700 hover:text-blue-600">
                      {link.label}
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <ContactForm></ContactForm>
    </>
  );
}
