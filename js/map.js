let map;
const zoom = 8;
let marker;

function initMap() {
    $('input').change(function () {
        $(this).fileExif(function (exif, lat, lng) {
            if (!exif) {
                console.log("exif情報なし");
                return;
            }
            if (!exif.GPSLatitude) {
                console.log("GPS情報なし");
                return;
            }
            var lat = exif.GPSLatitude[0] + (exif.GPSLatitude[1] / 60) + (exif.GPSLatitude[2] / 3600);
            var lng = exif.GPSLongitude[0] + (exif.GPSLongitude[1] / 60) + (exif.GPSLongitude[2] / 3600);
            let center = {
                lat: lat,
                lng: lng
            }
            map = new google.maps.Map(document.getElementById('map'), {
                center: center, // 地図の中心を指定
                zoom: zoom, //Zoom値設定
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            marker = new google.maps.Marker({ // マーカーの追加
                position: center, // マーカーを立てる位置を指定
                map: map // マーカーを立てる地図を指定
            });
        });
    });
};