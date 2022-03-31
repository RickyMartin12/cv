
import Image from 'next/image'

// Imagens das Linguagens

import HTML5 from '../images/html5.png';
import CSS3 from '../images/css3.png';
import Javascript from '../images/javascript.png';
import PHP from '../images/php.png';
import Wordpress  from '../images/wordpress.png';
import Amazon  from '../images/Amazon_Lightsail.png';

const Works = () => {
    return(
        <>
            <div className="py-8 pb-4 px-12 h-full flex flex-col">
                <h1 className="text-6xl font-semibold font-header tracking-wide text-center">Ricardo&nbsp;
                    <span className="text-accent">Peleira</span>
                </h1>
                <div className="mt-0 mb-6">      
                    <h2 className="text-4xl tracking-wider text-center">Full-stack Developer</h2>
                </div>

                <div className="mb-6 prose-sm prose-slate">
                    <h3>About</h3>

                    <p className="leading-5 text-xs text-slate-600">
                    I m a <b>web developer</b> with more 3 years of experience to create and development websites 
                    using the languages such as: <b>PHP, Java, C# .Net, CSS, HTML e Javascript</b>. 
                    I have some experiencias and knowledgements about Frameworks <b>Laravel, Bootstrap, React JS, Jquery</b>.
                    I m going to apply to achieve my technical knowledgements and improve my professional level.
                    </p>
                </div>

                <div className="h-full flex flex-col prose-sm">
                    <h3>Work Experience</h3>
                    <div className="h-full flex flex-col">
                        <h4 className="mt-0 mb-0.5 text-sm text-indigo-700">
                            <b>Interhub - </b>Web Developer - Wordpress PHP
                        </h4>
                        <p className="text-slate-500 block leading-4 text-xs uppercase tracking-wide">
                            MAIO 2021 - DEZEMBRO 2021, Faro - Portugal
                        </p>
                        <ul className="list-disc text-xs text-slate-600">
                            <li className="pl-0">
                                Web developement in WordPress PHP projects (PHP, CSS, HTML and Javascript) 
                                such as: Globaldea, LetsgoTravel, Letsgo World and Interhub.
                            </li>
                            <li className="pl-0">
                                Web Hosting using AWS LightSail WordPress PHP.
                            </li>
                        </ul>
                        <div className="mt-2 not-prose">
                            <ul className="flex -mx-1">
                                <li className="flex px-1 hover:scale-150 ease-in-out duration-150">
                                    <Image src={HTML5} title="HTML5" width="20px" height="20px" />
                                </li>
                                <li className="flex px-1 hover:scale-150 ease-in-out duration-150">
                                    <Image src={CSS3} title="CSS3" width="20px" height="20px" />
                                </li>
                                <li className="flex px-1 hover:scale-150 ease-in-out duration-150">
                                    <Image src={PHP} title="PHP" width="20px" height="20px" />
                                </li>
                                <li className="flex px-1 hover:scale-150 ease-in-out duration-150">
                                    <Image src={Javascript} title="Javascript" width="20px" height="20px" />
                                </li>
                                <li className="flex px-1 hover:scale-150 ease-in-out duration-150">
                                    <Image src={Wordpress} title="Wordpress" width="20px" height="20px" />
                                </li>
                                <li className="flex px-1 hover:scale-150 ease-in-out duration-150">
                                    <Image src={Amazon} title="AWS Lightsail" width="50px" height="20px" />
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>


            </div>

            
        </>
    )
    
}

export default Works;