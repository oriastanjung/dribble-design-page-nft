import "./App.css";
import Header from "./Header";
import Hero from "./Hero";

function App() {
  return (
    <div className="container mx-auto pb-36">
      <Header></Header>
      <hr className="border-t-1 border-gray-700" />
      <Hero></Hero>
    </div>
  );
}

export default App;
