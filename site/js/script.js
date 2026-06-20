const INSTA_URL = "https://instagram.com/HION_JUHEE"; // 하이온 인스타 프로필

const QUESTIONS = [
  {
    title: "다이어트가 무너질 때, 보통 어떻게 되나요?",
    sub: "사람마다 무너지는 방식이 달라요.",
    key: "temp",
    opts: [
      { t: "스트레스받으면 못 참고 매운 거·단 거로 확 터져요", emoji: "🔥", v: "seek" },
      { t: "'또 망했어' 자책하면서 머릿속이 하얘져요", emoji: "💭", v: "avoid" },
      { t: "남들 성공 후기 보면서 자꾸 비교하게 돼요", emoji: "👀", v: "reward" },
      { t: "내가 정한 규칙 못 지키면 강박이 와요", emoji: "🛡️", v: "persist" },
    ],
  },
  {
    title: "식욕을 가장 못 참게 되는 때는?",
    sub: "주기에 따라 컨디션이 달라지거든요.",
    key: "phase",
    opts: [
      { t: "생리 전 일주일, 식욕이 폭발해요", emoji: "🌧️", v: "luteal" },
      { t: "생리 기간엔 무기력하고 다 귀찮아요", emoji: "🌫️", v: "menstrual" },
      { t: "딱히 정해진 패턴 없이 들쑥날쑥해요", emoji: "🌤️", v: "unknown" },
      { t: "주기랑 연결해서 생각해본 적 없어요", emoji: "❓", v: "none" },
    ],
  },
  {
    title: "내 생리주기는 규칙적인 편인가요?",
    sub: "규칙적인지 불규칙한지에 따라 관리법이 완전히 달라져요.",
    key: "cycle",
    opts: [
      { t: "네, 거의 매달 일정하게 와요", emoji: "✅", v: "regular" },
      { t: "좀 들쑥날쑥, 불규칙해요", emoji: "〰️", v: "irregular" },
      { t: "몇 달씩 건너뛸 때가 많아요", emoji: "⏸️", v: "skip" },
      { t: "잘 모르겠어요 / 체크 안 해봤어요", emoji: "🤔", v: "unknown" },
    ],
  },
  {
    title: "혹시 이런 신호도 같이 있나요?",
    sub: "다낭성은 대사 신호가 함께 나타나요. (없으면 마지막 선택)",
    key: "sign",
    opts: [
      { t: "턱·등 여드름, 털이 진해졌어요", emoji: "💢", v: "andro" },
      { t: "특히 뱃살이 잘 안 빠져요", emoji: "🍩", v: "belly" },
      { t: "단 거·탄수 폭발하듯 당겨요", emoji: "🍰", v: "insulin" },
      { t: "특별히 해당 없어요", emoji: "🍃", v: "none" },
    ],
  },
  {
    title: "지금까지 살 빼려고 주로 뭘 해봤어요?",
    sub: "",
    key: "method",
    opts: [
      { t: "식사량 극단적으로 줄이기 / 초절식", emoji: "🥗", v: "restrict" },
      { t: "유튜브 홈트 따라하기", emoji: "📱", v: "home" },
      { t: "PT·다이어트 캠프 등 전문가 관리", emoji: "🏋️", v: "pt" },
      { t: "보조제·약물", emoji: "💊", v: "supp" },
    ],
  },
  {
    title: "결국 포기하게 만든 가장 큰 이유는?",
    sub: "",
    key: "giveup",
    opts: [
      { t: "적게 먹어도 체중이 안 빠질 때", emoji: "⚖️", v: "plateau" },
      { t: "참다가 폭식으로 터졌을 때", emoji: "🍔", v: "binge" },
      { t: "머리 멍하고 컨디션 바닥날 때", emoji: "😶‍🌫️", v: "crash" },
      { t: "무리하게 뺀 뒤 생리불순 등 건강이 무너져서", emoji: "💔", v: "health" },
    ],
  },
  {
    title: "혹시 이런 호르몬 고민 있나요?",
    sub: "있다면 진단에서 더 정밀하게 봐드려요.",
    key: "horm",
    opts: [
      { t: "다낭성 (PCOS/PMOS)", emoji: "🎯", v: "pcos" },
      { t: "생리불순 · 무월경 경험", emoji: "🌙", v: "irregular" },
      { t: "요요가 반복돼요", emoji: "🔄", v: "yoyo" },
      { t: "특별한 진단은 없어요", emoji: "🍃", v: "none" },
    ],
  },
];

const TEMP_RESULT = {
  seek: {
    emoji: "🔥",
    name: "화끈형",
    tag: "스트레스받으면 못 참고 확 터지는, 에너지 넘치는 타입",
    why: "이 타입은 <strong>황체기(생리 전)</strong>에 스트레스 반응이 특히 커져요. 식욕이 확 올라오는 시기에 평소 방식 그대로 참으려 하니 폭식으로 이어지는 거예요. 의지가 약한 게 아니라, 자극에 빠르게 반응하는 기질이 주기와 겹친 거예요.",
    how: "억지로 참는 대신, <strong>전략을 미리 바꿔요.</strong> '금지' 말고 '대체'로 식단을 짜고, 황체기엔 자극을 미리 분산시키는 루틴을 깔면 폭식이 확 줄어요.",
    phase: "황체기",
  },
  avoid: {
    emoji: "💭",
    name: "백지형",
    tag: "한 번 삐끗하면 머릿속이 하얘지는, 조심스러운 타입",
    why: "이 타입은 작은 이탈 하나를 <strong>'완전한 실패'</strong>로 받아들여요. 한 번 삐끗하면 머릿속이 하얘지면서 자책하다 그대로 놓아버리는 패턴이에요. 멈추는 게 문제가 아니라, 다시 시작을 못 하는 게 진짜 문제예요.",
    how: "<strong>다시 시작하는 법</strong>부터 만들어요. 목표를 잘게 쪼개고, 삐끗해도 빠르게 회복하는 루틴을 깔아요. 멘탈 관리가 식단보다 먼저예요.",
    phase: "생리기",
  },
  reward: {
    emoji: "👀",
    name: "눈치형",
    tag: "남들과 비교하다 내 페이스를 잃는 타입",
    why: "비교가 동력이 되기도 하지만, <strong>다른 사람 속도</strong>에 맞추다 내 컨디션을 무시하게 돼요. 그러다 무리하게 되고, 컨디션이 무너져요.",
    how: "비교 대신 <strong>내 주기 기준</strong>으로 다시 잡아요. 같은 한 달이어도 내 4구간에 맞춰 강약을 조절하면 훨씬 오래 지속해요.",
    phase: "배란기",
  },
  persist: {
    emoji: "🛡️",
    name: "철벽형",
    tag: "규칙을 끝까지 지키는, 끈기 강한 타입",
    why: "끈기는 최고의 강점이에요. 근데 <strong>컨디션이 안 좋은 시기에도 같은 강도</strong>로 밀어붙이면 건강이 먼저 무너져요. 생리기에도 똑같이 밀어붙이다 탈이 나요.",
    how: "규칙은 살리되 <strong>구간별 강약</strong>을 더해요. 쉬어야 할 구간을 '계획에 미리 포함'시키면, 그 끈기가 오래가는 무기가 돼요.",
    phase: "생리기",
  },
};

const PHASE_LABEL = { luteal: "황체기", menstrual: "생리기", unknown: "변동 구간", none: "미파악" };

// 90일 예측 데이터 (타입별 순서 차이)
const PREDICT = {
  seek: [
    ["🌙", "#E8917F", "폭식 충동이 눈에 띄게 줄어요"],
    ["🍽️", "#8A9A7B", "참지 않아도 식단이 유지돼요"],
    ["⚖️", "#C9A7A0", "요요 없이 체중이 안정돼요"],
    ["✨", "#8A9A7B", "컨디션·피부가 같이 좋아져요"],
  ],
  avoid: [
    ["💪", "#8A9A7B", "삐끗해도 바로 회복해요"],
    ["🧠", "#E8917F", "자책 대신 다시 출발하게 돼요"],
    ["⚖️", "#C9A7A0", "꾸준함이 붙어 체중이 빠져요"],
    ["😌", "#8A9A7B", "다이어트 스트레스가 줄어요"],
  ],
  reward: [
    ["🎯", "#8A9A7B", "내 페이스를 찾게 돼요"],
    ["⚖️", "#C9A7A0", "무리 없이 체중이 빠져요"],
    ["🔋", "#E8917F", "에너지가 안정적으로 유지돼요"],
    ["✨", "#8A9A7B", "비교 대신 내 변화가 보여요"],
  ],
  persist: [
    ["🛡️", "#8A9A7B", "건강을 지키며 빠져요"],
    ["📉", "#C9A7A0", "주기 맞춰 체중이 안정돼요"],
    ["🔋", "#E8917F", "에너지가 덜 무너져요"],
    ["🌿", "#8A9A7B", "끈기가 오래가는 무기가 돼요"],
  ],
};

const FORMSPREE_URL = "https://formspree.io/f/mnjyyrgk"; // HION 신청 알림

let qi = 0;
const answers = {};

/* ── 진행도 바 ── */
function setProg() {
  let p = 0;
  const cur = document.querySelector(".screen.on").id;
  if (cur === "s-hero") p = 5;
  else if (cur === "s-q") p = 8 + (qi / QUESTIONS.length) * 37;
  else if (cur === "s-analyze") p = 48;
  else if (cur === "s-teaser") p = 58;
  else if (cur === "s-predict") p = 66;
  else if (cur === "s-gate") p = 74;
  else if (cur === "s-result") p = 82;
  else if (cur === "s-offer") p = 88;
  else if (cur === "s-form2") p = 94;
  else if (cur === "s-done") p = 100;
  document.getElementById("prog").style.width = p + "%";
}

/* ── 화면 전환 ── */
function go(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("on"));
  document.getElementById(id).classList.add("on");
  window.scrollTo(0, 0);
  if (id === "s-q") renderQ();
  if (id === "s-analyze") runAnalyze();
  if (id === "s-teaser") renderTeaser();
  if (id === "s-predict") renderPredict();
  if (id === "s-result") renderResult();
  setProg();
}

/* ── 히어로 대시보드 막대 애니메이션 ── */
setTimeout(() => {
  document.getElementById("pd1").style.width = "50%";
  document.getElementById("pd2").style.width = "50%";
}, 400);

/* ── 질문 렌더 ── */
function renderQ() {
  const q = QUESTIONS[qi];
  document.getElementById("qcount").textContent = `진단 ${qi + 1} / ${QUESTIONS.length}`;
  document.getElementById("qtitle").textContent = q.title;
  const sub = document.getElementById("qsub");
  sub.textContent = q.sub;
  sub.style.display = q.sub ? "block" : "none";
  const wrap = document.getElementById("qopts");
  wrap.innerHTML = "";
  q.opts.forEach((o) => {
    const b = document.createElement("button");
    b.className = "opt";
    b.type = "button";
    b.innerHTML = `<span class="opt__check"></span><span class="opt__emoji">${o.emoji}</span><span>${o.t}</span>`;
    b.onclick = () => {
      wrap.querySelectorAll(".opt").forEach((x) => x.classList.remove("sel"));
      b.classList.add("sel");
      answers[q.key] = o.v;
      const nx = document.getElementById("qnext");
      nx.disabled = false;
      nx.style.opacity = "1";
    };
    wrap.appendChild(b);
  });
  const nx = document.getElementById("qnext");
  if (answers[q.key]) {
    nx.disabled = false;
    nx.style.opacity = "1";
    [...wrap.children].forEach((c, i) => {
      if (q.opts[i].v === answers[q.key]) c.classList.add("sel");
    });
  } else {
    nx.disabled = true;
    nx.style.opacity = ".45";
  }
  setProg();
}

function nextQ() {
  if (qi < QUESTIONS.length - 1) {
    qi++;
    renderQ();
    window.scrollTo(0, 0);
  } else {
    go("s-analyze");
  }
}

/* ── 분석 애니메이션 ── */
function runAnalyze() {
  const steps = [
    "· 다이어트 성향 분류 중…",
    "· 주기별 컨디션 매칭 중…",
    "· 1,000명 데이터와 대조 중…",
    "· 맞춤 성공법 도출 중…",
  ];
  let p = 0, si = 0;
  const fg = document.getElementById("spfg");
  const pct = document.getElementById("sppct");
  const st = document.getElementById("astep");
  const DASH = 339, VIS = 254;
  const iv = setInterval(() => {
    p += Math.random() * 9 + 4;
    if (p > 100) p = 100;
    fg.style.strokeDashoffset = DASH - (VIS * p) / 100;
    pct.textContent = Math.floor(p);
    const ns = Math.min(steps.length - 1, Math.floor(p / 26));
    if (ns !== si) {
      si = ns;
      st.style.opacity = 0;
      setTimeout(() => {
        st.textContent = steps[si];
        st.style.opacity = 1;
      }, 150);
    }
    if (p >= 100) {
      clearInterval(iv);
      setTimeout(() => go("s-teaser"), 550);
    }
  }, 200);
}

/* ── 타입 맛보기 렌더 ── */
function renderTeaser() {
  const t = answers.temp || "seek";
  const r = TEMP_RESULT[t];
  document.getElementById("t-emoji").textContent = r.emoji;
  document.getElementById("t-type").innerHTML = `<span class="em">${r.name}</span>`;
  document.getElementById("t-tag").textContent = r.tag;
  setProg();
}

/* ── 90일 예측 렌더 ── */
function renderPredict() {
  const t = answers.temp || "seek";
  const list = PREDICT[t] || PREDICT.seek;
  const wrap = document.getElementById("predict-list");
  wrap.innerHTML = "";
  list.forEach((it, i) => {
    const d = document.createElement("div");
    d.className = "predict__item";
    d.style.animationDelay = i * 0.12 + "s";
    d.innerHTML = `<span class="pic" style="background:${it[1]}22;color:${it[1]}">${it[0]}</span><span class="ptxt">${it[2]}</span>`;
    wrap.appendChild(d);
  });
  setProg();
}

/* ── Formspree 전송 ── */
async function sendToFormspree(rec) {
  try {
    await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(rec),
    });
  } catch (e) {
    /* 네트워크 문제여도 화면 진행은 막지 않음 */
  }
}

/* ── 연락처 게이트 → 결과 열기 ── */
async function unlockResult() {
  const name = val("gate-name");
  const contact = val("gate-contact");

  if (!name || !contact) {
    alert("이름과 연락처를 남겨주세요 🙏");
    return;
  }

  const rec = {
    유형: "결과열람(리드)",
    성함: name,
    연락처: contact,
    기질타입: answers.temp || "",
    주기패턴: answers.phase || "",
    생리규칙성: answers.cycle || "",
    대사신호: answers.sign || "",
    호르몬고민: answers.horm || "",
    신청시각: new Date().toLocaleString("ko-KR"),
  };

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbyp-3riPW2oNMIkCZyCgiWkxNAO5GxxhhvMhVemIP-eZGG7iqvuV0V-qca0fCFZ5-Ul/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body:
          "name=" + encodeURIComponent(name) +
          "&phone=" + encodeURIComponent(contact),
      }
    );
  } catch (err) {
    console.error("Google Sheet 저장 실패", err);
  }

  sendToFormspree(rec);
  go("s-result");
}

/* ── 결과 렌더 ── */
function renderResult() {
  const t = answers.temp || "seek";
  const r = TEMP_RESULT[t];
  const phase =
    answers.phase && PHASE_LABEL[answers.phase]
      ? PHASE_LABEL[answers.phase]
      : r.phase;
  document.getElementById("remoji").textContent = r.emoji;
  document.getElementById("rtype").innerHTML = `<span class="em">${r.name}</span>`;
  document.getElementById("rtag").textContent = r.tag;
  document.getElementById("rtemp").textContent = r.name;
  document.getElementById("rphase").textContent = phase;

  let why = r.why;
  // 다낭성(PMOS) 신호 종합
  const irregular = answers.cycle === "irregular" || answers.cycle === "skip";
  const metabolic =
    answers.sign === "andro" ||
    answers.sign === "belly" ||
    answers.sign === "insulin";
  if (irregular && metabolic) {
    why +=
      " <strong>그리고 중요한 신호가 보여요.</strong> 주기가 불규칙한 데다 대사 신호까지 겹쳐요. 다낭성에서 흔하게 나타나는 패턴이에요. 일반 다이어트가 안 통하는 게 당연해요 — 난소가 아니라 대사부터 잡아야 빠지거든요.";
  } else if (irregular) {
    why +=
      " 주기가 불규칙한 건 다낭성의 1순위 신호예요. 배란이 들쭉날쭉하면 식욕·대사도 같이 흔들려서, 주기를 무시한 다이어트는 오히려 역효과가 나요.";
  } else if (metabolic) {
    why +=
      " 대사 신호(뱃살·탄수 폭발·여드름 등)가 보여요. 이런 경우 칼로리만 줄이는 방식보다 인슐린·대사를 먼저 다루는 게 훨씬 잘 빠져요.";
  }
  if (answers.horm === "pcos")
    why += " 이미 다낭성을 알고 계시다면, 더 정밀하게 단계를 잡아드릴 수 있어요.";
  if (answers.horm === "irregular")
    why += " 생리불순·무월경 경험이 있다면 회복이 먼저예요. 무리한 감량은 오히려 독이 돼요.";

  document.getElementById("rwhy").innerHTML = why;
  document.getElementById("rhow").innerHTML = r.how;
  setProg();
}

/* ── 신청 제출 ── */
async function submitBooking(type) {
  let name, contact, worry = "";
  if (type === "tci") {
    name = val("f-name");
    contact = val("f-contact");
    worry = val("f-worry");
  } else if (type === "app") {
    name = val("a-name");
    contact = val("a-contact");
  } else {
    name = val("g-name");
    contact = val("g-contact");
  }
  if (!name || !contact) {
    alert("이름과 연락처를 남겨주세요 🙏");
    return;
  }
  const rec = {
    type,
    name,
    contact,
    worry,
    result: answers.temp || "",
    phase: answers.phase || "",
    horm: answers.horm || "",
    at: new Date().toISOString(),
  };
  try {
    await window.storage.set("hion:booking:" + Date.now(), JSON.stringify(rec));
  } catch (e) {
    window.__hionBackup = window.__hionBackup || [];
    window.__hionBackup.push(rec);
  }
  const TYPE_LABEL = {
    tci: "TCI 진단 신청",
    app: "앱 수요조사",
    wait: "빵니스 대기 신청",
  };
  sendToFormspree({
    신청종류: TYPE_LABEL[type] || type,
    성함: name,
    연락처: contact,
    고민: worry,
    기질타입: answers.temp || "",
    호르몬고민: answers.horm || "",
    신청시각: new Date().toLocaleString("ko-KR"),
  });
  let n = 0;
  try {
    const list = await window.storage.list("hion:booking:");
    n = list && list.keys ? list.keys.length : 0;
  } catch (e) {
    n = (window.__hionBackup || []).length;
  }
  document.getElementById("done-insta").href = INSTA_URL;
  const T = {
    tci: ["TCI 진단 신청 접수 완료", "남겨주신 연락처로 하이온이 직접 연락드려서 검사 시간을 잡아드릴게요 🌙"],
    app: ["앱 수요조사 참여 완료", "소중한 의견 감사해요. 만들게 되면 가장 먼저 알려드릴게요 📱"],
    wait: ["빵니스 알림 신청 완료", "오픈하면 가장 먼저 알려드릴게요 🌱"],
  };
  document.getElementById("done-title").textContent = T[type][0];
  document.getElementById("done-msg").innerHTML = T[type][1];
  document.getElementById("done-num").textContent = `지금까지 ${n}분이 함께 신청했어요`;
  go("s-done");
}

/* ── 유틸 ── */
function val(id) {
  return document.getElementById(id).value.trim();
}

/* ── 관리자 현황 ── */
async function openAdmin() {
  let recs = [];
  try {
    const list = await window.storage.list("hion:booking:");
    if (list && list.keys) {
      for (const k of list.keys) {
        try {
          const r = await window.storage.get(k);
          if (r && r.value) recs.push(JSON.parse(r.value));
        } catch (e) {}
      }
    }
  } catch (e) {
    recs = window.__hionBackup || [];
  }
  const c = (t) => recs.filter((r) => r.type === t).length;
  let msg = `📊 HION 신청 현황\n\n· 결과까지 본 잠재고객: ${c("lead")}명\n· 빵니스 대기: ${c("wait")}건\n· 전체: ${recs.length}건\n\n(TCI 진단·앱 수요조사는 구글폼에서 별도 확인)\n\n`;
  recs
    .slice(-12)
    .reverse()
    .forEach((r) => {
      const d = new Date(r.at);
      const dd = `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
      const lab = { tci: "진단", app: "앱", wait: "대기", lead: "잠재" }[r.type] || r.type;
      msg += `[${lab}] ${r.name}/${r.contact} (${dd})\n`;
    });
  if (recs.length === 0) msg += "아직 예약이 없어요. 첫 신청을 기다려요!";
  alert(msg);
}

/* ── 초기화 ── */
setProg();
