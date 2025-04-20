import React from "react";

const Features = () => {
  return (
    <section className="py-5 max-w-5xl mx-auto ">
      <div className=" px-4 sm:px-6 lg:px-8 mt-4">
        <h2 className="text-4xl font-semibold mb-4 text-[#53A700] text-center">
          Top Features of Safa777 Game
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {[
            {
              title: "✅ Low Investment",
              description: "Start playing with as little as PKR 100",
            },
            {
              title: "✅ Welcome Bonus",
              description: "Get a registration reward just for signing up",
            },
            {
              title: "✅ Daily Login Gifts",
              description: "Earn more each day just by opening the app",
            },

            {
              title: "✅ Lucky Wheel",
              description: "Spin daily to win cash, bonuses, or free spins",
            },
            {
              title: "✅ Referral Earnings",
              description: "Invite friends and earn up to PKR 600 per referral",
            },
            {
              title: "✅ JazzCash & EasyPaisa Supported",
              description:
                "Daily bonuses, surprise gifts, lucky spins, and weekly bonuses to keep you engaged.",
            },
            {
              title: "✅ 24/7 Support",
              description: "Reliable customer service always ready to help",
            },
            {
              title: "✅ Strong Security",
              description:
                "Your account and wallet are protected with two-step verification",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow  "
            >
              <h3 className="text-xl font-semibold  text-slate-800">
                {feature.title}:
              </h3>
              <p className=" ml-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
