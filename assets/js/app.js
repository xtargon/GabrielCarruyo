function mostrar() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("all_display").style.display = "inline";
}

function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("all_display").style.display = "none";
}

var caja = $("#text1");

$(document).on("scroll", function(){

    var action_actu = $(document).scrollTop();



    if(action_actu > 200){
        document.getElementById("text1").style.width = "100%";
    }

    if(action_actu < 100){
        document.getElementById("text1").style.width = "0px";
    }
});

//shange value's of info_onclick 

function seconds(n) {
    if (n == 1) {
        document.getElementById("text_ln2").style.opacity = "0";

        document.getElementById("text_ln").style.width = "100%";
        document.getElementById("text_ln").style.visibility = "visible";
        document.getElementById("text_ln").style.color = "#f3f3f3";

        document.getElementById("text_li").style.width = "100%";
        document.getElementById("text_li").style.visibility = "visible";
        document.getElementById("text_li").style.color = "#f3f3f3";

        document.getElementById("text_li2").style.opacity = "0";   


    }
    if (n == 2) {
        document.getElementById("text_fa2").style.opacity = "0";

        document.getElementById("text_fa").style.width = "100%";
        document.getElementById("text_fa").style.visibility = "visible";
        document.getElementById("text_fa").style.color = "#f3f3f3";

        document.getElementById("text_li").style.width = "100%";
        document.getElementById("text_li").style.visibility = "visible";
        document.getElementById("text_li").style.color = "#f3f3f3";



        document.getElementById("text_li2").style.opacity = "0";        

    }
    if (n == 3) {
       document.getElementById("text_fa2").style.opacity = "0";

        document.getElementById("text_fa").style.width = "100%";
        document.getElementById("text_fa").style.visibility = "visible";
        document.getElementById("text_fa").style.color = "#f3f3f3";


        document.getElementById("text_ln").style.width = "100%";
        document.getElementById("text_ln").style.visibility = "visible";
        document.getElementById("text_ln").style.color = "#f3f3f3";

       document.getElementById("text_ln2").style.opacity = "0";
    }
}


function defined(a) {
    if (a == 1) {
        var l1 = $("#text_fa");
        $(l1).css("visibility", "hidden")
        $(l1).css("color", "transparent")

        $(l1).css("width", "0")



        document.getElementById("text_fa2").style.opacity = "1";
        seconds(1)

    }

    if (a == 2) {
        var l1 = $("#text_ln");
        $(l1).css("visibility", "hidden")
        $(l1).css("color", "transparent")

        $(l1).css("width", "0")

        document.getElementById("text_ln2").style.opacity = "1";
        seconds(2)

                            /*seconds*/   

    }  

    if (a == 3) {

        var l1 = $("#text_li");
        $(l1).css("visibility", "hidden")
        $(l1).css("color", "transparent")

        $(l1).css("width", "0")

       document.getElementById("text_li2").style.opacity = "1";
       seconds(3)

                            /*seconds*/  

    }  
}

function SendMail(){
  var frommail = document.getElementById("mailFrom").value;
  var message = document.getElementById("message").value;
  var alert = document.getElementById("alert");
  var badwrite ='<div id="badinputs">please fill in all fields</div>' 
  var write = '<div id="sending">email send to Gabriel Carruyo, please wait for a message of reply <hr> thank you for your preference</div>'


  if (frommail != '') {
    if (message != '') {
          Email.send({
            SecureToken : "23C2B186F39F045C8EFD482B7DAB4E93359C",
            To : 'xtargon@gmail.com',
            From : 'xtargon.official@gmail.com',
            Subject : "This is the subject",
            Body : "And this is the body"
          }).then(alert.innerHTML = write);
          
     }
     else{
        alert.innerHTML = badwrite;
    }
  }
  else{
    alert.innerHTML = badwrite;
  }

  /**/
 
}
