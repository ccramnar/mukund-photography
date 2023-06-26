
import { useState } from 'preact/hooks';

const navigation = [
    { name: 'Animals', href: '#', current: true },
    { name: 'Landscape', href: '#', current: false },
    { name: 'People', href: '#', current: false }
  ]
 
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function PhotoGalleryNav(props: { initialState: string }) {
    const [selected, setSelected] = useState(props.initialState)
    return (
        <div className="flex grow flex-col h-full gap-y-5 overflow-y-auto border-r border-gray-200 px-2">
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-50 text-indigo-600'
                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      )

}