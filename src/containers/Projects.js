import React from 'react'

const Projects = () => {

    const iSpace = {
        url: '../assets/ispaceimg.png',
        title: 'Social Network Application',
        description: 'This application allows a user to stay connected to friends, family, & more. User can create an account, search for other users to add as friends. User can view and post on their friends wall as well. The application utilizes Node/Express back-end with MySQL database and uses Handlebars, JQuery, HTML5, CSS Bootstrap Framework and on the front-end.'    
    }

    const projectsInfo = [iSpace]

    return (
        <div className="text-light project-wrapper">
            <div className="project-title-wrapper">
                <span className="project-title d-block">Projects</span>
                <span className="project-info d-block">These are some of my recent projects</span>
            </div>
            <div className="small-project-wrapper">
            {projectsInfo.map(elemInfo => {
                console.log(elemInfo)
                <div className="d-flex">
                    <img className="project-image" src={elemInfo.url} alt={elemInfo.title}/>

                </div>


            })}
            </div>

        </div>
    )
}

export default Projects