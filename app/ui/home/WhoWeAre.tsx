import Image from "next/image";
import gif from "/public/images/img1.gif";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className="container min-h-[800px] flex items-center gap-x-20">
      <div>
        <h2 className="uppercase text-6xl mb-8">{"You're"} in good company.</h2>
        <p className="max-w-[550px] text-xl mb-10">
          Our unique, investor-owned structure keeps us focused on your needs
          first. Your goals are always our goals. Our investment model has
          returned +200.98% on average over the past years.
          <br />
          <br />
          Index financial trade group is made up of more than 50 million
          investors, all with unique stories and individual goals.
        </p>
        <Link
          href="/about"
          className="inline-block uppercase bg-primary w-[200px] text-center py-5 rounded-sm font-bold text-white"
        >
          More About Us
        </Link>
      </div>
      <div className="relative  px-10 flex items-center">
        <Image src={gif} alt="image a lady" />
      </div>
    </section>
  );
}
