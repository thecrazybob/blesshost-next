const sanityClient = require("@sanity/client");
export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  dataset: "production",
  useCdn: true,
});
import imageUrlBuilder from '@sanity/image-url'
import Portfolio from "../components/portfolio";
import Seo from "../components/seo";
import { useRouter } from "next/router";

const builder = imageUrlBuilder(client)

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

export default function Page({ projects }) {
  return (
    <>
      <Seo seo={seo} />
      <div className="relative bg-blue-800">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div
            className="absolute inset-0 bg-blue-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Portfolio
          </h1>
          <p className="max-w-3xl mt-6 text-xl text-blue-100">
            Here are some of the websites that we have created over the past few
            years.
          </p>
        </div>
      </div>
      <Portfolio header={false} footer={false} portfolio={projects} builder={builder} />
    </>
  );
}

export async function getStaticProps({ params }) {
  //use Sanity's home-grown query language GROQ to build anything you can imagine

  const projects = await client.fetch('*[_type == "Project"]');
  return {
    props: {
      projects,
    },
  };
}
