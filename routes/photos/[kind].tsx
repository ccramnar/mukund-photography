import { PageProps } from "$fresh/server.ts";
import PhotoGallery from "../../components/PhotoGallery.tsx";
import PhotoGalleryNav from "../../islands/PhotoGalleryNav.tsx";
import { Layout } from "../../components/Layout.tsx";

const animals = ['/animal/brahmini kite export.jpg','/animal/raccoon.png', '/animal/river tern final.jpg']
const people = ['/people/neon portrait.jpg', '/people/party highlight-2.jpg', '/people/party highlight.jpg', '/people/Shining Tree.jpg' ]
const places = ['/places/creepy forest river.jpg', '/places/deserted series-2.jpg', '/places/deserted series-4.jpg', '/places/frame 3.jpg', '/places/lake ontario(A3 L).jpg', '/places/Shining Tree-11.jpg', '/places/symmetry.jpg']

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