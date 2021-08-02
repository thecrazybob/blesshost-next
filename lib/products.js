import fs from "fs";
import path from "path";
var FormData = require("form-data");

const apiurl = `${process.env.WHMCS_API_URL}?action=GetProducts&responsetype=json`;

async function fetchProducts() {
  const formData = new FormData();
  formData.append("identifier", process.env.WHMCS_API_IDENTIFIER);
  formData.append("secret", process.env.WHMCS_API_SECRET);
  formData.append("accesskey", process.env.WHMCS_API_ACCESS_KEY);

  const res = await fetch(apiurl, { method: "POST",body: formData});


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
