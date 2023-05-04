# 🍌Banana Vote

**투표하며 놀자!**

> **무엇을 먹을지, 무엇을 살지, 무엇을 할지** 결정이 어려우신가요? <br />
> **친구 의견과 내 의견** 중 어느 것이 옳을까요? <br />
> **다른 사람의 고민**을 보고 의견을 주고 싶으신가요? <br />
> 재미로 할 수 있는 **투표 커뮤니티**가 필요하신가요? <br />

### Banana Vote (바나나 보트)를 이용해보세요! <br />

## 📅 개발 기간
- 2023.3.10 ~ 진행 중

## 🔥 주요 기능
### 메인 페이지 (투표 목록 페이지)
- 투표글 목록 피드 형태로 조회
### 검색 결과 페이지
- 클릭 혹은 검색한 태그에 해당하는 투표글 목록 조회
### 투표글 작성 페이지
### 이벤트 페이지
### 스토어 페이지
### 랭킹 페이지
### 마이 페이지

## 🐒 기술 스택
### Frontend

|       Name                     |        Version         |    Category    |         Description                                                     |
|:------------------------------:|:----------------------:|:--------------:|:-----------------------------------------------------------------------:|
|      Next.js                   |         13.3           |    Framework   | 서버 사이드 렌더링                                                       |
|      React                     |         18.2           |    Library     |                                                                         |
|      Zustand                   |         4.3.7          |    Library     | 클라이언트 상태 관리                                                     |
|   React Query                  |         4.28.0         |    Library     | 서버 상태 관리, 데이터 페칭                                              |
|   Framer Motion                |         10.8.5         |    Library     | 애니메이션 스타일링                                                      |
|   Tailwind CSS                 |         3.2.7          |    Library     | CSS-in-JS 스타일링, 빌드 시 CSS로 바뀌기 때문에 서버 사이드 렌더링에 적합 |
|   Headless UI                  |         1.7.13         |    Library     | UI 라이브러리                                                            |
|   Hero Icons                   |         2.0.16         |    Library     | 아이콘                                                                   |
|   React Beautiful DND          |         13.1.1         |    Library     | 리스트 드래그앤드랍 기능                                                 |
|   React Slick                  |         0.29.0         |    Library     | 캐로셀 기능                                                              |
|   React DatePicker             |        4.10.0          |    Library     | 드래그앤드랍을 통한 파일 업로드 기능                                      |
|   React Interserction Observer |         9.4.3          |    Library     | 무한스크롤 기능에 활용(객체 감지)                                         |
|   timeago.js                   |         4.0.2          |    Library     | 시간값을 통한 상대시간 표현에 사용, format 자동화                         |
|   Firebase                     |         9.17.2         |    Library     | 이미지 스토리지                                                          |
|   Nano Id                      |         4.0.1          |    Library     | 랜덤 문자열 생성                                                         |
|   Humps                        |         2.0.2          |    Dev Library |  axios request, response 시 케이스 자동 변환                             |

### Backend

|       Name         |        Version         |    Category    |         Description            |
|:------------------:|:----------------------:|:--------------:|:------------------------------:|
|      SpringBoot    |         3.0.5          |    Framework   |                                |
|      JDK           |         17.0.6         |    Framework   |                                |
|      MySQL         |         8.0.32         |    Framework   |                                |

## 📐 Architecture
준비 중...

## ☁️ ERD Cloud
준비 중...

## 📄 Rules
### Git

## 🏗️ Directory Structure
### Frontend
```
📦Banana_Vote_FE
├─📦language
├─📦playrgiht
├─📦public
│  └─📂fonts
├─📦src
│  ├─📂app
│  │  ├─📂[lng]
│  │  ├─📂api
│  ├─📂types
│  └─middleware.ts
├─📜.env
├─📜...
└─📜tsconfig.json
```
### Backend

## 👥 Team
| 이름 | 역할 |
|------|------|
| <p align="center"><a href="https://github.com/YeoUlFox"><img src="https://avatars.githubusercontent.com/u/41969902?v=4" width="150px;" style="max-width: 100%;"/></a><br/><strong>우상욱</strong></p> | - 백엔드 개발 |
| <p align="center"><a href="https://github.com/YeoUlFox"><img src="https://avatars.githubusercontent.com/u/96644445?v=4" width="150px;" style="max-width: 100%;"/></a><br/><strong>이상우</strong></p> | - 백엔드 개발 |
| <p align="center"><a href="https://github.com/YeoUlFox"><img src="https://avatars.githubusercontent.com/u/20225380?v=4" width="150px;" style="max-width: 100%;"/></a><br/><strong>장석찬</strong></p> | - 프론트엔드 개발 |
| <p align="center"><a href="https://github.com/YeoUlFox"><img src="https://avatars.githubusercontent.com/u/38030774?v=4" width="150px;" style="max-width: 100%;"/></a><br/><strong>정진</strong></p> | - 프론트엔드 개발 |
| <p align="center"><a href="https://github.com/YeoUlFox"><img src="https://avatars.githubusercontent.com/u/64128134?v=4" width="150px;" style="max-width: 100%;"/></a><br/><strong>조민규</strong></p> | - 프론트엔드 개발 |
