
import { useState } from 'preact/hooks';

const navigation = [
    { name: 'ANIMALS', href: '/photos/animals' },
    { name: 'PLACES', href: '/photos/places'},
    { name: 'PEOPLE', href: '/photos/people'}
  ]
 
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

export default function PhotoGalleryNav(props: { initialState: string; pathname: string }) {
    const [selected, setSelected] = useState(props.initialState)

    
    return (
        <div className="flex flex-col h-full px-2 pt-4 pb-10 bg-white bg-opacity-50">
          <nav className="flex justify-center flex-col">
                <ul role="list" className="">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          props.pathname === item.href
                            ? 'text-indigo-600 bg-white-100 hover:bg-gray-50'
                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                          'group flex gap-x-3 rounded-md p-2 text-xl leading-6 font-semibold'
                        )}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
          </nav>
        </div>
      )

}