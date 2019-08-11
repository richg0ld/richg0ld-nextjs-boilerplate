# Next.js 9 boilerplate <!-- TOC -->

- [Spec](#Spec)
- [Prerequisites](#Prerequisites)
- [Pre-install](#Pre_Install)
- [Config](#Config)
    - [Develop env](#Develop_env)
- [Commands](#Commands)
- [Start](#Start)
- [Folder structure](#Folder_structure)

<!-- /TOC -->

#Spec

- [x] next.js 세팅 (typescript)
- [x] 다국어 처리 (https://github.com/zeit/next.js/tree/canary/examples/with-react-intl)
- [x] 다국시간 처리
- [x] 폴리필 (polyfill) 처리 (https://github.com/zeit/next.js/tree/canary/examples/with-polyfills)
- [] 템플릿 캐싱 (https://github.com/zeit/next.js/tree/canary/examples/ssr-caching)
- [x] static 파일 설정 (도메인 변경) (https://github.com/zeit/next.js/tree/canary/examples/root-static-files)
- [x] 환경변수 설정 (https://github.com/zeit/next.js/tree/canary/examples/with-dotenv)
- [] 쿠키 관리 
- [x] 상태관리 (redux, redux-saga)
- [] cdn 대비 처리
- [x] 스타일링 sass
- [] 테마 작업 환경
- [] 페이지 이동시 로딩바(프로그레스바) (https://github.com/zeit/next.js/tree/canary/examples/with-loading)
- [] 로거환경
- [] 커스텀 페이지(이벤트 페이지)
- [] tooltip
- [] test 환경
- [] 프로세스 메니저 세팅
- [] svg 이미지 적용(색상 바꿀 수 있도록)
- [] 도커 세팅


#Prerequisites

- Node.js >= 8.x (Recommended the latest version) - 2018.08.08 v8.11.3 테스트 완료

#Pre_Install

기본적으로 node.js가 설치 되어있고 패키치는 npm 명령어를 기준으로 작성 되어있다.

#Install

package.json에 작성된 의존성들을 설치한다.
```sh
npm i
```

#Config

`.env.sample`파일을 복사하여 `.env`이름으로 새로 저장한다.
```sh
cp .env.sample .env
```

#Develop_env

```env
SERVICE_URL=
PORT=
API_URL=
```

로컬 개발시에는 포트 번호를 다르게 하고싶다면 URL 쪽 포트도 꼭 같도록 맞추어야 한다. 주의하길 바란다.
```env
SERVICE_URL=http://localhost:8809
PORT=8809
API_URL=https://api.github.com
```

#Commands

```sh
"scripts": {
    "dev": "nodemon", //개발환경 실행
    "build": "next build && tsc --project tsconfig.server.json", //프로덕트 빌드
    "start": "cross-env NODE_ENV=production node dist/index.js" //프로덕트 실행
  }
```

#Start
`.env`파일에 `PORT`값을 기준으로 서버포트가 열린다. (아무값도 지정하지 않을 경우 :3000)
```sh
npm run dev
open http://localhost:3000
```

#Folder_structure
```bash
├── README.md                 - 리드미 파일
├── tsconfig.server.json      - node 서버용 ts 설정 파일 (tsconfig.json을 확장하여 사용)
├── tsconfig.json             - 기본 ts 설정 파일
├── next-env.d.ts             - 기본 ts 설정 파일
├── package.json              - npm 패키지 json
├── nodemon.json              - nodemon 명령어용 json
├── next.config.js            - nextjs 설정파일
├── .gitignore                - git 제외 설정
├── .env.sample               - .env 환경변수 샘플파일
│
├── server/                   - node 서버영역
├── modules/                  - 리덕스 관련 상태 관리를 포함한 폴더
├── store/                    - 리덕스 스토어
├── pages/                    - 실제 페이지용 컴포넌트 영역
├── components/               - 컴포넌트 영역
├── client/                   - client 영역
│   └── api/                  - client 용 api
└── IDE/                      - 개발용 설정 파일