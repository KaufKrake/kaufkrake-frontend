import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const items = [
  { 
    title: 'Die Kraktastische Einkaufsliste zum Teilen', 
    text: 'Erstelle schnell und mühelos Einkaufslisten und teile sie mit deinen Mitbewohnern, deiner Familie oder Freunden. Gemeinsames Einkaufen war noch nie so einfach und organisiert!', 
    quote: 'Mehr Arme, weniger Stress', 
    author: 'Oliver Octopus, Mitgründer von Kaufkrake' 
  },
  { 
    title: 'Kostenlos für iOS, Android und Web', 
    text: 'Lass den altmodischen Papier-Einkaufszettel hinter dir! Mit Kaufkrake kannst du deinen Einkauf bequem von überall aus planen - egal ob du gerade zuhause, unterwegs oder bereits im Supermarkt bist.', 
    quote: 'Kaufkrake ist immer dabei, wo auch immer du bist', 
    author: 'Jennifer Jellyfish, Lead Mobile Developer' 
  },
  { 
    title: 'Bereits über 2 Millionen zufriedene Nutzer', 
    text: 'Vom simplen Einkaufszettel zur umfassenden Einkaufs-App: Millionen von Menschen weltweit vertrauen auf Kaufkrake, um ihren Einkauf zu organisieren und zu optimieren.', 
    quote: 'Einfachheit und Effizienz machen den Unterschied', 
    author: 'Larry Lobster, Lead UX Designer' 
  },
  { 
    title: 'Perfekt für geteilte Haushalte', 
    text: 'Seit unserer Gründung im Jahr 2023 hat sich Kaufkrake von einer simplen Einkaufslisten-App zur größten Einkaufs-Plattform Mayens entwickelt. Heute begleitet Kaufkrake seine Nutzer durch alle Schritte des Einkaufsprozesses. Mehr als 2 Millionen Haushalte organisieren ihre Einkäufe bereits mit Kaufkrake.', 
    quote: 'Kaufkrake: dein treuer Begleiter beim Einkaufen', 
    author: 'Clara Crab, CEO von Kaufkrake' 
  },
];

export const HeroText = () => {
  return (
    <>
      {items.map((item, index) => (
        <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} justify-center border-2 rounded-lg shadow-md border-white-300`} key={index}>
          <div className="p-4">
            <h2 className='mb-4 text-3xl font-bold text-indigo-800'>{item.title}</h2>
            <p className='mb-4 text-gray-700'>{item.text}</p>
            <div className="flex flex-col items-start mb-4">
              <p className='mb-2 italic text-gray-700'>" {item.quote} "</p>
              <p className='font-semibold text-gray-800'>{item.author}</p>
            </div>
            <Link href="/installieren">
              <Button className='text-white bg-blue-500 rounded-lg'>Jetzt loslegen</Button>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Image src='/assets/images/cutekrake.png' className='rounded-full' width={250} height={250} alt='krake' />
          </div>
        </div>
      ))}
    </>
  )
}

export default HeroText
