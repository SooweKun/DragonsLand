/* eslint-disable react/prop-types */
import { Card } from "../../components/card/card";
import { Footer } from "../../components/footer/footer";

export const DragonPage = () => {
    return (
        <>
            <div className="i12:bg-cover iAir:bg-cover bg-dragon w-full h-full bg-center bg-no-repeat ">
                    <div className="max-w-[1520px] m-auto">
                        
                    </div>
            </div>
            <div className="iAir:flex-row  i12:px-[30px] i12:gap-16 i12:flex-col max-w-[1750px] m-auto mt-[100px] flex laptop:flex-row laptop:justify-between">
                <div className="i12:flex-col i12:w-max i12:animate-none flex gap-[70px] laptop:flex-row laptop:flex-wrap laptop:w-[720px] h-max laptop:animate-appear">
                        <Card
                        text='Над скалистыми горами парит огромный дракон.
                              Его величественный и устрашающий силуэт словно бы окутан ореолом силы и могущества.
                              Чешуя дракона переливается всеми цветами радуги, создавая ощущение сказочности и таинственности.'
                        style={{backgroundImage: "url('src/assets/one.jpg')"}}
                        />
                        <Card
                        text='Огромный белый дракон, который открывает пасть в яростном рыке. Его размер настолько велик, 
                              что занимает почти весь кадр, а чешуя словно покрыта снегом.
                              У ног дракона стоят два человека в доспехах: один в темном, а другой в светлом.
                              Они кажутся совсем маленькими на фоне исполинского дракона и смотрят на него с тревогой и готовностью к бою.'
                        style={{backgroundImage: "url('src/assets/two.jpg')"}}
                        />
                         <Card
                        text='Белый дракон, парящего в небесах, окружённого облаками.
                              Его тело окутывает голубое сияние, а в воздухе остаются следы его стремительного движения.'
                        style={{backgroundImage: "url('src/assets/three.jpg')"}}
                        />
                         <Card
                        text='Чёрный дракон с крыльями и короной, окружённый сияющими белыми волосами.
                              Его образ величественен, но в то же время внушает страх, возможно, из-за своего тёмного цвета. 
                              На фоне дракона сияют белые звёзды, а также можно увидеть крошечный крест, который, вероятно, 
                              символизирует надежду или свет, что контрастирует с тёмным обликом дракона.'
                        style={{backgroundImage: "url('src/assets/four.jpg')"}}
                        />
                </div>
                <div className="i12:flex-col i12:w-max i12:animate-none flex gap-[70px] laptop:flex-row laptop:flex-wrap laptop:w-[720px] h-max laptop:justify-end laptop:animate-left">
                        <Card
                        text='Над океаном возвышается огромный дракон, который поглощает корабль.
                              От его движений по воде расходятся волны, и можно увидеть горящие корабли.
                              Всё это создаёт атмосферу опасности и напряжения.'
                        style={{backgroundImage: "url('src/assets/five.jpg')"}}
                        />
                        <Card
                        text='Белоснежный дракон, словно сотканный из облаков, величественно парит над старинным китайским святилищем. 
                              Его могучий облик, украшенный сверкающей чешуёй, излучает сияние в лучах света.'
                        style={{backgroundImage: "url('src/assets/six.jpg')"}}
                        />
                         <Card
                        text='Дракон, объятый пламенем, его пасть приоткрыта в зловещей ухмылке.
                              Вокруг него бушует пламя, словно кипящая лава, а его тело излучает яркий, почти невыносимый свет.
                              Этот дракон — воплощение могущественной силы, способной стереть с лица земли всё, что попадётся на её пути.'
                        style={{backgroundImage: "url('src/assets/seven.jpg')"}}
                        />
                         <Card
                        text='Дракон с множеством голов и красными глазами, покрытый чёрной чешуёй, выглядит устрашающе и 
                              словно готов к нападению. Его челюсти широко раскрыты, а из пасти вырывается пламя.
                              Вдалеке можно увидеть горящие дома и здания, что создаёт атмосферу хаоса и разрушений.'
                        style={{backgroundImage: "url('src/assets/eight.jpg')"}}
                        />
                </div>
            </div>
            <Footer />
        </>
    );
};