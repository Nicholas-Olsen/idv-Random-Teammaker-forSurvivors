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

// 도둑, 카우보이 제외
const characterData = {
    a: [{ name: '묘지기', weight: 36, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s25.jpg" },
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

    d: [{ name: '궁수', weight: 70, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s47.jpg" },
    { name: '주술사', weight: 62, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s19.jpg" },
    { name: '골동품상인', weight: 50, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s37.jpg" },
    { name: '탐사원', weight: 10, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s18.jpg" },
    { name: '타자', weight: 2, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s29.jpg" }],

    e: [{ name: '환등사', weight: 55, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s49.jpg" },
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
    { name: '무희', weight: 15, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s15.jpg" },
    { name: '소설가', weight: 18, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s33.jpg" },
    { name: '화가', weight: 15, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s28.jpg" }],

    f: [{ name: '파로부인', weight: 45, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s44.jpg" },
    { name: '작곡가', weight: 10, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s38.jpg" },
    { name: '기계공', weight: 15, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s10.jpg" },
    { name: '죄수', weight: 20, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s26.jpg" },
    { name: '우배부', weight: 20, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s24.jpg" },
    { name: '변호사', weight: 20, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s2.jpg" },
    { name: '맹인', weight: 1, img: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/images/s12.jpg" }]
};

let currentMap = null;
let isBanMode = false;
let bannedChars = new Set();
let tempBannedChars = new Set();

// --- 2. 공통 유틸 함수 --- //

function getWeightedRandomItem(itemsArray) {
    // 점수가 1 이상인 캐릭터들로만 추첨 풀 구성 (마이너스 무시)
    const validItems = itemsArray.filter(item => item.weight > 0);

    if (validItems.length === 0) {
        return { ...itemsArray[0], chance: "0.0" };
    }

    const totalWeight = validItems.reduce((sum, item) => sum + item.weight, 0);
    const randomNum = Math.random() * totalWeight;

    let weightSum = 0;
    for (let i = 0; i < validItems.length; i++) {
        weightSum += validItems[i].weight;
        if (randomNum <= weightSum) {
            const chancePercent = ((validItems[i].weight / totalWeight) * 100).toFixed(1);
            return { ...validItems[i], chance: chancePercent };
        }
    }
}

// --- 3. 초기 로스터 UI 생성 --- //
function initRoster() {
    const rosterArea = document.getElementById('rosterArea');
    rosterArea.innerHTML = '';

    for (const [listKey, chars] of Object.entries(characterData)) {
        chars.forEach(char => {
            const card = document.createElement('div');
            card.className = 'roster-card';
            card.id = `roster-${char.name}`;

            // 카드에 마우스를 올리면 이름이 말풍선처럼 뜨게 
            card.title = `[그룹 ${listKey.toUpperCase()}] ${char.name}`;
            card.onclick = () => handleRosterClick(char.name);

            card.innerHTML = `
                <img src="${char.img}" alt="${char.name}" class="char-img">
                <div class="ban-overlay">X</div>
            `;
            rosterArea.appendChild(card);
        });
    }
}

// --- 4. 맵 선택 시스템 (랜덤 & 수동) --- //

// [수동 선택] 영역 열기/닫기
function toggleManualMapSelect() {
    document.getElementById('manualMapSelectArea').classList.toggle('hidden');
}

// [수동 선택] 드롭다운에서 맵을 골랐을 때
function onMapDropdownChange() {
    const dropdown = document.getElementById('mapDropdown');
    const confirmArea = document.getElementById('manualMapConfirmArea');
    const display = document.getElementById('manualMapDisplay');

    if (dropdown.value) {
        dropdown.style.color = "#333";
        display.innerHTML = `현재 맵: [ ${dropdown.value} ]`;
        confirmArea.classList.remove('hidden');
    } else {
        dropdown.style.color = "gray";
        confirmArea.classList.add('hidden');
    }
}

// [수동 선택] 맵 결정 버튼 클릭 시
function confirmManualMap() {
    const dropdown = document.getElementById('mapDropdown');
    if (!dropdown.value) return;

    const selectedMapObj = mapData.find(m => m.name === dropdown.value);
    // 수동 선택은 등장 확률 대신 '수동 지정'이라는 텍스트를 부여합니다
    currentMap = { ...selectedMapObj, chance: "수동 지정" };
    goToPhase2();
}

// [랜덤 선택] 버튼 클릭 시 (기존 로직)
function selectMap() {
    currentMap = getWeightedRandomItem(mapData);
    currentMap.chance = currentMap.chance + "%"; // 확률 텍스트로 변환
    goToPhase2();
}

// 1단계 -> 2단계 화면 전환 공통 함수
function goToPhase2() {
    document.getElementById('mapScreen').classList.add('hidden');
    document.getElementById('comboScreen').classList.remove('hidden');

    document.getElementById('currentMapDisplay').innerHTML =
        `선택된 맵: [ ${currentMap.name} ] <span style="font-size: 0.6em; color:#888;">(확률: ${currentMap.chance})</span>`;

    initRoster(); // 화면이 넘어갈 때 캐릭터 명단 생성
}

// --- 5. 밴 시스템 로직 --- //
function enterBanMode() {
    isBanMode = true;
    tempBannedChars = new Set(bannedChars);

    document.getElementById('normalButtons').classList.add('hidden');
    document.getElementById('banButtons').classList.remove('hidden');
    document.getElementById('resultArea').innerHTML = '';

    updateRosterVisuals();
}

function handleRosterClick(charName) {
    if (!isBanMode) return;

    if (tempBannedChars.has(charName)) {
        tempBannedChars.delete(charName);
    } else {
        if (tempBannedChars.size >= 10) {
            alert("밴은 최대 10개까지만 지정할 수 있습니다.");
            return;
        }
        tempBannedChars.add(charName);
    }
    updateRosterVisuals();
}

function applyBans() {
    bannedChars = new Set(tempBannedChars);
    exitBanMode();
}

function cancelBanMode() {
    tempBannedChars = new Set();
    exitBanMode();
}

function exitBanMode() {
    isBanMode = false;
    document.getElementById('banButtons').classList.add('hidden');
    document.getElementById('normalButtons').classList.remove('hidden');
    updateRosterVisuals();
}

function updateRosterVisuals() {
    const cards = document.querySelectorAll('.roster-card');
    cards.forEach(card => {
        const charName = card.id.replace('roster-', '');
        card.classList.remove('staged-ban', 'applied-ban');

        if (isBanMode) {
            if (tempBannedChars.has(charName)) card.classList.add('staged-ban');
        } else {
            if (bannedChars.has(charName)) card.classList.add('applied-ban');
        }
    });
}

// --- 6. 조합 뽑기 로직 (고급 규칙) --- //
function generateCombination() {
    const availableData = {};

    for (const [listKey, chars] of Object.entries(characterData)) {
        availableData[listKey] = chars
            .filter(c => !bannedChars.has(c.name))
            .map(c => ({ ...c }));
    }

    // 💡 캐릭터 점수 조절 함수
    function adjustWeight(targetName, amount) {
        for (const g of Object.keys(availableData)) {
            const index = availableData[g].findIndex(c => c.name === targetName);
            if (index !== -1) {
                availableData[g][index].weight += amount;
            }
        }
    }

    // 💡 맵 시너지 전용 함수
    function applyMapSynergy(targetName, mapNames, amount) {
        // 현재 선택된 맵이 조건 배열에 포함되어 있다면 점수 가감
        if (mapNames.includes(currentMap.name)) {
            adjustWeight(targetName, amount);
        }
    }

    //⭐ 맵별 시너지 일괄
    applyMapSynergy('장난감상인', ['호수마을', '레오의기억'], 20);
    applyMapSynergy('장난감상인', ['군수공장', '붉은성당'], -15);

    applyMapSynergy('환자', ['레오의기억', '달빛강공원'], 30);
    applyMapSynergy('항공전문가', ['달빛강공원'], 30);
    applyMapSynergy('곡예사', ['달빛강공원'], 25);
    applyMapSynergy('기상학자', ['달빛강공원'], 30);

    applyMapSynergy('행운아', ['성심병원', '돌아올 수 없는 숲', '레오의기억', '차이나타운'], 10);

    applyMapSynergy('모험가', ['군수공장', '레오의기억', '돌아올 수 없는 숲'], 25);
    applyMapSynergy('모험가', ['성심병원', '호수마을'], 20);
    applyMapSynergy('모험가', ['에버슬리핑타운', '차이나타운'], 10);
    applyMapSynergy('모험가', ['붉은성당', '달빛강공원'], -50);

    applyMapSynergy('샤먼', ['에버슬리핑타운', '차이나타운', '성심병원'], 30);
    applyMapSynergy('샤먼', ['붉은성당'], 15);
    applyMapSynergy('샤먼', ['달빛강공원'], 23);
    applyMapSynergy('샤먼', ['군수공장'], -15);

    applyMapSynergy('무희', ['군수공장', '붉은성당'], 16);
    applyMapSynergy('무희', ['차이나타운', '레오의기억'], 12);

    applyMapSynergy('납관사', ['차이나타운', '달빛강공원'], 10);
    applyMapSynergy('납관사', ['레오의기억', '호수마을'], 10);
    applyMapSynergy('납관사', ['붉은성당'], -15);
    applyMapSynergy('납관사', ['성심병원'], -12);

    applyMapSynergy('여자아이', ['차이나타운', '달빛강공원'], 10);
    applyMapSynergy('여자아이', ['붉은성당'], -15);
    applyMapSynergy('여자아이', ['성심병원'], -10);

    applyMapSynergy('맹인', ['성심병원'], 5);
    applyMapSynergy('맹인', ['붉은성당', '돌아올 수 없는 숲'], -1);

    applyMapSynergy('용병', ['달빛강공원', '호수마을'], 13);
    applyMapSynergy('탈출마스터', ['달빛강공원'], 16);
    applyMapSynergy('야만인', ['달빛강공원'], 10);
    applyMapSynergy('포워드', ['달빛강공원'], -3);

    applyMapSynergy('기계공', ['성심병원'], 22);
    applyMapSynergy('기계공', ['차이나타운', '호수마을', '에버슬리핑타운', '군수공장'], 19);
    applyMapSynergy('기계공', ['레오의기억'], 11);
    applyMapSynergy('기계공', ['붉은성당', '돌아올 수 없는 숲'], -10);
    applyMapSynergy('기계공', ['달빛강공원'], -15);

    applyMapSynergy('작곡가', ['붉은성당', '군수공장', '차이나타운', '레오의기억'], 8);

    // ==========================================

    // A그룹 추첨 하기 전 미리 B그룹 상태 확인
    if (availableData.b.length === 0) {
        availableData.a = availableData.a.filter(c => c.name !== '우는광대' && c.name !== '기사');
    }

    // [규칙 1] A그룹에서 무조건 1명 차출
    if (availableData.a.length === 0) {
        alert("구출 그룹에서 뽑을 수 있는 캐릭터가 없습니다.\n(서브구출 그룹 전멸로 인해 우는광대와 기사 출전 불가)");
        return;
    }

    const pickedCharA = getWeightedRandomItem(availableData.a);
    const finalTeam = [{ list: 'a', character: pickedCharA }];

    const isA7orA8 = (pickedCharA.name === '우는광대' || pickedCharA.name === '기사');
    if (!isA7orA8) {
        availableData.b = availableData.b.filter(c => c.name !== '기자');
    }

    // ⭐ 그룹 셀렉션 가중치 (B~F)
    const groupWeights = { b: 80, c: 65, d: 70, e: 50, f: 36 };

    if (currentMap.name === '성심병원') groupWeights.f += 20;

    // 캐릭터 간 시너지 (A그룹 초점)
    if (pickedCharA.name === '항해사') {
        adjustWeight('마술사', -2);
        adjustWeight('파로부인', -5);
        adjustWeight('골동품상인', -40);
        adjustWeight('교수', -12);
        adjustWeight('주술사', -25);
        adjustWeight('심리학자', -5);
        adjustWeight('탐사원', 10);
    }
    else if (pickedCharA.name === '탈출마스터') {
        adjustWeight('궁수', 10); adjustWeight('골동품상인', 20); adjustWeight('마술사', 20);
        adjustWeight('인형사', 6); adjustWeight('교수', 12);
    }
    else if (pickedCharA.name === '묘지기') {
        adjustWeight('기계공', -18); adjustWeight('궁수', -10); adjustWeight('골동품상인', 20);
        adjustWeight('마술사', 15); adjustWeight('인형사', 6); adjustWeight('교수', 18);
        adjustWeight('화재조사관', 10); adjustWeight('환등사', 12); adjustWeight('기상학자', 10);
    }
    else if (pickedCharA.name === '야만인') {
        adjustWeight('궁수', 10); adjustWeight('화재조사관', 10); adjustWeight('교수', 10);
    }
    else if (pickedCharA.name === '포워드') {
        groupWeights.d = 20;
        adjustWeight('기계공', 10); adjustWeight('심리학자', 10); adjustWeight('공군', -15);
        adjustWeight('조향사', -3); adjustWeight('소설가', -8); adjustWeight('환등사', 10);
        adjustWeight('파로부인', 2); adjustWeight('마술사', 7); adjustWeight('교수', 3);
    }

    if (['포워드', '야만인'].includes(pickedCharA.name)) {
        groupWeights.f += 15;
        adjustWeight('공군', -15); adjustWeight('치어리더', -7); adjustWeight('샤먼', -15);
        adjustWeight('환등사', 5); adjustWeight('모험가', 10); adjustWeight('항공전문가', 5);
        adjustWeight('행운아', 10); adjustWeight('무희', 6); adjustWeight('마술사', 8);
        adjustWeight('궁수', 6); adjustWeight('골동품상인', 8); adjustWeight('기계공', 3);
    }

    if (pickedCharA.name === '용병') {
        groupWeights.f += 15;
        adjustWeight('공군', -15); adjustWeight('치어리더', -7); adjustWeight('샤먼', -15);
        adjustWeight('환등사', 5); adjustWeight('모험가', 10); adjustWeight('행운아', 10); 
        adjustWeight('무희', 6); adjustWeight('마술사', 8); adjustWeight('궁수', 6); 
        adjustWeight('골동품상인', 8); adjustWeight('기계공', 3); adjustWeight('바텐더', 8); 
        adjustWeight('심리학자', 5); adjustWeight('투우사', 5); adjustWeight('항공전문가', 7);  
        adjustWeight('주술사', -15); adjustWeight('인형사', -14);
    }

    const selectedGroupsCount = { b: 0, c: 0, d: 0, e: 0, f: 0 };
    let slotsToFill = 3; // 앞으로 채워야 할 자리

    function pickCharacterFromGroup(g, groupProb = 1.0) {
        if (g === 'd') {
            adjustWeight('환등사', 12);
        }

        const picked = getWeightedRandomItem(availableData[g]);

        const charProb = parseFloat(picked.chance) / 100;

        const finalChance = (charProb * groupProb * 100).toFixed(2); // 최종 % 변환
        picked.chance = finalChance;

        finalTeam.push({ list: g, character: picked });

        // 캐릭터 간 시너지
        if (picked.name === '인형사') adjustWeight('의사', -3); adjustWeight('주술사', -15);
        if (picked.name === '무희') adjustWeight('모험가', -10);
        if (picked.name === '곡예사') adjustWeight('골동품상인', -500);
        if (picked.name === '골동품상인') adjustWeight('곡예사', -500);

        if (picked.name === '납관사') groupWeights.f = 8;

        // 모험가or장상 픽했을때 F그룹 가중치 감소
        if (picked.name === '모험가') groupWeights.f -= 40;

        if (picked.name === '장난감상인' && ['달빛강공원', '호수마을'].includes(currentMap.name)) {
            groupWeights.f -= 80;
        }

        if (g === 'b') {
            groupWeights.b -= 25; // B가 1명 나오면 다음번 B가 나올 확률 감소
            groupWeights.c -= 12;
        }

        availableData[g] = availableData[g].filter(c => c.name !== picked.name);
        selectedGroupsCount[g]++;
        slotsToFill--;
    }

    // 💡 A7(우는광대), A8(기사)가 뽑혔을 경우 B그룹 1자리 강제 할당!
    if (isA7orA8) {
        pickCharacterFromGroup('b', 1.0);
    }

    let failsafe = 0;
    while (slotsToFill > 0 && failsafe < 100) {
        failsafe++;
        const validGroups = [];

        for (const g of ['b', 'c', 'd', 'e', 'f']) {
            const currentCount = selectedGroupsCount[g];
            const maxCap = (g === 'b' || g === 'c') ? 2 : 1;

            if (currentCount < maxCap && availableData[g].length > 0) {
                if (groupWeights[g] > 0) {
                    validGroups.push({ name: g, weight: groupWeights[g] });
                }
            }
        }

        if (validGroups.length === 0) {
            alert("밴 된 캐릭터가 너무 많거나, 시너지 제약으로 인해 4인 조합을 구성할 수 없습니다.");
            return;
        }
        const totalValidWeight = validGroups.reduce((sum, grp) => sum + grp.weight, 0);

        const pickedGroup = getWeightedRandomItem(validGroups);
        const currentGroupProb = pickedGroup.weight / totalValidWeight;

        // 룰렛 추첨일 경우 실시간 그룹 확률 전달
        pickCharacterFromGroup(pickedGroup.name, currentGroupProb);
    }

    finalTeam.sort((a, b) => a.list.localeCompare(b.list));
    renderResult(finalTeam);
}

// 렌더링 함수 //
function renderResult(team) {
    const resultArea = document.getElementById('resultArea');
    resultArea.innerHTML = '';

    const roleNames = {
        a: '구출',
        b: '보조구출',
        c: '보조구출',
        d: '커버',
        e: '견제',
        f: '해독'
    };

    team.forEach(member => {
        const card = document.createElement('div');
        card.className = 'result-card';

        const charName = member.character.name;

        // 💡 이름 6글자 이상이면 'long-name' 클래스 추가
        const isLongName = charName.length >= 6;
        const nameClass = isLongName ? "char-name long-name" : "char-name";
        let displayRole = roleNames[member.list];
        if (charName === '모험가') {
            displayRole = '특수구출';
        }

        card.innerHTML = `
            <div class="list-name">${roleNames[member.list]}</div>
            <img src="${member.character.img}" alt="${charName}" class="result-char-img">
            <div class="${nameClass}">${charName}</div>
            <div class="weight-info">확률: ${member.character.chance}%</div>
        `;
        resultArea.appendChild(card);
    });
}

// --- 완전 초기화 (Reset) --- //
function resetToMapSelection() {
    currentMap = null;
    bannedChars.clear();
    tempBannedChars.clear();

    document.getElementById('resultArea').innerHTML = '';
    document.getElementById('comboScreen').classList.add('hidden');
    document.getElementById('mapScreen').classList.remove('hidden');

    // 수동 선택 드롭다운 상태 초기화
    document.getElementById('mapDropdown').value = "";
    document.getElementById('manualMapSelectArea').classList.add('hidden');
    document.getElementById('manualMapConfirmArea').classList.add('hidden');
}

// =========================================
// 🎵 BGM 플레이리스트 로직
// =========================================

// 곡 목록 
const trackList = [
    { title: "Living room", url: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/music/BGM_Living room.mp3" },
    { title: "Alice's Apartment", url: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/music/BGM_Alice's Apartment.mp3" },
    { title: "Logic Path", url: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/music/BGM_Logic Path.mp3" },
    { title: "The Fluttering Clouds", url: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/music/BGM_The Fluttering Clouds.mp3" },
    { title: "COA 4 Registration", url: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/music/BGM_COA 4 Registration.mp3" },
    { title: "Sunset Beach", url: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/music/BGM_Sunset Beach.mp3" },
    { title: "생존자 대기실", url: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/music/a_bgm_survivor.mp3" },
    { title: "Decoding...", url: "https://raw.githubusercontent.com/Nicholas-Olsen/idv-Ban-Pick-Simulator/main/music/BGM_DECODING.mp3" }
];

let currentTrackIndex = 0;

// 페이지 로드 시 플레이리스트를 생성하고 첫 곡을 세팅
window.addEventListener('DOMContentLoaded', () => {
    const playlistUl = document.getElementById('playlist-ul');
    const bgmAudio = document.getElementById('bgm-audio');
    bgmAudio.loop = true;

    bgmAudio.addEventListener('ended', () => {
        bgmAudio.currentTime = 0; // 재생 위치를 처음으로
        bgmAudio.play();
    });

    // 1. 플레이리스트에 곡들 추가
    trackList.forEach((track, index) => {
        const li = document.createElement('li');
        li.innerText = track.title;
        if (index === currentTrackIndex) li.classList.add('active');

        li.onclick = () => playTrack(index);
        playlistUl.appendChild(li);
    });

    bgmAudio.src = trackList[currentTrackIndex].url;

    const mapDropdown = document.getElementById('mapDropdown');
    mapData.forEach(map => {
        const option = document.createElement('option');
        option.value = map.name;
        option.textContent = map.name;
        option.style.color = "#333";
        mapDropdown.appendChild(option);
    });
});

// 곡 목록(드롭업) 열기/닫기 함수
function togglePlaylist() {
    document.getElementById('playlist-menu').classList.toggle('hidden');
}

// 특정 곡을 선택하여 재생하는 함수
function playTrack(index) {
    const bgmAudio = document.getElementById('bgm-audio');
    const listItems = document.querySelectorAll('#playlist-ul li');

    // 모든 리스트의 파란색(active) 표시 제거
    listItems.forEach(li => li.classList.remove('active'));

    // 선택한 곡에 파란색 표시
    listItems[index].classList.add('active');

    // 오디오 소스 변경 및 재생
    bgmAudio.src = trackList[index].url;
    bgmAudio.play(); // 곡을 선택하면 자동으로 재생 시작

    // 곡을 선택하면 플레이리스트 창을 자동으로 닫음
    togglePlaylist();
}
