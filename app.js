$(document).ready(function() {
    getQuote();
    function getQuote() {
        var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";// här lägger du url till api¨
       
        $.getJSON(url, function(data) {
            $("#quote").text('"' + data.quoteText + '"');
            $("#author").text("-" + data.quoteAuthor);
        }); //Stänger .getJSON delen

        $("#newQuote").on("click", function() {
            getQuote();
        }); // Stänger klick-funktionen på #newQuote
    };

});   