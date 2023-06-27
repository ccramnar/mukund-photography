import { PageProps } from "$fresh/server.ts";
import About from "../components/About.tsx";
import { Layout } from "../components/Layout.tsx";
import NavBar from "../components/NavBar.tsx";



export default function Home(props: PageProps) {
  return (
<Layout {...props}>
      <div class="flex-grow w-full flex justify-center items-center" style={{ 
        backgroundImage: `url("./headshot.png")`, 
        }}>
          <About
            img="/headshot.png"
            title="Mukund"
          >
            Mukund stuff
          </About>
        </div>
    </Layout>
  );
}