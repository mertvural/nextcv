export default function Mercury({ datas, color }) {
    return (

        <div className="flex-1 bg-gray-50 h-full">

            <article className={"header px-5 py-2 text-white bg-gray-700 "+color+" "}>
                {/* name */}
                <div className="name font-bold mb-2 text-em1.5">
                    {datas.name}
                </div>
                {/* contact */}
                <div className="contact">
                    <div>
                        <ul>
                            <li className="mb-1">
                                <strong>Address: </strong>
                                <span>
                                    {datas.address}
                                </span>
                            </li>
                            <li className="mb-1">
                                <strong>Phone: </strong>
                                <span>
                                    {datas.phone}
                                </span>
                            </li>
                            <li>
                                <strong>E-mail: </strong>
                                <span>
                                    {datas.email}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>

            <div className="px-5 py-5">
                {/* short description */}
                <article className="short-description mb-2">
                    <h4 className="font-bold border-b-2 py-1 mb-2 border-b-slate-200">
                        Short Description
                    </h4>
                    {
                        datas.shortDescription
                    }
                </article>

                {/* skills */}
                <article className="skills mb-2">
                    <h4 className="font-bold border-b-2 py-1 mb-2 border-b-slate-200">
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

                {/* work history */}
                <article className="work-history mb-2">
                    <h4 className="font-bold border-b-2 py-1 mb-2 border-b-slate-200">
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
                <article className="education mb-2">
                    <h4 className="font-bold border-b-2 py-1 mb-2 border-b-slate-200">
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
                                          {item.school} -  {item.degree}
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
                <article className="hobbies mb-2">
                    <h4 className="font-bold border-b-2 py-1 mb-2 border-b-slate-200">
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
                <article className="languages mb-2">
                    <h4 className="font-bold border-b-2 py-1 mb-2 border-b-slate-200">
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