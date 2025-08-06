# 📅 Event Booking API

A Node.js + Express + MongoDB API for managing events and bookings.  
Users can register/login, view events, and book or cancel slots.  
Admins can create, update, and delete events.  

**Hosted API:** [https://event-booking-backend-nc92.onrender.com](https://event-booking-backend-nc92.onrender.com)

---

## 🚀 Features
- User registration & login with JWT authentication
- Role‑based access (admin / user)
- Admins can add, edit, and delete events
- Users can view events
- Users can book and cancel event slots
- MongoDB Atlas as database
- Hosted on Render

---

## 🔑 API Endpoints

### **Auth**
| Method | Endpoint              | Description         | Auth |
|--------|-----------------------|---------------------|------|
| POST   | `/api/auth/register`  | Register new user   | ❌   |
| POST   | `/api/auth/login`     | Login user          | ❌   |

---

### **Events**
| Method | Endpoint           | Description             | Auth       |
|--------|--------------------|-------------------------|------------|
| GET    | `/api/event`       | View all events         | ❌         |
| POST   | `/api/event`       | Create event (admin)    | ✅ Admin   |
| PUT    | `/api/event/:id`   | Update event (admin)    | ✅ Admin   |
| DELETE | `/api/event/:id`   | Delete event (admin)    | ✅ Admin   |

---

### **Bookings**
| Method | Endpoint                  | Description         | Auth |
|--------|---------------------------|---------------------|------|
| POST   | `/api/bookings/:eventId`  | Book an event       | ✅   |
| DELETE | `/api/bookings/:eventId`  | Cancel booking      | ✅   |

---

## 📌 How to Use

### 1️⃣ Register a User
**POST** `/api/auth/register`  
Body (JSON):
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456",
  "role": "user"
}
```

### 2️⃣ Login
**POST** `/api/auth/login`  
Body (JSON):
```json
{
  "email": "john@example.com",
  "password": "123456"
}
```
Response will contain a JWT token.

### 3️⃣ Send Authenticated Requests
For protected routes, send this header:
```json
Authorization: Bearer your_jwt_token
```


## 🌍 Deployment
This API is deployed on Render:
https://event-booking-backend-nc92.onrender.com

For example, to get all events:
https://event-booking-backend-nc92.onrender.com/api/event

