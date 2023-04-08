const complimentButton = document.getElementById("complimentButton");
const compliment = document.getElementById("compliment");

const compliments = [
  "素晴らしい！",
  "あなたは天才です！",
  "めっちゃかっこいい！",
  "君は最高だ！",
  "すごい才能を持ってるね！"
];

function giveCompliment() {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  compliment.textContent = compliments[randomIndex];
}

complimentButton.addEventListener("click", giveCompliment);