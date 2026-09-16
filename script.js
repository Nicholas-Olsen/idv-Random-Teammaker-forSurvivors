// --- 1. 데이터 및 상태 변수 --- //
const mapData = [
    { name: '군수공장', weight: 20 },
    { name: '붉은성당', weight: 40 },
    { name: '성심병원', weight: 10 },
    { name: '호수마을', weight: 90 },
    { name: '달빛강공원', weight: 90 },
    { name: '레오의기억', weight: 60 },
    { name: '에버슬리핑타운', weight: 100 },
    { name: '차이나타운', weight: 45 },
    { name: '돌아올 수 없는 숲', weight: 50 }
];

const characterData = {
    a: [{ name: '묘지기', weight: 40, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s25.jpg" },
    { name: '항해사', weight: 35, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s22.jpg" },
    { name: '탈출마스터', weight: 30, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s48.jpg" },
    { name: '용병', weight: 25, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s7.jpg" },
    { name: '야만인', weight: 8, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s20.jpg" },
    { name: '포워드', weight: 8, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s11.jpg" },
    { name: '우는광대', weight: 8, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s35.jpg" },
    { name: '기사', weight: 6, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s45.jpg" }],

    b: [{ name: '투우사', weight: 40, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s50.jpg" },
    { name: '인형사', weight: 35, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s42.jpg" },
    { name: '기상학자', weight: 40, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s46.jpg" },
    { name: '항공전문가', weight: 38, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s40.jpg" },
    { name: '조향사', weight: 20, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s13.jpg" },
    { name: '무언극 아티스트', weight: 30, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s51.jpg" },
    { name: '기자', weight: 5, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s39.jpg" }],

    c: [{ name: '공군', weight: 33, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s8.jpg" },
    { name: '화재조사관', weight: 31, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s43.jpg" },
    { name: '장난감상인', weight: 15, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s30.jpg" },
    { name: '환자', weight: 20, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s31.jpg" },
    { name: '치어리더', weight: 20, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s41.jpg" },
    { name: '마술사', weight: 25, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s5.jpg" },
    { name: '곡예사', weight: 18, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s21.jpg" },
    { name: '정원사', weight: 18, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s4.jpg" },
    { name: '모험가', weight: 0, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s6.jpg" }],

    d: [{ name: '주술사', weight: 40, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s19.jpg" },
    { name: '궁수', weight: 50, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s47.jpg" },
    { name: '골동품상인', weight: 35, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s37.jpg" },
    { name: '탐사원', weight: 10, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s18.jpg" }],

    e: [{ name: '환등사', weight: 60, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s49.jpg" },
    { name: '행운아', weight: 50, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s52.jpg" },
    { name: '의사', weight: 50, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s1.jpg" },
    { name: '심리학자', weight: 40, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s32.jpg" },
    { name: '곤충학자', weight: 15, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s27.jpg" },
    { name: '선지자', weight: 22, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s16.jpg" },
    { name: '교수', weight: 28, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s36.jpg" },
    { name: '납관사', weight: 18, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s17.jpg" },
    { name: '샤먼', weight: 20, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s9.jpg" },
    { name: '바텐더', weight: 24, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s23.jpg" },
    { name: '여자아이', weight: 15, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s34.jpg" },
    { name: '소설가', weight: 18, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s33.jpg" },
    { name: '화가', weight: 15, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s28.jpg" }],

    f: [{ name: '파로부인', weight: 45, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s44.jpg" },
    { name: '작곡가', weight: 15, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s38.jpg" },
    { name: '기계공', weight: 15, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s10.jpg" },
    { name: '죄수', weight: 20, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s26.jpg" },
    { name: '우배부', weight: 20, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s24.jpg" },
    { name: '무희', weight: 15, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s15.jpg" },
    { name: '변호사', weight: 20, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s2.jpg" },
    { name: '맹인', weight: 1, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s12.jpg" }]
};
