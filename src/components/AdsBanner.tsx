interface AdsProps {
    image_url: string
}

export function AdsBanner({ image_url }: AdsProps) {
    return (
        <>
            <img src={image_url} className="w-full px-1 h-[200px] object-cover rounded-xl hover:scale-[101%] duration-300 cursor-pointer" alt="" />
        </>
    )
}