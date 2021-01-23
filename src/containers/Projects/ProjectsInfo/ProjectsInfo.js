import ispaceImg from '../../../assets/ispaceimg.png';
import ihostelImg from '../../../assets/ihostel.png';
import airforceImg from '../../../assets/airforcePT.png';
import employeeImg from '../../../assets/employeed.png';
import easyImg from '../../../assets/easybudget.png';
import friendSHIPSImg from '../../../assets/friendSHIPS.png'

const iSpace = {
    url: ispaceImg,
    title: 'Social Network Application (Handlebars/MySQL)',
    description: "This application allows a user to create an account, make a profile, and search & add friends/family. User can post on their own wall and their friend's walls. This application utilizes Node/Express back-end with MySQL database, Passport for session, & Bcrypt for password hashing. Handlebars, JQuery, HTML5, & CSS Bootstrap Framework is used on the front-end.",
    github: 'https://github.com/nsando84/iSpace'
};

const iHostel = {
    url: ihostelImg,
    title: 'Hotel Booking Application (React/MongoDB)',
    description: 'Application connects a Traveler to an Innkeeper for easy booking. Users can host as Innkeepers, or book as Travelers. Hostel selection is by location, capacity, date-range, etc..Application uses React Hooks/Context API with React-Bootstrap on front-end. Backend API is provided by NodeJS/Express. Secure login is provided by Bcrypt for password hashing and JsonWebToken to handle sessions. Data-layer persistence is provided by NoSQL DB - MongoDB Atlas via ODM, Mongoose.',
    github: 'https://github.com/nsando84/iHostel'
};

const friendSHIPS = {
    url: friendSHIPSImg,
    title: 'Instant Messenger Application (Redux/SocketIO/MongoDB)',
    description: 'Application allows users to instant message one another. Application users React/Redux/Socket-client on the front end, Express/Socket.io/Mongoose on the backend, and user data is stored in MongoDB via Atlas. JsonWebToken is used for user session.',
    github: 'https://github.com/nsando84/friendSHIPS'
}

const usaf = {
    url: airforceImg,
    title: 'Unofficial Airforce PT Tracker (Handlebars/MongoDB)',
    description: "Application allows user to insert values and app assigns points to track fitness level against set standards(USAF Fitness Test Scoring). Uses ChartJS for data visualization and IndexedDB to cache local recent searches. Technologies include Handlebars for content and MongoDB for key/value store.",
    github: 'https://github.com/nsando84/Fitness-Score-Tracker-DB'
};

const employeeDirectory = {
    url: employeeImg,
    title: 'Employee Management Directory (React/MongoDB)',
    description: 'Employee Management Application. App uses CRUD design capabilities. Client-side uses React class-components, service-layer API uses NodeJS/Express, and data-layer persistence is provided by NoSQL DB - MongoDB Atlas via ODM, Mongoose.',
    github: 'https://github.com/nsando84/Employee-Directory-Now'
};

const easyBudget = {
    url: easyImg,
    title: 'Easy Budget (ES6/MongoDB)',
    description: 'Budget Management Application. App uses service workers, indexedDb, & Background Sync to allow application to work offline without any change in functionality or user experience.  Data is saved into MongoDB Atlas when connection is reestablished.',
    github: 'https://github.com/nsando84/Easy-Budget'
};



const projectsInfo = [iSpace, iHostel, friendSHIPS, usaf, easyBudget, employeeDirectory]



export default projectsInfo