"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
return ( <a
   href="https://wa.me/919483808379"
   target="_blank"
   rel="noopener noreferrer"
   className="
   fixed
   bottom-6
   right-6
   z-[999]
   w-12
   h-12
   rounded-full
   bg-green-500
   flex
   items-center
   justify-center
   shadow-lg
   hover:scale-110
   transition-all
   duration-300
   "
 > <MessageCircle size={30} /> </a>
);
}
