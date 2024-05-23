import { IoIosStar } from "react-icons/io"

const StarSection = ({ starCount=5 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <IoIosStar
          key={index}
          className={index < starCount ? "text-[#FFC954]" : "text-[#E5E5E5]"}
        />
      ))}
    </div>
  )
}

export default StarSection
