import React, { useState } from 'react'
import ProjectsInfo from './ProjectsInfo/ProjectsInfo'
import GitHubLogo from '../../assets/GitHub-Mark-Light-32px.png'


const Projects = () => {
    
    const [ modal, setModal ] = useState({
        show: false,
        url: null
    })


    let modalPic;
    if (modal) {
        modalPic = modal.url
    }

    


    return ( 
        <>
        <div className="text-light project-wrapper">  
            <div className="project-title-wrapper">
                <span className="project-title d-block">Projects</span>
                <span className="project-info d-block">These are some of my recent projects</span>
            </div>
            {modal.show &&
            <>
            <div 
                className="Backdrop"
                onClick={() => {
                    setModal({
                        show: false,
                        url: null
                    })
                }}
                >
                <div 
                    className="Modal container-fluid" 
                    style={{
                        transform: modal.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: modal.show  ? '1' : '0'     
                        }}>      
                        <img 
                            className="modalImage"
                            src={modalPic} 
                            alt="zoomedpic"
                        />
                </div>
            </div>
            </>
            }
            <div className="small-project-wrapper mt-5">
            {ProjectsInfo.map((elemInfo, index) => {
                return (
                <div className="d-md-flex justify-content-between mt-5" key={index}>
                    {index % 2 === 0 ? (
                    <>   
                   <div className="img-div">
                        <img 
                            onClick={() => {
                                setModal({
                                    show: true,
                                    url: elemInfo.url
                                })
                            }}
                            src={elemInfo.url} 
                            alt={elemInfo.title} 
                            className="project-image p-3" 
                        />
                    </div>
                    <div className="">
                        <span className="d-block small-project-title text-center">{elemInfo.title}</span>
                        <p className="small-project-description text-left">{elemInfo.description}</p>
                        <p className="text-center"><img src={GitHubLogo} alt="github logo "/><a href={elemInfo.github} target="_blank" rel="noreferrer" className="ml-1">View Code</a></p>
                    </div> 
                    </>  
                    )
                    :    
                        (
                        <>
                            <div className="">
                                <span className="d-block small-project-title text-center">{elemInfo.title}</span>
                                <p className="small-project-description text-left">{elemInfo.description}</p>
                                <p className="text-center"><img src={GitHubLogo} alt="github logo "/><a href={elemInfo.github} target="_blank" rel="noreferrer" className="ml-1">View Code</a></p>
                            </div> 
                            <div className="img-div">
                                <img 
                                    onClick={() => {
                                        setModal({
                                            show: true,
                                            url: elemInfo.url
                                        })
                                    }}
                                    src={elemInfo.url} 
                                    alt={elemInfo.title} 
                                    className="project-image p-3" 
                                    />
                            </div>
                        </>
                        )
                    }

                </div>
                
                )

            })}
            </div>

        </div>
        </>
    )
}

export default Projects
