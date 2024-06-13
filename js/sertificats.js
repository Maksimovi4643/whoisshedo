var buttons = document.querySelectorAll('.butsub');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var message = "Здравствуйте, хочу приобрести сертификат !";
        var telegramLink = "https://t.me/anbellex?text=" + encodeURI(message);
        window.open(telegramLink, "_blank");
    });
});
