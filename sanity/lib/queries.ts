import { defineQuery } from "next-sanity";

export const allProduct = defineQuery(`*[_type == "product"]{
     
  productName,
  category,
  price,
  inventory,
  colors,
  status,
  "imageUrl": image.asset->url,
  description

   
  }`);
export const fourPro = defineQuery(`*[_type == "product"] [0..3]{
  productName,
  category,
  price,
  inventory,
  colors,
  status,
  "imageUrl": image.asset->url,
  description

   
  }`);
