
import React from 'react'
import ProjectsCard from '../sub/ProjectsCard'

const Projects = () => {
  return (
    <section id='projects'>
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10' >
            <ProjectsCard 
                src='/enow-2.png'
                title='EntertainmentNow'
                description='Developed Web App using : React ,Axios ,Express, Firebase and TMDB api.Users can get info about movies &
                shows, sort by categories and search for movies/shows.Also watchlist.
                '
                link='https://www.youtube.com/'
            />
            <ProjectsCard 
                src='/pdfm.png'
                title='PDF-M'
                description='Developed using Javascript and NodeJS. Merge, Split, Compress PDF files,Convert PDF file to and from Word, Powerpoint, JPG
                '
                link='https://www.youtube.com/'
            />
            <ProjectsCard 
                src='/onlineStore.png'
                title='Online Store'
                description='Online website where Customers can buy Smartphones. Laptops , etc. Created using HTML, CSS, JS.'
                link='https://www.youtube.com/'
            />
        </div>
    </div>
    </section>
  )
}

export default Projects