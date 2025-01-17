/* eslint-disable react/prop-types */
import { Header } from "../../components/header/header";
import { RegBtn } from "../../components/registration/regBtn";
import { Social } from "../../components/social/social";
import { Registration } from '/src/components/registration/registration.jsx';
import { AuthBtn } from "../../components/authorization/authBtn";
import { Auth } from '/src/components/authorization/auth.jsx';
import { useState } from 'react';

export const MainPage = () => {
    const [text, setText] = useState(<RegBtn/>);
    const [show, setShow] = useState(false);
    const [auth, setAuth] = useState(false);
    const [store, setStore] = useState([]);

    const check1 = data => {
        setShow(false);
        setStore(prevStore => [...prevStore, data]);
	};

    const check2 = (data) => {
        console.log(store);
        console.log(data);
        if(store[0].Name == data.Name && store[0].Password == data.Password) {
            console.log('auth');
            setAuth(false);
        } else {
            console.log('not authenticated');
        }
    };

    const handleAuth = () => {
        setAuth(true);
        console.log('auth');
        setShow(false);
    };

    const handleClick = () => {
        setShow(true);
        setText(<AuthBtn/>);
        console.log('reg');
    };



    return (
        <div className="i12:bg-cover bg-center iAir:bg-cover bg-center laptop:bg-center bg-main w-full h-[100vh] bg-no-repeat relative">
            <div className="max-w-[1520px] m-auto flex justify-center h-full">
                <Header handleClick={text.type.name === "RegBtn" ? handleClick : handleAuth}text={text}/>
                <div className="flex items-center">
                    {show && (
                        <Registration
                        setShow={setShow}
                        check1={check1}
                        />
                    )}
                    {auth && (
                        <Auth 
                        check2={check2}
                        />
                    )}
                </div>
            </div>
            <div className="pr-0 justify-center absolute laptop:pr-[50px] laptop:justify-end bottom-0 w-full pb-[20px] flex">
                <Social />
            </div>
        </div>
    );
};