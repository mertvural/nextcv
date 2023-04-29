export default function({ setState, state, openedTab }) {
    return (
        <div className='contact'>
            <h2 onClick={(e) => openedTab(e)} className='text-xl mb-4 font-bold bg-cyan-900 text-white px-3 py-1 hover:opacity-90 cursor-pointer rounded'>Contact</h2>
            <div className='capsul'>
                <div className='flex flex-wrap -mx-3 mb-3'>
                    <div className="w-full px-3 mb-3">
                        <input placeholder='Name Surname' onKeyUp={(e) => setState({ ...state, name: e.target.value })} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" />
                    </div>
                    <div className="w-full px-3 mb-3">
                        <input placeholder='Address' onKeyUp={(e) => setState({ ...state, address: e.target.value })} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-3">
                        <input placeholder='Phone' onKeyUp={(e) => setState({ ...state, phone: e.target.value })} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="number" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-3">
                        <input placeholder='E-Mail' onKeyUp={(e) => setState({ ...state, email: e.target.value })} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="email" />
                    </div>
                </div>
            </div>
        </div>
    )
}