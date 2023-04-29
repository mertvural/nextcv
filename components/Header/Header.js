export default function Header() {
    return (
        <header className="bg-black text-secondary px-2 py-2 font-bold text-2xl">
            <div className="container">
                <div className="flex items-center">
                    <div className="flex-1 font-bold flex items-center">
                        NextCV | <small className="text-xs px-2">beta</small>
                    </div>
                    <h1 className="text-sm font-light">
                    Fast and easy cv generator
                    </h1>
                </div>
            </div>
        </header>
    )
}