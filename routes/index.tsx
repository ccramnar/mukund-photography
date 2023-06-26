import { PageProps } from "$fresh/server.ts";
import About from "../components/About.tsx";
import NavBar from "../components/NavBar.tsx";


const style = ` {
  background: white;
  background-size: 400% 400%;
}`

export default function Home(props: PageProps) {
  return (
    <div class="absolute inset-0 flex-col flex justify-center items-center">
      <div class="w-full">
        <NavBar route={props.route} />
      </div>
      <div class=" w-full h-full relative inset-0 flex justify-center items-center">
          <About
            img="/raccoon.png"
            title="Mukund"
          >
            Mukund stuff
          </About>
        </div>
        <style>{style}</style>
    </div>
  );
}