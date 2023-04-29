export default function ({skillsObj, state, refs, openedTab}) {
    return (
        <div className='skills mb-5'>
            <h2 onClick={(e) => openedTab(e)} className='text-xl mb-4 font-bold bg-cyan-900 text-white px-3 py-1 hover:opacity-90 cursor-pointer rounded'>Skills</h2>
            <div className='capsul hidden'>
                <div className="w-full flex mb-3">
                    <input placeholder='Skills add (Word, Excell, Powerpoint...)' onKeyDown={skillsObj.handleKeyDown} ref={(e) => refs.current["inputSkills"] = e} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" />
                    <button onClick={() => skillsObj.btn()} className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded-r">
                        Add
                    </button>
                </div>
            </div>
            {
                state.skills.length > 0 && (
                    <p className='text-xs mb-3'>You can delete them by clicking on them.</p>
                )
            }
            {
                state.skills.map((item, index) => {
                    return <button title='delete' onClick={() => skillsObj.remove(index)} key={index} className="bg-primary hover:opacity-80  transition-opacity text-white text-sm py-2 px-2 mr-2 my-1">
                        {item}
                    </button>
                })
            }
        </div>
    )
}