
function App() {

  return (
    <div className="overflow-clip">
    <div className="z-50 bg-white z-50">
    <img src='Group 12.svg' className="absolute m-0 p-0 mt-2 z-25 w-[10%]"/>
    <img src="Logos.svg" className="lg:w-[60%] w-[100%] ml-[10%] max-w-48 absolute"/>
    <div className="flex flex-col">
      <div className='w-screen p-2 bg-blue-300 mt-[9%]'>
        <nav class="md:ml-auto flex flex-wrap items-center justify-end">
          <p class="mr-5 font-bold">HOME</p>
          <p class="mr-5 font-bold">ABOUT US</p>
          <p class="mr-5 font-bold">FAQ</p>
          <p class="mr-5 font-bold">CONTACT US</p>
        </nav>
      </div>
      <div className="bg-red-500 p-1 w-screen flex justify-center">
        <button className="bg-yellow-400 p-2 rounded-full font-bold text-white drop-shadow-md">Register</button>
        <p className="text-center mt-1 font-bold ml-5 text-2xl">Date - 03/12/2023</p>
      </div>
      <div className="bg-orange-700 p-2 w-screen">
        <button className="bg-yellow-400 p-2 rounded-full font-bold text-white drop-shadow-md ml-[10%]">LOGIN</button>
        <button className="bg-yellow-400 p-2 rounded-full font-bold text-white drop-shadow-md ml-[70%]">LOCATION</button>
      </div>
    </div>
    </div>
    <div className="bg-red-500 opacity-80 mt-[60%] h-[190%] z-40 absolute w-[100%] p-3"></div>
    <div className="z-50 absolute mt-[68%] text-center w-[100%] font-bold opacity-100">
      <p className="text-4xl z-10">Vision and Mission</p>
      <p className="w-[50%] ml-[25%] text-xl mt-[3%] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, libero ac congue iaculis, lectus metus gravida tortor, sit amet consequat neque libero sit amet justo. Vestibulum efficitur vitae ex id laoreet. Cras non scelerisque libero. Suspendisse quis posuere mauris. Sed fringilla tristique metus, a vehicula metus rhoncus nec. Sed in dui at arcu eleifend semper non nec dui. Integer efficitur nec dui non auctor. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed non felis vel dolor varius euismod. Integer tincidunt</p>
    </div>
    <div>
    <div className="w-screen h-96 font-bold text-center text-4xl bg-blue-600">Our Sponsors</div>
    <p className="text-3xl lg:text-7xl absolute z-50 text-white mt-[10%] ml-[12%] max-w-fit">MARATHON FOR PEDIATRIC CANCER</p>
    <img src="Sports.png" className="h-full w-screen opacity-90"/>
    </div>
    <img src="Sports 2.png" className="w-screen h-[120%] absolute"/>
    <div className="flex flex-row ml-[10%] gap-5">
    <div className="flex flex-col ">
    <img src="Sports.png" className="z-50 w-[55%]"/>
    <p className="z-50 font-extrabold text-2xl ml-[20%]">Vision</p>
    <p className="z-50 w-64 text-center text-white font-bold">At our marathon, we run with a purpose - to make a difference in the lives of children battling pediatric cancer. We believe in the power of unity and determination to bring hope and healing to young patients and their families. Pediatric cancer is a relentless adversary, affecting the lives of countless children, and our mission is to stand by their side, raising funds and awareness to support research, treatment, and care. Every step we take, every stride we make, is a step closer to a world where no child has to face the daunting challenge of cancer. Join us in our fight against pediatric cancer, as together, we can turn every mile into a source of strength and a symbol of hope.</p>
    </div>
    <div className="flex flex-col justify-center ">
    <img src="Sports.png" className="z-50 w-[55%]"/>
    <p className="z-50 font-extrabold text-2xl ml-[20%]">Cause</p>
    <p className="z-50 w-64 text-center text-white font-bold">At our marathon, we run with a purpose - to make a difference in the lives of children battling pediatric cancer. We believe in the power of unity and determination to bring hope and healing to young patients and their families. Pediatric cancer is a relentless adversary, affecting the lives of countless children, and our mission is to stand by their side, raising funds and awareness to support research, treatment, and care. Every step we take, every stride we make, is a step closer to a world where no child has to face the daunting challenge of cancer. Join us in our fight against pediatric cancer, as together, we can turn every mile into a source of strength and a symbol of hope.</p>
    </div>
    <div className="flex flex-col justify-center ">
    <img src="Sports.png" className="z-50 w-[55%]"/>
    <p className="z-50 font-extrabold text-2xl ml-[20%]">Team</p>
    <p className="z-50 w-64 text-center text-white font-bold">At our marathon, we run with a purpose - to make a difference in the lives of children battling pediatric cancer. We believe in the power of unity and determination to bring hope and healing to young patients and their families. Pediatric cancer is a relentless adversary, affecting the lives of countless children, and our mission is to stand by their side, raising funds and awareness to support research, treatment, and care. Every step we take, every stride we make, is a step closer to a world where no child has to face the daunting challenge of cancer. Join us in our fight against pediatric cancer, as together, we can turn every mile into a source of strength and a symbol of hope.</p>
    </div>
    </div>
    <div className="bg-red-900">
    <p className="absolute z-50 mt-[5%] ml-[45%] text-5xl font-bold">Gallery</p>
    <img src="Sports 3.png" className="w-screen"/>
    </div>
    </div>
  )
}

export default App
