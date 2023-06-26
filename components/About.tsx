export default function About(props : {children: string; img: string; title: string}) {
    return (
        <div class="flex shadow-lg rounded p-4 bg-gray-100">
        <div class="mr-4 flex-shrink-0">
          <img
            class="h-16 w-16 border border-gray-300"
            src={props.img}
          >
          </img>
        </div>
        <div>
          <h4 class="text-lg font-bold">{props.title}</h4>
          {/*  tells react it needs to execute javascript (intead of plain string) */}
          <p class="mt-1 max-w-md">{props.children}</p>
        </div>
      </div>
    )

}