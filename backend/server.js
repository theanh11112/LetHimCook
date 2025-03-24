const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipeRoutes = require('./routes/recipeRoutes');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'public/images')));

mongoose.connect("mongodb://127.0.0.1:27017/recipes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('🔗 Kết nối MongoDB thành công'))
  .catch(err => console.log('❌ Lỗi kết nối:', err));

// Endpoint mặc định tại "/"
app.get('/', (req, res) => {
    res.send('🌟 Chào mừng đến với API của Let Him Cook!');
});

// Sử dụng routes
app.use('/api', recipeRoutes);
app.use('/api/user', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
