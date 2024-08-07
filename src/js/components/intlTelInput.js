import Component from '../classes/Component';
export function intlTelInput() {

  !(function (t) {
    "object" == typeof module && module.exports ? (module.exports = t()) : (window.intlTelInput = t());
  })(function (l) {
    // "use strict";
    for (
      var n = [
        ["Afghanistan", "af", "93"],
        ["Albania", "al", "355"],
        ["Algeria", "dz", "213"],
        ["American Samoa", "as", "1", 5, ["684"]],
        ["Andorra", "ad", "376"],
        ["Angola", "ao", "244"],
        ["Anguilla", "ai", "1", 6, ["264"]],
        ["Antigua & Barbuda", "ag", "1", 7, ["268"]],
        ["Argentina", "ar", "54"],
        ["Armenia", "am", "374"],
        ["Aruba", "aw", "297"],
        ["Ascension Island", "ac", "247"],
        ["Australia", "au", "61", 0],
        ["Austria", "at", "43"],
        ["Azerbaijan", "az", "994"],
        ["Bahamas", "bs", "1", 8, ["242"]],
        ["Bahrain", "bh", "973"],
        ["Bangladesh", "bd", "880"],
        ["Barbados", "bb", "1", 9, ["246"]],
        ["Belarus", "by", "375"],
        ["Belgium", "be", "32"],
        ["Belize", "bz", "501"],
        ["Benin", "bj", "229"],
        ["Bermuda", "bm", "1", 10, ["441"]],
        ["Bhutan", "bt", "975"],
        ["Bolivia", "bo", "591"],
        ["Bosnia & Herzegovina", "ba", "387"],
        ["Botswana", "bw", "267"],
        ["Brazil", "br", "55"],
        ["British Indian Ocean Territory", "io", "246"],
        ["British Virgin Islands", "vg", "1", 11, ["284"]],
        ["Brunei", "bn", "673"],
        ["Bulgaria", "bg", "359"],
        ["Burkina Faso", "bf", "226"],
        ["Burundi", "bi", "257"],
        ["Cambodia", "kh", "855"],
        ["Cameroon", "cm", "237"],
        [
          "Canada",
          "ca",
          "1",
          1,
          [
            "204",
            "226",
            "236",
            "249",
            "250",
            "263",
            "289",
            "306",
            "343",
            "354",
            "365",
            "367",
            "368",
            "382",
            "387",
            "403",
            "416",
            "418",
            "428",
            "431",
            "437",
            "438",
            "450",
            "584",
            "468",
            "474",
            "506",
            "514",
            "519",
            "548",
            "579",
            "581",
            "584",
            "587",
            "604",
            "613",
            "639",
            "647",
            "672",
            "683",
            "705",
            "709",
            "742",
            "753",
            "778",
            "780",
            "782",
            "807",
            "819",
            "825",
            "867",
            "873",
            "902",
            "905",
          ],
        ],
        ["Cape Verde", "cv", "238"],
        ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
        ["Cayman Islands", "ky", "1", 12, ["345"]],
        ["Central African Republic", "cf", "236"],
        ["Chad", "td", "235"],
        ["Chile", "cl", "56"],
        ["China", "cn", "86"],
        ["Christmas Island", "cx", "61", 2, ["89164"]],
        ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]],
        ["Colombia", "co", "57"],
        ["Comoros", "km", "269"],
        ["Congo - Brazzaville", "cg", "242"],
        ["Congo - Kinshasa", "cd", "243"],
        ["Cook Islands", "ck", "682"],
        ["Costa Rica", "cr", "506"],
        ["Côte d’Ivoire", "ci", "225"],
        ["Croatia", "hr", "385"],
        ["Cuba", "cu", "53"],
        ["Curaçao", "cw", "599", 0],
        ["Cyprus", "cy", "357"],
        ["Czech Republic", "cz", "420"],
        ["Denmark", "dk", "45"],
        ["Djibouti", "dj", "253"],
        ["Dominica", "dm", "1", 13, ["767"]],
        ["Dominican Republic", "do", "1", 2, ["809", "829", "849"]],
        ["Ecuador", "ec", "593"],
        ["Egypt", "eg", "20"],
        ["El Salvador", "sv", "503"],
        ["Equatorial Guinea", "gq", "240"],
        ["Eritrea", "er", "291"],
        ["Estonia", "ee", "372"],
        ["Eswatini", "sz", "268"],
        ["Ethiopia", "et", "251"],
        ["Falkland Islands", "fk", "500"],
        ["Faroe Islands", "fo", "298"],
        ["Fiji", "fj", "679"],
        ["Finland", "fi", "358", 0],
        ["France", "fr", "33"],
        ["French Guiana", "gf", "594"],
        ["French Polynesia", "pf", "689"],
        ["Gabon", "ga", "241"],
        ["Gambia", "gm", "220"],
        ["Georgia", "ge", "995"],
        ["Germany", "de", "49"],
        ["Ghana", "gh", "233"],
        ["Gibraltar", "gi", "350"],
        ["Greece", "gr", "30"],
        ["Greenland", "gl", "299"],
        ["Grenada", "gd", "1", 14, ["473"]],
        ["Guadeloupe", "gp", "590", 0],
        ["Guam", "gu", "1", 15, ["671"]],
        ["Guatemala", "gt", "502"],
        ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]],
        ["Guinea", "gn", "224"],
        ["Guinea-Bissau", "gw", "245"],
        ["Guyana", "gy", "592"],
        ["Haiti", "ht", "509"],
        ["Honduras", "hn", "504"],
        ["Hong Kong", "hk", "852"],
        ["Hungary", "hu", "36"],
        ["Iceland", "is", "354"],
        ["India", "in", "91"],
        ["Indonesia", "id", "62"],
        ["Iran", "ir", "98"],
        ["Iraq", "iq", "964"],
        ["Ireland", "ie", "353"],
        ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]],
        ["Israel", "il", "972"],
        ["Italy", "it", "39", 0],
        ["Jamaica", "jm", "1", 4, ["876", "658"]],
        ["Japan", "jp", "81"],
        ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]],
        ["Jordan", "jo", "962"],
        ["Kazakhstan", "kz", "7", 1, ["33", "7"]],
        ["Kenya", "ke", "254"],
        ["Kiribati", "ki", "686"],
        ["Kosovo", "xk", "383"],
        ["Kuwait", "kw", "965"],
        ["Kyrgyzstan", "kg", "996"],
        ["Laos", "la", "856"],
        ["Latvia", "lv", "371"],
        ["Lebanon", "lb", "961"],
        ["Lesotho", "ls", "266"],
        ["Liberia", "lr", "231"],
        ["Libya", "ly", "218"],
        ["Liechtenstein", "li", "423"],
        ["Lithuania", "lt", "370"],
        ["Luxembourg", "lu", "352"],
        ["Macau", "mo", "853"],
        ["Madagascar", "mg", "261"],
        ["Malawi", "mw", "265"],
        ["Malaysia", "my", "60"],
        ["Maldives", "mv", "960"],
        ["Mali", "ml", "223"],
        ["Malta", "mt", "356"],
        ["Marshall Islands", "mh", "692"],
        ["Martinique", "mq", "596"],
        ["Mauritania", "mr", "222"],
        ["Mauritius", "mu", "230"],
        ["Mayotte", "yt", "262", 1, ["269", "639"]],
        ["Mexico", "mx", "52"],
        ["Micronesia", "fm", "691"],
        ["Moldova", "md", "373"],
        ["Monaco", "mc", "377"],
        ["Mongolia", "mn", "976"],
        ["Montenegro", "me", "382"],
        ["Montserrat", "ms", "1", 16, ["664"]],
        ["Morocco", "ma", "212", 0],
        ["Mozambique", "mz", "258"],
        ["Myanmar (Burma)", "mm", "95"],
        ["Namibia", "na", "264"],
        ["Nauru", "nr", "674"],
        ["Nepal", "np", "977"],
        ["Netherlands", "nl", "31"],
        ["New Caledonia", "nc", "687"],
        ["New Zealand", "nz", "64"],
        ["Nicaragua", "ni", "505"],
        ["Niger", "ne", "227"],
        ["Nigeria", "ng", "234"],
        ["Niue", "nu", "683"],
        ["Norfolk Island", "nf", "672"],
        ["North Korea", "kp", "850"],
        ["North Macedonia", "mk", "389"],
        ["Northern Mariana Islands", "mp", "1", 17, ["670"]],
        ["Norway", "no", "47", 0],
        ["Oman", "om", "968"],
        ["Pakistan", "pk", "92"],
        ["Palau", "pw", "680"],
        ["Palestine", "ps", "970"],
        ["Panama", "pa", "507"],
        ["Papua New Guinea", "pg", "675"],
        ["Paraguay", "py", "595"],
        ["Peru", "pe", "51"],
        ["Philippines", "ph", "63"],
        ["Poland", "pl", "48"],
        ["Portugal", "pt", "351"],
        ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
        ["Qatar", "qa", "974"],
        ["Réunion", "re", "262", 0],
        ["Romania", "ro", "40"],
        ["Russia", "ru", "7", 0],
        ["Rwanda", "rw", "250"],
        ["Samoa", "ws", "685"],
        ["San Marino", "sm", "378"],
        ["São Tomé & Príncipe", "st", "239"],
        ["Saudi Arabia", "sa", "966"],
        ["Senegal", "sn", "221"],
        ["Serbia", "rs", "381"],
        ["Seychelles", "sc", "248"],
        ["Sierra Leone", "sl", "232"],
        ["Singapore", "sg", "65"],
        ["Sint Maarten", "sx", "1", 21, ["721"]],
        ["Slovakia", "sk", "421"],
        ["Slovenia", "si", "386"],
        ["Solomon Islands", "sb", "677"],
        ["Somalia", "so", "252"],
        ["South Africa", "za", "27"],
        ["South Korea", "kr", "82"],
        ["South Sudan", "ss", "211"],
        ["Spain", "es", "34"],
        ["Sri Lanka", "lk", "94"],
        ["St Barthélemy", "bl", "590", 1],
        ["St Helena", "sh", "290"],
        ["St Kitts & Nevis", "kn", "1", 18, ["869"]],
        ["St Lucia", "lc", "1", 19, ["758"]],
        ["St Martin", "mf", "590", 2],
        ["St Pierre & Miquelon", "pm", "508"],
        ["St Vincent & Grenadines", "vc", "1", 20, ["784"]],
        ["Sudan", "sd", "249"],
        ["Suriname", "sr", "597"],
        ["Svalbard & Jan Mayen", "sj", "47", 1, ["79"]],
        ["Sweden", "se", "46"],
        ["Switzerland", "ch", "41"],
        ["Syria", "sy", "963"],
        ["Taiwan", "tw", "886"],
        ["Tajikistan", "tj", "992"],
        ["Tanzania", "tz", "255"],
        ["Thailand", "th", "66"],
        ["Timor-Leste", "tl", "670"],
        ["Togo", "tg", "228"],
        ["Tokelau", "tk", "690"],
        ["Tonga", "to", "676"],
        ["Trinidad & Tobago", "tt", "1", 22, ["868"]],
        ["Tunisia", "tn", "216"],
        ["Turkey", "tr", "90"],
        ["Turkmenistan", "tm", "993"],
        ["Turks & Caicos Islands", "tc", "1", 23, ["649"]],
        ["Tuvalu", "tv", "688"],
        ["Uganda", "ug", "256"],
        ["Ukraine", "ua", "380"],
        ["United Arab Emirates", "ae", "971"],
        ["United Kingdom", "gb", "44", 0],
        ["United States", "us", "1", 0],
        ["Uruguay", "uy", "598"],
        ["US Virgin Islands", "vi", "1", 24, ["340"]],
        ["Uzbekistan", "uz", "998"],
        ["Vanuatu", "vu", "678"],
        ["Vatican City", "va", "39", 1, ["06698"]],
        ["Venezuela", "ve", "58"],
        ["Vietnam", "vn", "84"],
        ["Wallis & Futuna", "wf", "681"],
        ["Western Sahara", "eh", "212", 1, ["5288", "5289"]],
        ["Yemen", "ye", "967"],
        ["Zambia", "zm", "260"],
        ["Zimbabwe", "zw", "263"],
        ["Åland Islands", "ax", "358", 1, ["18"]],
      ],
      t = 0;
      t < n.length;
      t++
    ) {
      var e = n[t];
      n[t] = { name: e[0], iso2: e[1], dialCode: e[2], priority: e[3] || 0, areaCodes: e[4] || null, nodeById: {} };
    }
    function h(n) {
      for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? Object(arguments[t]) : {},
          e = Object.keys(o);
        "function" == typeof Object.getOwnPropertySymbols &&
          e.push.apply(
            e,
            Object.getOwnPropertySymbols(o).filter(function (t) {
              return Object.getOwnPropertyDescriptor(o, t).enumerable;
            })
          ),
          e.forEach(function (t) {
            var e, i;
            (e = n), (i = o[(t = t)]), (t = r(t)) in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i);
          });
      }
      return n;
    }
    function s(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var i = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
          if (null != i) {
            var n,
              o,
              s,
              a,
              r = [],
              l = !0,
              u = !1;
            try {
              if (((s = (i = i.call(t)).next), 0 === e)) {
                if (Object(i) !== i) return;
                l = !1;
              } else for (; !(l = (n = s.call(i)).done) && (r.push(n.value), r.length !== e); l = !0);
            } catch (t) {
              (u = !0), (o = t);
            } finally {
              try {
                if (!l && null != i.return && ((a = i.return()), Object(a) !== a)) return;
              } finally {
                if (u) throw o;
              }
            }
            return r;
          }
        })(t, e) ||
        (function (t, e) {
          var i;
          if (t)
            return "string" == typeof t
              ? o(t, e)
              : "Map" === (i = "Object" === (i = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : i) || "Set" === i
                ? Array.from(t)
                : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                  ? o(t, e)
                  : void 0;
        })(t, e) ||
        (function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        })()
      );
    }
    function o(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
      return n;
    }
    function a(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, r(n.key), n);
      }
    }
    function r(t) {
      t = (function (t, e) {
        if ("object" != typeof t || null === t) return t;
        var i = t[Symbol.toPrimitive];
        if (i === l) return ("string" === e ? String : Number)(t);
        i = i.call(t, e || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      })(t, "string");
      return "symbol" == typeof t ? t : String(t);
    }
    function u(e) {
      var t = window.intlTelInputGlobals.instances;
      Object.values(t).forEach(function (t) {
        return t[e]();
      });
    }
    function d(t, e, i) {
      var n = document.createElement("script");
      (n.onload = function () {
        u("handleUtils"), e && e();
      }),
        (n.onerror = function () {
          u("rejectUtilsScriptPromise"), i && i();
        }),
        (n.className = "iti-load-utils"),
        (n.async = !0),
        (n.src = t),
        document.body.appendChild(n);
    }
    var i = {
      getInstance: function (t) {
        t = t.getAttribute("data-intl-tel-input-id");
        return window.intlTelInputGlobals.instances[t];
      },
      instances: {},
      documentReady: function () {
        return "complete" === document.readyState;
      },
    },
      c = ("object" == typeof window && (window.intlTelInputGlobals = i), 0),
      p = {
        allowDropdown: !0,
        autoInsertDialCode: !1,
        autoPlaceholder: "polite",
        countrySearch: !0,
        containerClass: "",
        customPlaceholder: null,
        defaultToFirstCountry: !0,
        dropdownContainer: null,
        excludeCountries: [],
        fixDropdownWidth: !0,
        formatAsYouType: !0,
        formatOnDisplay: !0,
        geoIpLookup: null,
        hiddenInput: null,
        i18n: {},
        initialCountry: "",
        nationalMode: !0,
        onlyCountries: [],
        placeholderNumberType: "MOBILE",
        preferredCountries: [],
        showFlags: !0,
        showSelectedDialCode: !1,
        useFullscreenPopup: "undefined" != typeof navigator && "undefined" != typeof window && (/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 500),
        utilsScript: "",
      },
      y = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"],
      g = (function () {
        function o(t) {
          var e = 1 < arguments.length && arguments[1] !== l ? arguments[1] : {},
            i = this,
            n = o;
          if (!(i instanceof n)) throw new TypeError("Cannot call a class as a function");
          (this.id = c++), (this.telInput = t), (this.activeItem = null), (this.highlightedItem = null), (this.options = Object.assign({}, p, e)), (this.hadInitialPlaceholder = Boolean(t.getAttribute("placeholder")));
        }
        var t, e, i;
        return (
          (t = o),
          (e = [
            {
              key: "_init",
              value: function () {
                var t,
                  i = this,
                  e =
                    (this.options.useFullscreenPopup && (this.options.fixDropdownWidth = !1),
                      this.options.countrySearch && !this.options.useFullscreenPopup && (this.options.fixDropdownWidth = !0),
                      this.options.nationalMode && (this.options.autoInsertDialCode = !1),
                      this.options.showSelectedDialCode && (this.options.autoInsertDialCode = !1),
                      this.options.allowDropdown && !this.options.showSelectedDialCode);
                !this.options.showFlags && e && (this.options.showFlags = !0),
                  this.options.useFullscreenPopup && !this.options.dropdownContainer && (this.options.dropdownContainer = document.body),
                  (this.isRTL = !!this.telInput.closest("[dir=rtl]")),
                  "undefined" != typeof Promise
                    ? ((e = new Promise(function (t, e) {
                      (i.resolveAutoCountryPromise = t), (i.rejectAutoCountryPromise = e);
                    })),
                      (t = new Promise(function (t, e) {
                        (i.resolveUtilsScriptPromise = t), (i.rejectUtilsScriptPromise = e);
                      })),
                      (this.promise = Promise.all([e, t])))
                    : ((this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function () { }), (this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function () { })),
                  (this.selectedCountryData = {}),
                  this._processCountryData(),
                  this._generateMarkup(),
                  this._setInitialState(),
                  this._initListeners(),
                  this._initRequests();
              },
            },
            {
              key: "_processCountryData",
              value: function () {
                this._processAllCountries(),
                  this._processDialCodes(),
                  this._processPreferredCountries(),
                  this._translateCountryNames(),
                  (this.options.onlyCountries.length || this.options.i18n) && this.countries.sort(this._countryNameSort);
              },
            },
            {
              key: "_addToDialCodeMap",
              value: function (t, e, i) {
                e.length > this.dialCodeMaxLen && (this.dialCodeMaxLen = e.length), this.dialCodeToIso2Map.hasOwnProperty(e) || (this.dialCodeToIso2Map[e] = []);
                for (var n = 0; n < this.dialCodeToIso2Map[e].length; n++) if (this.dialCodeToIso2Map[e][n] === t) return;
                i = i !== l ? i : this.dialCodeToIso2Map[e].length;
                this.dialCodeToIso2Map[e][i] = t;
              },
            },
            {
              key: "_processAllCountries",
              value: function () {
                var e, i;
                this.options.onlyCountries.length
                  ? ((e = this.options.onlyCountries.map(function (t) {
                    return t.toLowerCase();
                  })),
                    (this.countries = n.filter(function (t) {
                      return -1 < e.indexOf(t.iso2);
                    })))
                  : this.options.excludeCountries.length
                    ? ((i = this.options.excludeCountries.map(function (t) {
                      return t.toLowerCase();
                    })),
                      (this.countries = n.filter(function (t) {
                        return -1 === i.indexOf(t.iso2);
                      })))
                    : (this.countries = n);
              },
            },
            {
              key: "_translateCountryNames",
              value: function () {
                for (var t = 0; t < this.countries.length; t++) {
                  var e = this.countries[t].iso2.toLowerCase();
                  this.options.i18n.hasOwnProperty(e) && (this.countries[t].name = this.options.i18n[e]);
                }
              },
            },
            {
              key: "_countryNameSort",
              value: function (t, e) {
                return t.name < e.name ? -1 : t.name > e.name ? 1 : 0;
              },
            },
            {
              key: "_processDialCodes",
              value: function () {
                (this.dialCodes = {}), (this.dialCodeMaxLen = 0), (this.dialCodeToIso2Map = {});
                for (var t = 0; t < this.countries.length; t++) {
                  var e = this.countries[t];
                  this.dialCodes[e.dialCode] || (this.dialCodes[e.dialCode] = !0), this._addToDialCodeMap(e.iso2, e.dialCode, e.priority);
                }
                for (var i = 0; i < this.countries.length; i++) {
                  var n = this.countries[i];
                  if (n.areaCodes)
                    for (var o = this.dialCodeToIso2Map[n.dialCode][0], s = 0; s < n.areaCodes.length; s++) {
                      for (var a = n.areaCodes[s], r = 1; r < a.length; r++) {
                        var l = n.dialCode + a.substr(0, r);
                        this._addToDialCodeMap(o, l), this._addToDialCodeMap(n.iso2, l);
                      }
                      this._addToDialCodeMap(n.iso2, n.dialCode + a);
                    }
                }
              },
            },
            {
              key: "_processPreferredCountries",
              value: function () {
                this.preferredCountries = [];
                for (var t = 0; t < this.options.preferredCountries.length; t++) {
                  var e = this.options.preferredCountries[t].toLowerCase(),
                    e = this._getCountryData(e, !0);
                  e && this.preferredCountries.push(e);
                }
              },
            },
            {
              key: "_createEl",
              value: function (t, e, i) {
                var n = document.createElement(t);
                return (
                  e &&
                  Object.entries(e).forEach(function (t) {
                    var t = s(t, 2),
                      e = t[0],
                      t = t[1];
                    return n.setAttribute(e, t);
                  }),
                  i && i.appendChild(n),
                  n
                );
              },
            },
            {
              key: "_generateMarkup",
              value: function () {
                this.telInput.classList.add("iti__tel-input"),
                  this.telInput.hasAttribute("autocomplete") || (this.telInput.form && this.telInput.form.hasAttribute("autocomplete")) || this.telInput.setAttribute("autocomplete", "off");
                var t,
                  e = this.options,
                  i = e.allowDropdown,
                  n = e.showSelectedDialCode,
                  o = e.showFlags,
                  s = e.containerClass,
                  a = e.hiddenInput,
                  r = e.dropdownContainer,
                  l = e.fixDropdownWidth,
                  u = e.useFullscreenPopup,
                  e = e.countrySearch,
                  d = "iti",
                  s =
                    (i && (d += " iti--allow-dropdown"),
                      n && (d += " iti--show-selected-dial-code"),
                      o && (d += " iti--show-flags"),
                      s && (d += " ".concat(s)),
                      u || (d += " iti--inline-dropdown"),
                      this._createEl("div", { class: d })),
                  d = (this.telInput.parentNode.insertBefore(s, this.telInput), i || o || n);
                d && (this.flagsContainer = this._createEl("div", { class: "iti__flag-container" }, s)),
                  s.appendChild(this.telInput),
                  d &&
                  (this.selectedFlag = this._createEl(
                    "div",
                    h(
                      { class: "iti__selected-flag" },
                      i && {
                        role: "combobox",
                        "aria-haspopup": "listbox",
                        "aria-controls": "iti-".concat(this.id, "__country-listbox"),
                        "aria-expanded": "false",
                        "aria-label": this.options.i18n.selectedCountryAriaLabel || "Selected country",
                      }
                    ),
                    this.flagsContainer
                  )),
                  o && (this.selectedFlagInner = this._createEl("div", { class: "iti__flag" }, this.selectedFlag)),
                  this.selectedFlag && this.telInput.disabled && this.selectedFlag.setAttribute("aria-disabled", "true"),
                  n && (this.selectedDialCode = this._createEl("div", { class: "iti__selected-dial-code" }, this.selectedFlag)),
                  i &&
                  (this.telInput.disabled || this.selectedFlag.setAttribute("tabindex", "0"),
                    (this.dropdownArrow = this._createEl("div", { class: "iti__arrow" }, this.selectedFlag)),
                    (this.dropdownContent = this._createEl("div", { class: "iti__dropdown-content iti__hide ".concat(l ? "" : "iti--flexible-dropdown-width") })),
                    e && (this.searchInput = this._createEl("input", { type: "text", class: "iti__search-input", placeholder: this.options.i18n.searchPlaceholder || "Search" }, this.dropdownContent)),
                    (this.countryList = this._createEl(
                      "ul",
                      { class: "iti__country-list", id: "iti-".concat(this.id, "__country-listbox"), role: "listbox", "aria-label": this.options.i18n.countryListAriaLabel || "List of countries" },
                      this.dropdownContent
                    )),
                    this.preferredCountries.length && !e && (this._appendListItems(this.preferredCountries, "iti__preferred", !0), this._createEl("li", { class: "iti__divider", "aria-hidden": "true" }, this.countryList)),
                    this._appendListItems(this.countries, "iti__standard"),
                    (r
                      ? ((d = "iti iti--container"), (d += u ? " iti--fullscreen-popup" : " iti--inline-dropdown"), e && (d += " iti--country-search"), (this.dropdown = this._createEl("div", { class: d })), this.dropdown)
                      : this.flagsContainer
                    ).appendChild(this.dropdownContent)),
                  a &&
                  ((i = null !== (n = a((o = this.telInput.getAttribute("name")))) && "object" == typeof n ? ((t = n.phone || o), n.country || "".concat(t, "_country")) : "".concat((t = n || o), "_country")), t) &&
                  ((this.hiddenInput = this._createEl("input", { type: "hidden", name: t })),
                    (this.hiddenInputCountry = this._createEl("input", { type: "hidden", name: i })),
                    s.appendChild(this.hiddenInput),
                    s.appendChild(this.hiddenInputCountry));
              },
            },
            {
              key: "_appendListItems",
              value: function (t, e, i) {
                for (var n = 0; n < t.length; n++) {
                  var o = t[n],
                    s = i ? "-preferred" : "",
                    s = this._createEl(
                      "li",
                      {
                        id: "iti-".concat(this.id, "__item-").concat(o.iso2).concat(s),
                        class: "iti__country ".concat(e),
                        tabindex: "-1",
                        role: "option",
                        "data-dial-code": o.dialCode,
                        "data-country-code": o.iso2,
                        "aria-selected": "false",
                      },
                      this.countryList
                    ),
                    a = ((o.nodeById[this.id] = s), "");
                  this.options.showFlags && (a += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(o.iso2, "'></div></div>")),
                    (a = (a += "<span class='iti__country-name'>".concat(o.name, "</span>")) + "<span class='iti__dial-code'>+".concat(o.dialCode, "</span>")),
                    s.insertAdjacentHTML("beforeend", a);
                }
              },
            },
            {
              key: "_setInitialState",
              value: function () {
                var t = 0 < arguments.length && arguments[0] !== l && arguments[0],
                  e = this.telInput.getAttribute("value"),
                  i = this.telInput.value,
                  e = e && "+" === e.charAt(0) && (!i || "+" !== i.charAt(0)) ? e : i,
                  i = this._getDialCode(e),
                  n = this._isRegionlessNanp(e),
                  o = this.options,
                  s = o.initialCountry,
                  a = o.autoInsertDialCode,
                  o = o.defaultToFirstCountry;
                i && !n
                  ? this._updateFlagFromNumber(e)
                  : ("auto" === s && !t) ||
                  ((t = s ? s.toLowerCase() : "") && this._getCountryData(t, !0)
                    ? this._setFlag(t)
                    : i && n
                      ? this._setFlag("us")
                      : o && !e
                        ? ((this.defaultCountry = (this.preferredCountries.length ? this.preferredCountries : this.countries)[0].iso2), this._setFlag(this.defaultCountry))
                        : this._setFlag(),
                    e) ||
                  !a ||
                  (this.telInput.value = "+".concat(this.selectedCountryData.dialCode)),
                  e && this._updateValFromNumber(e);
              },
            },
            {
              key: "_initListeners",
              value: function () {
                this._initKeyListeners(), this.options.autoInsertDialCode && this._initBlurListeners(), this.options.allowDropdown && this._initDropdownListeners(), this.hiddenInput && this._initHiddenInputListener();
              },
            },
            {
              key: "_initHiddenInputListener",
              value: function () {
                var t = this;
                (this._handleHiddenInputSubmit = function () {
                  (t.hiddenInput.value = t.getNumber()), (t.hiddenInputCountry.value = t.getSelectedCountryData().iso2);
                }),
                  this.telInput.form && this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
              },
            },
            {
              key: "_initDropdownListeners",
              value: function () {
                var e = this,
                  t =
                    ((this._handleLabelClick = function (t) {
                      e.dropdownContent.classList.contains("iti__hide") ? e.telInput.focus() : t.preventDefault();
                    }),
                      this.telInput.closest("label"));
                t && t.addEventListener("click", this._handleLabelClick),
                  (this._handleClickSelectedFlag = function () {
                    !e.dropdownContent.classList.contains("iti__hide") || e.telInput.disabled || e.telInput.readOnly || e._showDropdown();
                  }),
                  this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag),
                  (this._handleFlagsContainerKeydown = function (t) {
                    e.dropdownContent.classList.contains("iti__hide") && ["ArrowUp", "ArrowDown", " ", "Enter"].includes(t.key) && (t.preventDefault(), t.stopPropagation(), e._showDropdown()),
                      "Tab" === t.key && e._closeDropdown();
                  }),
                  this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
              },
            },
            {
              key: "_initRequests",
              value: function () {
                var t = this;
                this.options.utilsScript && !window.intlTelInputUtils
                  ? window.intlTelInputGlobals.documentReady()
                    ? window.intlTelInputGlobals.loadUtils(this.options.utilsScript)
                    : window.addEventListener("load", function () {
                      window.intlTelInputGlobals.loadUtils(t.options.utilsScript);
                    })
                  : this.resolveUtilsScriptPromise(),
                  "auto" !== this.options.initialCountry || this.selectedCountryData.iso2 ? this.resolveAutoCountryPromise() : this._loadAutoCountry();
              },
            },
            {
              key: "_loadAutoCountry",
              value: function () {
                var e = this;
                window.intlTelInputGlobals.autoCountry
                  ? this.handleAutoCountry()
                  : window.intlTelInputGlobals.startedLoadingAutoCountry ||
                  ((window.intlTelInputGlobals.startedLoadingAutoCountry = !0),
                    "function" == typeof this.options.geoIpLookup &&
                    this.options.geoIpLookup(
                      function () {
                        var t = (0 < arguments.length && arguments[0] !== l ? arguments[0] : "").toLowerCase();
                        t && e._getCountryData(t, !0)
                          ? ((window.intlTelInputGlobals.autoCountry = t),
                            setTimeout(function () {
                              return u("handleAutoCountry");
                            }))
                          : (e._setInitialState(!0), u("rejectAutoCountryPromise"));
                      },
                      function () {
                        return u("rejectAutoCountryPromise");
                      }
                    ));
              },
            },
            {
              key: "_initKeyListeners",
              value: function () {
                var o = this,
                  s = !1;
                (this._handleKeyEvent = function (t) {
                  o._updateFlagFromNumber(o.telInput.value) && o._triggerCountryChange();
                  var e,
                    i = t && t.data && /[^+0-9]/.test(t.data),
                    n = t && "insertFromPaste" === t.inputType && o.telInput.value;
                  i || n ? (s = !0) : /[^+0-9]/.test(o.telInput.value) || (s = !1),
                    o.options.formatAsYouType &&
                    !s &&
                    "insertFromPaste" !== t.inputType &&
                    ((i = o.telInput.selectionStart),
                      (n = o.telInput.value.substring(0, i).replace(/[^+0-9]/g, "").length),
                      (t = t && "deleteContentForward" === t.inputType),
                      (e = o._formatNumberAsYouType()),
                      (n = o._translateCursorPosition(n, e, i, t)),
                      (o.telInput.value = e),
                      o.telInput.setSelectionRange(n, n));
                }),
                  this.telInput.addEventListener("input", this._handleKeyEvent),
                  (this._handleClipboardEvent = function () {
                    setTimeout(o._handleKeyEvent);
                  }),
                  this.telInput.addEventListener("cut", this._handleClipboardEvent),
                  this.telInput.addEventListener("paste", this._handleClipboardEvent);
              },
            },
            {
              key: "_translateCursorPosition",
              value: function (t, e, i, n) {
                if (0 === i && !n) return 0;
                for (var o = 0, s = 0; s < e.length; s++) {
                  if ((/[+0-9]/.test(e[s]) && o++, o === t && !n)) return s + 1;
                  if (n && o === t + 1) return s;
                }
                return e.length;
              },
            },
            {
              key: "_cap",
              value: function (t) {
                var e = this.telInput.getAttribute("maxlength");
                return e && t.length > e ? t.substr(0, e) : t;
              },
            },
            {
              key: "_initBlurListeners",
              value: function () {
                var t = this;
                (this._handleSubmitOrBlurEvent = function () {
                  t._removeEmptyDialCode();
                }),
                  this.telInput.form && this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent),
                  this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
              },
            },
            {
              key: "_removeEmptyDialCode",
              value: function () {
                var t;
                "+" !== this.telInput.value.charAt(0) || ((t = this._getNumeric(this.telInput.value)) && this.selectedCountryData.dialCode !== t) || (this.telInput.value = "");
              },
            },
            {
              key: "_getNumeric",
              value: function (t) {
                return t.replace(/\D/g, "");
              },
            },
            {
              key: "_trigger",
              value: function (t) {
                t = new Event(t, { bubbles: !0, cancelable: !0 });
                this.telInput.dispatchEvent(t);
              },
            },
            {
              key: "_showDropdown",
              value: function () {
                var t;
                this.options.fixDropdownWidth && (this.dropdownContent.style.width = "".concat(this.telInput.offsetWidth, "px")),
                  this.dropdownContent.classList.remove("iti__hide"),
                  this.selectedFlag.setAttribute("aria-expanded", "true"),
                  this._setDropdownPosition(),
                  this.options.countrySearch
                    ? ((t = this.countryList.firstElementChild) && this._highlightListItem(t, !1), this.searchInput.focus())
                    : this.activeItem && (this._highlightListItem(this.activeItem, !1), this._scrollTo(this.activeItem, !0)),
                  this._bindDropdownListeners(),
                  this.dropdownArrow.classList.add("iti__arrow--up"),
                  this._trigger("open:countrydropdown");
              },
            },
            {
              key: "_toggleClass",
              value: function (t, e, i) {
                i && !t.classList.contains(e) ? t.classList.add(e) : !i && t.classList.contains(e) && t.classList.remove(e);
              },
            },
            {
              key: "_setDropdownPosition",
              value: function () {
                var t,
                  e,
                  i,
                  n,
                  o,
                  s = this;
                this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.dropdown),
                  this.options.useFullscreenPopup ||
                  ((t = this.telInput.getBoundingClientRect()),
                    (o = document.documentElement.scrollTop),
                    (e = t.top + o),
                    (i = this.dropdownContent.offsetHeight),
                    (n = e + this.telInput.offsetHeight + i < o + window.innerHeight),
                    (n = !this.options.countrySearch && !n && o < e - i),
                    this._toggleClass(this.dropdownContent, "iti__dropdown-content--dropup", n),
                    this.options.dropdownContainer &&
                    ((o = n ? 0 : this.telInput.offsetHeight),
                      (this.dropdown.style.top = "".concat(e + o, "px")),
                      (this.dropdown.style.left = "".concat(t.left + document.body.scrollLeft, "px")),
                      (this._handleWindowScroll = function () {
                        return s._closeDropdown();
                      }),
                      window.addEventListener("scroll", this._handleWindowScroll)));
              },
            },
            {
              key: "_bindDropdownListeners",
              value: function () {
                var e,
                  i = this,
                  t =
                    ((this._handleMouseoverCountryList = function (t) {
                      t = t.target.closest(".iti__country");
                      t && i._highlightListItem(t, !1);
                    }),
                      this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList),
                      (this._handleClickCountryList = function (t) {
                        t = t.target.closest(".iti__country");
                        t && i._selectListItem(t);
                      }),
                      this.countryList.addEventListener("click", this._handleClickCountryList),
                      !0),
                  n =
                    ((this._handleClickOffToClose = function () {
                      t || i._closeDropdown(), (t = !1);
                    }),
                      document.documentElement.addEventListener("click", this._handleClickOffToClose),
                      ""),
                  o = null;
                (this._handleKeydownOnDropdown = function (t) {
                  ["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(t.key) &&
                    (t.preventDefault(), t.stopPropagation(), "ArrowUp" === t.key || "ArrowDown" === t.key ? i._handleUpDownKey(t.key) : "Enter" === t.key ? i._handleEnterKey() : "Escape" === t.key && i._closeDropdown()),
                    !i.options.countrySearch &&
                    /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(t.key) &&
                    (t.stopPropagation(),
                      o && clearTimeout(o),
                      (n += t.key.toLowerCase()),
                      i._searchForCountry(n),
                      (o = setTimeout(function () {
                        n = "";
                      }, 1e3)));
                }),
                  document.addEventListener("keydown", this._handleKeydownOnDropdown),
                  this.options.countrySearch &&
                  ((e = null),
                    (this._handleSearchChange = function () {
                      e && clearTimeout(e),
                        (e = setTimeout(function () {
                          var t;
                          (t = i.searchInput.value.trim()) ? i._filterCountries(t) : i._filterCountries("", !0), (e = null);
                        }, 100));
                    }),
                    this.searchInput.addEventListener("input", this._handleSearchChange),
                    this.searchInput.addEventListener("click", function (t) {
                      return t.stopPropagation();
                    }));
              },
            },
            {
              key: "_normaliseString",
              value: function () {
                return (0 < arguments.length && arguments[0] !== l ? arguments[0] : "")
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .toLowerCase();
              },
            },
            {
              key: "_filterCountries",
              value: function (t) {
                for (var e = 1 < arguments.length && arguments[1] !== l && arguments[1], i = !0, n = ((this.countryList.innerHTML = ""), this._normaliseString(t)), o = 0; o < this.countries.length; o++) {
                  var s = this.countries[o],
                    a = this._normaliseString(s.name),
                    r = "+".concat(s.dialCode);
                  (e || a.includes(n) || r.includes(n) || s.iso2.includes(n)) && (this.countryList.appendChild(s.nodeById[this.id]), i) && (this._highlightListItem(s.nodeById[this.id], !1), (i = !1));
                }
              },
            },
            {
              key: "_handleUpDownKey",
              value: function (t) {
                var e = "ArrowUp" === t ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
                e
                  ? e.classList.contains("iti__divider") && (e = "ArrowUp" === t ? e.previousElementSibling : e.nextElementSibling)
                  : 1 < this.countryList.childElementCount && (e = "ArrowUp" === t ? this.countryList.lastElementChild : this.countryList.firstElementChild),
                  e && ((t = !this.options.countrySearch), this._highlightListItem(e, t), this.options.countrySearch) && this._scrollTo(e, !1);
              },
            },
            {
              key: "_handleEnterKey",
              value: function () {
                this.highlightedItem && this._selectListItem(this.highlightedItem);
              },
            },
            {
              key: "_searchForCountry",
              value: function (t) {
                for (var e = 0; e < this.countries.length; e++)
                  if (this._startsWith(this.countries[e].name, t)) {
                    var i = this.countries[e].nodeById[this.id];
                    this._highlightListItem(i, !1), this._scrollTo(i, !0);
                    break;
                  }
              },
            },
            {
              key: "_startsWith",
              value: function (t, e) {
                return t.substr(0, e.length).toLowerCase() === e;
              },
            },
            {
              key: "_updateValFromNumber",
              value: function (t) {
                var e, i, n;
                this.options.formatOnDisplay &&
                  window.intlTelInputUtils &&
                  this.selectedCountryData &&
                  ((e = this.options.nationalMode || ("+" !== t.charAt(0) && !this.options.showSelectedDialCode)),
                    (i = (n = intlTelInputUtils.numberFormat).NATIONAL),
                    (n = n.INTERNATIONAL),
                    (t = intlTelInputUtils.formatNumber(t, this.selectedCountryData.iso2, e ? i : n))),
                  (t = this._beforeSetNumber(t)),
                  (this.telInput.value = t);
              },
            },
            {
              key: "_updateFlagFromNumber",
              value: function (t) {
                var e = t.indexOf("+"),
                  e = e ? t.substring(e) : t,
                  t = this.selectedCountryData.dialCode,
                  i =
                    (e && "1" === t && "+" !== e.charAt(0) && ("1" !== e.charAt(0) && (e = "1".concat(e)), (e = "+".concat(e))),
                      this.options.showSelectedDialCode && t && "+" !== e.charAt(0) && (e = "+".concat(t).concat(e)),
                      this._getDialCode(e, !0)),
                  n = this._getNumeric(e),
                  o = null;
                if (i) {
                  var s = this.dialCodeToIso2Map[this._getNumeric(i)],
                    i = -1 !== s.indexOf(this.selectedCountryData.iso2) && n.length <= i.length - 1;
                  if (!("1" === t && this._isRegionlessNanp(n)) && !i)
                    for (var a = 0; a < s.length; a++)
                      if (s[a]) {
                        o = s[a];
                        break;
                      }
                } else "+" === e.charAt(0) && n.length ? (o = "") : (e && "+" !== e) || this.selectedCountryData.iso2 || (o = this.defaultCountry);
                return null !== o && this._setFlag(o);
              },
            },
            {
              key: "_isRegionlessNanp",
              value: function (t) {
                var t = this._getNumeric(t);
                return "1" === t.charAt(0) && ((t = t.substr(1, 3)), -1 !== y.indexOf(t));
              },
            },
            {
              key: "_highlightListItem",
              value: function (t, e) {
                var i = this.highlightedItem;
                i && i.classList.remove("iti__highlight"),
                  (this.highlightedItem = t),
                  this.highlightedItem.classList.add("iti__highlight"),
                  this.selectedFlag.setAttribute("aria-activedescendant", t.getAttribute("id")),
                  e && this.highlightedItem.focus();
              },
            },
            {
              key: "_getCountryData",
              value: function (t, e) {
                for (var i = 0; i < this.countries.length; i++) if (this.countries[i].iso2 === t) return this.countries[i];
                if (e) return null;
                throw new Error("No country data for '".concat(t, "'"));
              },
            },
            {
              key: "_setFlag",
              value: function (t) {
                var e = this.options,
                  i = e.allowDropdown,
                  n = e.showSelectedDialCode,
                  o = e.showFlags,
                  e = e.countrySearch,
                  s = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                return (
                  (this.selectedCountryData = t ? this._getCountryData(t, !1) : {}),
                  this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2),
                  o && ((o = t ? "iti__".concat(t) : "iti__globe"), this.selectedFlagInner.setAttribute("class", "iti__flag ".concat(o))),
                  this._setSelectedCountryFlagTitleAttribute(t, n),
                  n &&
                  ((o = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : ""),
                    (this.selectedDialCode.innerHTML = o),
                    (n = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth()),
                    this.isRTL ? (this.telInput.style.paddingRight = "".concat(n + 6, "px")) : (this.telInput.style.paddingLeft = "".concat(n + 6, "px"))),
                  this._updatePlaceholder(),
                  i &&
                  !e &&
                  ((o = this.activeItem) && (o.classList.remove("iti__active"), o.setAttribute("aria-selected", "false")), t) &&
                  ((n = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(t, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(t))).setAttribute(
                    "aria-selected",
                    "true"
                  ),
                    n.classList.add("iti__active"),
                    (this.activeItem = n)),
                  s.iso2 !== t
                );
              },
            },
            {
              key: "_setSelectedCountryFlagTitleAttribute",
              value: function (t, e) {
                this.selectedFlag &&
                  ((e = t && !e ? "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : t ? this.selectedCountryData.name : "Unknown"), this.selectedFlag.setAttribute("title", e));
              },
            },
            {
              key: "_getHiddenSelectedFlagWidth",
              value: function () {
                var t = this.telInput.parentNode.cloneNode(),
                  e = ((t.style.visibility = "hidden"), document.body.appendChild(t), this.flagsContainer.cloneNode()),
                  i = (t.appendChild(e), this.selectedFlag.cloneNode(!0)),
                  e = (e.appendChild(i), i.offsetWidth);
                return t.parentNode.removeChild(t), e;
              },
            },
            {
              key: "_updatePlaceholder",
              value: function () {
                var t = this.options,
                  e = t.autoPlaceholder,
                  i = t.placeholderNumberType,
                  n = t.nationalMode,
                  t = t.customPlaceholder,
                  e = "aggressive" === e || (!this.hadInitialPlaceholder && "polite" === e);
                window.intlTelInputUtils &&
                  e &&
                  ((e = intlTelInputUtils.numberType[i]),
                    (i = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, n, e) : ""),
                    (i = this._beforeSetNumber(i)),
                    "function" == typeof t && (i = t(i, this.selectedCountryData)),
                    this.telInput.setAttribute("placeholder", i));
              },
            },
            {
              key: "_selectListItem",
              value: function (t) {
                var e = this._setFlag(t.getAttribute("data-country-code"));
                this._closeDropdown(), this._updateDialCode(t.getAttribute("data-dial-code")), this.telInput.focus(), e && this._triggerCountryChange();
              },
            },
            {
              key: "_closeDropdown",
              value: function () {
                this.dropdownContent.classList.add("iti__hide"),
                  this.selectedFlag.setAttribute("aria-expanded", "false"),
                  this.selectedFlag.removeAttribute("aria-activedescendant"),
                  this.dropdownArrow.classList.remove("iti__arrow--up"),
                  document.removeEventListener("keydown", this._handleKeydownOnDropdown),
                  this.options.countrySearch && this.searchInput.removeEventListener("input", this._handleSearchChange),
                  document.documentElement.removeEventListener("click", this._handleClickOffToClose),
                  this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList),
                  this.countryList.removeEventListener("click", this._handleClickCountryList),
                  this.options.dropdownContainer &&
                  (this.options.useFullscreenPopup || window.removeEventListener("scroll", this._handleWindowScroll), this.dropdown.parentNode) &&
                  this.dropdown.parentNode.removeChild(this.dropdown),
                  this._trigger("close:countrydropdown");
              },
            },
            {
              key: "_scrollTo",
              value: function (t, e) {
                var i = this.countryList,
                  n = document.documentElement.scrollTop,
                  o = i.offsetHeight,
                  s = i.getBoundingClientRect().top + n,
                  a = s + o,
                  r = t.offsetHeight,
                  t = t.getBoundingClientRect().top + n,
                  n = t + r,
                  l = t - s + i.scrollTop,
                  u = o / 2 - r / 2;
                t < s ? (e && (l -= u), (i.scrollTop = l)) : a < n && (e && (l += u), (i.scrollTop = l - (o - r)));
              },
            },
            {
              key: "_updateDialCode",
              value: function (t) {
                var e,
                  i = this.telInput.value,
                  t = "+".concat(t);
                "+" === i.charAt(0) ? ((e = (e = this._getDialCode(i)) ? i.replace(e, t) : t), (this.telInput.value = e)) : this.options.autoInsertDialCode && (this.telInput.value = e = i ? t + i : t);
              },
            },
            {
              key: "_getDialCode",
              value: function (t, e) {
                var i = "";
                if ("+" === t.charAt(0))
                  for (var n = "", o = 0; o < t.length; o++) {
                    var s = t.charAt(o);
                    if (!isNaN(parseInt(s, 10))) {
                      if (((n += s), e)) this.dialCodeToIso2Map[n] && (i = t.substr(0, o + 1));
                      else if (this.dialCodes[n]) {
                        i = t.substr(0, o + 1);
                        break;
                      }
                      if (n.length === this.dialCodeMaxLen) break;
                    }
                  }
                return i;
              },
            },
            {
              key: "_getFullNumber",
              value: function () {
                var t = this.telInput.value.trim(),
                  e = this.selectedCountryData.dialCode,
                  i = this._getNumeric(t),
                  i = this.options.showSelectedDialCode && !this.options.nationalMode && "+" !== t.charAt(0) && e && i ? "+".concat(e) : "";
                return i + t;
              },
            },
            {
              key: "_beforeSetNumber",
              value: function (t) {
                var e;
                return (
                  this.options.showSelectedDialCode && this._getDialCode(t) && ((e = " " === t[(e = "+".concat(this.selectedCountryData.dialCode)).length] || "-" === t[e.length] ? e.length + 1 : e.length), (t = t.substr(e))),
                  this._cap(t)
                );
              },
            },
            {
              key: "_triggerCountryChange",
              value: function () {
                this._trigger("countrychange");
              },
            },
            {
              key: "_formatNumberAsYouType",
              value: function () {
                var t = this._getFullNumber(),
                  t = window.intlTelInputUtils ? intlTelInputUtils.formatNumberAsYouType(t, this.selectedCountryData.iso2) : t,
                  e = this.selectedCountryData.dialCode;
                return this.options.showSelectedDialCode && !this.options.nationalMode && "+" !== this.telInput.value.charAt(0) && t.includes("+".concat(e)) ? (t.split("+".concat(e))[1] || "").trim() : t;
              },
            },
            {
              key: "handleAutoCountry",
              value: function () {
                "auto" === this.options.initialCountry && ((this.defaultCountry = window.intlTelInputGlobals.autoCountry), this.telInput.value || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise());
              },
            },
            {
              key: "handleUtils",
              value: function () {
                window.intlTelInputUtils && (this.telInput.value && this._updateValFromNumber(this.telInput.value), this.selectedCountryData.iso2) && this._updatePlaceholder(), this.resolveUtilsScriptPromise();
              },
            },
            {
              key: "destroy",
              value: function () {
                var t = this.telInput.form,
                  e =
                    (this.options.allowDropdown &&
                      (this._closeDropdown(),
                        this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag),
                        this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown),
                        (e = this.telInput.closest("label"))) &&
                      e.removeEventListener("click", this._handleLabelClick),
                      this.hiddenInput && t && t.removeEventListener("submit", this._handleHiddenInputSubmit),
                      this.options.autoInsertDialCode && (t && t.removeEventListener("submit", this._handleSubmitOrBlurEvent), this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent)),
                      this.telInput.removeEventListener("input", this._handleKeyEvent),
                      this.telInput.removeEventListener("cut", this._handleClipboardEvent),
                      this.telInput.removeEventListener("paste", this._handleClipboardEvent),
                      this.telInput.removeAttribute("data-intl-tel-input-id"),
                      this.telInput.parentNode);
                e.parentNode.insertBefore(this.telInput, e), e.parentNode.removeChild(e), delete window.intlTelInputGlobals.instances[this.id];
              },
            },
            {
              key: "getExtension",
              value: function () {
                return window.intlTelInputUtils ? intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : "";
              },
            },
            {
              key: "getNumber",
              value: function (t) {
                var e;
                return window.intlTelInputUtils ? ((e = this.selectedCountryData.iso2), intlTelInputUtils.formatNumber(this._getFullNumber(), e, t)) : "";
              },
            },
            {
              key: "getNumberType",
              value: function () {
                return window.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : -99;
              },
            },
            {
              key: "getSelectedCountryData",
              value: function () {
                return this.selectedCountryData;
              },
            },
            {
              key: "getValidationError",
              value: function () {
                var t;
                return window.intlTelInputUtils ? ((t = this.selectedCountryData.iso2), intlTelInputUtils.getValidationError(this._getFullNumber(), t)) : -99;
              },
            },
            {
              key: "isValidNumber",
              value: function (t) {
                var e = this._getFullNumber();
                return window.intlTelInputUtils ? intlTelInputUtils.isPossibleNumber(e, this.selectedCountryData.iso2, t) : null;
              },
            },
            {
              key: "isValidNumberPrecise",
              value: function () {
                var t = this._getFullNumber();
                return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(t, this.selectedCountryData.iso2) : null;
              },
            },
            {
              key: "setCountry",
              value: function (t) {
                t = t.toLowerCase();
                this.selectedCountryData.iso2 !== t && (this._setFlag(t), this._updateDialCode(this.selectedCountryData.dialCode), this._triggerCountryChange());
              },
            },
            {
              key: "setNumber",
              value: function (t) {
                var e = this._updateFlagFromNumber(t);
                this._updateValFromNumber(t), e && this._triggerCountryChange();
              },
            },
            {
              key: "setPlaceholderNumberType",
              value: function (t) {
                (this.options.placeholderNumberType = t), this._updatePlaceholder();
              },
            },
          ]) && a(t.prototype, e),
          i && a(t, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          o
        );
      })();
    return (
      (i.getCountryData = function () {
        return n;
      }),
      (i.loadUtils = function (i) {
        if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
          if (((window.intlTelInputGlobals.startedLoadingUtilsScript = !0), "undefined" != typeof Promise))
            return new Promise(function (t, e) {
              return d(i, t, e);
            });
          d(i);
        }
        return null;
      }),
      (i.defaults = p),
      (i.version = "19.5.7"),
      function (t, e) {
        e = new g(t, e);
        return e._init(), t.setAttribute("data-intl-tel-input-id", e.id), (window.intlTelInputGlobals.instances[e.id] = e);
      }
    );
  });


  return new Component({
    name: 'intlTelInput',
    requiredTargets: '.js-page-wrapper',
    onCreate() { },
    onInit() { },
    onDestroy() { }
  })
}