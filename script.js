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
    a: [{ name: '묘지기', weight: 40 }, { name: '항해사', weight: 35 }, { name: '탈출마스터', weight: 30 },
    { name: '용병', weight: 25 }, { name: '야만인', weight: 8 }, { name: '포워드', weight: 8 },
    { name: '우는광대', weight: 8 }, { name: '기사', weight: 6 }],

    b: [{ name: '투우사', weight: 40 }, { name: '인형사', weight: 35 }, { name: '기상학자', weight: 40 },
    { name: '항공전문가', weight: 38 }, { name: '조향사', weight: 20 }, { name: '기자', weight: 5 }],

    c: [{ name: '공군', weight: 35 }, { name: '화재조사관', weight: 30 }, { name: '장난감상인', weight: 15 },
    { name: '환자', weight: 20 }, { name: '치어리더', weight: 20 }, { name: '마술사', weight: 25 },
    { name: '곡예사', weight: 18 }, { name: '정원사', weight: 18 }, { name: '모험가', weight: 0 }],

    d: [{ name: '주술사', weight: 40 }, { name: '궁수', weight: 50 },
    { name: '골동품상인', weight: 35 }, { name: '탐사원', weight: 15 }],

    e: [{ name: '환등사', weight: 60 }, { name: '행운아', weight: 50 }, { name: '의사', weight: 50 },
    { name: '심리학자', weight: 40 }, { name: '곤충학자', weight: 15 }, { name: '교수', weight: 28 },
    { name: '납관사', weight: 18 }, { name: '샤먼', weight: 20 }, { name: '바텐더', weight: 24 },
    { name: '여자아이', weight: 15 }, { name: '소설가', weight: 18 }, { name: '화가', weight: 15 }],

    f: [{ name: '파로부인', weight: 45 }, { name: '작곡가', weight: 20 }, { name: '기계공', weight: 15 },
    { name: '죄수', weight: 20 }, { name: '우배부', weight: 20 }, { name: '무희', weight: 15 },
    { name: '변호사', weight: 20 }, { name: '맹인', weight: 1 }]
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
            card.onclick = () => handleRosterClick(char.name);

            card.innerHTML = `
                <div class="roster-name">${char.name}</div>
                <div class="roster-group">그룹 ${listKey}</div>
                <div class="ban-overlay">BANNED</div>
            `;
            rosterArea.appendChild(card);
        });
    }
}

// --- 4. 맵 선택 --- //
function selectMap() {
    currentMap = getWeightedRandomItem(mapData);
    document.getElementById('mapScreen').classList.add('hidden');
    document.getElementById('comboScreen').classList.remove('hidden');
    document.getElementById('currentMapDisplay').innerHTML =
        `선택된 맵: [ ${currentMap.name} ] <span style="font-size: 0.6em; color:#888;">(등장 확률: ${currentMap.chance}%)</span>`;

    initRoster();
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

    //⭐ 맵별 시너지 일괄 세팅
    applyMapSynergy('장난감상인', ['호수마을', '레오의기억'], 20);
    applyMapSynergy('장난감상인', ['군수공장', '붉은성당'], -15);

    applyMapSynergy('환자', ['레오의기억', '달빛강공원'], 20);
    applyMapSynergy('항공전문가', ['달빛강공원'], 20);
    applyMapSynergy('곡예사', ['달빛강공원'], 20);
    applyMapSynergy('기상학자', ['달빛강공원'], 20);

    applyMapSynergy('행운아', ['성심병원', '돌아올 수 없는 숲', '레오의기억', '차이나타운'], 10);

    applyMapSynergy('모험가', ['군수공장', '레오의기억', '돌아올 수 없는 숲'], 25);
    applyMapSynergy('모험가', ['성심병원', '호수마을'], 20);
    applyMapSynergy('모험가', ['에버슬리핑타운', '차이나타운'], 10);

    applyMapSynergy('샤먼', ['에버슬리핑타운', '차이나타운', '성심병원'], 30);
    applyMapSynergy('샤먼', ['붉은성당'], 15);
    applyMapSynergy('샤먼', ['군수공장'], -15);

    applyMapSynergy('납관사', ['차이나타운', '달빛강공원'], 10);
    applyMapSynergy('납관사', ['레오의기억', '호수마을'], 10);
    applyMapSynergy('납관사', ['붉은성당'], -15);
    applyMapSynergy('납관사', ['성심병원'], -10);

    applyMapSynergy('여자아이', ['차이나타운', '달빛강공원'], 10);
    applyMapSynergy('여자아이', ['붉은성당'], -15);
    applyMapSynergy('여자아이', ['성심병원'], -10);

    applyMapSynergy('맹인', ['성심병원'], 5);
    applyMapSynergy('맹인', ['붉은성당', '돌아올 수 없는 숲'], -1);

    applyMapSynergy('용병', ['달빛강공원'], 10);
    applyMapSynergy('탈출마스터', ['달빛강공원'], 10);
    applyMapSynergy('야만인', ['달빛강공원'], 10);
    applyMapSynergy('포워드', ['달빛강공원'], 5);

    applyMapSynergy('기계공', ['성심병원'], 25);
    applyMapSynergy('기계공', ['차이나타운', '호수마을', '에버슬리핑타운', '군수공장'], 20);
    applyMapSynergy('기계공', ['레오의기억'], 10);
    applyMapSynergy('기계공', ['붉은성당', '돌아올 수 없는 숲'], -10);
    applyMapSynergy('기계공', ['달빛강공원'], -15);

    // ==========================================

    // [규칙 1] A그룹에서 무조건 1명 차출
    if (availableData.a.length === 0) {
        alert("A그룹의 캐릭터가 모두 밴 되었습니다. A그룹은 최소 1명 필수입니다.");
        return;
    }
    const pickedCharA = getWeightedRandomItem(availableData.a);

    const isA7orA8 = (pickedCharA.name === '우는광대' || pickedCharA.name === '기사');
    if (!isA7orA8) {
        availableData.b = availableData.b.filter(c => c.name !== '기자');
    }

    // 캐릭터 간 시너지 (A그룹 초점)
    if (pickedCharA.name === '항해사') {
        adjustWeight('마술사', -10);
        adjustWeight('파로부인', -10);
    }
    if (pickedCharA.name === '묘지기') {
        adjustWeight('기계공', -10);
    }

    // ⭐ 그룹 셀렉션 가중치 (B~F)
    const groupWeights = { b: 50, c: 40, d: 40, e: 30, f: 25 };

    // ⭐ [추가 조건] 포워드 선택 시 D그룹 가중치 감소
    if (pickedCharA.name === '포워드') {
        groupWeights.d = 12; // 
    }

    const selectedCombo = []; 

    // [규칙 4] 우는광대(A7), 기사(A8) 선택 시 B그룹 무조건 1명 이상 선배정
    if (isA7orA8) {
        if (availableData.b.length >= 1) {
            selectedCombo.push('b');
        } else {
            alert("우는광대 또는 기사가 뽑혔으나, B그룹 캐릭터가 부족하여 조합을 만들 수 없습니다.");
            return;
        }
    }

    // 룰렛을 돌려 남은 빈자리 채우기
    let failsafe = 0;
    while (selectedCombo.length < 3 && failsafe < 100) {
        failsafe++;
        const validGroups = [];

        // 현재 추첨 가능한 그룹들만 후보에 올리기
        for (const g of ['b', 'c', 'd', 'e', 'f']) {
            const currentCount = selectedCombo.filter(x => x === g).length;
            const maxCap = (g === 'b' || g === 'c') ? 2 : 1; 

            // 그룹 제한 수(cap)를 넘지 않았고, 남은 캐릭터 수가 뽑아야 할 수보다 많을 때만 후보 등록
            if (currentCount < maxCap && availableData[g].length > currentCount) {
                validGroups.push({ name: g, weight: groupWeights[g] });
            }
        }

        if (validGroups.length === 0) {
            alert("밴 된 캐릭터가 너무 많아 4인 조합을 구성할 수 없습니다.");
            return;
        }

        // 유틸 함수를 '그룹 뽑기'에 재사용!
        const pickedGroup = getWeightedRandomItem(validGroups);
        selectedCombo.push(pickedGroup.name);
    }

    // 그룹별 뽑힌 횟수 카운트 합산
    const groupCounts = {};
    selectedCombo.forEach(g => { groupCounts[g] = (groupCounts[g] || 0) + 1; });

    const finalTeam = [{ list: 'a', character: pickedCharA }];

    // 나머지 3명 캐릭터 가중치 기반 추첨
    for (const [g, count] of Object.entries(groupCounts)) {
        for (let i = 0; i < count; i++) {
            if (availableData[g].length === 0) continue;

            const picked = getWeightedRandomItem(availableData[g]);
            finalTeam.push({ list: g, character: picked });

            // 캐릭터 간 시너지 (B, E그룹 실시간 삭감)
            if (picked.name === '인형사') adjustWeight('의사', -3);
            if (picked.name === '무희') adjustWeight('모험가', -10);

            // 중복 픽 방지
            availableData[g] = availableData[g].filter(c => c.name !== picked.name);
        }
    }

    finalTeam.sort((a, b) => a.list.localeCompare(b.list));
    renderResult(finalTeam);
}

function renderResult(team) {
    const resultArea = document.getElementById('resultArea');
    resultArea.innerHTML = '';

    team.forEach(member => {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = `
            <div class="list-name">그룹 ${member.list}</div>
            <div class="char-name">${member.character.name}</div>
            <div class="weight-info">(당첨 확률: ${member.character.chance}%)</div>
        `;
        resultArea.appendChild(card);
    });
}

// --- 7. 완전 초기화 (Reset) --- //
function resetToMapSelection() {
    currentMap = null;
    bannedChars.clear();
    tempBannedChars.clear();

    document.getElementById('resultArea').innerHTML = '';
    document.getElementById('comboScreen').classList.add('hidden');
    document.getElementById('mapScreen').classList.remove('hidden');
}
