"use client"
import CountUp from "react-countup"

const status = [
  {
    num: 4,
    text: "Years helping clients grow"
  },
  {
    num: 50,
    text: "Successful campaigns"
  },
  {
    num: 12,
    text: "Marketing channels mastered"
  },
  {
    num: 300,
    text: "Clients satisfied"
  },
]


const Status = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
     <div className="container mx-auto ">
        <div className="flex flex-wrap gap-6 mx-auto xl:max-w-none ">{status.map((item, index)=>{
        return (
          <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start  " key={index}>
            <CountUp 
            end={item.num}
            duration={5}
            delay={2}
            className="text-4xl xl:text-6xl font-extrabold"
            />
            <p className={`${item.text.length < 15 ? "mx-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
          </div>
        )
      })}</div>
     </div>
    </section>
  )
}

export default Status
