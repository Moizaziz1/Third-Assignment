import Customise from "./components/customise";
import Extension from "./components/extension";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Sponsers from "./components/sponsers";
import Work from "./components/work";
import Your from "./components/your";



export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Work/>
      <Extension/>
      <Customise/>
      <Your/>
      <Sponsers/>
      <Footer/>
    </div>
  );
}
