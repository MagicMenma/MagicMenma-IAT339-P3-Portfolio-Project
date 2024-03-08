﻿// Import the TFRFF.js library
import * as THREE from "https://cdn.skypack.dev/three@0.132.2/build/three.module.js";

// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0, 0, 10);

const container = document.querySelector('#scene-container');

let objectHead;

let controls

const loader = new THREE.GLTFLoader();
loader.load( 'models/Horse.glb', 
function ( gltf ) {
	objectHead = gltf.scene;
  scene.add( objectHead );

  if(objectHead != null){
    console.log('Object Loaded');
  }else{
    console.log('Object NOT Loaded');
  }
}, 
function (xhr){
  console.log((xhr.loader / xhr.total * 100) + '% loader');
},
undefined, function ( error ) {
	console.error( error );
} );

//const renderer = new THREE.WebGLRenderer({alpha: true});
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

// function animate(){
//   requestAnimationFrame(animate);
// }

// window.addEventListener("resize", function(){
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

animate();

//render place
container.append(renderer.domElement);

renderer.render(scene, camera);

init();