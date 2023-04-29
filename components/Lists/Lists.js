import Mercury from "../Templates/Mercury";
import Venus from "../Templates/Venus";
import Anthem from "../Templates/Anthem";
import * as datas from "@/store/defaultState.js"
import { useRouter } from 'next/router'

export default function Lists() {
    const router = useRouter();
    return (

        <main className="bg-cyan-900">
            <div className="container">

                <div className="py-5 md:py-5">
                    <h2 className="md:text-4xl text-md mb-1 font-bold text-center text-white">
                        What do you want your resume to look like?
                    </h2>
                    <p className="text-white md:text-lg text-sm text-center after:w-20 after:h-1.5 after:bg-white after:block after:mx-auto after:my-4 after:rounded-full">
                        View all resume templates and select a specific style to customize
                    </p>

                    <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10 mt-4 md:mt-10 text-px11">
                        <section onClick={() => router.push(`/create/mercury`)} className="drop-shadow-2xl border-dashed border-4 border-transparent hover:border-secondary transition-all cursor-pointer hover:scale-105 text-em1">
                            <Mercury datas = {datas} />
                        </section>
                        <section onClick={() => router.push(`/create/venus`)} className="drop-shadow-2xl border-dashed border-4 border-transparent hover:border-secondary transition-all cursor-pointer hover:scale-105 text-em1">
                            <Venus datas = {datas} />
                        </section>
                        <section onClick={() => router.push(`/create/anthem`)} className="drop-shadow-2xl border-dashed border-4 border-transparent hover:border-secondary transition-all cursor-pointer hover:scale-105 text-em1">
                            <Anthem datas = {datas} />
                        </section>

                    </div>

                </div>

            </div>
        </main>

    )

}