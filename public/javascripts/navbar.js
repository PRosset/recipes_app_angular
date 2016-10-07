angular.module('recipesApp')
.component('navbar', {
  template: `
    <div class="navBar">
      <div class="logo">
        <h3>Book of Recipes</h3>
      </div>
      <div class="navLink" ui-sref="home">
        <svg class="SVGicon" version="1.1"
           id="Layer_1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 106 101.3"
           style="enable-background:new 0 0 106 101.3;" xml:space="preserve">
          <g>
            <rect x="53.6" y="67.5" width="17.5" height="17.5"/>
            <rect x="35" y="48.9" width="17.5" height="17.5"/>
            <rect x="53.6" y="48.9" width="17.5" height="17.5"/>
            <rect x="35" y="67.5" width="17.5" height="17.5"/>
            <path d="M104.5,42.9L55.6,1c-0.8-0.7-1.6-1-2.6-1c-0.9,0-1.7,0.4-2.4,0.8l-0.1,0.1l-49,42C0.2,44-0.4,46,0.3,47.4
              C0.9,49,2.4,50,4.1,50h11.1v47.1c0,2.1,1.9,4.1,4.1,4.1h67.5c2.1,0,4.1-1.9,4.1-4.1V50h11.1c1.7,0,3.3-1.1,3.8-2.6
              C106.3,45.8,105.8,44,104.5,42.9z M19.2,41.9h-4.1L53,9.4l37.9,32.5h-4.1c-2.1,0-4.1,1.9-4.1,4.1v47.1H23.3V46
              C23.3,43.8,21.4,41.9,19.2,41.9z"/>
          </g>
        </svg>
        <h4>Home</h4>
      </div>
      <div class="navLink" ui-sref="recipes">
        <?xml version="1.0" encoding="utf-8"?>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 70.7 90.5" style="enable-background:new 0 0 70.7 90.5;" xml:space="preserve" class="SVGicon">
        <g>
          <path d="M59,24.7c0-4.4-3.6-8-8-8c-2,0-3.8,0.8-5.2,2c-1.4-1.2-3.2-2-5.2-2s-3.9,0.8-5.3,2c-1.4-1.2-3.2-2-5.3-2c-4.4,0-8,3.6-8,8
            c0,3.3,2,6.2,4.9,7.4v12.6h27.2V32.1C57,30.9,59,28,59,24.7z"/>
          <rect x="26.8" y="48.7" width="27.2" height="4"/>
        </g>
        <path d="M8.5,0C3.8,0,0,3.8,0,8.5v62.4c0,4.7,3.8,8.5,8.5,8.5h23.2v11.2l8.5-5l8.5,5V79.3h17.7V67.1h4.3V0H8.5z M61.7,74.6h-13v-3.4
          h-17v3.4H8.5c-2.1,0-3.8-1.7-3.8-3.8S6.4,67,8.5,67h53.2V74.6z M66,62.4H14.8V4.7H66V62.4z"/>
        </svg>
        <h4>Recipes</h4>
      </div>
      <div class="navLink" ui-sref="form">
        <?xml version="1.0" encoding="utf-8"?>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 70.7 90.5" style="enable-background:new 0 0 70.7 90.5;" xml:space="preserve" class="SVGicon">
        <g>
          <path d="M8.5,0C3.8,0,0,3.8,0,8.5v62.4c0,4.7,3.8,8.5,8.5,8.5h23.2v11.2l8.5-5l8.5,5V79.3h17.7V67.1h4.3V0H8.5z M61.7,74.6h-13
            v-3.4h-17v3.4H8.5c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8h53.2V74.6z M66,62.4H14.8V4.7H66V62.4z"/>
          <polygon points="35.4,55.1 45.4,55.1 45.4,41.5 59,41.5 59,31.5 45.4,31.5 45.4,18 35.4,18 35.4,31.5 21.9,31.5 21.9,41.5
            35.4,41.5   "/>
        </g>
        </svg>
        <h4>Add Recipe</h4>
      </div>
    </div>
    `
});