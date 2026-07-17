const express = require('express');
const app = express();

app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Contact form
app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body;
  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({ error: 'All fields required' });
  }
  console.log('Enquiry:', { name, email, phone, service, message });
  res.json({ success: true, id: Date.now() });
});

// Blog
app.get('/api/blog', (req, res) => {
  res.json([
    { id: 1, title: 'Web Design Trends 2024', category: 'Design', date: '2024-07-10', excerpt: 'Latest trends...', image: 'https://images.unsplash.com/photo-1468056709990-75f315717b99?w=800' },
    { id: 2, title: 'SEO Guide 2024', category: 'SEO', date: '2024-07-08', excerpt: 'Complete guide...', image: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?w=800' },
    { id: 3, title: 'Digital Marketing Tips', category: 'Marketing', date: '2024-07-05', excerpt: 'Strategies...', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800' }
  ]);
});

// Portfolio
app.get('/api/portfolio', (req, res) => {
  res.json([
    { id: 1, title: 'TechCorp Website', category: 'web', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800' },
    { id: 2, title: 'Fitness App', category: 'app', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800' },
    { id: 3, title: 'Brand Campaign', category: 'marketing', image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800' }
  ]);
});

module.exports = app;
