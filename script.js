!function(e){function t(r){if(a[r])return a[r].exports;var n=a[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var n=a(2),i=(r(n),a(4));r(i)},function(e,t,a){!function(e){"use strict";var t=Array.prototype.slice,a=function(e){return("0"+e.toString()).substr(-2)},r={day_names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbr_day_names:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],month_names:[null,"January","February","March","April","May","June","July","August","September","October","November","December"],abbr_month_names:[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],meridian:["AM","PM"]},n={precision:3,separator:".",delimiter:",",strip_insignificant_zeros:!1},i={unit:"$",precision:2,format:"%u%n",delimiter:",",separator:"."},o={precision:3,separator:".",delimiter:""},l=[null,"kb","mb","gb","tb"],s={defaultLocale:"en",locale:"en",defaultSeparator:".",placeholder:/(?:\{\{|%\{)(.*?)(?:\}\}?)/gm,fallbacks:!1,translations:{}};e.reset=function(){this.defaultLocale=s.defaultLocale,this.locale=s.locale,this.defaultSeparator=s.defaultSeparator,this.placeholder=s.placeholder,this.fallbacks=s.fallbacks,this.translations=s.translations},e.initializeOptions=function(){"undefined"==typeof this.defaultLocale&&null!==this.defaultLocale&&(this.defaultLocale=s.defaultLocale),"undefined"==typeof this.locale&&null!==this.locale&&(this.locale=s.locale),"undefined"==typeof this.defaultSeparator&&null!==this.defaultSeparator&&(this.defaultSeparator=s.defaultSeparator),"undefined"==typeof this.placeholder&&null!==this.placeholder&&(this.placeholder=s.placeholder),"undefined"==typeof this.fallbacks&&null!==this.fallbacks&&(this.fallbacks=s.fallbacks),"undefined"==typeof this.translations&&null!==this.translations&&(this.translations=s.translations)},e.initializeOptions(),e.locales={},e.locales.get=function(t){var a=this[t]||this[e.locale]||this.default;return"function"==typeof a&&(a=a(t)),a instanceof Array==!1&&(a=[a]),a},e.locales.default=function(t){var a,r=[],n=[];return t&&r.push(t),!t&&e.locale&&r.push(e.locale),e.fallbacks&&e.defaultLocale&&r.push(e.defaultLocale),r.forEach(function(t){a=t.split("-")[0],~n.indexOf(t)||n.push(t),e.fallbacks&&a&&a!==t&&!~n.indexOf(a)&&n.push(a)}),r.length||r.push("en"),n},e.pluralization={},e.pluralization.get=function(t){return this[t]||this[e.locale]||this.default},e.pluralization.default=function(e){switch(e){case 0:return["zero","other"];case 1:return["one"];default:return["other"]}},e.currentLocale=function(){return this.locale||this.defaultLocale},e.isSet=function(e){return void 0!==e&&null!==e},e.lookup=function(e,t){t=this.prepareOptions(t);var a,r,n,i=this.locales.get(t.locale);i[0];for(e.constructor===Array&&(e=e.join(this.defaultSeparator)),t.scope&&(e=[t.scope,e].join(this.defaultSeparator));i.length;)if(a=i.shift(),r=e.split(this.defaultSeparator),n=this.translations[a]){for(;r.length&&(n=n[r.shift()],void 0!==n&&null!==n););if(void 0!==n&&null!==n)return n}if(this.isSet(t.defaultValue))return t.defaultValue},e.meridian=function(){var e=this.lookup("time"),t=this.lookup("date");return e&&e.am&&e.pm?[e.am,e.pm]:t&&t.meridian?t.meridian:r.meridian},e.prepareOptions=function(){for(var e,a=t.call(arguments),r={};a.length;)if(e=a.shift(),"object"==typeof e)for(var n in e)e.hasOwnProperty(n)&&(this.isSet(r[n])||(r[n]=e[n]));return r},e.createTranslationOptions=function(e,t){var a=[{scope:e}];return this.isSet(t.defaults)&&(a=a.concat(t.defaults)),this.isSet(t.defaultValue)&&(a.push({message:t.defaultValue}),delete t.defaultValue),a},e.translate=function(e,t){t=this.prepareOptions(t);var a,r=this.createTranslationOptions(e,t),n=r.some(function(e){if(this.isSet(e.scope)?a=this.lookup(e.scope,t):this.isSet(e.message)&&(a=e.message),void 0!==a&&null!==a)return!0},this);return n?("string"==typeof a?a=this.interpolate(a,t):a instanceof Object&&this.isSet(t.count)&&(a=this.pluralize(t.count,a,t)),a):this.missingTranslation(e)},e.interpolate=function(e,t){t=this.prepareOptions(t);var a,r,n,i,o=e.match(this.placeholder);if(!o)return e;for(var r;o.length;)a=o.shift(),n=a.replace(this.placeholder,"$1"),r=this.isSet(t[n])?t[n].toString().replace(/\$/gm,"_#$#_"):this.missingPlaceholder(a,e),i=new RegExp(a.replace(/\{/gm,"\\{").replace(/\}/gm,"\\}")),e=e.replace(i,r);return e.replace("_#$#_","$")},e.pluralize=function(e,t,a){a=this.prepareOptions(a);var r,n,i,o,l;if(r=t instanceof Object?t:this.lookup(t,a),!r)return this.missingTranslation(t);for(n=this.pluralization.get(a.locale),i=n(Math.abs(e));i.length;)if(o=i.shift(),this.isSet(r[o])){l=r[o];break}return a.count=String(e),this.interpolate(l,a)},e.missingTranslation=function(e){var a='[missing "';return a+=this.currentLocale()+".",a+=t.call(arguments).join("."),a+='" translation]'},e.missingPlaceholder=function(e,t){return"[missing "+e+" value]"},e.toNumber=function(e,t){t=this.prepareOptions(t,this.lookup("number.format"),n);var a,r,i=e<0,o=Math.abs(e).toFixed(t.precision).toString(),l=o.split("."),s=[];for(e=l[0],a=l[1];e.length>0;)s.unshift(e.substr(Math.max(0,e.length-3),3)),e=e.substr(0,e.length-3);return r=s.join(t.delimiter),t.strip_insignificant_zeros&&a&&(a=a.replace(/0+$/,"")),t.precision>0&&a&&(r+=t.separator+a),i&&(r="-"+r),r},e.toCurrency=function(e,t){return t=this.prepareOptions(t,this.lookup("number.currency.format"),this.lookup("number.format"),i),e=this.toNumber(e,t),e=t.format.replace("%u",t.unit).replace("%n",e)},e.localize=function(e,t){switch(e){case"currency":return this.toCurrency(t);case"number":return e=this.lookup("number.format"),this.toNumber(t,e);case"percentage":return this.toPercentage(t);default:return e.match(/^(date|time)/)?this.toTime(e,t):t.toString()}},e.parseDate=function(e){var t,a,r;if("object"==typeof e)return e;if(t=e.toString().match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2})([\.,]\d{1,3})?)?(Z|\+00:?00)?/)){for(var n=1;n<=6;n++)t[n]=parseInt(t[n],10)||0;t[2]-=1,r=t[7]?1e3*("0"+t[7]):null,a=t[8]?new Date(Date.UTC(t[1],t[2],t[3],t[4],t[5],t[6],r)):new Date(t[1],t[2],t[3],t[4],t[5],t[6],r)}else"number"==typeof e?(a=new Date,a.setTime(e)):e.match(/([A-Z][a-z]{2}) ([A-Z][a-z]{2}) (\d+) (\d+:\d+:\d+) ([+-]\d+) (\d+)/)?(a=new Date,a.setTime(Date.parse([RegExp.$1,RegExp.$2,RegExp.$3,RegExp.$6,RegExp.$4,RegExp.$5].join(" ")))):e.match(/\d+ \d+:\d+:\d+ [+-]\d+ \d+/)?(a=new Date,a.setTime(Date.parse(e))):(a=new Date,a.setTime(Date.parse(e)));return a},e.strftime=function(t,n){var i=this.lookup("date"),o=e.meridian();i||(i={}),i=this.prepareOptions(i,r);var l=t.getDay(),s=t.getDate(),u=t.getFullYear(),c=t.getMonth()+1,p=t.getHours(),h=p,f=p>11?1:0,d=t.getSeconds(),m=t.getMinutes(),g=t.getTimezoneOffset(),b=Math.floor(Math.abs(g/60)),y=Math.abs(g)-60*b,S=(g>0?"-":"+")+(b.toString().length<2?"0"+b:b)+(y.toString().length<2?"0"+y:y);return h>12?h-=12:0===h&&(h=12),n=n.replace("%a",i.abbr_day_names[l]),n=n.replace("%A",i.day_names[l]),n=n.replace("%b",i.abbr_month_names[c]),n=n.replace("%B",i.month_names[c]),n=n.replace("%d",a(s)),n=n.replace("%e",s),n=n.replace("%-d",s),n=n.replace("%H",a(p)),n=n.replace("%-H",p),n=n.replace("%I",a(h)),n=n.replace("%-I",h),n=n.replace("%m",a(c)),n=n.replace("%-m",c),n=n.replace("%M",a(m)),n=n.replace("%-M",m),n=n.replace("%p",o[f]),n=n.replace("%S",a(d)),n=n.replace("%-S",d),n=n.replace("%w",l),n=n.replace("%y",a(u)),n=n.replace("%-y",a(u).replace(/^0+/,"")),n=n.replace("%Y",u),n=n.replace("%z",S)},e.toTime=function(e,t){var a=this.parseDate(t),r=this.lookup(e);return a.toString().match(/invalid/i)?a.toString():r?this.strftime(a,r):a.toString()},e.toPercentage=function(e,t){return t=this.prepareOptions(t,this.lookup("number.percentage.format"),this.lookup("number.format"),o),e=this.toNumber(e,t),e+"%"},e.toHumanSize=function(e,t){for(var a,r,n=1024,i=e,o=0;i>=n&&o<4;)i/=n,o+=1;return 0===o?(a=this.t("number.human.storage_units.units.byte",{count:i}),r=0):(a=this.t("number.human.storage_units.units."+l[o]),r=i-Math.floor(i)===0?0:1),t=this.prepareOptions(t,{precision:r,format:"%n%u",delimiter:""}),e=this.toNumber(i,t),e=t.format.replace("%u",a).replace("%n",e)},e.t=e.translate,e.l=e.localize,e.p=e.pluralize}(t)},function(e,t,a){(function(e){"use strict";e.translations={};var t={myself:{about:"I am a FullStack developer with some FrontEnd skills"}},a={myself:{about:"Desenvolvedor FullStack com habilidades em FrontEnd."}};e.translations.en=t,e.translations["pt-BR"]=a}).call(t,a(1))},function(e,t){"use strict";function a(){var e="pt-BR";return window.location.hash&&(e=window.location.hash.substring(1)),"en"===e?"en":"pt-BR"}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/^\.|\#|\s*/g,"")}function n(e){return document.querySelector(e)}function i(e){return document.querySelectorAll(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getLanguageFromHash=a,t.toKey=r,t.$=n,t.$$=i},function(e,t,a){(function(e){"use strict";var t=a(3),r=[".myself .about"],n=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,t.getLanguageFromHash)();e.locale=a,r.forEach(function(a){var r=(0,t.$)(a),n=(0,t.toKey)(a);r.innerHTML=e.t(n)})},i=(0,t.$$)(".myself a");Array.prototype.forEach.call(i,function(e){e.onclick=function(e){var t=e.target.hash.substring(1);n(t)}}),n()}).call(t,a(1))}]);