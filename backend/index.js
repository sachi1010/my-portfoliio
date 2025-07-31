const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const fs = require('fs');
const projectData = require('./data/Projects');



const ContactMessage = require('./models/contactmessage');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Failed:", err));

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  try {
    // Save to MongoDB
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    });

    res.status(200).json({ success: "Message sent and saved!" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to send/save message" });
  }
});


// Serve static files from the public folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/api/resume', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'SACHITHANANTHAN B.pdf'); // use full correct filename

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("Resume file not found.");
  }

  res.download(filePath, 'Sachithananthan_Resume.pdf', (err) => {
    if (err) {
      console.error("Download error:", err);
      res.status(500).send("Error sending resume.");
    }
  });
});



// API route to get project data
app.get('/api/projects', (req, res) => {
  res.json(projectData);
});




// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
