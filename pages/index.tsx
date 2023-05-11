
import Lists from "./lists";
import ProductList from '../src/components/ProductList'
import Navbar from '../src/components/Navbar'
import Footer from "@/src/components/Footer";
import SignupPage from "@/src/components/Signup";
export default function Home() {
  return (
    <div>
    {/* Welcome to ecommerce app! */}
    {/* <Lists /> */}
    <Navbar/>
    {/* <ProductList /> */}
    <SignupPage />
    <Footer />
  </div>
  )
}
