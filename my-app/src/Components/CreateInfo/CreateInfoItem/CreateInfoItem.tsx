import { Button } from 'antd';
import React from 'react';
import { buttonSkill, iconSteps } from './CreateInfoItem.types';



export const ButtonSkillItem: React.FC<buttonSkill> = (props: buttonSkill) => {
    const { title, className, src } = props;
    return (
        <Button className={className} type='text'>
            {title}
            <img width={10} style={{ marginLeft: '10px' }} src={src} alt="" />
        </Button>
    );
};

export const IconStepsBar: React.FC<iconSteps> = (props: iconSteps) => {
    const { className, src } = props;
    return (
        <div className='icon-step-item' >
            <img className={className} src={src} alt="" />
        </div>
    )
}
