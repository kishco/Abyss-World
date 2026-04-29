/* ABYSS WORLD — 합성 테이블 (synth-tables.js)
 * v3.1.1 — 단일 파일에서 분리.
 *
 * 포함 항목:
 *   ENCH_SYNTH_COSTS — 인챈트 tier별 합성 비용
 *   FURN_SYNTH_DATA  — 가구 등급 합성 (개수/비용/재료/결과 등급)
 *   GEAR_SYNTH_DATA  — 장비 등급 합성 (개수/비용/결과 등급)
 *
 * 합성 비용 / 재료 조정 시 이 파일만 수정.
 */

// 인챈트 합성: 동일 tier 3개 + 골드 → 다음 tier 1개
const ENCH_SYNTH_COSTS={1:2000000,2:10000000,3:50000000,4:200000000,5:800000000};

// 가구 합성: 동일 등급 N개 + 골드 + 재료 → 상위 등급 1개
const FURN_SYNTH_DATA={
  normal:    {count:5, cost:3000000,    nextGrade:'uncommon', mats:{wood:5}},
  uncommon:  {count:5, cost:15000000,   nextGrade:'rare',     mats:{wood:10,steel:3}},
  rare:      {count:5, cost:80000000,   nextGrade:'epic',     mats:{steel:10,magicCrystal:2}},
  epic:      {count:5, cost:400000000,  nextGrade:'legendary',mats:{steel:15,magicCrystal:8,blueprint:1}},
  legendary: {count:3, cost:2000000000, nextGrade:'set',      mats:{magicCrystal:20,abyssShard:5,blueprint:3}},
};

// ★ v3.0 — 장비 합성 (동일 등급 ×5 + 골드 → 다음 등급 1개)
const GEAR_SYNTH_DATA={
  normal:    {count:5, cost:5000000,    nextGrade:'uncommon'},
  uncommon:  {count:5, cost:20000000,   nextGrade:'rare'},
  rare:      {count:5, cost:100000000,  nextGrade:'epic'},
  epic:      {count:5, cost:500000000,  nextGrade:'legendary'},
  legendary: {count:5, cost:3000000000, nextGrade:'set'},  // 유일 합성 30억G
};

window.ENCH_SYNTH_COSTS=ENCH_SYNTH_COSTS;
window.FURN_SYNTH_DATA=FURN_SYNTH_DATA;
window.GEAR_SYNTH_DATA=GEAR_SYNTH_DATA;

console.log('[synth-tables.js] loaded —',
  `ENCH:${Object.keys(ENCH_SYNTH_COSTS).length}`,
  `FURN:${Object.keys(FURN_SYNTH_DATA).length}`,
  `GEAR:${Object.keys(GEAR_SYNTH_DATA).length}`,
);
