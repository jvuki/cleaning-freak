import { Mail, Phone } from "lucide-react";
import work from "./assets/images/working.jpg";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-5">
      <h1 className="text-2xl">Cleaning Freak coming soon...</h1>
      <div className="flex flex-row gap-5">
        <Mail />
        <a
          href="mailto:cleaningfreak.hr@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          cleaningfreak.hr@gmail.com
        </a>
      </div>
      <div className="flex flex-row gap-5">
        <Phone />
        <a href="tel:+385 95 555 9119">+385 95 555 9119</a>
      </div>
      <img className="aspect-16/9 object-contain w-full" src={work} />
    </div>
  );
}

export default App;
