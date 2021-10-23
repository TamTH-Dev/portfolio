import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import {
  Vector3,
  Scene,
  OrthographicCamera,
  WebGLRenderer,
  sRGBEncoding,
  AmbientLight,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { loadGLTFModel } from '../libs/model'

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

const DogContainer = forwardRef(
  ({ children }: { children: ReactNode }, ref: any) => (
    <Box
      ref={ref}
      className="voxel-dog"
      m="auto"
      mt={['-20px', '-60px', '-120px']}
      mb={['-40px', '-140px', '-200px']}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {children}
    </Box>
  )
)

const VoxelDog = () => {
  const refContainer: any = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState<WebGLRenderer>()
  const [_camera, setCamera] = useState<OrthographicCamera>()
  const [target] = useState(new Vector3(-0.5, 1.2, 0))
  const [initialCameraPosition] = useState(
    new Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))
  )
  const [scene] = useState(new Scene())
  const [_controls, setControls] = useState<OrbitControls>()

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (!container || !renderer) return

    const scW = container.clientWidth
    const scH = container.clientHeight

    renderer.setSize(scW, scH)
  }, [renderer])

  useEffect(() => {
    const { current: container } = refContainer
    if (!container || renderer) return
    const scW = container.clientWidth
    const scH = container.clientHeight

    const newRenderer = new WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    newRenderer.setPixelRatio(window.devicePixelRatio)
    newRenderer.setSize(scW, scH)
    newRenderer.outputEncoding = sRGBEncoding
    container.appendChild(newRenderer.domElement)
    setRenderer(newRenderer)

    // 640 -> 240
    // 8   -> 6
    const scale = scH * 0.005 + 4.8
    const camera = new OrthographicCamera(
      -scale,
      scale,
      scale,
      -scale,
      0.01,
      50000
    )
    camera.position.copy(initialCameraPosition)
    camera.lookAt(target)
    setCamera(camera)

    const ambientLight = new AmbientLight(0xcccccc, 1)
    scene.add(ambientLight)

    const controls = new OrbitControls(camera, newRenderer.domElement)
    controls.autoRotate = true
    controls.target = target
    setControls(controls)

    loadGLTFModel(scene, '/dog.glb', {
      receiveShadow: false,
      castShadow: false,
    }).then(() => {
      animate()
      setLoading(false)
    })

    let req: number = 0
    let frame: number = 0
    const animate = () => {
      req = requestAnimationFrame(animate)

      frame = frame <= 100 ? frame + 1 : frame

      if (frame <= 100) {
        const p = initialCameraPosition
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

        camera.position.y = 10
        camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
        camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
        camera.lookAt(target)
      } else {
        controls.update()
      }

      newRenderer.render(scene, camera)
    }

    return () => {
      cancelAnimationFrame(req)
      newRenderer.dispose()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return (
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  )
}

export default VoxelDog
