import { children, Component, JSXElement } from 'solid-js'
import { A } from "@solidjs/router"

import thumb from "./../Media/thumb.png"

const Nav: Component = () => {
  return <>
    <nav class="flex flex-row p-2 gap-3 h-16 w-screen items-center text-md lg:text-xl">
      <A href="/" class="h-full aspect-square"><img src={thumb} alt="" class="rounded-md"/></A>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/faq">FAQ</NavLink>
      <NavLink href="/contact">Contact</NavLink>
      <NavLink href="privacy">Privacy</NavLink>
    </nav>
  </>
}

const NavLink: Component<{href: string, children: JSXElement}> = (props) => {
  const c = () => children(() => props.children)

  return (
    <A class="flex flex-col justify-center p-2 h-full rounded-md border border-white hover:border-black transition-all duration-200 active:bg-slate-300" activeClass="bg-slate-200" end={true} href={props.href}>{c()}</A>
  )
}

export default Nav