var	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup');



  function exit(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
  }

  function active(p) {
    var inner = ''
    if (p=='code') {
      var inner = '<h5> Back-End </h5><div class="code_use"> <i class="icon_code fab fa-python"> </i> <hr> <p class="this_code">Python (Flask)</p></div><div class="code_use"><i class="icon_code fab fa-node"></i><hr><p class="this_code">NodeJS (Express)</p></div><div class="code_use"><i class="icon_code fab fa-php"></i><hr><p class="this_code">Php</p></div> <hr> <h5> Front-End </h5> <div class="code_use"><i class="icon_code fab fa-js"></i></i><hr><p class="this_code">JavaScript (ReactJS)</p></div><div class="code_use"><i class="icon_code fab fa-css3-alt"></i><hr><p class="this_code">Css (Bootstrap)</p></div><div class="code_use"><i class="icon_code fab fa-html5"></i><hr><p class="this_code">HTML 5</p></div>'
    }
    var html = '<a href="#" id="btn-cerrar-popup" onclick="exit()" class="btn-cerrar-popup"><i class="fas fa-times"></i></a> <br>'+inner
  	if (p != "") {
  		popup.innerHTML = html;
  	}

  	overlay.classList.add('active');
  	popup.classList.add('active');
  }
