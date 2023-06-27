import { PageProps } from "$fresh/server.ts";
import About from "../components/About.tsx";
import { Layout } from "../components/Layout.tsx";
import NavBar from "../components/NavBar.tsx";



export default function Home(props: PageProps) {
  return (
<Layout {...props}>
      <div class="flex-grow w-full flex justify-center items-center" style={{ 
        background: `no-repeat center center fixed url("/places/lake ontario(A3 L).jpg")`, 
        backgroundSize: 'cover'

        }}>
          <About
            img="/headshot.png"
            title="Mukund Does Photography"
          >
            Welcome to my W.I.P page to display my photography!
          </About>
        </div>
    </Layout>
  );
}