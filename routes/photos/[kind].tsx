import { PageProps } from "$fresh/server.ts";
import PhotoGallery from "../../components/PhotoGallery.tsx";
import PhotoGalleryNav from "../../islands/PhotoGalleryNav.tsx";
import { Layout } from "../../components/Layout.tsx";

const animals = ['/1.png','/2.png', '/3.png']
const people = ['/1.png', '/2.png', '/3.png', '/4.png' ]
const places = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/6.png', '/7.png']

const photos = {
    animals,
    people,
    places
}


const  getPhotosFromRoute = (route: string): null | string[] => {
    if (route in photos) {
        return photos[route as keyof typeof photos]
    }
    return null
}

export default function PhotosPage(props: PageProps) {
    const thesePhotos = getPhotosFromRoute(props.params.kind)

    if (!thesePhotos) return (<div>oops</div>);

  return ( 
<Layout {...props }>
      <div class="w-full flex-grow relative">
      <div class="inset-0 absolute">
              <PhotoGallery photos={thesePhotos}/>
              </div>
              <div className="px-4 top-0 bottom-0 absolute w-40 z-1">
                <PhotoGalleryNav initialState="lol" pathname={props.url.pathname} />
              </div>  

            </div>
    </Layout>
  );
}