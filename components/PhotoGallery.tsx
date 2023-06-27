export default function PhotoGallery(props: {photos: Array<string>}) {
    return  (
        <div class="h-full w-full flex flex-col  m-auto p-auto ">
              <div
                class="h-full flex overflow-x-scroll pb-2 pt-2 overflow-y-hidden noscrollbar"
              >
                <div
                  class="h-full flex flex-nowrap ml-40 "
                >
                    {props.photos.map((item) => {
                    return (<div class="inline-block px-6">
                        <div
                          class="w-screen sm:w-96 h-full max-w-xs overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        >
                            <img
                              src={item}
                              class="object-cover bg-white h-full w-full "
                            ></img>
                        </div>
                      </div>)
                    })}  
                </div>
              </div>
              <style>
                {`.noscrollbar::-webkit-scrollbar {
                    display: none;
                }

                .noscrollbar {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }`}
              </style>
        </div>
    )
}