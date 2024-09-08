# 목차

<ul>
  <li>
    <a href='#1-프로젝트-소개'>1. 프로젝트 소개</a>
  </li>

  <li>
    <a href='#2-소스-빌드'>2. 소스 빌드 </a>
  </li>
  <li>
    <a href='#3-실행-방법'>3. 실행 방법</a>
  </li>
  <li>
    <a href='#4-컴포넌트-소개'>4. 컴포넌트 소개</a>
  </li>
</ul>
<br/><br />

# 1. 프로젝트 소개

<div align="center">

</div>

<img src="https://github.com/user-attachments/assets/d70ca6be-653c-474d-87ae-e8299f771926" alt="logo">

<b>
바쁜 일상 속에서 건강 관리를 보다 효율적으로 할 수 있도록 돕기 위해서입니다. 사용자들이 다이어리 기능을 통해 약 복용 시간, 운동 일정, 병원 예약 등을 체계적으로 관리할 수 있으며, 특정 증상에 맞는 약을 추천받아 빠르게 대처할 수 있습니다. 또한, 근처 병원과 약국을 지도에서 쉽게 찾아볼 수 있는 기능을 제공함으로써, 건강과 관련된 여러 활동을 한 곳에서 편리하게 관리할 수 있도록 돕고자 했습니다.
<br /><br />

--------

# 2. 소스 빌드

```
npm install
```

-------

## 3. 실행 방법

### JSON-server

```
npx json-server --watch db.json --port 4000
```

### Client

```
npm install
npm start
```

------------

## 4. 컴포넌트 소개

### ✔️ Main

<img width="80%" src="https://github.com/user-attachments/assets/60598e09-62a4-4f85-9513-a08680d4e849" alt="image1">

<img width="80%" src="https://github.com/user-attachments/assets/ebee3c29-f0a6-473a-988a-e08d8f7a4cbd" alt="image2">

### ✔️ Diary

<img width="80%" src="https://github.com/user-attachments/assets/46788a93-e0ec-4f1f-9940-484fcdfeb07f" alt="diary">

<img width="80%" src="https://github.com/user-attachments/assets/ce6a81eb-8262-473b-988c-9e2bdef0a5e7" alt="diary2">

<img width="80%" src="https://github.com/user-attachments/assets/6b25c513-d9b0-41e2-a1d3-0b32d03bd2f0" alt="diaryDelete">

 약, 병원, 운동 등 스케줄을 한번에 정리해서 볼 있어요! 
 
 잘못적은 일정은 지우지 않아도 이동시킬 수 있어요!
 
 월, 주, 일 별로 달력을 볼 수 있어요!
 

### ✔️ Hospital/Pharmacy

<img width="80%" src="https://github.com/user-attachments/assets/a7648c5c-26cc-415a-90a6-eafb86c34eb2" alt="hospital">

주변에 있는 약국과 병원을 검색없이 한번에 찾을 수 있어요!

### ✔️ Medicine

<img width="80%" src="https://github.com/user-attachments/assets/98db625b-2b38-41c4-94c8-38989934d560" alt="medicine">

몸상태만 누르면 적절한 약을 추첮받을 수 있어요!

----

### 커밋 규칙

기능추가 : [feat]

버그수정 : [fix]

css등 ui변경 : [design]

코드 리팩토링 : [refactor]

필요한 주석 추가 및 변경 : [comment]

파일 혹은 폴더명 수정 : [rename]

파일 삭제 : [remove]

코드 포맷 변경(프리티어 적용 등) : [format]

이미지, 파일, 코드 추가 : [add]

설치 : [install]
