import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Nice to meet you, virtually. These sort of 'about me' narratives are uncomfortable for me; amd I typically laugh at those who compose boastful highlights of themselves. The truth about me is that the people with whom I surround myself professionally and personally are better then me at most everything; but it is their company that seems to get their qualities impressed upon me. One thing I can share is that I work very hard, and cannot remember a time that I quit or 'let up' because something was hard. Spontaneity combined with drive is a good joint-description.</p>

            <p>I joined the Army at age 40; the oldest Californian to go through basic training, and I graduated as an honor grad with the highest PT score in the company. At Officer Candidate School, I earned the Erickson Trophy as the Distinguished Honor Graduate (I assume there was a Steven Swanson at OCS, and they made a mistake). I ommissioned at age 41 years and 11 months; one month before Army regulations would have denied me a commission. I went on to become an intelligence officer (still holding TS-SCI clearance) with the 223rd MI BN, and later went on to be an infantry officer for the 184-1 BN, where I served as executive officer for several years. I completed my military career at the age of 49, and as an OCS instructor.</p>
            
            <p>I live in Incline Village, NV and have been here for three years after moving from Sacramento, CA. In Sacramento, we raised our son, Conner, who graduated from Cal in 2019 and now works as a software engineeer at Amazon in Seattle. I have a passion for anything outdoors; snowshoeing, snowskiing, watersking, wakeboarding, surfing, mountain biking, and most recently, kite surfing. In 2017, I sold two companies for applications we created on Salesforce. These applicationss accelereated the recruitment and placement of clinical contongent labor (nurses and allied health workers) and I now work as the CIO for the larger parent company, and also lead StaffBot; the now independent company that creates software in the healthcare space. </p>
            </Content>
        </div>
    );

}

export default AboutPage;