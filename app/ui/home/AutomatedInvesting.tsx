import Image from "next/image";
import Link from "next/link";

export default function AutomatedInvesting() {
  return (
    <section className="container min-h-[750px] mx-auto flex items-center">
      <div className="grid grid-cols-2 gap-x-24">
        <div>
          <Image
            src="/images/automatedInvesting.webp"
            alt="automation investing screenshot"
            height={400}
            width={550}
          />
        </div>
        <div className="ml-auto">
          <h2 className="text-5xl mb-6">
            Take the stress out of investing <br />
            with automation.
          </h2>
          <p className="max-w-[500px] text-lg mb-6">
            Get a diversified, expert-built portfolio to help you invest like a
            pro. We manage your money for you—helping minimize taxes and
            maximize returns—while you focus on living your life.
          </p>
          <ul className="mb-10">
            <CheckItem item="Curated portfolios, including sustainability, tech, and crypto" />
            <CheckItem item="Automated rebalancing and dividend reinvestment" />
            <CheckItem item="Recurring deposits can help keep your money on track" />
          </ul>

          <Link
            href="/login"
            className="inline-block uppercase bg-primary text-white w-[180px] text-center py-4 rounded-sm font-bold mb-10"
          >
            Start Investing
          </Link>
          <div className="flex gap-x-10">
            <div>
              <Image
                src="/images/theascent.webp"
                alt="the ascent logo"
                height={131}
                width={131}
              />
            </div>
            <div>
              <Image
                src="/images/BuySide.webp"
                alt="the ascent logo"
                height={131}
                width={131}
              />
            </div>
            <div>
              <Image
                src="/images/Forbes-1.webp"
                alt="the ascent logo"
                height={131}
                width={131}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { FaCheck } from "react-icons/fa6";
const CheckItem = ({ item }: { item: string }) => {
  return (
    <li className="flex items-center gap-x-4 text-lg">
      <span className="text-primary">
        <FaCheck />
      </span>
      <span>{item}</span>
    </li>
  );
};
