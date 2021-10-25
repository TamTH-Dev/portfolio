import { Object3D, Scene } from 'three'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const loadGLTFModel = (
  scene: Scene,
  path: string,
  options = { receiveShadow: true, castShadow: true }
) => {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.load(
      path,
      (gltf: GLTF) => {
        const obj = gltf.scene
        obj.name = 'dog'
        obj.position.x = 0
        obj.position.y = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow

        // Add loaded model to scene
        scene.add(obj)

        // Apply shadow for all descendants
        obj.traverse((child: Object3D) => {
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
