import example_2 from "../assets/images/example_2.png";

export default function Offer() {
  return (
    <section
      id="who-are-we"
      className=" max-w-[1280px] w-full h-full mx-auto px-5 py-10 shadow-xl"
    >
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center">
        <img className="aspect-auto object-cover rounded" src={example_2} />

        <div>
          <div className="py-2 flex gap-2 items-center">
            <div className="w-4 h-0.5 bg-black/70" />
            <h2 className="font-encode font-extrabold text-black uppercase">
              Što nudimo?
            </h2>
          </div>
          <ul className="list-disc">
            <li className="text-black/70 text-lg/7">
              Dubinsko čišćenje tapeciranog namještaja: kutne garniture, sofe,
              fotelje, dvosjedi, trosjedi, madraci, tepisi, uredski tapisoni i
              auto sjedala.
            </li>
            <li className="text-black/70 text-lg/7">
              Čišćenje tepiha i uredskih tapisona
            </li>
            <li className="text-black/70 text-lg/7">Čišćenje auto sjedala</li>
            <li className="text-black/70 text-lg/7">
              Usluge za privatne kuće i stanove
            </li>
            <li className="text-black/70 text-lg/7">
              Usluge za poslovne prostore
            </li>
            <li className="text-black/70 text-lg/7">
              Usluge za ugostiteljske objekte, hotele i hostele
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
