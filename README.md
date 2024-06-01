# Project-Management

**프로젝트 관리 웹앱 (ft. Udemy)**

## HTML

### \<aside> 태그

페이지 내 주요 콘텐츠와 직접적이지 않고 간접적인 내용으로 구성된 별도의 부분을 나타냅니다.

주로 사이드바 혹은 문서 내용과 관련된 추가 정보를 제공하는 작은 영역으로 표현됩니다.

### \<main> 태그

페이지의 주요 콘텐츠 영역을 나타내며, 페이지 내의 핵심 내용을 포함합니다.

문서 내에서 한 번만 사용해야 합니다.
이 규칙은 문서의 구조를 명확하게 유지하고 웹 페이지를 올바르게 해석하기 위해 따라야 하는 중요한 규칙 중 하나입니다.

만일 SPA(단일 페이지 애플리케이션)을 자바스크립트로 서버의 왕복 없이 콘텐츠를 구현하기 위해서 \<main> 요소 여러 개를 미리 마크업할 경우에는 현재 보여지지 않는 요소는 hidden 속성을 사용해서 숨겨야 합니다.

### \<menu> 태그

\<menu>와 \<ul> 태그는 모두 순서가 지정되지 않는 항목(items)의 목록(list)를 나타내는 태그라는 공통점이 있습니다.

**명세서상 차이**</br>
\<ul> : 기본적으로 표시용 항목들로 구성 </br>
\<menu> : 대화형 항목(버튼 등 명령 목록)들로 구성

**가능한 자식 요소**</br>
\<li>, \<script>, \<template> 만 가능. </br>
텍스의 삽입(text node를 의미함)등은 사용할 수 없습니다. (p태그 등 불가)

## Tailwind

### h-screen

```css
height: 100vh;
```

화면에 꽉 차는 높이로 사이즈 지정해줌.

### mx-auto

**container** 나 **object-contain** 등 컨테이너랑 같이 쓰면, 아이템을 가운데에 배치해줌.

##  문제 해결

> VM1858:1 Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.

간단히 말하면  
리액트의 **_'제어 컴포넌트'_** 와 **_'비제어 컴포넌트'_** 의 차이 때문이다.

```js
const [enteredTask, setEnteredTask] = useState();
```

이렇게 초기값을 아무것도 안 설정 해두면 `undefined` 상태이니 **_비제어 컴포넌트_** 라고 생각했는데, `string` 값이 들어오면서 **_제어 컴포넌트_** 가 되어 버리니 경고가 뜬 것이다.

### 해결

```js
const [enteredTask, setEnteredTask] = useState("");
```

초기값을 `string`으로 해주어 `undefined` 상태를 피하면 된다.
