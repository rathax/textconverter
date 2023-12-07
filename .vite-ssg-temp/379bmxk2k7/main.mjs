import { ViteSSG } from "vite-ssg";
import { openBlock, createElementBlock, createElementVNode, defineComponent, ref, mergeProps, unref, useSSRContext, resolveComponent, withCtx, createTextVNode, computed, nextTick } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useI18n, createI18n } from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
const index = "";
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 115.77 122.88" },
  viewBox: "0 0 117 123"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M89.62 13.96v7.73h12.2v.02c3.85.01 7.34 1.57 9.86 4.1 2.5 2.51 4.06 5.98 4.07 9.82h.02v73.3h-.02c-.01 3.84-1.57 7.33-4.1 9.86-2.51 2.5-5.98 4.06-9.82 4.07v.02H40.1v-.02c-3.84-.01-7.34-1.57-9.86-4.1-2.5-2.51-4.06-5.98-4.07-9.82h-.02V92.51h-12.2v-.02c-3.84-.01-7.34-1.57-9.86-4.1-2.5-2.51-4.06-5.98-4.07-9.82H0V13.95h.02c.01-3.85 1.58-7.34 4.1-9.86C6.63 1.59 10.1.03 13.94.02V0H75.67v.02c3.85.01 7.34 1.57 9.86 4.1 2.5 2.51 4.06 5.98 4.07 9.82h.02v.02zm-10.58 7.73v-7.75h.02c0-.91-.39-1.75-1.01-2.37-.61-.61-1.46-1-2.37-1v.02H13.95v-.02c-.91 0-1.75.39-2.37 1.01-.61.61-1 1.46-1 2.37h.02v64.62h-.02c0 .91.39 1.75 1.01 2.37.61.61 1.46 1 2.37 1v-.02h12.2V35.64h.02c.01-3.85 1.58-7.34 4.1-9.86 2.51-2.5 5.98-4.06 9.82-4.07v-.02h.02zm26.14 87.23V35.63h.02c0-.91-.39-1.75-1.01-2.37-.61-.61-1.46-1-2.37-1v.02H40.09v-.02c-.91 0-1.75.39-2.37 1.01-.61.61-1 1.46-1 2.37h.02v73.3h-.02c0 .91.39 1.75 1.01 2.37.61.61 1.46 1 2.37 1v-.02H101.83v.02c.91 0 1.75-.39 2.37-1.01.61-.61 1-1.46 1-2.37h-.02v-.01z",
  style: { "fill-rule": "evenodd", "clip-rule": "evenodd" }
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._hoisted_3]);
}
const CopyIcon = { render };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FontRow",
  __ssrInlineRender: true,
  props: {
    text: String
  },
  setup(__props) {
    const props = __props;
    const bounce = ref(false);
    async function copyText() {
      var _a;
      bounce.value = false;
      await new Promise((resolve) => setTimeout(resolve, 1));
      navigator.clipboard.writeText(((_a = props.text) == null ? void 0 : _a.replace(new RegExp("<br>", "g"), "\n")) ?? "");
      bounce.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center my-7 text-2xl min-h-[26.256px]" }, _attrs))}><span>${__props.text}</span> `);
      if ((__props.text ?? "").length > 0) {
        _push(ssrRenderComponent(unref(CopyIcon), {
          class: ["ml-1 inline hover:cursor-pointer h-6 hover:h-7 transition-all", { "animate-gelatine": bounce.value }],
          onClick: copyText
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/FontRow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const a = {
  a: "𝒶",
  b: "𝒷",
  c: "𝒸",
  d: "𝒹",
  e: "ℯ",
  f: "𝒻",
  g: "ℊ",
  h: "𝒽",
  i: "𝒾",
  j: "𝒿",
  k: "𝓀",
  l: "𝓁",
  m: "𝓂",
  n: "𝓃",
  o: "ℴ",
  p: "𝓅",
  q: "𝓆",
  r: "𝓇",
  s: "𝓈",
  t: "𝓉",
  u: "𝓊",
  v: "𝓋",
  w: "𝓌",
  x: "𝓍",
  y: "𝓎",
  z: "𝓏",
  A: "𝒜",
  B: "ℬ",
  C: "𝒞",
  D: "𝒟",
  E: "ℰ",
  F: "ℱ",
  G: "𝒢",
  H: "ℋ",
  I: "ℐ",
  J: "𝒥",
  K: "𝒦",
  L: "ℒ",
  M: "ℳ",
  N: "𝒩",
  O: "𝒪",
  P: "𝒫",
  Q: "𝒬",
  R: "ℛ",
  S: "𝒮",
  T: "𝒯",
  U: "𝒰",
  V: "𝒱",
  W: "𝒲",
  X: "𝒳",
  Y: "𝒴",
  Z: "𝒵"
}, aa = {
  "0": "𝟘",
  "1": "𝟙",
  "2": "𝟚",
  "3": "𝟛",
  "4": "𝟜",
  "5": "𝟝",
  "6": "𝟞",
  "7": "𝟟",
  "8": "𝟠",
  "9": "𝟡",
  "a": "𝕒",
  "b": "𝕓",
  "c": "𝕔",
  "d": "𝕕",
  "e": "𝕖",
  "f": "𝕗",
  "g": "𝕘",
  "h": "𝕙",
  "i": "𝕚",
  "j": "𝕛",
  "k": "𝕜",
  "l": "𝕝",
  "m": "𝕞",
  "n": "𝕟",
  "o": "𝕠",
  "p": "𝕡",
  "q": "𝕢",
  "r": "𝕣",
  "s": "𝕤",
  "t": "𝕥",
  "u": "𝕦",
  "v": "𝕧",
  "w": "𝕨",
  "x": "𝕩",
  "y": "𝕪",
  "z": "𝕫",
  "A": "𝔸",
  "B": "𝔹",
  "C": "ℂ",
  "D": "𝔻",
  "E": "𝔼",
  "F": "𝔽",
  "G": "𝔾",
  "H": "ℍ",
  "I": "𝕀",
  "J": "𝕁",
  "K": "𝕂",
  "L": "𝕃",
  "M": "𝕄",
  "N": "ℕ",
  "O": "𝕆",
  "P": "ℙ",
  "Q": "ℚ",
  "R": "ℝ",
  "S": "𝕊",
  "T": "𝕋",
  "U": "𝕌",
  "V": "𝕍",
  "W": "𝕎",
  "X": "𝕏",
  "Y": "𝕐",
  "Z": "ℤ"
}, b = {
  a: "𝓪",
  b: "𝓫",
  c: "𝓬",
  d: "𝓭",
  e: "𝓮",
  f: "𝓯",
  g: "𝓰",
  h: "𝓱",
  i: "𝓲",
  j: "𝓳",
  k: "𝓴",
  l: "𝓵",
  m: "𝓶",
  n: "𝓷",
  o: "𝓸",
  p: "𝓹",
  q: "𝓺",
  r: "𝓻",
  s: "𝓼",
  t: "𝓽",
  u: "𝓾",
  v: "𝓿",
  w: "𝔀",
  x: "𝔁",
  y: "𝔂",
  z: "𝔃",
  A: "𝓐",
  B: "𝓑",
  C: "𝓒",
  D: "𝓓",
  E: "𝓔",
  F: "𝓕",
  G: "𝓖",
  H: "𝓗",
  I: "𝓘",
  J: "𝓙",
  K: "𝓚",
  L: "𝓛",
  M: "𝓜",
  N: "𝓝",
  O: "𝓞",
  P: "𝓟",
  Q: "𝓠",
  R: "𝓡",
  S: "𝓢",
  T: "𝓣",
  U: "𝓤",
  V: "𝓥",
  W: "𝓦",
  X: "𝓧",
  Y: "𝓨",
  Z: "𝓩",
  1: "𝟏",
  2: "𝟐",
  3: "𝟑",
  4: "𝟒",
  5: "𝟓",
  6: "𝟔",
  7: "𝟕",
  8: "𝟖",
  9: "𝟗",
  0: "𝟎",
  "!": "❗",
  "?": "❓"
}, c = {
  a: "𝔞",
  b: "𝔟",
  c: "𝔠",
  d: "𝔡",
  e: "𝔢",
  f: "𝔣",
  g: "𝔤",
  h: "𝔥",
  i: "𝔦",
  j: "𝔧",
  k: "𝔨",
  l: "𝔩",
  m: "𝔪",
  n: "𝔫",
  o: "𝔬",
  p: "𝔭",
  q: "𝔮",
  r: "𝔯",
  s: "𝔰",
  t: "𝔱",
  u: "𝔲",
  v: "𝔳",
  w: "𝔴",
  x: "𝔵",
  y: "𝔶",
  z: "𝔷",
  A: "𝔄",
  B: "𝔅",
  C: "ℭ",
  D: "𝔇",
  E: "𝔈",
  F: "𝔉",
  G: "𝔊",
  H: "ℌ",
  I: "ℑ",
  J: "𝔍",
  K: "𝔎",
  L: "𝔏",
  M: "𝔐",
  N: "𝔑",
  O: "𝔒",
  P: "𝔓",
  Q: "𝔔",
  R: "ℜ",
  S: "𝔖",
  T: "𝔗",
  U: "𝔘",
  V: "𝔙",
  W: "𝔚",
  X: "𝔛",
  Y: "𝔜",
  Z: "ℨ"
}, d = {
  a: "𝖆",
  b: "𝖇",
  c: "𝖈",
  d: "𝖉",
  e: "𝖊",
  f: "𝖋",
  g: "𝖌",
  h: "𝖍",
  i: "𝖎",
  j: "𝖏",
  k: "𝖐",
  l: "𝖑",
  m: "𝖒",
  n: "𝖓",
  o: "𝖔",
  p: "𝖕",
  q: "𝖖",
  r: "𝖗",
  s: "𝖘",
  t: "𝖙",
  u: "𝖚",
  v: "𝖛",
  w: "𝖜",
  x: "𝖝",
  y: "𝖞",
  z: "𝖟",
  A: "𝕬",
  B: "𝕭",
  C: "𝕮",
  D: "𝕯",
  E: "𝕰",
  F: "𝕱",
  G: "𝕲",
  H: "𝕳",
  I: "𝕴",
  J: "𝕵",
  K: "𝕶",
  L: "𝕷",
  M: "𝕸",
  N: "𝕹",
  O: "𝕺",
  P: "𝕻",
  Q: "𝕼",
  R: "𝕽",
  S: "𝕾",
  T: "𝕿",
  U: "𝖀",
  V: "𝖁",
  W: "𝖂",
  X: "𝖃",
  Y: "𝖄",
  Z: "𝖅",
  1: "❗",
  2: "𝟐",
  3: "𝟑",
  4: "𝟒",
  5: "𝟓",
  6: "𝟔",
  7: "𝟕",
  8: "𝟖",
  9: "𝟗",
  0: "𝟎",
  "?": "❓"
}, e = {
  a: "ⓐ",
  b: "ⓑ",
  c: "ⓒ",
  d: "ⓓ",
  e: "ⓔ",
  f: "ⓕ",
  g: "ⓖ",
  h: "ⓗ",
  i: "ⓘ",
  j: "ⓙ",
  k: "ⓚ",
  l: "ⓛ",
  m: "ⓜ",
  n: "ⓝ",
  o: "ⓞ",
  p: "ⓟ",
  q: "ⓠ",
  r: "ⓡ",
  s: "ⓢ",
  t: "ⓣ",
  u: "ⓤ",
  v: "ⓥ",
  w: "ⓦ",
  x: "ⓧ",
  y: "ⓨ",
  z: "ⓩ",
  A: "Ⓐ",
  B: "Ⓑ",
  C: "Ⓒ",
  D: "Ⓓ",
  E: "Ⓔ",
  F: "Ⓕ",
  G: "Ⓖ",
  H: "Ⓗ",
  I: "Ⓘ",
  J: "Ⓙ",
  K: "Ⓚ",
  L: "Ⓛ",
  M: "Ⓜ",
  N: "Ⓝ",
  O: "Ⓞ",
  P: "Ⓟ",
  Q: "Ⓠ",
  R: "Ⓡ",
  S: "Ⓢ",
  T: "Ⓣ",
  U: "Ⓤ",
  V: "Ⓥ",
  W: "Ⓦ",
  X: "Ⓧ",
  Y: "Ⓨ",
  Z: "Ⓩ",
  1: "①",
  2: "②",
  3: "③",
  4: "④",
  5: "⑤",
  6: "⑥",
  7: "⑦",
  8: "⑧",
  9: "⑨",
  0: "⓪"
}, f = {
  a: "🅐",
  b: "🅑",
  c: "🅒",
  d: "🅓",
  e: "🅔",
  f: "🅕",
  g: "🅖",
  h: "🅗",
  i: "🅘",
  j: "🅙",
  k: "🅚",
  l: "🅛",
  m: "🅜",
  n: "🅝",
  o: "🅞",
  p: "🅟",
  q: "🅠",
  r: "🅡",
  s: "🅢",
  t: "🅣",
  u: "🅤",
  v: "🅥",
  w: "🅦",
  x: "🅧",
  y: "🅨",
  z: "🅩",
  1: "➊",
  2: "➋",
  3: "➌",
  4: "➍",
  5: "➎",
  6: "➏",
  7: "➐",
  8: "➑",
  9: "➒",
  0: "⓿"
}, smallchars = {
  "0": "⁰",
  "1": "¹",
  "2": "²",
  "3": "³",
  "4": "⁴",
  "5": "⁵",
  "6": "⁶",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",
  "a": "ᵃ",
  "b": "ᵇ",
  "c": "ᶜ",
  "d": "ᵈ",
  "e": "ᵉ",
  "f": "ᶠ",
  "g": "ᵍ",
  "h": "ʰ",
  "i": "ⁱ",
  "j": "ʲ",
  "k": "ᵏ",
  "l": "ˡ",
  "m": "ᵐ",
  "n": "ⁿ",
  "o": "ᵒ",
  "p": "ᵖ",
  "q": "q",
  "r": "ʳ",
  "s": "ˢ",
  "t": "ᵗ",
  "u": "ᵘ",
  "v": "ᵛ",
  "w": "ʷ",
  "x": "ˣ",
  "y": "ʸ",
  "z": "ᶻ",
  "A": "ᴬ",
  "B": "ᴮ",
  "C": "ᶜ",
  "D": "ᴰ",
  "E": "ᴱ",
  "F": "ᶠ",
  "G": "ᴳ",
  "H": "ᴴ",
  "I": "ᴵ",
  "J": "ᴶ",
  "K": "ᴷ",
  "L": "ᴸ",
  "M": "ᴹ",
  "N": "ᴺ",
  "O": "ᴼ",
  "P": "ᴾ",
  "Q": "Q",
  "R": "ᴿ",
  "S": "ˢ",
  "T": "ᵀ",
  "U": "ᵁ",
  "V": "ⱽ",
  "W": "ᵂ",
  "X": "ˣ",
  "Y": "ʸ",
  "Z": "ᶻ",
  "+": "⁺",
  "-": "⁻",
  "=": "⁼",
  "(": "⁽",
  ")": "⁾"
}, g = {
  a: "🄰",
  b: "🄱",
  c: "🄲",
  d: "🄳",
  e: "🄴",
  f: "🄵",
  g: "🄶",
  h: "🄷",
  i: "🄸",
  j: "🄹",
  k: "🄺",
  l: "🄻",
  m: "🄼",
  n: "🄽",
  o: "🄾",
  p: "🄿",
  q: "🅀",
  r: "🅁",
  s: "🅂",
  t: "🅃",
  u: "🅄",
  v: "🅅",
  w: "🅆",
  x: "🅇",
  y: "🅈",
  z: "🅉",
  A: "🄰",
  B: "🄱",
  C: "🄲",
  D: "🄳",
  E: "🄴",
  F: "🄵",
  G: "🄶",
  H: "🄷",
  I: "🄸",
  J: "🄹",
  K: "🄺",
  L: "🄻",
  M: "🄼",
  N: "🄽",
  O: "🄾",
  P: "🄿",
  Q: "🅀",
  R: "🅁",
  S: "🅂",
  T: "🅃",
  U: "🅄",
  V: "🅅",
  W: "🅆",
  X: "🅇",
  Y: "🅈",
  Z: "🅉",
  ".": "⊡"
}, h = {
  a: "🅰",
  b: "🅱",
  c: "🅲",
  d: "🅳",
  e: "🅴",
  f: "🅵",
  g: "🅶",
  h: "🅷",
  i: "🅸",
  j: "🅹",
  k: "🅺",
  l: "🅻",
  m: "🅼",
  n: "🅽",
  o: "🅾",
  p: "🅿",
  q: "🆀",
  r: "🆁",
  s: "🆂",
  t: "🆃",
  u: "🆄",
  v: "🆅",
  w: "🆆",
  x: "🆇",
  y: "🆈",
  z: "🆉",
  A: "🅰",
  B: "🅱",
  C: "🅲",
  D: "🅳",
  E: "🅴",
  F: "🅵",
  G: "🅶",
  H: "🅷",
  I: "🅸",
  J: "🅹",
  K: "🅺",
  L: "🅻",
  M: "🅼",
  N: "🅽",
  O: "🅾",
  P: "🅿",
  Q: "🆀",
  R: "🆁",
  S: "🆂",
  T: "🆃",
  U: "🆄",
  V: "🆅",
  W: "🆆",
  X: "🆇",
  Y: "🆈",
  Z: "🆉"
}, i = {
  a: "ᴀ",
  b: "ʙ",
  c: "ᴄ",
  d: "ᴅ",
  e: "ᴇ",
  f: "ꜰ",
  g: "ɢ",
  h: "ʜ",
  i: "ɪ",
  j: "ᴊ",
  k: "ᴋ",
  l: "ʟ",
  m: "ᴍ",
  n: "ɴ",
  o: "ᴏ",
  p: "ᴘ",
  r: "ʀ",
  s: "ꜱ",
  t: "ᴛ",
  u: "ᴜ",
  v: "ᴠ",
  w: "ᴡ",
  y: "ʏ",
  z: "ᴢ"
}, j = {
  " ": " ",
  0: "０",
  1: "１",
  2: "２",
  3: "３",
  4: "４",
  5: "５",
  6: "６",
  7: "７",
  8: "８",
  9: "９",
  a: "ａ",
  b: "ｂ",
  c: "ｃ",
  d: "ｄ",
  e: "ｅ",
  f: "ｆ",
  g: "ｇ",
  h: "ｈ",
  i: "ｉ",
  j: "ｊ",
  k: "ｋ",
  l: "ｌ",
  m: "ｍ",
  n: "ｎ",
  o: "ｏ",
  p: "ｐ",
  q: "ｑ",
  r: "ｒ",
  s: "ｓ",
  t: "ｔ",
  u: "ｕ",
  v: "ｖ",
  w: "ｗ",
  x: "ｘ",
  y: "ｙ",
  z: "ｚ",
  A: "Ａ",
  B: "Ｂ",
  C: "Ｃ",
  D: "Ｄ",
  E: "Ｅ",
  F: "Ｆ",
  G: "Ｇ",
  H: "Ｈ",
  I: "Ｉ",
  J: "Ｊ",
  K: "Ｋ",
  L: "Ｌ",
  M: "Ｍ",
  N: "Ｎ",
  O: "Ｏ",
  P: "Ｐ",
  Q: "Ｑ",
  R: "Ｒ",
  S: "Ｓ",
  T: "Ｔ",
  U: "Ｕ",
  V: "Ｖ",
  W: "Ｗ",
  X: "Ｘ",
  Y: "Ｙ",
  Z: "Ｚ",
  "!": "！",
  '"': "゛",
  "#": "＃",
  $: "＄",
  "%": "％",
  "&": "＆",
  "(": "（",
  ")": "）",
  "*": "＊",
  "+": "＋",
  ",": "、",
  "-": "ー",
  ".": "。",
  "/": "／",
  ":": "：",
  ";": "；",
  "<": "〈",
  "=": "＝",
  ">": "〉",
  "?": "？",
  "@": "＠",
  "[": "［",
  "'": "'",
  "]": "］",
  "^": "＾",
  _: "＿",
  "`": "‘",
  "{": "｛",
  "|": "｜",
  "}": "｝",
  "~": "～"
}, k = {
  a: "𝚊",
  b: "𝚋",
  c: "𝚌",
  d: "𝚍",
  e: "𝚎",
  f: "𝚏",
  g: "𝚐",
  h: "𝚑",
  i: "𝚒",
  j: "𝚓",
  k: "𝚔",
  l: "𝚕",
  m: "𝚖",
  n: "𝚗",
  o: "𝚘",
  p: "𝚙",
  q: "𝚚",
  r: "𝚛",
  s: "𝚜",
  t: "𝚝",
  u: "𝚞",
  v: "𝚟",
  w: "𝚠",
  x: "𝚡",
  y: "𝚢",
  z: "𝚣",
  A: "𝙰",
  B: "𝙱",
  C: "𝙲",
  D: "𝙳",
  E: "𝙴",
  F: "𝙵",
  G: "𝙶",
  H: "𝙷",
  I: "𝙸",
  J: "𝙹",
  K: "𝙺",
  L: "𝙻",
  M: "𝙼",
  N: "𝙽",
  O: "𝙾",
  P: "𝙿",
  Q: "𝚀",
  R: "𝚁",
  S: "𝚂",
  T: "𝚃",
  U: "𝚄",
  V: "𝚅",
  W: "𝚆",
  X: "𝚇",
  Y: "𝚈",
  Z: "𝚉",
  1: "𝟷",
  2: "𝟸",
  3: "𝟹",
  4: "𝟺",
  5: "𝟻",
  6: "𝟼",
  7: "𝟽",
  8: "𝟾",
  9: "𝟿",
  0: "𝟶",
  "!": "！",
  "?": "？",
  ".": "．"
}, l = {
  a: "𝖺",
  b: "𝖻",
  c: "𝖼",
  d: "𝖽",
  e: "𝖾",
  f: "𝖿",
  g: "𝗀",
  h: "𝗁",
  i: "𝗂",
  j: "𝗃",
  k: "𝗄",
  l: "𝗅",
  m: "𝗆",
  n: "𝗇",
  o: "𝗈",
  p: "𝗉",
  q: "𝗊",
  r: "𝗋",
  s: "𝗌",
  t: "𝗍",
  u: "𝗎",
  v: "𝗏",
  w: "𝗐",
  x: "𝗑",
  y: "𝗒",
  z: "𝗓",
  A: "𝖠",
  B: "𝖡",
  C: "𝖢",
  D: "𝖣",
  E: "𝖤",
  F: "𝖥",
  G: "𝖦",
  H: "𝖧",
  I: "𝖨",
  J: "𝖩",
  K: "𝖪",
  L: "𝖫",
  M: "𝖬",
  N: "𝖭",
  O: "𝖮",
  P: "𝖯",
  Q: "𝖰",
  R: "𝖱",
  S: "𝖲",
  T: "𝖳",
  U: "𝖴",
  V: "𝖵",
  W: "𝖶",
  X: "𝖷",
  Y: "𝖸",
  Z: "𝖹",
  0: "𝟢",
  1: "𝟣",
  2: "𝟤",
  3: "𝟥",
  4: "𝟦",
  5: "𝟧",
  6: "𝟨",
  7: "𝟩",
  8: "𝟪",
  9: "𝟫"
}, m = {
  a: "𝘢",
  b: "𝘣",
  c: "𝘤",
  d: "𝘥",
  e: "𝘦",
  f: "𝘧",
  g: "𝘨",
  h: "𝘩",
  i: "𝘪",
  j: "𝘫",
  k: "𝘬",
  l: "𝘭",
  m: "𝘮",
  n: "𝘯",
  o: "𝘰",
  p: "𝘱",
  q: "𝘲",
  r: "𝘳",
  s: "𝘴",
  t: "𝘵",
  u: "𝘶",
  v: "𝘷",
  w: "𝘸",
  x: "𝘹",
  y: "𝘺",
  z: "𝘻",
  A: "𝘈",
  B: "𝘉",
  C: "𝘊",
  D: "𝘋",
  E: "𝘌",
  F: "𝘍",
  G: "𝘎",
  H: "𝘏",
  I: "𝘐",
  J: "𝘑",
  K: "𝘒",
  L: "𝘓",
  M: "𝘔",
  N: "𝘕",
  O: "𝘖",
  P: "𝘗",
  Q: "𝘘",
  R: "𝘙",
  S: "𝘚",
  T: "𝘛",
  U: "𝘜",
  V: "𝘝",
  W: "𝘞",
  X: "𝘟",
  Y: "𝘠",
  Z: "𝘡"
}, n = {
  a: "𝗮",
  b: "𝗯",
  c: "𝗰",
  d: "𝗱",
  e: "𝗲",
  f: "𝗳",
  g: "𝗴",
  h: "𝗵",
  i: "𝗶",
  j: "𝗷",
  k: "𝗸",
  l: "𝗹",
  m: "𝗺",
  n: "𝗻",
  o: "𝗼",
  p: "𝗽",
  q: "𝗾",
  r: "𝗿",
  s: "𝘀",
  t: "𝘁",
  u: "𝘂",
  v: "𝘃",
  w: "𝘄",
  x: "𝘅",
  y: "𝘆",
  z: "𝘇",
  A: "𝗔",
  B: "𝗕",
  C: "𝗖",
  D: "𝗗",
  E: "𝗘",
  F: "𝗙",
  G: "𝗚",
  H: "𝗛",
  I: "𝗜",
  J: "𝗝",
  K: "𝗞",
  L: "𝗟",
  M: "𝗠",
  N: "𝗡",
  O: "𝗢",
  P: "𝗣",
  Q: "𝗤",
  R: "𝗥",
  S: "𝗦",
  T: "𝗧",
  U: "𝗨",
  V: "𝗩",
  W: "𝗪",
  X: "𝗫",
  Y: "𝗬",
  Z: "𝗭",
  0: "𝟬",
  1: "𝟭",
  2: "𝟮",
  3: "𝟯",
  4: "𝟰",
  5: "𝟱",
  6: "𝟲",
  7: "𝟳",
  8: "𝟴",
  9: "𝟵"
}, o = {
  a: "𝙖",
  b: "𝙗",
  c: "𝙘",
  d: "𝙙",
  e: "𝙚",
  f: "𝙛",
  g: "𝙜",
  h: "𝙝",
  i: "𝙞",
  j: "𝙟",
  k: "𝙠",
  l: "𝙡",
  m: "𝙢",
  n: "𝙣",
  o: "𝙤",
  p: "𝙥",
  q: "𝙦",
  r: "𝙧",
  s: "𝙨",
  t: "𝙩",
  u: "𝙪",
  v: "𝙫",
  w: "𝙬",
  x: "𝙭",
  y: "𝙮",
  z: "𝙯",
  A: "𝘼",
  B: "𝘽",
  C: "𝘾",
  D: "𝘿",
  E: "𝙀",
  F: "𝙁",
  G: "𝙂",
  H: "𝙃",
  I: "𝙄",
  J: "𝙅",
  K: "𝙆",
  L: "𝙇",
  M: "𝙈",
  N: "𝙉",
  O: "𝙊",
  P: "𝙋",
  Q: "𝙌",
  R: "𝙍",
  S: "𝙎",
  T: "𝙏",
  U: "𝙐",
  V: "𝙑",
  W: "𝙒",
  X: "𝙓",
  Y: "𝙔",
  Z: "𝙕"
}, p = {
  " ": " ",
  a: "ɐ",
  b: "q",
  c: "ɔ",
  d: "p",
  e: "ǝ",
  f: "ɟ",
  g: "ƃ",
  h: "ɥ",
  i: "ᴉ",
  j: "ɾ",
  k: "ʞ",
  l: "l",
  m: "ɯ",
  n: "u",
  o: "o",
  p: "d",
  q: "b",
  r: "ɹ",
  s: "s",
  t: "ʇ",
  u: "n",
  v: "ʌ",
  w: "ʍ",
  x: "x",
  y: "ʎ",
  z: "z",
  A: "∀",
  B: "B",
  C: "Ɔ",
  D: "ᗡ",
  E: "Ǝ",
  F: "Ⅎ",
  G: "פ",
  H: "H",
  I: "I",
  J: "ſ",
  K: "K",
  L: "˥",
  M: "W",
  N: "N",
  O: "O",
  P: "Ԁ",
  Q: "Q",
  R: "R",
  S: "S",
  T: "┴",
  U: "∩",
  V: "Λ",
  W: "M",
  X: "X",
  Y: "⅄",
  Z: "Z",
  0: "0",
  1: "Ɩ",
  2: "ᄅ",
  3: "Ɛ",
  4: "ㄣ",
  5: "ϛ",
  6: "9",
  7: "ㄥ",
  8: "8",
  9: "6",
  ",": "'",
  ".": "˙",
  "?": "¿",
  "!": "¡",
  '"': ",,",
  "'": ",",
  "`": ",",
  "(": ")",
  ")": "(",
  "[": "]",
  "]": "[",
  "{": "}",
  "}": "{",
  "<": ">",
  ">": "<",
  "&": "⅋",
  _: "‾"
}, currencyCharMap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "a": "₳",
  "b": "฿",
  "c": "₵",
  "d": "Đ",
  "e": "Ɇ",
  "f": "₣",
  "g": "₲",
  "h": "Ⱨ",
  "i": "ł",
  "j": "J",
  "k": "₭",
  "l": "Ⱡ",
  "m": "₥",
  "n": "₦",
  "o": "Ø",
  "p": "₱",
  "q": "Q",
  "r": "Ɽ",
  "s": "₴",
  "t": "₮",
  "u": "Ʉ",
  "v": "V",
  "w": "₩",
  "x": "Ӿ",
  "y": "Ɏ",
  "z": "Ⱬ",
  "A": "₳",
  "B": "฿",
  "C": "₵",
  "D": "Đ",
  "E": "Ɇ",
  "F": "₣",
  "G": "₲",
  "H": "Ⱨ",
  "I": "ł",
  "J": "J",
  "K": "₭",
  "L": "Ⱡ",
  "M": "₥",
  "N": "₦",
  "O": "Ø",
  "P": "₱",
  "Q": "Q",
  "R": "Ɽ",
  "S": "₴",
  "T": "₮",
  "U": "Ʉ",
  "V": "V",
  "W": "₩",
  "X": "Ӿ",
  "Y": "Ɏ",
  "Z": "Ⱬ"
}, greekCharMap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "a": "α",
  "b": "в",
  "c": "¢",
  "d": "∂",
  "e": "є",
  "f": "ƒ",
  "g": "g",
  "h": "н",
  "i": "ι",
  "j": "נ",
  "k": "к",
  "l": "ℓ",
  "m": "м",
  "n": "η",
  "o": "σ",
  "p": "ρ",
  "q": "q",
  "r": "я",
  "s": "ѕ",
  "t": "т",
  "u": "υ",
  "v": "ν",
  "w": "ω",
  "x": "χ",
  "y": "у",
  "z": "z",
  "A": "α",
  "B": "в",
  "C": "¢",
  "D": "∂",
  "E": "є",
  "F": "ƒ",
  "G": "g",
  "H": "н",
  "I": "ι",
  "J": "נ",
  "K": "к",
  "L": "ℓ",
  "M": "м",
  "N": "η",
  "O": "σ",
  "P": "ρ",
  "Q": "q",
  "R": "я",
  "S": "ѕ",
  "T": "т",
  "U": "υ",
  "V": "ν",
  "W": "ω",
  "X": "χ",
  "Y": "у",
  "Z": "z"
}, q = {
  "0": "0️⃣",
  "1": "1️⃣",
  "2": "2️⃣",
  "3": "3️⃣",
  "4": "4️⃣",
  "5": "5️⃣",
  "6": "6️⃣",
  "7": "7️⃣",
  "8": "8️⃣",
  "9": "9️⃣",
  "A": "​🇦​",
  "B": "​🇧​",
  "C": "​🇨​",
  "D": "​🇩​",
  "E": "​🇪​",
  "F": "​🇫​",
  "G": "​🇬​",
  "H": "​🇭​",
  "I": "​🇮​",
  "J": "​🇯​",
  "K": "​🇰​",
  "L": "​🇱​",
  "M": "​🇲​",
  "N": "​🇳​",
  "O": "​🇴​",
  "P": "​🇵​",
  "Q": "​🇶​",
  "R": "​🇷​",
  "S": "​🇸​",
  "T": "​🇹​",
  "U": "​🇺​",
  "V": "​🇻​",
  "W": "​🇼​",
  "X": "​🇽​",
  "Y": "​🇾​",
  "Z": "​🇿​",
  "a": "​🇦​",
  "b": "​🇧​",
  "c": "​🇨​",
  "d": "​🇩​",
  "e": "​🇪​",
  "f": "​🇫​",
  "g": "​🇬​",
  "h": "​🇭​",
  "i": "​🇮​",
  "j": "​🇯​",
  "k": "​🇰​",
  "l": "​🇱​",
  "m": "​🇲​",
  "n": "​🇳​",
  "o": "​🇴​",
  "p": "​🇵​",
  "q": "​🇶​",
  "r": "​🇷​",
  "s": "​🇸​",
  "t": "​🇹​",
  "u": "​🇺​",
  "v": "​🇻​",
  "w": "​🇼​",
  "x": "​🇽​",
  "y": "​🇾​",
  "z": "​🇿​",
  "😀": "🔘",
  "×": "🔟",
  "'": "❜",
  ";": "⨾",
  ":": "⦂",
  "~": "͠",
  '"': "❝",
  "!": "❗"
}, r = {
  "0": "⊘",
  "1": "𝟙",
  "2": "ϩ",
  "3": "Ӡ",
  "4": "५",
  "5": "Ƽ",
  "6": "Ϭ",
  "7": "7",
  "8": "𝟠",
  "9": "९",
  "a": "ą",
  "b": "ҍ",
  "c": "ç",
  "d": "ժ",
  "e": "ҽ",
  "f": "ƒ",
  "g": "ց",
  "h": "հ",
  "i": "ì",
  "j": "ʝ",
  "k": "ҟ",
  "l": "Ӏ",
  "m": "ʍ",
  "n": "ղ",
  "o": "օ",
  "p": "ք",
  "q": "զ",
  "r": "ɾ",
  "s": "ʂ",
  "t": "է",
  "u": "մ",
  "v": "ѵ",
  "w": "ա",
  "x": "×",
  "y": "վ",
  "z": "Հ",
  "A": "Ⱥ",
  "B": "β",
  "C": "↻",
  "D": "Ꭰ",
  "E": "Ɛ",
  "F": "Ƒ",
  "G": "Ɠ",
  "H": "Ƕ",
  "I": "į",
  "J": "ل",
  "K": "Ҡ",
  "L": "Ꝉ",
  "M": "Ɱ",
  "N": "ហ",
  "O": "ට",
  "P": "φ",
  "Q": "Ҩ",
  "R": "འ",
  "S": "Ϛ",
  "T": "Ͳ",
  "U": "Ա",
  "V": "Ỽ",
  "W": "చ",
  "X": "ჯ",
  "Y": "Ӌ",
  "Z": "ɀ"
};
const db = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  a,
  aa,
  b,
  c,
  currencyCharMap,
  d,
  e,
  f,
  g,
  greekCharMap,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  smallchars
}, Symbol.toStringTag, { value: "Module" }));
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="px-16 max-w-[1728px] m-auto h-16"><div></div><div class="flex divide-x justify-end py-3 items-center h-full font-semibold"><div class="px-3">`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`EN`);
      } else {
        return [
          createTextVNode("EN")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="px-3">`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/fr" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`FR`);
      } else {
        return [
          createTextVNode("FR")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="px-3">`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/de" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`DE`);
      } else {
        return [
          createTextVNode("DE")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="px-3">`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/es" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ES`);
      } else {
        return [
          createTextVNode("ES")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="px-3">`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/cn" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`CN`);
      } else {
        return [
          createTextVNode("CN")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/PageHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PageHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const defaultInput = "Unicode Text Converter " + (/* @__PURE__ */ new Date()).getFullYear() + " !";
    const input = ref(defaultInput);
    const { t } = useI18n();
    const data = computed(() => {
      const string = input.value.split("");
      const helper = (string2, table) => {
        return string2.map((char) => {
          if (char === "\n")
            return "<br>";
          return table[char] ?? char;
        }).join("");
      };
      const charsetmap = [];
      for (const charset in db) {
        charsetmap.push(helper(string, db[charset]));
      }
      charsetmap.push(input.value.replace(/([^\s])/g, "[̲̅$1]"));
      charsetmap.push(input.value.replace(/([^\s])/g, "【$1】"));
      charsetmap.push(input.value.replace(/([^\s])/g, "『$1』"));
      if (string.length >= 1) {
        charsetmap.push(string.join("̶") + "̶");
        charsetmap.push(string.join("̴") + "̴");
        charsetmap.push(string.join("̳") + "̳");
        charsetmap.push(string.join("̷") + "̷");
        charsetmap.push(string.join("̾") + "̾");
        charsetmap.push(string.join("͎") + "͎");
        charsetmap.push(string.join("͓̽") + "͓̽");
      }
      return charsetmap;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PageHeader, null, null, _parent));
      _push(`<div class="p-5"><div><h1 class="text-3xl text-center font-bold mb-4">${unref(t)("title")}</h1><h2 class="text-base text-center font-bold text-secondary">${unref(t)("subTitle")}</h2><div class="mt-8 mb-8 flex justify-center"><textarea rows="6" cols="50" class="px-3 py-2 rounded border border-gray-300 outline-0 focus:ring-[3px] border-r-2 ring-[rgba(38,143,255,0.5)] transition-shadow duration-150 focus:border-[#007bff] w-full max-w-4xl">${ssrInterpolate(input.value)}</textarea></div><div class="flex-col"><!--[-->`);
      ssrRenderList(data.value, (item, index2) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          key: index2,
          text: item
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="mt-14 text-center md:text-left max-w-5xl m-auto leading-7 text-base"><h3 class="text-h3">${unref(t)("faq1.question")}</h3><p class="">${unref(t)("faq1.answer")}</p><h3 class="text-h3">${unref(t)("faq2.question")}</h3><p class="">${unref(t)("faq2.answer")}</p><h3 class="text-h3">${unref(t)("faq3.question")}</h3><p class="">${unref(t)("faq3.answer")}</p><h3 class="text-h3">${unref(t)("faq4.question")}</h3><p class="">${unref(t)("faq4.answer")}</p><h3 class="text-h3">${unref(t)("faq5.question")}</h3><p class="">${unref(t)("faq5.answer")}</p><h3 class="text-h3">${unref(t)("faq6.question")}</h3><p class="">${unref(t)("faq6.answer")}</p><h3 class="text-h3">${unref(t)("faq7.question")}</h3><p class="">${unref(t)("faq7.answer")}</p><h3 class="text-h3">${unref(t)("faq8.question")}</h3><p class="">${unref(t)("faq8.answer")}</p><h3 class="text-h3">${unref(t)("faq9.question")}</h3><p class="">${unref(t)("faq9.answer")}</p><h3 class="text-h3">${ssrInterpolate(unref(t)("keyFeatures.title"))}</h3><li class="list-none">${unref(t)("keyFeatures.li1")}</li><li class="list-none">${unref(t)("keyFeatures.li2")}</li><li class="list-none">${unref(t)("keyFeatures.li3")}</li><li class="list-none">${unref(t)("keyFeatures.li4")}</li><p class="mt-4">${ssrInterpolate(unref(t)("keyFeatures.possibleTransofrms"))} circled, negative circled, Asian fullwidth, math bold, math bold Fraktur, math bold italic, math bold script, math double-struck, math monospace, math sans, math sans-serif bold, math sans-serif bold italic, math sans-serif italic, parenthesized, regional indicator symbols, squared, negative squared and more.</p></div></div><!--]-->`);
    };
  }
});
const App_vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const routes = [
  {
    path: "/:locale?",
    name: "index",
    component: _sfc_main
  }
];
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const resource = {
  "title": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Unicode text converter that works in <br> Facebook, WhatsApp, Twitter(X), and lots more."]);
  },
  "subTitle": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["This App converts characters from the ASCII range. Characters are converted on a one to one basis."]);
  },
  "faq1": {
    "question": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["What is the purpose of this Unicode text conversion web app?"]);
    },
    "answer": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["The web app is designed to transform regular text into Unicode characters, providing users with a creative and visually appealing way to express themselves on various platforms. Whether you're crafting a social media post, designing a website, or adding a personal touch to your messages."]);
    }
  },
  "faq2": {
    "question": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["How does the Unicode text conversion work?"]);
    },
    "answer": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["The app employs algorithms to map standard characters to their corresponding Unicode counterparts. These Unicode characters often have unique styles, making the converted text appear fancier and more distinctive."]);
    }
  },
  "faq3": {
    "question": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Where can I use the Unicode text generated by this app?"]);
    },
    "answer": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["The converted Unicode text can be used in various online platforms such as social media, messaging apps, forums, and more. It adds a creative touch to your text and allows you to stand out."]);
    }
  },
  "faq4": {
    "question": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Is the Unicode text compatible with all devices and platforms?"]);
    },
    "answer": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["In most cases, yes. Unicode is a standardized encoding system that ensures compatibility across different devices and platforms. However, some platforms or apps may not fully support all Unicode characters, so results may vary."]);
    }
  },
  "faq5": {
    "question": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Is the Unicode text reversible? Can I convert it back to regular text?"]);
    },
    "answer": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["No, the conversion is one-way. Once the text is converted to Unicode, there is no direct mechanism to revert it back to its original form. It's recommended to keep a copy of the original text if needed."]);
    }
  },
  "faq6": {
    "question": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Is the Unicode text conversion supported in multiple languages?"]);
    },
    "answer": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Yes, the Unicode text conversion works with texts in various languages. However, keep in mind that certain characters and styles may have a more significant impact on languages with Latin-based scripts compared to others."]);
    }
  },
  "faq7": {
    "question": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Can I use the Unicode text conversion web app offline?"]);
    },
    "answer": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["The basic functionality of the app requires an internet connection to load, but once loaded, you can download the Progressive Web App (PWA) for text conversion. Keep in mind that certain features, such as updates and style previews, may not be available without an internet connection."]);
    }
  },
  "faq8": {
    "question": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Does the web app support combining characters and diacritics for text transformation?"]);
    },
    "answer": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Yes, the app supports combining characters and diacritics, allowing users to create more intricate and stylized text. The combination of base characters with diacritics is a key aspect of Unicode, providing flexibility for representing a wide range of linguistic and stylistic variations."]);
    }
  },
  "faq9": {
    "question": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["How are surrogate pairs and supplementary characters handled in the Unicode conversion process?"]);
    },
    "answer": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["The web app is designed to handle surrogate pairs and supplementary characters, which are part of the Unicode standard for representing characters beyond the Basic Multilingual Plane (BMP). This ensures that a diverse range of characters can be accurately converted and displayed."]);
    }
  },
  "keyFeatures": {
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Key Features"]);
    },
    "li1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["<b>Wide Range of Characters:</b> Choose from an extensive collection of Unicode characters an symbols to personalize your text"]);
    },
    "li2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["<b>Easy-to-Use Interface:</b> This mobile friendly interface ensures a seamless and hassle-free text conversion experience, even for beginners."]);
    },
    "li3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["<b>Instant Preview:</b> See the transformation in real-time with our instant preview feature, allowing you to fine-tune your fancy text before sharing it with the world."]);
    },
    "li4": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["<b>Copy and Paste Convenience:</b> Copy your converted text with a single click and paste it directly into your favorite platforms, saving you time and effort."]);
    },
    "possibleTransofrms": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Possible transforms:"]);
    }
  }
};
const en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: resource
}, Symbol.toStringTag, { value: "Module" }));
const SUPPORT_LOCALES = ["en", "de", "fr", "es", "cn"];
function setupI18n() {
  const i18n2 = createI18n({
    locale: "en",
    allowComposition: true,
    legacy: false,
    availableLocales: SUPPORT_LOCALES,
    messages: { en: resource },
    warnHtmlMessage: false
  });
  setI18nLanguage(i18n2, "en");
  return i18n2;
}
function setI18nLanguage(i18n2, locale) {
  i18n2.global.locale.value = locale;
}
async function loadLocaleMessages(i18n2, locale) {
  const messages = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../locales/cn.json": () => import("./assets/cn-02086cd5.js"), "../locales/de.json": () => import("./assets/de-ac976921.js"), "../locales/en.json": () => Promise.resolve().then(() => en), "../locales/es.json": () => import("./assets/es-77f580d0.js"), "../locales/fr.json": () => import("./assets/fr-ac74af25.js") }), `../locales/${locale}.json`);
  i18n2.global.setLocaleMessage(locale, messages.default);
  return nextTick();
}
const i18n = setupI18n();
const createApp = ViteSSG(
  // the root component
  _sfc_main,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes: routes2, isClient, initialState }) => {
    app.use(i18n);
    router.beforeEach(async (to, from, next) => {
      const paramsLocale = to.params.locale;
      if (!SUPPORT_LOCALES.includes(paramsLocale)) {
        if (to.path === "/") {
          setI18nLanguage(i18n, "en");
          return next();
        }
        return next(`/`);
      }
      if (!i18n.global.availableLocales.includes(paramsLocale)) {
        await loadLocaleMessages(i18n, paramsLocale);
      }
      setI18nLanguage(i18n, paramsLocale);
      return next();
    });
  }
);
async function includedRoutes() {
  return SUPPORT_LOCALES.map((val) => "/" + val);
}
export {
  createApp,
  includedRoutes
};
