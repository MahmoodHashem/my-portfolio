import { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import { projectsData } from '../data/projects-data'
import ProjectCard from './ProjectCard'


const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})

const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })

const trans = (r, s) =>
  `perspective(1500px) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function ProjectStack() {
  const [gone] = useState(() => new Set())
  const [props, api] = useSprings(projectsData.length, (i) => ({
    ...to(i),
    from: from(i),
  }))

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2
      const dir = xDir < 0 ? -1 : 1
      if (!down && trigger) gone.add(index)
      api.start((i) => {
        if (index !== i) return
        const isGone = gone.has(index)
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0)
        const scale = down ? 1.1 : 1
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        }
      })
      if (!down && gone.size === projectsData.length)
        setTimeout(() => {
          gone.clear()
          api.start((i) => to(i))
        }, 600)
    }
  )

  return (
    <div className="relative flex justify-center  h-screen ">
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div
          key={i}
          className="stack absolute will-change-transform"
          style={{ x, y }}
        >
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${projectsData[i].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            
          
          >
          <ProjectCard project={projectsData[i]} class='w-96' />
          </animated.div>
        </animated.div>
      ))}
    </div>
  )
}

export default ProjectStack
