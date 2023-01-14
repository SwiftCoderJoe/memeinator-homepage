import { children, Component, JSXElement } from 'solid-js'

import Box from './Box'

const Question: Component<{asking: string, children: JSXElement}> = (props) => {
  const c = children(() => props.children)

  return (
    <Box>
      <p class="text-lg lg:text-2xl border-b">{props.asking}</p>
      <p class="text-md lg:text-xl font-light">{c()}</p>
    </Box>
  )
}

export default Question