import fs from "fs";
import path from "path";

const apiurl = `${process.env.WHMCS_API_URL}?identifier=${process.env.WHMCS_API_IDENTIFIER}&secret=${process.env.WHMCS_API_SECRET}&accesskey=${process.env.WHMCS_API_ACCESS_KEY}&action=GetProducts&responsetype=json`;

async function fetchProducts() {
  const res = await fetch(apiurl, { method: "POST" });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.products;
}

const PRODUCTS_CACHE_PATH = path.resolve(".products");

export default async function getProducts() {
  let cachedData;

  try {
    cachedData = JSON.parse(
      fs.readFileSync(path.join(PRODUCTS_CACHE_PATH), "utf8")
    );
  } catch (error) {
    console.log("Product cache not initialized");
  }

  if (!cachedData) {
    const data = await fetchProducts();
    try {
      fs.writeFileSync(
        path.join(PRODUCTS_CACHE_PATH),
        JSON.stringify(data),
        "utf8"
      );
      console.log("Wrote to members cache");
    } catch (error) {
      console.log("ERROR WRITING MEMBERS CACHE TO FILE");
      console.log(error);
    }

    cachedData = data;
  }

  return cachedData;
}
