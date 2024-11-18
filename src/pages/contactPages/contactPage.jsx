import { Footer } from "../../components/footer/footer";

export const ContactPage = () => {
    return (
        <>
            <div className="w-full h-[100vh] bg-center bg-no-repeat">
                <div className="max-w-[1520px] m-auto flex justify-center h-full items-center">
                        <img src="/src/assets/text.png" alt="not found" /> 
                </div>
                <div className="iAir:justify-center flex max-w-[1520px] m-auto laptop:animate-appear">
                    <div className="iAir:gap-[70px] iAir:flex-row i12:ml-[10px] i12:text-[16px] i12:flex-col i12:gap-5 i12:w-[340px] iAir:w-[650px] iAir:text-[22px] flex justify-between w-[871px] h-[546px] bg-[#EFEFEF]/[.50] border-gray-950 border-2 rounded-[7px] mt-[300px] p-[34px] text-[25px]">
                        <p className="iAir:h-[400px] iAir:w-[300px] i12:w-[230px] w-[334px] h-[330px]">Связаться с нами <br />
                            Электронная почта: <br /> info@dragongrimoires.com
                            Социальные сети: <br /> Следите за нами в социальных сетях, чтобы быть в курсе последних новостей и обновлений: <br />
                            Facebook <br />
                            Instagram <br />
                            Twitter
                        </p>
                        <p className="iAir:w-[300px] i12:w-[230px] w-[358px] h-[458px] "> Адрес <br />
                            Если вы хотите встретиться с нами или отправить письма,
                            вот наш адрес: <br /> Улица Драконов, 1Город Мифов, Страна Волшебства <br /> Почтовый индекс: <br /> 123456
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};