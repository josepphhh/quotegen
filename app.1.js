$(document).ready(function () {

    function getQuote() {
        var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&jsonp=?";// här lägger du url till api¨
       
        $.getJSON(url, function (data) {
            $("#quote").text('"' + data.quoteText + '"');
            $("#author").text("-" + data.quoteAuthor);
        }); //Stänger .getJSON delen

        $("#newQuote").on("click", function () {
            getQuote();
        }); // Stänger klick-funktionen på #newQuote
    };

});    

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    //  var randomQuote;
  //  var randomNum;
  //  var author;

/*
    function getQuote() {

    }
    getQuote(); // hämtar första citatet

    $("#newQuote").on("click", function () {
        getQuote();        randomNum = Math.floor(Math.random() * quotes.length);
        randomQuote = quotes[randomNum];
        author = author[randomQuote];
        $("#quote").text(randomQuote);
        $("#author").text(author);
    });

    $("#fbook").on("click", function () {
        window.open("https://www.facebook.com");
    });

        function getQuote() {
            var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&jsonp=?";
            $get(url, function (data) {

            });
        }

    }); // slutet av ready */