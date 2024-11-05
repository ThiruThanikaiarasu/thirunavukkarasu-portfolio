import React from 'react'
import Button from '../../elements/Button'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CirclePlus } from 'lucide-react'

const ViewAllProjectButtonComponent = () => {

    const navigate = useNavigate()

    const handleVisitWebsite = () => {
        navigate('/projects')
    }

    return (
        <Button 
            className="
                        w-24
                        flex items-center justify-between
                        px-2 py-1 
                        space-x-1
                        text-lg tracking-tight 
                        bg-[#141414] dark:bg-[#383838]
                        text-white 
                        rounded-md
                        hover:ring-4 hover:ring-[#ebebeb] dark:hover:ring-[#1c1c1c]
                        focus:outline-none
                    "
            onClick={handleVisitWebsite}
        >
            <span className="select-none tracking-tighter text-[14px]">View All</span>
            <ArrowRight 
                size={18}
            />
        </Button>
    )
}

export default ViewAllProjectButtonComponent