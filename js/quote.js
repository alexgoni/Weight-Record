const quotes = [
  "I don’t need to be motivated because I’m a disciplined person. If I allocate X amount of time to do something, I’m going to do it.",
  "Every action you take is molding who you are as a person. Every time that you sleep in. Every time you are undisciplined, you are training yourself that it’s okay. A downward spiral towards mediocrity.",
  "You are exactly where you deserve to be. Change who you are and you will change how you live.",
  "If I’m not doing something which is either extremely difficult or extremely stressful, I’m in a perpetual state of crippling boredom.",
  "Men are not designed to be comfortable. They want to achieve. They want to feel pain and suffering. They want to conquer something.",
  "The person who goes to the gym every day regardless of how they feel will always beat the person who goes to the gym when they feel like going to the gym.",
  "Value is linked to difficulty. If you want something that is valuable, you need something which is difficult to obtain.",
  "Sadness is a warning. You feel it for a reason. Your mind is telling you that you need to work harder.",
  "The average man doesn’t try very hard. So if you try very hard, it’s impossible to be average.",
  "Most people see other people with things they want and don’t do the second half. They don’t try to work out how they got that thing.",
  "The temporary satisfaction of quitting is outweighed by the eternal suffering of being a nobody.",
  "Close your eyes. Focus on making yourself feel excited, powerful. Imagine yourself destroying goals with ease.",
  "The amount of stress you can tolerate while remaining effective is directly correlated to the level of success you will enjoy.",
  "If you want people to care about who you are, become familiar with pain.",
  "You need to understand that in this world there’s a whole bunch of people doing amazing things that you are not doing. And that needs to piss you off.",
  "Today you can act as an amateur or a professional. Decide what you will do right now.",
];

const quote = document.querySelector("#quote");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote;
