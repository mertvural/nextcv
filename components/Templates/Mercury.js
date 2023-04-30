export default function Mercury({datas, color}) {
    return (
        <div className="flex flex-wrap bg-white h-full">
            <div className={"flex-1 bg-gray-50 " + (color && 'text-white '+color+'')}>

                {/* name */}
                <article className="name font-bold mb-3 px-5 py-5 text-em1.5">
                    {datas.name}
                </article>

                {/* contact */}
                <article className="contact">
                    <h4 className={"bg-gray-200 px-5 font-bold " + (color && 'bg-white text-primary')}>
                        Contact
                    </h4>
                    <div className="px-5 py-2">
                        <ul>
                            <li className="mb-2">
                                <strong>Address</strong>
                                <p>
                                    {datas.address}
                                </p>
                            </li>
                            <li className="mb-2">
                                <strong>Phone</strong>
                                <p>
                                    {datas.phone}
                                </p>
                            </li>
                            <li>
                                <strong>E-mail</strong>
                                <p>
                                    {datas.email}
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>

                {/* skills */}
                <article className="skills">
                    <h4 className={"bg-gray-200 px-5 font-bold " + (color && 'bg-white text-primary')}>
                        Skills
                    </h4>
                    <ul className="px-5 py-2 list-disc">
                        {
                            datas.skills.map((item, index) => {
                                return <li key={index}>
                                    {item}
                                </li>
                            })
                        }
                    </ul>
                </article>
            </div>
            <div className="flex-2 px-5 py-5">

                {/* short description */}
                <article className="short-description mb-5">
                <h4 className="font-bold border-y-2 py-1 mb-2 border-t-slate-100 border-b-slate-100">
                        Short Description
                    </h4>
                    {
                        datas.shortDescription
                    }
                </article>

                {/* work history */}
                <article className="work-history">
                    <h4 className="font-bold border-y-2 py-1 mb-2 border-t-slate-100 border-b-slate-100">
                        Work History
                    </h4>

                    {
                        datas.workHistory.map((item, index) => {
                            return <div className="item-work flex flex-wrap mb-3" key={index}>
                                <div className="flex-1">
                                    {
                                        item.date
                                    }
                                </div>
                                <div className="flex-2">
                                    <h5 className="font-bold">
                                        {item.position}
                                    </h5>
                                    <i>
                                        {
                                            item.workplace
                                        }
                                    </i>
                                   <p>
                                   {item.works}
                                   </p>
                                </div>
                            </div>
                        })
                    }

                </article>

                {/*education*/}
                <article className="education">
                    <h4 className="font-bold border-y-2 py-1 mb-2 border-t-slate-100 border-b-slate-100">
                        Education
                    </h4>

                    {
                        datas.education.map((item, index) => {
                            return <div className="item-work flex flex-wrap mb-3" key={index}>
                                <div className="flex-1">
                                    {
                                        item.date
                                    }
                                </div>
                                <ul className="flex-2">
                                <li>
                                        <h5 className="font-bold">
                                          {item.school} -   {item.degree}
                                        </h5>
                                        
                                        <i>
                                            {item.fieldofStudy}
                                        </i>
                                        <br />
                                        <i>
                                            {item.location}
                                        </i>
                                    </li>
                                </ul>
                            </div>
                        })
                    }

                </article>

                {/*Hobbies*/}
                <article className="hobbies">
                    <h4 className="font-bold border-y-2 py-1 mb-2 border-t-slate-100 border-b-slate-100">
                        Hobbies
                    </h4>
                    <div className="item-work flex flex-wrap mb-3 gap-4">

                        {
                            datas.hobies.map((item, index) => {
                                return <span key={index}>
                                    {item}
                                </span>
                            })
                        }

                    </div>
                </article>

                {/*Languages*/}
                <article className="languages">
                    <h4 className="font-bold border-y-2 py-1 mb-2 border-t-slate-100 border-b-slate-100">
                        Languages
                    </h4>
                    <div className="item-work flex flex-wrap mb-3">
                        <ul className="flex-1">

                            {
                                datas.languages.map((item, index) => {
                                    return <li key={index}>
                                        {
                                            item.lang
                                        }
                                    </li>
                                })
                            }

                        </ul>
                        <ul className="flex-2">
                            {
                                datas.languages.map((item, index) => {
                                    return <li key={index}>
                                        {
                                            item.level
                                        }
                                    </li>
                                })
                            }
                        </ul>

                    </div>
                </article>

            </div>
        </div>
    )
}