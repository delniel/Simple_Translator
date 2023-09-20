$('[type=button]').click(function() {
    let translations = {
        "привет": "hello",
        "хорошо": "good",
        "как дела": "how are you"
    };

    let a = $('input.from').val().toLowerCase();  
    let cleanStr = a.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'<>|[\]\\]/g, "").trim();
    
    if (translations[cleanStr]) {
        a = translations[cleanStr];
    }
    
    $('input.to').val(a.charAt(0).toUpperCase() + a.slice(1));                     
});
