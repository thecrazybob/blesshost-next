import TitleBar from "../components/title-bar";
import Image from "next/image";
import falkenstein from "../public/img/datacenters/falkenstein.jpg";
import dubai from "../public/img/datacenters/dubai.jpg";
import abudhabi from "../public/img/datacenters/abudhabi.jpg";
import montreal from "../public/img/datacenters/montreal.jpg";
import Seo from "../components/seo";
import { useRouter } from "next/router";

const datacenters = [
  {
    location: "Dubai, UAE",
    ip: "86.96.202.170",
    image: dubai,
  },
  {
    location: "Abu Dhabi, UAE",
    ip: "Available on request",
    image: abudhabi,
  },
  {
    location: "Falkenstein, Germany",
    ip: "136.243.115.120",
    image: falkenstein,
  },
  {
    location: "Montreal, Canada",
    ip: "144.217.74.1",
    image: montreal,
  },
];

import { CheckIcon } from "@heroicons/react/outline";

const features = [
  {
    name: "Masonry and steel construction",
  },
  {
    name: "24 hour manned security, CCTV & Intruder Alarms",
  },
  {
    name: "24 hour network monitoring",
  },
  {
    name: "N+1 Air Conditioning Systems",
  },
  {
    name: "Dual zone fire detection & suppression system",
  },
  {
    name: "Redundant onsite diesel generators",
  },
  {
    name: "Dark Fibre Capability & Diverse Fibre Entry",
  },
  {
    name: "Carrier Neutral",
  },
  {
    name: "N+1 Config",
  },
  {
    name: "Controlled Environment",
  },
  {
    name: "Onsite technical engineers 24x7",
  },
  {
    name: "Onsite Network Operations Centre (NOC)",
  },
];

const security = [
  "All doors, including cages, are secured with biometric hand geometry readers",
  "CCTV digital camera coverage of entire centre, including cages, with archival system",
  "Silent alarm and automatic notification of appropriate law enforcement officials protect all exterior entrances",
  "Motion-detection for lighting and CCTV coverage",
  "Shipping and receiving area walled off from colocation areas",
];

const conditions = [
  "A minimum of N+1 configuration at the Computer Room Air Conditioner (CRAC) level",
  "Computer Room Air Conditioner (CRAC) units strategically positioned for optimal airflow efficiency",
  "CRAC units maintain temperature and humidity within four degrees and 5% of temperature and humidity set points",
  "Moisture containment basins and sensors ensure no moisture gets in the data center",
  "Separate and further redundant cooling systems for critical support areas (NOC, MIS, Security)",
];

const interconnectivity = [
  "System Overhead cable tray system with multi-tier ladder rack",
  "Cross Connects Enables customers within Data centre to cross connect internally",
  "Internet Exchange (UAE-IX) UAE-IX is a neutral Internet traffic exchange platform to interconnect global networks",
  "International Connectivity - Enables customers to connect from data centre from UAE entry points without landing traffic in the UAE",
  "UAE Access - Provides the capability for customers to connect to UAE locations",
  "Carrier Neutral",
];

const power = [
  "Dual independent power feeds, backed up by dual battery string Uninterrupted Power Supplies (UPS) systems (deployed as standard)",
  "Onsite diesel generators protect services from any single power failure",
];

const seo = {
  pageTitle: "Data Centers",
  title:
    "Data centers in UAE & around the world with high speed uplink | BlessHost",
  metaDesc:
    "BlessHost offers the most reliable web hosting solutions with Data centers in the UAE and major locations in Europe, Asia, and America. ",
  keywords:
    "data center companies in uae, data center in dubai, cloud hosting data center, best data centers in uae",
  opengraphImage: {},
};

seo.opengraphImage.sourceUrl = `${process.env.OG_URL}/${seo.pageTitle}?description=${seo.metaDesc}`;

export default function DataCenters() {
  const router = useRouter();

  seo.canonical = `${process.env.NEXT_PUBLIC_BASE_URL}${router.route}`;
  return (
    <>
      <Seo seo={seo} />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-15 pb-10">
        <TitleBar
          subheading="Data centers"
          title="Our data centers around the world"
          description="BlessHost has servers around the world from which we provide our popular 360 Web Hosting, VPS Hosting, Dedicated Hosting and most of our other services."
        />

        <div className="mt-12 max-w-lg mx-auto grid gap-3 lg:grid-cols-4 lg:max-w-none">
          {datacenters.map((item) => (
            <div
              key={item.location}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <Image
                  layout="intrinsic"
                  src={item.image}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="block mt-2 text-xl font-semibold text-gray-900">
                    {item.location}
                  </p>
                  <div className="mt-3 text-base text-gray-500">
                    Sample IP: {item.ip}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <TitleBar
          subheading="Middle East, UAE"
          title="Our Dubai Data Center"
          description="Our Dubai, UAE, data center facility is located within purpose built DC covering 32,000 sq. ft. of premium space delivering access to top Middle East, East Africa, West India, and global markets."
        />

        <div className="max-w-7xl mx-auto py-16 lg:py-24 lg:grid lg:grid-cols-2 lg:grid-flow-col lg:gap-x-8">
          <div>
            <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">
              Everything you need
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">
              Key features
            </p>
            <p className="mt-4 text-lg text-gray-500">
              The purpose-built, highly specified data centre space with a full
              range of colocation, interconnection, support and monitoring
              services provides access to the rapidly expanding Middle Eastern
              digital hub allowing you to connect directly and quickly to the
              cloud, content, mobility and financial services companies. The
              facility is connected to UAE-IX, the UAE Internet Exchange,
              provides vital peering opportunities to other UAE-IX members.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="flex flex-col space-y-3">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <CheckIcon
                      className="absolute h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                    <p className="ml-9 text-lg leading-6 font-normal text-gray-600">
                      {feature.name}
                    </p>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="grid gap-y-8 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <div className="mb-6">
              <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">
                Everything you need
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">
                Maximum Security
              </p>
            </div>

            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="flex flex-col space-y-3">
                {security.map((item, id) => (
                  <div key={id} className="relative">
                    <dt>
                      <CheckIcon
                        className="absolute h-6 w-6 text-green-500"
                        aria-hidden="true"
                      />
                      <p className="ml-9 text-lg leading-6 font-normal text-gray-600">
                        {item}
                      </p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">
                Efficient cooling
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">
                Stable Environmental Conditions
              </p>
            </div>

            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="flex flex-col space-y-3">
                {conditions.map((item, id) => (
                  <div key={id} className="relative">
                    <dt>
                      <CheckIcon
                        className="absolute h-6 w-6 text-green-500"
                        aria-hidden="true"
                      />
                      <p className="ml-9 text-lg leading-6 font-normal text-gray-600">
                        {item}
                      </p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="grid gap-y-10 mt-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <div className="mb-6">
              <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">
                From UAE to the World
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">
                Inteconnectivity
              </p>
            </div>

            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="flex flex-col space-y-3">
                {interconnectivity.map((item, id) => (
                  <div key={id} className="relative">
                    <dt>
                      <CheckIcon
                        className="absolute h-6 w-6 text-green-500"
                        aria-hidden="true"
                      />
                      <p className="ml-9 text-lg leading-6 font-normal text-gray-600">
                        {item}
                      </p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">
                UPS &amp; Generators
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">
                Power
              </p>
            </div>

            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="flex flex-col space-y-3">
                {power.map((item, id) => (
                  <div key={id} className="relative">
                    <dt>
                      <CheckIcon
                        className="absolute h-6 w-6 text-green-500"
                        aria-hidden="true"
                      />
                      <p className="ml-9 text-lg leading-6 font-normal text-gray-600">
                        {item}
                      </p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
