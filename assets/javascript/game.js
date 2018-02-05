var artistList = ["jayz","tupac","biggie","nas","mosdef","common","kanye","drake","logic","_"]

    var wins = 0
    var guessesleft = 12
    var letterguessed = []
    var filler = ["_"]
    var randomArtist =  artistList[Math.floor(Math.random()*(artistList.length-1))]    

    function reset(){
        guessesleft = 12
        lettersguessed=[]
        randomArtist =  artistList[Math.floor(Math.random()*(artistList.length-1))]
        blanks =""
        blankreset()
        
    }
    var blankreset = function(){
            for (var i=0; i < randomArtist.length;i++){
                var blanks = $("<span>")
                blanks.attr("class","underscores")
                blanks.attr("fillerspots",randomArtist[i])
                blanks.text(randomArtist[i])
                $(".spacereplace").append(("_ "))
                console.log("**" + blanks)
            }
        }

    
    $( ".btn" ).click(function() {
        reset();
      });
    
    $(document).ready()
        reset();
    
   
      
   document.onkeyup = function(event){
    //   fires player guess
    var userguess = event.key;
    console.log(userguess)
    console.log(randomArtist)
    if(randomArtist.includes(userguess)){
        // var swap = $("<span>")
        // swap.attr("class","letterswap")
        // swap.attr("letter-fill", randomArtist[i])
        // swap.text(randomArtist[i])
        // $("#spacereplace").replace(randomArtist[i],userguess)
             console.log("lettermatch")
       }
    else if (guessesleft ===0){
           alert("Artist was " + randomArtist)
           reset()
           
           console.log("reset")      
       }
    else if(userguess !== randomArtist.includes(userguess)){
        guessesleft--
        letterguessed.splice(0,0,userguess)
        console.log("no match")
    }

    else{
       
        
        
        console.log(letterguessed)
       }

    $("#wins").text(wins)    
    $("#initial").text(guessesleft)
    $("#Guessmade").text(lettersguessed + ",")
   }

