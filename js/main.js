const ref = firebase.database().ref();

//送信イベント
$("#send").on("click", function () {
  const uname = $("#uname").val();
  const text = $("#text").val();
  let nowDate = $("#nowDate").text();
  console.log(nowDate);
  const msg = {
    uname: uname,
    text: text,
    nowDate: nowDate
  };


  ref.push(msg); //送信する
});

// テキストをEnterkeyで送信
$("#text").on("keydown", function (e) {
  console.log(e);
  if (e.keyCode == 13) {
    const uname = $("#uname").val();
    const text = $("#text").val();
    let nowDate = $("#nowDate").text();
    const msg = {
      uname: uname,
      text: text,
      nowDate: nowDate
    };
    ref.push(msg); //送信する
  }
})


//受信イベント
ref.on("child_added", function (data) {
  const v = data.val(); //オブジェクト変数がvに代入
  const k = data.key; //UniqeKEY: データベース参照
  const nd = data.val();
  const h = '<p>' + v.uname + '<br>' + v.text + '<br>' + nd.nowDate + '</p>';
  $("#output").prepend(h);
});

// 日付
let now = new Date();

function LoadProc() {
  let target = document.getElementById("nowDate");

  let Year = now.getFullYear();
  let Month = now.getMonth() + 1;
  let Date = now.getDate();
  let Hour = now.getHours();
  let Min = now.getMinutes();
  let Sec = now.getSeconds();

  target.innerHTML = Year + "年" + Month + "月" + Date + "日" + Hour + ":" + Min + ":" + Sec;
}
