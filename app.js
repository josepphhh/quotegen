$(document).ready(function () {
    var raknare = 0
    var antalKlick = 0

    getQuote(); // första

    function getQuote() {
        raknare += 1
        console.log("antal hämtningar: " + raknare + " Antal klick: " + antalKlick)

        var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";// här lägger du url till api

        $.getJSON(url, function (data) {
            $("#quote").text('"' + data.quoteText + '"');
            $("#author").text("-" + data.quoteAuthor);
        }); //Stänger .getJSON delen
        
    };
    

    $("#newQuote").on("click", function () {
        antalKlick += 1

        getQuote();
    }); // Stänger klick-funktionen på #newQuote

});   