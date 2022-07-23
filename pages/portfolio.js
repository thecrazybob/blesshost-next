import Portfolio from "../components/portfolio";
import Seo from "../components/seo";
import { client } from "../lib/sanity";

export default function Page({ projects, seo }) {
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
      <Portfolio
        header={false}
        footer={false}
        portfolio={projects}
        client={client}
      />
    </>
  );
}

export async function getStaticProps() {
  const projects = await client.fetch('*[_type == "Project"]');
  let [{ seo: seo }] = await client.fetch(
    '*[_type == "page" && seo.pageTitle == "Portfolio"]'
  );
  return {
    props: {
      projects, seo
    },
  };
}
