import { children, Component, JSXElement } from 'solid-js'

import thumb from "./../Media/thumb.png"

const HeaderItem: Component<{href: string, enabled: boolean, children: JSXElement}> = (props) => {
  const c = () => children(() => props.children)

  return (
    <a class={`flex flex-col justify-center p-2 h-full rounded-md border border-white hover:border-black transition-all duration-200 ${props.enabled ? "bg-slate-200" : ""}`} href={props.href}>
      {c()}
    </a>
  )
}

const Header: Component<{page: ("home" | "faq" | "contact" | "privacy")}> = (props) => {
  return (
    <header class="flex flex-row p-2 gap-3 h-16 w-screen items-center text-md lg:text-xl">
      <a href="/" class="h-full aspect-square"><img src={thumb} alt="" class="rounded-md"/></a>
      <HeaderItem href="/" enabled={props.page == "home"}>Home</HeaderItem>
      <HeaderItem href="/faq" enabled={props.page == "faq"}>FAQ</HeaderItem>
      <HeaderItem href="/contact" enabled={props.page == "contact"}>Contact</HeaderItem>
      <HeaderItem href="/privacy" enabled={props.page == "privacy"}>Privacy</HeaderItem>
    </header>
  )
}

export default Header