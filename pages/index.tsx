
import Lists from "./lists";
import ProductList from '../src/components/ProductList'
import Navbar from '../src/components/Navbar'
export default function Home() {
  return (
  <div>
    {/* Welcome to ecommerce app! */}
    {/* <Lists /> */}
    <Navbar/>
    <ProductList />
  </div>
  )
}
