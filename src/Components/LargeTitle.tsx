import { children, Component, JSXElement } from 'solid-js'

const LargeTitle: Component<{children: JSXElement}> = (props) => {
  const c = children(() => props.children)

  return (
    <div class="flex flex-row justify-center text-center"><div class="bg-slate-200 rounded-md p-6 w-fit text-5xl lg:text-8xl">{c()}</div></div>
  )
}

export default LargeTitle