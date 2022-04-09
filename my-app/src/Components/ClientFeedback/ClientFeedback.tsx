import React from 'react'

export const ClientFeedback: React.FC = () => {
    return (
        <div className="text-center">
            <b>Company Feedback</b>
            <h2>Review of company you have applied</h2>
            <div className="company_feedback">
                <div>
                    <img width={50} src="./Img/logo.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ClientFeedback;