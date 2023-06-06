import React from "react"
import Image from "next/image"
import Link from "next/link"

import FeatureButton from "../../feature-button"

const FeatureAllDevices = () => {
  return (
    <section className="mt-40">
      <Link href="/features/immer-ueberall">
        <div className="flex">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <FeatureButton text="Immer & Überall" />
              <div className="text-sm">Mehr {"->"}</div>
            </div>
            <h2 className="text-3xl font-extrabold not-italic text-slate-700">
              Die Einkaufsliste für{" "}
              <span className="underline decoration-sky-500 decoration-8 underline-offset-2">
                alle
              </span>
            </h2>
            <h2 className="mb-5 text-3xl font-extrabold not-italic text-slate-700 underline decoration-sky-500 decoration-8 underline-offset-2">
              Geräte
            </h2>

            <h3 className="max-w-[330px] text-xs font-medium not-italic text-slate-500">
              Hol dir die KaufKrake Einkaufsliste auf dein Smartphone und Tablet
              und nutze die App auf deinem Tablet, Handy oder Desktop. Die
              Einkaufsliste ist immer synchron und auf allen Geräten verfügbar.
            </h3>
          </div>
          <div className="pl-60">
            <Image
              src="/assets/images/feature-all-devices.png"
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

export default FeatureAllDevices
