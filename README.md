# Bite Bank

Welcome to this project.This is a user-friendly food sharing website where there is some CRUD (adding food,getting food, update food and deleting food) operations on several places. Besides that, users can also request for available food and manage requested foods.

---

### Live link to the deployed project



- live link:   [https://a-11-bite-bank.firebaseapp.com/) 

- Required PDF Link:   [https://drive.google.com/file/d/1mVlCHLtUjccfoKTJd5Y-Qgbm9-n-anOp/view?usp=sharing) 




### 5 features of this website/project

- There is a beautiful slides showcasing images of some top foods on Banner.
- User Login / Register Authentication and jwt Security.
- User can add food from add food section .
- On clicking the View Details Button navigated the logged-in user to the Food Detail page where they can explore more about their Food Info.
- On Food Details section there is a Request button where user can request their food to prepare.
- On Manage my food section user can view food they added & they can edit, delete also.
- On My Request section user can view their requested food and some food details.
- Their is a search functionality on available food page where user can search for by  foods title.
- Their is a sort and layout toggle button in available food section where user can sort and toggle layout also.

---

## Tech Stack  
### Frontend:  
- React.js with React Router  
- Tailwind CSS  
- React-hook-form  
- React-select  
- React-share 
- Npm Date-fns
- Npm React-Icons. 
- Npm Framer Motion.
- Npm Axios
- Npm Jwt & Cookie Parser
- Npm Tanstack Query
- Npm React Tostify 
- Npm Dot Env  

### Backend:  
- Node.js with Express.js  
- MongoDB 
- JWT for authentication  

### Deployment:  
- Frontend: Firebase  
- Backend: Vercel 

---

## NPM Packages Used  
1. **Frontend**:  
   - `react-router-dom`  
   - `@tanstack/react-query`  
   - `react-hook-form`  
   - `react-select`  
   - `react-share`  
   - `react charts`  
   - `react-icons`     
   - `react-hot-toast`  
   - `sweetAleart2`  
   - `react-stripejs`  
   - `react-helmet`  
   - `axios`  
   - `axios`  

2. **Backend**:  
   - `express`    
   - `dotenv`  
   - `jsonwebtoken`  
   - `bcryptjs`  
   - `cors`  

---



## 📷 Project Images Highlights

### 📷 Home Page `"/"` Image

![Home Page](https://i.ibb.co.com/TBCLfSgR/Bite-Bnak-Home.png)

### 📷 Post Details Page `"/food-Details"` Image

![Food Details](https://i.ibb.co.com/8n0z6jx9/Bite-Bnak-fooddetails.png)

### 📷 ManageFood `"/managefood"` Image

![managefood](https://i.ibb.co.com/dsfvGV5f/Bite-bank-managefood.png)

### 📷 Available Food `"/availablefood"` Image

![availablefood](https://i.ibb.co.com/qMhRqQ4P/Bite-Bank-availablefood.png)

### 📷 User add food `"/add-food"` Image

![User add food](https://i.ibb.co.com/79hzYXN/Bite-bank-addfood.png)


---

## ⚙️ Installation & Setup

### Client Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/sayed725/BiteBank-Client.git
   cd BiteBank-Client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables in a `.env.local` file:

   ```env
   VITE_apiKey=your_firebase_apiKey
   VITE_authDomain=your_firebase_authDomain
   VITE_projectId=your_firebase_projectId
   VITE_storageBucket=your_firebase_storageBucket
   VITE_messagingSenderId=your_firebase_messagingSenderId
   VITE_appId=your_firebase_appId

   VITE_API_URL=your_server_api_link
   VITE_STRIPE_PUBLIC_KEY=your_stripe_Publishable_Key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### Server Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/sayed725/BiteBank-Server.git
   cd BiteBank-Server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables in a `.env` file:
   ```env
   DB_USER=your_db_user_name
   DB_PASS=your_db_user_password
   JWT_SECRET=jwt_secret_code
   STRIPE_SECRET_KEY=your_stripe_Secret _Key
   ```
4. Run the development server:
   ```bash
   npm start
   ```

---






