
var scene = new THREE.Scene()

var camera = new THREE.PerspectiveCamera(75, 850 / 850, 0.1, 1000)
camera.position.x = 0
camera.position.y = 2
camera.position.z = 4

var renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(850, 850)
renderer.setClearColor(0xffffff)

document.getElementById("3D").appendChild(renderer.domElement);

var material = new THREE.MeshPhongMaterial({ color: 0x00ff00 })



var spotlight = new THREE.SpotLight(0xffffff)
spotlight.position.set(0, 10, 10)
scene.add(spotlight)

var spotlight = new THREE.SpotLight(0xffffff)
spotlight.position.set(0, 10, 0)
scene.add(spotlight)

var spotlight = new THREE.SpotLight(0xffffff)
spotlight.position.set(0, 10, -10)
scene.add(spotlight)

var spotlight = new THREE.SpotLight(0xffffff)
spotlight.position.set(0, 0, 10)
scene.add(spotlight)

var spotlight = new THREE.SpotLight(0xffffff)
spotlight.position.set(10, 0, 0)
scene.add(spotlight)

var controls = new THREE.OrbitControls(camera, renderer.domElement)

var loader = new THREE.GLTFLoader()
loader.load("assets/3D/Porsche_911_930_turbo/scene.gltf", function (gltf) {
    gltf.scene.rotation.set(0, THREE.Math.degToRad(20), THREE.Math.degToRad(0))
    scene.add(gltf.scene)
})

function animate() {
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}




animate()
