function SiteLink(props: { route: string; href: string; children: string }) {
    console.log(props)
    const active = "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
    const inactive = "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    return <a href={props.href} class={props.route === props.href ? active : inactive}>{props.children}</a>
  }
  
  export default function NavBar(props: { route: string }) {
    return (
      <nav class="bg-gray-100 shadow">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 justify-between">
            <div class="flex">
              <div class="-ml-2 mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span class="sr-only">Open main menu</span>
                  <svg
                    class="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <svg
                    class="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="hidden md:ml-6 md:flex md:space-x-8">
                <SiteLink
                  href="/"
                  route={props.route}
                >
                  About
                </SiteLink>
                <SiteLink
                  href="/photos"
                  route={props.route}
                >
                  Photos
                </SiteLink>
              </div>
            </div>
            <div class="flex items-center gap-2">
             <div class="flex-shrink-0">
              <a href="https://github.com/ccramnar/" target="_blank" class="relative inline-flex items-center rounded-md border border-gray-400 px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-200">
              &nbsp;
              <svg class="w-5 h-5 inline" viewBox="0 0 24 24" aria-hidden="true" ><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>
              &nbsp;
              </a>
              </div>
              <div class="flex-shrink-0">
              <a href="https://www.instagram.com/mukund_does_photography/" target="_blank" class="relative inline-flex items-center rounded-md border border-gray-400 px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-200">
              &nbsp;
              <svg  class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="instagram"><linearGradient id="a" x1="1.464" x2="14.536" y1="14.536" y2="1.464" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFC107"></stop><stop offset=".507" stop-color="#F44336"></stop><stop offset=".99" stop-color="#9C27B0"></stop></linearGradient><path fill="url(#a)" d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"></path><linearGradient id="b" x1="5.172" x2="10.828" y1="10.828" y2="5.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFC107"></stop><stop offset=".507" stop-color="#F44336"></stop><stop offset=".99" stop-color="#9C27B0"></stop></linearGradient><path fill="url(#b)" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"></path><linearGradient id="c" x1="11.923" x2="12.677" y1="4.077" y2="3.323" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFC107"></stop><stop offset=".507" stop-color="#F44336"></stop><stop offset=".99" stop-color="#9C27B0"></stop></linearGradient><circle cx="12.3" cy="3.7" r=".533" fill="url(#c)"></circle></svg>
              &nbsp;
              </a>
              </div>
              <div class="flex-shrink-0">
                <a
                  class="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  href="mailto:ccramnar@uwaterloo.ca"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="-ml-1 mr-2 h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span>Email Me</span>
                </a>
              </div>
              {/* <div class="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center"> */}
              {/*   <button */}
              {/*     type="button" */}
              {/*     class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" */}
              {/*   > */}
              {/*     <span class="sr-only">View notifications</span> */}
              {/*     <svg */}
              {/*       class="h-6 w-6" */}
              {/*       xmlns="http://www.w3.org/2000/svg" */}
              {/*       fill="none" */}
              {/*       viewBox="0 0 24 24" */}
              {/*       stroke-width="1.5" */}
              {/*       stroke="currentColor" */}
              {/*       aria-hidden="true" */}
              {/*     > */}
              {/*       <path */}
              {/*         stroke-linecap="round" */}
              {/*         stroke-linejoin="round" */}
              {/*         d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" */}
              {/*       /> */}
              {/*     </svg> */}
              {/*   </button> */}
  
              {/*   <div class="relative ml-3"> */}
              {/*     <div> */}
              {/*       <button */}
              {/*         type="button" */}
              {/*         class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" */}
              {/*         id="user-menu-button" */}
              {/*         aria-expanded="false" */}
              {/*         aria-haspopup="true" */}
              {/*       > */}
              {/*         <span class="sr-only">Open user menu</span> */}
              {/*         <img */}
              {/*           class="h-8 w-8 rounded-full" */}
              {/*           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" */}
              {/*           alt="" */}
              {/*         /> */}
              {/*       </button> */}
              {/*     </div> */}
  
              {/*     <div */}
              {/*       class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" */}
              {/*       role="menu" */}
              {/*       aria-orientation="vertical" */}
              {/*       aria-labelledby="user-menu-button" */}
              {/*       tabIndex={-1} */}
              {/*     > */}
              {/*       <a */}
              {/*         href="#" */}
              {/*         class="block px-4 py-2 text-sm text-gray-700" */}
              {/*         role="menuitem" */}
              {/*         tabIndex={-1} */}
              {/*         id="user-menu-item-0" */}
              {/*       > */}
              {/*         Your Profile */}
              {/*       </a> */}
              {/*       <a */}
              {/*         href="#" */}
              {/*         class="block px-4 py-2 text-sm text-gray-700" */}
              {/*         role="menuitem" */}
              {/*         tabIndex={-1} */}
              {/*         id="user-menu-item-1" */}
              {/*       > */}
              {/*         Settings */}
              {/*       </a> */}
              {/*       <a */}
              {/*         href="#" */}
              {/*         class="block px-4 py-2 text-sm text-gray-700" */}
              {/*         role="menuitem" */}
              {/*         tabIndex={-1} */}
              {/*         id="user-menu-item-2" */}
              {/*       > */}
              {/*         Sign out */}
              {/*       </a> */}
              {/*     </div> */}
              {/*   </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
  
        <div class="md:hidden" id="mobile-menu">
          <div class="space-y-1 pt-2 pb-3">
            <a
              href="#"
              class="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6"
            >
              Dashboard
            </a>
            <a
              href="#"
              class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
            >
              Team
            </a>
            <a
              href="#"
              class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
            >
              Projects
            </a>
            <a
              href="#"
              class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
            >
              Calendar
            </a>
          </div>
          {/* <div class="border-t border-gray-200 pt-4 pb-3"> */}
          {/*   <div class="flex items-center px-4 sm:px-6"> */}
          {/*     <div class="flex-shrink-0"> */}
          {/*       <img */}
          {/*         class="h-10 w-10 rounded-full" */}
          {/*         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" */}
          {/*         alt="" */}
          {/*       /> */}
          {/*     </div> */}
          {/*     <div class="ml-3"> */}
          {/*       <div class="text-base font-medium text-gray-800">Tom Cook</div> */}
          {/*       <div class="text-sm font-medium text-gray-500"> */}
          {/*         tom@example.com */}
          {/*       </div> */}
          {/*     </div> */}
          {/*     <button */}
          {/*       type="button" */}
          {/*       class="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" */}
          {/*     > */}
          {/*       <span class="sr-only">View notifications</span> */}
          {/*       <svg */}
          {/*         class="h-6 w-6" */}
          {/*         xmlns="http://www.w3.org/2000/svg" */}
          {/*         fill="none" */}
          {/*         viewBox="0 0 24 24" */}
          {/*         stroke-width="1.5" */}
          {/*         stroke="currentColor" */}
          {/*         aria-hidden="true" */}
          {/*       > */}
          {/*         <path */}
          {/*           stroke-linecap="round" */}
          {/*           stroke-linejoin="round" */}
          {/*           d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" */}
          {/*         /> */}
          {/*       </svg> */}
          {/*     </button> */}
          {/*   </div> */}
          {/*   <div class="mt-3 space-y-1"> */}
          {/*     <a */}
          {/*       href="#" */}
          {/*       class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6" */}
          {/*     > */}
          {/*       Your Profile */}
          {/*     </a> */}
          {/*     <a */}
          {/*       href="#" */}
          {/*       class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6" */}
          {/*     > */}
          {/*       Settings */}
          {/*     </a> */}
          {/*     <a */}
          {/*       href="#" */}
          {/*       class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6" */}
          {/*     > */}
          {/*       Sign out */}
          {/*     </a> */}
          {/*   </div> */}
          {/* </div> */}
        </div>
      </nav>
    );
  }