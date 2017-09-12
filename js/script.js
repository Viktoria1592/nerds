var write = document.querySelector('.btn-write');
var popup = document.querySelector('.pop-up');
var close = popup.querySelector('.modal-close');
var overLay = document.querySelector('.modal-overlay');
var login = popup.querySelector('[name=name]');
var form = popup.querySelector('form');
var email = popup.querySelector('[name=email]');
var storage = localStorage.getItem('login');

write.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.add('pop-up-active');
    overLay.classList.add('modal-overlay-active');
    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});

close.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.remove('pop-up-active');
    popup.classList.remove('pop-up-error');
    overLay.classList.remove('modal-overlay-active');
});

form.addEventListener('submit', function (event) {
    if (!login.value || !email.value) {
        event.preventDefault();
        popup.classList.add('pop-up-error');
    } else {
        localStorage.setItem('login', login.value);
    }
});

window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        if (
            popup.classList.contains('pop-up-active')) {
            popup.classList.remove('pop-up-active');

        }
        if (
            overLay.classList.contains('modal-overlay-active')) {
            overLay.classList.remove('modal-overlay-active');

        }

    }
});

var image = 'img/Vector%20Smart%20Object%20copy%202.png';

function initMap() {
    var uluru = {
        lat: 59.938816,
        lng: 30.323244
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: 'NЁRDS DESIGN STUDIO',
        icon: image
    });
}
