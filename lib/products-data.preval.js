import preval from "next-plugin-preval"
import getProducts from "./products"

async function getData() {
  const data = await getProducts()
  return data
}

export default preval(getData());
