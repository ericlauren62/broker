import Image from "next/image";
import Link from "next/link";

export default function Blockchain() {
  return (
    <section className="bg-gradientDarkBlue min-h-[700px] text-white flex items-center justify-center">
      <div className="container grid grid-cols-2 items-center">
        <div className="">
          <h2 className="text-7xl mb-10">
            Our blockchain <br /> powered platform
          </h2>
          <div className="bg-white h-1 w-16 mb-8"></div>
          <p className="mb-6 text-lg max-w-[500px]">
            Our blockchain powered investment platform that makes capital
            investing for wealth creation easy. Invest with as little as $200,
            withdraw anytime no lock-up, invest from anywhere with other
            investors from over 150 countries and control your assets.{" "}
          </p>
          <Link
            href="/login"
            className="inline-block uppercase bg-primary w-[180px] text-center py-4 rounded-sm font-bold"
          >
            invest today
          </Link>
        </div>
        <div className="h-[450px] w-[700px] relative">
          <Image src="/images/blockchain.gif" alt="blockchain image" fill />
        </div>
      </div>
    </section>
  );
}
