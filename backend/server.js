const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json()); // Middleware để đọc JSON từ request
app.use(cors());
app.use("/images", express.static("public/images"));

// Import danh sách món ăn từ file recipes.js
const recipes = require("./recipes");

// Lấy danh sách tất cả công thức món ăn
app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.get("/recipes", (req, res) => {
    res.json(recipes);
});

// Lấy thông tin chi tiết của một công thức theo ID
app.get("/recipes/:id", (req, res) => {
    const recipe = recipes.find(r => r.id === parseInt(req.params.id));
    if (!recipe) return res.status(404).json({ message: "Không tìm thấy món ăn!" });
    res.json(recipe);
});

// Thêm một công thức mới
app.post("/recipes", (req, res) => {
    const { name, ingredients, steps } = req.body;
    if (!name || !ingredients || !steps) {
        return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin công thức!" });
    }
    const newRecipe = {
        id: recipes.length + 1,
        name,
        ingredients,
        steps
    };
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
});

// Xóa một công thức theo ID
app.delete("/recipes/:id", (req, res) => {
    const recipeIndex = recipes.findIndex(r => r.id === parseInt(req.params.id));
    if (recipeIndex === -1) return res.status(404).json({ message: "Không tìm thấy món ăn!" });

    recipes.splice(recipeIndex, 1);
    res.json({ message: "Xóa công thức thành công!" });
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server chạy tại http://localhost:${port}`);
});
