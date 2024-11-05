import { Linkedin } from 'lucide-react'
import React from 'react'

import github_dark from '../../assets/images/github_dark.svg'
import github_light from '../../assets/images/github_light.svg'
import linkedin_dark from '../../assets/images/linkedin_dark.svg'
import linkedin_light from '../../assets/images/linkedin_light.svg'

import useDataContext from '../../hooks/useDataContext'

const FooterComponent = () => {

    const { isDarkMode } = useDataContext()

    const linkedInIcon = isDarkMode ? linkedin_light : linkedin_dark
    const githubIcon = isDarkMode ? github_light : github_dark

    const linkedInUrl = 'https://www.linkedin.com/in/thiruthanikaiarasu/'
    const githubUrl = 'https://www.github.com/thiruthanikaiarasu'

    return (
        <footer
            className="
                        py-6 px-6
                        flex justify-start
                        bg-[#F6F6F6] dark:bg-[#2C2C2C]
                        rounded-lg
                    "
        >
            <div
                className="flex items-center px-4 gap-4"
            >

                <span
                    className="
                            text-2xl 
                            pb-1
                            text-[#CCCCCC] dark:text-[#616161]
                        "
                >
                    &#8226;
                </span>

                <h2
                    className="
                            text-xl font-medium
                            tracking-tight
                            text-[#666666] dark:text-[#C0C0C0]
                        "
                >
                    Follow
                </h2>
            </div>
            
            <div
                className="flex justify-evenly items-center ml-72"
            >
                <a href={linkedInUrl} target='_blank' rel="noopener noreferrer">
                    <img src={linkedInIcon} alt="" className="w-6 h-6 mr-2 mt-2 cursor-pointer"/>
                </a>

                <a href={githubUrl} target='_blank' rel="noopener noreferrer">
                    <img src={githubIcon} alt="" className="w-6 h-6 ml-4 mt-2 cursor-pointer"/>
                </a>
            </div>

        </footer>
    )
}

export default FooterComponent