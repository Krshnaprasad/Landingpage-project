<template>
<q-page>
    <div class="container-fluid q-pt-xl q-pb-xl">
        <div class="container">
            <div class="row q-pt-md">
                <div class="col-md-6 q-pb-xl q-pl-lg">
                    <p class="text-bold gt-sm text-h3 "><span class="text-light-blue-10">Certified -</span> Full Stack Developer Programme</p>
                    <p class="text-bold lt-md text-h4 "><span class="text-light-blue-10">Certified -</span> Full Stack Developer Programme</p>

                    <p class="text-weight-medium text-h5">Training With Job Interview Guarantee (JIG)*</p>
                    <ul class="text-h6">
                        <li>100% Assured Job Opportunities</li>
                        <li>Workon Real-life Projects & Bootcamps</li>
                        <li>Personal Mentorship from Experts</li>
                        <li>Mock interviews, hackathons and more</li>
                        <li>Globally recoginzed கல்வி skill cerfications</li>
                    </ul>
                    <span>
                        <!-- <q-avatar v-for="n in 5" :key="n" size="32px" class="overlapping" :style="`left: ${n * 15}px`">
                            <img :src="`https://cdn.quasar.dev/img/avatar${n + 1}.jpg`"> -->
                        <!-- </q-avatar> -->
                        <span class="q-pl-lg">Kalvi skills team:
                            <q-btn class="bg-light-blue-10 text-white" label="+ more" @click="fixed = true" />
                            <q-dialog v-model="fixed">
                                <q-card class="bg-light-blue-1">
                                    <q-card-section>
                                        <div class="text-h6">Instructors</div>
                                    </q-card-section>
                                    <q-separator />

                                    <q-card-section style="max-height: 40vh" class="scroll">

                                        <div class="q-pa-md" style="max-width: 350px">
                                            <q-list>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label>Thyagarajan R</q-item-label>
                                                        <q-item-label caption lines="2">Senior Fullstack Developer</q-item-label>
                                                    </q-item-section>

                                                    <q-item-section side top>
                                                        <div class="text-orange">
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                        </div>
                                                    </q-item-section>
                                                </q-item>

                                                <q-separator spaced inset />

                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label>Akalsya S</q-item-label>
                                                        <q-item-label caption lines="2">Junior Fullstack Developer</q-item-label>
                                                    </q-item-section>

                                                    <q-item-section side top>
                                                        <div class="text-orange">
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                        </div>
                                                    </q-item-section>
                                                </q-item>

                                                <q-separator spaced inset />

                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label>Rudran Karupazhaniyappan T</q-item-label>
                                                        <q-item-label caption lines="2">Fullstack Engineer</q-item-label>
                                                    </q-item-section>

                                                    <q-item-section side top>
                                                        <div class="text-orange">
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                        </div>
                                                    </q-item-section>
                                                </q-item>

                                                <q-separator spaced inset />

                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label>Thyagu V</q-item-label>
                                                        <q-item-label caption lines="2">Senior Fullstack Developer</q-item-label>
                                                    </q-item-section>

                                                    <q-item-section side top>
                                                        <div class="text-orange">
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                        </div>
                                                    </q-item-section>
                                                </q-item>

                                                <q-separator spaced inset />

                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label>Dev G</q-item-label>
                                                        <q-item-label caption lines="2">Trainer</q-item-label>
                                                    </q-item-section>

                                                    <q-item-section side top>
                                                        <div class="text-orange">
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                            <q-icon name="star" />
                                                        </div>
                                                    </q-item-section>
                                                </q-item>
                                            </q-list>
                                        </div>

                                    </q-card-section>

                                    <q-separator />
                                </q-card>
                            </q-dialog>
                        </span>
                    </span>
                </div><br>
                <div class="col">
                    <div class="q-pa-lg">
                        <q-card class="my-card">
                            <q-video src="../src/assets/fullstack.MP4" />

                            <q-card-section>
                                <div class="text-h5 text-bold text-light-blue-10">Full Stack Development Course</div>
                                <div class="text-subtitle2">by Kalvi Institute of Excellence</div>
                            </q-card-section>

                            <q-card-section class="q-pt-none ">
                              <p class="text-justify"> 
                                Master Full Stack Web Development, starting with foundational Java and Data Structures & Algorithms (DSA), 
                                advance to frontend creation using React JS, backend development with Node.js, and database management with MongoDB.  
                            </p>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
                <!-- <div class="col">
                        <div class="q-pt-5">
                                <q-layout view="lHh lpr lFf" container style="height: 400px" class="shadow-2 rounded-borders">
                                  <q-header bordered class="bg-grey-3 text-primary">
                                    <q-toolbar>
                                      <q-toolbar-title class="text-center">
                                      Course Module
                                      </q-toolbar-title>
                                    </q-toolbar>
                                  </q-header>

                                  <q-footer bordered class="bg-grey-3 text-primary">
                                    <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey-8" v-model="tab">
                                      <q-tab name="images" label="View all courses" />

                                    </q-tabs>
                                  </q-footer>

                                  <q-page-container>
                                    <q-page class="q-pa-md">
                                      <p v-for="n in 15" :key="n">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
                                      </p>
                                    </q-page>
                                  </q-page-container>
                                </q-layout>
                           </div>
                    </div> -->
            </div>
        </div>
    </div>
    
    <div class="container-fluid q-pt-xl q-pb-xl bg-blue-9">
        <div class="container q-ml-xl q-mr-xl">
            <div class="text-center q-pb-md"><span class="text-h3 gt-sm text-bold text-light-blue-2"> Training <span class="text-white" >Assistance</span></span></div>
            <div class="text-center q-pb-md"><span class="text-h4 lt-md text-bold text-light-blue-2"> Training <span class="text-white">Assistance</span></span></div>

            <q-card class="row justify-evenly bg-light-blue-2 shadow-11">
                <div class="col-xs-12 col-sm-6 col-md-2 q-pt-md q-pb-lg">
                    
                    <div class="text-center">
                    <span class="text-h6">Duration</span><br>
                    <span>3 Months/6 Months</span>
                    </div>
                   
                </div>
                <div class="col-xs-12 col-sm-6 col-md-2 q-pt-md q-pb-md">

                    <div class="text-center">
                    <span class="text-h6">Format</span><br>
                    <span>Online+Live Classes<br>Free Recorded sessions</span>
                    </div>
              
                </div>
                <div class="col-xs-12 col-sm-6 col-md-2 q-pt-md q-pb-md">
                    
                    <div class="text-center">
                    <span class="text-h6">Sponsorship</span><br>
                    <span>Top 2 performers per batch<br>Receive Rs 50000 in fellowship*</span>
                    </div>
              
                </div>
                <div class="col-xs-12 col-sm-6 col-md-2 q-pt-md q-pb-md">
                    <div class="text-center">
                    <span class="text-h6">Timings</span><br>
                    <span>10.00 AM - 5.00 PM</span>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-2 q-pt-md q-pb-md">
                   
                    <div class="text-center">
                    <span class="text-h6">Blended</span><br>
                    <span>Delivery Mode</span>
                    </div>
                </div>    
            </q-card>

            <div class="q-pt-xl">
                <p class="text-h3 gt-sm text-light-blue-2 text-bold text-center">Become a Certified <span class="text-white">Full stack Professional</span></p>
                <p class="text-h4 lt-md text-light-blue-2 text-bold text-center">Become a Certified <span class="text-white">Full stack Professional</span></p>

                <p class="text-body1 text-justify text-white">கல்வி's training bootcamp is a highly-advanced & innovative programme. Get an exclusive hands-on experience with the latest design tools, & database management techniques extensively instructed by the industry experts under the guidance of Founders(Ex-Employees). 
                    In-time mentorship & 360-degree career guidance will be provided for you to get placement offers from Top Product Companies.</p>
            </div>

            
            <div>
   
            </div>
          
        </div>
    </div>

    <div class="container-fluid q-pt-xl q-pb-xl">
        <div class="container">
                <div class="text-center"><span class="text-h3 gt-sm text-bold">Why <span class="text-light-blue-10">Full Stack Development</span> Career is important?</span></div>
                <div class="text-center"><span class="text-h4 lt-md text-bold">Why <span class="text-light-blue-10">Full Stack Development</span> Career is important?</span></div>

                <div class="row">
                    <p class="text-h5 text-justify gt-sm q-pa-lg">
                        The world is digitized with websites, apps & other online services. 
                        A skilled Full-stack Developer has the ability to develop backend & frontend development. 
                        This transforms you into the best resource who handles both the development & design holistically.
                        With the ability to build robust, scalable, and efficient applications, you can market yourself as a highly sought-after professional in the competitive job market.
                    </p>
                    <p class="text-body-1 text-justify lt-md q-pa-lg">
                        The world is digitized with websites, apps & other online services. 
                        A skilled Full-stack Developer has the ability to develop backend & frontend development. 
                        This transforms you into the best resource who handles both the development & design holistically.
                        With the ability to build robust, scalable, and efficient applications, you can market yourself as a highly sought-after professional in the competitive job market.
                    </p>
                </div>
                <div class="text-center"><span class="text-h3 gt-sm text-bold">Why  <span class="text-light-blue-10">கல்வி</span>?</span></div>
                <div class="text-center"><span class="text-h4 lt-md text-bold">Why  <span class="text-light-blue-10">கல்வி</span>?</span></div>

                <div class="row">
                    <p class="text-h5 gt-sm text-justify q-pa-lg">
                        We strategically curated to train you for developing high-end features, dynamic database management & designing vibrant yet interactive user interfaces(UI). 
                        The syllabus has been devised by Industry experts & mapped to meet the requirements at its best in the Web Development industry.
                        And also In-time mentorship & 360-degree career guidance will be provided for you to get placement offers from top MNC Companies.
                    </p>
                    <p class="text-body-1 lt-md text-justify q-pa-lg">
                        We strategically curated to train you for developing high-end features, dynamic database management & designing vibrant yet interactive user interfaces(UI). 
                        The syllabus has been devised by Industry experts & mapped to meet the requirements at its best in the Web Development industry.
                        And also In-time mentorship & 360-degree career guidance will be provided for you to get placement offers from top MNC Companies.
                    </p>
            </div>
    </div>
    </div>
    <div class="container-fluid q-pt-xl q-pb-xl gt-sm bg-light-blue-1">
        <div class="container">
                        <div class="text-center text-h3 text-bold q-pb-xl"><span class="text-light-blue-10">Full Stack Developer</span> Course Curriculum</div>
                        
                        <div>
                            <q-splitter
                            v-model="splitterModel"
                            class="q-pa-lg"
                            style="height: 400px"
                            >

                            <template v-slot:before>
                            <div class="q-pa-md">
                            <div class="text-center text-h4 text-bold q-pb-xl"><span>Front-end Syllabus</span></div>
                            <ul>
                                <span class="text-bold text-h6">Chapter 1: Introduction to Front-End Development</span>
                                <li>Overview of web development: client-server model</li>
                                <li>Basics web protocols (HTTP, HTTPS)</li>
                                <li>CSS Fundamental</li>
                                
                            </ul>

                            <ul>
                                <span class="text-bold text-h6">Chapter 2: HTML and CSS</span>
                               <li>HTML Basics(Tags, attributes, Forms and input types)</li>
                               <li>CSS Fundamentals(Selectors, properties, Box model, Styling)</li>
                               <li>itertools, functools, operator module etc</li>
                               <li>Exceptional Handling and Regular Expression</li>
                            </ul>

                            <ul>
                                <span class="text-bold text-h6">Chapter 3: JavaScript & JavaScript Basics</span>
                               <li>Variables, data types, and operators</li>
                               <li>Control structures (if-else, loops)</li>
                               <li>Control structures (if-else, loops)</li>
                            </ul>

                            <ul>
                                <span class="text-bold text-h6">Chapter 4: Intermediate JavaScripts</span>
                               <li>Objects and arrays</li>
                               <li>DOM manipulation</li>
                               <li>Event handling</li>
                               <li>Scope, Closure, and the 'this' keyword</li>
                            </ul>

                            <ul>
                                <span class="text-bold text-h6">Chapter 5: Advanced JavaScript</span>
                               <li>ES6+ Features, Arrow Functions, async/await</li>
                               <li>Closures, Higher-Order Functions, and Asynchronous Programming</li>
                               <li>Creating subplots and multiple plots</li>
                            </ul>

                            <ul>
                                <span class="text-bold text-h6">Chapter 6: Front-End Frameworks and Libraries</span>
                               <li>React.js, JSX, Components</li>
                               <li>React Ecosystem,React Router for navigation</li>
                               <li>Advanced Visualizations: histograms, heatmaps and box</li>
                               <li>Angular/Vue.js, Asynchronous Programming</li>
                            </ul>
                            </div>
                            </template>

                            <template v-slot:after>
                                <div class="q-pa-md">
                                <div class="text-center q-pb-xl"><span class="text-h4 text-bold">Back-End Syllabus</span></div>
                                <ul>
                                    <span class="text-bold text-h6">Language - <span class="text-light-blue-10">Java</span></span>
                                    <p>Topics:</p>
                                    <li>Introduction</li>
                                    <li>Fundamentals of Java Programming</li>
                                    <li>Control Structures</li>
                                    <li>Input fundamentals and Datatypes in java</li>
                                    <li>Object Oriented Programming (OOPS Concepts)</li>
                                    <li>Command-Line Arguments</li>
                                    <li>Integrated Development Environment</li>
                                    <li>Inner class & Inheritance</li>
                                    <li>Abstract class & Inheritance</li>
                                    <li>Polymorphism</li>
                                    <li>Packages & Predefined packages, Other classes</li>
                                    <li>Garbage Collection</li>
                                    <li>Exception Handling</li>
                                    <li>Multi-threading</li>
                                    <li>Input & Output streams</li>
                                    <li>Serialization</li>
                                    <li>Collection Framework</li>

                                </ul>

                                <ul>
                                    <span class="text-bold text-h6">Language - <span class="text-light-blue-10">Python</span></span>
                                    <p>Topics:</p>
                                    <li>Introduction</li>
                                    <li>Beginning Python Basics</li>
                                    <li>Python Program Flow</li>
                                    <li>Functions & Modules</li>
                                    <li>Exceptions Handling</li>
                                    <li>File Handling</li>
                                    <li>Classes in Python</li>
                                    <li>Generators and iterators</li>
                                    <li>Data Structures</li>
                                    <li>Collections</li>
                                    <li>Writing GUIs in Python</li>
                                    <li>Python SQL Database Access</li>
                                    <li>Network Programming</li>
                                    <li>Date and time</li>
                                    <li>Regular Expression</li>
                                    <li>Threads Essential</li>
                                    <li>Accessing API Essential</li>
                                    <li>DJANGO Essential</li>
                                
                                </ul>

                                <ul>
                                    <span class="text-bold text-h6">Language - <span class="text-light-blue-10">Node.Js</span></span>
                                    <p>Topics:</p>
                                    <li>Introduction</li>
                                    <li>Installation</li>
                                    <li>Exploring Data Types and Functions</li>
                                    <li>Control structures: Logical Expressions</li>
                                    <li>Control structures: Loops</li>
                                    <li>File System</li>
                                    <li>User-Defined Functions</li>
                                    <li>Events</li>
                                    <li>Debugging</li>
                                  </ul>

                                <ul>
                                    <span class="text-bold text-h6">Language - <span class="text-light-blue-10">.PHP</span></span>
                                    <p>Topics:</p>
                                    
                                    <li>Introduction of Web & PHP</li>
                                    <li>Exploring Data types</li>
                                    <li>Control Structures: Logical Expressions</li>
                                    <li>Control Structures: Loops</li>
                                    <li>User-Defined Functions</li>
                                    <li>Building Web Pages with PHP</li>
                                    <li>Working with Forms and Form data</li>
                                    <li>Working with Cookies and Sessions </li>
                                    <li>Building a Content Management System (CMS)</li>
                                    <li>Application CURD</li>
                                    <li>Building the Public Area</li>
                                    <li>Regulating Page Access</li>
                                    <li>Advanced PHP Techniques</li>
                                    <li>Working with Files and Directories</li>
                                    <li>Sending Emails</li>
                                </ul>

                                <ul>
                                    <span class="text-bold text-h6">Language - <span class="text-light-blue-10">.NET</span></span>
                                    <p>Topics:</p>
                                    
                                    <li>.NET Framework</li>
                                    <li>C#</li>
                                    <li>Classes & Objects</li>
                                    <li>OOPS</li>
                                    <li>Namespace</li>
                                    <li>Arrays,Collections & Generics</li>
                                    <li>File I/O and streams</li>
                                    <li>Remoting & Reflection</li>
                                    <li>SQL Server</li>
                                    <li>ADO.NET(Working with Database)</li>
                                    <li>ASP.NET 4.0</li>
                                    <li>Page LifeCycle</li>
                                    <li>Web Form</li>
                                    <li>Validation controls</li>
                                    <li>State Managements</li>
                                    <li>User Controls</li>
                                    <li>Master pages & Themes</li>
                                    <li>Uploading Files</li>
                                    <li>Handling Emails</li>
                                    <li>ASP.NET Web services</li>
                                    <li>Deployment</li>
                                </ul>
                                <div class="text-center q-pb-xl"><span class="text-h4 text-bold">Database</span></div>
                                <ul>
                                    <span class="text-bold text-h6">Language - <span class="text-light-blue-10">MongoDB</span></span>
                                    <p>Topics:</p>
                                    
                                    <li>Introducation to MongoDB(No-sql)</li>
                                    <li>Collection in MongoDB</li>
                                    <li>Documents in MongoDB</li>
                                    <li>Difference b/w MySQL and NoSQL</li>
                                    <li>Inserting data into database</li>
                                    <li>Filter queries in MongoDB database</li>
                                    <li>Schema Validation in MongoDB database</li>
                                    <li>Indexing in collections</li>
                                    <li>Aggregation in MongoDB</li>
                                    <li>Embedded Document in MongoDB</li>
                                </ul>

                                <ul>
                                    <span class="text-bold text-h6">Language - <span class="text-light-blue-10">MySQL</span></span>
                                    <p>Topics:</p>
                                    <li>Theory,Terminology & Concepts</li>
                                    <li>Data definition using SQL</li>
                                    <li>Basic Data Manipulation using SQL</li>
                                    <li>Transactions</li>
                                    <li>Import/Export</li>
                                </ul>

                                <ul>
                                    <span class="text-bold text-h6">Language - <span class="text-light-blue-10">SQL Server</span></span>
                                    <p>Topics:</p>
                                    
                                    <li>DBMS Introduction</li>
                                    <li>SQL Introduction</li>
                                    <li>Walkthrough to the SSMS IDE</li>
                                    <li>SQL commands(DDL, DML, DCL, TCL)</li>
                                    <li>Constraints</li>
                                    <li>Data types in SQL and UDD</li>
                                    <li>Operators in SQL</li>
                                    <li>Variables in SQL</li>
                                    <li>SQL Joins</li>
                                    <li>Subquery</li>
                                    <li>Table Variables</li>
                                    <li>Backup and Restore</li>

                                </ul>


                             </div>
                            </template>
                            </q-splitter>
                        </div>

        </div>
    </div>

    <div class="container-fluid q-pt-xl q-pb-xl lt-md bg-light-blue-1">
            <div class="container">
                        <div class="row conf justify-center">
                            <div class="text-center text-h4 text-bold q-pb-xl"><span class="text-light-blue-10">Full Stack Developer</span> Course Curriculum</div>

                                            <div class="col-md-6 col-12">
                                                <q-scroll-area style="height: 500px; max-width: 500px;">
                                                    <div class="q-pa-md">
                                                    <div class="text-center text-h5 text-bold q-pb-xl text-light-blue-10"><span>Front-end Syllabus</span></div>
                                                    <ul>
                                                        <span class="text-bold text-h6">Chapter 1: Introduction to Front-End Development</span>
                                                        <li>Overview of web development: client-server model</li>
                                                        <li>Basics web protocols (HTTP, HTTPS)</li>
                                                        <li>CSS Fundamental</li>
                                                        
                                                    </ul>

                                                    <ul>
                                                        <span class="text-bold text-h6">Chapter 2: HTML and CSS</span>
                                                    <li>HTML Basics(Tags, attributes, Forms and input types)</li>
                                                    <li>CSS Fundamentals(Selectors, properties, Box model, Styling)</li>
                                                    <li>itertools, functools, operator module etc</li>
                                                    <li>Exceptional Handling and Regular Expression</li>
                                                    </ul>

                                                    <ul>
                                                        <span class="text-bold text-h6">Chapter 3: JavaScript & JavaScript Basics</span>
                                                    <li>Variables, data types, and operators</li>
                                                    <li>Control structures (if-else, loops)</li>
                                                    <li>Control structures (if-else, loops)</li>
                                                    </ul>

                                                    <ul>
                                                        <span class="text-bold text-h6">Chapter 4: Intermediate JavaScripts</span>
                                                    <li>Objects and arrays</li>
                                                    <li>DOM manipulation</li>
                                                    <li>Event handling</li>
                                                    <li>Scope, Closure, and the 'this' keyword</li>
                                                    </ul>

                                                    <ul>
                                                        <span class="text-bold text-h6">Chapter 5: Advanced JavaScript</span>
                                                    <li>ES6+ Features, Arrow Functions, async/await</li>
                                                    <li>Closures, Higher-Order Functions, and Asynchronous Programming</li>
                                                    <li>Creating subplots and multiple plots</li>
                                                    </ul>

                                                    <ul>
                                                        <span class="text-bold text-h6">Chapter 6: Front-End Frameworks and Libraries</span>
                                                    <li>React.js, JSX, Components</li>
                                                    <li>React Ecosystem,React Router for navigation</li>
                                                    <li>Advanced Visualizations: histograms, heatmaps and box</li>
                                                    <li>Angular/Vue.js, Asynchronous Programming</li>
                                                    </ul>
                                                    </div>
                                                </q-scroll-area>
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <q-scroll-area style="height: 500px; max-width: 500px;">
                                                    <div class="q-pa-md">
                                                        <div class="text-center q-pb-xl"><span class="text-h5 text-light-blue-10 text-bold">Back-End Syllabus</span></div>
                                                        <ul>
                                                            <span class="text-bold text-h6">Language - <span class="text-light-blue-10">Java</span></span>
                                                            <p>Topics:</p>
                                                            <li>Introduction</li>
                                                            <li>Fundamentals of Java Programming</li>
                                                            <li>Control Structures</li>
                                                            <li>Input fundamentals and Datatypes in java</li>
                                                            <li>Object Oriented Programming (OOPS Concepts)</li>
                                                            <li>Command-Line Arguments</li>
                                                            <li>Integrated Development Environment</li>
                                                            <li>Inner class & Inheritance</li>
                                                            <li>Abstract class & Inheritance</li>
                                                            <li>Polymorphism</li>
                                                            <li>Packages & Predefined packages, Other classes</li>
                                                            <li>Garbage Collection</li>
                                                            <li>Exception Handling</li>
                                                            <li>Multi-threading</li>
                                                            <li>Input & Output streams</li>
                                                            <li>Serialization</li>
                                                            <li>Collection Framework</li>

                                                        </ul>

                                                        <ul>
                                                            <span class="text-bold text-h6">Language - <span class="text-light-blue-10">Python</span></span>
                                                            <p>Topics:</p>
                                                            <li>Introduction</li>
                                                            <li>Beginning Python Basics</li>
                                                            <li>Python Program Flow</li>
                                                            <li>Functions & Modules</li>
                                                            <li>Exceptions Handling</li>
                                                            <li>File Handling</li>
                                                            <li>Classes in Python</li>
                                                            <li>Generators and iterators</li>
                                                            <li>Data Structures</li>
                                                            <li>Collections</li>
                                                            <li>Writing GUIs in Python</li>
                                                            <li>Python SQL Database Access</li>
                                                            <li>Network Programming</li>
                                                            <li>Date and time</li>
                                                            <li>Regular Expression</li>
                                                            <li>Threads Essential</li>
                                                            <li>Accessing API Essential</li>
                                                            <li>DJANGO Essential</li>
                                                        
                                                        </ul>

                                                        <ul>
                                                            <span class="text-bold text-h6">Language - <span class="text-light-blue-10">Node.Js</span></span>
                                                            <p>Topics:</p>
                                                            <li>Introduction</li>
                                                            <li>Installation</li>
                                                            <li>Exploring Data Types and Functions</li>
                                                            <li>Control structures: Logical Expressions</li>
                                                            <li>Control structures: Loops</li>
                                                            <li>File System</li>
                                                            <li>User-Defined Functions</li>
                                                            <li>Events</li>
                                                            <li>Debugging</li>
                                                        </ul>

                                                        <ul>
                                                            <span class="text-bold text-h6">Language - <span class="text-light-blue-10">.PHP</span></span>
                                                            <p>Topics:</p>
                                                            
                                                            <li>Introduction of Web & PHP</li>
                                                            <li>Exploring Data types</li>
                                                            <li>Control Structures: Logical Expressions</li>
                                                            <li>Control Structures: Loops</li>
                                                            <li>User-Defined Functions</li>
                                                            <li>Building Web Pages with PHP</li>
                                                            <li>Working with Forms and Form data</li>
                                                            <li>Working with Cookies and Sessions </li>
                                                            <li>Building a Content Management System (CMS)</li>
                                                            <li>Application CURD</li>
                                                            <li>Building the Public Area</li>
                                                            <li>Regulating Page Access</li>
                                                            <li>Advanced PHP Techniques</li>
                                                            <li>Working with Files and Directories</li>
                                                            <li>Sending Emails</li>
                                                        </ul>

                                                        <ul>
                                                            <span class="text-bold text-h6">Language - <span class="text-light-blue-10">.NET</span></span>
                                                            <p>Topics:</p>
                                                            
                                                            <li>.NET Framework</li>
                                                            <li>C#</li>
                                                            <li>Classes & Objects</li>
                                                            <li>OOPS</li>
                                                            <li>Namespace</li>
                                                            <li>Arrays,Collections & Generics</li>
                                                            <li>File I/O and streams</li>
                                                            <li>Remoting & Reflection</li>
                                                            <li>SQL Server</li>
                                                            <li>ADO.NET(Working with Database)</li>
                                                            <li>ASP.NET 4.0</li>
                                                            <li>Page LifeCycle</li>
                                                            <li>Web Form</li>
                                                            <li>Validation controls</li>
                                                            <li>State Managements</li>
                                                            <li>User Controls</li>
                                                            <li>Master pages & Themes</li>
                                                            <li>Uploading Files</li>
                                                            <li>Handling Emails</li>
                                                            <li>ASP.NET Web services</li>
                                                            <li>Deployment</li>
                                                        </ul>
                                                        <div class="text-center q-pb-xl"><span class="text-h4 text-bold">Database</span></div>
                                                        <ul>
                                                            <span class="text-bold text-h6">Language - <span class="text-light-blue-10">MongoDB</span></span>
                                                            <p>Topics:</p>
                                                            
                                                            <li>Introducation to MongoDB(No-sql)</li>
                                                            <li>Collection in MongoDB</li>
                                                            <li>Documents in MongoDB</li>
                                                            <li>Difference b/w MySQL and NoSQL</li>
                                                            <li>Inserting data into database</li>
                                                            <li>Filter queries in MongoDB database</li>
                                                            <li>Schema Validation in MongoDB database</li>
                                                            <li>Indexing in collections</li>
                                                            <li>Aggregation in MongoDB</li>
                                                            <li>Embedded Document in MongoDB</li>
                                                        </ul>

                                                        <ul>
                                                            <span class="text-bold text-h6">Language - <span class="text-light-blue-10">MySQL</span></span>
                                                            <p>Topics:</p>
                                                            <li>Theory,Terminology & Concepts</li>
                                                            <li>Data definition using SQL</li>
                                                            <li>Basic Data Manipulation using SQL</li>
                                                            <li>Transactions</li>
                                                            <li>Import/Export</li>
                                                        </ul>

                                                        <ul>
                                                            <span class="text-bold text-h6">Language - <span class="text-light-blue-10">SQL Server</span></span>
                                                            <p>Topics:</p>
                                                            
                                                            <li>DBMS Introduction</li>
                                                            <li>SQL Introduction</li>
                                                            <li>Walkthrough to the SSMS IDE</li>
                                                            <li>SQL commands(DDL, DML, DCL, TCL)</li>
                                                            <li>Constraints</li>
                                                            <li>Data types in SQL and UDD</li>
                                                            <li>Operators in SQL</li>
                                                            <li>Variables in SQL</li>
                                                            <li>SQL Joins</li>
                                                            <li>Subquery</li>
                                                            <li>Table Variables</li>
                                                            <li>Backup and Restore</li>

                                                        </ul>


                                                    </div>
                                                </q-scroll-area>
                                            </div>
                                        </div>
        </div>
    </div>
    
      <div class="container-fluid q-pt-xl q-pb-xl">
        <div class="container">
            
                <div class="q-px-lg q-py-md">
                    <q-timeline :layout="layout" color="secondary">
                    <q-timeline-entry heading>
                        <p class="text-h3 gt-sm text-bold">What roles does a <span class="text-light-blue-10">Full Stack Developer</span> play?</p>
                        <p class="text-h4 lt-md text-center text-bold">What roles does a <span class="text-light-blue-10">Full Stack Developer</span> play?</p>

                    </q-timeline-entry>

                    <q-timeline-entry
                        title="Full Stack Engineer"
                        side="left"
                    >
                        <div class="text-justify">
                            Full Stack Data Engineer is a multidisciplinary expert who commands the entire data stack. 
                            From database management, ETL processes, data modeling, and infrastructure to developing APIs, front-end applications, and automated data pipelines — they do it all.
                            And builds prototypes of solutions using a varied range of web tools and technologies.
                        </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                        title="Back End Developer"
                        side="right"
                        icon="delete"
                    >
                        <div class="text-justify">                            
                            Backend developer responsibilities include creating, maintaining, testing, and debugging the entire back end of an application or system. 
                            This includes the core application logic, databases, data and application integration, API, and other processes taking place behind the scenes.
                            Codes of the developers are provided with the best services and quality.                        </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                        title="Web Developer"
                        side="left"
                    >
                        <div class="text-justify">
                            Web developer is responsible for planning and developing software solutions and web applications, supporting and maintaining a company's websites and digital products.
                            And collaborate with website and graphic designers, monitor website traffic, troubleshoot website problems when they arise, and update websites as necessary.
                        </div>
                    </q-timeline-entry>

                    <q-timeline-entry heading> - </q-timeline-entry>

                    <q-timeline-entry
                        title="Full Stack Developer"
                        side="left"
                    >
                        <div class="text-justify">
                            Full-stack developer, you will work as part of a team to implement new features, as well as make modifications and fix bugs in existing code. 
                            Your duties will include designing and developing layouts, writing code to power the underlying functionality of the website, and developing tests for the code you write.                        </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                        title="Software Engineer"
                        side="right"
                    >
                        <div class="text-justify">
                            Software engineers design software solutions, while software developers build those solutions to make them ready for consumers. 
                            Depending on the type of company they work for, software engineers will create original code for software and applications. 
                            They also build reusable code for future use.</div>                    
                        </q-timeline-entry>

                    <q-timeline-entry
                        title="Front-End Developer"
                        side="left"
                    >
                        <div class="text-justify">
                            Front end developer has one general responsibility: to ensure that website visitors can easily interact with the page. 
                            They do this through the combination of design, technology and programming to code a website's appearance, as well as taking care of debugging.                   
                        </div>
                    </q-timeline-entry>
                    </q-timeline>
                </div>

        </div>
    </div>  

    <div class="container-fluid q-pt-xl q-pb-xl">
        <div class="container bg-light-blue-1 shadow-5">
            <div class="row q-pa-xl">
                <div class="col-md-6 q-pt-xl content-center col-9">
                    <img class="shadow-24 gt-sm" style="width:500px" src="https://media.giphy.com/media/zIaUzG76EDzSo/giphy.gif">
                    <img class="shadow-24 lt-md" style="width:250px" src="https://media.giphy.com/media/zIaUzG76EDzSo/giphy.gif">
                </div>
                <div class="col-md-6 col-12">
                    
                    <span>The Platform</span>
                    <p class="text-h3 text-bold">Write your <span class="text-light-blue-10">Code</span></p>
                    <p class="text-justify">
                        Coding is a creative and problem-solving process, requiring attention to detail and logical thinking. It involves not only writing code but also debugging and testing to ensure the program works correctly. 
                        Programmers use various tools and techniques to write efficient and maintainable code, making it easier to understand and modify in the future.
                        <br><br>Hands-on learning for UI (User Interface) development involves practical exercises and projects to help you build and strengthen your skills.
                        Remember, hands-on learning is most effective when combined with theoretical understanding. Utilize online tutorials, documentation, and forums to seek help and deepen your knowledge as you work on these practical projects.
                        <br><br>
                        Don't just watch, copy/paste or read about someone else coding — write your own code in these interactive platform. 
                        The கல்வி 𝕴𝖓𝖘𝖙𝖎𝖙𝖚𝖙𝖊 𝖔𝖋 𝕰𝖝𝖈𝖊𝖑𝖑𝖊𝖓𝖈𝖊 always helps you to reach at any time any cost to improve and develop your knowledge and skills from scratch.
                        
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid q-pt-xl q-pb-xl">
        <div class="container">
            <div class="row justify-center ">
                <div class="text-h3 gt-sm text-bold">Tools and <span class="text-light-blue-10">Technologies</span></div>
                <div class="text-h4 lt-md text-center text-bold">Tools and <span class="text-light-blue-10">Technologies</span></div>

            </div>
            <div class="row q-pt-xl q-pb-xl justify-around">
                <img style="width:80px; height: 80px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAsVBMVEX////kTSbhNQD7497kSyLjRxzlWz3jQAj1x8Dqg3LiPQD/+vjiPxH0wrnjSiHiRRjpemX+9PH/+/nnaU/wq5/qZUbri3v87uv3rp/tblL7wrf0kn77uKvqSRn/6eT93dfxd1zziHP/zsXtWDL6n4z1opL1g2rtUCT908vzel/7s6XuY0H93tfvaUv81s7zu7P5k37lVDPtlITodF3gJgDytKvskYDvopXpeWPlWz7riHfE1GTcAAAM9UlEQVR4nO1da1vivBa1pZliiK3loqJcRkXBQQXF0Zn5/z/stBQo3ZC2WWlpzyvrw8gIT+wiyc7alyQnJ0ccccQRRxxxxBFHHBGg6Q3vZlej+e35ohtgcX47H13N7oZes+xH04b3fP3w2BlzbgvhMsacEP4rVwib83Hn8eH62Sv7MUHUejedPrdd5hhyOMy1eb9z06uV/biKGPQex1wkcovzFHz82BuU/dhZMRkF7KyM7NawApajSdkPn47JvM9dVXYbli7vzytNcjiyOAPZrcG4NRqWTWQ/Gr0p3nukJ6e9Rtl0djC46YushiUdjujfVMvuDJ/MXLovguWaT9UZrJMuz6/7IjDerYbVeS2GXwCHd1/LpndSeyqMX8jxqVy14821V4c0MD4vUbf+4m7B/AK4/FdJ/IZT+wD8AtjTMsxqc1ToBIzD4aODu5Kv9+Jg/AKI+wNb1UN2YAi/Gw/IbzA9bAeGENODCbnrg3dgCIdfH4bgnJfCLwCfH4Cf91LGCF1DvBS+/A/HRYuYZLBxwUtjWVMwQsGT8cosmV8A86o4gqPybMw2ilsZbw+lQ9Ng3xZD8LFMIxqHeCyC4M/qEPQp/vyPEyyCYoWGaIi8B+pt1Qj6FHM1N6OqWNFt2DkuGlfVWAcpeG5L/3UVlMw+mDkJuOdq9mAA/pwHQW9cttiWwxnn4Uy9lOsuJYO96BO8UVgnLFf4WH4jTvBKWKufEQxj+RkRhpJX764/BgwWcaNL8FplErqXzUbj5Mynwf6dNPyXLfEe/NyCadeX77wHFK03//ONZsNh58tf/gOGi667OFCyMmI5K87sJcMALfFAGjR5PXwR5BvNMAbaZD7DABfIhOB6Ebip0sBRYVg3jRWvk4YWQ2eqQ3CkJtZUGJ4smOnlwdAQGtrmVXElDBnOTCH4aSrDy4/2SS4MDQ4H/Jv3isYtZDj8arfbZyFD9/xsNpuF4bFZAHvD8OT3+oUuQ+ceTdsojtE1wy20HGbbthl2lum/FEbEcANdhvA4HSqrtT0Mg1+7IcNwCSyCocGxIKqaHVVjeLn6wGU+DDF7+kvdJ8zOcBj+qvaVD0PDBhLhHuBRZGdY+1h+1GjHGJ6afAmg+IirS/AboAhhtR4ab29vFykMzYX/b9uMM/Qul/B+qFN0lfVpDXEKVwy5ZbmnKQw5PzsZmCLOcA2AocFV626ekCmxq2nkDC23uWA5MmRPagRV1Yw6Q8N5c40cGaoqmy7k14tGBoaTFUPDpyFCXZMLQ9ZVITjBQjNsduYjcP2cRd1/Ve8sH5VdBP85C7808RW8bodyafWO5bSWP1eov0GVnEqdiHWh//i+MLOXfeUEr+zVk7Llf1afce2leou/E358DaxU1VHoRHW9VgkoaDfIkJaP7OZ0UNUIcBrMrAENRM5UAlmFTaOfb1H64WD1s21i6Kln0sxioPwcopeJobpf6A5qRWCgPFuy+YnAUmFm+ubUod6JmRaMkbqdMS/TmwVwqc7Qfc/QrqFuZ8xias2G6gwtI71ZRJLyYva2FPQoc0DP2GeFMDwDqgdYegVqX73VtXuUN9qI8uintQr5TZnmtzreEYapwxSwpBt/N28g6UTDTYt/jyH3elEIwwXC0BonN6qWEd20msFGAwDWLSM1Ywpo0gDFiBrMiUvRpo+Y71slhiy5pA+ahgXJNkC0BUieiFCkO2CYS20SwTMYakiMfoPTUCPPnAAsKp0yEW/QJGwRsm0Gft0sKZbRAeOkhcg2SLT5cDryNj1ElC4ZkpIL9gPAG9F+D2hArC/PJcJ1lu5FvCHbsdRB1e0FyjChJvMaLXamsq2FjHY61CHRFsCWl7rB48J6izd0ijwc9TKx/IyxO2e2ACoan6ETb+gzD7/HQRkmqBrUlPrLRbwq6QtiGF9Um/AGCLkxbY7RNg0el23QUkayDpd4AmwsqwJDCkxWIEqpjrRkxkPyqII0EkpPNIrySSQWElzEQdFIYkqXizt8Zwyxg0h+zmLxp0EibeunuZMwnOFtCrKWRQwtOyM4WXHa+FYreyZheIW36X7Fm9oaYfWsIIsFZI9DCNl2ISjOtmJIZFu0Wgv0XDJYtCXE25Bw9wpUtkWKC3b/YdGWEPi+xduki2wk28DiVh35YTDZ1sRznCEVpp+bpuCcBixLDYOUWEVY4N+a5cSnW+S9it+Sv5aChvLpmREcWYT6p8YmNSLbosUMzWloiDZ5dRRa6xWAGJRItklHTAp0inoKYUgMSiS5nBbGUKfyrBCGxKBE0Vxqg7JCQ7QVw5AYlEbUAxxj+Ftjf7yUoYYtpUGWZpQ3YqfZQHaaoLHEJUOZLdVYDw33M97W1nrNMsEkahnfe5Fg3TQ0jcH+kPGg2hbdLfRH52FkmkZDl+6YTOXxQPMpUEByBaku1fAtDOtvvC3lKgOq0KFq9hWkvoWGf+h76HHZpmwK7XhspaFT4yr1DzV8/J04kmpbVNg2dOqUpT6+RpwmQbZlAxUGYAI4hDROo3UABqneqyk+IXUwtbYLSGNtGvHSHWuv6hrQIAEUcd08iyxeqhHz3hn7npklvhaZI1pWpWUTpDFvncDBTm4sU3gtsrg0WKcl2uRJYDj35IN9SpuVI6qRpQHXT51Hkeee4Pxh0OwpwDCqhKTBDigDuUJC/hDOARtg9V4022wiSzViiUk5YJ3lwvoBMIzi2lSWakTakvL4cC1GAEHaGmwgL42I1CutKNQxpQm1GFrGlCTHvj7WO18+5MU2kRNIYnVg1d4SSfU0cE3UkqEsDZwQT4xmGxkBOqItsSYKrWtbMpQlSRNqpDezjZY6AFstNkisa9PILNNSilqWeOLmM1R4gxuRwwdJ3JkP1pcGoPHE6Old6Z/b9BRdazRiiSmF3hqqhsq2aMBLK4i9DUOXjGQN0ZZSI6wxEalBsTbDwZRZ78jFojIE2moRIqXOG6vVX4KRNPDfzcpjyiZG5ARS4Q1ttQiRdroZPhHpVIqibex0ss+dadQj8UllKS7a0vZbaMTbqDncGmiMm4t2vCNr7YW5dQsPlaXYVosAqXtmNMw0SVDEaymYMN8+6+GE9OoXb6aI9RLNhePLYfr2PFyaEpO5U9tmudxutYftls138rt0quIMU/euaQS+iWzbW/nFBN97wiUxt7hoy7D/EB+mZNOF0nYJ0v+qkboIWbazwpOc1Icq9QOZw+hWi2x7zODFltaVKDCkdvgMFR6Z6iLgWCyVbR92xiltuSZx6WDRlq0+Sf1MhRBUeXln/2zTTWPpLyPuZ50Uv6EhsYxn76HalKaBA9TafwR3ZV+Z43Jx/nuPykKr9jKei4GebSKLtr1+dezdO1iD1bHzJRlUoGjLerYJej5NQrTNq7//MO1onfeH5o+1wtkHMNKW+eA9sByJRiIILmenbjAtHde09w7NLYBbLTKfMYSeEyVSG35utz5asqEZAdxqoXDsHrhg0IggDLBqT6WUFauOUj6cUQYsIKZyXhuomuByYApsDKlt1e3msfkMBhRpUzs3EetEtBx4B9BWC9Xd1og5peEkGMhWC9XzS6HJvk+2QUBEm7qZA4RNbkecAKJN/RxhpPQkMa2lAiDJB5wFjZznzf6kqLEsqP0GuhA5zxvyE31Fzd6ps6eARv1CpLuUuwDvuMDWXd8rMltt5CSQ4Vdr2/9QAao1lO9GWMPvSuN0pqJSL2fnjin1lNMA3+GhfL/FFixm879fmRbhxuT9Bwc7bwn8fgs8qLf6y74bn2Z7au3FngCAGnTOjoHH6QaB7dkJNK3g1S8yhKpSoXPPDB5328Z+26NhV+LQuytIJ2MaA3O3bY9vVxhuVwg073tSu7MrESvb403eg9RabkcV61/xrHLvWir8Act17Uoc+veufYO7877B/Yf//Tssv8E9pN/gLtlvcB/wN7jT+Rvcy/0N7lavGMUiCFZqoOY/REPcVsWi2jkbmQijaqyLPNdlIo6rKqgbM8eFfhfXvGwZ7ug7hMkYjst1pti4mLs0tuC9lGlSxUsu7lIK5uXZG55ePZoLypqMhU/BCINpGSNVTPUTW9kxOng3OkWugvvwen/YbhT3RRz7nojmIbvR70A4+aKB4fRQOtWeFr4ISvCLH+IeQZdDKex84M150RKH8fkhFnk5ak+FTkeHP+VVDojjtVsYR4d3D25B92LSLWSsMt4t5j43BMMnM9eM0nIPxlNZBnQ/Bjf9vVu2MDiif3NIiZYNjd40n9Sg5fJpD686KhTDkaE9Ixk3RtUangSTeR/vSb/3+vPqWBcpJqMxV0/UW0zw8ej/gF6IQe8xYJnV9DgBu8de9WxLMmq9m06f224iT4e5Nu93bnrlKxcM3vP1w2NnzLkthMsYc0L4r1whbM7HnceH6+dydWceaHrDu9nVaH57vugGWJzfzkdXs7uhV4bTd8QRRxxxxBFHHHFEFfE/1NYoKc6xQP8AAAAASUVORK5CYII=">
                <img style="width:80px; height: 80px;" src="data:image/png;base64,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">
                <img style="width:80px; height: 80px;" src="data:image/png;base64,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">
                <img style="width:80px; height: 80px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB2QsCwyRK-nYUXjnOMKCCjHF-oJeml6kUyw&usqp=CAU">
                <img style="width:80px; height: 80px;" src="data:image/png;base64,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">
                <img style="width:80px; height: 80px;" src="data:image/png;base64,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">
                <img style="width:80px; height: 80px;" src="data:image/png;base64,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">
                <img style="width:80px; height: 80px;" src="data:image/png;base64,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">
                <img style="width:80px; height: 80px;" src="https://logowik.com/content/uploads/images/731_java.jpg">
                <img style="width:80px; height: 80px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABCFBMVEX////v7+/u7u4BYYr39/f8/Pzy8vL19fX+/v7w8PD5+fnkjAPkigAAW4YAVYIAXogAUH/jhgAATn7jgwCetcYAV4Pppj4ARnkAZo5liaXvu4f479xwnbblkxQASnvz9/nqwZvn8PTqzrTqqGHX5+356tTmnUDooDP79+4AQ3e5z9ryy6VmiaXL3OSPscPo8fVKgaDnnkKxx9MycZX22sK0w87mmSU/d5mCpLlikazU3eOcvMu0zNjtwIfhfADvz6Tu3c+pucdafZsyZ43M1NpXjapFc5U0eZt9nbKPqLqCq8BFiafsxJTss2/rrljz17TttmiFmK4AOXHsunfwxYjv597jki7po1RDcigpAAAamUlEQVR4nN1dCXfauNqWjeUt8QLBQ9IQq06dmUCvgUIatqRtStJJ+rXN3OlN+///yWdttgFDAJulVc/pOSjiQY8l61306hUAvCgCK3JUpbEaUeI1qsirIK/So6qdhBJAfli/B0MgzMb61Rkif3B7Oxj4SJJkQfztGKqo8bGEi13o9uo+hL8ZQ1kZlkpWgRXTtVtDP563vwFDTWnYET9SHNuqDn4fhiL4bBemiuP+J/jlGIqsJLDwR8V3rWmG4Wx1WgOVYPHyLBQuiW7xkujWOqAUXvSojFfBe4cwsl23ZCYpWqZZ9YEizfjejCppTtVaoGIBp3P6MBpzPETAL2E6RqERBMPPXdNMDqhd6TXV6OGKz0HhIrEqUYu+J/MqZR1QzzMc4rfQOPQkKXwwyGt0bCM5V0f11bolJLrF+7Aiw/lQzzO8w1PTLpNa/LRgvVVJzFbDrqJfnGEHD5nlazGW6leNBEe76/3SDNUOJjhqjmP5fddJUGz+ygxBB1MxkmNISrPvRONo/NvGyzRd8rRfjmEVEzHf0toYS1KCVrSuWk7rqF9tDK+u2sEASeoMqB1leOsSYQEmGMqhDG53Im3HcizTtrFublv9dqAv1a2M0mI+FJB50SErelSFP6keGahKoEdVpCj4g1i1p/Udy7Gd0V17EC6x41CkSNNVCq+RoqrnerUEVEw1RT8SiNZ2hKepc8Qe7oR+VC6laXQFw7TNbi/Qx6HGVK0pqEW1tlWhZuq4UuCSQXyLa6Z13MBxUjmGY2nXOmUvCSXspm2hgb8dIjC8dKygaxuGZaVq50Zp1FB2nqGg18l6Yh6lYwFU7nY7IRm8yoTrjDXB0Siru85QVHuEYqmRjqXpmoCQf3V1NWxUq0cfLdNJsrTsTrDjDAW5SQbGsutzsEILhlX49Z7hmmPjeI/4F3eToaD4RLZb/3pgoW4BpX4/KiVMENseIiq9dpShoJYrZDC6TXk2VqJbmqR77aSZZdl3gaptm+EcyaODPpl29h0UFpA8BErX6q3EZDWdB1XeijzUeNFVVqDAagReo0oKLBCxZw8BrQEy/57CGwFhHCp8toM7w4iHseuHX5Z4IxmoC0PN6NUiUOrzeikukigFhKFV4iI8mq7zlEkAg78rsafVbsxVl/PQS6ehFmUowjrRz5yOPo71jEEggXpizSl1/OgHd8e2YFgapFLR7i3ZLcUrx4qdOWrrTP/fOYaChrpkLGqDZbsF/X40Va1KFemThtiOMBT1QYFIxQ5asluirA9HkSXpdAJJ3kmGYYt2jbxMvRlYmjYTCjZ7NT6MhjPEMm0HGYZyuE9eqFIwjaU2fT/w9ZlQAFyNIuFYqiJ5cwwjyZjA4iW5lhKp643wQDh9jMUbUazyKFxGCgHUZkN5d9FMLd15ctL1MAa1bK9EcS4UkJYpakDmaaWuTvxB97CKZtQekD7zyzocRouqbTWX++XVS0x1oV0eUMV9NFvKpH6k1A08vG5/DpQmBSNO0SzUo1FZ895TjMWn8NxIBY8QMXxhUscFDaKc14J5UJLXr3CxURpChr4DtkUCSy0T9+k9mMQS1QaewWZ/HlT4egyj/fLKZ7iLDGUPi33DjPfUOJamk5XWHsw3xGCd+zksuwrl3WMoKkeYh3s1xVDQfEy+NJ9hCOVbXGxUqmAHGUpDrIEb/bRuYSPS9J+F8lpcbJRauiLuGkPFJ2vFoTeFJQK/Zlkf0fNQzRb3I5t9qGzQxl8IS4QWnozUQTzZrb7jNhaCuuejaLeQPJfhYr2axzCyhZU5FrMUtQq/QTej7ngrnTcKn1bgHkKwABRgphgdxagPCagle8W/B6egtLn6UfTYIv0IjzkxhS3Lk6dULUGv+tJCUDKocoq1aoS+mNaW3ita0rQ2PpiL67jNDl7uzTZ7RZIMNUFeEEpTo1G0q7owDbVsrxhDYQpqBYagT6Iz7vVM3ZLVHl9uSg3WbmcYks0oy9GyPvgGH8XKkDbcGYaQTNPSQMr64HsuX27qcKcYggc78fpk6JZ6ZHMFzpN2imGA5YXV8bSsDx5xo9jsevIuMaRRRGZdzsoQeCPmS7X7od23eS8GiLHGJU/bpiZUdiHmFZilYffAmuThdGSDMh0RMREkofgkisgEzwVJPA+l1kvcIq7PDd14HmpG6EZMlWuA4gIaIDWhKiRKeI4yuQCUCIcsQNcoeDATlJCTbUEqpDoJI/rvLIZLQAlq3+RKONSyQeXIUFPpVn0zB4YC6jD3VOWBD+L2GVJjt1Bp5MFQ8bhfw25H+NtmKMgBXeVRHmYrqLNBNEaevCsMBeWOOE7L+Rjmn5n6Zhyx9WcHGErUSuygXBiiFhP8LnWirteLMeZdnoPVtYhVsKi0mAcVCv5agYuMrFBTDBc69ZBSpQZEpRx56nIHKNLPVIAGExlOF2SEmqxafZdHaTnUXxOVlaHCT6jLKFbqWaEmtTY+mEvruBIJ6LMqQcxwVSgBh13ZfD1FGaFIyYOhqFfjqMzMDEXILX67uisMBZkuD6Uj3ixTtzS5ww2pYFcYho+dhoIdoRwYCnrA52lH3RGGgtCky0Opj3JgKCjcEe4Od4ahwh57qZoHQ9ljgf/GoZelV3kyjJYHt50DQxGWmcQolaOA2215MQCXPLBHA09bKDMUForMjjIsJGeESjCMyoqRnG2iNLu3Wg5BoQyMvIkZoVaOVEjRAA/xy2PX5RzUZYiYxKBzIgtUnnkxymT3/jYPhrreLsUycWcYHpLQBV/Lg6GgdumbSEI6doThVYXYic18jDrq4sLbk2hXGEJy7svshX/IxWxFn6hMxN6D3WBIz+65V1JOhrnOJKzRhTvCkJy/tEwc+pMLQyWga41V8fNnOC15FoiRI6f1HbqDkRGKCjHABIZZzQzF5GG2/Az0tL5ZB7mleojObI68rFC0LKeXTuRnEAUJ744Zn1awLWamevBGTDl9CAE3kjUiiTWp41LHMD4osjTD2eryEdW/LVPfvm0hyDd4Spn55lTwWQgqXqC3zpBkdrFaaq4M1RbVa6yPaPsMEd6Csplwzs0wv+I+qUDaNkOFOBQdriXn5nrgAuMObJuhjqWhMeLfzI3hkA6i5QTyVv2lbLPbbPGqlRlOLvGow5TTe2kDWSPm5WcganIoK/JO9QCGPHxhsImsEXP8BT4Wznabu1CyQJHCVS0NsawpOKYvG1RGLwaJjbIH/EBXFijWLV7Dt6J45p9t2RZvS0R/zJ2hINADVuE6PeTv33YY9kxm3ufNUAQsvtYoQDkbVDaG+AgJ1jzWwBAx/7fb1rfJEKtXZh+ug2E0iC0kbpHh3wa2fvkX82XoG3wQ6Zu4HYb4kNa6GNJDD2SvTcuL4fKSB5/QNu/1KcmjiFp2ITbgzuG2ng1qsawRaec6BICjCp1eVBWneoAeyJTqAUPpfebh75AjJ2vPGsGqxnRciGep2YufZPS9WzNYDoo2GosRlgIWY+MGmaCy7HIDYuBPM5SbpvuwAsPxgGoR/k0tYYe4Treyj09m6TRDDR05FnXoZsq5p9xwS7i+JYaCxKK9JxhCHIfnepkZCk2+11bYGkO8dWhMMpSGZuR/y8ZQ50YUjkraCkMVb6xZd3wzk3ZL8YjlQ32o2RjKHjOi8Ibpdt5DrLVZ3XGG+h3bAcz08tBG+n0c7LaZrBETMXJU8+40k1ByPYr7WQaKlsnzFvKABQ873U1ljZjIx9Ajj9hPJooAPBa2UPNh1oQPklrlQZn+7GwUz/UyKivs8hAL2L3iGhJu4PGcCQX7Xsme6sFnDI2WmhUqgxeDm+EEa8gP3IWlmT3rvHrED2MEK0Jlsy2IJ8rsJ44QqP+JUybaVTUzQ+Az1S0RqbtJhsSb6LT0uFteIiekNULKwlCzGNINSvy83q4GlXGXG3uE8anuqFu3iUmK529mhhJfTg0DrQSVkWGD6N71mCH3ApIF1SqgxaFmMFQgv3vCbg22wHBANNMHPeoWm1Nm44hsnbazM5Sb/ISi6RzVszGMjJ/Fu6Xj3TWrI0XdYkdC7VsSeerE+s7KDEXYjpIxO67Z8OK9iTVljRjLzwDuaUoaiWWNQBYX0LDFTg2tlOphLGsEbMUZNC17VPWgvOasEbQQ/Ugm2r9NA0OAKAdsWbA8QAbRMqG2IFSa1sZ6haLsUoSj2Q+Wgcq4j098flaHbuSLCtu9dXA2D/omNvQFoXCZddLZt8buDTHMVh0tDJWNoQjJ0uLWJxhiu5+6WdiuRsa8+l6vNpb83XE7w8SZsjUyZJmwjUPaLemBhX2TEF/yJtpVApf55gDU6LpmIjOx4Zo3SF8EKiNDoUmOsNFBFCFzAFLvWJ0uEL6cB8OQ422v4zhGgmPnSpfXz1AhqrZ1BAnDO9qBGjEZ2XJK1NY8bn+QoRQ0uqV4uhr2nU86u1aGmm5HgyhG++/0i9RrXarr+TDEJ4d0ffD5kx1lRLcLQz2U42tlKOhlMoiHCC/xVP1gryWAxFdGdo9yu8FDlCAKWiWXzVar0m/q4upejKjR3EMSxKo3OzibOdW7OUPgkYdtDkE2eZjSq6s+v3jKNBsJIy2vrBFj8RaAp1BuwwHTSh9YhAe9sc0yoLpsqofneiWhQdVkm1N2tanOgYqprpyfQaLuGsvtMA9u6S0/54PIsX2c4Wx1vXRGrzQ1nKzs9zpBOMIzoPK4h1RD7AhBlBDRjxLyQ5Kx1Bms4W6EkPOwwE4RmZ+hvEaGohKMXffgdKUY6opYkK013f7gddnhBbsF8Wivi6Eg+UmKdl1PQJG31G5E8by5MgSgbTAHtBGANTIUYZBMgzwO9UCDbKX1MAQey8FoFIaStjaGYQO/RUWUU6uiCagHFydJQuJiUMsyBKBcoz6TSlVX1sYw/JLSvhtZ1ujjdJZdiJOWmTdUiq+BIfC7VOG3W9Gx8lyyRoxjiaIk+b7vpUL13VAoesT7kIe0mOpV845OIHM0ff/r6lkjUg5CEEmbBqWGo2geqUtALdcrCNojuqcX2m1wolWe+RlmQml6tVQoDfOASu0V9hDRa+6sUoP6TXLUvBfK16bBRsly/DygZvaqfkivpbpTZSFX22KxbgmgbZqtxZ0rKzAEEr3mLlxv5C0wDKGuzNpwrQwBuLWJ46SlahufpQTK7+Bj++tkCNAR1uLsPtgOw3A1qHnrZcjSMdmh5b8VhkAt2+JiLsDlGCZsQES11CDeMt4ow1DD6uhKTlCkV7KkyKg5CEu7PWyEpT2iXoZ41yvPLJOLQJU7al5Q4ZyQtGGj/7FrlNySaZPCfKosF8l4yTE/wxwo9aav5gGl6ZJ/0ye3oadeLlmqqpNQG7rUXoDlflYoUVZgs/1xZDpG6s2ZBcMxjSqf1ptmGELd/J+SCUrRvatqwZ5x/alhl9xOr46i7dAtMARBK8gC5ffDIZoaPMNwHNM1R5/6Qw+uwz5chiHwGnIGqO7UBb3hSlM7PGxVb+qBp09AbYdhNqhPY/PTMWuHR5+DJgaR4ka/NMN6PIahcOj2bj1sDBIBtD4/zUYZ8uQgBatTrtPcEnOgMmeNWFSI5Qgl8dDhghUsApVLqodV3BIrQ0F+6gt7mvVnoTJljSBVK6rLWaBuE1djhF9eZ9YIXNaSKv4ZqOiCkxLZsFjvDulWGOo82yl2NUvP7JD+kgyBP+JKjdmpQ3ke1C/KENSjME/HbijzoH5VhiBwI9W0Uqj/jgxB2+KxNZZj3zfXwDCjtMgOFcT30+LL22dBZcoakSn0IDMU8KqJgL5Spw7U3LNGkLKeC9EXgdLBsBZHgTmlHpLyPm/BsHjVFqD4Rj4p7qEPpqB+RdtiDKp5n5ipjlWfgvrlGYaSsRvdbFqwKo3fkGGopcZhElapKv2GDIF/58b309MzYL8Zw1A29ngkX8Es+L8fQ1VUYNAzmGFsf2rmljWCdWtb8nAMSlb9B5OuOWYXTWWNELRQe3gma4QQagrPpnpYIAEFr8oBavwMTKjZNUaEo9n1ou+FWKIgQwBRdJp3hjIpAegpCRUoPdUDrZqnlyJaNBTvf6FpZTI68QKnoOJpl6LiNhs2iaOLMqzhbkmo3jNct+IaZTSToYTKHbdSKx32An2c4YIGAQDHZxcXp6enr69fX19ffwnLKSuvT5WYoX4WNiMNacEfLs5gIqyD/u31y3QlXpc/4x0NO7G7pngtk25QGWZHnMFQ97suvVTdCWfA8gxl+fjrj5ODIi775F+iHHyjzTRZP/v+82SvOFn2T35+PWYHDwT0ksK8m2GmaDDohktOnNU91Ozic1POqJnOEB3GnnSTHkhbgqGIzn4c7O/v76WX/Z+0mXJxglulNAsrD948IpqM8mWR1B3MMjVFRf1sG5YbHRwOYiOLJQpPYVhONirdLsdQRK9nsiP9/we/iJrypTi3VfGFthBDfEKi3nUse5DW+UINpjGERrINTXmxOEP5bG+fD0VaKf6JRaP8nhOcbkHrD76gxRiGkjK0OQyDUaR3SlgduleMc7FMM2wwN3qHDnR1SYavaJ+KP16kl/fh4MhP79hgFU++Tvz9ssiYn8mLMRRwDJZj/jtIMDT67BbCDpqOkaOXOBecFj2KzhjyRs+FFwjHJ/t0Mp6TKsRL9D0UtkJfiozgF9wsaoS7cM7+VnwZtpSTDFlJDQKsj0zHSzIcRLeNTKVdaFPyFf+/BmO4TNYG/cMB7dITmtNKfcVm8nUKuHpNWO1/VUOx9ZozfOZ3odL/tx824gzv4BF92Tr6xIaRQG+wKBgtyMdQXUrVOiYM9y/PhTFVa2LDiDO8kKeh2DTY/wu35AzV57axFNgv+bIYMQRX1B9gB7G6RxYvKaCpLuwbcBQxfE5dpu4gbYKhMEfzpgz3T840YVrzfnrzDMMxKNYrUUH9qi5EDFVgkEE0jiJ0ypDeqhquRSocYwh9WtIYegEtUoLh/pO2MsPzP1dgGBY4DN/RmCG7lcCMw8Hxj8ksMxxONZtkqLKtA7spTzGU3rqGaZkmjb3a1hiS4RESY6h4I0olVuk0/FssRUxIfIIhVXNqzemsgupb8rDYNRzHbKX5sPkxJHIjZghpuknrUzJNgOyzHAJYUI4zpH+opDDU31IhS7NGHO8zMQBDO2bDYzjOUPapI8CMcj2EP8bz3da8JRhKYwzP37Bl8gtSE1IQW0gbZRiuyyzxlOUkx9Bm0h4swRCwWcoyf5weMGF+cPlHXL6/Pj0T0DTDiUVLzHGWavwaNbcOuPHNU6Y5QVgVM8SWdsxwKtVDgiH5+DJV5SwW995cy4imekiM4WTWiLBEYxg2jBgKC2aN4Ax1rGrRNFbOkRKJ8I9kPTG6WLOKGJKHyxnGS2+s7d3yWUo/o4s/D9KtouLeI1W1UMRwHIoqgHwMQzmupWht87NGjDFkQQ7OgJ5XVAFLdFEa4gN3elIvlVIY8rmi1jlDWqEh5fHVj9DwnbIXQqPojYqn+SRDDjXBcGHNexZDFm4UmokiZUgvYgi7ir8qrcqQejEuXn+P38K9gwOuan+XN8gwutqNMBL5Nb0mvRJ8bJbOZXg7xXDSE6Wqx1/YQBJBuTGGgO6O22VMKcqqzTJByQuP4RyGrFtiqLOeMqPocaMMqepmdcigeUydqdJfXHwMp2dp2i73+SVhVXy/UYbeiC4tbT3sVTSE7BRlhvdwWYYym81ZGPITEOMMSbbHcDW9g4IGC3zdkTY9hu+5J+N8RYYIXn999fUsjaFHRbw5EHTmpKr5TPKMjeEy8lBMP7oRM5ySh9qLAyJbiieE4vmbJeUhel988f7xxeUrNWaosiAJSKW+2QOwSw3GLuCRDdEY4naRTiNNBklAnaSMxAyngysS8RYRQxXC2MZHuJUK2Eq7/+Yp/G6ktUGoRjrNnNAN9bF4+vi//x2fX75ASb2UTuArZg+COltX2zrTAFP10pIfHdWNnuS49UQHhfqGk7YFeqJexuIp/hj5aZBIoR4ZxeIHhC7o374DUk8ZKtqYXkrxmV4Kf35R3718/eP9+d5ZQi9lc1qlF7raQ5p2MjSmhFSGiJ4IsD/zPb6YIRyzLej0wVtEmizIsY+EDgx2UeFP35mWU7xQZJlAPTIf3f6HJ0aWMDxn1V/PY3QhBNbwT7DX/fidev7uXH19CX58mWIoquymnsMCHaMGTGUIAUujZtz7LD43+kEwxhAep5WzFz/YqP0gr9rTAddVv56dN4m38YxT5B7lRwL+jdmbl18eU5HDH316p0onb36ePKr/XE8xFIQmFRi0WKYkzGDI06gZFbfEiuu65D+WCYQy/PDuIK0wjWb/4JQ+lW9FTrHIWkReftbyL7qwPvHPxWIa7rtHPIZIeQd/XiD47WUKQ5o1iBUbK2zpDIHo8AR0OGnb+H9JhqzrqWV//zuiLw/8c147PGZ0mQXK2dwNjoPjcCbvPcJ30tPJOdq7SKw0nKEMnGinyTjECtsMhgD1SvaMw1WJlWY2w/39gx9nKFoevqWaWKycfDvmi1bz7M2craziRdjmy4+nf2R0/f7r5Tkol5yw2C01wRDvFhJ+pjXAZlPE0MRtSwl/qdI4Gpm2OVmMsTE8mLUlc/nqUZEThvnZq8ticaoZfRg/o1ZauFx9+Ppzb7olKQdkqL+dXDydf/i696SB9l1Y+v2qmszP0Hw4rNRqNfue6muModqrVlut1t+fYdIj3Azq5YdG+O/h5uamXMb/3bSsBMPjv/5IK9+vT48RGjvooqLjx+tk63++XV+z93P/J1eLsCdeQMLZ6fX1dQr0X2Rpho/7706K3580kStvYOyoQvibKv4PjJ9e4D2Rxw5CSBKA5F8cHFDmaynJ6UDDCCIaPPRARSlnKlBIkxhXrIQv6TWTFZfHIHnwIlxsI5/FGDhJGyFhrxf5hVnnUQVNUbSEMrmIvyDW2m6mtLYsCSjY1tM+fmdTodaY+5Jr8axb/Ht8DK35mvciUKRXF+/oKO6doeWhsuTVn/HgQ+WwwDTanBiCixO6NJ08ok3eDghmFNRm12yS22BzYQjO9v4g/w4utI0xVLzOYXpxXX7xRlPNiyGgDh5V1TY3hgoy0gvXAAwjyP00As47t0GGs5UZzM81/N04urEWhoZtdodSlm7tOsP+2wBm61aODP8fnFKL677p4r4AAAAASUVORK5CYII=">
                <img style="width:80px; height: 80px;" src="data:image/png;base64,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">
                <img style="width:80px; height: 80px;" src="data:image/png;base64,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">
            </div>
        </div>
    </div>

    <div class="container-fluid q-pt-xl q-pb-xl bg-blue-9">
        <div class="container">

            <div class="row ">
                <div class="q-pt-lg col-md-6 col-12 conf text-center desktop-only">
                    <ul>
                        <img src="https://pwskills.com/images/courseDescription/confused-person.svg">
                            <p class="text-light-blue-3 text-h4 text-bold">Still confused
                                <br><span class="text-h6">Get Connected to our experts and know what's best for you.</span>
                            </p>
                    </ul>
                </div>
                <div class="conf col-md-6 col-12">
                    <q-card>
                      
                            <div class="q-pa-md q-ma-xl" style="max-width: 400px">
                                <div class="text-center q-pa-sm text-light-blue-10"><p class="text-h5 text-bold">If I'm interested</p></div>
                                <q-form
                                @submit="onSubmit"
                                @reset="onReset"
                                class="q-gutter-md"
                                >
                                <q-input
                                    filled
                                    v-model="name"
                                    label="Your name *"
                                    hint="Name and surname"
                                    lazy-rules
                                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                                />

                                <q-input
                                    filled
                                    v-model="email"
                                    label="Your email *"
                                    hint="Enter your email"
                                    lazy-rules
                                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                                />

                                <q-input
                                    filled
                                    type="number"
                                    v-model="num"
                                    label="Your Mobile no *"
                                    lazy-rules
                                    :rules="[
                                    val => val !== null && val !== '' || 'Please type your age',
                                    val => val > 0 && val < 100 || 'Please type a real age'
                                    ]"
                                />

                                <q-toggle v-model="accept" label="I accept the license and terms" />

                                <div>
                                    <q-btn label="Submit" type="submit" color="primary"/>
                                    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                                </div>
                                </q-form>

                            </div>

                    </q-card>
                </div>
            </div>
        </div>
    </div>
    
    <div class="container-fluid q-pt-xl q-pb-lg gt-sm">
        <div class="container">
            <p class="text-h3 text-bold text-center q-pb-xl"><span class="text-light-blue-10">Placement</span> support & Process</p>
            <div class="row conf">
                    <img class="img-fluid" style="width:600px" src="https://excelr.in/full-stack-development-course/assets/images/Learning-Path.png">
            </div>
        </div>
    </div>
   
    <div class="container-fluid">
        <div class="container">
            <div class="q-px-sm q-py-lg ">
                    <div class="column items-end">
                    <q-fab class=" fixed-bottom-right q-pr-md" style="margin-bottom: 80px;" color="primary" icon="keyboard_arrow_up" direction="up">
                        <q-fab-action color="primary" @click="onClick"  icon="mail" />
                        <q-fab-action color="secondary" @click="onClick" icon="phone" />
                    </q-fab>
                    </div>
                </div>
            </div>
        </div>
   
</q-page> 
</template>

<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import { computed } from 'vue'


export default {
    setup() {

        const name = ref(null)
        const num = ref(null)
        const email = ref(null)
        const accept = ref(false)
        const $q = useQuasar()
        return {
            name,
            num,
            email,
            accept,
            tab: ref('images'),
            fixed: ref(false),
            splitterModel: ref(50),
            layout: computed(() => {
            return $q.screen.lt.sm ? 'dense' : ($q.screen.lt.md ? 'comfortable' : 'loose')}),
     

                onSubmit () {
                    if (accept.value !== true) {
                    $q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'You need to accept the license and terms first'
                    })
                    }
                    else {
                    $q.notify({
                        color: 'green-4',
                        textColor: 'white',
                        icon: 'cloud_done',
                        message: 'Submitted'
                    })
                    }
                },

                onReset () {
                    name.value = null
                    email.value=null
                    num.value = null
                    accept.value = false
                    },
                    navPos: ref('bottom'),
                    navigationPositions: [
                        
                    ],

                    slide: ref('style'),
                    lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
                                
}
}
}

</script>

<style scoped>

.overlapping {
  border: 2px solid white;
   position: absolute;
}
.list{
    list-style: none;
}
.conf{
    display: flex !important;
    justify-content: center !important;
}


</style>
