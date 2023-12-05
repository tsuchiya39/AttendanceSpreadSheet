function isHoliday_(date) {
  
  // ①土日の判定  
  const day = date.getDay(); //曜日取得
  if (day === 0 || day === 6) return true;
  
  // ②祝日の判定
  const id = 'ja.japanese#holiday@group.v.calendar.google.com'
  const cal = CalendarApp.getCalendarById(id);
  const events = cal.getEventsForDay(date);
  //なんらかのイベントがある＝祝日
  if (events.length) return true;
  
  // ③特定の休日判定(研究室内休日など)
  const specialHoliday = [
    '0813',
    '0814',
    '0815',
    '0816',
    '0817'
  ];
  
  const mmdd = Utilities.formatDate(date, 'JST', 'MMdd');
  
  //someメソッドでtrue/falseいずれかが返る
  return specialHoliday.some(value => value === mmdd);
  
}
