/* eslint-disable react/prop-types */


const Divider = ({title}) => {
  return (
    <div className="relative">
            {/* Divider */}
            <div className="absolute inset-0 flex items-center">
                <div className=" border border-slate-200 w-9/12 mx-auto"></div>
            </div>
            {/* text */}
            <div className=" flex justify-center relative px-4">
                <div className="text-slate-600 text-3xl font-display bg-white p-2">{title}</div>
            </div>    
    </div>
  )
}

export default Divider
