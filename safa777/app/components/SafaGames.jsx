import React from "react";

const games = [
  {
    title: "Road Hunting",
    description:
      "Step into a wild ride with mechanical beasts and intense firepower! Take down armored enemies and claim rewards.",
    emoji: "🔫",
  },
  {
    title: "Legend of Monkey",
    description:
      "Join the heroic Monkey King in his epic adventure! Mythical characters, bonus rounds, and hidden treasures await.",
    emoji: "🐵",
  },
  {
    title: "Ocean Vacation",
    description:
      "Relax and earn! Enjoy tropical gameplay with adorable underwater characters and bonus surprises.",
    emoji: "🌴",
  },
  {
    title: "Monster Shooter",
    description:
      "Blast through waves of cute but deadly monsters. Power-ups and fast action make this game addictively fun.",
    emoji: "👾",
  },
  {
    title: "Gangster Overlord",
    description:
      "It's squid meets mafia! Play as a sea mob boss and rule the underwater world with strategy and style.",
    emoji: "🐙",
  },
  {
    title: "Crazy Party",
    description:
      "Bright visuals, catchy beats, and fast-paced spins. Perfect for those who love energetic, colorful fun!",
    emoji: "🎉",
  },
  {
    title: "Dragon Palace Adventure",
    description:
      "Embark on a legendary quest filled with dragons, palaces, and ancient treasures. A visual and strategic delight!",
    emoji: "🐉",
  },
  {
    title: "Undersea Killer",
    description:
      "Face off against skeleton warriors in the deep sea. Survive the depths and earn powerful loot.",
    emoji: "☠️",
  },
  {
    title: "Cthulhu",
    description:
      "Dive into a dark and mystical world of ancient monsters. A suspenseful game for brave players!",
    emoji: "🐙",
  },
  {
    title: "Ocean Pioneers (Beginner)",
    description:
      "Begin your gaming journey with a friendly underwater game. Simple, fun, and full of rewards!",
    emoji: "🐠",
  },
];

const SafaGames = () => {
  return (
    <section className="py-12 px-4  text-black max-w-5xl mx-auto">
      <div className="">
        <h2 className="text-4xl text-[#53A700] font-semibold md:text-5xl leading-13 text-center">
          Explore the Exciting of Games
        </h2>

        <p className="text-center text-lg m-5">
          Safa777 brings you a thrilling lineup of action-packed, fun-filled,
          and rewarding games. Whether you're a beginner or a pro, there's
          something for everyone!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-[#a4f058] p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {game.emoji} {game.title}
              </h3>
              <p className="text-gray-600">{game.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafaGames;
