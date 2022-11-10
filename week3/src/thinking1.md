📌 **React / Vue / Angular / Svelte** 를 비교해보는 아티클을 작성해보자

- 각 라이브러리/프레임워크의 주된 차이점은 무엇인가?
- 스타트업을 창업한다고 할 때, 무슨 라이브러리/프레임워크를 사용해야 할까?
- 난 무엇을 위해 React 를 학습하는가?

<br />

### 라이브러리와 프레임워크의 차이를 짚고 가자면?

`라이브러리(Library)`와 `프레임워크(Framework)`는 코드 작성의 주도권을 누가 가지고 있느냐에서 큰 차이가 납니다. **프레임워크**의 경우, 애플리케이션 코드는 프레임워크가 짜놓은 틀 안에서 작성되어야 합니다. 프레임워크라는 ‘틀’ 안에서 적당한 형식으로 코드를 작성해야 하는 것이죠. 반면에 **라이브러리**는 사용자가 가져다가 쓰는 형태 입니다. 이 때 전체적인 흐름은 사용자가 갖고 있겠죠. 사용자가 필요할 때 직접 라이브러리를 호출하여 구성된 함수나 코드를 가져가 쓰는 것입니다.

\*리액트의 경우 라이브러리로 분류가 됩니다!

<img width="420" alt="스크린샷 2022-11-04 오후 3 59 36" src="https://user-images.githubusercontent.com/99077953/199911117-81615290-7e8b-4312-b706-e1f4bede32e3.png">

[https://2021.stateofjs.com/en-US/libraries/front-end-frameworks](https://2021.stateofjs.com/en-US/libraries/front-end-frameworks)

프론트엔드에서 가장 많이 언급되고 사용되는 React, Vue, Angular, Svelte의 사용 현황입니다.

**Usage Golden trio! React, Angular, Vue.js**

이 셋은 어떤 현황에서든 거의 윗 부분을 차지하고 있네요. 각 프레임워크/라이브러리에서 어떤 식으로 소개하는지, 강조하는 특징이 무엇인지 보기 위해 공식 사이트에 들어가 정리해보았습니다.
<br />

### 1. React

📢 **사용자 인터페이스를 만들기 위한 JavaScript 라이브러리**

1. 선언형

   데이터가 변경되는 컴포넌트만 효율적으로 렌더링. → 코드를 예측 가능하고 디버깅 하기 쉬움.

2. 컴포넌트 기반

   JS기반으로 작성되는 컴포넌트 로직. DOM과 별개로 상태 관리 가능

3. 한 번 배워서 어디서나 사용하기

   기술 스택의 나머지 부분에는 관여하지 않기 때문에 React의 새로운 기능을 이용해 개발할 수 있음.

📌 특징

- virtual DOM
- create-react-app이 자동적으로 boilerplate 생성, React DevTools 존재
- open source projects 많음.

<br />

### 2. Angular

📢 **the modern web developer’s platform**

1. Develop across all platform

   한 방식으로 application을 build하면 다른 앱에 재사용할 수 있다.

2. speed & performance

   웹 플랫폼에서 가장 빠른 스피드. SSR

3. incredible tooling

   간단하고 명확한 템플릿, 확장성 제어

4. loved by millions

📌 특징

- SPA (Single Page Applications)
- Components-based workflow + 컴포넌트 관리하는 템플릿 시스템

<br />

### 3. Vue

**📢 The Progressive JavaScript Framework**

1. Approchable

   html, css, js 표준으로 만들어졌다

2. Performant

   반응형, 렌더링 시스템 최적화, 수동 최적화 최소화

3. Versatile(다재다능한, 다용도의)

   적응가능한 생태계, 라이브러리부터 완전한 기능을 갖춘 프레임워크까지.

📌 특징

- Vue excels at being flexible. the framework doesn’t impose a strict routine but rather lets you decide on what you want to build.

<br />

### 4. Svelte

📢 **Cybernetically enhanced web apps**

1. Write less code
2. No virtual DOM
3. Truly reactive

📌 특징

- 내가 만든 컴포넌트를 미리 만들어진 자바스크립트 파일에 번들시킴. - 수정 시 새로고침하지 않고 수정된 파일의 내용 반영 가능

HMR(Hot Module replace)

<br />

### 그럼 나는 다음에 뭘 쓸까?

사실 제가 처음 리액트를 배운 이유는 명확했습니다. 저는 개발 초보였고, 일단 **가장 많이 쓴다는**/**초보에게 추천되는** 라이브러리인 리액트와 함께 개발을 접하게 되었습니다. 그러다보니 자연스럽게 첫 프로젝트 그리고 다음 프로젝트에서도 리액트를 사용하게 되었습니다.

제가 처음 개발을 배우려고 할 때 어디서든 추천 받았듯이 지금 프론트엔드에서 React는 대표적인 라이브러리입니다.

직접 사용해본 결과, 구글링을 해봐도 리액트에 관한 정보가 아주 많았고, 이에 따라 처음 참여한 프로젝트에서 리액트를 사용하는 것에 대한 반문을 하지는 않았습니다. 제가 지금 참여하고 있는 스타트업에서 베타 서비스를 출시할 때도 React를 사용했고, 2차 베타 서비스 개발을 시작하려는 지금도 React를 사용하고자 합니다.

하지만 Svelte의 ‘빠르다’이라는 특징은 제 눈길이 가게 했습니다.

<br />

### Svelte, SvelteKit

리액트를 사용하는 것이 너무나 자연스러웠음에도 눈에 들어왔던 프레임워크, Svelte입니다. 아까 사용 현황을 확인했던 표에서 Retention과 Interest 부분에서 Svelte는 상위권을 차지하고 있습니다.

리액트에 next.js가 있는 것처럼 svelte에는 svelteKit가 있는데, svelteKit를 사용하면 SSR웹앱을 구축하거나 라우팅 방면에서 핸들링이 쉬워집니다. ([간단하게 정리된 사용방법 블로그](https://velog.io/@yunkuk/Svelte-Kit)) 아직 svelteKit는 정식 릴리즈 단계가 아니지만 조만간 Official Release가 나올 것 같아 보입니다.

적은 코드로 가독성 ⬆️, 디버깅 쉽게

Write less code!
<img width="719" alt="스크린샷 2022-11-04 오후 4 00 09" src="https://user-images.githubusercontent.com/99077953/199911205-3df9745e-7931-4893-bfd0-4b4ab25cae8b.png">

No virtual DOM
<img width="694" alt="스크린샷 2022-11-04 오후 4 00 20" src="https://user-images.githubusercontent.com/99077953/199911237-9f112039-6bde-441d-b4eb-85b42cd47868.png">

virtual DOM을 사용하지 않음으로써(버츄얼 돔을 생성하고 기존 돔과 비교하는데 리소스가 들어가지 않음) 들어가는 메모리 사용량이 리액트의 거의 1/3배

더 적은 코드로 직관적으로 코드를 읽을 수 있었고, 메모리가 리액트에 비해 상당히 적게 든다는 점이 굉장히 매력적이었습니다. 리액트의 속도에 불만이 있었던 저로서는 SvelteKit가 정식 릴리즈를 하게 된다면 한 번 써보게 될 것 같습니다.

<br />

참고 블로그

[https://yozm.wishket.com/magazine/detail/1620/](https://yozm.wishket.com/magazine/detail/1620/)

[https://heropy.blog/2019/09/29/svelte/](https://heropy.blog/2019/09/29/svelte/)
