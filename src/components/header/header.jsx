/* eslint-disable react/prop-types */
import {Link} from '@tanstack/react-router'
import { useState } from 'react';
import { Burger } from "../../components/burger/burger";

export const Header = ({handleClick, text}) => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(prev => !prev);
    }

    return(
        <div className="i12:px-[20px] iAir:px-[50px] flex laptop:px-[200px] justify-between absolute z-10  left-1/2 transform -translate-x-1/2 w-full">
            <div className="i12:mt-[25px] i12:gap-[0px] flex items-center laptop:gap-[23px] mt-[41px] h-max justify-center">
                <div className=" w-[64px] h-[64px] content-center justify-center flex rounded-full items-center">
                <img src="./src/assets/logo.svg" alt="not found" className="i12:w-[32px] i12:h-[32px] laptop:w-[64px] laptop:h-[64px]"/>
                </div>
                <Link to='/'><b>DragonsLand</b></Link>
            </div>
            <div className="hidden laptop:flex mt-[109px] bg-grays/[.40] w-[565px] h-[70px] items-center justify-center gap-12 rounded-lg ml-[200px]">
                <Link to='/about' className="size-6 w-max"><b>About</b></Link>
                <Link to='/dragon' className="size-6 w-max"><b>Dragons</b></Link>
                <Link to='/grimuar' className="size-6 w-max"><b>Books </b></Link>
                <Link to='/contact' className="size-6 w-max"><b>Contact</b></Link>
            </div>
            <div className="iAir:w-max laptop:flex items-center gap-[83px] laptop:w-[343px] mt-[58px] h-max">
                <div className="size-[23px] w-max cursor-pointer" onClick={handleClick}>{text}</div>
                <input type="text" placeholder="Search here... " className="hidden laptop:flex w-[205px] h-[35px] rounded-[10px] bg-grays pl-7 placeholder:text-gray-900 outline-none"/>
            </div>
            <div className='iAir:flex mt-[40px] laptop:hidden'>
                <img src="src/assets/Frame.svg" alt="" onClick={handleMenu} className='border-gray-400 w-[35px] h-[35px] rounded-xl bg-grays'/>
            </div>
            {menu && 
                    <div className="i12:pr-[40px] flex justify-end mt-[130px] w-full iAir:pr-[70px] absolute">
                        <Burger handleMenu={handleMenu} />
                    </div>
                }
        </div>
    );
}