import React from 'react';
import Title from '../components/Title'
import SkillsSection from '../components/SkillsSection'


function AboutPage(){
    return <div>
        <Title title={'About Me'} span={'About Me'}/>
        <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'React Js'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Web Design'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'MongoDB'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'SQL/MySQL'} progress={'80%'} width={'80%'} />
            </div>
    </div>
}

export default AboutPage;