import { ReactElement } from "react";

interface CardProps {
  img: ReactElement;
  title: string;
  sub: string;
  desc: string;
}

export default function Card({ img, title, sub, desc }: CardProps) {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="mb-4 text-3xl">{img}</div>
      <h3 className="text-xl font-bold uppercase mb-3">{title}</h3>
      <h4 className="text-xl mb-3 font-bold">{sub}</h4>
      <p>{desc}</p>
    </div>
  );
}
