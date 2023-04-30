import { useRouter } from 'next/router'
import Mercury from "@/components/Templates/Mercury";
import Venus from "@/components/Templates/Venus";
import Anthem from "@/components/Templates/Anthem";
import { useRef, useState } from 'react';
import { datas } from "../../store/state";
import ContactComponent from "@/components/Sections/Contact"
import SkillsComponent from "@/components/Sections/Skills"
import ShortDescriptionComponent from "@/components/Sections/ShortDescription"
import WorkHistoryComponent from "@/components/Sections/WorkHistory"
import EducationComponent from "@/components/Sections/Education"
import HobbiesComponent from "@/components/Sections/Hobbies"
import LanguagesComponent from "@/components/Sections/Languages"
import PrintSettings from "@/components/Modals/PrintScreen"
import Colors from "@/components/Sections/Colors"

const Chosen = () => {
  const router = useRouter()
  const { pid } = router.query;
  const [state, setState] = useState(datas);
  const refs = useRef([]);
  const [isRight, setIsRight] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(null);

  const skillsObj = new class Skills {
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

  const workHistoryObj = new class WorkHistory {
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

  const educationObj = new class Education {
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

  const hobiesObj = new class Hobbies {
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

  const languageObj = new class Language {
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
    window.onafterprint = () => router.push("/")
  }

  const colorsChange = (item) => {
    setColor(item)
  }

  return (

    <section className='flex flex-col md:flex-row'>

      <article className='flex-2'>
        {
          (() => {
            switch (pid) {
              case 'mercury':
                return <Mercury datas={state} color={color} />
              case 'venus':
                return <Venus datas={state} color={color} />
              case 'anthem':
                return <Anthem datas={state} color={color} />
            }
          })()

        }

      </article>

      <article className={`${isRight} -order-1 md:order-2 flex-1 flex flex-col bg-cyan-800 h-full text-white px-5 py-3 min-h-screen`}>

        <ContactComponent setState={setState} state={state} openedTab={openedTab} />

        <SkillsComponent skillsObj={skillsObj} state={state} refs={refs} openedTab={openedTab} />

        <ShortDescriptionComponent openedTab={openedTab} state={state} setState={setState} />

        <WorkHistoryComponent state={state} workHistoryObj={workHistoryObj} refs={refs} openedTab={openedTab} />

        <EducationComponent state={state} refs={refs} openedTab={openedTab} educationObj={educationObj} />

        <HobbiesComponent hobiesObj={hobiesObj} state={state} refs={refs} openedTab={openedTab} />

        <LanguagesComponent state={state} refs={refs} openedTab={openedTab} languageObj={languageObj} />

        <Colors colorsChange={colorsChange} />

        <div className='flex flex-col md:flex-row gap-2 md:gap-5'>
          <button target="_blank" onClick={createcv} title="Create CV" className=" bg-green-600 hover:opacity-90 flex-2 transition-all font-bold py-2 text-lg">Create CV</button>
          <button onClick={() => setIsOpen(true)} title="Print Settings" className="bg-black hover:opacity-90 transition-all flex-1 font-bold py-2 text-sm">Print Settings</button>
          <button onClick={() => router.push("/")} title="Turn Back" className="bg-secondary hover:opacity-90 transition-all flex-1 font-bold py-2 text-sm">Another Schema</button>
        </div>

      </article>

      <PrintSettings setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />

    </section>

  )

}

export default Chosen