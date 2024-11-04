import React from 'react'
import Button from '../../elements/Button'
import FooterComponent from '../FooterComponent/FooterComponent'

const HireMeFormComponent = () => {
    return (
        <div
            className="px-4 flex flex-col gap-4 mt-6"
        >
            <div
                className="flex justify-between"
            >
                <input 
                    type="text" 
                    placeholder='Name'
                    className="
                                px-4 py-2
                                bg-[#F7F7F7] dark:bg-[#2C2C2C]
                                border dark:border-[#2C2C2C]
                                rounded-md
                            "
                />
                <input 
                    type="text" 
                    placeholder='Email Address'
                    className="
                                px-4 py-2
                                bg-[#F7F7F7] dark:bg-[#2C2C2C]
                                border dark:border-[#2C2C2C]
                                rounded-md
                            "
                />
            </div>

            <div
                className="w-[100%]"
            >
                <textarea 
                    className="
                                w-full
                                px-4 py-2
                                bg-[#F7F7F7] dark:bg-[#2C2C2C]
                                border dark:border-[#2C2C2C]
                                resize-none
                                rounded-md
                            "
                    placeholder="Message"
                    name="" 
                    id=""
                    rows='6'
                >

                </textarea>
            </div>

            <Button
                className="
                            py-2
                            font-medium
                            text-[#ffffff]
                            bg-[#000000] dark:bg-[#424242]
                            rounded-md
                        "
            >
                Submit
            </Button>

            <FooterComponent />
        </div>
    )
}

export default HireMeFormComponent