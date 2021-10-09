var select = document.getElementsByTagName("SELECT");
var input = document.getElementsByTagName("INPUT");
let options = "";
let init = "https://free.currconv.com/api/v7/convert?q="
let complete = "&compact=ultra&apiKey=6226b17607669d15b38e"

let codes = ['AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB','BRL','BSD',
            'BTC','BTN','BWP','BYN','BYR','BZD','CAD','CDF','CHF','CLF','CLP','CNY','COP','CRC','CUC','CUP','CVE','CZK','DJF','DKK','DOP',
            'DZD','EGP','ERN','ETB','EUR','FJD','FKP','GBP','GEL','GGP','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF',
            'IDR','ILS','IMP','INR','IQD','IRR','ISK','JEP','JMD','JOD','JPY','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK',
            'LBP','LKR','LRD','LSL','LTL','LVL','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRO','MUR','MVR','MWK','MXN','MYR','MZN',
            'NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD',
            'SCR','SDG','SEK','SGD','SHP','SLL','SOS','SRD','STD','SVC','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TWD','TZS',
            'UAH','UGX','USD','UYU','UZS','VEF','VND','VUV','WST','XAF','XAG','XAU','XCD','XDR','XOF','XPF','YER','ZAR','ZMK','ZMW','ZWL']


for (let i = 0; i < codes.length; i++) {
  let item = codes[i];
  options = options + "<option value="+item+">"+item+"</option>";
}

for (let i = 0; i < select.length; i++) {
  select[i].innerHTML = options;
}

function convert2() {
    let from = select[0].value;
    let to = select[1].value;
    let query = from+"_"+to;
    let url = init+query+complete;
    fetch(url)
        .then(response => response.json())
        .then(json => {
            let rate = json[query];
            let from = input[0].value;
            input[1].value = from * rate;
        })
}

function convert1() {
  let from = select[0].value;
  let to = select[1].value;
  let query = from + "_" + to;
  let url = init + query + complete;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      let rate = json[query];
      let to = input[1].value;
      input[0].value = to / rate;
    });
}

input[0].addEventListener("keyup", () => convert2());
input[1].addEventListener("keyup", () => convert1());