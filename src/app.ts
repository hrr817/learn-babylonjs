import * as B from 'babylonjs';
import { StandardMaterial } from 'babylonjs';
import { OBJFileLoader } from 'babylonjs-loaders'
import 'babylonjs-loaders'

const canvas: any = document.getElementById("renderCanvas");

const engine = new B.Engine(canvas, true);
const scene = new B.Scene(engine);

// create free movable camera and position it
// var camera = new B.FreeCamera("Camera1", new B.Vector3(0, 5, -10), scene)
// camera.setTarget(B.Vector3.Zero())

// Creates, angles, distances and targets the camera
var camera = new B.ArcRotateCamera("Camera", 0, 0, 10, new B.Vector3(0, 0, 0), scene);

// This positions the camera
camera.setPosition(new B.Vector3(0, 0, -10));

// This attaches the camera to the canvas
camera.attachControl(canvas, true);

// create light
var light = new B.HemisphericLight('light', new B.Vector3(1, 1, 0), scene)
light.intensity = 1
// create ground
var ground = B.MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene)
ground.position.y = -1.2

// add material to ground
var groundMaterial = new B.StandardMaterial("Ground Material", scene)
ground.material = groundMaterial

B.StandardMaterial.DiffuseTextureEnabled = true
var groundTexture = new B.Texture('./assets/0015.jpg', scene)
var mat = (ground.material as StandardMaterial)
mat.diffuseTexture = groundTexture
// mat.diffuseTexture.hasAlpha = true
// mat.alpha = 0.5

// var ball = B.MeshBuilder.CreateSphere("ball", { diameter: 2 }, scene)
// ball.position.y = 3

// import mesh
var model = B.SceneLoader.ImportMesh("", './assets/', "dragon.obj", scene, function (newMeshes: any) {
})

OBJFileLoader.OPTIMIZE_WITH_UV = true;

engine.runRenderLoop(() => {
    scene.render();
})

window.addEventListener('resize', () => engine.resize())
