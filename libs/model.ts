import { Object3D, Scene } from 'three'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const loadGLTFModel = (
  scene: Scene,
  glbPath: string,
  options = { receiveShadow: true, castShadow: true }
) => {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.load(
      glbPath,
      (gltf: GLTF) => {
        const obj = gltf.scene
        obj.name = 'dog'
        obj.position.x = 0
        obj.position.y = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow

        scene.add(obj)

        obj.traverse((child: Object3D) => {
          // if (!child.isMesh) return
          child.receiveShadow = receiveShadow
          child.castShadow = castShadow
        })
        resolve(obj)
      },
      undefined,
      function (error: ErrorEvent) {
        reject(error)
      }
    )
  })
}
