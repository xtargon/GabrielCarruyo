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

    if (p == 'contact_me') {
      var inner = '<h5 class="s_m">  --Send me a Mail-- </h5><div id="alert"></div><div class="send_to"> <i class="icon_send fas fa-user-cog"></i><p>Contact@gabrielcarruyo.com</p></div> <div class="emailform"><div class="mb-3"><label for="exampleFormControlInput1" class="form-label">Email address</label><input type="mail" class="form-control" id="mailFrom" placeholder="Email@example.com"></div><div class="mb-3"><label for="exampleFormControlTextarea1" class="form-label">Any messagge for me?</label><textarea placeholder="Message" class="form-control" id="message" rows="3"></textarea></div> <a onclick="SendMail()" class="btn github_redirect "><i class="iconSlider far fa-paper-plane"></i></a></div>'
    }

    if (p == 'about_me') {
      var inner = '<div id="about_me"><i class="aboutme_icons fas fa-user-tie"></i> <p class="aboutme_p">Gabriel Alejo Carruyo Finol</p><br><i class="aboutme_icons fas fa-user-graduate"></i> <p class="aboutme_p">Studying for 3 years the art of programming</p><br><i class="aboutme_icons fas fa-baseball-ball"></i> <p class="aboutme_p">Favorite sport: Baseball</p><br><i class="aboutme_icons fas fa-coffee"></i> <p class="aboutme_p">Favorite Drink: Coffee</p><br><i class="aboutme_icons fas fa-business-time"></i> <p class="aboutme_p">Second Work: Grill on Los pinchos de Jose</p><br><i class="aboutme_icons far fa-calendar-check"></i> <p class="aboutme_p">Age: 20</p><br><i class="aboutme_icons fas fa-map-marker-alt"></i> <p class="aboutme_p">Abancay - Perú</p><br><hr><i class="aboutme_icons fas fa-cross"></i><p class="aboutme_p">Religion: non-believer</p><br></div>'
    }

    if (p == 'projects') {
      var inner = '<p style="text-align: center; font-size: 20px; "><i class="far fa-clock"></i>comming son...<hr>--Morning--</p>'
    }
    var html = '<a href="#" id="btn-cerrar-popup" onclick="exit()" class="btn-cerrar-popup"><i class="fas fa-times"></i></a> <br>'+inner
  	if (p != "") {
  		popup.innerHTML = html;
  	}

  	overlay.classList.add('active');
  	popup.classList.add('active');
  }
