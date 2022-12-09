# FitHub
## Expect more from your clothes.
Repository for the development of the FitHub app
How long does it take to figure out what to wear in the morning? How many pieces of clothes do you have? Can you even estimate it? Exactly. How are you supposed to pair the perfect top with the perfect bottom, in a timely fashion, without knowing every single item in your closet or dresser? That’s why we created FitHub, a hub for all of your outfits. Our easy-to-use interface allows you to input your clothes into the virtual closet, so you don’t have to tear apart your wardrobe looking for ideas on what to wear. Our software also lets you mix and match clothes, favorite outfits, plan outfits for the week, and our exclusive color algorithm will recommend clothes that will go well with the type of event, and the rest of your fit. Don’t waste any more time cleaning up after trying on too many outfits.

## How to Install and Run Fithub

### Step 1:
Install Node using the link:
https://nodejs.org/en/download/ 

### Step 2: 
Open any terminal and type:
```
git clone https://github.com/rokarn12/fithub-app.git
```

### Step 3:
Then type:
```
cd fithub-app
```

### Step 4:
Install server files using commands:
```
cd /fithub_mongodb/server
npm i express mongoose morgan cors dotenv nodemon cookie-parser crypto express-validator jsonwebtoken uuidv1
```

### Step 5: Install client files using commands:
```
cd ../client
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material react react-dom react-router-dom react-scripts web-vitals react-toastify
```

### Step 6:
Start client side by typing:
```npm start```

### Step 7:
Open a second terminal and type:
```
cd fithub-app/fithub_mongodb/server
npm start
```




### OLD README
## How to Start Development
Run the following commands to install libraries if you only have basic npm libraries

### Server
```
cd /fithub_mongodb/server
npm i express mongoose morgan cors dotenv nodemon cookie-parser crypto express-validator jsonwebtoken uuidv1
```

### Client
```
cd ../client
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material react react-dom react-router-dom react-scripts web-vitals react-toastify
```

## How to Run FitHub
Open two terminals in VSCode

In one terminal:
Go to server directory and start app
```
cd /server
npm start
```

In the other terminal:
Go to client directory and start app
```
cd /client
npm start
```
