interface CardProps {
    title: string;
    image_url: string;
}

export function CategoryCard({ title, image_url }: CardProps) {
    return (
        <>
            <div className="flex flex-col items-center w-28 h-28 hover:bg-white rounded-lg hover:shadow-md hover:scale-[101%] transition-transform cursor-pointer">
                <img src={image_url} className="w-20 h-20 object-cover rounded-lg" alt="" />
                <p className="text-sm text-gray-500 font-medium mt-1">{title}</p>
            </div>
        </>
    )
}