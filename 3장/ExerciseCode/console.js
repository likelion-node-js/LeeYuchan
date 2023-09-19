const String = "abc";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};

console.time("전체시간");
// console.timeEnd(레이블)과 대응 되어 같은 테이블을 가진 time과 timeEnd 사이 시간 측정
console.log("평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다");
// 평범한 로그를 콘솔에 표시
console.log(String, number, boolean);
console.error("에러 메시지는 cosole.error에 담아주세요");
// 에러를 콘솔에 표시
console.table([
  { name: "제로", birth: 1994 },
  { name: "hero", birth: 1988 },
]);
// 배열의 요소로 객체 리터럴을 넣으면, 객체의 속성들이 테이블 형식으로 표현
console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });
// 객체를 콘솔에 표시할 때 사용, 첫번째 인수는 표시할 객체, 두번째 인수로 옵션 color는 콘솔에 색 추가, depth는 객체 안의 객체를 몇단계 까지 보여줄 지를 결정함, 기본값은 2

console.time("시간 측정");

for (let i = 0; i < 100000; i++) {}
console.timeEnd("시간 측정");

function b() {
  console.trace("에러 위치 추적");
  // 에러가 어디서 발생했는지 추적, 에러 발생 위치가 나오지 않을 때 사용
}

function a() {
  b();
}

a();

console.timeEnd("전체 시간");
