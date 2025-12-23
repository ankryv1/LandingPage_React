
const hero = () => {
  return (
    
    <section className="min-h-screen mb-4 bg-cover bg-center flex items-start pt-44 w-full overflow-hidden" style={{backgroundImage: "url('/header_img.png')"}} id="Header">
        <div className="text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
            <h2 className="text-5xl sm:text-6xl md:text-[75px] inline-block max-w-3xl font-semibold ">Transforming spaces into beautiful homes.</h2>
            <div className="space-x-6 mt-16">
                    <a href="#Projects" className="border border-white px-5 py-2 sm-px-8 sm-py-3 rounded font-bold">Projects</a>
                     <a href="#Contacts" className="bg-blue-500 px-5 py-2 sm-px-8 sm-py-3 rounded">Contact Us</a>
            </div>
        </div>
    </section>
  )
}

export default hero