import { ChevronDownIcon, SearchIcon, BadgePercent, UserIcon, ShoppingBagIcon } from "lucide-react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import categories from '../../utils/categories.json'
import ads from '../../utils/ads.json'

import { CategoryCard } from "@/components/CategoryCard";
import { AdsBanner } from "@/components/AdsBanner";
import CategoryCarousel from "@/components/Carousels/CategoriesCarousel";
import AdsCarousel from "@/components/Carousels/AdsCarousel";
import { Header } from "@/components/Header";
import CouponSection from "@/components/CouponSection";

import { Nunito_Sans } from "next/font/google";
import { ProductOfferCard } from "@/components/ProductOfferCard";

const Inclusive = Nunito_Sans({ subsets: ['latin'], weight: ['400', '300', '500', '600', '700'] })

export default function Page() {
    return (
        <main className={`flex flex-col min-h-screen ${Inclusive.className}`}>

            <Header />
            <CouponSection />

            <main className="flex flex-col min-h-screen mt-5 px-4 lg:px-32">

                <CategoryCarousel />

                <AdsCarousel />


                <div className="flex flex-col mt-20">

                    <h1 className="text-xl font-semibold">Tudo a partir de R$7,99
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-7 items-center mt-5 gap-4">
                        <ProductOfferCard
                            title="Gavião Sauveiro"
                            price="19,90"
                            delivery_price="R$2,99"
                            delivery_time="40-50min"
                            image="https://static.ifood-static.com.br/image/upload/t_medium/pratos/ffe95e1b-d06b-4933-8716-07b76a747523/202307271342_15F1_i.jpg"
                        />

                        <ProductOfferCard
                            title="Gavião Sauveiro"
                            price="19,90"
                            delivery_price="R$2,99"
                            delivery_time="40-50min"
                            image="https://static.ifood-static.com.br/image/upload/t_medium/pratos/ffe95e1b-d06b-4933-8716-07b76a747523/202307271342_15F1_i.jpg"
                        />

                        <ProductOfferCard
                            title="Gavião Sauveiro"
                            price="19,90"
                            delivery_price="R$2,99"
                            delivery_time="40-50min"
                            image="https://static.ifood-static.com.br/image/upload/t_medium/pratos/ffe95e1b-d06b-4933-8716-07b76a747523/202307271342_15F1_i.jpg"
                        />

                        <ProductOfferCard
                            title="Gavião Sauveiro"
                            price="19,90"
                            delivery_price="R$2,99"
                            delivery_time="40-50min"
                            image="https://static.ifood-static.com.br/image/upload/t_medium/pratos/ffe95e1b-d06b-4933-8716-07b76a747523/202307271342_15F1_i.jpg"
                        />

                        <ProductOfferCard
                            title="Gavião Sauveiro"
                            price="19,90"
                            delivery_price="R$2,99"
                            delivery_time="40-50min"
                            image="https://static.ifood-static.com.br/image/upload/t_medium/pratos/ffe95e1b-d06b-4933-8716-07b76a747523/202307271342_15F1_i.jpg"
                        />

                        <ProductOfferCard
                            title="Gavião Sauveiro"
                            price="19,90"
                            delivery_price="R$2,99"
                            delivery_time="40-50min"
                            image="https://static.ifood-static.com.br/image/upload/t_medium/pratos/ffe95e1b-d06b-4933-8716-07b76a747523/202307271342_15F1_i.jpg"
                        />

                        <ProductOfferCard
                            title="Gavião Sauveiro"
                            price="19,90"
                            delivery_price="R$2,99"
                            delivery_time="40-50min"
                            image="https://static.ifood-static.com.br/image/upload/t_medium/pratos/ffe95e1b-d06b-4933-8716-07b76a747523/202307271342_15F1_i.jpg"
                        />

                    </div>

                    <h1 className="text-xl font-semibold mt-12">Lojas
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen gap-3 mt-4">
                        <div className="flex w-full h-32 p-4 hover:shadow-lg rounded-lg duration-300 cursor-pointer hover:scale-[103%]">
                            <img src="https://static.ifood-static.com.br/image/upload/t_medium/logosgde/0a16dc78-9133-4dba-a4ba-3a4b710d303c/202308261638_NE95.png?imwidth=128" className="w-24 h-24" alt="" />

                            <div className="flex flex-col">
                                <h1 className="font-semibold text-lg text-zinc-600">Burger King - Pituba</h1>
                                <div className="flex items-center gap-1">
                                    <svg className="text-yellow-500" width="12" height="12" fill="currentColor" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M5.48279 0.313927L6.61067 2.70364C6.6891 2.86984 6.84075 2.98501 7.01618 3.01162L9.5383 3.39485C9.9801 3.46203 10.1564 4.02958 9.8368 4.35523L8.0118 6.21535C7.88497 6.34469 7.82698 6.53118 7.85702 6.71375L8.28777 9.34033C8.36328 9.80035 7.90145 10.1511 7.50637 9.93405L5.25063 8.69405C5.09376 8.60789 4.90624 8.60789 4.74937 8.69405L2.49363 9.93405C2.09855 10.1513 1.63672 9.80035 1.71223 9.34033L2.14298 6.71375C2.17302 6.53118 2.11503 6.34469 1.9882 6.21535L0.163203 4.35523C-0.156365 4.02936 0.019898 3.46182 0.461702 3.39485L2.98382 3.01162C3.15925 2.98501 3.3109 2.86984 3.38933 2.70364L4.51721 0.313927C4.71454 -0.104642 5.28525 -0.104642 5.48279 0.313927Z"></path></svg>
                                    <p className="text-xs text-yellow-500">4.8</p>
                                    <div className="flex items-center gap-2 ml-2">
                                        <p className="text-gray-400 text-sm font-light">Lanches  •  4.2 km</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>





                </div>
            </main>
        </main>
    )
}