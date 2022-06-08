import { children, Component, JSXElement } from 'solid-js'

const Question: Component<{asking: string, children: JSXElement}> = (props) => {
  const c = children(() => props.children)

  return (
    <div class="flex flex-col divide-solid p-3 gap-3 border rounded-md">
      <p class="text-lg lg:text-2xl border-b">{props.asking}</p>
      <p class="text-md lg:text-xl font-light">{c()}</p>
    </div>
  )
}

export default Question