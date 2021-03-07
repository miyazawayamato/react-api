import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Qualification = () => {
    
    let indiv = (<div></div>);
    const [rend, setRend] = useState(indiv);
    const [qualis, setQualis] = useState([]);
    
    // const fetchall = async () => {
    //     const res = await axios.get('https://dokusika.deca.jp/api/qualis');
    //     setQualis(res.data.data);
    // }
    // fetchall();
    
    useEffect(()=> {
        const fetchall = async () => {
            const res = await axios.get('https://dokusika.deca.jp/api/qualis');
            setQualis(res.data.data);
        }
        fetchall();
    },[])
    
    
    const showQuali = async (id) => {
        
        const res = await axios.get('https://dokusika.deca.jp/api/quali/' + id);
        const datas = res.data.data;
        
        indiv = (
            <div>
                <div>
                    <span>資格名:</span>
                    <span>{datas.certificate}</span>
                </div>
                <div>
                    <span>合格率:</span>
                    <span>{datas.passrate}</span>
                </div>
                <div>
                    <span>試験日程:</span>
                    <span>{datas.time}</span>
                </div>
                <div>
                    <span>資格区分:</span>
                    <span>{datas.class}</span>
                </div>
            </div>
        );
        setRend(indiv);
    }
    
    
    return(
        
        <div>
            <div>
                {rend}
            </div>
            {(qualis.map((quali) =>
                <button onClick={() => showQuali(quali.id)} className="certifi">{quali.certificate}</button>
            ))}
        </div>
        
    );
}

export default Qualification;