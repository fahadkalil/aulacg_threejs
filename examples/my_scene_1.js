import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const width = window.innerWidth, height = window.innerHeight;

const scene = new THREE.Scene(new THREE.GridHelper());
const light = new THREE.DirectionalLight();
light.position.set(0, 1, 50).normalize();
scene.add(light);

// propriedades da camera: https://threejs.org/manual/examples/cameras-perspective.html
const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
camera.position.z = 3;

// Esfera
const sphereGeometry = new THREE.SphereGeometry(1, 30, 30);
const sphereMaterial = new THREE.MeshPhongMaterial({
  color: 0x90D5FF,
  shininess: 150,
});
const sphere = new THREE.Mesh(
    sphereGeometry, 
    sphereMaterial
);
sphere.position.set(3, -2, 0);

const mesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

// Permite controle da camera com mouse
new OrbitControls(camera, renderer.domElement)

// animation
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate()