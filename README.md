# React Firebase Real-Time Chat App

A real-time chat application built with **React** and **Firebase**.

## Features

- Real-time messaging between users
- User authentication (e.g., Google via Firebase)
- Dynamic UI with React Hooks
- Seamless front/back-end integration using Firebase services

## Tech Stack

- **Frontend**: React (using create-react-app, function components, hooks)  
- **Backend**: Firebase (Realtime Database or Firestore)  
- **Authentication**: Firebase Auth (Google Sign-In)  

## Demo

https://github.com/Vanshikatulsyan/CHITCHAT-react-firebase/assets/119696625/340563b7-82bf-4f13-a62b-67be3adf5004

## Getting Started

### Prerequisites

- Node.js and npm installed  
- A Firebase account

### Setup Instructions

1. Clone the repo:  
   ```bash
   git clone https://github.com/Vanshikatulsyan/CHITCHAT-react-firebase.git


### Install dependencies:

npm install


Create a Firebase project in the Firebase Console. Add a new Web App and copy the config.

In your project, create a src/firebase.js file and add your Firebase config:

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database'; // or getFirestore

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app); // or getFirestore(app);

export { auth, db };


### Run the app locally:

npm start

### Usage

Create an account or sign in via Google

Join a chat room or start messaging

Messages are synced in real-time using Firebase


