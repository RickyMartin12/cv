
import Image from 'next/image'
import photoCV from '../images/photo.jpg'
import styles from '../styles/Page.module.css'

import { DeviceMobileIcon, MailIcon } from '@heroicons/react/solid'
import { LocationMarkerIcon } from '@heroicons/react/outline'

// Imagens das Linguagens

import HTML5 from '../images/html5.png';
import CSS3 from '../images/css3.png';
import Javascript from '../images/javascript.png';
import PHP from '../images/php.png';
import React from '../images/react.png';
import Laravel from '../images/laravel.png';
import VUE from '../images/vue.png';
import NodeJS  from '../images/nodejs.png';
import Typescript  from '../images/typescript.png';
import Tailwind  from '../images/tailwind.png';
import Wordpress  from '../images/wordpress.png';
import Bootstrap  from '../images/bootstrap.png';
import Core  from '../images/core.png';
import Csharp  from '../images/csharp.png';
import MYSQL  from '../images/mysql.png';
import PostgreSQL  from '../images/postgresql.png';
import JBOSS  from '../images/jboss.png';
import RedHat from '../images/redhat.jpg';

const InfoContact = () => {
    return(
        <>
            <div className='sidebar relative py-8 flex flex-col overflow-hidden prose-sm prose-slate'>

                <div className='border-8 border-white w-[166px] h-[166px] rounded-full relative self-center z-20'>
                    <Image src={photoCV} className={`${styles.image_cv} max-w-full h-auto rounded-full`} alt="Image Ricardo Peleira"  />

                </div>

                <div className="bg-indigo-100 w-[500px] h-[250px] absolute top-[-120px] left-[-100px] rotate-[-28deg]"></div>
                <div className="bg-indigo-300 w-[500px] h-[250px] absolute top-[-140px] left-[-100px] rotate-[-20deg] z-10"></div>
                <div className="bg-indigo-500 w-[500px] h-[250px] absolute top-[-160px] left-[-100px] -rotate-12 z-10"></div>

                
                <div className=" relative py-2 flex flex-col overflow-hidden prose-sm prose-slate">

                    <div className='py-2 pb-2 px-8'>
                        <h2 style={{margin: '0'}}>Contact</h2>
                        
                        <ul className="p-0 mt-2">
                            <li className="flex items-center p-0 m-0"> 
                                <DeviceMobileIcon className={`h-6 w-6 text-black-500`} /> <a className="ml-2 text-accent underline">+351 963 354 089</a>
                            </li>
                            <li className="flex items-center p-0 m-0"> 
                                <MailIcon className={`h-6 w-6 text-black-500`} /> <a className="ml-2 text-accent underline">r.peleira@hotmail.com</a>
                            </li>

                            <li className="flex items-center p-0 m-0"> 
                                <LocationMarkerIcon className={`h-6 w-6 text-black-500`} /> <a className="ml-2 text-accent underline">Olhão, Faro, Portugal</a>
                            </li>
                        </ul>

                    </div>    

                    <div className=" relative py-2 flex flex-col overflow-hidden prose-sm prose-slate">

                        <div className='py-2 pb-2 px-8'>
                            <h2 style={{margin: '0'}}>Education</h2>

                            <div className="flex flex-col items-start prose">
                                <small className="leading-none">2018 - 2019</small>
                                <h4 className="mt-0 mb-0.5 text-sm text-indigo-700">Técnico Especialista em Aplicações Informáticas de Gestão</h4>
                                <h5 className="text-slate-600 mt-1 leading-3 text-xs">IEFP, Olhão</h5>
                            </div>
                            <hr className="my-4" />
                            <div className="flex flex-col items-start prose">
                                <small className="leading-none">2011 - 2015</small>
                                <h4 className="mt-0 mb-0.5 text-sm text-indigo-700">Graduate Computer Engineer</h4>
                                <h5 className="text-slate-600 mt-1 leading-3 text-xs">Algarve University - Science and Technology, Olhão</h5>
                            </div>
                        </div>
                    </div>   

                    <div className=" relative py-2 flex flex-col overflow-hidden prose-sm prose-slate">

                        <div className='py-0 pb-2 px-8'>
                                <h2 style={{margin: '0'}}>Skills</h2>
                                    <ul className='p-0 grid grid-cols-2 mt-2'>
                                        <li className='p-0 mt-0 flex items-center'>
                                            <div className='mr-2 not-prose'>
                                                <ul className='flex -mx-1'>
                                                    <li  className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                                                        <Image src={HTML5} title="HTML5" width="15px" height="15px" />
                                                    </li>
                                                </ul>
                                            </div>
                                            HTML5
                                        </li>

                                        <li className='p-0 mt-2 flex items-center'>
                                            <div className='mr-2 not-prose'>
                                                <ul className='flex -mx-1'>
                                                    <li  className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                                                        <Image src={CSS3} title="CSS3" width="15px" height="15px" />
                                                    </li>
                                                </ul>
                                            </div>
                                            CSS3
                                        </li>


                                        <li className='p-0 mt-2 flex items-center'>
                                            <div className='mr-2 not-prose'>
                                                <ul className='flex -mx-1'>
                                                    <li  className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                                                        <Image src={Javascript} title="Javascript" width="15px" height="15px" />
                                                    </li>
                                                </ul>
                                            </div>
                                            Javascript
                                        </li>


                                        <li className='p-0 mt-2 flex items-center'>
                                            <div className='mr-2 not-prose'>
                                                <ul className='flex -mx-1'>
                                                    <li  className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                                                        <Image src={PHP} title="PHP" width="15px" height="15px" />
                                                    </li>
                                                </ul>
                                            </div>
                                            PHP
                                        </li>

                                        <li className='p-0 mt-2 flex items-center'>
                                            <div className='mr-2 not-prose'>
                                                <ul className='flex -mx-1'>
                                                    <li  className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                                                        <Image src={React} title="React" width="15px" height="15px" />
                                                    </li>
                                                </ul>
                                            </div>
                                            React
                                        </li>

                                        <li className='p-0 mt-2 flex items-center'>
                                            <div className='mr-2 not-prose'>
                                                <ul className='flex -mx-1'>
                                                    <li  className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                                                        <Image src={Laravel} title="Laravel" width="15px" height="15px" />
                                                    </li>
                                                </ul>
                                            </div>
                                            Laravel
                                        </li>

                                        <li className='p-0 mt-2 flex items-center'>
                                            <div className='mr-2 not-prose'>
                                                <ul className='flex -mx-1'>
                                                    <li  className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                                                        <Image src={VUE} title="VUE" width="15px" height="15px" />
                                                    </li>
                                                </ul>
                                            </div>
                                            VUE
                                        </li>

                                        <li className='p-0 mt-2 flex items-center'>
                                            <div className='mr-2 not-prose'>
                                                <ul className='flex -mx-1'>
                                                    <li  className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                                                        <Image src={NodeJS} title="Node.js" width="15px" height="15px" />
                                                    </li>
                                                </ul>
                                            </div>
                                            Node.js
                                        </li>

                                        <li className='p-0 mt-2 flex items-center'>
                                            <div className='mr-2 not-prose'>
                                                <ul className='flex -mx-1'>
                                                    <li  className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                                                        <Image src={Typescript} title="Typescript" width="15px" height="15px" />
                                                    </li>
                                                </ul>
                                            </div>
                                            Typescript
                                        </li>


                                        <li className='p-0 mt-2 flex items-center'>
                                            <div className='mr-2 not-prose'>
                                                <ul className='flex -mx-1'>
                                                    <li  className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                                                        <Image src={Tailwind} title="Tailwind.css" width="15px" height="15px" />
                                                    </li>
                                                </ul>
                                            </div>
                                            Tailwind.css
                                        </li>

                                        <li className='p-0 mt-2 flex items-center'>
                                            <div className='mr-2 not-prose'>
                                                <ul className='flex -mx-1'>
                                                    <li  className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                                                        <Image src={Wordpress} title="Wordpress" width="15px" height="15px" />
                                                    </li>
                                                </ul>
                                            </div>
                                            Wordpress
                                        </li>

                                        <li className='p-0 mt-2 flex items-center'>
                                            <div className='mr-2 not-prose'>
                                                <ul className='flex -mx-1'>
                                                    <li  className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                                                        <Image src={Bootstrap} title="Bootstrap" width="15px" height="15px" />
                                                    </li>
                                                </ul>
                                            </div>
                                            Bootstrap
                                        </li>

                                        <li className='p-0 mt-2 flex items-center'>
                                            <div className='mr-2 not-prose'>
                                                <ul className='flex -mx-1'>
                                                    <li  className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                                                        <Image src={Core} title=".Net Core" width="15px" height="15px" />
                                                    </li>
                                                </ul>
                                            </div>
                                            .Net Core
                                        </li>


                                        <li className='p-0 mt-2 flex items-center'>
                                            <div className='mr-2 not-prose'>
                                                <ul className='flex -mx-1'>
                                                    <li  className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                                                        <Image src={Csharp} title="C#" width="15px" height="15px" />
                                                    </li>
                                                </ul>
                                            </div>
                                            C#
                                        </li>

                                        <li className='p-0 mt-2 flex items-center'>
                                            <div className='mr-2 not-prose'>
                                                <ul className='flex -mx-1'>
                                                    <li  className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                                                        <Image src={MYSQL} title="MYSQL" width="15px" height="15px" />
                                                    </li>
                                                </ul>
                                            </div>
                                            MYSQL
                                        </li>

                                        <li className='p-0 mt-2 flex items-center'>
                                            <div className='mr-2 not-prose'>
                                                <ul className='flex -mx-1'>
                                                    <li  className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                                                        <Image src={PostgreSQL} title="PostgreSQL" width="15px" height="15px" />
                                                    </li>
                                                </ul>
                                            </div>
                                            PostgreSQL
                                        </li>

                                        <li className='p-0 mt-2 flex items-center'>
                                            <div className='mr-2 not-prose'>
                                                <ul className='flex -mx-1'>
                                                    <li  className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                                                        <Image src={JBOSS} title="Java Boss EAP" width="15px" height="15px" />
                                                    </li>
                                                </ul>
                                            </div>
                                            Java Boss EAP
                                        </li>

                                        <li className='p-0 mt-2 flex items-center'>
                                            <div className='mr-2 not-prose'>
                                                <ul className='flex -mx-1'>
                                                    <li  className='flex px-1 hover:scale-150 ease-in-out duration-150'>
                                                        <Image src={RedHat} title="Server Red Hat" width="15px" height="15px" />
                                                    </li>
                                                </ul>
                                            </div>
                                            Server Red Hat
                                        </li>


                                    </ul>
                        </div>
                    </div>   


                    <div className=" relative py-0 flex flex-col overflow-hidden prose-sm prose-slate">

                        <div className='py-0 pb-2 px-8'>
                            <h2 style={{margin: '0'}}>Languages</h2>

                            <ul className="pl-0">
                                <li className="m-0 p-0 flex items-center"><h4 className="m-0"><span className="mr-2">PT </span>Portuguese - Native</h4></li>
                                <li className="m-0 p-0 flex items-center"><h4 className="m-0"><span className="mr-2">🇬🇧 </span>English - Intermedium</h4></li>
                            </ul>

                            
                        </div>
                    </div>   

                    <div className=" relative py-0 flex flex-col overflow-hidden prose-sm prose-slate">
                        <div className='py-0 pb-2 px-8'>
                            <h2 style={{margin: '0'}}>Interests</h2>
                                <ul className="p-0">
                                    <li className="m-0 p-0"><span className="mr-2">👨🏼&zwj;💻 </span>Programming</li>
                                    <li className="m-0 p-0"><span className="mr-2">&#9917;</span>Soccer</li>
                                    <li className="m-0 p-0"><span className="mr-2">🏋️</span>GYM</li>
                                </ul>
                                    
                        </div>
                    </div>         

                    
                </div>
            </div>
            
        </>
    );
    
}
  
export default InfoContact