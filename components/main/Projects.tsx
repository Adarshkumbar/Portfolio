import React from 'react'
import ProjectsCard from '../sub/ProjectsCard'
import { SlMenu } from "react-icons/sl"; //hamberger icon
import { VscChromeClose } from "react-icons/vsc"; //close icon
const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectsCard 
                src='/enow-2.png'
                title='EntertainmentNow'
                description='Developed Web App using : React ,Axios and Firebase and TMDB api,users can get info about movies &
                shows, sort by categories and search for movies/shows.
                '
            />
            <ProjectsCard 
                src='/pdfm.png'
                title='PDF-M'
                description='Developed using HTML, CSS, Javascript and NodeJS, Merge, Split, Compress PDF files,Convert PDF file to and from Word, Powerpoint, JPG
                '
            />
            <ProjectsCard 
                src='/onlineStore.png'
                title='Online Store'
                description='Online website where Customers can buy Smartphones. Laptops , etc. Created using HTML, CSS, JS.'
            />
        </div>
    </div>
  )
}

export default Projects