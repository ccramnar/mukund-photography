const landscapePhotos = ['./1.jpeg', './2.jpeg', './3.jpeg', './4.jpeg',];

export default function PhotoGallery(props: {children?: string}) {
    return  (
        <>
        <div class="flex flex-col  m-auto p-auto">
              <div
                class="flex overflow-x-scroll pb-10 hide-scroll-bar"
              >
                <div
                  class="flex flex-nowrap ml-40 "
                >
                    {landscapePhotos.map((item) => {
                    <div class="inline-block px-3">
                        <div
                          class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                      </div>
                    })}
                  
                  <div class="inline-block px-3">
                    <div
                      class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    ></div>
                  </div>
                  <div class="inline-block px-3">
                    <div
                      class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    ></div>
                  </div>
                  <div class="inline-block px-3">
                    <div
                      class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    ></div>
                  </div>
                  <div class="inline-block px-3">
                    <div
                      class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    ></div>
                  </div>
                  <div class="inline-block px-3">
                    <div
                      class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    ></div>
                  </div>
                  <div class="inline-block px-3">
                    <div
                      class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    ></div>
                  </div>
                  <div class="inline-block px-3">
                    <div
                      class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    ></div>
                  </div>
                </div>
              </div>
        </div>
        </>
    )
}