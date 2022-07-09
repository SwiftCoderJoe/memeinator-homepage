import { children, Component, JSXElement } from 'solid-js'

const BoxLink: Component<{children: JSXElement, href: string}> = (props) => {
  const c = children(() => props.children)

  return (
    <a class="text-center text-md lg:text-xl" href={props.href}>
      <div class="flex flex-col divide-solid p-3 gap-3 border rounded-md transition-all duration-200 hover:bg-slate-200">
        {c()}
      </div>
    </a>
  )
}

export default BoxLink