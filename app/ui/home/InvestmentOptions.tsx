import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { GiGoldBar } from "react-icons/gi";
import { MdOilBarrel } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { MdAgriculture } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";

export default function InvestmentOptions() {
  return (
    <section className="min-h-[700px] py-20 ">
      <div className="container">
        <div>
          <h2 className="text-5xl text-center mb-20">Investment Options</h2>
          <div className="grid grid-cols-3 gap-10">
            <OptionsCard
              icon={<GiGoldBar />}
              title="Gold "
              content="Gold has long been one of the most prized metals on Earth. Valued highly by ancient royalty for its malleability, beauty, and rarity, it continues to be one of the most valuable metals on Earth. If you are considering investing in physical gold, there are many benefits to be had."
            />
            <OptionsCard
              icon={<MdOilBarrel />}
              title="Oil and Gas"
              content="Dive into the energy sector with Index Financial Group's oil and gas investment solutions. We handle the complexities of investing in this dynamic industry, from selecting high-potential projects to managing and optimizing your investments."
            />
            <OptionsCard
              icon={<FaHouse />}
              title="Real Estate"
              content="Unlock the potential of real estate investing with Index Financial Group. We handle all aspects of property investment for you, from identifying prime real estate opportunities to managing and optimizing your investments."
            />
            <OptionsCard
              icon={<MdAgriculture />}
              title="Agriculture"
              content="Invest in the future of farming and agriculture with Index Financial Group. We take care of all the details, from identifying high-potential agricultural projects to managing investments and optimizing returns."
            />
            <OptionsCard
              icon={<FaChartLine />}
              title="Forex"
              content="Experience the ease of Forex investing with Index Financial Group. We handle all the complexities of currency trading for you, from market analysis to executing trades. Simply choose the investment strategy that fits your goals, and let our team of experts manage the rest. "
            />
            <OptionsCard
              icon={<FaBitcoin />}
              title="Cryptocurrency"
              content="Explore the dynamic world of digital assets with Index Financial Group. Our platform offers a secure and intuitive way to invest in a diverse range of cryptocurrencies. Benefit from cutting-edge tools, real-time market data, and expert insights to make informed investment decisions."
            />
            <OptionsCard
              icon={<FaBitcoin />}
              title="Mutual Funds"
              content="Explore the benefits of mutual fund investing with Index Financial Group. We handle the complexities of fund selection and management for you, ensuring a diversified portfolio tailored to your financial goals."
            />
            <OptionsCard
              icon={<FaBitcoin />}
              title="ETFs"
              content="Unlock the potential of Exchange-Traded Funds with Index Financial Group. We handle the complexities of ETF selection and management, offering you a diverse range of investment options tailored to your financial goals."
            />
            <OptionsCard
              icon={<FaBitcoin />}
              title="Stocks and Bond"
              content="Invest in stocks and bonds effortlessly with Index Financial Group. We take care of the detailed analysis and management of your equity and fixed income investments, allowing you to benefit from a diversified portfolio tailored to your financial goals."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactElement } from "react";
import Link from "next/link";

interface OptionCardProps {
  icon: ReactElement;
  title: string;
  content: string;
}

const OptionsCard = ({ icon, title, content }: OptionCardProps) => {
  return (
    <Card className="p-3 ">
      <CardHeader>
        <div className="flex items-center justify-between text-lg mb-4 bg-inherit">
          <div className="text-4xl">{icon}</div>
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="min-h-[180px]">
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <Link
          href="/login"
          className="flex items-center justify-between text-white px-4 uppercase bg-primary w-[180px] text-center py-3 rounded-sm font-bold"
        >
          Explore More
          <FaArrowRight />
        </Link>
      </CardFooter>
    </Card>
  );
};
