import Image from "next/image";
import safaBanner from "./Images/safaBanner.png";
import Link from "next/link";
import Features from "./components/Features";
import Carousel from "./components/Caurosel";
import Conclusion from "./components/Conclusion";
import FAQs from "./components/Faqs";
import { Download } from "lucide-react";
import Rules from "./components/Rules";
import SafaGames from "./components/SafaGames";
import HowToPlaySafa777 from "./components/HowToPlay";
import EarnMoneySafa777 from "./components/EarnMoneySafa777";

export default function Home() {
  const gameInfo = [
    { attribute: "Name", detail: "safa777" },
    { attribute: "Version", detail: "Latest New" },
    { attribute: "Developer", detail: "safa777game.pro" },
    { attribute: "Category", detail: "Casinos" },
    { attribute: "Available", detail: " Web, Android, iOS" },
  ];

  return (
    <main className="flex flex-col items-center justify-center space-y-5 ">
      <section className="text-[#080808c5] max-w-5xl mx-auto">
        <div className="relative   text-center py-20">
          <div className=" px-6 flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl text-[#53A700] font-semibold md:text-5xl leading-13">
              <strong className="">Safa777</strong> Game Download best online
              app | safa777 - Real Earning App
            </h1>
            <p className="md:text-xl">
              Looking to earn real cash while having fun?
              <Link
                href={"http://www.safa777.com/?r=wlr9329"}
                className="underline m-2"
              >
                Safa777
              </Link>
              is the latest casino earning app in Pakistan, offering thrilling
              slot games, seamless gameplay, and secure betting options all in
              one powerful app. Whether youre spinning the reels or taking on
              multiplayer challenges, this top betting app in Pakistan gives you
              a chance to test your luck and grow your money. With zero deposit
              rewards, exclusive bonuses, and a variety of online slots, This
              game is designed to keep the excitement going. Stay connected with
              other players through live chat, share your wins, and join
              real-time competitions. Ready to experience the best of online
              gaming? Download the APP now and start your journey toward real
              cash rewards today!
            </p>
            <Link href="http://www.safa777.com/?r=wlr9329">
              <button className="text-white  rounded-lg py-2 px-3 bg-[#53A700] mt-5 md:text-2xl flex items-center justify-center gap-2 cursor-pointer  w-full mx-auto">
                Download apk <Download />
              </button>
            </Link>
          </div>
        </div>

        <div className="text-[#000000] flex flex-col items-center justify-center w-full">
          <h2
            id="game-info-heading"
            className="text-4xl font-semibold mb-4 text-[#53A700]"
          >
            Game Details
          </h2>
          <div className="overflow-x-auto ">
            <table className="min-w-auto md:min-w-3xl border border-green-300 text-center">
              <thead className="text-center">
                <tr className="bg-[#1c9218] py-3 text-center">
                  <th className="px-4 py-2 border-b">Attribute</th>
                  <th className="px-4 py-2 border-b">Details</th>
                </tr>
              </thead>
              <tbody>
                {gameInfo.map((item, index) => (
                  <tr key={index} className="hover:bg-green-300">
                    <td className="px-4 py-2 border-b">{item.attribute}</td>
                    <td className="px-4 py-2 border-b">{item.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 mt-6">
          <Image src={safaBanner} alt="coco game banner" width={800} />
        </div>
        <div className=" flex flex-col items-center justify-center text-center mt-6 space-y-4 ">
          <h2 className="text-4xl font-semibold mb-4 text-[#53A700]">
            What Is safa777?
          </h2>
          <p className="md:text-xl ">
            Safa777 is a newly launched and fast-growing online casino game in
            Pakistan that gives users a unique chance to play games and earn
            real cash. Designed for both beginners and experienced players, the
            Safa777 app offers a wide range of fun and exciting slot games,
            betting options, and attractive cash rewards all from your mobile
            device. With a starting deposit as low as PKR 100, players can
            quickly jump into action and begin their earning journey. The app is
            easy to use, features a user-friendly interface, and provides secure
            payment options like{" "}
            <Link
              className="underline text-green-700 "
              href={"http://jazzcash.com.pk/"}
            >
              {" "}
              JazzCash
            </Link>{" "}
            ,{" "}
            <Link
              className="underline text-green-700 "
              href={"https://easypaisa.com.pk/"}
            >
              Easypaisa
            </Link>{" "}
            , and Visa card for fast deposits and withdrawals. What makes
            Safa777 stand out is its focus on rewards and bonuses. From zero
            deposit bonuses to daily login rewards, PKR 100 welcome bonus, and
            PKR 600 referral rewards, players have multiple ways to boost their
            earnings. Plus, frequent updates ensure that you always have
            something new to explore in the game. Another key highlight is the
            multiplayer support and live competitions, which allow users to
            connect, chat, and challenge others in real-time. Whether you’re
            playing for fun or profit, Safa777 provides a secure, engaging, and
            rewarding experience.
          </p>
        </div>
      </section>
      <Features />
      <Carousel />
      <Rules />
      <SafaGames />
      <HowToPlaySafa777 />
      <EarnMoneySafa777 />
      <FAQs />
      <Conclusion />
    </main>
  );
}
