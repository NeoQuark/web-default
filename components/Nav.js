import Link from 'next/link';
import { useToggle } from '../lib/hooks';

export default function Nav() {
	const [menuToggled, setMenuToggled] = useToggle(false);

    return (
        <nav className='flex z-50 relative'>
			<div className="flex w-full m-auto py-5 px-8 xl:py-5 xl:px-20 xl:justify-between items-center bg-white dark:bg-gray-800 text-neutral-800 shadow-lg">
				<div className="xl:hidden absolute flex text-2xl text-neutral-300 hover:text-neutral-500 duration-200">
					<button className="flex items-center" onClick={setMenuToggled}>
						<ion-icon name="menu"></ion-icon>
					</button>
				</div>
				<div className="flex grow justify-center xl:justify-start text-lg font-black dark:text-white">
					<Link href="/">NEXT STARTER</Link>
				</div>
				<ul className="hidden xl:flex items-center gap-12 text-base text-neutral-400">
					<li>
						<Link href="/"><a className="hover:text-neutral-700 dark:hover:text-white duration-200">Accueil</a></Link>
					</li>
				</ul>
			</div>
			<div className={`xl:hidden flex-col fixed z-50 w-full h-full p-6 ${!menuToggled ? "translate-x-[-150%]" : "translate-x-[0%]"} items-center overflow-y-scroll bg-white shadow-xl transition-transform ease-in-out duration-500`}>				
				<div className="flex flex-1 justify-end text-3xl text-neutral-300 hover:text-neutral-500 duration-200">
					<button className="flex items-center" onClick={setMenuToggled}>
						<ion-icon name="close"></ion-icon>
					</button>
				</div>
				<ul className="flex flex-col w-full h-2/3 justify-center text-center text-lg text-neutral-400 space-y-8">
                    <li>
						<Link href="/"><a className="hover:text-neutral-700 dark:hover:text-white duration-200">Accueil</a></Link>
					</li>
				</ul>
			</div>
		</nav>
    )
}