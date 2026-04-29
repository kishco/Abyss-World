/* ABYSS WORLD — 거점 시스템 데이터 (stronghold.js)
 * v3.1.1 — 단일 파일에서 분리.
 *
 * 포함 항목:
 *   STRONGHOLD_TIERS    — 거점 단계 (4단계)
 *   STRONGHOLD_AMBIANCE — 단계별 분위기 텍스트
 *   FURNITURE_PASSIVES  — 가구 패시브 효과 메타데이터
 *
 * 거점 단계 추가/패시브 효과 조정 시 이 파일만 수정.
 * 주의: FURNITURE_PASSIVES의 trigger/proc/stats 키는 게임 코드(calcStats 등)와 약속된 값.
 *      신규 trigger/proc 타입 추가 시에는 index.html의 처리 로직도 함께 추가 필요.
 */

// 거점 그리드 단계 — gridSize, 확장 비용, 활성 패시브 슬롯 수
const STRONGHOLD_TIERS=[
  {tier:1, gridSize:6,  cost:0,            passiveSlots:2, name:'폐허'},
  {tier:2, gridSize:8,  cost:500000000,    passiveSlots:3, name:'정돈된 방'},
  {tier:3, gridSize:10, cost:2000000000,   passiveSlots:4, name:'영주의 홀'},
  {tier:4, gridSize:12, cost:8000000000,   passiveSlots:4, name:'심연의 성'},
];

// 단계별 분위기 텍스트 (거점 진입 시 표시)
const STRONGHOLD_AMBIANCE=[
  '낡은 돌벽 사이로 차가운 바람이 스며든다.',
  '벽돌이 단단히 다져졌고, 작은 가구들이 자리를 잡았다.',
  '이제 이곳은 작은 영주의 홀이라 부를 만하다.',
  '심연의 한가운데, 그대만의 성이 우뚝 섰다.',
];

// ★ 가구 패시브 효과 정의
// trigger: 'passive'(상시), 'on_battle_start', 'on_first_hit', 'on_death', 'on_forge', 'on_boss_kill'
// stats: 합산형 보너스 (atkPct, defPct, hp, spd 등)
// proc: 트리거형 효과 (확률 / 효과)
const FURNITURE_PASSIVES={
  forge_will:      {n:'강화 의지',     trigger:'on_forge',       proc:{type:'refund',rate:0.05}, desc:'강화 시도 시 5% 확률로 비용 환급'},
  scholar_wisdom:  {n:'현자의 지혜',   trigger:'passive',        stats:{expBonus:8},             desc:'EXP 획득 +8%'},
  gold_touch:      {n:'황금의 손길',   trigger:'passive',        stats:{goldBonus:10},           desc:'던전 골드 획득 +10%'},
  first_dodge:     {n:'그림자 회피',   trigger:'on_first_hit',   proc:{type:'dodge_once'},       desc:'전투 첫 피격 시 1회 회피'},
  revive_chance:   {n:'시간의 잔영',   trigger:'on_death',       proc:{type:'revive',rate:0.05}, desc:'사망 시 5% 확률로 HP 1로 부활'},
  ambition_throne: {n:'야망',          trigger:'passive',        stats:{atkPct:20,defPct:-10},   desc:'ATK +20% / DEF -10%'},
  guardian_armor:  {n:'수호자의 결의', trigger:'passive',        stats:{defPct:25,spdPct:-15},   desc:'DEF +25% / SPD -15%'},
  soul_harvest:    {n:'영혼 수확',     trigger:'on_boss_kill',   proc:{type:'scroll_drop',rate:0.10}, desc:'보스 처치 시 10% 확률 인챈트 스크롤 추가 드랍'},
  war_banner:      {n:'전쟁의 깃발',   trigger:'on_battle_start',proc:{type:'spd_buff',value:50,turns:3},desc:'전투 시작 첫 3턴 SPD +50%'},
  blessing_altar:  {n:'축복의 제단',   trigger:'on_battle_start',proc:{type:'invuln',turns:1},   desc:'전투 시작 1턴 무적'},
};

window.STRONGHOLD_TIERS=STRONGHOLD_TIERS;
window.STRONGHOLD_AMBIANCE=STRONGHOLD_AMBIANCE;
window.FURNITURE_PASSIVES=FURNITURE_PASSIVES;

console.log('[stronghold.js] loaded —',
  `TIERS:${STRONGHOLD_TIERS.length}`,
  `PASSIVES:${Object.keys(FURNITURE_PASSIVES).length}`,
);
