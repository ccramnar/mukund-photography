import { PageProps } from "$fresh/server.ts";
import PhotoGallery from "../../components/PhotoGallery.tsx";
import PhotoGalleryNav from "../../islands/PhotoGalleryNav.tsx";
import { Layout } from "../../components/Layout.tsx";

const animals = ['/animal/1.png','/animal/2.png', '/animal/3.png']
const people = ['/people/1.png', '/people/2.png', '/people/3.png', '/people/4.png' ]
const places = ['/places/1.png', '/places/2.png', '/places/3.png', '/places/4.png', '/places/5.png', '/places/6.png', '/places/7.png']

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