# 3. 노드 기능 알아보기

### 모듈로 만들기

**모듈이란?**

- 특정한 기능을 하는 함수나 변수들의 집합
- 자체로 하나의 프로그램이면서 다른 프로그램의 부품으로도 사용 가능
- 여러 프로그램에 해당 모듈을 재사용 가능
- 노드는 CommonJS 모듈, ECMAScript 모듈 두 가지 형식의 모듈을 사용한다.

**CommonJS 모듈**

- 표준 JS 모듈은 아니지만 노드 생태계에서 가장 널리 쓰이는 모듈

> 표준이 아닌데도 널리 쓰인 이유? **표준이 나오기 이전부터 쓰였기 때문**
> 
- 모듈을 만들 때는 모듈이 될 파일과 모듈을 불러와서 사용할 파일이 필요!
- require가 반드시 최상단에 위치할 필요가 없음
- module.exports도 최하단에 위치할 필요가 없음

- 노드에서 this는 무엇일까?
    - 노드에서의 this는 브라우저의 this와 조금 다르다.
    - 다른 부분은 브라우저의 JS와 동일하지만 최상위 스코프에 존재하는 this는 module.exports(또는 exports 객체)를 가리킨다.
    - 함수 선언문 내부의 this는 global 객체를 가리킨다.
- 두 모듈이 서로를 require 한다면?
    - dep1의 module.exports 함수가 아니라 빈 객체로 표시된다.
    - 이러한 현상을 순환 참조(circular dependency)라고 부른다.
    - 순환 참조가 있을 경우, 순환 참조되는 대상을 빈 객체로 만든다.
    - 에러가 발생하지 않고 조용히 빈 객체로 변경되므로 예기치 못한 동작이 발생할 수 있다.
    - 순환 참조가 발생하지 않도록 구조를 잘 잡는 것이 중요하다.

**ECMAScript 모듈**

- 공식적인 JS 모듈 형식, 사용하는 비율이 늘어나고 있음
- 브라우저와 노드 모두에 같은 모듈 형식을 사용할 수 있다는 것이 장점
- require과 exports, module.exports가 각각 import, export, export default로 바뀜
- ES 모듈의 import 나 export default는 require나 module처럼 함수나 객체가 아님, 문법 그자체
- 파일도 js 대신 mjs확장자를 사용
- import 시 파일 경로에서 js, mjs와 같은 확장자는 생략할 수 없음, 폴더 내부에서 index.js도 생략 불가

**다이내믹 임포트**

- CommonJS 모듈에서는 다이내믹 임포트(dynamic import)가 가능하지만 ES 모듈은 불가능하다.
- ES모듈에서 다이내믹 임포트를 하려면 import라는 함수를 사용해야 한다.
- import는 Promise를 반환하기에 await나 then을 붙여야 한다.
- export default의 경우 import 할 때도 default라는 속성 이름으로 import 된다.

**__filename, __dirname**

- 노드는 파일 사이에 모듈 관계가 있는 경우가 많으므로, 현재 파일의 경로나 파일명을 알아야한다.
- __filename, __dirname 키워드로 경로에 대한 정보를 제공한다.
- 이 두 가지를 파일에 넣어두면 실행 시 현재 파일명과 현재 파일 경로로 바뀐다.
