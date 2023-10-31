export const questions = [
  {
    number: '01',
    question: '(집사)가 집을 나갔다! 이때 나는?',
    choices: [
      { text: '쿨쿨,, 잘다녀와,,, 잠을 자거나 조용히 기다린다.', value: 'I' },
      { text: '멍멍! 심심해! 놀래! 집 안을 뛰어다니며 놀기 시작한다.', value: 'E' }
    ]
  },
  {
    number: '02',
    question: '다른 강아지 친구를 마주쳤다! 이때 나는?',
    choices: [
      { text: '어라라 너는 누구야~? 귀엽다! >ㅁ< 호기심을 가지고 접근한다.', value: 'I' },
      { text: '무서버,,, 저리가,,, 아는척하지마라멍! 주저하거나 무시한다.', value: 'E' }
    ]
  },
  {
    number: '03',
    question: '즐거운 놀이시간! 내 최애 놀이는?',
    choices: [
      { text: '장난감 물어뜯기! 집사한테 장난감 던져달라고 하기~~', value: 'E' },
      { text: '(집사)야 쓰다듬어조~ 인형놀이하자~', value: 'I' }
    ]
  },
  {
    number: '04',
    question: '룰루 신나는 산책~! 중 뭐지? 장애물이 있다! 이때 나는?',
    choices: [
      { text: '그냥 나뭇잎이네~ 이런 것 쯤이야~ 장애물을 뛰어넘거나 빠르게 피한다.', value: 'S' },
      { text: '이건 뭐지? 몬스턴가? 돌아가야하나? 뛰어야하나? 장애물 앞에서 멈추거나 주저한다.', value: 'N' }
    ]
  },
  {
    number: '05',
    question: '(집사)가 뭔가를 들고 들어온다! 이때 나는?',
    choices: [
      { text: '킁킁,, 모지,, 모냐멍! 적극적으로 탐색하고 냄새를 맡는다.', value: 'N' },
      { text: '무서버,, 도망갈래애~~ 조심스럽게 대응하거나 피한다.', value: 'S' }
    ]
  },
  {
    number: '06',
    question: '햇빛이 따사롭게 내리쬐는 휴일날,,',
    choices: [
      { text: '멍~ 때리며 햇살을 즐긴다', value: 'N' },
      { text: '멍때리는 건 재미없어! (집사)한테 놀자고 조른다', value: 'S' }
    ]
  },
  {
    number: '07',
    question: '(콰광!) 천둥이 마구 친다! 나의 반응은?',
    choices: [
      { text: '비가 많이 오네,,, 차분하게 대응하거나 무시한다.', value: 'T' },
      { text: '비가 많이 오네,,, 차분하게 대응하거나 무시한다.', value: 'F' }
    ]
  },
  {
    number: '08',
    question: '(집사)가 티비를 보면서 웃고있다! 이때 나는?',
    choices: [
      { text: '뭔진 모르겠지만 히히~~ 나도 신난다!!', value: 'F' },
      { text: '왜 웃는거지? 무슨 상황인지 모르겠네.. 몰라!', value: 'T' }
    ]
  },
  {
    number: '09',
    question: '흑흑,,, (집사)가 울고있네,,? 이때 나는?',
    choices: [
      { text: '왜울지? 무슨일이지? 일단 혼자 냅둬야겠다.', value: 'T' },
      { text: '어떡해,, 너무 슬퍼보여,, 내가 옆에서 위로해줘야지 ㅜㅜㅜㅜ', value: 'F' }
    ]
  },
  {
    number: '10',
    question: '푹 쉬고있는데 (집사)가 갑자기 산책가자고 조른다! 이때 나는?',
    choices: [
      { text: '꺄 완전 좋아!! 즉흥산책 신나신나~!', value: 'P' },
      { text: '미리 말해주지.. 지금은 쉬는 시간인데,, 루틴이 깨지자나! 그래도 산책은 가야지 ㅎㅎ', value: 'J' }
    ]
  },
  {
    number: '11',
    question: '장난감 너무 좋아! 재미있는 장난감 시간~ 이때 나는?',
    choices: [
      { text: '일단 토끼인형을 갖고 놀고 그다음에 물고기 물고 놀아야지~', value: 'J' },
      { text: '토끼인형 재밌다~ 어 저거 물고기도 있네 재밌다~ 어 슬리퍼도 재밌다~', value: 'P' }
    ]
  },
  {
    number: '12',
    question: '매일이 즐거워! 내 하루 일상은~!?',
    choices: [
      { text: '일어나자마자 장난감이랑 놀다가 방석에서 낮잠자고 늘 가는 곳으로 산책을 갔다와!', value: 'P' },
      { text: '매일 다른 장소에서 일어나는 편이야~ 어제는 소파 앞에서 잤고, 오늘은 방석에서 잤어!', value: 'J' }
    ]
  },
]
export const results = [
  {
    title: '출근 시간은<br>내가 정해!',
    character: '/images/INTP.png',
    results: [
      '혼자서 멘탈 케어가 가능해요!<br>소속이 없어도, 벌이가 불안정해도 저는 지금이 좋아요!',
      '일에 대한 욕심이 많아요.<br>행복한 야근이라고 할 수 있어요!',
      '자유로운 환경에서 더 잘해요!<br>하지만 누구보다 스스로 시간 관리가 철저해요:)',
      '리더십 있다는 소리를 자주 들어요.<br>추진력이 있는 편이죠~ (뿌듯)'
    ],
    jobs: ['프리랜서', '창업가'],
    lectureImg: '/images/result_lecture1.png',
    lectureUrl: 'https://bit.ly/3Wr0kt6'
  },
  {
    title: '프로직진러!<br>진행력 갑',
    character: '/images/INTP.png',
    results: [
      '나는야 회사 사람들 멘탈 지킴이!<br>언제나 토닥토닥 으샤으샤 응원하며 다니는 파워 인싸!',
      '여러 사람과 협업이 필요한 직무에 찰떡!',
      '진행력 갑! 추진력 갑!<br>빠른 속도로 동시에 여러 업무를 해결할 수 있어요.',
      '회사 행사나 크리스마스 이벤트,<br>회사사람들 생일까지 우리가 다 챙길게요'
    ],
    jobs: ['마케터', '기획자'],
    lectureImg: '/images/INTP.png',
    lectureUrl: 'https://bit.ly/3SZl1t9'
  },
  {
    title: '우리 무기는<br>상상력!',
    character: '/images/result_character3.png',
    results: [
      '이것저것 관심이 많은 편이에요.<br>모든 게 궁금해요!',
      '섬세함이 장점으로<br>업무를 센스 있게 처리한다는 말을 자주 들어요.',
      '가끔은 거절을 잘 못해서 일이 몰릴 때가 있지만..!<br>전 괜찮아요~ (프로긍정러)',
      '업무에 예민할 때도 있지만,<br>그래서 결과물은 완벽하죠!'
    ],
    jobs: ['디자이너', '예술가'],
    lectureImg: '/images/INTP.png',
    lectureUrl: 'https://bit.ly/3DWlesG'
  },
  {
    title: '인생은<br>한방!',
    character: '/images/result_character4.png',
    results: [
      '전략적으로 계획을 세우는 걸 좋아해요!',
      '평소 경제와 사회 이슈에 관심이 매우 많아요.',
      '꿈이 커요!<br>크게 성공할 수 있는 한 방을 이뤄낼 거예요~',
      '일할 땐 일하고! 놀 땐 놀고!<br>뭐든 확실한 게 좋아요.'
    ],
    jobs: ['부동산<br>투자자', '주식<br>투자자'],
    lectureImg: '/images/result_lecture4.png',
    lectureUrl: 'https://bit.ly/3fvoTo5'
  },
  {
    title: '한 번 집중하면<br>멈출 수 없지!',
    character: '/images/INTP.png',
    results: [
      '저는 위선과 가식이 없어요.<br>진실만 말하죠. (진지)',
      '혼자서 더 잘해요.<br>솔로 워커 최고!',
      '관심 분야가 생기면 끝도 없이 깊어져요.<br>다만 이외에 모든 것엔 관심이 없어요.',
      '(이상) <<<<<< (현실)<br>가끔 이성에게 상처를 줄 때가 있어요, 그게 아닌데...'
    ],
    jobs: ['개발자', '데이터분석가'],
    lectureImg: '/images/result_lecture5.png',
    lectureUrl: 'https://bit.ly/3U0O3Kj'
  },
  {
    title: '인생 욜로지~<br>일단 놀자 ><',
    character: '/images/result_character6.png',
    results: [
      '취미가 100개!<br>이것저것 다재다능해요~',
      '한가하냐고요?<br>원래 백수가 젤 바쁜 거에요!',
      '결혼사진에 친구들이 다 들어갈 수 있을까요?',
      '가끔이지만, 갓생살기 도전해요!'
    ],
    jobs: ['돈 많은 백수', '유튜버'],
    lectureImg: '/images/result_lecture6.png',
    lectureUrl: 'https://bit.ly/3fzdinR'
  }
]
export const mbtis = {
  ENTJ: 0,
  ENTP: 0,
  ESTP: 0,
  ESFP: 1,
  ESFJ: 1,
  ENFJ: 1,
  INFP: 2,
  ISFP: 2,
  ISFJ: 2,
  INFJ: 2,
  ESFJ: 3,
  ISTP: 3,
  INTJ: 4,
  INTP: 4,
  ISTJ: 4,
  ENFP: 5
}
