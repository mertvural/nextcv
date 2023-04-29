export default function Header() {
    return (
        <header className="bg-black text-secondary px-2 py-2 font-bold text-2xl">
            <div className="container">
                <div className="flex items-center">
                    <div className="flex-1 font-bold">
                        NextCV
                    </div>
                    <h1 className="pr-8 text-sm font-light">
                    Fast and easy cv generator
                    </h1>
                    <a href="#" className="px-5 py-3 bg-slate-50 rounded-md text-sm hover:opacity-95">
                        Support
                    </a>
                </div>
            </div>
        </header>
    )
}