import { Component } from 'solid-js'

import thumb from "./../Media/thumb.png"

const Header: Component<{page: String}> = (props) => {
  return (
    <header class="flex flex-row p-2 gap-3 h-16 w-screen items-center text-xl">
      <a href="/" class="h-full aspect-square"><img src={thumb} alt="" class="rounded-md"/></a>
      <a class={`flex flex-col justify-center p-2 h-full rounded-md border border-white hover:border-black transition-all duration-200 ${props.page == "home" ? "bg-slate-200" : ""}`} href="/">Home</a>
      <a class={`flex flex-col justify-center p-2 h-full rounded-md border border-white hover:border-black transition-all duration-200 ${props.page == "faq" ? "bg-slate-200" : ""}`} href="/faq">FAQ</a>
      <a class={`flex flex-col justify-center p-2 h-full rounded-md border border-white hover:border-black transition-all duration-200 ${props.page == "contact" ? "bg-slate-200" : ""}`} href="/contact">Contact</a>
    </header>
  )
}

export default Header