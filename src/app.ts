import * as BABYLON from 'babylonjs';

const canvas : any = document.getElementById("renderCanvas");

const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);


// create free movable camera and position it
var camera = new BABYLON.FreeCamera("Camera1", new BABYLON.Vector3(0, 5, -10), scene)
camera.setTarget(BABYLON.Vector3.Zero())

// create light
var light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene)
light.intensity = 0.5
// create ground
var ground = BABYLON.MeshBuilder.CreateGround('ground', {width: 6, height: 6}, scene)

// attach camera to the scene
camera.attachControl(canvas, true)






engine.runRenderLoop( () => {
    scene.render();
})   

window.addEventListener( 'resize', () => {
    engine.resize();
})
