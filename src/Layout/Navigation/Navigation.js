import "./_Navigation.scss";

function Navigation (){
    return (
        // <!-- NAVIGATION -->
        <div class="navigation">
          <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
        <label for="navi-toggle" class="navigation__button" >
          {/* <!-- For the button icon --> */}
          <span class="navigation__icon">&nbsp;</span>
        </label>
          <div class="navigation__background"></div>
          {/* <!-- here we can now put the navigation itself --> */}
          <nav class="navigation__nav">
            {/* <!-- this will be the hug container spanning the entire page that contain all the  unorderlist,
            that we can in there veritcally and horizontally center our unordered list --> */}
            <ul class="navigation__list">
              <li class="navigation__item"><a href="./LandingPage" class="navigation__link">Home Page</a></li>
              <li class="navigation__item"><a href="#" class="navigation__link">About us</a></li>
              <li class="navigation__item"><a href="#" class="navigation__link">Services</a></li>
              <li class="navigation__item"><a href="#popup" class="navigation__link">Details Hint</a></li>
              <li class="navigation__item"><a href="#" class="navigation__link">Project</a></li>
              <li class="navigation__item"><a href="#" class="navigation__link">Contact Information</a></li>
      
            </ul>
          </nav>
        </div>
    )
}


export default Navigation;
