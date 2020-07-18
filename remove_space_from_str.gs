const ss = SpreadsheetApp.getActiveSpreadsheet(),
    data_sheet = ss.getSheetByName('data'),
    lastRow = data_sheet.getLastRow(),
    output_sheet = ss.getSheetByName('output');

const DATA_RANGE = data_sheet.getDataRange().getValues();　//見出しと同じ位置まで取得する

let midashi_num = 5; // write実行時の書き込み起点の位置にも関わる
DATA_RANGE.splice(0, midashi_num) // 先頭から5個要素を削除
//Logger.log(DATA_RANGE)

function getArray() {
  // -------------------------------------------------------------------------------------
  // 方法2：全体を範囲として取得する  getDataRange -> getValue "s"
  // -------------------------------------------------------------------------------------
  // 格納用
  let new_data_range = [];
  
  //valuesから行ごとでーたへ
  // その多次元配列の行の数だけループを回す
  for (var i = 0; i < DATA_RANGE.length; i++) {  // 範囲データの行数の分だけループ
    // そのまま取り出すと行ごとデータになる。
    console.log('DATA_RANGE[i]の中身は： ' + DATA_RANGE[i])
    
    // ------------------------------------------------------
    // さらに１行の要素の数だけなんかするなら
    // ------------------------------------------------------
    for (var j = 0; j < DATA_RANGE[i].length; j++) { // その中で、１行データが持つ要素の数だけループ
      // 値が存在する場合
      if (DATA_RANGE[i][j]) {
        //console.log('DATA_RANGE[i][j]（i行目, j列目）のデータ： ' + values[i][j])　
        /*
        console.log('DATA_RANGE[0][0]（0行目, 0列目）' + DATA_RANGE[0][0]) // A1の値
        console.log('DATA_RANGE[0][1]（0行目, 1列目）' + DATA_RANGE[0][1]) // A2の値
        console.log('DATA_RANGE[1][0]（1行目, 0列目）' + DATA_RANGE[1][0]) // B1の値
        console.log('DATA_RANGE[0][1]（1行目, 1列目）' + DATA_RANGE[1][1]) // B2の値
       */ 
        console.log('----------------置換処理-----------------')
        DATA_RANGE[i][0] = DATA_RANGE[i][0].replace(/[ 　]/g, '')         // 半角＆全角スペース、  g：1つの文字列内に複数存在した時も置き換える
        DATA_RANGE[i][2] = DATA_RANGE[i][2].replace(/[ 　]/g, '')
        console.log('----------------------------------------------------------------')       
      }
    }
    new_data_range.push(DATA_RANGE[i]);
  }
  console.log(new_data_range)
  writeToSheet(data_sheet,new_data_range);
  //Browser.msgBox("Here's  made!!", Browser.Buttons.OK);
}


function writeToSheet(sheet_name,data_range) {
  sheet_name.getRange(midashi_num +1, 1, data_range.length, data_range[0].length).setValues(data_range);
}

function clearContent(){
  // 〜行め, 〜列めを起点とし、〜行分まで、〜列分まで
  var result = Browser.msgBox("terminalで実行した?","OKなら消しちゃうよ", Browser.Buttons.OK_CANCEL);
  if (result == "ok"){
    // 消すシートを指定
    output_sheet.getRange(2, 1, DATA_RANGE.length, DATA_RANGE[0].length).clearContent();
  } else {
    return;
  }
}

