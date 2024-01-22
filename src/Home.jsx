
function HomeScreen() {

    return (
      <div className="bg-gradient-to-t from-purple-300 to-pink-200 min-h-screen p-4 md:p-8">
  
        <h1 className="pt-8 pb-[100px] font-light text-center text-pink-500 font-semibold font-mono text-3xl">
          Stick Together
        </h1>
  
        <div id="clock-box" className="w-full md:w-[650px] mx-auto grid bg-gradient-to-r from-[#F6B6AB] to-[#F5A8C0] p-4 rounded-full">
  
          <div id="clock" className="text-center">
            <date className="block text-lg mb-2">887 DAYS</date>
            <time className="font-sans text-4xl leading-10 tracking-wide font-bold text-2xl">20:35:36</time>
          </div>
  
        </div>
  
        <div id="info" className="w-full mx-auto flex flex-col items-center pt-8 pb-8 md:flex-row md:justify-center md:mt-8">
  
          <div className="text-center md:flex md:flex-col md:items-center md:mb-4 mt-4 w-full md:w-auto">
            <img
              src="https://cdn.glitch.global/d60d1ab2-93c3-4416-b007-6dd619f82588/344762143_808869077426035_6092007693860442421_n.jpg?v=1684392839037"
              className="w-40 h-40 rounded-full mx-auto mb-2"
              alt="Hoang Duc Thuan"
            />
            <p className="text-1xl">Hoang Duc Thuan</p>
          </div>
  
          <div className="flex flex-col items-center justify-center md:mb-4 mt-4 md:p-[100px]">
            <div id="heart" className="text-4xl text-red-700 mb-2">
              ❤
            </div>
            <anni className="text-base text-[#b90d46]">13-04-2021</anni>
          </div>
  
          <div className="text-center md:flex md:flex-col md:items-center md:mb-4 mt-4 w-full md:w-auto">
            <img
              src="https://cdn.glitch.global/d60d1ab2-93c3-4416-b007-6dd619f82588/z3989944149409_e10502d33041d28300bd4b03677814ed.jpg?v=1672047007405"
              className="w-40 h-40 rounded-full mx-auto mb-2"
              alt="Nguyen Thi Kim Huong"
            />
            <p className="text-1xl">Nguyen Thi Kim Huong</p>
          </div>
  
        </div>
  
  
  
        <div id="music" className="flex justify-center pb-8">
          <audio loop autoPlay controls className="w-full md:w-[500px]">
            <source src="https://cdn.glitch.global/b633a015-8e01-4966-ae0e-728035dd720f/hi.mp3?v=1657788222885" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
  
        <footer className="text-center font-light text-2xl mt-[100px]">Thanks for your love💕</footer>
  
      </div>
  
    );
  }
  
  export default HomeScreen;
  