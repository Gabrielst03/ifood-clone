import { SearchIcon, ChevronDownIcon, UserIcon, ShoppingBagIcon } from "lucide-react";

export function Header() {
    return (
        <header className="flex items-center md:justify-between h-20 px-12">
            <div className="flex items-center gap-2">
                <img src="/logo.png" className="w-14" alt="" />

                <nav className="hidden lg:flex items-center gap-5 ml-5">
                    <a href="/inicio" className="text-red-500 text-sm font-medium">Início</a>
                    <a href="/inicio" className="text-zinc-500 hover:text-red-500 text-sm font-medium">Restaurantes</a>
                    <a href="/inicio" className="text-zinc-500 hover:text-red-500 text-sm font-medium">Mercados</a>
                    <a href="/inicio" className="text-zinc-500 hover:text-red-500 text-sm font-medium">Bebidas</a>
                    <a href="/inicio" className="text-zinc-500 hover:text-red-500 text-sm font-medium">Farmácias</a>
                    <a href="/inicio" className="text-zinc-500 hover:text-red-500 text-sm font-medium">Pets</a>
                    <a href="/inicio" className="text-zinc-500 hover:text-red-500 text-sm font-medium">Shopping</a>
                </nav>
            </div>

            <div className="w-[600px] h-12 hidden xl:flex items-center gap-1 px-3 rounded-lg bg-zinc-100">
                <SearchIcon className="text-red-500 w-5 h-5" />
                <input type="text" className="bg-transparent text-sm outline-none ml-2" placeholder="Busque por item ou loja" />
            </div>

            <div className="flex items-center gap-1 ml-4 md:ml-0">
                <div className="flex items-center gap-1">
                    <p className="font-medium text-zinc-700">Rua Cristiane, 507</p>
                    <ChevronDownIcon className="text-red-500" />
                </div>

                <UserIcon className="text-red-500 ml-3 hidden md:block" />

                <div className="hidden md:flex items-center gap-2 ml-6">
                    <ShoppingBagIcon className="text-red-500" />
                    <div className="flex flex-col -gap-1 text-xs">
                        <h1>R$ 0,00</h1>
                        <p>0 items</p>
                    </div>
                </div>
            </div>
        </header>

    )
}