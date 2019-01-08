var count = 0;
window.addEventListener('load', onPageLoad);
function onPageLoad() {
  var centerButton = document.getElementById("centerButton");
  centerButton.onclick = buttonClick;
  console.info('onPageLoad');
}

function buttonClick () {
  console.info('buttonClick');
  count += 1;
  switch (count) {
      case 0:
      console.info('reset count');
        resetAll();
        break;
      case 1:
        var wood = document.getElementById('wood');
        wood.style.transform = 'translate(0px,-200px)';
        wood.style.transition = 'transform 0.5s ease';
        break;
      case 2:
        var fire = document.getElementById('fire');
        fire.style.transform = 'translate(190px,-62px)';
        fire.style.transition = 'transform 0.5s ease';
        break;
      case 3:
        var earth = document.getElementById('earth');
        earth.style.transform = 'translate(118px,162px)';
        earth.style.transition = 'transform 0.5s ease';
        break;
      case 4:
        var metal = document.getElementById('metal');
        metal.style.transform = 'translate(-118px,162px)';
        metal.style.transition = 'transform 0.5s ease';
        break;
      case 5:
        var water = document.getElementById('water');
        water.style.transform = 'translate(-190px,-62px)';
        water.style.transition = 'transform 0.5s ease';
        count = -1
        break;     
  }
}

function resetAll() {
  var wood = document.getElementById('wood');
  reset(wood);
  var fire = document.getElementById('fire');
  reset(fire);
  var earth = document.getElementById('earth');
  reset(earth);
  var metal = document.getElementById('metal');
  reset(metal);
  var water = document.getElementById('water');
  reset(water);
}

function reset(button) {
  button.style.transform = 'translate(0px,0px)';
  button.style.transition = 'transform 0.5s ease';
}