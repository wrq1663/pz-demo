import './reset.css'
import './style.less'

import * as PIXI from 'pixi.js'

const root = document.getElementById('root')

let app = new PIXI.Application({ width: 256, height: 256,antialias:true,resolution:1 });
app.renderer.backgroundColor = 0x061639;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
root.appendChild(app.view);