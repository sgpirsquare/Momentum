const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

//date 말고 Date가 함수로 지정되어있다. 오타주의
//ms 밀리초 천분의 일초 5000ms = 5초
//VSCODE 같은 단어 한 번에 여러 개 선택 ctrl+shift+L 한글일 땐 안됨
//vscode 자동줄바꿈 설정-word wrap-on으로 설정
//vscode alt + 위아래 방향키 코드 이동
//vscode ctrl + alt + 위아래 방향키 코드추가복사
getClock();
setInterval(getClock, 1000);

//setTimeout(sayHello, 5000);
