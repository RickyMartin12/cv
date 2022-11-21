
import Image from 'next/image'

// Imagens das Linguagens

import HTML5 from '../images/html5.png';
import CSS3 from '../images/css3.png';
import Javascript from '../images/javascript.png';
import PHP from '../images/php.png';
import Wordpress  from '../images/wordpress.png';
import Amazon  from '../images/Amazon_Lightsail.png';
import PostgreSQL  from '../images/postgresql.png';
import CUBA from '../images/cuba.png';
import Java from '../images/java.jpg';
import MYSQL  from '../images/mysql.png';
import Bootstrap  from '../images/bootstrap.png';
import Movavi  from '../images/movavi.png';

const Works = () => {
    return(
        <>
            <div className="py-8 pb-4 px-12 h-full flex flex-col">
                <h1 className="text-4xl font-semibold font-header tracking-wide text-center">Ricardo&nbsp;
                    <span className="text-accent">Peleira</span>
                </h1>
                <div className="mt-0 mb-1">      
                    <h2 className="text-2xl tracking-wider text-center">Full-stack Developer</h2>
                </div>

                <div className="mb-2 prose-sm prose-slate">
                    <h3>About</h3>

                    <p className="leading-5 text-xs text-slate-600">
                    I m a <b>web developer</b> with more 3 years of experience to create and development websites 
                    using the languages such as: <b>PHP, Java, C# .Net, CSS, HTML e Javascript</b>. 
                    I have some experiencias and knowledgements about Frameworks <b>Laravel, Bootstrap, React JS, Jquery</b>.
                    </p>
                </div>

                <div className="h-full flex flex-col prose-sm">
                    <h3>Work Experience</h3>
                    <div className="h-full flex flex-col">
                        <h4 className="mt-0 mb-0.5 text-sm text-indigo-700">
                            <b>Lazer Telecom - </b>Software Developer - PHP
                        </h4>
                        <p className="text-slate-500 block leading-4 text-xs uppercase tracking-wide" style={{marginBottom: '5px!important'}}>
                            JUNHO 2022 - DEZEMBRO 2022, Almancil (Faro) - Portugal
                        </p>

                        <ul className="list-disc text-xs text-slate-600">
                            <li className="pl-0">
                                Web developement mon project (PHP, CSS, HTML and Javascript)
                                such as: mon.lazertelecom.com and improve some details in mon
                                website leads such as Leads (Reconnections, Change Over and New
                                Connections) and Images gallery.
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
                                
                            </ul>



                        </div>

                        <hr className="my-4"></hr>


                        <h4 className="mt-0 mb-0.5 text-sm text-indigo-700">
                            <b>Interhub - </b>Web Developer - Wordpress PHP
                        </h4>
                        <p className="text-slate-500 block leading-4 text-xs uppercase tracking-wide" style={{marginBottom: '5px!important'}}>
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

                        <hr className="my-4"></hr>


                        <h4 className="mt-0 mb-0.5 text-sm text-indigo-700">
                            <b>Camara Municipal de Olhao - </b>Java Web Developer - Cuba Studio
                        </h4>
                        <p className="text-slate-500 block leading-4 text-xs uppercase tracking-wide" style={{marginBottom: '5px!important'}}>
                            JANEIRO 2021 - FEVEREIRO 2021, Olhao - Portugal
                        </p>
                        <ul className="list-disc text-xs text-slate-600">
                            <li className="pl-0">
                                Development in IT which ensures your exists system integration and was 
                                used the techonology platform which has CUBA Studio and database such as PostgreSQL. 
                            </li>
                        </ul>
                        <div className="mt-2 not-prose">
                            <ul className="flex -mx-1">
                                <li className="flex px-1 hover:scale-150 ease-in-out duration-150">
                                    <Image src={PostgreSQL} title="PostgreSQL" width="20px" height="20px" />
                                </li>
                                <li className="flex px-1 hover:scale-150 ease-in-out duration-150">
                                    <Image src={CSS3} title="CSS3" width="20px" height="20px" />
                                </li>
                                <li className="flex px-1 hover:scale-150 ease-in-out duration-150">
                                    <Image src={CUBA} title="CUBA Studio" width="20px" height="20px" />
                                </li>
                                <li className="flex px-1 hover:scale-150 ease-in-out duration-150">
                                    <Image src={Java} title="Java" width="20px" height="20px" />
                                </li>
                            </ul>
                        </div>

                        <hr className="my-4"></hr>

                        <h4 className="mt-0 mb-0.5 text-sm text-indigo-700">
                            <b>Conceptek a Shiji Group - </b>Web Developer
                        </h4>
                        <p className="text-slate-500 block leading-4 text-xs uppercase tracking-wide" style={{marginBottom: '5px!important'}}>
                            MAIO 2019 - DEZEMBRO 2019, Almancil - Portugal
                        </p>
                        <ul className="list-disc text-xs text-slate-600">
                            <li className="pl-0">
                                Web application in moodle plataform E-Learning conceptek a Shiji Group.
                            </li>
                            <li className="pl-0">
                                Videos in E-learning conecptek platform using in golf and spa apps.
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
                                    <Image src={MYSQL} title="MYSQL" width="20px" height="20px" />
                                </li>
                                <li className="flex px-1 hover:scale-150 ease-in-out duration-150">
                                    <Image src={Bootstrap} title="Bootstrap" width="20px" height="20px" />
                                </li>

                                <li className="flex px-1 hover:scale-150 ease-in-out duration-150">
                                    <Image src={Movavi} title="Movavi Video Editor" width="60px" height="20px" />
                                </li>

                                
                            </ul>
                        </div>


                        <hr className="my-4"></hr>


                        <h4 className="mt-0 mb-0.5 text-sm text-indigo-700">
                            <b>OSEUBACKOFFICE LDA - </b>Web Programming - Intern
                        </h4>
                        <p className="text-slate-500 block leading-4 text-xs uppercase tracking-wide" style={{marginBottom: '5px!important'}}>
                            OUTUBRO 2016 - AGOSTO 2017, Albufeira - Portugal
                        </p>
                        <ul className="list-disc text-xs text-slate-600">
                            <li className="pl-0">
                                Land Page Sites Construction using the programming languages such as: HTML, CSS, PHP, Javascript e MYSQL.
                            </li>
                            <li className="pl-0">
                                Transfers Platforms Construction.
                            </li>
                            <li className="pl-0">
                                Implementation of Clients Transfers Tecnical Assistent
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
                                    <Image src={MYSQL} title="MYSQL" width="20px" height="20px" />
                                </li>
                                <li className="flex px-1 hover:scale-150 ease-in-out duration-150">
                                    <Image src={Bootstrap} title="Bootstrap" width="20px" height="20px" />
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