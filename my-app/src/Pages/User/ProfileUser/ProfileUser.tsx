import React from 'react'
import { Navbar } from 'Layout'
import { FeedbackCompany, FeedbackSummary, Profile, WorkingSkill, YourCV } from 'Components';
// import Navbar from ''


const ProfileUser: React.FC = () => {
    return (

        <div >
            <div>
                <Navbar />
            </div>
            <div style={{ background: 'url(./Img/background3.jpg)' }}>
                <Profile />
                <YourCV />
                <FeedbackSummary />
                {/* <FeedbackCompany /> */}
                <WorkingSkill />
            </div>
        </div >
    )
}

export default ProfileUser