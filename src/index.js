import snap from "snapsvg";

import { items } from "./paths";

function randomNumber() {
  return Math.floor(Math.random() * 255);
}

const s = snap("#app");

const rects = items.map(({ x, y, width, height }) => {
  const [r, g, b] = [randomNumber(), randomNumber(), randomNumber()];
  return s.rect(x, y, width, height, "50%", "50%").attr({
    class: "item",
    fill: `rgb(${r},${g},${b})`
  });
});

let colorChanger = document.getElementById("colorChanger");
colorChanger.addEventListener("click", function() {
  rects.forEach((item, i) => {
    let currClass=item.attr('class');
    let [r, g, b] = [randomNumber(), randomNumber(), randomNumber()];
    item.attr({
      fill: `rgb(${r},
        ${g},
        ${b})`,

      class: (currClass==='item')? `item-${i}`:'item'
    });
  });
});

/*s.attr({
  fill: '#00ff00'
});*/

//circle.mask(smallCircle)

//circle.animate({x: 200}, 1000)
