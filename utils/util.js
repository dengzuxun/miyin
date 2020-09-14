export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}




export function getDates(days, todate = getCurrentMonthFirst()) { //todate默认参数是当前日期，可以传入对应时间
  var dateArry = [];
  for (var i = 0; i < days; i++) {
    var dateObj = dateLater(todate, i);
    dateArry.push(dateObj)
  }
  return dateArry;
}
/**
 * 传入时间后几天
 * param：传入时间：dates:"2018-04-02",later:往后多少天
 */
export function dateLater(date = new Date(), step = 1, n = 7) {
  step *= 1000*60*60*24;
  const res = [];
  let startTime = date.getTime()
  let currentDate = date;
  for (let i = 0; i < n; i++) {
    res.push({
      year: formatDate("YYYY",currentDate),
      month: formatDate("MM",currentDate),
      day: formatDate("DD",currentDate),
      week:formatDate("w",currentDate),
    })
    startTime += step;
    currentDate = new Date(startTime)
  }
  return res;
}

export function getCurrentMonthFirst() {
  var date = new Date();
  var todate = date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1) + "-" + (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate());
  return todate;
}
export const formatDate = (format = "YYYY-MM-DD:HH:mm:ss", date = new Date()) => {
  if (!(date instanceof Date)) {
    date = new Date(date)
    if (date.toString() === 'Invalid Date') {
      throw new Error('请传入正确日期格式');
    }
  }

  function doubleNum(num) {
    return num < 10 ? "0" + num : num;
  }
  const weekArr = ['日', '一', '二', '三', '四', '五', '六'];
  const y = date.getFullYear(),
    M = date.getMonth() + 1,
    d = date.getDate(),
    H = date.getHours(),
    h = H > 12 ? H - 12 : H,
    m = date.getMinutes(),
    s = date.getSeconds();
  // 注意key的顺序很重要 多的一定要在前 例如 YYYY 与 YY 如果YY在前YYYY在后遍历的时候 会首先把YY替换之后会留下个YY字母在上面
  var dateFiled = {
    YYYY: y,
    YY: (y + "").slice(2),
    MM: doubleNum(M),
    M: M,
    DD: doubleNum(d),
    D: d,
    HH: doubleNum(H),
    H: H,
    hh: doubleNum(h),
    h: h,
    mm: doubleNum(m),
    m: m,
    ss: doubleNum(s),
    s: s,
    w: weekArr[date.getDay()],
  }
  for (var prop in dateFiled) {
    format = format.replace(prop, dateFiled[prop])
  }
  return format;
}
