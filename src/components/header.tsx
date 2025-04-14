  import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <>
    <div className="bg-[#4F1F4F] h-15 shadow-xl/30">
      <div className="grid grid-cols-3 p-2.5 px-5 max-w-[1280px] w-full h-full mx-auto ">
        <div className="flex items-center gap-2">
          <a
              href="mailto:cleaningfreak.hr@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-1 text-xs text-[#DCCDE2]"
              >
              <Mail className="w-4 h-4 text-[#DCCDE2]" />
              <p className="hidden lg:block font-roboto">cleaningfreak.hr@gmail.com</p>
            </a>

            <a
              href="tel:+385 95 555 9119"
              className="flex flex-row items-center gap-1 text-xs text-[#DCCDE2]"
              >
              <Phone className=" w-4 h-4 text-[#DCCDE2]" />
              <p className="hidden lg:block font-roboto">+385 95 555 9119</p>
            </a>
        </div>
        <div className="flex justify-center items-center">
          <img src={logo} alt='Cleaning Freak logo' className='h-30 w-30 absolute top-0 z-10'/>
        </div>
        <div className="flex items-center justify-end gap-2">
          <a
            href="https://www.instagram.com/cleaningfreak.hr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            >
            <Instagram className="w-4 h-4 text-[#DCCDE2]" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61566868510891"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Facebook className="w-4 h-4 text-[#DCCDE2]" />
          </a>
        </div>
      </div>
    </div>
            </>
  );
}
