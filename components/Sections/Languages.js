export default function ({ state, refs, openedTab, languageObj }) {
    return (
        <div className='languages mb-5'>
            <h2 onClick={(e) => openedTab(e)} className='text-xl mb-4 font-bold bg-cyan-900 text-white px-3 py-1 hover:opacity-90 cursor-pointer rounded'>Languages</h2>
            <div className='capsul hidden'>
                <div className='flex flex-wrap -mx-3'>
                    <div className="w-full md:w-1/2 px-3 mb-3">
                        <input ref={(e) => refs.current["inputLanguageAdd"] = e} placeholder='Language Add' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-3">
                        <select ref={(e) => refs.current["inputLanguageLevel"] = e} className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" >
                            <option value="Beginner">
                                Beginner
                            </option>
                            <option value="Intermediate Level">
                                Intermediate Level
                            </option>
                            <option value="Good Level">
                                Good Level
                            </option>
                            <option value="Very Good Level">
                                Very Good Level
                            </option>
                        </select>
                    </div>
                </div>
                <button onClick={() => languageObj.add()} title='Add' className="bg-secondary hover:bg-primary w-full transition-all font-bold py-2">
                    ADD
                </button>
                {
                    state.languages.length > 0 && (
                        <p className='text-xs mb-3 mt-3'>You can delete them by clicking on them.</p>
                    )
                }
                {
                    state.languages.map((item, index) => {
                        return <div title='delete' onClick={() => languageObj.remove(index)} key={index} className=" cursor-pointer inline-block bg-primary hover:opacity-80  transition-opacity text-white text-sm py-2 px-2 mr-2 mb-3">
                            <p>
                                {item.lang}
                            </p>
                            <p>
                                {item.level}
                            </p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}