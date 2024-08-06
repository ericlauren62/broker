import localFont from "next/font/local";

export const maison = localFont({
  src: [
    {
      path: "./fonnts.com-Maison_Neue_Book.ttf",
      weight: "400",
      style: "normal",
      
    },
    {
      path: "./fonnts.com-Maison_Neue_Light.ttf",
      weight: "300",
      style: "normal",
    },
    
  ],
  display: "swap",
  variable: "--font-maison"
  
});

export const trumpGothic = localFont({
  src: "./trump_gothic_east_bold.ttf",
  display: "swap",
  variable: "--font-trump-gothic"
});
