import './style.css'
import * as THREE from 'three'
import { MeshSurfaceSampler } from 'three/addons/math/MeshSurfaceSampler.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { Sky } from 'three/addons/objects/Sky.js';
import { CameraHelper, Vector3 } from 'three'
const start = document.querySelector('.start')

/**
 * Starter
 */

window.addEventListener('click', () =>
{
  start.style.display = 'none'
})
/**
 * Loaders
 */
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco/')

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

/**
 * Texture
 */

const textureLoader = new THREE.TextureLoader()

/**
 * Models
 */

let japanHouse = null
gltfLoader.load(
    './japan-house/japanhouse.gltf',
    (gltf) =>
    {
        japanHouse = gltf.scene
        japanHouse.scale.set(0.0055, 0.008, 0.0055)
        japanHouse.position.x = -5.2
        japanHouse.position.y = 0
        japanHouse.position.z = -10

        japanHouse.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        scene.add(japanHouse)
    }
)

let japanHouse2 = null
gltfLoader.load(
    './japanhouse2-transformed.glb',
    (gltf) =>
    {
        japanHouse2 = gltf.scene
        japanHouse2.scale.set(1, 0.85, 1)
        japanHouse2.position.x = 4.2
        japanHouse2.position.y = 0
        japanHouse2.position.z = -11

        japanHouse2.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        japanHouse2.rotation.y = Math.PI * 1.5

        scene.add(japanHouse2)
    }
)

let japanHouse3 = null
gltfLoader.load(
    './residence-transformed.glb',
    (gltf) =>
    {
        japanHouse3 = gltf.scene
        japanHouse3.scale.set(0.5, 0.85, 0.5)
        japanHouse3.position.x = 4.4
        japanHouse3.position.y = 0
        japanHouse3.position.z = -18

        japanHouse3.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        japanHouse3.rotation.y = Math.PI * 1

        scene.add(japanHouse3)
    }
)

let sakura = null
gltfLoader.load(
    'sakura-transformed.glb',
    (gltf) =>
    {
        sakura = gltf.scene
        sakura.scale.set(3.5, 4, 3.5)
        sakura.position.x = 5
        sakura.position.y = 0
        sakura.position.z = 0

        sakura.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        scene.add(sakura)
    }
)

let avatar = null
gltfLoader.load(
    './avatar/avatar-transformed.glb',
    (gltf) =>
    {
        avatar = gltf.scene
        avatar.scale.set(1, 1, 1)
        avatar.position.x = 0
        avatar.position.y = 0
        avatar.position.z = 0

        avatar.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        // avatar.rotation.y = camera.rotation.y

        scene.add(avatar)
    }
)

let tsukubai = null
gltfLoader.load(
    'tsukubai-transformed.glb',
    (gltf) =>
    {
        tsukubai = gltf.scene
        tsukubai.scale.set(0.8, 0.8, 0.8)
        tsukubai.position.x = -5
        tsukubai.position.y = 0
        tsukubai.position.z = -14

        tsukubai.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        tsukubai.rotation.y = Math.PI * 0.5

        scene.add(tsukubai)
    }
)

let bench = null
gltfLoader.load(
    'bench-transformed.glb',
    (gltf) =>
    {
        bench = gltf.scene
        bench.scale.set(1, 1, 1)
        bench.position.x = -5
        bench.position.y = 0
        bench.position.z = -16.5

        bench.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        bench.rotation.y = Math.PI * 1

        scene.add(bench)
    }
)

let lamp = null
gltfLoader.load(
    'lamp-transformed.glb',
    (gltf) =>
    {
        lamp = gltf.scene
        lamp.scale.set(0.43, 0.43, 0.43)
        lamp.position.x = -3
        lamp.position.y = 0
        lamp.position.z = -16.5

        lamp.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        lamp.rotation.y = Math.PI * 0.5

        scene.add(lamp)
    }
)

let igs = null
gltfLoader.load(
    'igs.glb',
    (gltf) =>
    {
        igs = gltf.scene
        igs.scale.set(0.43, 0.43, 0.43)
        igs.position.x = -2.73
        igs.position.y = 0.8
        igs.position.z = -10.8

        igs.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        igs.rotation.x = Math.PI * 0.5
        igs.rotation.z = Math.PI * 1.5

        scene.add(igs)
    }
)

let igsrh = null
gltfLoader.load(
    'igsrh.glb',
    (gltf) =>
    {
        igsrh = gltf.scene
        igsrh.scale.set(0.43, 0.43, 0.43)
        igsrh.position.x = 3.5
        igsrh.position.y = 1.5
        igsrh.position.z = -16.57

        igsrh.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        igsrh.rotation.x = Math.PI * 0.5

        scene.add(igsrh)
    }
)

let temple = null
gltfLoader.load(
    'temple-transformed.glb',
    (gltf) =>
    {
        temple = gltf.scene
        temple.scale.set(0.43, 0.43, 0.43)
        temple.position.x = 0
        temple.position.y = 0
        temple.position.z = -28

        temple.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        scene.add(temple)
    }
)

let barrier1 = null
gltfLoader.load(
    'barrier-transformed.glb',
    (gltf) =>
    {
        barrier1 = gltf.scene
        barrier1.scale.set(0.4, 0.4, 0.4)
        barrier1.position.x = -7.5
        barrier1.position.y = 0
        barrier1.position.z = -6.7

        barrier1.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        barrier1.rotation.y = Math.PI * 0.5

        scene.add(barrier1)
    }
)

let barrier2 = null
gltfLoader.load(
    'barrier-transformed.glb',
    (gltf) =>
    {
        barrier2 = gltf.scene
        barrier2.scale.set(0.4, 0.4, 0.4)
        barrier2.position.x = 7.5
        barrier2.position.y = 0
        barrier2.position.z = -5.7

        barrier2.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        barrier2.rotation.y = Math.PI * 1.5

        scene.add(barrier2)
    }
)

let barrier3 = null
gltfLoader.load(
    'barrier-transformed.glb',
    (gltf) =>
    {
        barrier3 = gltf.scene
        barrier3.scale.set(0.4, 0.4, 0.4)
        barrier3.position.x = 7.5
        barrier3.position.y = 0
        barrier3.position.z = -20.7

        barrier3.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        barrier3.rotation.y = Math.PI * 1.5

        scene.add(barrier3)
    }
)

let barrier4 = null
gltfLoader.load(
    'barrier-transformed.glb',
    (gltf) =>
    {
        barrier4 = gltf.scene
        barrier4.scale.set(0.4, 0.4, 0.4)
        barrier4.position.x = 7.5
        barrier4.position.y = 0
        barrier4.position.z = -23

        barrier4.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        barrier4.rotation.y = Math.PI * 1.5

        scene.add(barrier4)
    }
)

let barrier5 = null
gltfLoader.load(
    'barrier-transformed.glb',
    (gltf) =>
    {
        barrier5 = gltf.scene
        barrier5.scale.set(0.4, 0.4, 0.4)
        barrier5.position.x = -7.5
        barrier5.position.y = 0
        barrier5.position.z = -21.7

        barrier5.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        barrier5.rotation.y = Math.PI * 0.5

        scene.add(barrier5)
    }
)

let barrier6 = null
gltfLoader.load(
    'barrier-transformed.glb',
    (gltf) =>
    {
        barrier6 = gltf.scene
        barrier6.scale.set(0.4, 0.4, 0.4)
        barrier6.position.x = -7.5
        barrier6.position.y = 0
        barrier6.position.z = -24

        barrier6.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        barrier6.rotation.y = Math.PI * 0.5

        scene.add(barrier6)
    }
)




/**
 * Scene
 */
const scene = new THREE.Scene()
scene.fog = new THREE.FogExp2('#b2c1cb', 0.02)
// const axesHelper = new THREE.AxesHelper( 100 )
// scene.add( axesHelper )


/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

/**
 * Resize
 */
window.addEventListener('resize', () =>
{
    // Update sizes object
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height, 0.1, 200)
camera.position.set(0, 2, 3)
camera.rotation.reorder('YXZ')
scene.add(camera)

/**
 * Floor
 */
const grassStartFloor = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 10),
    new THREE.MeshStandardMaterial({color: 0x008000})
)
grassStartFloor.receiveShadow = true
grassStartFloor.geometry.rotateX(- Math.PI * 0.5)
scene.add(grassStartFloor)

const grassEndFloor = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 6),
    new THREE.MeshStandardMaterial({color: 0x154215})
)
grassEndFloor.receiveShadow = true
grassEndFloor.position.z = -28
grassEndFloor.geometry.rotateX(- Math.PI * 0.5)
scene.add(grassEndFloor)

//street
const streetFloor = new THREE.Mesh(
    new THREE.PlaneGeometry(1000,1000),
new THREE.MeshStandardMaterial({color: 0x2a2a2a})
)
streetFloor.receiveShadow = true
streetFloor.geometry.rotateX(- Math.PI * 0.5)
streetFloor.position.y = -0.1
streetFloor.position.z = -15
scene.add(streetFloor)

//StreetBump
const streetBump = new THREE.Mesh(
    new THREE.BoxGeometry(1000,0.4, 0.05),
    new THREE.MeshStandardMaterial({color: 0x636363})
)
streetBump.receiveShadow = true
streetBump.geometry.rotateX(- Math.PI * 0.5)
streetBump.position.y = 0.02
streetBump.position.z = -5.2
scene.add(streetBump)

//StreetBump
const streetBump2 = new THREE.Mesh(
    new THREE.BoxGeometry(5,13, 0.05),
    new THREE.MeshStandardMaterial({color: 0x636363})
)
streetBump2.receiveShadow = true
streetBump2.geometry.rotateX(- Math.PI * 0.5)
streetBump2.position.x = 5
streetBump2.position.y = 0.02
streetBump2.position.z = -13.5
scene.add(streetBump2)

const streetBump3 = new THREE.Mesh(
    new THREE.BoxGeometry(5,13, 0.05),
    new THREE.MeshStandardMaterial({color: 0x636363})
)
streetBump3.receiveShadow = true
streetBump3.geometry.rotateX(- Math.PI * 0.5)
streetBump3.position.x = -5
streetBump3.position.y = 0.02
streetBump3.position.z = -13.5
scene.add(streetBump3)

//lil-garden walls
const lilGardenWall = new THREE.Mesh(
    new THREE.BoxGeometry(5,0.3, 2),
    new THREE.MeshStandardMaterial({color: 0x636363})
)
lilGardenWall.receiveShadow = true
lilGardenWall.geometry.rotateX(- Math.PI * 0.5)
lilGardenWall.position.x = -5
lilGardenWall.position.y = 1
lilGardenWall.position.z = -12.18
scene.add(lilGardenWall)

const lilGardenFrontWall = new THREE.Mesh(
    new THREE.BoxGeometry(3.6,0.3, 0.5),
    new THREE.MeshStandardMaterial({color: 0x636363})
)
lilGardenFrontWall.receiveShadow = true
lilGardenFrontWall.geometry.rotateX(- Math.PI * 0.5)
lilGardenFrontWall.position.x = -2.65
lilGardenFrontWall.position.y = 0.25
lilGardenFrontWall.position.z = -14
lilGardenFrontWall.rotation.y = Math.PI * 1.5
scene.add(lilGardenFrontWall)

const lilGardenWall2 = new THREE.Mesh(
    new THREE.BoxGeometry(3 ,0.3 , 0.5),
    new THREE.MeshStandardMaterial({color: 0x636363})
)
lilGardenWall2.receiveShadow = true
lilGardenWall2.geometry.rotateX(- Math.PI * 0.5)
lilGardenWall2.position.x = -4
lilGardenWall2.position.y = 0.25
lilGardenWall2.position.z = -15.8
scene.add(lilGardenWall2)

const lilGardenWall3 = new THREE.Mesh(
    new THREE.BoxGeometry(2 ,0.3 , 2),
    new THREE.MeshStandardMaterial({color: 0x636363})
)
lilGardenWall3.receiveShadow = true
lilGardenWall3.geometry.rotateX(- Math.PI * 0.5)
lilGardenWall3.position.x = -6.5
lilGardenWall3.position.y = 1
lilGardenWall3.position.z = -15.8
scene.add(lilGardenWall3)

const lilGardenBackWall = new THREE.Mesh(
    new THREE.BoxGeometry(3.6,0.3, 2),
    new THREE.MeshStandardMaterial({color: 0x636363})
)
lilGardenBackWall.receiveShadow = true
lilGardenBackWall.geometry.rotateX(- Math.PI * 0.5)
lilGardenBackWall.position.x = -7.35
lilGardenBackWall.position.y = 1
lilGardenBackWall.position.z = -14
lilGardenBackWall.rotation.y = Math.PI * 1.5
scene.add(lilGardenBackWall)



/**
 * Grass
 */

//création des brins d'herbes "blade"s
const sampler = new MeshSurfaceSampler(grassStartFloor).build();
const bladesCount = 50000
const bladeGeometry = new THREE.ConeGeometry(0.05, 0.2, 3);
const bladeMaterial = new THREE.MeshStandardMaterial({
    color: 0x008000
});
const blades = new THREE.InstancedMesh(bladeGeometry, bladeMaterial, bladesCount);
blades.castShadow = true
blades.receiveShadow = true
blades.geometry.translate(0,0.1,0)
scene.add(blades);

//génération de la position aléatoire
const tempPosition = new THREE.Vector3();
const tempObject = new THREE.Object3D();
for (let i = 0; i < bladesCount; i++) {
    sampler.sample(tempPosition);
    tempObject.position.set(tempPosition.x, tempPosition.y, tempPosition.z);
    tempObject.scale.setScalar(Math.random() * 0.4 + 0.4);
    tempObject.updateMatrix();
    blades.setMatrixAt(i, tempObject.matrix);
}


//création des brins d'herbes "blade"s
const sampler2 = new MeshSurfaceSampler(grassEndFloor).build();
const bladesCount2 = 5000
const bladeGeometry2 = new THREE.ConeGeometry(0.05, 0.2, 3);
const bladeMaterial2 = new THREE.MeshStandardMaterial({
    color: 0x154215
});
const blades2 = new THREE.InstancedMesh(bladeGeometry2, bladeMaterial2, bladesCount2);
blades2.castShadow = true
blades2.receiveShadow = true
blades2.geometry.translate(0,0.1,0)
scene.add(blades2);

//génération de la position aléatoire
const tempPosition2 = new THREE.Vector3();
const tempObject2 = new THREE.Object3D();
for (let i = 0; i < bladesCount2; i++) {
    sampler2.sample(tempPosition2);
    tempObject2.position.set(tempPosition2.x, tempPosition2.y, tempPosition2.z - 28);
    tempObject2.scale.setScalar(Math.random() * 0.4 + 0.4);
    tempObject2.updateMatrix();
    blades2.setMatrixAt(i, tempObject2.matrix);
}

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 10)
directionalLight.castShadow = true
directionalLight.shadow.camera.top = 20
directionalLight.shadow.camera.right = 20
directionalLight.shadow.camera.bottom = -20
directionalLight.shadow.camera.left = -20
directionalLight.shadow.camera.near = 50
directionalLight.shadow.camera.far = 200
directionalLight.shadow.mapSize.set(2048, 2048)
scene.add(directionalLight)
directionalLight.shadow.normalBias = 0.025

// const helper = new THREE.DirectionalLightHelper( directionalLight);
// scene.add( helper );

// const spotLight = new THREE.SpotLight(0xffffff, 1000,300,120,0,1,2)
// spotLight.position.set(0,40,-100)
// spotLight.target.position.set( 0, 0, 20);
// spotLight.castShadow = true
// scene.add(spotLight)

// const helper = new THREE.SpotLightHelper( spotLight);
// scene.add( helper );

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.outputEncoding = THREE.sRGBEncoding
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.5;
renderer.physicallyCorrectLights = true
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.appendChild(renderer.domElement)

/**
 * Orbit Controls
 */
// const controls = new OrbitControls(camera, renderer.domElement)
// controls.enableDamping = true

/**
 * Sky
 */

const sky = new Sky();
sky.scale.setScalar( 450000 );
scene.add( sky );

const sun = new THREE.Vector3();

const effectController = {
  turbidity: 11.6,
  rayleigh: 0.3,
  mieCoefficient: 0.005,
  mieDirectionalG: 0.7,
  elevation: 45,
  azimuth: -25,
  exposure: renderer.toneMappingExposure
};

function guiChanged() {

    const uniforms = sky.material.uniforms;
    uniforms[ 'turbidity' ].value = effectController.turbidity;
    uniforms[ 'rayleigh' ].value = effectController.rayleigh;
    uniforms[ 'mieCoefficient' ].value = effectController.mieCoefficient;
    uniforms[ 'mieDirectionalG' ].value = effectController.mieDirectionalG;

    const phi = THREE.MathUtils.degToRad( 90 - effectController.elevation );
    const theta = THREE.MathUtils.degToRad( effectController.azimuth );

    sun.setFromSphericalCoords( 1, phi, theta );
    directionalLight.position.copy(sun)
    directionalLight.position.multiplyScalar(100)

    uniforms[ 'sunPosition' ].value.copy( sun );

    renderer.toneMappingExposure = effectController.exposure;
    renderer.render( scene, camera );

}

// const gui = new GUI();

// gui.add( effectController, 'turbidity', 0.0, 20.0, 0.1 ).onChange( guiChanged );
// gui.add( effectController, 'rayleigh', 0.0, 4, 0.001 ).onChange( guiChanged );
// gui.add( effectController, 'mieCoefficient', 0.0, 0.1, 0.001 ).onChange( guiChanged );
// gui.add( effectController, 'mieDirectionalG', 0.0, 1, 0.001 ).onChange( guiChanged );
// gui.add( effectController, 'elevation', 0, 90, 0.1 ).onChange( guiChanged );
// gui.add( effectController, 'azimuth', - 180, 180, 0.1 ).onChange( guiChanged );
// gui.add( effectController, 'exposure', 0, 1, 0.0001 ).onChange( guiChanged );

guiChanged();

/**
 * Controls
 */

let up = false
let left = false
let bottom = false
let right = false
let sprint = false

window.addEventListener('keydown', (event) =>
{
    if(event.code === 'KeyW' || event.code === 'ArrowUp'){
        up = true
    }
    if(event.code === 'KeyS' || event.code === 'ArrowDown'){
        bottom = true
    }
    if(event.code === 'KeyD' || event.code === 'ArrowRight'){
        right = true
    }
    if(event.code === 'KeyA' || event.code === 'ArrowLeft'){
        left = true
    }
    if(event.code === 'ShiftLeft'){
        sprint = true
    }
})

window.addEventListener('keyup', (event) =>
{
    if(event.code === 'KeyW' || event.code === 'ArrowUp'){
        up = false
    }
    if(event.code === 'KeyS' || event.code === 'ArrowDown'){
        bottom = false
    }
    if(event.code === 'KeyD' || event.code === 'ArrowRight'){
        right = false
    }
    if(event.code === 'KeyA' || event.code === 'ArrowLeft'){
        left = false
    }
    if(event.code === 'ShiftLeft'){
        sprint = false
    }
})

let previousTime = Date.now()

/**
* Camera & Avatar Moves
*/
const player = {}
player.position = new THREE.Vector3(-1.5, 0, 0)
player.view = {
    theta: { value: -0.2 },
    phi: { value: Math.PI * 0.52, min: Math.PI * 0.2, max: Math.PI * 0.7 },
    elevation: 1.65,
    radius: 2.5
}

document.body.addEventListener( 'mousedown', () => {

    document.body.requestPointerLock();

} );

document.body.addEventListener( 'mousemove', (event) => {

    if(document.pointerLockElement === document.body) 
    {
        player.view.theta.value -= event.movementX / 1000
        player.view.phi.value -= event.movementY / 1000

        if(player.view.phi.value < player.view.phi.min)
            player.view.phi.value = player.view.phi.min

        if(player.view.phi.value > player.view.phi.max)
            player.view.phi.value = player.view.phi.max
    }
})

/**
 * Loop
 */
const loop = () =>
{
    window.requestAnimationFrame(loop)

    const currentTime = Date.now()
    const deltaTime = currentTime - previousTime
    previousTime = currentTime
        
    if(avatar){

        // Player position
        const playerDirection = new THREE.Vector3()

        let speed = sprint ? 2 : 1
        speed *= deltaTime
        speed *= 0.002

        if(up){
            playerDirection.z = -speed
        }
        if(bottom){
            playerDirection.z = speed
        }
        if(right){
            playerDirection.x = speed
        }
        if(left){
            playerDirection.x = -speed
        }

        playerDirection.applyAxisAngle(new THREE.Vector3(0, 1, 0), player.view.theta.value)

        const oldPlayerPosition = player.position.clone()
        player.position.add(playerDirection)
        avatar.position.copy(player.position)

        // Player rotation
        if(up || bottom || right || left){
            const playerDirection = player.position.clone().sub(oldPlayerPosition)
            const angle = Math.atan2(playerDirection.x, playerDirection.z)
            avatar.rotation.y = angle
        }

        // Player view
        const cameraPosition = new THREE.Vector3()
        cameraPosition.setFromSphericalCoords(player.view.radius, player.view.phi.value, player.view.theta.value)
        cameraPosition.y += player.view.elevation
        cameraPosition.add(player.position)

        const cameraTarget = player.position.clone()
        cameraTarget.y += player.view.elevation

        camera.position.copy(cameraPosition)
        camera.lookAt(cameraTarget)
    }

    // Render
    renderer.render(scene, camera)
}

loop()