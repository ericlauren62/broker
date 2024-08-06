import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="min-h-[90vh] w-full bg-heroBg bg-cover px-20">
        <div className="container text-white min-h-[73vh] flex items-center">
          <div>
            <h1 className="text-8xl uppercase mb-8">
              You need profits, <br />
              we make profits.{" "}
            </h1>
            <div className="bg-primary h-1 w-16 mb-8"></div>
            <p className="max-w-[600px] text-lg">
              Take control of your financial future. Enjoy easy access to
              innovative investment options. Invest in Gold, Oil & Gas Sector,
              Real Estate, Agriculture & Infrastructure, Stock, Bonds, Mutual
              Funds, Forex, Cryptocurrency.{" "}
            </p>
          </div>
        </div>
        <div className="container min-h-[15vh] flex items-end justify-center">
          <div
            className="text-white 
       border-t border-gray-500 container  flex justify-between items-center"
          >
            <div>
              <p className="uppercase font-bold">As Featured On</p>
            </div>
            <div className="flex items-center justify-between w-[55%]">
              <Image
                src="/images/new-york-times.svg"
                alt="new york time logo"
                height={150}
                width={150}
              />
              <Image
                src="/images/bloomberg.svg"
                alt="bloomberg logo"
                height={150}
                width={150}
              />
              <Image
                src="/images/coinbase.svg"
                alt="coinbase logo"
                height={150}
                width={150}
              />
              <Image
                src="/images/crunchbase.svg"
                alt="crunchbase logo"
                height={150}
                width={150}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
