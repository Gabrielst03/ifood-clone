
interface Props {
    title: string;
    image: string;
    price: string;
    delivery_time: string;
    delivery_price: string;
}

export function ProductOfferCard({ title, image, price, delivery_time, delivery_price }: Props) {
    return (
        <>
            <div className="flex flex-col hover:scale-[101%] w-full rounded-lg duration-300 cursor-pointer border border-transparent hover:border-gray-200 hover:shadow-xl p-5">
                <img src={image} className="w-full h-44 rounded-lg object-cover" alt="" />
                <p className="mt-3 text-sm">{title}</p>
                <h1 className="mt-4 font-semibold">A partir de R$ {price}</h1>
                <hr className="mt-4" />
                <p className="text-xs mt-4">{delivery_time} / {delivery_price}</p>
            </div>
        </>
    )
}