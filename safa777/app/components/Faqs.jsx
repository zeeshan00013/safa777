"use client";
import { useState } from "react";

const faqs = [
  {
    question: "💰 What is Safa777 and how does it work?",
    answer:
      "Safa777 is a real cash-earning casino app designed for Pakistani users. It offers exciting online slot games, betting features, and multiplayer competitions. You can play games, win money, earn daily bonuses, and even refer friends to earn passive income.",
  },
  {
    question: "📱 How do I download and install the Safa777 app?",
    answer:
      "Visit the official website (safa777game.pro), download the APK for Android, enable 'Install from unknown sources' in your phone settings, and follow the steps to install the app. After installation, open the app and sign up to start playing.",
  },
  {
    question: "🧾 Is registration free on Safa777?",
    answer:
      "Yes, registration is completely free. Plus, when you sign up, you get a welcome bonus, and if you enter a referral code, you can unlock extra rewards instantly.",
  },
  {
    question: "🎮 How can I earn money by playing?",
    answer:
      "In Safa777, you select color-coded numbers. If your number wins, you receive a cash reward. Strategy and timing improve your odds, but luck is always a factor. Start with small investments and play smart.",
  },
  {
    question: "👫 What is the referral program?",
    answer:
      "You can invite friends and family using your referral link or code. When they register and start playing, you earn up to PKR 600 per referral as a bonus. It’s a great way to earn passively.",
  },
  {
    question: "🎁 What are daily bonuses and how do I claim them?",
    answer:
      "Simply open the app daily to claim rewards. These may include bonus coins, free spins, entry tickets, and sometimes even cash. The more active you are, the more rewards you unlock.",
  },
  {
    question: "💸 How much money do I need to start?",
    answer:
      "You can begin playing with as little as PKR 100. Safa777 is designed to keep the entry point low while giving users multiple chances to grow their earnings through gameplay and bonuses.",
  },
  {
    question: "🏦 How do I withdraw my winnings?",
    answer:
      "Once you have enough balance, you can withdraw directly to your JazzCash, Easypaisa, or bank account. Withdrawals are processed quickly, and you’re encouraged to withdraw frequently to manage your risk.",
  },
  {
    question: "🔒 Is Safa777 safe and secure?",
    answer:
      "Yes, Safa777 uses two-step verification and secure payment gateways. Your account details and transactions are protected to ensure a safe gaming experience.",
  },
  {
    question: "📞 What if I face an issue while playing?",
    answer:
      "The app provides 24/7 customer support. Whether it’s a technical issue or help with your account, you can reach out anytime through the in-app support option.",
  },
];

export default function Safa777FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 ">
      <h2 className="text-4xl text-[#53A700] font-semibold md:text-5xl leading-13 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 mt-6 w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl shadow-md p-4 cursor-pointer transition-all"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
