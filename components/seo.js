import { NextSeo } from "next-seo";

export default function Seo({ seo }) {
  const { title, metaDesc, canonical, opengraphImage } = seo;

  return (
    <NextSeo
      title={title}
      description={metaDesc}
      canonical={canonical}
      openGraph={{
        url: canonical,
        title: title,
        description: metaDesc,
        images: [
          {
            url: opengraphImage?.sourceUrl,
          },
        ],
        site_name: "Blesshost",
      }}
      twitter={{
        handle: "@blesshost",
        site: "@blesshost",
        cardType: "summary_large_image",
      }}
    />
  );
}
