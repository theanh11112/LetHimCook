const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Kết nối MongoDB trực tiếp mà không cần biến môi trường
mongoose.connect("mongodb://127.0.0.1:27017/recipes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('🔗 Kết nối MongoDB thành công'))
.catch(err => console.log('❌ Lỗi kết nối:', err));

// Sử dụng routes
app.use('/api', recipeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
