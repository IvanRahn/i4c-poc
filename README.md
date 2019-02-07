# Problem definition / purpose

Create a website with a CMS capabilities for the client, the acceptance criterias included optimization, accessibility, adherence to visual designs.

# Tech Stack

React, CircleCI, AWS, HTML/CSS, Keystone(Node / Express / Mongo)

# Instructions to install

Clone the repo and run npm install, then npm start.

# Link to Github
(https://github.com/IvanRahn/i4c-poc)
(https://github.com/IvanRahn/i4c-poc-cms)

# URL
(http://i4c-web-poc.s3-website-ap-southeast-2.amazonaws.com)
(https://i4c-cms.herokuapp.com)

 #QUESTIONS 
 
# A - What are the most important aspects of quality software?

The most important aspects of quality software for this project are compatibility, performance efficiency, usability, and maintainability. 

Compatibility ensured the administrator could customize different sections within the page including content like images, headings, texts, and links. 


Performance Efficiency this is a vital one as it lets the users access the webpage with a quick response time of a few seconds. Even when landing on other web pages the power of React enables all the functions to respond very fast. (lighthouse) 

Usability determined how easy it was for the user to navigate through the web pages. Thanks to a clean, user-friendly, and elegant wireframe our team was able to execute an application that we think makes the user experience enjoyable and simple to navigate through.  
Maintainability involves all our module components which pretty much made up our whole front end. We designed them with reusability in mind since most of our web pages had the same kind of components. Instead of creating new ones we decided to implement them as pieces that could be executed within each other and form responsive functions. Most of them can be modified to match accordingly to our wireframe layouts. 

# B - What libraries are being used in the app and why?
Our libraries consist of Keystone, React and Styled Components. Keystone is a Node.js web-app framework that integrates Express and Mongoose ODM. With Keystone, we were able to create a CMS that lets our client login and customize the front end web pages accordingly. React is a JS library that makes user interface a lot better by building components that update and render with quickness whenever data changes. Finally, Styled Components is a library that enhances CSS into React’s components. By using CSS syntax the components render on the page and enable the use of dynamic styling which can be accessed globally or through the component’s properties.  

# C - A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

Knowledge - 

The first step would be for the team to get as much information from the client. This could mean things like what the project consists of, when is the deadline, what are the project requirements, and what are the expectations from the team and the delivery of the final product. Clear communication between the team members and the client is a key factor to reach the expectations both parties agreed upon. One way to do this is the team and client make a scope of what the project will look like once delivered.
Upon agreeing with the final scope of the project the team needs to be knowledgeable about the tools they will be working with. This could be a programming language, type of database, and the type of deployment. If there is a new tool the team has to learn then they should know how to read the docs of said tool and know how to implement it in their code. Also, there could be third-party software that could help facilitate certain tasks within the app, therefore knowing and understanding it could really benefit the development process.

Skills - 

The team will need to know how to execute their knowledge and turn them into skills. Skills will vary from each team member. It would probably be a good idea to discuss among them what each one will do and figure out their strengths and weaknesses so they can be more efficient in certain tasks. These types of skills could include design layouts, code execution, proficiency in programming languages, data analysis, and more.  

All these are technical skills, but in order to achieve delivery of a refined product, the team will also need none-technical skills. For instance skills like effective communication, time management, problem-solving, project management, and resourcefulness.

# D - Within your own project what knowledge or skills were required to complete your project, and overcome challenges?

For our project we were given the design layouts by our client, therefore, one of our challenges was to make the application look exactly like the layouts. We had to figure out how and with what tools we were going to accomplish the same look. 
In order to do that we had to be knowledgeable of some technologies we had already studied during the course, but also had to learn new ones and figure out how to implement them in our code. Some of these new technologies were using Keystone, Google Analytics, and Styled Components. 

[To deploy our app we had to create a Lambda function to push our code to an S3 bucket using AWS. As well as using Heroku and a cloud front CI/CD]
 
During the process of building the application, we also strengthened our knowledge of some of the programs, frameworks, and technologies we previously practiced. The popular Agile methodology is one example. In the beginning phase of the project, we created a Trello board and set up the agile system to complete tasks. We also held a sprint meeting with the client at the halfway mark of our final deadline. Since our app relied heavily on the front-end aspects we all improved drastically with React and CSS. 

Our technical skill set varied so we decided to do what each of us was more comfortable with. This way we could accomplish tasks faster and have better results. In order to keep good time management, we decided to do scrum-poker which consists of each team member voting on how long each task would take according to them. This helped us get an idea of how long we should spend on each job and organize our time better. 


# E - Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature? 


The knowledge and skills we had and used were effective for the most part. Obviously, this was a learning process and experience for all of us. When we thought we had it figured out a new challenge came up and we had to go back to the drawing board. Our biggest challenge was the organization, layout, naming, and styling of our components used on the websites. If we had to repeat the project we would prioritize component layout. This came back to haunt us two days before the deadline. At first, the idea of having a reusable component that could be displayed on all our websites sounded ideal. But after spending multiple days on that component which held a complex amount of data we decided to modify since it was creating many problems. The lesson here was to make a simpler component by not putting so much data into it. Also, we should have not invested so much time trying to fix it. Other than that we all learned a great amount by using new frameworks and software such as Keystone.JS and Google Analytics. 
