let myTotal = 0;// 結果
let myTotalMemory = 0;// 結果保存用
let myInput = "";// 入力
let myCalc = "+";// 演算子
let myFlg = 1; // １回前の入力 0:数字 1:演算子
let myFlgEq =0; // １回前の入力 0:"="以外 1:"="

// クリアボタン
function myC() {
  myInput = "";
  myTotal = "0";
  myTotalMemory = "0";
  myCalc = "+";
  document.myForm.myLine.value = myInput;
}

// 数値入力
function myValue(myData) {
  myFlg = 0; // 1回前は数字入力
  // 小数点は複数使用しない
  if (myInput.match(/\.+/) && myData == ".") {
    // 何もしない
  }else{
    myInput += myData;
  }
  document.myForm.myLine.value = myInput;
  console.log("myInput="+myInput)

  // 1回前の入力が"="なら結果保存用変数をリセットする
  if (myFlgEq == "1") {
    myTotalMemory = 0;
  }
}

// 演算
function myCalculate(myData) {
  // 1回前の入力が数字なら演算実行
  if (myFlg == 0) {
    myFlg = 1;

    // 保存されてる結果があれば使用する
    if (myTotalMemory != 0) {
      myTotal = myTotalMemory;
    }

    // 小数点のみ入力されたら0に置き換える
    if (myInput == ".") {
      myInput = 0;
    }

    myWork = myTotal + myCalc + myInput;
    console.log(myTotal + myCalc + myInput);
    myTotal = eval(myWork);
    console.log("answer:"+myTotal);
    myInput = "";
    document.myForm.myLine.value = myTotal;

    if(String(myTotal).length == 19 && myCalc == "+"){
      alert("JavaScriptは小数の足し算で誤差が出ます(^👻^)")
    }
  }

  // "="が入力されたら結果と演算子を初期化
  if (myData == "=") {
    myFlgEq = 1;
    myTotalMemory = myTotal;// 結果を保存
    myTotal = 0;
    myCalc = "+";
  } else {// "="以外ならmyCalcに保存
    myFlgEq = 0;
    myCalc = myData;
  }
}



