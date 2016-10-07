angular.module("recipesApp")
.component("homePage", {
  template: `
    <div class="splashPage">
      <div class="splashFade">
        <h1>Welcome to **INSERT WEBSITE TITLE**</h1>
        <hr class="splashDivide">
        <br>
        <p class="siteDesc">I really just made this site for my girlfriend, and Chandler was a sucker for helping me, but he's a bad ass who did the whole backend and a lot of front end. I'm just the animation guy.</p>
        <br>
        <br>
        <hr class="splashDivide">
        <ul class="featureBullets">
          <li>
            <h3>Find Recipes</h3>
            <?xml version="1.0" encoding="utf-8"?>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 70.7 90.5" style="enable-background:new 0 0 70.7 90.5;" xml:space="preserve" class="SVGhome">
            <g>
              <path d="M59,24.7c0-4.4-3.6-8-8-8c-2,0-3.8,0.8-5.2,2c-1.4-1.2-3.2-2-5.2-2s-3.9,0.8-5.3,2c-1.4-1.2-3.2-2-5.3-2c-4.4,0-8,3.6-8,8
                c0,3.3,2,6.2,4.9,7.4v12.6h27.2V32.1C57,30.9,59,28,59,24.7z"/>
              <rect x="26.8" y="48.7" width="27.2" height="4"/>
            </g>
            <path d="M8.5,0C3.8,0,0,3.8,0,8.5v62.4c0,4.7,3.8,8.5,8.5,8.5h23.2v11.2l8.5-5l8.5,5V79.3h17.7V67.1h4.3V0H8.5z M61.7,74.6h-13v-3.4
              h-17v3.4H8.5c-2.1,0-3.8-1.7-3.8-3.8S6.4,67,8.5,67h53.2V74.6z M66,62.4H14.8V4.7H66V62.4z"/>
            </svg>
          </li>
          <li>
            <h3>Add Notes</h3>
            <?xml version="1.0" encoding="utf-8"?>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 101.6 92.5" style="enable-background:new 0 0 101.6 92.5;" xml:space="preserve" class="SVGhome SVGbig">
            <path d="M100.6,71.7C88.3,63.5,88.6,36,88.8,11.8c0-3.5,0.1-6.9,0.1-10.3c0-1.2-0.9-2.1-2.1-2.1H10.6c-0.1,0-0.1,0-0.2,0
              c-0.1,0-0.3,0-0.4,0.1c-0.1,0-0.2,0.1-0.4,0.1C9.5-0.3,9.4-0.2,9.3-0.1C9.2,0,9.1,0.1,9,0.2c0,0.1-0.1,0.1-0.1,0.1L0.4,13
              C0.1,13.4,0,13.8,0,14.2v76.2c0,0.3,0.1,0.6,0.2,0.8c0.1,0.1,0.2,0.2,0.2,0.4c0.1,0.1,0.1,0.2,0.2,0.3C0.7,92,0.8,92,0.9,92
              c0.1,0.1,0.3,0.2,0.5,0.3c0.3,0.1,0.5,0.2,0.8,0.2h72c0.4,0,0.8-0.1,1.2-0.4L88,83.7c0.1,0,0.1-0.1,0.1-0.1c0.1-0.1,0.2-0.2,0.3-0.3
              c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.4c0-0.1,0.1-0.3,0.1-0.4c0-0.1,0-0.1,0-0.2v-6.3h10.6c0.9,0,1.8-0.6,2-1.5
              C101.8,73.2,101.4,72.2,100.6,71.7z M8.5,8.5V81l-4.2,4.2V14.8L8.5,8.5z M73.4,88.3H7.2l4.2-4.2h68.3L73.4,88.3z M84.7,79.8h-72V51
              c2.6,10.9,6.9,19.8,13.6,24.3c0.3,0.2,0.8,0.4,1.2,0.4h57.1V79.8z M28.2,71.3C14.8,61.7,12.8,30.6,12.7,3.6h71.9
              c0,2.7,0,5.4-0.1,8.1c-0.2,23.6-0.5,47.8,9.4,59.6H28.2z"/>
            </svg>
          </li>
          <li>
            <h3>Store Favorites</h3>
            <?xml version="1.0" encoding="utf-8"?>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 92.9 90.5" style="enable-background:new 0 0 92.9 90.5;" xml:space="preserve" class="SVGhome SVGbig">
            <g>
              <path d="M89.7,33.6H59.8L49.4,2.2C49,0.9,47.8,0,46.4,0c-1.4,0-2.6,0.9-3,2.2L33.1,33.6H3.2c-1.4,0-2.6,0.9-3,2.2
                c-0.4,1.3,0.1,2.8,1.2,3.6l24.2,17.2l-9.7,29.7c-0.4,1.3,0,2.7,1.1,3.6c1.1,0.8,2.6,0.8,3.7,0l25.8-18.4l25.8,18.4
                c0.6,0.4,1.2,0.6,1.8,0.6c0.7,0,1.3-0.2,1.9-0.6c1.1-0.8,1.6-2.2,1.1-3.6l-9.7-29.7l24.2-17.2c1.1-0.8,1.6-2.2,1.2-3.6
                C92.3,34.5,91.1,33.6,89.7,33.6z M61.7,52.8c-1.1,0.8-1.6,2.3-1.2,3.6L68,79.1L48.3,65c-0.6-0.4-1.2-0.6-1.8-0.6s-1.3,0.2-1.8,0.6
                L24.8,79.1l7.5-22.7c0.4-1.3,0-2.8-1.2-3.6L13.1,40h22.3c1.4,0,2.6-0.9,3-2.2l8-24.5l8,24.5c0.4,1.3,1.6,2.2,3,2.2h22.3L61.7,52.8z
                "/>
            </g>
            </svg>
          </li>
        </ul>
        <div class="splashBtns">
          <div ng-hide="true" class="accountBtn"><h3>Sign Up</h3></div>
          <div ng-hide="true" class="accountBtn"><h3>Login</h3></div>
        </div>
      </div>
    </div>
  `
});