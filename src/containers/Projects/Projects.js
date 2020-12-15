import React from 'react'
import ProjectsInfo from './ProjectsInfo/ProjectsInfo'
import GitHubLogo from '../../assets/GitHub-Mark-Light-32px.png'

const Projects = () => {

    return (
        <div className="text-light project-wrapper">
            <div className="project-title-wrapper">
                <span className="project-title d-block">Projects</span>
                <span className="project-info d-block">These are some of my recent projects</span>
            </div>
            <div className="small-project-wrapper mt-5 text-left">
            {ProjectsInfo.map((elemInfo, index) => {
                return (
                <div className="d-flex justify-content-between mx-auto" key={index}>
                   <div>
                    <img src={elemInfo.url} alt={elemInfo.title} className="project-image d-block p-3" />
                   </div>
                   <div className="ml-3">
                    <span className="d-block small-project-title text-center">{elemInfo.title}</span>
                    <p className="small-project-description">{elemInfo.description}</p>
                    <p className="text-center"><img src={GitHubLogo} /><a href={elemInfo.github} target="_blank" className="ml-1">View Code</a></p>
                    </div>     
                </div>
                )

            })}
            </div>

        </div>
    )
}

export default Projects