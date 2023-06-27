import { Handler, Handlers, PageProps } from "$fresh/server.ts";
import { useState } from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.js";
import NavBar from "../../components/NavBar.tsx";
import PhotoGallery from "../../components/PhotoGallery.tsx";
import PhotoGalleryNav from "../../islands/PhotoGalleryNav.tsx";
import { Layout } from "../../components/Layout.tsx";

export const handler: Handlers = {
  GET() {
    return new Response(null, {
      status: 302,
      headers: {
        "Location": "/photos/animals"
      }
    })
  }
}