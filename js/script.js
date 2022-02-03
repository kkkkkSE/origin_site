$(document).ready(function(){
  var arr = [
    ["Purple Haze", "2020.07.29"],
    ["Masked Model", "2020.04.30"],
    ["Birds of Beauty", "2020.05.04"],
    ["Summer Wheat", "2019.06.14"],
    ["Before the Storm", "2021.03.17"],
    ["Young Woman", "2019.10.07"],
    ["Before the Storm", "2020.12.24"],
    ["A Loving Couple", "2021.02.21"],
    ["Spiral Staircase", "2019.10.13"],
    ["Lonely Ladybug", "2021.01.16"],
    ["Emphasis Lafuta", "2020.07.07"],
    ["Monk Walks", "2021.03.12"],
    ["Arena Vivian", "2020.04.05"],
  ];
  var cont_text = `
      <article class="cont_bg">
        <div class="bg_color">
          <div class="cont">
            <div class="text_box">
              <h3>Make a Whish</h3>
              <span>2020.08.19</span>
              <div class="line"></div>
              <p>This work is about the centimental & cute baby.</p>
              <a href="#"><img src="./img/zoom.png" alt=""></a>
            </div>
          </div>
        </div>
      </article>
  `;

  for(v of arr){
    cont_text += `
      <article class="cont_bg">
        <div class="bg_color">
          <div class="cont">
            <div class="text_box">
              <h3>${v[0]}</h3>
              <span>${v[1]}</span>
              <div class="line"></div>
              <a href="#"><img src="./img/zoom.png" alt=""></a>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  $(".cont_wrap").html(cont_text);

});