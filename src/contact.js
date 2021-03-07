import axios from 'axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Contact = (props) => {
    
    //ルーター、デザイン
    //通信失敗
    
    const [Submitted, setSubmitted] = useState(false);
    const [send, setSend] = useState(true);
    const [messe, setMesse] = useState({name: "内容を入力してください", email: "内容を入力してください", body: "内容を入力してください"});
    const [values, setValues] = useState({name: "", email: "", body:""});
    
    const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    
    const valuesChange = (event) => {
        
        const tName = event.target.name;
        const tValue = event.target.value;
        
        switch ( tName ) {
            case 'name':
                
                setValues({ ...values, name: tValue });
                
                if (! tValue.match(/\S/g) || !tValue) {
                    setMesse({ ...messe, name: '内容を入力してください' });
                } else {
                    setMesse({ ...messe, name: '' });
                }
                
                break;
            case 'email':
                
                setValues({ ...values, email: tValue });
                if (! tValue.match(/\S/g) || !tValue) {
                    setMesse({ ...messe, email: '内容を入力してください' });
                } else if (!tValue.match(reg)) {
                // } else if (reg.test(tValue)) {
                    setMesse({ ...messe, email: '正しい形式で入力してください' });
                } else {
                    setMesse({ ...messe, email: '' });
                }
                break;
            case 'body':
                
                setValues({ ...values, body: tValue });
                if (! tValue.match(/\S/g) || !tValue) {
                    setMesse({ ...messe, body: '内容を入力してください' });
                } else {
                    setMesse({ ...messe, body: '' });
                }
                break;
        }
        //送信できるように
        if (messe.name === '' && messe.email === '' && messe.body === '') {
            setSend(false);
        } else {
            setSend(true);
        }
    }
    
    const sendMail = async () => {
        
        const posts = {
            
            name:values.name,
            email:values.email,
            body:values.body
        };
        
        console.log(posts);
        
        const res = await axios.post(`https://dokusika.deca.jp/api/contact`, posts);
        
        console.log(res);
        setSubmitted(true);
    }
    
    let contactForm;
    if(Submitted){
        
        contactForm= (
            <div className="done">
                送信完了
            </div>
        )
        
    }else{
        
        contactForm= (
            <div className="contact">
                <form>
                    <p className="title">お名前</p>
                    <input type="text" name="name" value={values.name} onChange={valuesChange}  className="input" />
                    <p className="error">{messe.name}</p>
                    <p className="title">メールアドレス</p>
                    <input type="email" name="email" value={values.email} onChange={valuesChange} className="input" />
                    <p className="error">{messe.email}</p>
                    <p className="title">お問い合わせ内容</p>
                    <textarea name="body" value={values.body} onChange={valuesChange}></textarea>
                    <p className="error">{messe.body}</p>
                    <div>
                        <button className="submit" onClick={sendMail} type="button" disabled={send}>送信</button>
                    </div>
                </form>
            </div>
        )
        
    }
    
    return(
        <div>
            <div className='contact-form'>
                {contactForm}
            </div>
        </div>
    );
}

export default Contact;