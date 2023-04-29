export default function ({ state, refs, openedTab, educationObj }) {
    return (
        <div className='education mb-5'>
            <h2 onClick={(e) => openedTab(e)} className='text-xl mb-4 font-bold bg-cyan-900 text-white px-3 py-1 hover:opacity-90 cursor-pointer rounded'>Education</h2>
            <div className='capsul hidden'>
                <div className='item'>
                    <div className='flex flex-wrap -mx-3'>
                        <div className="w-full md:w-1/2 px-3 mb-3">
                            <label>Start</label>
                            <input ref={(e) => refs.current["inputStartDateEducation"] = e} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="date" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-3">
                            <div className='flex items-center justify-between'>
                                <label className='flex justify-between items-center'>
                                    End
                                </label>
                                <label className='flex items-center gap-3 cursor-pointer' htmlFor="continue">
                                    Continue?
                                    <input onChange={(e) => educationObj.currentChange(e.target.checked)} ref={(e) => refs.current["inputCurrentEducation"] = e} id="continue" type="checkbox" value="" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                </label>
                            </div>
                            <input ref={(e) => refs.current["inputEndDateEducation"] = e} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="date" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-3">
                            <input ref={(e) => refs.current["inputSchoolName"] = e} placeholder='School Name' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" />
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-3">
                            <select ref={(e) => refs.current["inputDegree"] = e} className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" >
                                <option value="Degree">
                                    Degree
                                </option>
                                <option value="Associate Degree">
                                    Associate Degree
                                </option>
                                <option value="Licence">
                                    Licence
                                </option>
                            </select>
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-3">
                            <input ref={(e) => refs.current["inputFieldStudy"] = e} placeholder='Field of Study' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-3">
                            <input ref={(e) => refs.current["inputSchoolLocation"] = e} placeholder='School Location' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" />
                        </div>
                    </div>
                </div>
                <button onClick={() => educationObj.add()} title='Add' className="bg-secondary hover:bg-primary w-full transition-all font-bold py-2">
                    ADD
                </button>
                {
                    state.education.length > 0 && (
                        <p className='text-xs mb-3 mt-3'>You can delete them by clicking on them.</p>
                    )
                }
                <div className='flex flex-wrap gap-x-5'>
                    {
                        state.education.map((item, index) => {

                            return <ul key={index} className='cursor-pointer hover:opacity-50 mb-5' onClick={() => educationObj.remove(index)}>
                                <li>
                                    <p>{item.date}</p>
                                    <p>{item.school}</p>
                                    <p>{item.fieldofStudy}</p>
                                </li>
                            </ul>
                        })
                    }
                </div>
            </div>
        </div>
    )
}