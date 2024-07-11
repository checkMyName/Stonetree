import Component from '../classes/Component';
import $ from "jquery";
import intlTelInput from 'intl-tel-input';
import { AsYouType } from 'libphonenumber-js'
import { $dom } from '../helpers/dom';
import { $events } from '../helpers/events';
import gsap from 'gsap';

const { attr, get, getAll, addClass, removeClass } = $dom;

const fieldSelector = '.js-phone-mask';

let currentInput = null;
let currentItem = null;
let currentlist = null;
let currentItemScroll = null;

export function phoneMask2() {

  // Перевод
  const _i18n = {
    ru: {
      selectedCountryAriaLabel: "Выбранная страна",
      countryListAriaLabel: "Список стран",
      searchPlaceholder: "Поиск",
      af: "Афганистан",
      ax: "Аландские острова",
      al: "Албания",
      dz: "Алжир",
      as: "Американское Самоа",
      ad: "Андорра",
      ao: "Ангола",
      ai: "Ангилья",
      aq: "Антарктида",
      ag: "Антигуа и Барбуда",
      ar: "Аргентина",
      am: "Армения",
      aw: "Аруба",
      au: "Австралия",
      at: "Австрия",
      az: "Азербайджан",
      bs: "Багамы",
      bh: "Бахрейн",
      bd: "Бангладеш",
      bb: "Барбадос",
      by: "Беларусь",
      be: "Бельгия",
      bz: "Белиз",
      bj: "Бенин",
      bm: "Бермуды",
      bt: "Бутан",
      bo: "Боливия (Многонациональное Государство)",
      bq: "Бонайре, Синт-Эстатиус и Саба",
      ba: "Босния и Герцеговина",
      bw: "Ботсвана",
      bv: "Остров Буве",
      br: "Бразилия",
      io: "Британская территория в Индийском океане",
      bn: "Бруней-Даруссалам",
      bg: "Болгария",
      bf: "Буркина-Фасо",
      bi: "Бурунди",
      kh: "Камбоджа",
      cm: "Камерун",
      ca: "Канада",
      cv: "Кабо-Верде",
      ky: "Каймановы острова",
      cf: "Центральноафриканская Республика",
      td: "Чад",
      cl: "Чили",
      cn: "Китай",
      cx: "Остров Рождества",
      cc: "Кокосовые (Килинг) острова",
      co: "Колумбия",
      km: "Коморы",
      cg: "Конго",
      cd: "Конго (Демократическая Республика)",
      ck: "Острова Кука",
      cr: "Коста-Рика",
      ci: "Кот-д’Ивуар",
      hr: "Хорватия",
      cu: "Куба",
      cw: "Кюрасао",
      cy: "Кипр",
      cz: "Чехия",
      dk: "Дания",
      dj: "Джибути",
      dm: "Доминика",
      do: "Доминиканская Республика",
      ec: "Эквадор",
      eg: "Египет",
      sv: "Сальвадор",
      gq: "Экваториальная Гвинея",
      er: "Эритрея",
      ee: "Эстония",
      et: "Эфиопия",
      fk: "Фолклендские (Мальвинские) острова",
      fo: "Фарерские острова",
      fj: "Фиджи",
      fi: "Финляндия",
      fr: "Франция",
      gf: "Французская Гвиана",
      pf: "Французская Полинезия",
      tf: "Французские Южные территории",
      ga: "Габон",
      gm: "Гамбия",
      ge: "Грузия",
      de: "Германия",
      gh: "Гана",
      gi: "Гибралтар",
      gr: "Греция",
      gl: "Гренландия",
      gd: "Гренада",
      gp: "Гваделупа",
      gu: "Гуам",
      gt: "Гватемала",
      gg: "Гернси",
      gn: "Гвинея",
      gw: "Гвинея-Бисау",
      gy: "Гайана",
      ht: "Гаити",
      hm: "Остров Херд и острова Макдональд",
      va: "Ватикан",
      hn: "Гондурас",
      hk: "Гонконг",
      hu: "Венгрия",
      is: "Исландия",
      in: "Индия",
      id: "Индонезия",
      ir: "Иран (Исламская Республика)",
      iq: "Ирак",
      ie: "Ирландия",
      ac: "остров Вознесения",
      im: "Остров Мэн",
      il: "Израиль",
      it: "Италия",
      jm: "Ямайка",
      jp: "Япония",
      je: "Джерси",
      jo: "Иордания",
      kz: "Казахстан",
      ke: "Кения",
      ki: "Кирибати",
      kp: "КНДР",
      kr: "Республика Корея",
      xk: "Косово",
      kw: "Кувейт",
      kg: "Кыргызстан",
      la: "Лаос",
      lv: "Латвия",
      lb: "Ливан",
      ls: "Лесото",
      lr: "Либерия",
      ly: "Ливия",
      li: "Лихтенштейн",
      lt: "Литва",
      lu: "Люксембург",
      mo: "Макао",
      mk: "Северная Македония",
      mg: "Мадагаскар",
      mw: "Малави",
      my: "Малайзия",
      mv: "Мальдивы",
      ml: "Мали",
      mt: "Мальта",
      mh: "Маршалловы Острова",
      mq: "Мартиника",
      mr: "Мавритания",
      mu: "Маврикий",
      yt: "Майотта",
      mx: "Мексика",
      fm: "Федеративные Штаты Микронезии",
      md: "Молдова (Республика)",
      mc: "Монако",
      mn: "Монголия",
      me: "Черногория",
      ms: "Монтсеррат",
      ma: "Марокко",
      mz: "Мозамбик",
      mm: "Мьянма",
      na: "Намибия",
      nr: "Науру",
      np: "Непал",
      nl: "Нидерланды",
      nc: "Новая Каледония",
      nz: "Новая Зеландия",
      ni: "Никарагуа",
      ne: "Нигер",
      ng: "Нигерия",
      nu: "Ниуэ",
      nf: "Остров Норфолк",
      mp: "Северные Марианские Острова",
      no: "Норвегия",
      om: "Оман",
      pk: "Пакистан",
      pw: "Палау",
      ps: "Государство Палестина",
      pa: "Панама",
      pg: "Папуа — Новая Гвинея",
      py: "Парагвай",
      pe: "Перу",
      ph: "Филиппины",
      pn: "Острова Питкэрн",
      pl: "Польша",
      pt: "Португалия",
      pr: "Пуэрто-Рико",
      qa: "Катар",
      re: "Реюньон",
      ro: "Румыния",
      ru: "Россия",
      rw: "Руанда",
      bl: "Сен-Бартелеми",
      sh: "Остров Святой Елены",
      kn: "Сент-Китс и Невис",
      lc: "Сент-Люсия",
      mf: "Сен-Мартен (Французская часть)",
      pm: "Сен-Пьер и Микелон",
      vc: "Сент-Винсент и Гренадины",
      ws: "Самоа",
      sm: "Сан-Марино",
      st: "Сан-Томе и Принсипи",
      sa: "Саудовская Аравия",
      sn: "Сенегал",
      rs: "Сербия",
      sc: "Сейшелы",
      sl: "Сьерра-Леоне",
      sg: "Сингапур",
      sx: "Синт-Мартен (Голландская часть)",
      sk: "Словакия",
      si: "Словения",
      sb: "Соломоновы Острова",
      so: "Сомали",
      za: "Южная Африка",
      gs: "Южная Георгия и Южные Сандвичевы Острова",
      ss: "Южный Судан",
      es: "Испания",
      lk: "Шри-Ланка",
      sd: "Судан",
      sr: "Суринам",
      sj: "Шпицберген и Ян-Майен",
      sz: "Свазиленд",
      se: "Швеция",
      ch: "Швейцария",
      sy: "Сирийская Арабская Республика",
      tw: "Тайвань",
      tj: "Таджикистан",
      tz: "Танзания (Объединенная Республика)",
      th: "Таиланд",
      tl: "Тимор-Лесте",
      tg: "Того",
      tk: "Токелау",
      to: "Тонга",
      tt: "Тринидад и Тобаго",
      tn: "Тунис",
      tr: "Турция",
      tm: "Туркменистан",
      tc: "Острова Теркс и Кайкос",
      tv: "Тувалу",
      ug: "Уганда",
      ua: "Украина",
      ae: "Объединенные Арабские Эмираты",
      gb: "Соединенное Королевство",
      us: "Соединенные Штаты Америки",
      um: "Внешние малые острова США",
      uy: "Уругвай",
      uz: "Узбекистан",
      vu: "Вануату",
      ve: "Венесуэла (Боливарианская Республика)",
      vn: "Вьетнам",
      vg: "Британские Виргинские острова",
      vi: "Виргинские острова (США)",
      wf: "Уоллис и Футуна",
      eh: "Западная Сахара",
      ye: "Йемен",
      zm: "Замбия",
      zw: "Зимбабве",
    },
    en: {},
  };

  var masks = {
    AC: "+247-####",
    AD: "+376-###-###",
    AE: ["+\\971-#-###-####", "+\\971-##-###-####"],
    AF: "+\\93-##-###-####",
    AG: "+1(268)###-####",
    AI: "+1(264)###-####",
    AL: "+355(###)###-###",
    AM: "+374-##-###-###",
    AN: ["+5\\9\\9-###-####", "+5\\9\\9-####-####"],
    AO: "+244(###)###-###",
    AQ: "+672-1##-###",
    AR: "+54(###)###-####",
    AS: "+1(684)###-####",
    AT: "+43(###)###-####",
    AU: "+61-#-####-####",
    AW: "+2\\97-###-####",
    AX: "+358-##-###-##-##",
    AZ: "+\\9\\94-##-###-##-##",
    BA: ["+387-##-####", "+387-##-#####"],
    BB: "+1(246)###-####",
    BD: "+880-##-###-###",
    BE: "+32(###)###-###",
    BF: "+226-##-##-####",
    BG: "+35\\9(###)###-###",
    BH: "+\\973-####-####",
    BI: "+257-##-##-####",
    BJ: "+22\\9-##-##-####",
    BM: "+1(441)###-####",
    BN: "+673-###-####",
    BO: "+5\\91-#-###-####",
    BQ: "+5\\9\\9-###-####",
    BR: ["+55(##)####-####", "+55(##)#####-####"],
    BS: "+1(242)###-####",
    BT: ["+\\975-#-###-###", "+\\975-##-###-###"],
    BW: "+267-##-###-###",
    BY: "+375(##)###-##-##",
    BZ: "+501-###-####",
    CA: "+1(###)###-####",
    CD: "+243(###)###-###",
    CF: "+236-##-##-####",
    CG: "+242-##-###-####",
    CH: "+41-##-###-####",
    CI: "+225-##-###-###",
    CK: "+682-##-###",
    CL: "+56-#-####-####",
    CM: "+237-####-####",
    CN: ["+86(###)####-###", "+86(###)####-####", "+86-##-#####-#####"],
    CO: "+57(###)###-####",
    CR: "+506-####-####",
    CU: "+53-#-###-####",
    CV: "+238(###)##-##",
    CW: "+5\\9\\9-###-####",
    CY: "+357-##-###-###",
    CZ: "+420(###)###-###",
    DE: [
      "+4\\9-###-###",
      "+4\\9(###)##-##",
      "+4\\9(###)##-###",
      "+4\\9(###)##-####",
      "+4\\9(###)###-####",
      "+4\\9(####)###-####",
    ],
    DJ: "+253-##-##-##-##",
    DK: "+45-##-##-##-##",
    DM: "+1(767)###-####",
    DO: "+1(8##)###-####",
    DZ: "+213-##-###-####",
    EC: ["+5\\93-#-###-####", "+5\\93-##-###-####"],
    EE: ["+372-###-####", "+372-####-####"],
    EG: "+20(###)###-####",
    ER: "+2\\91-#-###-###",
    ES: "+34(###)###-###",
    ET: "+251-##-###-####",
    FI: "+358(###)###-##-##",
    FJ: "+67\\9-##-#####",
    FK: "+500-#####",
    FM: "+6\\91-###-####",
    FO: "+2\\98-###-###",
    FR: ["+###-##-####", "+##(###)###-###", "+###-#####-####"],
    GA: "+241-#-##-##-##",
    GD: "+1(473)###-####",
    GE: "+\\9\\95(###)###-###",
    GF: "+5\\94-#####-####",
    GH: "+233(###)###-###",
    GI: "+350-###-#####",
    GL: "+2\\9\\9-##-##-##",
    GM: "+220(###)##-##",
    GP: "+5\\90(###)###-###",
    GN: "+224-##-###-###",
    GQ: "+240-##-###-####",
    GR: "+30(###)###-####",
    GT: "+502-#-###-####",
    GU: "+1(671)###-####",
    GW: "+245-#-######",
    GY: "+5\\92-###-####",
    HK: "+852-####-####",
    HN: "+504-####-####",
    HR: "+385-##-###-###",
    HT: "+50\\9-##-##-####",
    HU: "+36(###)###-###",
    ID: [
      "+62-##-###-##",
      "+62-##-###-###",
      "+62-##-###-####",
      "+62(8##)###-####",
      "+62(8##)###-###",
      "+62(8##)###-###",
      "+62(8##)###-##-###",
    ],
    IE: "+353(###)###-###",
    IL: ["+\\972-#-###-####", "+\\972-5#-###-####"],
    IN: "+\\91(####)###-###",
    IO: "+246-###-####",
    IQ: "+\\964(###)###-####",
    IR: "+\\98(###)###-####",
    IS: "+354-###-####",
    IT: "+3\\9(###)####-###",
    JM: "+1(876)###-####",
    JO: "+\\962-#-####-####",
    JP: ["+81(###)###-###", "+81-##-####-####"],
    KE: "+254-###-######",
    KG: "+\\9\\96(###)###-###",
    KH: "+855-##-###-###",
    KI: "+686-##-###",
    KM: "+26\\9-##-#####",
    KN: "+1(86\\9)###-####",
    KP: [
      "+850-###-###",
      "+850-##-###-###",
      "+850-###-###-####",
      "+850-####-#############",
    ],
    KR: "+82-##-###-####",
    KW: "+\\965-####-####",
    KY: "+1(345)###-####",
    KZ: "+7(###)###-##-##",
    LA: ["+856-##-###-###", "+856(20##)###-###"],
    LB: ["+\\961-#-###-###", "+\\961-##-###-###"],
    LC: "+1(758)###-####",
    LI: "+423(###)###-####",
    LK: "+\\94-##-###-####",
    LR: "+231-##-###-###",
    LS: "+266-#-###-####",
    LT: "+370(###)##-###",
    LU: "+352(###)###-###",
    LV: "+371-##-###-###",
    LY: ["+218-##-###-###", "+218-21-###-####"],
    MA: "+212-##-####-###",
    MC: ["+377-##-###-###", "+377(###)###-###"],
    MD: "+373-####-####",
    ME: "+382-##-###-###",
    MF: "+5\\90-#####-####",
    MG: "+261-##-##-#####",
    MH: "+6\\92-###-####",
    MK: "+38\\9-##-###-###",
    ML: "+223-##-##-####",
    MM: ["+\\95-###-###", "+\\95-#-###-###", "+\\95-##-###-###"],
    MN: "+\\976-##-##-####",
    MO: "+853-####-####",
    MP: "+1(670)###-####",
    MQ: "+5\\96(###)##-##-##",
    MR: "+222-##-##-####",
    MS: "+1(664)###-####",
    MT: "+356-####-####",
    MU: "+230-###-####",
    MV: "+\\960-###-####",
    MW: ["+265-#-###-###", "+265-#-####-####"],
    MX: ["+52-##-##-####", "+52(###)###-####"],
    MY: ["+60-#-###-###", "+60-##-###-####"],
    MZ: "+258-##-###-###",
    NA: "+264-##-###-####",
    NC: "+687-##-####",
    NE: "+227-##-##-####",
    NF: "+672-3##-###",
    NG: ["+234-##-###-##", "+234-##-###-###", "+234(###)###-####"],
    NI: "+505-####-####",
    NL: "+31-##-###-####",
    NO: "+47(###)##-###",
    NP: "+\\977-##-###-###",
    NR: "+674-###-####",
    NU: "+683-####",
    NZ: ["+64-##-###-###", "+64(###)###-###", "+64(###)###-####"],
    OM: "+\\968-##-###-###",
    PA: "+507-###-####",
    PE: "+51(###)###-###",
    PF: "+68\\9-##-##-##",
    PG: "+675(###)##-###",
    PH: "+63(###)###-####",
    PK: "+\\92(###)###-####",
    PL: "+48(###)###-###",
    PS: "+\\970-##-###-####",
    PT: "+351-##-###-####",
    PW: "+680-###-####",
    PY: "+5\\95(###)###-###",
    QA: "+\\974-####-####",
    RE: "+262-#####-####",
    RO: "+40-##-###-####",
    RS: "+381-##-###-####",
    RU: "+7(###)###-##-##",
    RW: "+250(###)###-###",
    SA: ["+\\966-#-###-####", "+\\966-5-####-####"],
    SB: ["+677-#####", "+677-###-####"],
    SC: "+248-#-###-###",
    SD: "+24\\9-##-###-####",
    SE: "+46-##-###-####",
    SG: "+65-####-####",
    SH: "+2\\90-####",
    SI: "+386-##-###-###",
    SK: "+421(###)###-###",
    SL: "+232-##-######",
    SM: "+378-####-######",
    SN: "+221-##-###-####",
    SO: ["+252-#-###-###", "+252-##-###-###"],
    SR: ["+5\\97-###-###", "+5\\97-###-####"],
    SS: "+211-##-###-####",
    ST: "+23\\9-##-#####",
    SV: "+503-##-##-####",
    SX: "+1(721)###-####",
    SY: "+\\963-##-####-###",
    SZ: "+268-##-##-####",
    TC: "+1(64\\9)###-####",
    TD: "+235-##-##-##-##",
    TG: "+228-##-###-###",
    TH: ["+66-##-###-###", "+66-##-###-####"],
    TJ: "+\\9\\92-##-###-####",
    TK: "+6\\90-####",
    TL: ["+670-###-####", "+670-7##-#####"],
    TM: "+\\9\\93-#-###-####",
    TN: "+216-##-###-###",
    TO: "+676-#####",
    TR: "+\\90(###)###-####",
    TT: "+1(868)###-####",
    TV: ["+688-#####", "+688-\\90####"],
    TW: ["+886-####-####", "+886-#-####-####"],
    TZ: "+255-##-###-####",
    UA: "+380(##)###-##-##",
    UG: "+256(###)###-###",
    UK: "+44-##-####-####",
    US: "+1(###)###-####",
    UY: "+5\\98-#-###-##-##",
    UZ: "+\\9\\98-##-###-####",
    VA: "+3\\9-6-6\\98-#####",
    VC: "+1(784)###-####",
    VE: "+58(###)###-####",
    VG: "+1(284)###-####",
    VI: "+1(340)###-####",
    VN: ["+84-##-####-###", "+84(###)####-###"],
    VU: ["+678-#####", "+678-##-#####"],
    WF: "+681-##-####",
    WS: "+685-##-####",
    YT: "+262-#####-####",
    YE: ["+\\967-#-###-###", "+\\967-##-###-###", "+\\967-###-###-###"],
    ZA: "+27-##-###-####",
    ZM: "+260-##-###-####",
    ZW: "+263-#-######",
  };

  // Перебираем все поля телефона
  const tels = document.querySelectorAll(fieldSelector);
  if (tels[0]) {
    tels.forEach((tel) => {
      // https://intl-tel-input.com/
      const intl = intlTelInput(tel, {
        // utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.7/build/js/utils.js",
        nationalMode: false,
        initialCountry: "auto",
        useFullscreenPopup: false,

        geoIpLookup: function (callback) {
          fetch("https://ipapi.co/json")
            .then(function (res) {
              return res.json();
            })
            .then(function (data) {
              callback(data.country_code);
            })
            .catch(function () {
              callback("AE");
            });
        },
        i18n: _i18n[tel.closest("form").dataset.lang],
      });

      intl.promise.then(() => { handleMaskChange(0, ""); tel.blur(); })

      // Маска
      function handleMaskChange(isForward, key) {
        const countrycode = intl.getSelectedCountryData().iso2 ? intl.getSelectedCountryData().iso2.toUpperCase() : null;

        let isFixed = false

        let phoneInput = $(tel).eq(0)
        let maskIdx = phoneInput.data('maskidx')
        let mask = phoneInput.data('mask')
        if (typeof mask == 'undefined') mask = ''
        if (typeof maskIdx == 'undefined') maskIdx = 0
        let isLastChar = false
        let inputStr = /\d/g.test(phoneInput.val()) ? phoneInput.val().match(/\d+/g).join('') : ""

        if (Array.isArray(masks[countrycode])) {
          if (isForward == 0) {
            mask = masks[countrycode][0]
            maskIdx = 0
          }
          else {
            let inputStr = phoneInput.val().match(/\d+/g).join('')
            let inputLength = inputStr.length
            mask = mask.match(/#+|\d+/g).join('').length
            if (key && key.length && (maskIdx + 1) < masks[countrycode][maskIdx].length) {
              if (countrycode != 'AE')
                maskIdx += 1
              else {
                if (/9715\d{0,8}/g.test(inputStr + key)) {
                  maskIdx = 1
                  isFixed = true
                }
                else maskIdx = 0
              }
            }
            else if (countrycode == 'AE' && inputStr.length == 4) { isLastChar = true }
            else if (!key && inputLength - 1 < mask && maskIdx > 0 && masks[countrycode][maskIdx - 1].match(/#+|\d+/g).join('').length >= inputLength - 1) {
              maskIdx -= 1
            }
            mask = masks[countrycode][maskIdx]
          }
        }
        else {
          mask = masks[countrycode]
          maskIdx = 0
          isFixed = true
        }
        if (isLastChar) {

          handleCountryChanges(); return
        }

        phoneInput.inputmask({
          mask: mask,
          onBeforePaste: function (pastedValue, opts) {
            pastedValue = pastedValue.toLowerCase();
            return pastedValue.replace(/[a-z]/i, '');
          }
        })

        currentInput = null;

        currentInput = phoneInput[0];

        // attr(phoneInput[0], 'minlength', mask.replace(/\\/g, '').length);
        // attr(phoneInput[0], 'data-validate-length', mask.replace(/\\/g, '').length);

        if (countrycode == 'AE' && maskIdx == 2) {
          key = '';
          phoneInput.val('5');
        }
        phoneInput.data('mask', mask)
        phoneInput.data('maskidx', maskIdx)
        phoneInput.data('standalone', isFixed)
        if (key.length) {
          phoneInput.val(phoneInput.val().replace('_', key))
        }
        setTimeout(function () {
          let index = phoneInput.val().indexOf('_')
          index = index > 0 ? index : phoneInput.val().length
          index = !key && (phoneInput.val()[index] == "-" || phoneInput.val()[index] == "(" || phoneInput.val()[index] == ")") ? index - 2 : index

          if (!phoneInput.val() == '') {

            phoneInput.get(0).setSelectionRange(index, index)
          }

        }, 10)
      }

      function handleCountryChanges() {
        $(tel).val('')
        handleMaskChange(0, '')

        // $(tel).blur()
        // $(tel).focus()
      }

      function isArabianPhone(code, inputStr) {
        if (code != 'AE') return false
        return /9715\d{0,8}/g.test(inputStr)
      }

      const handleChange = () => {

        // Получаем код страны и инициализируем
        const countrycode = intl.getSelectedCountryData().iso2 ? intl.getSelectedCountryData().iso2.toUpperCase() : null;
        if (countrycode) {
          tel.dataset.dialCode = countrycode;
        }
        intl.setCountry(tel.dataset.dialCode.toLowerCase());
        if (countrycode) {
          let val_old = tel.value;


          let newString = new AsYouType(intl.getSelectedCountryData().iso2.toUpperCase()).input(val_old); // Генерация и проверки телефона
          tel.value = newString;

          // Ограничитель максимальной длины - не точный
          const asYouType = new AsYouType(countrycode);
          asYouType.input(val_old);
          if (asYouType.formatter.template) {
            tel.setAttribute('maxlength', asYouType.formatter.template.length.toString());
          }
        }
      };

      tel.addEventListener('keydown', function (e) {

        const countrycode = intl.getSelectedCountryData().iso2 ? intl.getSelectedCountryData().iso2.toUpperCase() : null;
        let phoneInput = $(tel).eq(0)
        let inputStr = /\d/g.test(phoneInput.val()) ? phoneInput.val().match(/\d+/g).join('') : ""
        let inputLength = inputStr.length
        let mask = phoneInput.data('mask').match(/#+|\d+/g).join('').length
        let maskIdx = phoneInput.data('maskidx')
        let key = event.key
        if (/^[0-9]$/i.test(key) && (/^[0-9]$/i.test(phoneInput.val()[phoneInput.val().length - 1]) && inputLength + 1 > mask || isArabianPhone(countrycode, inputStr + key)) && masks[countrycode].length > maskIdx + 1 && phoneInput.data('standalone') != true) {
          handleMaskChange(1, key)
        }
        else if (/^[0-9]$/i.test(key) && phoneInput.data('standalone') == 'true' || /^[a-z]$/i.test(key) &&
          !/^[v|r]$/i.test(key)) {
          e.preventDefault()
          e.stopPropagation()
          e.stopImmediatePropagation()
          return false
        }
        else if ((key === "Backspace" || key === "Delete") && mask && maskIdx > 0 && masks[countrycode][maskIdx - 1].match(/#+|\d+/g).join('').length >= phoneInput.val().match(/\d+/g).join('').slice(0, -1).length && !isArabianPhone(countrycode, inputStr.slice(0, -1))) {
          handleMaskChange(-1, '')
        }
        else if ((key === "Backspace" || key === "Delete") && inputLength == phoneInput.data('mask').match(/\d+/g).join('').length) {
          e.preventDefault()
          e.stopPropagation()
          e.stopImmediatePropagation()
        }
        else if ((key === "Backspace" || key === "Delete")) {
          let newIndex = phoneInput.get(0).selectionStart - 1
          let val = phoneInput.val()[newIndex]
          if (val == '-' || val == '(' || val == ')') {
            phoneInput.get(0).setSelectionRange(newIndex, newIndex)
          }
        }

      });

      tel.addEventListener('countrychange', handleCountryChanges);
      // tel.addEventListener('input', handleChange);
      // tel.addEventListener('change', handleChange);
      // tel.addEventListener('keyup', handleChange);
      tel.addEventListener('blur', function (e) {
        if (tel.value === '') {
          tel.value = '+' + intl.getSelectedCountryData().dialCode;
        }
      });
      tel.addEventListener('focus', function (e) {
        let phoneInput = $(tel)
        let index = phoneInput.val().indexOf('_')
        index = index > 0 ? index : phoneInput.val().length
        phoneInput.get(0).setSelectionRange(index, index)
      });

      //setTimeout(function(){handleCountryChanges(); setTimeout(function(){$(tel).eq(0).blur()}, 200);}, 100)
    })
  }

  return new Component({
    name: 'phoneMask2',
    requiredTargets: fieldSelector,
    onCreate() {
    },
    onInit() {
      $events.delegate
        .on('click', '.iti__country', event => {
          const target = event.target.closest('.iti__country')

          getAll('.iti__country').forEach(element => {
            removeClass(element, 'is-current')
          })

          addClass(target, 'is-current')
          currentItemScroll = target.offsetTop;

          currentItem = target;
        })
        .on('click', '.iti__selected-country', event => {

          if (!currentItem) return

          const target = event.target.closest('.iti__selected-country');

          const currentList = get('.iti__country-list', target.parentNode);

          setTimeout(() => {
            currentList.scrollTo({
              top: currentItemScroll - currentItem.offsetHeight,
            })
          }, 1);
        })

        .on('show.bs.modal', window, () => {
          console.log();

          gsap.set('.js-header', {
            paddingRight: `${window.innerWidth - get('.page__wrapper').clientWidth}px`,
          })
        })
        .on('hidden.bs.modal', window, () => {
          gsap.set(get('.js-header'), {
            paddingRight: '0',
          })
        })
        

    },
    onDestroy() {
      $events.delegate
        .off('click', '.iti__country', event => {
          const target = event.target.closest('.iti__country')

          getAll('.iti__country').forEach(element => {
            removeClass(element, 'is-current')
          })

          addClass(target, 'is-current')
          currentItemScroll = target.offsetTop;

          currentItem = target;
        })
        .off('click', '.iti__selected-country', event => {

          if (!currentItem) return

          const target = event.target.closest('.iti__selected-country');

          const currentList = get('.iti__country-list', target.parentNode);

          setTimeout(() => {
            currentList.scrollTo({
              top: currentItemScroll - currentItem.offsetHeight,
            })
          }, 1);
        })

        .off('show.bs.modal', window, () => {
          gsap.set('.js-header', {
            paddingRight: '17px',
          })
        })
        .off('hidden.bs.modal', window, () => {
          gsap.set(get('.js-header'), {
            paddingRight: '0',
          })
        })
    }
  })
}