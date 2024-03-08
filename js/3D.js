﻿// Import the TFRFF.js library
import * as THREE from "https://cdn.skypack.dev/three@0.132.2/build/three.module.js";

// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0, 0, 10);
camera.lookAt(0, 0, 0);

//const container = document.querySelector('#scene-container');

let controls

let loader = new THREE.GLTFLoader();
loader.load( 'models/Horse.glb', 
function ( gltf ) {
  scene.add( gltf.scene );
}, 
function (xhr){
  console.log((xhr.loader / xhr.total * 100) + '% loader');
},
undefined, function ( error ) {
	console.error( error );
} );

let loader2 = new THREE.GLTFLoader();
loader2.load( 'models/Head/Head.glb', 
function ( gltf ) {
  scene.add( gltf.scene );
}, );

//const renderer = new THREE.WebGLRenderer({alpha: true});
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );

// function animate(){
//   requestAnimationFrame(animate);
// }

// window.addEventListener("resize", function(){
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

//animate();
const topLight = new THREE.DirectionalLight('white', 10);
topLight.position.set(500, 500, 500);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight('white', 100);
scene.add(ambientLight);

//render place
//container.append(renderer.domElement);
document.getElementById("scene-container").appendChild(renderer.domElement);

renderer.render(scene, camera);