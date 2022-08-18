// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Red Cube
const gemometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(gemometry, material) // Create Mesh
scene.add(mesh) // Add Mesh to Scene

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer ({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)