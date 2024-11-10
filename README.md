MERN Stack Fitness Tracker ( Fitness Tracker )

Welcome to the MERN Stack Fitness Tracker, a cutting-edge solution designed to revolutionize personal health management using modern web technologies. This platform offers a dynamic and interactive way for users to log and monitor their fitness activities.

Key Features:
User-Friendly Interface: Built with React, providing an intuitive and responsive design.

Secure Authentication: Robust login and registration handled via Node.js and MongoDB, ensuring data security.

Comprehensive Tracking: Log daily activities such as step count, water intake, calories burned, and workout sessions.

Social Interaction: Share progress, participate in community challenges, and engage with a supportive fitness community.

Real-Time Data: Update and access fitness data instantly with secure, cloud-based storage.

Enhanced User Experience: Mobile responsiveness with Tailwind CSS and engaging animations powered by GSAP.

Health Calculators: Includes BMI, BMR, Body Fat percentage, and 1RM calculators for personalized fitness insights.

E-Cart: Purchase necessary workout tools directly from the platform.

Future Work:
Expanded Health Metrics: Integration with wearable devices and more detailed health tracking.

Personalized Features: AI-driven fitness recommendations and advanced nutrition tracking.

Continual Improvement: Ongoing enhancements to adapt to evolving fitness trends and technologies.
![Screenshot 2024-11-08 204610](https://github.com/user-attachments/assets/d976213b-26c1-45fd-b8f6-cc876e9fc62f)
![Screenshot 2024-11-08 204631](https://github.com/user-attachments/assets/e1f8203b-0d1d-4197-85f7-8efa4cfa911e)
![Screenshot 2024-11-08 204848](https://github.com/user-attachments/assets/105c8d68-3369-4956-9487-8aee56478aa0)
![Screenshot 2024-11-08 211729](https://github.com/user-attachments/assets/9c30bf18-99ee-468f-80dc-ac9d3c37e7ea)
![Screenshot 2024-11-08 211826](https://github.com/user-attachments/assets/4494c9b4-ef52-4c68-9d50-b71b11b71d97)
![Screenshot 2024-11-08 211918](https://github.com/user-attachments/assets/7b5243d0-5dc4-413b-a6f4-eb63281e48eb)
![Screenshot 2024-11-08 211933](https://github.com/user-attachments/assets/bfddc119-41fa-4720-a0cb-000afd1aace4)
![Screenshot 2024-11-08 211949](https://github.com/user-attachments/assets/31c23095-7ca9-4762-b928-a199577d80df)
![Screenshot 2024-11-08 212008](https://github.com/user-attachments/assets/a44b397f-31d5-44b9-8eb2-74369933a5c1)
![Screenshot 2024-11-10 185333](https://github.com/user-attachments/assets/31a49c7b-1b7e-4476-8eec-b3c78226bb53)



Project Setup
Prerequisites:
Ensure you have Node.js and npm installed on your machine.

MongoDB should be set up either locally or through a cloud service like MongoDB Atlas.

Steps:
Clone the Repository:

git clone <your-repo-url>
cd <repo-name>
Install Dependencies: Navigate to the root directory and install server-side dependencies:

Then, navigate to the client directory and install client-side dependencies:
cd frontend
npm install

cd backend
Set Up Environment Variables: Create a .env file in the root directory and add your environment variables. Example:
npm install

setup .env:
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
PORT=5000
Run the Server: Navigate back to the root directory and start the server:

node server.js

cd frontend
npm start
Access the Application: Open your web browser and go to http://localhost:3000 to access the fitness tracker application.
