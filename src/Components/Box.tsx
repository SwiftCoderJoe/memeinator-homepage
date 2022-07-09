import { children, Component, JSXElement } from 'solid-js'

const Box: Component<{children: JSXElement}> = (props) => {
  const c = children(() => props.children)

  return (
    <div class="flex flex-col divide-solid p-3 gap-3 border rounded-md">
      {c()}
    </div>
  )
}

export default Box