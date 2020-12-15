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
                <div className="d-md-flex justify-content-between" key={index}>
                   <div className="">
                    <img src={elemInfo.url} alt={elemInfo.title} className="project-image d-block p-3 mx-auto" />
                   </div>
                   <div className="ml-3">
                    <span className="d-block small-project-title text-center">{elemInfo.title}</span>
                    <p className="small-project-description">{elemInfo.description}</p>
                    <p className="text-center"><img src={GitHubLogo} alt="github logo "/><a href={elemInfo.github} target="_blank" rel="noreferrer" className="ml-1">View Code</a></p>
                    </div>     
                </div>
                )

            })}
            </div>

        </div>
    )
}

export default Projects