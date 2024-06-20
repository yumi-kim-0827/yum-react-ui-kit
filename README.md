# 💡React Component Gradient UI kit

본 프로젝트는 React의 주요 장점 중 하나인 코드 스플리팅과 컴포넌트 분리를 통해 효율성을 극대화한 리액트 컴포넌트 KIT 입니다. 또한 CSS, SCSS와 같은 전통적인 스타일 시트 언어의 사용을 최소화하고, 'styled-components'를 활용하여 UI 렌더링을 구현하였습니다.

# 🖥️View web site

<!--프로젝트 대문 이미지-->

![sc1](https://github.com/yumi-kim-0827/yum-react-ui-kit/assets/116349476/45261959-fdbe-4937-a5da-b7a7c1a6cea6)

<!--목차-->

# Table of Contents

- [[1] About the Project](#1-about-the-project)
  - [Features](#features)
  - [Technologies](#technologies)
- [[2] Getting Started](#2-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [[3] Usage](#3-usage)
- [[4] Contribution](#4-contribution)
- [[5] Acknowledgement](#5-acknowledgement)
- [[6] Contact](#6-contact)
- [[7] License](#7-license)

# [1] About the Project

메인과 서브 컬라를 정하면 맞춤 칼라를 적용한 리액트 컴포넌트 UI KIT 코드를
복사하셔서 사용하실 수 있습니다.

## Features

## Technologies

- React js
- Typescript
- Next.js
- styled-components

# [2] Getting Started

## Prerequisites

- npm

```bash
npm install npm@latest -g
```

## Installation

1. Repository 클론

```bash
git clone https://github.com/your-username/project-repository
```

2. NPM packages 설치

```bash
npm install
```

# [3] Usage

'react-color-palette'을 사용하여 컬러 선택과 상태관리를 구현하였습니다.

```java

  const [color, setColor] = useColor("#561ecb");
  const [secondColor, setSecondColor] = useColor("#28aefa");

  <Card>
    <CardHead>1. 메인칼라를 고르세요</CardHead>
    <ColorPicker color={color} onChange={setColor} />
  </Card>
  <Card>
    <CardHead>2. 서브칼라를 고르세요</CardHead>
    <ColorPicker color={secondColor} onChange={setSecondColor} />
  </Card>

```

# [4] Contribution

버그 수정에 🐞, 아이디어 제공에 💡, 새로운 기능 구현에 ✨를 사용할 수 있습니다.\*

- (예시) 🐞 [YUMEEKIM](https://github.com/yumi-kim-0827): 메인페이지 버그 수정

# [5] Acknowledgement

- [design](https://www.behance.net/gallery/196517557/Design-System-UIUX-Design-Design-Library?tracking_source=search_projects|gradient+ui+kit&l=8)

# [6] Contact

- 📧 yumee0827@naver.com
- 📋 [https://github.com/yumi-kim-0827](https://github.com/yumi-kim-0827)

# [7] License

MIT 라이센스

<!--Url for Badges-->

[license-shield]: https://img.shields.io/github/license/dev-ujin/readme-template?labelColor=D8D8D8&color=04B4AE
[repository-size-shield]: https://img.shields.io/github/repo-size/dev-ujin/readme-template?labelColor=D8D8D8&color=BE81F7
[issue-closed-shield]: https://img.shields.io/github/issues-closed/dev-ujin/readme-template?labelColor=D8D8D8&color=FE9A2E

<!--Url for Buttons-->

[readme-eng-shield]: https://img.shields.io/badge/-readme%20in%20english-2E2E2E?style=for-the-badge
[view-demo-shield]: https://img.shields.io/badge/-%F0%9F%98%8E%20view%20demo-F3F781?style=for-the-badge
[view-demo-url]: https://dev-ujin.github.io
[report-bug-shield]: https://img.shields.io/badge/-%F0%9F%90%9E%20report%20bug-F5A9A9?style=for-the-badge
[report-bug-url]: https://github.com/dev-ujin/readme-template/issues
[request-feature-shield]: https://img.shields.io/badge/-%E2%9C%A8%20request%20feature-A9D0F5?style=for-the-badge
[request-feature-url]: https://github.com/dev-ujin/readme-template/issues

<!--URLS-->

[license-url]: LICENSE.md
[contribution-url]: CONTRIBUTION.md
[readme-eng-url]: ../README.md
