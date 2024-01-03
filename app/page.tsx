import Hero from '@/components/main/Hero'
import Skill from '@/components/main/Skill'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className="flex flex-col gap-20">
        <Hero/>
        <Skill/>
      </div>
    </main>
  )
}
