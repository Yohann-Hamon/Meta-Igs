import './style.css'
import * as THREE from 'three'
import { MeshSurfaceSampler } from 'three/addons/math/MeshSurfaceSampler.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { Sky } from 'three/addons/objects/Sky.js';
import { Vector3 } from 'three'

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
    'avatar-transformed.glb',
    (gltf) =>
    {
        avatar = gltf.scene
        avatar.scale.set(1, 1, 1)
        avatar.position.x = 0
        avatar.position.y = 0
        avatar.position.z = 0
        avatar.add(camera)
        camera.lookAt(avatar.position)
        camera.position.set(avatar.position.x, avatar.position.y + 2, avatar.position.z)
        camera.rotation.y = Math.PI * 1

        avatar.traverse((child) => {
            if(child.isMesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        avatar.rotation.y = camera.rotation.y

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


/**
 * Scene
 */
const scene = new THREE.Scene()
const axesHelper = new THREE.AxesHelper( 100 )
scene.add( axesHelper )


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
const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height)
camera.rotation.reorder('YXZ')
scene.add(camera)

/**
 * Floor
 */
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(15, 10),
  new THREE.MeshStandardMaterial({color: 0x008000})
)
floor.receiveShadow = true
floor.geometry.rotateX(- Math.PI * 0.5)
scene.add(floor)

const floor2 = new THREE.Mesh(
  new THREE.PlaneGeometry(15, 6),
  new THREE.MeshStandardMaterial({color: 0x154215})
)
floor2.receiveShadow = true
floor2.position.z = -28
floor2.geometry.rotateX(- Math.PI * 0.5)
scene.add(floor2)

//street
const streetFloor = new THREE.Mesh(
  new THREE.PlaneGeometry(15,20),
  new THREE.MeshStandardMaterial({color: 0x2a2a2a})
)
streetFloor.receiveShadow = true
streetFloor.geometry.rotateX(- Math.PI * 0.5)
streetFloor.position.z = -15
scene.add(streetFloor)

//StreetBump
const streetBump = new THREE.Mesh(
  new THREE.BoxGeometry(15,0.4, 0.05),
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
const sampler = new MeshSurfaceSampler(floor).build();
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
const sampler2 = new MeshSurfaceSampler(floor2).build();
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
directionalLight.shadow.camera.top = 10
directionalLight.shadow.camera.right = 10
directionalLight.shadow.camera.bottom = -10
directionalLight.shadow.camera.left = -10
directionalLight.shadow.camera.near = 50
directionalLight.shadow.camera.far = 200
scene.add(directionalLight)
directionalLight.shadow.normalBias = 0.025

const helper = new THREE.DirectionalLightHelper( directionalLight);
scene.add( helper );

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
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

/**
 * Sky
 */

const sky = new Sky();
sky.scale.setScalar( 450000 );
scene.add( sky );

const sun = new THREE.Vector3();


const effectController = {
  turbidity: 10,
  rayleigh: 3,
  mieCoefficient: 0.005,
  mieDirectionalG: 0.7,
  elevation: 18.5,
  azimuth: 180,
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

const gui = new GUI();

gui.add( effectController, 'turbidity', 0.0, 20.0, 0.1 ).onChange( guiChanged );
gui.add( effectController, 'rayleigh', 0.0, 4, 0.001 ).onChange( guiChanged );
gui.add( effectController, 'mieCoefficient', 0.0, 0.1, 0.001 ).onChange( guiChanged );
gui.add( effectController, 'mieDirectionalG', 0.0, 1, 0.001 ).onChange( guiChanged );
gui.add( effectController, 'elevation', 0, 90, 0.1 ).onChange( guiChanged );
gui.add( effectController, 'azimuth', - 180, 180, 0.1 ).onChange( guiChanged );
gui.add( effectController, 'exposure', 0, 1, 0.0001 ).onChange( guiChanged );

guiChanged();

/**
 * Controls
 */

let up = false
let left = false
let bottom = false
let right = false

window.addEventListener('keydown', (event) =>
{
  if(event.key === ('z' || 'arrowUp')){
    up = true
  }
  if(event.key === 's'){
    bottom = true
  }
  if(event.key === 'd'){
    right = true
  }
  if(event.key === 'q'){
    left = true
  }
})

window.addEventListener('keyup', (event) =>
{
  if(event.key === 'z' ){
    up = false
  }
  if(event.key === 's'){
    bottom = false
  }
  if(event.key === 'd'){
    right = false
  }
  if(event.key === 'q'){
    left = false
  }
})

let previousTime = Date.now()


/**
 * Loop
 */
const loop = () =>
{
    window.requestAnimationFrame(loop)

    // Update controls
    // controls.update()


        const currentTime = Date.now()
        const deltaTime = currentTime - previousTime
        previousTime = currentTime
        
    const playerDirection = new THREE.Vector3()

    if(up){
      playerDirection.z = deltaTime * 0.002
    }
    if(bottom){
      playerDirection.z = -deltaTime * 0.002
    }
    if(right){
      playerDirection.x = -deltaTime * 0.002
    }
    if(left){
      playerDirection.x = deltaTime * 0.002
    }

    playerDirection.applyAxisAngle(new THREE.Vector3(0,1,0), camera.rotation.y)

    if(avatar){
      avatar.position.add(playerDirection)
      
      /**
      * Camera & Avatar Moves
      */

     document.body.addEventListener( 'mousedown', () => {

       document.body.requestPointerLock();

     } );

     document.body.addEventListener( 'mousemove', (event) => {

       if ( document.pointerLockElement === document.body ) 
       {
           camera.rotation.y -= event.movementX / 1000000
           camera.rotation.x -= event.movementY / 100000
           
           avatar.rotation.y -= event.movementX / 100000

       }
     })
    }



    // Render
    renderer.render(scene, camera)

}

loop()