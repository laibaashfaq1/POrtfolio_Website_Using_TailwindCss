// import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id: 0,
        title: "Your Desire Books",
        desc: `A mobile application using Design Sprint to create an intuitive platform for 
        book discovery and organization through quick prototyping and testing.`,
        img: "/picture0.png",
        tags: ["Figma", "Adobe XD", "UX/UI"],
    },

    {
        id: 1,
        title: "Gemstone Galore Jewelry Website",
        desc: `Addressing the challenges people face when purchasing jewelry online and making the website user-friendly.`,
        img: "/picture1.png",
        tags: ["Adobe XD", "UX/UI", "Case Study"],
    },

    {
        id: 2,
        title: "Vacation Poster",
        desc: "Creating a poster for a travel agency offering customizable tours based on the duration preferred by the travelers.",
        img: "/picture2.png",
        tags: ["Adobe Photoshop", "Branding", "Marketing"],
    },

    {
        id: 3,
        title: "Logo Design",
        desc: "Creating a logo for a photographer who offers photography services.",
        img: "/picture3.png",
        tags: ["Adobe Illustrator", "Branding", "Marketing"],
    },

    {
        id: 4,
        title: "Social Media Post Design",
        desc: "Show all the information about the brand, including the services they provide.",
        img: "/picture4.png",
        tags: ["Adobe Photoshop", "Branding", "Marketing"],
    }
]

const Projects = () => {
    return (
        <div id='projects' className='conatiner pt-32'>
            <Heading title='My Projects'/>
            <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {data.map((el)=>(<Card 
                key={el.id}
                title={el.title}
                desc={el.desc}
                img={el.img}
                height={el.img}
                tags={el.tags}
                />))}
            </div>
        </div>
    )
}

export default Projects