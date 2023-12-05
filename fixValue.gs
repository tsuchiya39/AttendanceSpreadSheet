function myFunction() {
  // 利用者数
  const userNum = 3;
  //  スプレッドシートの読み込み
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const inputSheet = spreadsheet.getSheetByName('test');// 入力シート
  const outputSheet = spreadsheet.getSheetByName('シート1');// 出力シート
  var targetRow; //値を固定したいセルの行数 可変
  var targetCol = 6; // 値を固定したいセルの列数
  var fixedValue; // 固定したい値を設定

  // 現在の時刻を取得
  var currentTime = new Date();
  var today = currentTime.getDate(); //今日の日付

  var targetTime = new Date(); // 固定したい時刻を設定
  targetTime.setHours(9); // 例: 9時
  targetTime.setMinutes(0); // 例: 00分
  targetTime.setSeconds(0); // 例: 00秒

  // 指定の時刻になったら値を固定する
  if (currentTime.getHours() === targetTime.getHours() &&
      currentTime.getMinutes() >= targetTime.getMinutes() && currentTime.getMinutes < targetTime.getMinutes() + 30 &&
      currentTime.getSeconds() >= targetTime.getSeconds() && 
      isHoliday_(currentTime) === false) {

    // ユーザー数ループ
    for (targetRow = 2;targetRow <= userNum+1;targetRow++){
      fixedValue = inputSheet.getRange(targetRow,targetCol).getValue(); // 固定したい値を設定
      outputSheet.getRange(targetRow,today + 5).setValue(fixedValue); //設定する値
    }
  }
}
