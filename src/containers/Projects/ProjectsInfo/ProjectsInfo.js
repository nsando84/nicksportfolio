import ispaceImg from '../../../assets/ispaceimg.png';
import ihostelImg from '../../../assets/ihostel.png';
import airforceImg from '../../../assets/airforcePT.png';
import employeeImg from '../../../assets/employeed.png';
import easyImg from '../../../assets/easybudget.png';
import cookieImg from '../../../assets/whatcookie.png'

const iSpace = {
    url: ispaceImg,
    title: 'Social Network Application (Handlebars/MySQL)',
    description: 'This application allows a user to stay connected to friends, family, & more. User can create an account, search for other users to add as friends. User can view and post on their friends wall as well. The application utilizes Node/Express back-end with MySQL database and uses Handlebars, JQuery, HTML5, CSS Bootstrap Framework and on the front-end.',
    github: 'https://github.com/nsando84/iSpace'
};

const iHostel = {
    url: ihostelImg,
    title: 'Hotel Booking Application (React/MongoDB)',
    description: 'Application connects a Traveler to an Innkeeper for easy booking. Users can host as Innkeepers, or book as Travelers. Hostel selection is by location, capacity, date-range, etc..Application uses React Hooks/Context API with React-Bootstrap on front-end. Backend API is provided by NodeJS/Express. Secure login is provided by Bcrypt for password hashing and JsonWebToken to handle sessions. Data-layer persistence is provided by NoSQL DB - MongoDB Atlas via ODB, Mongoose.',
    github: 'https://github.com/nsando84/iHostel'
};

const usaf = {
    url: airforceImg,
    title: 'Unofficial Airforce PT Tracker (jQuery/MongoDB)',
    description: "Application allows user to insert values and app assigns points to track fitness level against set standards(USAF Fitness Test Scoring). Uses ChartJS for data visualization and IndexedDB to cache local recent searches. Additional, technologies include Handlebars for content and MongoDB for key/value store.",
    github: 'https://github.com/nsando84/Fitness-Score-Tracker-DB'
};

const employeeDirectory = {
    url: employeeImg,
    title: 'Employee Management Directory (React/MongoDB)',
    description: 'Employee Management Application. App uses CRUD design capabilities. Client-side uses React class-components, service-layer API uses NodeJS/Express, and data-layer persistence is provided by NoSQL DB - MongoDB Atlas via ODB, Mongoose.',
    github: 'https://github.com/nsando84/Employee-Directory-Now'
};

const easyBudget = {
    url: easyImg,
    title: 'Easy Budget (ES6/MongoDB)',
    description: 'Budget Management Application. App uses service workers, indexedDb, & Background Sync to allow application to work offline without any change in functionality or user experience.  Data is saved into MongoDB Atlas when connection is re-established.',
    github: 'https://github.com/nsando84/Easy-Budget'
};

const whatCookie = {
    url: cookieImg,
    title: 'Cookie Creator (Handlerbars/MySQL)',
    description: 'Application allows to create a cookie, random cookie image is assigned to cookie. Uses ORM for entries and queries to MySQL DB, dynamic content is generated using Handlebars.',
    github: 'https://github.com/nsando84/What-cookie'
}

const projectsInfo = [iSpace, iHostel, usaf, easyBudget, employeeDirectory, whatCookie]



export default projectsInfo