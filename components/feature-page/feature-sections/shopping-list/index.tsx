import React from "react"
import Image from "next/image"
import Link from "next/link"

import FeatureButton from "../../feature-button"

const FeatureShoppingList = () => {
  return (
    <section className="mt-40">
      <Link href="/features/organisiert">
        <div className="flex gap-2 ">
          <div className="pr-48">
            <Image
              src="/assets/images/feature-shopping-lists.png"
              alt="test"
              width={300}
              height={300}
            ></Image>
          </div>
          <div>
            <div className="mb-5 flex items-center gap-4">
              <FeatureButton text="Organisiert" />
              <div className="text-sm">Mehr {"->"}</div>
            </div>
            <h2 className="mb-5 text-3xl font-extrabold not-italic text-slate-700">
              <span className="underline decoration-sky-500 decoration-8 underline-offset-2">
                Deine Listen,
              </span>{" "}
              so wie du sie <br />
              brauchst
            </h2>
            <h3 className="max-w-[330px] text-xs font-medium not-italic text-slate-500">
              Egal ob im Supermarkt oder bei der Bäckerei um die Ecke: Die
              KaufKrake App hilft dir, effizienter einzukaufen.
            </h3>
          </div>
        </div>
      </Link>
    </section>
  )
}

export default FeatureShoppingList
