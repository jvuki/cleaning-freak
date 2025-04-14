import Header from "./components/header";
import showcase from './assets/showcase.png'
import WhoAreWe from "./sections/who-are-we";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="relative">
        <img className="aspect-16/9 object-cover" src={showcase} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4F1F4F]/70 px-4 py-2 rounded">
         <h1 className="font-encode text-3xl text-[#DCCDE2] text-center">Čistoća na FREAK nivou!</h1>
      </div>
      </div>
      <WhoAreWe/>
    </div>
  );
}

export default App;
