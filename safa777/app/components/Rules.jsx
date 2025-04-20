import { Download } from "lucide-react";
import Link from "next/link";
import React from "react";

const Rules = () => {
  return (
    <section className=" text-white py-16 px-6 md:px-16 max-w-5xl mx-auto">
      <div className="">
        <h2 className="text-4xl text-[#53A700] font-semibold md:text-5xl leading-13 text-center">
          Safa777 Rules
        </h2>
        <div className="space-y-6 text-base md:text-lg leading-relaxed mt-5 text-black">
          <p>
            <strong>1.</strong> The amount you earn depends on your membership
            level and the daily deposit activity of your team members. A higher
            rank = higher rewards.
          </p>

          <p>
            <strong>2.</strong> Different games offer different rebate
            percentages. You can check exact rates and game-specific details in
            the “Rebate Ratio” section of the app.
          </p>

          <p>
            <strong>3.</strong> The top 20 users with the best referral
            performance may receive special surprise bonuses from the Safa777
            team each day.
          </p>

          <p>
            <strong>4.</strong>All rules, bonus structures, and rights to make
            changes in the referral program are managed solely by the Safa777
            management team.
          </p>
        </div>
        <div className="">
          <a href="http://www.safa777.com/?r=wlr9329">
            <button className="text-white  w-full rounded-lg py-2 px-3 bg-[#53A700] mt-5 md:text-2xl flex items-center justify-center gap-2 cursor-pointer   mx-auto">
              Download safa777 <Download />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Rules;
