/* ABYSS WORLD — 라벨/등급/속성 데이터 (labels.js)
 * v3.1.1 — 단일 파일에서 분리.
 *
 * 포함 항목:
 *   GRADES      — 장비 등급별 색상/배율/스킬 보너스
 *   ATTR_N      — 속성 한글명/이모지
 *   ATTR_C      — 속성 색상
 *   FURN_CAT_KR — 가구 카테고리 한글명
 *   MAT_LABEL   — 합성 재료 한글 라벨
 *
 * 등급 추가/배율 조정 / 신규 속성 도입 시 이 파일만 수정.
 */

const GRADES={
  normal:   {name:'노말',    color:'#9d9d9d',w:55,  mult:0.75,skillM:0  },
  uncommon: {name:'언커먼',  color:'#1eff00',w:25,  mult:1.2, skillM:0.4},
  rare:     {name:'레어',    color:'#0070dd',w:12,  mult:1.8, skillM:0.6},
  epic:     {name:'에픽',    color:'#a335ee',w:4,   mult:2.6, skillM:0.9},
  legendary:{name:'레전더리',color:'#ff8c00',w:0.8, mult:3.8, skillM:1.3},
  set:      {name:'유일',    color:'#00ffcc',w:0.0, mult:3.0, skillM:1.5}, // ★ 유일 장비 (드랍으로만)
  immortal: {name:'불멸',    color:'#FF2244',w:0.0, mult:5.0, skillM:1.8}, // ★ 불멸 장비 (제련으로만)
};

const ATTR_N={fire:'🔥화염',ice:'❄냉기',lightning:'⚡번개',dark:'🌑어둠',holy:'✨신성',poison:'☠독'};
const ATTR_C={fire:'#ff6030',ice:'#60c8ff',lightning:'#ffe040',dark:'#a060ff',holy:'#fff080',poison:'#80ff40'};

const FURN_CAT_KR={deco:'장식',inv_slot:'인벤 확장',wh_slot:'창고 확장',passive:'패시브',crafter:'제작대',trophy:'트로피'};

const MAT_LABEL={wood:'🪵 목재',steel:'⚙️ 강철',magicCrystal:'💎 마법 결정',abyssShard:'🩸 심연의 파편',blueprint:'📜 도면'};

// window 노출
window.GRADES=GRADES;
window.ATTR_N=ATTR_N;
window.ATTR_C=ATTR_C;
window.FURN_CAT_KR=FURN_CAT_KR;
window.MAT_LABEL=MAT_LABEL;

console.log('[labels.js] loaded —',
  `GRADES:${Object.keys(GRADES).length}`,
  `ATTR_N:${Object.keys(ATTR_N).length}`,
  `MATS:${Object.keys(MAT_LABEL).length}`,
);
