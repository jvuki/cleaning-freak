export default function MissionAndVision() {
  return (
    <section className=" max-w-[1280px] w-full h-full mx-auto px-5 py-10 bg-[#4F1F4F]/70 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="py-2 flex gap-2 items-center ">
            <div className="w-4 h-0.5 bg-black/70" />
            <h2 className="font-encode font-extrabold text-black uppercase ">
              Naša misija
            </h2>
          </div>
          <p className="text-[#DCCDE2] text-lg/7 text-justify">
            Naša misija je osigurati zdravije i ugodnije okruženje za naše
            klijente kroz temeljito i kvalitetno čišćenje. Posvećeni smo
            korištenju biorazgradivih proizvoda koji su sigurni za djecu i kućne
            ljubimce, te primjeni naprednih tehnika čišćenja koje produljuju
            vijek trajanja vašeg namještaja i tepiha koristeći opremu koja
            odgovara najvišim standardima.
          </p>
        </div>

        <div>
          <div className="py-2 flex gap-2 items-center">
            <div className="w-4 h-0.5 bg-black/70" />
            <h2 className="font-encode font-extrabold text-black uppercase">
              Naša vizija
            </h2>
          </div>
          <p className="text-[#DCCDE2] text-lg/7">
            Želimo biti prepoznati kao lideri u industriji dubinskog čišćenja u
            Zagrebu i Zagrebačkoj županiji, postavljajući standarde izvrsnosti,
            kvalitete i odgovornosti. Naša vizija je kontinuirano unaprjeđivati
            naše usluge i tehnologije kako bismo ostali prvi izbor za naše
            klijente.
          </p>
        </div>
      </div>
    </section>
  );
}
