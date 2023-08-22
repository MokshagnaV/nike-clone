import Image from "next/image";

function Button({ label, imgURL, backgroundColor, textColor, borderColor }) {
  return (
    <button
      className={`flex justify-center items-center gap-2 rounded-full
     px-7 py-4 leading-none text-lg font-montserrat border ${
       backgroundColor && textColor && borderColor
         ? `${backgroundColor} ${textColor} ${borderColor} hover:bg-gray-50`
         : "bg-coral-red text-white border-coral-red hover:bg-red-500"
     }`}
    >
      {label}
      {imgURL && (
        <Image
          src={imgURL}
          alt="right arrow"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
}

export default Button;
