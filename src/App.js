import Banner from "./components/Banner";
import Endbaner from "./components/Endbaner";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <Posts />
      <Explore/>
      <Endbaner />
      <Footer />
    </div>
  );
}

export default App;
