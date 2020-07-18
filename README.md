# patch-remove_unnecessary_strings
苗字と名前の間のスペースなどの表記の揺らぎを無くしたい。パッチ

ss:
https://docs.google.com/spreadsheets/d/1ZeHQKOepuPm7v5fAFXKiQiPdB4S87H8uHSG4bhxpu0k/edit#gid=305111025


hansya~からコード転用
手順：
#### 1. make_cmdurlファイルだけをpull　（pullできなかったら普通にコピペ）
#### 2. ss側でdata, out_putの名前の空シートを作っておく（コードの上に定義されてる表記に合わせる
#### 3. out_putはテスト出力用。
最終的にはdataに入れた文字列そのものに変更を加えるようになる。

<br>

その他：
* 出力するシートはwriteToSheetの引数で指定する
* clearContentの中のシート指定も、開発段階に応じてdataシート、out_putシートに切り替える。
