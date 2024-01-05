function fixValue() {

  //  スプレッドシートの読み込み 
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const ruleSheet = spreadsheet.getSheetByName('Rule'); // 基本のルールシート
  const inputSheet = spreadsheet.getSheetByName('database');// 入力シート
  const outputSheet = spreadsheet.getSheetByName(ruleSheet.getRange("E2").getValue());// 出力シート(月によって変化)

  const userNum = ruleSheet.getRange("D2").getValue(); // 利用者数
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
      currentTime.getMinutes() >= targetTime.getMinutes() && currentTime.getMinutes() < targetTime.getMinutes() + 30.0 &&
      currentTime.getSeconds() >= targetTime.getSeconds() && 
      isHoliday_(currentTime) === false) {

    // ユーザー数ループ
    for (targetRow = 2;targetRow <= userNum+1;targetRow++){ // activeButtonがOff(長期休みなど)の時は動作しない
      var activeCheckButton = ruleSheet.getRange(targetRow,7); // 7はチェックボックスの列数

      if (activeCheckButton == true){
        fixedValue = inputSheet.getRange(targetRow,targetCol).getValue(); // 固定したい値を設定
        outputSheet.getRange(targetRow,today + 2).setValue(fixedValue); //設定する値
      }
    }
  }
}
