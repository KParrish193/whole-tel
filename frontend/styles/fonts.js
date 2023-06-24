import { Figtree } from "next/font/google";
import localFont from "next/font/local";


const figtree = Figtree({ subsets: ["latin"] });

// const poppins300 = Poppins({ weight: "300" }, { subsets: ['latin'] });
// const poppins400 = Poppins({ weight: "400" }, { subsets: ['latin'] });
// const poppins500 = Poppins({ weight: "500" }, { subsets: ['latin'] });

const oreloLight = localFont({ src: "./fonts/OreloCondensedLight.woff2" });
const oreloMedium = localFont({ src: "./fonts/OreloCondensedMedium.woff2" });
const oreloRegular = localFont({ src: "./fonts/OreloCondensedRegular.woff2" });
const metal = localFont({ src: "./fonts/Metal.woff" });
const metal2 = localFont({ src: "./fonts/MetalReg-2.otf" });

export { figtree, oreloLight, oreloMedium, oreloRegular, metal, metal2 };
