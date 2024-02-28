import React from "react";
import Male from "../../../Asset/IMG/maleDveloper.jpg";
import webdesignContainer from "../../../Asset/IMG/webdesignContainer.jpg";
import "./_Footer.scss";
function Footer (){
    return(
        <footer class="footer">
    <div class="footer__logo-box">
      <img src={Male} alt="Footer-logo" />
    </div>
    <div class="footer__row">
      <div class="footer__rowOne">
        <div class="footer__navigation">
          <ul class="footer__list">
            <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
            <li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
            <li class="footer__item"><a href="#" class="footer__link">Career</a></li>
            <li class="footer__item"><a href="#" class="footer__link">Information</a></li>
            <li class="footer__item"><a href="#" class="footer__link">Privacy</a></li>

          </ul>
        </div>
      </div>
      <div class="footer__rowOne">
        <p class="footer__copyright">
          built my <a href="#" class="footer__link">Ajayi Ariyo Sunday(Mike)...!</a>for my online works <a href="#"
            class="footer__link">Advance Css and Sass work.</a>.Copyright &copy; by  Ajayi Ariyo Sunday.. You are 100% allowed to use this webpage for both personal and commercial use, but not to  claim it has your own design.A  credit to the original author is highly appreciated.
        </p>
      </div>
      </div>
  </footer>
    )
}

export default Footer;