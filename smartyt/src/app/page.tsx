import Banner from './components/Banner';
import {getProducts} from "@/helpers/index"
import Products from './components/Products';

export default async function Home() {
  const products = await getProducts();
  console.log(products);
  return (
    <div>
      <Banner />
      <Products/>
 </div>
  )
}
