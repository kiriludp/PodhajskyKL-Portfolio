import React from "react"
import "../style/Resume.css"



export default function Resume() {
    return (
        <section className="px-4 py-16 md: 9y-24 lg: 9x-8" id="resume">
            <div className="mx-auto max-w-screen-lg">
                <div className="flex flex-col divide-y-2 divide-neutral-300">
                    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4">
                        <div className="col-span-1 flex justify-center md:justify-start">
                            <div className="relative h-max">
                                <h2 className="text-xl font-bold uppercase text-neutral-800">Work Experience</h2>
                                
                            </div>
                        </div>
                        <div className="col-span flex flex-col md:col-span-3" >
                            <div className="flex flex-col ph-8 last:ph-0 md:text-left" id="information">
                                <div className="fle flex-col ph-4">
                                    <h3 className="workEx">
                                        Specialty Scheduling Project Manager
                                    </h3>
                                <div className="flex items-center justify-center gap-x-2 md:justify-start">
                                    <span className="flex-1 text-sm font-medium italic sm:flex-none">Kaiser Permanente</span>
                                    <span> * </span>
                                    <span className="flex-1 text-sm sm:flex-none">October 2017-June 2023</span>
                                </div>
                                </div>
                                <p>
                                    <ul>
                                        <li>Plan and build surgeons schedules up to four months in advance for the entirety of the Washington Region. Develop parameters to support a level monthly schedule that prioritized patient access. Ensure surgeons vacation and requested scheduling parameters are included without breaking set parameters. Consistently check and adjust schedules based on new information, addition/loss of surgical staff, or unexpected circumstances.</li>
                                        <li>Process and submit payroll information for supported surgical departments including overtime hours, paid time off, special payroll coding such as COVID-19 sick hours.</li>
                                        <li>Work closely with regional leadership to strategize on solutions to gaps in surgical department processes. Analyze data to identify these gaps including appointment fill rates, surgical parameters, patient satisfaction, use of surgical hours, and surgical length time</li>
                                        <li>Developed and implemented a new scheduling process for over 180o doctors across the Washington State region. Wrote all training material including a two year planning guide and schedule build timeline. Interviewed and trained over 20 new team members within a 2 month period. Represented the team during meetings with directors, national, and regional leadership. Educated and supported continued training for all Washington State locations</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="flex flex-col ph-8 last:ph-0 md:text-left" id="information">
                                <div className="fle flex-col ph-4">
                                    <h3 className="workEx">
                                        Store Manager 
                                    </h3>
                                <div className="flex items-center justify-center gap-x-2 md:justify-start">
                                    <span className="flex-1 text-sm font-medium italic sm:flex-none">Starbucks</span>
                                    <span> * </span>
                                    <span className="flex-1 text-sm sm:flex-none"> March 2015-October 2017</span>
                                </div>
                                </div>
                                <p>
                                    <ul>
                                        <li>Responsible for the recruitment of new partners as well as their training and development.</li>
                                        <li>Responsible for developing tenured and new partners into a unified team dedicated to creating a culture and environment of warmth and inclusion while keeping them focused on providing exceptional customer experience.</li>
                                        <li>Kept up to date on new hourly and salary based labor laws and created and executed action plans to ensure we were following proper policy and procedure.</li>
                                        <li>Closely monitored building schedules so we both supported the business, the partners, and fell within allotted labor percentages.</li>
                                        <li>Identified potential candidates for promotion and developed plans to help them succeed, moderated inter-partner issues and built strong relationships with district team in order to provide support and contribute to the overall success of the district.</li>
                                        <li>Maintained store administrative duties including writing schedules, managing payroll, store budget management and forecasting, and cash management</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4">
                        <div className="col-span-1 flex justify-center md:justify-start">
                            <div className="relative h-max">
                                <h2 className="text-xl font-bold uppercase text-neutral-800">Skills</h2>
                                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-blue-400"></span>
                            </div>
                        </div>
                        <div className="col-span flex flex-col md:col-span-3">
                        <div className="flex flex-col ph-8 last:ph-0 md:text-left" id="information">
                                <div className="fle flex-col ph-4">
                                    <h3 className="workEx">
                                       Full Stack Developer Skills and Programs
                                    </h3>
                                <div className="flex items-center justify-center gap-x-2 md:justify-start">
                                    
                                </div>
                                </div>
                                <p>
                                    <ul>
                                        <li>React.js</li>
                                        <li>NoSql</li>
                                        <li>Mongoose</li>
                                        <li>HTML/CSS</li>
                                        <li>Javascript</li>
                                        <li>Bootstrap</li>
                                        <li>Handlebars</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4">
                        <div className="col-span-1 flex justify-center md:justify-start">
                            <div className="relative h-max">
                                <h2 className="text-xl font-bold uppercase text-neutral-800">Education</h2>
                                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-blue-400"></span>
                            </div>
                        </div>
                        <div className="col-span flex flex-col md:col-span-3">
                        <div className="flex flex-col ph-8 last:ph-0 md:text-left" id="information">
                                <div className="fle flex-col ph-4">
                                   
                                <div className="flex items-center justify-center gap-x-2 md:justify-start">
                                    <span className="flex-1 text-sm font-medium italic sm:flex-none">UW Full Stack Developer Bootcamp</span>
                                    <span> * </span>
                                    <span className="flex-1 text-sm sm:flex-none">March-June 2023</span>
                                </div>
                                </div>
                                <p>Here is where my work experience will go tadaaaaaa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
