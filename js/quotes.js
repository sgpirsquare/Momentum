const quotes = [
  { quote: "삶이 있는 한 희망은 있다", author: "키케로" },
  { quote: "산다는것 그것은 치열한 전투이다", author: "로망로랑" },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
    author: "사무엘 존슨",
  },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다",
    author: "파울로 코엘료",
  },
  {
    quote: "직업에서 행복을 찾아라 아니면 행복이 무엇인지 절대 모를 것이다",
    author: "엘버트 허버드",
  },
  { quote: "신은 용기있는 자를 결코 버리지 않는다", author: "켄러" },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라",

    author: "F. 스콧 핏제랄드",
  },
  { quote: "계단을 밟아야 계단 위에 올라설수 있다", author: "터키속담" },
  {
    quote:
      "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다,",
    author: "단테",
  },
  {
    quote:
      "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다",
    author: "톰 모나건",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// Math.ceil() 올림 천장
// Math.round() 반올림
// Math.floor() 내림 바닥 마루
