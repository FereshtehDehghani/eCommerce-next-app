import { productData } from "@/constants/data";

export const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  if (!res.ok) {
    throw new Error("Faild to fetch products");
  }
  return res.json();
};
