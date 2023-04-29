export default function ({state, workHistoryObj, refs, openedTab}) {
    return (
        <div className='work-history mb-5'>
            <h2 onClick={(e) => openedTab(e)} className='text-xl mb-4 font-bold bg-cyan-900 text-white px-3 py-1 hover:opacity-90 cursor-pointer rounded'>Work History</h2>
            <div className='capsul hidden'>
                <div className='item'>
                    <div className='flex flex-wrap -mx-3'>
                        <div className="w-full md:w-1/2 px-3 mb-3">
                            <label>Start</label>
                            <input ref={(e) => refs.current["inputStartDate"] = e} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="date" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-3">
                            <div className='flex items-center justify-between'>
                                <label className='flex justify-between items-center'>
                                    End
                                </label>
                                <label className='flex items-center gap-3 cursor-pointer' htmlFor="current">
                                    Current?
                                    <input onChange={(e) => workHistoryObj.currentChange(e.target.checked)} ref={(e) => refs.current["inputCurrent"] = e} id="current" type="checkbox" value="" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                </label>
                            </div>
                            <input ref={(e) => refs.current["inputEndDate"] = e} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="date" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-3">
                            <input ref={(e) => refs.current["inputPosition"] = e} placeholder='Position' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-3">
                            <input ref={(e) => refs.current["inputWorkplace"] = e} placeholder='Workplace' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" />
                        </div>
                        <div className="w-full flex mb-3 px-3">
                            <textarea ref={(e) => refs.current["inputWorks"] = e} placeholder='what are the things done' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white"></textarea>
                        </div>
                    </div>
                </div>
                <button onClick={() => workHistoryObj.add()} title='Add' className="bg-secondary hover:bg-primary w-full transition-all font-bold py-2">
                    ADD
                </button>
                {
                    state.workHistory.length > 0 && (
                        <p className='text-xs mb-3 mt-3'>You can delete them by clicking on them.</p>
                    )
                }
                <div className='flex flex-wrap gap-x-5'>
                    {
                        state.workHistory.map((item, index) => {

                            return <ul key={index} className='cursor-pointer hover:opacity-50 mb-5' onClick={() => workHistoryObj.remove(index)}>
                                <li>
                                    <p>{item.date}</p>
                                    <p>{item.position}</p>
                                    <p>{item.workplace}</p>
                                </li>
                            </ul>
                        })
                    }
                </div>
            </div>
        </div>
    )
}