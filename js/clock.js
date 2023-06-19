const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

// date.gethours.padStart(2, "0")
// padEnd

getClock();
setInterval(getClock, 1000);

//setTimeout(sayHello, 5000);

//date 말고 Date가 함수로 지정되어있다. 오타주의
//ms 밀리초 천분의 일초 5000ms = 5초

//VSCODE 같은 단어 한 번에 여러 개 선택 ctrl+shift+L 한글일 땐 안됨
//VSCODE 같은 단어 여러 개 선택 누를 때마다 ctrl+d
//vscode 커서 여러개 생성해내기 ctrl + alt + 방향키 또는 alt + 마우스 클릭

//vscode 자동줄바꿈 설정-word wrap-on으로 설정
//vscode alt + 위아래 방향키 코드 이동
//vscode ctrl + alt + 위아래 방향키 코드추가복사
//git commit -m "2nd commit"
//git push origin master 이건 혼자 할때
//git add .
