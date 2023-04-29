import { useRouter } from 'next/router'
import Mercury from "@/components/Templates/Mercury";
import Venus from "@/components/Templates/Venus";
import Anthem from "@/components/Templates/Anthem";
import { useRef, useState } from 'react';
import { datas } from "../../store/state";
import Modal from 'react-modal';
import Image from 'next/image'

const Chosen = () => {
  const router = useRouter()
  const { pid } = router.query;
  const [state, setState] = useState(datas);
  const refs = useRef([]);
  const [isRight, setIsRight] = useState("");
  const modalStyles = {
    content: {
      position: "fixed",      
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0, .9)",
      zIndex: "1000",
      border : "0",
      overflowY: "auto"

    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);


  class Skills {
    constructor() {
      this.btn = () => {
        let val = refs.current.inputSkills.value;
        if (!val)
          return;
        state.skills.push(val);
        setState({ ...state });
        refs.current.inputSkills.value = "";
      };
      this.remove = (item) => {
        state.skills.splice(item, 1);
        setState({ ...state });
      };
      this.handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          skillsObj.btn();
        }
      };
    }
  }

  class WorkHistory {
    constructor() {
      this.add = () => {
        const { inputStartDate, inputEndDate, inputPosition, inputWorkplace, inputWorks, inputCurrent } = refs.current;
        if (!inputStartDate.value || !inputPosition.value || !inputWorkplace.value || !inputWorks.value) return

        state.workHistory.push({
          date: inputCurrent.checked ? inputStartDate.value + " - " + "Current" : inputStartDate.value + " - " + inputEndDate.value,
          position: inputPosition.value,
          workplace: inputWorkplace.value,
          works: inputWorks.value
        })
        setState({ ...state });
        inputStartDate.value = null
        inputEndDate.value = null
        inputPosition.value = null
        inputWorkplace.value = null
        inputWorks.value = null
      }
      this.remove = (item) => {
        state.workHistory.splice(item, 1);
        setState({ ...state });
      };
      this.currentChange = (e) => {
        const { inputEndDate } = refs.current;
        e ? inputEndDate.setAttribute("disabled", "disabled") : inputEndDate.removeAttribute("disabled")
      }
    }
  }

  class Education {
    constructor() {
      this.add = () => {
        const { inputCurrentEducation, inputStartDateEducation, inputEndDateEducation, inputSchoolName, inputDegree, inputFieldStudy, inputSchoolLocation } = refs.current;

        if (!inputStartDateEducation.value
          || !inputSchoolName.value
          || !inputFieldStudy.value
          || !inputSchoolLocation.value) return

        state.education.push({
          date: inputCurrentEducation.checked ? inputStartDateEducation.value + " - " + "Current" : inputStartDateEducation.value + " - " + inputEndDateEducation.value,
          degree: inputDegree.value,
          fieldofStudy: inputFieldStudy.value,
          school: inputSchoolName.value,
          location: inputSchoolLocation.value,
        })
        setState({ ...state });
        inputStartDateEducation.value = null
        inputEndDateEducation.value = null
        inputSchoolName.value = null
        inputFieldStudy.value = null
        inputSchoolLocation.value = null
      }
      this.remove = (item) => {
        state.education.splice(item, 1);
        setState({ ...state });
      };
      this.currentChange = (e) => {
        const { inputEndDateEducation } = refs.current;
        e ? inputEndDateEducation.setAttribute("disabled", "disabled") : inputEndDateEducation.removeAttribute("disabled")
      }
    }
  }

  class Hobbies {
    constructor() {
      this.btn = () => {
        let val = refs.current.inputHobbies.value;
        if (!val)
          return;
        state.hobies.push(val);
        setState({ ...state });
        refs.current.inputHobbies.value = "";
      };
      this.remove = (item) => {
        state.hobies.splice(item, 1);
        setState({ ...state });
      };
      this.handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          hobiesObj.btn();
        }
      };
    }
  }

  class Language {
    constructor() {
      this.add = () => {
        const { inputLanguageAdd, inputLanguageLevel } = refs.current;
        if (!inputLanguageAdd.value || !inputLanguageLevel.value) return
        state.languages.push({
          lang: inputLanguageAdd.value,
          level: inputLanguageLevel.value
        })

        setState({ ...state });
        inputLanguageAdd.value = null;
        inputLanguageLevel.value = "Beginner";
      }
      this.remove = (item) => {
        state.languages.splice(item, 1);
        setState({ ...state });
      };
    }
  }

  const openedTab = (e) => {
    document.querySelectorAll(".capsul").forEach((item) => {
      item.classList.add("hidden")
    })
    e.target.parentNode.querySelector(".capsul").classList.remove("hidden");
  }

  const createcv = () => {
    setIsRight("hidden");
    setTimeout(() => {
       window.print();
    }, 1000);
  }


  let skillsObj = new Skills();
  let workHistoryObj = new WorkHistory();
  let hobiesObj = new Hobbies();
  let languageObj = new Language();
  let educationObj = new Education();


  return (

    <section className='flex'>

      <article className='flex-2'>
        {
          (() => {
            switch (pid) {
              case 'mercury':
                return <Mercury datas={state} />
              case 'venus':
                return <Venus datas={state} />
              case 'anthem':
                return <Anthem datas={state} />
            }
          })()

        }

      </article>

      <article className={`${isRight} flex-1 flex flex-col bg-cyan-700 h-full text-white px-5 py-3 min-h-screen`}>

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

        <div className='short-description mb-5'>
          <h2 onClick={(e) => openedTab(e)} className='text-xl mb-4 font-bold bg-cyan-900 text-white px-3 py-1 hover:opacity-90 cursor-pointer rounded'>Short Description</h2>
          <div className='capsul hidden'>
            <textarea placeholder='brief information about your best skills and what you do' onKeyUp={(e) => setState({ ...state, shortDescription: e.target.value })} rows="4" className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white'></textarea>
          </div>
        </div>

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

        <div className='hobbies mb-5'>
          <h2 onClick={(e) => openedTab(e)} className='text-xl mb-4 font-bold bg-cyan-900 text-white px-3 py-1 hover:opacity-90 cursor-pointer rounded'>Hobbies</h2>
          <div className='capsul hidden'>
            <div className="w-full flex mb-3">
              <input placeholder='Add Hobby' onKeyDown={hobiesObj.handleKeyDown} ref={(e) => refs.current["inputHobbies"] = e} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" />
              <button onClick={() => hobiesObj.btn()} className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded-r">
                Add
              </button>
            </div>
            {
              state.hobies.length > 0 && (
                <p className='text-xs mb-3'>You can delete them by clicking on them.</p>
              )
            }
            {
              state.hobies.map((item, index) => {
                return <button title='delete' onClick={() => hobiesObj.remove(index)} key={index} className="bg-primary hover:opacity-80  transition-opacity text-white text-sm py-2 px-2 mr-2 my-1">
                  {item}
                </button>
              })
            }
          </div>
        </div>

        <div className='languages mb-5 flex-1'>
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

        <div className='flex flex-row flex-wrap gap-10'>
        <button onClick={createcv} title="Create CV" className=" bg-green-600 hover:opacity-90 flex-2 transition-all font-bold py-2 text-lg">Create CV</button>
        
        <button onClick={() => setIsOpen(true)} title="Create CV" className="max-w-xs bg-black hover:opacity-90 transition-all flex-1 font-bold py-2 text-sm">Print Settings</button>

        </div>
      
      </article>

      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}  
        style={modalStyles}
      >
       <div className='flex gap-5 items-center mb-3 justify-center'>
       <h2 className='text-lg text-white'>Make sure the printer settings are like this</h2>
        <button onClick={() => setIsOpen(false)} className="px-2 py-2 bg-white">Close</button>
       </div>
        <picture className='flex justify-center'>
          <Image
            src="/print-settings.png"
            alt="Print Settings"
            width={500}
            height={844}
          />
        </picture>       

      </Modal>

    </section>

  )

}

export default Chosen