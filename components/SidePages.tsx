

type Props = {
    children: React.ReactNode
  }


  const Sidepage = ({ children }: Props) => (
      
    <div className="grid grid-cols-[200px_minmax(900px,_1fr)_100px]">
        {children}
    </div>
  )
  

/*const Sidepage = () => {
    return(
        <div className="grid grid-cols-2 md:grid-cols-2">


            <div className='sidebar'>
                <div className=" relative py-8 flex flex-col overflow-hidden prose-sm prose-slate">
                    <div className="mt-0 mb-6">
                        <h1 className="text-5xl font-semibold font-header tracking-wide">Ricardo&nbsp;
                        <span className="text-accent">Peleira</span>
                        </h1>
                        <h2 className="text-2xl tracking-wider">Full-stack Developer</h2>
                    </div>

                    <img title="Typescript" 
                    className='typescript transform transition duration-500 hover:scale-110' alt="Typescript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png?20210506173343" />    

                </div>
            </div>
            <div>09</div>
    </div>
    );
    
}*/
  
export default Sidepage