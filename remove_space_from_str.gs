const ss = SpreadsheetApp.getActiveSpreadsheet(),
    data_sheet = ss.getSheetByName('data'),
    lastRow = data_sheet.getLastRow(),
    output_sheet = ss.getSheetByName('out_put');

const DATA_RANGE = data_sheet.getDataRange().getValues();　//見出しと同じ位置まで

//配列で扱う-------------------------------------------------------------------------
function getArray() {
  let new_data_range = [];
  /* [ 
    [検索ワード(名前), check, cmd生成, 検索クエリ出力, 代表名, 【MW】仕入先, 件数], 
    [株式会社LHP(リープ・ヒューマン・プログレス), , cmd, URL, , , ], 
    [和波 宏幸, true, cmd, URL, , , ], 
  ] 
    Logger.log(DATA_RANGE[0], DATA_RANGE[1]); // 配列で、行が表示される
  */
  for (var i = 1; i < DATA_RANGE.length; i++) {
    //Logger.log(DATA_RANGE[i]);  // 1行ずつ取り出し
    
    // URLを作る-------------------------------------------------------------------------
    console.log('検索ワードは：' + DATA_RANGE[i][0]);

    new_data_range.push( DATA_RANGE[i]); //新しい配列にいれる
  }
  //Logger.log(new_data_range);
  writeToSheet(output_sheet,new_data_range);
  //Browser.msgBox("Here's  made!!", Browser.Buttons.OK);
}

function writeToSheet(sheet_name,data_range) {
  sheet_name.getRange(2, 1, data_range.length, data_range[0].length).setValues(data_range);
}

function clearContent(){
  // 〜行め, 〜列めを起点とし、〜行分まで、〜列分まで
  var result = Browser.msgBox("terminalで実行した?","OKなら消しちゃうよ", Browser.Buttons.OK_CANCEL);
  if (result == "ok"){
    // 消すシートを指定
    data_sheet.getRange(2, 1, DATA_RANGE.length, DATA_RANGE[0].length).clearContent();
  } else {
    return;
  }
}

