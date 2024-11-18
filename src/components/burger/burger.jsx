import {Link} from '@tanstack/react-router'

export const Burger = ({handleMenu}) => {
    return(
        <div className="flex flex-col w-[150px] h-[150px] gap-2 items-center justify-center bg-grays rounded-lg border-black">
                <Link to='/about' className="size-6 w-max" onClick={handleMenu}><b>About</b></Link>
                <Link to='/dragon' className="size-6 w-max" onClick={handleMenu}><b>Dragons</b></Link>
                <Link to='/grimuar' className="size-6 w-max" onClick={handleMenu}><b>Books </b></Link>
                <Link to='/contact' className="size-6 w-max" onClick={handleMenu}><b>Contact</b></Link>
        </div>
    );
}