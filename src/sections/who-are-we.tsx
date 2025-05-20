import who_are_we from "../assets//images/who-are-we.jpg";

export default function WhoAreWe() {
  return (
    <section
      id="who-are-we"
      className=" max-w-[1280px] w-full h-full mx-auto px-5 py-10 shadow-xl"
    >
      <div className="flex flex-col md:grid md:grid-cols-2 gap-5 items-center">
        <div>
          <div className="py-2 flex gap-2 items-center">
            <div className="w-4 h-0.5 bg-black/70" />
            <h2 className="font-encode font-extrabold text-black uppercase">
              Tko smo mi?
            </h2>
          </div>
          <p className="text-black/70 text-lg/7">
            Mi smo <span className="italic">CLEANING FREAK</span>, obrt
            specijaliziran za profesionalno dubinsko/kemijsko čišćenje svih
            vrsta tapeciranog namještaja i tekstilnih površina. S ponosom
            služimo područje Zagreba i Zagrebačke županije donoseći svježinu i
            čistoću u domove, poslovne prostore i ugostiteljske objekte. Naša
            strast je pružiti vrhunsku uslugu koja premašuje očekivanja naših
            klijenata, koristeći najmoderniju opremu i ekološki prihvatljive
            metode. Mogućnost dogovora za ostale lokacije na području cijele
            Hrvatske.
          </p>
        </div>
        <img className="aspect-auto object-cover rounded" src={who_are_we} />
      </div>
    </section>
  );
}
