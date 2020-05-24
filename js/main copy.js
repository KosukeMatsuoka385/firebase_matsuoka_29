const storage = firebase.storage();
const refText = firebase.database().ref();

const file = document.querySelector("#file");
const send = document.querySelector("#send");


//  ボタン送信
file.addEventListener("change", function (e) {
  console.log(e)

  $('img').remove();
  var file = $(this).prop('files')[0];
  if (!file.type.match('image.*')) {
    return;
  }
  var fileReader = new FileReader();
  fileReader.onloadend = function () {
    $('#preview').html('<img  src="' + fileReader.result + '"/>');
  }
  fileReader.readAsDataURL(file);
  $("#send").on("click", function () {
    let file = e.target.files[0];
    let uploadRef = firebase.storage().ref('img').child(file.name).put(file).then(snapshot => {
      let url = snapshot.ref.getDownloadURL().then(url => {
        const path = file.name;
        const imgUrl = url;
        const uname = $("#uname").val();
        const text = $("#text").val();
        let now = new Date(); //Time取得
        let getMonth = now.getMonth();
        let getDate = now.getDate();
        let timeH = now.getHours(); //時間
        let timeM = now.getMinutes(); //分
        if (timeH < 10) {
          timeH = "0" + timeH
        } //数字が一桁の場合０をつける。
        if (timeM < 10) {
          timeM = "0" + timeM
        }
        const time = `${getMonth}/${getDate}   ${timeH}:${timeM}`; //時間：分を"time"に入れる
        const msg = {
          imgpath: path,
          imgUrl: imgUrl,
          uname: uname,
          text: text,
          time: time
        };
        refText.push(msg);
      });
    });
  });
});

// 受信
refText.on("child_added", function (data) {
  console.log(data)
  const v = data.val();

  const dataImgpath = v.imgpath;
  const dataImg = v.imgUrl;
  const dataTime = v.time;
  const dataUname = v.uname;
  const dataText = v.text;
  const dataAll = `
            <div class="card">
              <img src="${dataImg}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${dataUname}</h5>
              <p class="card-text">${dataText}</p>
              <p class="card-text text-right"><small class="text-muted">${dataTime}</small> <button id="del" class="btn">×</button>  </p>
            </div>
            </div>
            `
  $("#output").prepend(dataAll);
  $("#del").on("click", function () {
    flag = confirm("この投稿を削除しますか？");
    if (flag == true) {
      console.log(data.key);
      console.log(dataImgpath);
      firebase.database().ref(data.key).remove().then(function () {
        firebase.storage().ref('img').child(dataImgpath).delete();
        location.reload();
      });
    } else {}
  });
});