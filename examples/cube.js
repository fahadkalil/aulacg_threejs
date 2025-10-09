import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const width = window.innerWidth, height = window.innerHeight;

// propriedades da camera: https://threejs.org/manual/examples/cameras-perspective.html
const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2); // https://threejs.org/docs/#api/en/geometries/BoxGeometry
const material = new THREE.MeshNormalMaterial(); // https://threejs.org/docs/#api/en/materials/Material
material.wireframe = false;

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// Permite controle da camera com mouse
new OrbitControls(camera, renderer.domElement)

// animation

function animate(time) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render(scene, camera);
}