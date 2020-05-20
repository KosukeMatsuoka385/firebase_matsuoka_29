//1．位置情報の取得に成功した時の処理
function mapsInit(position) {
  try {
    //lat=緯度、lon=経度 を取得
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    //div#mapを「GoogleMap」化
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: lat,
        lng: lon
      }, //緯度,経度を設定
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 10 //Zoom値設定
    });
    google.maps.event.addListener(map, 'click', function (event) {
      addMarker(event.latLng, map);
    });



  } catch (error) {
    console.log("getGeolocation: " + error);
  }
};

//2． 位置情報の取得に失敗した場合の処理
function mapsError(error) {
  let e = "";
  if (error.code == 1) { //1＝位置情報取得が許可されてない（ブラウザの設定）
    e = "位置情報が許可されてません";
  }
  if (error.code == 2) { //2＝現在地を特定できない
    e = "現在位置を特定できません";
  }
  if (error.code == 3) { //3＝位置情報を取得する前にタイムアウトになった場合
    e = "位置情報を取得する前にタイムアウトになりました";
  }
  alert("エラー：" + e);
};

//3.位置情報取得オプション
const set = {
  enableHighAccuracy: true, //より高精度な位置を求める
  maximumAge: 20000, //最後の現在地情報取得が20秒以内であればその情報を再利用する設定
  timeout: 5000 //10秒以内に現在地情報を取得できなければ、処理を終了
};

//Main:位置情報を取得する処理 //getCurrentPosition :or: watchPosition
function initMap() {
  navigator.geolocation.getCurrentPosition(mapsInit, mapsError, set);
}

let typeid;

document.querySelector("#type").onchange = function () {
  console.log(typeid);
  typeid = this.value;
  if (typeid == "ROADMAP") {
    map.setMapTypeId('roadmap')
  }
  if (typeid == "SATELLITE") {
    map.setMapTypeId('satellite')
  }
  if (typeid == "HYBRID") {
    map.setMapTypeId('hybrid')
  }
  if (typeid == "TERRAIN") {
    map.setMapTypeId('terrain')
  }
}


// function initialize() {
//   const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//   var bangalore = {
//       lat: lat,
//       lng: lon
//   };
//   var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 12,
//       center: bangalore
//   });

//   // This event listener calls addMarker() when the map is clicked.

// }

// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map
  });
}