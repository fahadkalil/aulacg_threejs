import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const width = window.innerWidth, height = window.innerHeight;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x21272e);
scene.add(new THREE.GridHelper());

const light = new THREE.DirectionalLight();
light.position.set(5, 5, 4).normalize();
scene.add(light);

// propriedades da camera: https://threejs.org/manual/examples/cameras-perspective.html
const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
camera.position.z = 0;
camera.position.y = 7;
camera.position.x = 10;

// Esfera
const sphereGeometry = new THREE.SphereGeometry(0.7, 30, 30);
const sphereMaterial = new THREE.MeshPhongMaterial({
  color: 0x90D5FF,
  shininess: 700,
});
//sphereMaterial.wireframe = true;

const sphere = new THREE.Mesh(
    sphereGeometry, 
    sphereMaterial
);
sphere.position.set(0, 1, 3);

const sphereGeometry2 = new THREE.SphereGeometry(0.8, 50, 50);
const sphereMaterial2 = new THREE.MeshPhongMaterial({
  color: 0xffffff,
  shininess: 50,
});
//sphereMaterial2.wireframe = true;

const sphere2 = new THREE.Mesh(
    sphereGeometry2, 
    sphereMaterial2
);
sphere2.position.set(0, 1, 1);

[sphere, sphere2].forEach( item => scene.add(item));

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

// Permite controle da camera com mouse
const controls = new OrbitControls(camera, renderer.domElement)
controls.listenToKeyEvents(window);

// animation
function animate(time) {
  requestAnimationFrame(animate)
  //mesh.rotation.y = time / 2000;

  renderer.render(scene, camera)
}