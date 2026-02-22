# FirstGig

![FirstGig](assets/images/banner.jpg)

[- https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge](https://img.shields.io/badge/BUILD%2C%20FAILING%2C%20red
)
FirstGig is a mobile application designed to help teenagers discover local job opportunities, manage tasks, and receive guidance on navigating the early job market.

The project focuses on providing a clean, simple, and practical experience for young users looking to build work experience.

---

## Features

### Authentication (Work in Progress)

- Login / Signup UI implemented
- Authentication flow logic prepared
- Backend integration pending

> **Note:** Authentication currently uses placeholder logic. Full backend-based auth is planned.

---

### Location-Based Work Discovery

- Geolocation permissions handling
- Latitude / Longitude retrieval
- Reverse geocoding to detect user city
- City-based filtering logic

Allows users to view gigs relevant to their physical location.

---

### To‑Do List

- Add / manage tasks
- Simple productivity tracking
- Designed for gig & schedule management

---

### Chatbot Assistant

- HuggingFace API integration
- Axios-based requests
- AI-generated job tips
- Scrollable response history

Provides helpful advice for:

- Finding jobs
- Interview preparation
- Work habits
- General guidance

---

## Tech Stack

- **Framework:** React Native / Expo
- **Routing:** Expo Router
- **Networking:** Axios
- **APIs:** HuggingFace Inference API
- **Icons:** Expo Vector Icons

---

## Current Project Status

This project is under active development.

Working Components:

- UI Layout & Navigation
- To‑Do List
- Chatbot API Calls
- Geolocation Logic

In Progress / Planned:

- Backend Authentication
- Persistent Database
- Gig Data Management
- User Profiles

---

## ⚠ Known Limitations

- Authentication is not connected to a backend
- Database integration not implemented
- Gig listings use static / mock data
- Error handling still being refined

---

## Project Goals

FirstGig aims to:

- Help teens find safe, accessible job opportunities
- Provide early career guidance
- Encourage organization & productivity
- Offer a modern, intuitive mobile experience

---

## Roadmap

Planned Improvements:

- Full authentication system
- Database & backend integration
- Real gig posting system
- Messaging / employer contact
- Improved chatbot interactions
- UI/UX refinements

---

## Developer

Developed as part of the developer track of the MEET program by Yoav Lati

# Being Real

## Appwrite

while developing this project after already having submitted the api intgration lab I decided it could be fun to add a backened through appwrite, after all it will be an important tool for the startup and its important to learn it. except it decided not to work. THE MOMENT I installed it npm told me about this vulnerability and this vulnerability I CONSISTENTLY had 30+ vulnerabilities and they were high danger, critical even! and no matter how many times I tried to fix them THEY DIDNT WORK. and its not like the I had any problems with the modules before. this was an EXCLUCIVALLY NOW THING. after spending an hour trying to figure out whats wrong and how to fix it I decided to give up and soft reset by going back to the latest commit on the git repository. guess what? NODE MODULES IS IN .GITIGNORE SO NOT ONLY DID IT NOT ACTUALLY FIX MY PROBLEM BUT IT ALSO UNDID SOME ACTUAL WORK. I tried and tried and tried, I copied everything from nodue modules from old files.
eventually I just gave up, went to an old version of the project and just copy over the new files I changed. guess what? the moment I DARE install axios, the errors return. eventually I realized I am simply not built for ts. eventually I might re start this whole thing and figure it out from scratch but right now I am just not built for it. like even if I did want to add new features or even CHECK FI THIS WORKS I cant. Added the badge library from shields.io to again, try and spice this up but like I said ERROR ERROR ERROR ERROR. and I cant figure out why either because honestyl? I aint trying to figure what npm is spewing out when I write npm audit.

## Final notes

I hope I didnt dissapoint you content wise, reallly tried to make up for it with some cool stuff in this readme. but I guess we will see how it goes.
might come back and fix this when I dont got 2 exams a week :fire: sorry for the long rant btw
