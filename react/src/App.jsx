import { useState } from "react";

function App() {
  const first = "https://github.com/fatintawsifhoque"
  const apiLink = 'https://api.qrserver.com/v1/create-qr-code/?&data='
  const [inputValue, inputValueSet] = useState('')
  const [qr, setQr] = useState(apiLink + first)
  const generate = () => {
    if(!inputValue) return setQr(apiLink + first)
    setQr(apiLink + inputValue)
    inputValueSet('')
  }

  return (
    <>
     
  <section className="h-[95vh] w-screen bg-lime-50 flex flex-col justify-center items-center">
    <h1 className="text-4xl font-bold mb-5.5 text-indigo-600">QR Code Generator</h1>
    <div className="h-100 w-125 border-2 border-dotted rounded-2xl flex flex-col items-center justify-center">
          <input type="text" placeholder="Input Text Or Link" className="border w-1/2 h-12 text-center rounded-lg" onChange={
            (elm) => {
              inputValueSet(elm.target.value)
            }
            
          }
            value={
            inputValue
          }
          />
      <button type="button" className="border mt-5 py-2 px-4 rounded-2xl cursor-pointer active:bg-purple-100 active:border-none" onClick={
        generate
      } > Generate</button>

      <div className=" h-[50%] mt-5 rounded-lg overflow-hidden">
        <img src={qr} className="h-full object-contain"/>
      </div>
    </div>
  </section>
  <section
      className="flex h-[5vh] w-full items-center justify-center border-t border-white/10 bg-slate-950 px-5"
    >
      <h2 className="text-sm sm:text-base font-medium text-slate-400">
        Coded by
        <a
          href="https://github.com/fatintawsifhoque"
          target="_blank"
          className="group relative ml-1 inline-block font-black text-emerald-400 transition-all duration-300 hover:text-emerald-300"
        >
          <span
            className="absolute -inset-x-1 -inset-y-0.5 z-0 rounded-md bg-emerald-400/0 transition-all duration-300 group-hover:bg-emerald-400/10"
          ></span>
          <span className="relative">Fatin Tawsif Hoque</span>
          <span
            className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-emerald-400 transition-all duration-300 group-hover:w-full"
          ></span>
        </a>
      </h2>
    </section>
    </>
  )
}

export default App
