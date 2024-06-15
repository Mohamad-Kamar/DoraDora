export const generateInspirationQuote = () => {
  const qoutes = [
    "The only way to do great work is to love what you do.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    "The only way to achieve the impossible is to believe it is possible.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The world is full of magical things patiently waiting for our wits to grow sharper.",
  ];
  return qoutes[Math.floor(Math.random() * qoutes.length)];
};