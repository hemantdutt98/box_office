/* eslint-disable arrow-body-style */
import React from 'react'
import Navs from "./Navs";
import Title from "./Title";

const MainPageLayout = ({children}) => {
    return (
        <div>
            <Title title="Box Office" subtitle="Find out about movies and actors"/>
            <Navs/>
            {children}
        </div>
    )
}

export default MainPageLayout
