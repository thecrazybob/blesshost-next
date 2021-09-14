import Portfolio from "../components/portfolio";
import buildzone from "../public/img/portfolio/buildzone.ae.jpeg";
import workshoponwheels from "../public/img/portfolio/workshoponwheels.ae.jpeg";
import fosscape from "../public/img/portfolio/fosscape.com.jpeg";
import aljazeeraroyalhotel from "../public/img/portfolio/aljaziraroyal.ae.jpeg";
import hairmiles from "../public/img/portfolio/hair-miles.com.jpeg";
import eyeontechnology from "../public/img/portfolio/eyeontechnology.net.jpeg";
import runwaydubai from "../public/img/portfolio/runwaydubai.com.jpeg";
import waleedshah from "../public/img/portfolio/waleedshah.ae.jpeg";
import teemcouae from "../public/img/portfolio/teemcouae.com.jpeg";
import mahmoodequipment from "../public/img/portfolio/mahmoodequipment.com.jpeg";
import alwahahygiene from "../public/img/portfolio/alwahahygiene.ae.jpeg";
import gfas from "../public/img/portfolio/gfas.ae.jpeg";
import arrowavia from "../public/img/portfolio/arrowavia.aero.jpeg";
import banian from "../public/img/portfolio/banian.ae.jpeg";
import saifalfalasi from "../public/img/portfolio/saifalfalasi.com.jpeg";
import ktccp from "../public/img/portfolio/ktccp.ae.jpeg";
import almathal from "../public/img/portfolio/al-mathal.com.jpeg";
import innerseed from "../public/img/portfolio/innerseeduae.com.jpeg";
import ocreandreamboats from "../public/img/portfolio/oceandreamboats.com.jpeg";
import fla from "../public/img/portfolio/fla.ae.jpeg";
import brandcare from "../public/img/portfolio/brandcaresolutions.ae.jpeg";
import deserttigers from "../public/img/portfolio/deserttigers.com.jpeg";
import qualityplus from "../public/img/portfolio/qualityplus.ae.jpeg";
import schoeggl from "../public/img/portfolio/schoeggl-energy.com.jpeg";
import globalMigrate from "../public/img/portfolio/global-migrate.com.jpeg";
import alnoorllc from "../public/img/portfolio/alnoorllc.com.jpeg";
import smtuae from "../public/img/portfolio/smtuae.org.jpeg";
import gulfims from "../public/img/portfolio/gulfims.ae.jpeg";
import danas from "../public/img/portfolio/danas.ae.jpeg";
import theharvest from "../public/img/portfolio/theharvest.ae.jpeg";
import abetuae from "../public/img/portfolio/abet-uae.com.jpeg";
import diwanlrc from "../public/img/portfolio/diwanlrc.com.jpeg";
import abudhabitalking from "../public/img/portfolio/abudhabitalking.com.jpeg";
import rollingwheels from "../public/img/portfolio/rollingwheels.ae.jpeg";
import yolandadivers from "../public/img/portfolio/yolandadivers.com.jpeg";
import standardmentors from "../public/img/portfolio/standardmentors.com.jpeg";
import tesolarabia from "../public/img/portfolio/tesol-arabia.org.jpeg";
import theskininstitute from "../public/img/portfolio/bless-_0000_Skincare-min.jpg";
import medicalcenter from "../public/img/portfolio/bless-_0001_7DButterfly-min.jpg";
import blackfredrick from "../public/img/portfolio/bless-_0002_Blackfedrick-min.jpg";
import degreesplus from "../public/img/portfolio/bless-_0004_Degreesplus-min.jpg";
import gmp from "../public/img/portfolio/bless-_0005_GMP-min.jpg";
import kanzy from "../public/img/portfolio/bless-_0006_Kanzy-min.jpg";
import megatronix from "../public/img/portfolio/bless-_0007_Meghatronix-min.jpg";
import hayat from "../public/img/portfolio/bless-_0010_hayatt-min.jpg";
import dustbusters from "../public/img/portfolio/bless-_0011_dustbuster-min.jpg";
import suraholding from "../public/img/portfolio/bless-_0013_suraholding-min.jpg";
import wildhorse from "../public/img/portfolio/bless-_0014_Wildhorse-min.jpg";
import medfmc from "../public/img/portfolio/bless-_0015_Medfmc-min.jpg";
import zimembassyuae from "../public/img/portfolio/bless-_0019_zimbabwe-embassy-min.jpg";
import trbei from "../public/img/portfolio/bless-_0020_trbei-min.jpg";
import pizzadirocco from "../public/img/portfolio/bless-_0021_pizzaderocco-min.jpg";
import procleanuae from "../public/img/portfolio/bless-_0022_proclean-min.jpg";
import nidamovers from "../public/img/portfolio/bless-_0023_nidamovers-min.jpg";
import truststore from "../public/img/portfolio/bless-_0024_truststore-min.jpg";
import nsfatma from "../public/img/portfolio/bless-_0025_Nsfatma-min.jpg";
import mangroveuae from "../public/img/portfolio/bless-_0026_Mangrove-min.jpg";
import areejaldar from "../public/img/portfolio/bless-_0027_Areej-min.jpg";
import Seo from "../components/seo";
import { useRouter } from "next/router";

const portfolio = [
  {
    title: "Buildzone",
    href: "https://www.buildzone.ae/",
    category: { name: "Corporate" },
    description: "Construction company.",
    image: buildzone,
  },
  {
    title: "Workshop on Wheels",
    href: "https://www.workshoponwheels.ae/",
    category: { name: "Corporate" },
    description: "Maintenance Services.",
    image: workshoponwheels,
  },
  {
    title: "Fosscape",
    href: "https://www.fosscape.com/",
    category: { name: "Corporate" },
    description: "LED Lighting.",
    image: fosscape,
  },
  {
    title: "Al Jazeera Royal Hotel",
    href: "https://www.aljaziraroyal.ae/",
    category: { name: "Corporate" },
    description: "Hotel Accomodation.",
    image: aljazeeraroyalhotel,
  },
  {
    title: "Hair Miles",
    href: "https://hair-miles.com/",
    category: { name: "Corporate" },
    description: "Hair Extension Service.",
    image: hairmiles,
  },
  {
    title: "Eye on Technology",
    href: "http://www.eyeontechnology.net/",
    category: { name: "Corporate" },
    description: "Security and defense services.",
    image: eyeontechnology,
  },
  {
    title: "RUNWAY Dubai",
    href: "https://www.runwaydubai.com/",
    category: { name: "Corporate" },
    description: "Fashion Event Services.",
    image: runwaydubai,
  },
  {
    title: "Waleed Shah",
    href: "https://www.waleedshah.ae/",
    category: { name: "Corporate" },
    description: "Photography.",
    image: waleedshah,
  },
  {
    title: "Teemco UAE",
    href: "https://www.teemcouae.com/",
    category: { name: "Corporate" },
    description: "Electrical & Mechanical Works.",
    image: teemcouae,
  },
  {
    title: "Mahmood Establishment",
    href: "https://www.mahmoodequipment.com/",
    category: { name: "Corporate" },
    description: "Construction Equipment Provider.",
    image: mahmoodequipment,
  },
  {
    title: "Al Waha Hygiene",
    href: "https://www.alwahahygiene.ae/",
    category: { name: "Corporate" },
    description: "Cleaning Services",
    image: alwahahygiene,
  },
  {
    title: "Global Fintech",
    href: "https://www.gfas.ae/",
    category: { name: "Corporate" },
    description: "Accounting Solutions",
    image: gfas,
  },
  {
    title: "ArrowAvia",
    href: "http://www.arrowavia.aero/",
    category: { name: "Corporate" },
    description: "Aviation Services",
    image: arrowavia,
  },
  {
    title: "Banian Group",
    href: "http://www.banian.ae/",
    category: { name: "Corporate" },
    description: "General Contracting",
    image: banian,
  },
  {
    title: "Saif Alfalasi",
    href: "https://www.saifalfalasi.com/",
    category: { name: "Corporate" },
    description: "Motivational Speaker",
    image: saifalfalasi,
  },
  {
    title: "KTCCP",
    href: "https://www.ktccp.ae/",
    category: { name: "Corporate" },
    description: "Training Centre",
    image: ktccp,
  },
  {
    title: "Al Mathal",
    href: "https://www.al-mathal.com/",
    category: { name: "Corporate" },
    description: "Transport Services",
    image: almathal,
  },
  {
    title: "Inner Seed",
    href: "https://www.innerseeduae.com/",
    category: { name: "Corporate" },
    description: "Lifestyle Consultancy",
    image: innerseed,
  },
  {
    title: "Ocean Dream Boats",
    href: "https://www.oceandreamboats.com/",
    category: { name: "Corporate" },
    description: "Boat Rental",
    image: ocreandreamboats,
  },
  {
    title: "Prime Focus Educational Services",
    href: "https://www.fla.ae/",
    category: { name: "Corporate" },
    description: "Language Courses",
    image: fla,
  },
  {
    title: "BrandCare",
    href: "https://brandcaresolutions.ae/",
    category: { name: "Corporate" },
    description: "Advertising Agency",
    image: brandcare,
  },
  {
    title: "Desert Tigers",
    href: "https://www.deserttigers.com/",
    category: { name: "Corporate" },
    description: "Transport and Contracting",
    image: deserttigers,
  },
  {
    title: "Quality Plus",
    href: "http://www.qualityplus.ae/",
    category: { name: "Corporate" },
    description: "ISO Certification Services",
    image: qualityplus,
  },
  {
    title: "Schoeggl Energy Solutions",
    href: "https://schoeggl-energy.com/",
    category: { name: "Corporate" },
    description: "Energy Solutions",
    image: schoeggl,
  },
  {
    title: "Global Migrate",
    href: "https://global-migrate.com/",
    category: { name: "Corporate" },
    description: "",
    image: globalMigrate,
  },
  {
    title: "Al Noor LLC",
    href: "https://www.alnoorllc.com/",
    category: { name: "Corporate" },
    description: "Legal Agency",
    image: alnoorllc,
  },
  {
    title: "Saif Mohammed Training",
    href: "https://www.smtuae.org/",
    category: { name: "Corporate" },
    description: "Training Institute",
    image: smtuae,
  },
  {
    title: "Gulf International",
    href: "https://www.gulfims.ae/",
    category: { name: "Corporate" },
    description: "Medical Services",
    image: gulfims,
  },
  {
    title: "Danas",
    href: "https://www.danas.ae/",
    category: { name: "Corporate" },
    description: "Business Consultancy",
    image: danas,
  },
  {
    title: "The Harvest",
    href: "https://www.theharvest.ae/",
    category: { name: "E-commerce" },
    description: "Online groceries",
    image: theharvest,
  },
  {
    title: "Al-Badeyah Eyes Tourism",
    href: "https://www.abet-uae.com/",
    category: { name: "Corporate" },
    description: "Tourism Services",
    image: abetuae,
  },
  {
    title: "Diwan",
    href: "https://www.diwanlrc.com/",
    category: { name: "Corporate" },
    description: "Leadership Consultancy",
    image: diwanlrc,
  },
  {
    title: "Abu Dhabi Talking",
    href: "https://www.abudhabitalking.com/",
    category: { name: "Blog" },
    description: "News Blog",
    image: abudhabitalking,
  },
  {
    title: "Rolling Wheels",
    href: "https://www.rollingwheels.ae/",
    category: { name: "Corporate" },
    description: "Skating Facility",
    image: rollingwheels,
  },
  {
    title: "Yolanda Divers",
    href: "https://www.yolandadivers.com/",
    category: { name: "Corporate" },
    description: "Diving Center",
    image: yolandadivers,
  },
  {
    title: "Standard Mentors",
    href: "http://www.standardmentors.com/",
    category: { name: "Corporate" },
    description: "Auditing & Insurance",
    image: standardmentors,
  },
  {
    title: "TESOL Arabia",
    href: "https://www.tesol-arabia.org/",
    category: { name: "Corporate" },
    description: "English Language Teaching",
    image: tesolarabia,
  },
  {
    title: "The Skin Institute",
    href: "https://www.theskininstitute.ae/",
    category: { name: "Health & Beauty" },
    description: "Skin Care Clinic",
    image: theskininstitute,
  },
  {
    title: "7D Medical Center",
    href: "https://www.7dmedicalcenter.com/",
    category: { name: "Health & Beauty" },
    description: "Medical Center ",
    image: medicalcenter,
  },
  {
    title: "Black Fredrick Equestrian Equipments",
    href: "https://www.blackfredrick.com/",
    category: { name: "Trading" },
    description: "Horse Riding Equipment",
    image: blackfredrick,
  },
  {
    title: "DEGREES PLUS",
    href: "https://www.degreesplus.ae/",
    category: { name: "Trading" },
    description: "General Trading Est.",
    image: degreesplus,
  },
  {
    title: "Gray Mackenzie & Partners",
    href: "https://gmp.ae/",
    category: { name: "E-commerce" },
    description: "Licensed Beverages Distributor",
    image: gmp,
  },
  {
    title: "Kanzy",
    href: "https://www.kanzy.ae/",
    category: { name: "E-commerce" },
    description: "Online Marketplace ",
    image: kanzy,
  },
  // {
  //   title: "Megatronix",
  //   href: "https://www.megatronix.ae/",
  //   category: { name: "E-commerce" },
  //   description: "Online Electronics Store",
  //   image: megatronix,
  // },
  {
    title: "Hayat.co.za",
    href: "https://www.hayat.co.za/",
    category: { name: "Trading" },
    description: "Multi-vitamins Trading",
    image: hayat,
  },
  {
    title: "Dustbusters.ae",
    href: "https://dustbusters.ae/",
    category: { name: "Corporate" },
    description: "Car Wash Services",
    image: dustbusters,
  },
  {
    title: "Sura Holding",
    href: "https://www.suraholding.com/",
    category: { name: "Trading" },
    description: "Private Investment Firm",
    image: suraholding,
  },
  {
    title: "Wild Horse",
    href: "https://www.wildhorse.ae/",
    category: { name: "Trading" },
    description: "Horse Riding Equipment",
    image: wildhorse,
  },
  {
    title: "Medfmc.com",
    href: "https://medfmc.com/",
    category: { name: "Health & Beauty" },
    description: "Medical Center ",
    image: medfmc,
  },
  {
    title: "Zimbabwe Embassy UAE",
    href: "https://www.zimembassyuae.com/",
    category: { name: "Health & Beauty" },
    description: "Zimbabwe Embassy Website",
    image: zimembassyuae,
  },
  {
    title: "TRBEI",
    href: "https://www.trbei.com/",
    category: { name: "Education" },
    description: "English Language Institute",
    image: trbei,
  },
  {
    title: "Pizzadirocco",
    href: "https://beta.pizzadirocco.com/",
    category: { name: "Food & Drink" },
    description: "Italian Pizza Restaurant ",
    image: pizzadirocco,
  },
  {
    title: "Pro Clean UAE",
    href: "https://www.procleanuae.com/",
    category: { name: "Corporate" },
    description: "Commercial Cleaning Services",
    image: procleanuae,
  },
  {
    title: "Nida Movers",
    href: "https://www.nidamovers.com/",
    category: { name: "Corporate" },
    description: "Domestic Movers & Packers",
    image: nidamovers,
  },
  {
    title: "Trust Store",
    href: "https://www.truststore.ae/",
    category: { name: "Trading" },
    description: "Kitchen Equipment Trading",
    image: truststore,
  },
  {
    title: "NS Fatma",
    href: "https://www.nsfatma.com/",
    category: { name: "Corporate" },
    description: "Crystal Products Factory",
    image: nsfatma,
  },
  {
    title: "Mangrove UAE",
    href: "http://mangrove-uae.ae/",
    category: { name: "E-commerce" },
    description: "Cosmetics and Accessories",
    image: mangroveuae,
  },
  {
    title: "Areej Aldar",
    href: "https://www.areejaldar.com/",
    category: { name: "Construction" },
    description: "Construction Company",
    image: areejaldar,
  },
];

const seo = {
  pageTitle: "Portfolio",
  title: "View our extensive list of web design portfolio | BlessHost",
  metaDesc:
    "BlessHost's portfolio is full of great designs. It's hard to decide which web design agency to choose, but our portfolio makes it simple. ",
  keywords:
    "which web design company, web design agency, best web design company in dubai, web design agency dubai",
  opengraphImage: {},
};

seo.opengraphImage.sourceUrl = `${process.env.OG_URL}/${seo.pageTitle}?description=${seo.metaDesc}`;
seo.canonical = `${
  process.env.NEXT_PUBLIC_BASE_URL
}/${seo.pageTitle.toLowerCase()}`;

export default function Page() {
  return (
    <>
      <Seo seo={seo} />

      <div className="relative bg-blue-800">
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
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Portfolio
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Here are some of the websites that we have created over the past few
            years.
          </p>
        </div>
      </div>
      <Portfolio header={false} footer={false} portfolio={portfolio} />
    </>
  );
}
