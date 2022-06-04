import { Component } from 'solid-js'

import thumb from "./../Media/thumb.png"

const Header: Component<{page: String}> = (props) => {
    return (
        <header class="flex flex-row p-2 gap-3 h-16 w-screen items-center text-xl">
            <img src={thumb} alt="" class="h-full rounded-md"/>
            <a class={`flex flex-col justify-center p-2 h-full rounded-md border border-white hover:border-black transition-all duration-200 ${props.page == "home" ? "bg-slate-200" : ""}`} href="/">Home</a>
            <a class={`flex flex-col justify-center p-2 h-full rounded-md border border-white hover:border-black transition-all duration-200 ${props.page == "support" ? "bg-slate-200" : ""}`} href="/support">Support</a>
      </header>
    )
}

export default Header