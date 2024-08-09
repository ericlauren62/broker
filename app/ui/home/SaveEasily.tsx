import Link from "next/link";
import Card from "../shared/Card";
import { CiMoneyBill } from "react-icons/ci";
import Image from "next/image";

export default function SaveEasily() {
  return (
    <section className="bg-gradientBlue border text-white py-10">
      <div className="container min-h-[700px] flex justify-center items-center">
        <div className="grid grid-cols-2 items-center">
          <div className="lg: max-w-[80%]">
            <h2 className="text-8xl mb-8">
              An easy way <br /> to invest & save
            </h2>
            <p className="text-xl mb-8">
              We put your money to work so you can take it easy. Build wealth
              with automated investing, earn more on your cash with variable
              5.00% APY*, and grow your retirement.
            </p>
            <Link
              href="/login"
              className="inline-block uppercase bg-primary w-[180px] text-center py-4 rounded-sm font-bold"
            >
              Start Investing
            </Link>
          </div>
          <div>
            <Image
              src="/images/investapp.webp"
              height={300}
              width={800}
              alt="investing app"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
