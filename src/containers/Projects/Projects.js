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
                            src={modalPic} 
                            alt="zoomedpic"
                            style={{
                                maxWidth: '600px', 
                                maxHeight: '600px',
                            }}
                            
                        />
                </div>
            </div>
            </>
            }
            <div className="small-project-wrapper mt-5 text-left">
            {ProjectsInfo.map((elemInfo, index) => {
                return (
                <div className="d-md-flex justify-content-between" key={index}>
                   <div className="">
                    <img 
                        onClick={() => {
                            setModal({
                                show: true,
                                url: elemInfo.url
                            })
                        }}
                        src={elemInfo.url} 
                        alt={elemInfo.title} 
                        className="project-image d-block p-3 mx-auto" 
                        />
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
        </>
    )
}

export default Projects

// const modalStyles = {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)'
// }