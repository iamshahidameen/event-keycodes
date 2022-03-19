/*  My method*/

/*
const main = document.body;
main.addEventListener('keyup', (e) => {
    main.innerHTML = `
    <div>
        <div>event.KeyPressed</div>
        <div class="key keyPressed">${e.key}</div>
    </div>
    <div>
        <div>event.KeyCode</div>
    <div class="key keyCode">${e.keyCode}</div>
    </div>
    <div>
        <div>event.Code</div>
    <div class="key keyCode">${e.code}</div>
    </div>
    `;
}) */


const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
</div>

<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `
})