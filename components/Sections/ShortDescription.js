export default function ({ openedTab, setState, state }) {
    return (
        <div className='short-description mb-5'>
            <h2 onClick={(e) => openedTab(e)} className='text-xl mb-4 font-bold bg-cyan-900 text-white px-3 py-1 hover:opacity-90 cursor-pointer rounded'>Short Description</h2>
            <div className='capsul hidden'>
                <textarea placeholder='brief information about your best skills and what you do' onKeyUp={(e) => setState({ ...state, shortDescription: e.target.value })} rows="4" className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white'></textarea>
            </div>
        </div>
    )
}