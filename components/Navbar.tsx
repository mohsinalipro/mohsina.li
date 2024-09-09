import { tw } from 'twind'

type NavbarProps = {
  sections: string[]
}

export default function Navbar(props: NavbarProps) {
  return (
    <header className="bg-[#FFD54F] p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">
        <span className="text-gray-800">Mohsin Ali</span>
      </div>
      <nav>
        <ul className="flex space-x-6 text-sm">
      {props.sections.map((section) => (
        <li>
          <a href={`/${section}`} class="text-[#333333] hover:text-gray-600 capitalize">
            {section}
          </a>
        </li>
      ))}
        </ul>
      </nav>
    </div>
  </header>
  );
}
