/* ABYSS WORLD — 가구 마스터 테이블 (furniture.js)
 * v3.1.1 — 단일 파일에서 분리.
 *
 * 가구 추가 시 이 파일만 push 하면 게임에 반영됨.
 *
 * 필드 의미:
 *   n          — 표시명
 *   emoji      — 그리드 표시 이모지
 *   cat        — deco / inv_slot / wh_slot / passive / crafter / trophy
 *   size       — [w,h] 그리드 점유 면적
 *   grade      — normal/uncommon/rare/epic/legendary/set (labels.js GRADES 참조)
 *   from       — 획득 경로 ['shop','drop','craft','event','synth','boss_drop','immortal_tower']
 *   tradeable  — 거래 가능 여부
 *   cost       — 골드 구매가 (shop 가구만)
 *   baseSell   — 기본 판매가 (드랍 가구만)
 *   passive    — 패시브 효과 키 (FURNITURE_PASSIVES — stronghold.js 참조)
 *   slots      — 슬롯 확장량 (inv_slot/wh_slot 가구만)
 *   targetType — 'inv' or 'wh' (slot 가구만)
 *   stack      — 동일 가구 누적 배치 한도 (default 1)
 *   crafterType — 'gear'/'furniture'/'enchant' (crafter 가구만)
 *   _eventOnly — 이벤트 ID (이벤트 한정 가구만, 합성 보호용)
 */

const FURNITURE={
  // ── 시각 장식 (12종) ──
  basic_chair:    {n:'낡은 의자',     emoji:'🪑',cat:'deco',size:[1,1],grade:'normal',  from:['shop','drop'],tradeable:true,cost:50000},
  ornate_chair:   {n:'장식 의자',     emoji:'🪑',cat:'deco',size:[1,1],grade:'rare',    from:['drop','synth','craft'],tradeable:true,baseSell:300000},
  basic_table:    {n:'낡은 탁자',     emoji:'🪟',cat:'deco',size:[2,1],grade:'normal',  from:['shop','drop'],tradeable:true,cost:80000},
  ornate_table:   {n:'장식 탁자',     emoji:'🍽️',cat:'deco',size:[2,1],grade:'rare',    from:['drop','synth','craft'],tradeable:true,baseSell:400000},
  carpet_red:     {n:'붉은 카펫',     emoji:'🟥',cat:'deco',size:[2,2],grade:'uncommon',from:['shop','drop','craft'],tradeable:true,cost:200000},
  torch_stand:    {n:'횃불 받침',     emoji:'🕯️',cat:'deco',size:[1,1],grade:'normal',  from:['shop','drop'],tradeable:true,cost:30000},
  bookshelf:      {n:'책장',          emoji:'📚',cat:'deco',size:[1,2],grade:'uncommon',from:['shop','drop','craft'],tradeable:true,cost:150000},
  painting:       {n:'어둠의 초상화', emoji:'🖼️',cat:'deco',size:[2,1],grade:'rare',    from:['drop','synth','craft'],tradeable:true,baseSell:350000},
  banner_dark:    {n:'어둠의 휘장',   emoji:'🏴',cat:'deco',size:[1,2],grade:'uncommon',from:['drop','craft'],       tradeable:true,baseSell:250000},
  candelabra:     {n:'촛대',          emoji:'🕯️',cat:'deco',size:[1,1],grade:'uncommon',from:['shop','drop','craft'],tradeable:true,cost:100000},
  plant_dark:     {n:'심연의 식물',   emoji:'🪴',cat:'deco',size:[1,1],grade:'uncommon',from:['drop','craft'],       tradeable:true,baseSell:180000},
  rug_skull:      {n:'해골 양탄자',   emoji:'💀',cat:'deco',size:[2,2],grade:'rare',    from:['drop','synth','craft'],tradeable:true,baseSell:500000},

  // ── 인벤 슬롯 확장 (4종, 거래 불가) ──
  storage_small:  {n:'작은 보관함',   emoji:'📦',cat:'inv_slot',size:[1,2],grade:'normal',   from:['shop'],     tradeable:false,cost:5000000,    targetType:'inv',slots:20, stack:5},
  storage_med:    {n:'큰 보관함',     emoji:'📦',cat:'inv_slot',size:[2,2],grade:'rare',     from:['shop','craft'],tradeable:false,cost:30000000,  targetType:'inv',slots:50, stack:5},
  storage_large:  {n:'차원 보관함',   emoji:'🗳️',cat:'inv_slot',size:[2,2],grade:'epic',     from:['craft'],    tradeable:false,cost:200000000, targetType:'inv',slots:100,stack:3},
  storage_abyss:  {n:'심연의 금고',   emoji:'🗄️',cat:'inv_slot',size:[2,3],grade:'legendary',from:['craft'],    tradeable:false,cost:1500000000,targetType:'inv',slots:250,stack:1},

  // ── 창고 슬롯 확장 (3종, 거래 불가) ──
  vault_small:    {n:'작은 창고',     emoji:'🏦',cat:'wh_slot',size:[2,2],grade:'normal',    from:['shop'],     tradeable:false,cost:8000000,   targetType:'wh',slots:50, stack:5},
  vault_huge:     {n:'거대 창고',     emoji:'🏛️',cat:'wh_slot',size:[2,3],grade:'epic',      from:['craft'],    tradeable:false,cost:300000000, targetType:'wh',slots:150,stack:5},
  vault_infinite: {n:'무한 보관소',   emoji:'🌌',cat:'wh_slot',size:[3,3],grade:'legendary', from:['craft'],    tradeable:false,cost:2500000000,targetType:'wh',slots:400,stack:2},

  // ── 패시브 가구 (legendary 5종, 거래 불가) ──
  forge_brazier:  {n:'단조의 화로',   emoji:'🔥',cat:'passive',size:[1,1],grade:'legendary',from:['boss_drop','craft'],tradeable:false,passive:'forge_will'},
  library:        {n:'지혜의 도서관', emoji:'📖',cat:'passive',size:[2,2],grade:'legendary',from:['event','craft'],     tradeable:false,passive:'scholar_wisdom'},
  treasure_pile:  {n:'황금의 손길',   emoji:'💰',cat:'passive',size:[1,1],grade:'legendary',from:['drop','craft'],     tradeable:false,passive:'gold_touch'},
  shadow_mirror:  {n:'그림자 거울',   emoji:'🪞',cat:'passive',size:[1,1],grade:'legendary',from:['immortal_tower'],   tradeable:false,passive:'first_dodge'},
  hourglass:      {n:'시간의 모래시계',emoji:'⌛',cat:'passive',size:[1,1],grade:'legendary',from:['drop','craft'],     tradeable:false,passive:'revive_chance'},

  // ── 패시브 가구 (set 3종, 거래 불가) ──
  ambition_throne:{n:'야망의 옥좌',   emoji:'👑',cat:'passive',size:[2,2],grade:'set',      from:['craft','event'],    tradeable:false,passive:'ambition_throne'},
  guardian_armor: {n:'수호자의 갑옷', emoji:'🛡️',cat:'passive',size:[1,2],grade:'set',      from:['craft','event'],    tradeable:false,passive:'guardian_armor'},
  soul_altar:     {n:'영혼석 제단',   emoji:'🔮',cat:'passive',size:[2,2],grade:'set',      from:['craft','boss_drop'],tradeable:false,passive:'soul_harvest'},

  // ── 합성대 / 제작대 (3종, 거래 불가, 가구 상점 판매) ──
  forge_synth:    {n:'장비 합성대',   emoji:'⚒️',cat:'crafter',size:[2,2],grade:'epic',     from:['shop','craft'], tradeable:false,cost:50000000, crafterType:'gear'},
  furniture_workshop:{n:'가구 제작대',emoji:'🪚',cat:'crafter',size:[2,2],grade:'epic',     from:['shop','craft'], tradeable:false,cost:50000000, crafterType:'furniture'},
  enchant_synth:  {n:'인챈트 합성대', emoji:'📜',cat:'crafter',size:[1,2],grade:'legendary',from:['shop','craft'], tradeable:false,cost:100000000,crafterType:'enchant'},

  // ── ★ v3.0 — 어린이날 위령제 한정 가구 (이벤트 종료 후 거래 불가 유지) ──
  memorial_lantern:{n:'잃어버린 영혼의 등불',emoji:'🏮',cat:'passive',size:[1,1],grade:'set',from:['event'],tradeable:false,passive:'war_banner',_eventOnly:'memorial2026'},
  memorial_throne: {n:'어린 왕의 옥좌',     emoji:'👶',cat:'passive',size:[2,2],grade:'set',from:['event'],tradeable:false,passive:'blessing_altar',_eventOnly:'memorial2026'},
  memorial_echo:   {n:'심연의 잔영',       emoji:'👻',cat:'passive',size:[1,1],grade:'legendary',from:['event'],tradeable:false,passive:'first_dodge',_eventOnly:'memorial2026'},
  memorial_bell:   {n:'추모의 작은 종',    emoji:'🔔',cat:'deco',size:[1,1],grade:'rare',from:['event'],tradeable:false,_eventOnly:'memorial2026'},
  memorial_wreath: {n:'흰 꽃 화환',        emoji:'💮',cat:'deco',size:[1,1],grade:'rare',from:['event'],tradeable:false,_eventOnly:'memorial2026'},
  memorial_stone:  {n:'추모비',            emoji:'🪦',cat:'deco',size:[1,2],grade:'epic',from:['event'],tradeable:false,_eventOnly:'memorial2026'},
};

window.FURNITURE=FURNITURE;

console.log('[furniture.js] loaded — FURNITURE:'+Object.keys(FURNITURE).length);
