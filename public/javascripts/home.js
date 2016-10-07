angular.module("recipesApp")
.component("homePage", {
  template: `
    <div class="splashPage">
      <div class="splashFade">
        <h1>Welcome to Book of Recipes!</h1>
        <hr class="splashDivide">
        <br>
        <p class="siteDesc">Find recipes from hundreds of sites and store them here. Book of recipes allows you to search by ingredients or tags! Find one you really love? Add it to your favorites so next time you're struggling to figure out what you want to make you can just filter by Favorites and narrow down your choices! </p>
        <p class="siteDesc"> Not a fan of something on the recipe? Add your own notes to each instruction for next time you make it. Book of Recipes is the perfect recipe website for... well Katie Anderson because that's who we made it for.</p>
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
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 68 68" style="enable-background:new 0 0 68 68;" xml:space="preserve" class="SVGhome SVGbig">
            <g>
              <path d="M41.7,20c0.2,0.5,0.5,0.9,0.7,1.2c0.7,0.9,1.9,1,2.8,0.3c0.9-0.7,1-1.9,0.3-2.8c0,0-0.1-0.1-0.2-0.3
                C45,17.5,45,16.3,45.7,15c1.4-2.5,1.4-5,0.5-7C46,7.4,45.8,7,45.6,6.8c-0.7-0.9-1.9-1-2.8-0.3c-0.9,0.7-1,1.9-0.3,2.8
                c0,0,0.1,0.1,0.2,0.3c0.4,0.9,0.4,2.1-0.4,3.4C40.8,15.5,40.8,18,41.7,20z"/>
              <path d="M21.7,20c0.2,0.5,0.5,0.9,0.7,1.2c0.7,0.9,1.9,1,2.8,0.3c0.9-0.7,1-1.9,0.3-2.8c0,0-0.1-0.1-0.2-0.3
                C25,17.5,25,16.3,25.7,15c1.4-2.5,1.4-5,0.5-7C26,7.4,25.8,7,25.6,6.8c-0.7-0.9-1.9-1-2.8-0.3c-0.9,0.7-1,1.9-0.3,2.8
                c0,0,0.1,0.1,0.2,0.3c0.4,0.9,0.4,2.1-0.4,3.4C20.8,15.5,20.8,18,21.7,20z"/>
              <path d="M31.5,19.4c0.3,0.8,0.6,1.3,0.9,1.7c0.6,0.9,1.9,1.2,2.8,0.6c0.9-0.6,1.2-1.9,0.6-2.8c-0.1-0.1-0.3-0.5-0.5-1
                c-0.8-1.9-0.8-3.9,0.5-5.8c2.1-3.1,2.1-6.5,0.9-9.5c-0.3-0.8-0.6-1.3-0.9-1.7c-0.6-0.9-1.9-1.2-2.8-0.6c-0.9,0.6-1.2,1.9-0.6,2.8
                c0.1,0.1,0.3,0.5,0.5,1C33.6,6,33.6,8,32.3,9.9C30.3,13,30.3,16.4,31.5,19.4z"/>
            </g>
            <path d="M66,34h-7v-6c0-1.1-0.9-2-2-2H11c-1.1,0-2,0.9-2,2v6H2c-1.1,0-2,0.9-2,2s0.9,2,2,2h7v24c0,3.3,2.7,6,6,6h38c3.3,0,6-2.7,6-6
              V38h7c1.1,0,2-0.9,2-2S67.1,34,66,34z M44.4,53.6L35,62.4c-0.7,0.7-1.6,0.7-2.3,0l-9.3-8.8c-6.2-6.2-9.3-11.4-3.8-18.4
              c3.1-4.1,9.2-5.9,14-1.4c0.2,0.2,0.4,0.2,0.6,0c4.4-4.6,10.6-2.7,14.1,1.4C54.1,41.9,50.7,47.3,44.4,53.6z"/>
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