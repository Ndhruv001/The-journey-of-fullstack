---

# **Connectly Chat Application**

Welcome to **Connectly**, your sleek, efficient, and downright amazing chat application! 🎉 Built with a full-stack approach, Connectly is designed to bring people closer with a smooth and intuitive chatting experience. Let me walk you through what makes this app special and how it all came together.

---

## **🚀 What is Connectly?**

Connectly is a real-time messaging application where users can chat with their friends, check past messages, and enjoy a clean, minimalistic interface that feels like a breeze to use. Whether it’s quick catch-ups or detailed conversations, Connectly has your back!

---

## **🌟 Features That Make Connectly Shine**

### **Chat Like a Pro**
- **Dynamic Messaging**: Messages are displayed in real-time on the right-hand side for the current user and on the left-hand side for others—just like you’d expect in a modern chat app!
- **Time Stamps**: Every message is tagged with a neatly formatted time, so you always know when someone replied.

### **Contact List**
- An organized list of all your chat contacts to select and start chatting instantly. Each contact displays the last message sent and their online status.

### **Logout Flow**
- Securely log out with just one click. Once you’re out, you’re out! No lingering sessions or security worries.

---

## **💡 Why Did I Build This?**

When building Connectly, the goal was to focus on **clean code**, **scalability**, and **simplicity** while maintaining high performance. The challenge was to simulate a real-world chat app environment with robust functionality—something you’d expect from a professional-grade application. 

---

## **🛠️ Tools & Technologies**

### **Frontend**: 
- **React**: The entire UI is powered by React. From chat transitions to message inputs, React handles it all seamlessly.
- **TailwindCSS**: For a responsive and stylish design that adapts across all devices.

### **Backend**:
- **Node.js + Express.js**: Handles our APIs and application logic with ease.
- **MySQL**: The database storing user info, chat history, and timestamps.
- **JWT Authentication**: For secure login and session handling.

### **React Query**:
- To manage API calls efficiently and give you blazing-fast updates.

---

## **⏳ Why Not Socket.IO?**

Now, some might ask—why didn’t we go with **Socket.IO** for real-time updates? Well, here's the deal: we wanted to simplify the scope of this assignment while delivering robust functionality. The REST API approach is highly scalable and aligns with the project’s goals, leaving room for future improvements like adding WebSocket support. Think of it as building a solid foundation before adding the rooftop!

---

## **How to Run This Cool App Locally?**

### Prerequisites:
- **Node.js** (16+)
- **MySQL** installed and configured
- A system ready for awesome software 😎

### Steps to Run:
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Ndhruv001/connectly.git
   ```
2. **Navigate to the Project**:
   ```bash
   cd connectly
   ```
3. **Set Up the Server**:
   - Navigate to the server folder:
     ```bash
     cd server
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Configure the database connection (update `db/connectDB.js` with your credentials).
   - Run migrations and seed data if applicable.
   - Start the server:
     ```bash
     npm start
     ```

4. **Set Up the Client**:
   - Navigate to the client folder:
     ```bash
     cd client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the client:
     ```bash
     npm start
     ```

5. **Open the App**:
   Visit [http://localhost:3000](http://localhost:3000) and start chatting!

---

## **🚧 What’s Next?**

While Connectly works like a charm, there’s room to grow:
- **Socket.IO Integration**: For real-time messaging at its finest.
- **File Sharing**: Because who doesn’t want to send memes in a chat?
- **Typing Indicators**: So you know when your friend is typing that long-awaited reply.

---

## **📬 Feedback?**

I’d love to hear what you think about Connectly! Whether it’s suggestions, questions, or just a thumbs-up, feel free to reach out.

---

Made with ❤️ and a lot of coffee ☕ by Dhruv Shukla

---