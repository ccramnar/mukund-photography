import { PageProps } from "$fresh/server.ts";
import { useState } from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.js";
import NavBar from "../../components/NavBar.tsx";
import PhotoGallery from "../../components/PhotoGallery.tsx";
import PhotoGalleryNav from "../../islands/PhotoGalleryNav.tsx";


const style = ` {
  background: white;
  background-size: 400% 400%;
}`


export default function PhotosPage(props: PageProps) {
  return (
    <div class="absolute inset-0 flex-col flex justify-center items-center h-full">
      <div class="w-full">
        <NavBar route={props.route} />
      </div>
      <div class="flex-grow w-full relative inset-0 flex justify-center items-center">
      <div className="flex h-full w-full flex-col bg-blue-100">
          <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
            <div className="relative overflow-x-auto flex-1 -z-1">{
              <>
              <div className="absolute w-40 shrink-0 lg:block z-1">{<PhotoGalleryNav initialState="lol"/>}</div>  
              <PhotoGallery/>
              </>
              }</div>
          </div>
        </div>
        </div>
        <style>{style}</style>
    </div>
  );
}