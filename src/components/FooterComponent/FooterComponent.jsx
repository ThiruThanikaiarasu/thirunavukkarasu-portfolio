import { Linkedin } from 'lucide-react'
import React from 'react'

const FooterComponent = () => {
    return (
        <footer
            className="
                        py-6 px-6
                        flex justify-between
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
                className="
                            p-2
                            bg-[#FFFFFF]
                            rounded-full
                            border
                            hover:ring-4 hover:ring-[#eaeaea] dark:hover:ring-[#252525]
                        "
            >
                <Linkedin 
                    fill='black'
                    size={18}
                />
            </div>
        </footer>
    )
}

export default FooterComponent