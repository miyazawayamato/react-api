import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Test = () => {
    
    
    useEffect(() => {
        const scriptAlert = document.createElement('script');
        scriptAlert.type = 'text/javascript';
    
        const textAlert = document.createTextNode( `trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"unnti","geo":"JP","time":"today 12-m"}],"category":0,"property":""}, {"exploreQuery":"q=%E5%9C%B0%E9%9C%87&geo=JP&date=today 12-m","guestPath":"https://trends.google.co.jp:443/trends/embed/"});`);
        scriptAlert.appendChild(textAlert);
        
        const head = document.getElementById('mainapp');
        head.appendChild(scriptAlert);
    }, []);
    
    
    
    
    return(
        
        <div>
            <h1>グラフです</h1>
            <div id="gra"></div>
        </div>
        
    );
}

export default Test;