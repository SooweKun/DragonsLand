import { Social } from "../social/social";

export const Footer = () => {
    return (
        <div className="w-full h-[100px] bg-black mt-[100px]">
            <div className="i12:justify-center iAir:px-[100px] laptop:max-w-[1520px] m-auto flex justify-between pt-[30px] items-center">
                    <h1 className="i12:hidden text-white text-2xl flex w-max">@DragonsLend.core</h1>
                    <Social />
            </div>
        </div>
    );
};