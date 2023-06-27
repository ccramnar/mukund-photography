import { PageProps } from "$fresh/server.ts";
import { JSX } from "preact";
import NavBar from "./NavBar.tsx";

export function Layout(props: PageProps & { children: JSX.Element }) {
    return (
        <div class="flex-col flex justify-start items-center min-h-screen">
            <div class="w-full">
                <NavBar route={props.route} />
            </div>
            {props.children}
        </div>
    )
}