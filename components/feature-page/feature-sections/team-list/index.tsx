import React from "react"
import Image from "next/image"
import Link from "next/link"

import FeatureButton from "../../feature-button"

const FeatureTeamList = () => {
  return (
    <section className="mt-60 ">
      <Link href="/features/team-einkauf">
        <div className="flex gap-2">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <FeatureButton text="Team Einkauf" />
              <div className="text-sm">Mehr {"->"}</div>
            </div>
            <h2 className="text-3xl font-extrabold not-italic text-slate-700">
              Euer Begleiter von
            </h2>
            <h2 className="mb-5 text-3xl font-extrabold not-italic text-slate-700 underline decoration-sky-500 decoration-8 underline-offset-2">
              Planung bis Einkauf
            </h2>

            <h3 className="max-w-[310px] text-xs font-medium not-italic text-slate-500">
              Ob als gemeinsame Einkaufslisten-App in der Familie oder die
              praktische WG-Einkaufsliste: Die kostenlose App KaufKrake ist die
              einfachste Einkaufslisten-App für mehrere Personen.
            </h3>
          </div>
          <div className="pl-60">
            <Image
              src="/assets/images/feature-team-lists.png"
              alt="test"
              width={300}
              height={300}
            ></Image>
          </div>
        </div>
      </Link>
    </section>
  )
}

export default FeatureTeamList
