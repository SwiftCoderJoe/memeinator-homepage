import { Component } from 'solid-js'
import { A } from "@solidjs/router"

import thumb from "./../Media/thumb.png"

const Nav: Component = () => {
  return <>
    <nav class="flex flex-row p-2 gap-3 h-16 w-screen items-center text-xl">
      <A href="/" class="h-full aspect-square"><img src={thumb} alt="" class="rounded-md"/></A>
      <NavLink name="Home" page="" />
      <NavLink name="FAQ" page="faq" />
      <NavLink name="Contact" page="contact" />
    </nav>
  </>
}

const NavLink: Component<{page: string, name: string}> = (props) => {
  return (
    <A class="flex flex-col justify-center p-2 h-full rounded-md border border-white hover:border-black transition-all duration-200 active:bg-slate-300" activeClass="bg-slate-200" end={true} href={`/${props.page}`}>{props.name}</A>
  )
}

export default Nav