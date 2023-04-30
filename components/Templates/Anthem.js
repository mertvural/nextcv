export default function Anthem({ datas, color }) {
    return (

        <div className="flex-1 bg-gray-50 h-full">

            <article className="header px-5 py-2 mb-2">
                {/* name */}
                <div className="name font-bold mb-2 text-em1.5">
                    {datas.name}
                </div>
                {/* short description */}
                <article className="short-description">
                    <h4 className={"font-bold bg-gray-200 py-1 px-2 mb-2 " + (color && 'text-white '+color+' ')}>
                        Short Description
                    </h4>
                    {
                        datas.shortDescription
                    }
                </article>

            </article>

            <div className="px-5">

                {/* contact */}
                <div className="contact mb-3">
                    <h4 className={"font-bold bg-gray-200 py-1 px-2 mb-2 " + (color && 'text-white '+color+' ')}>
                        Contact
                    </h4>
                    <ul>
                        <li className="mb-1">
                            <strong>Address: </strong>
                            <span>  {datas.address}</span>
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

                {/* skills */}
                <article className="skills mb-3">
                    <h4 className={"font-bold bg-gray-200 py-1 px-2 mb-2 " + (color && 'text-white '+color+' ')}>
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
                <article className="work-history mb-3">
                    <h4 className={"font-bold bg-gray-200 py-1 px-2 mb-2 " + (color && 'text-white '+color+' ')}>
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
                <article className="education mb-3">
                    <h4 className={"font-bold bg-gray-200 py-1 px-2 mb-2 " + (color && 'text-white '+color+' ')}>
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
                <article className="hobbies mb-3">
                    <h4 className={"font-bold bg-gray-200 py-1 px-2 mb-2 " + (color && 'text-white '+color+' ')}>
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
                <article className="languages mb-3">
                    <h4 className={"font-bold bg-gray-200 py-1 px-2 mb-2 " + (color && 'text-white '+color+' ')}>
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