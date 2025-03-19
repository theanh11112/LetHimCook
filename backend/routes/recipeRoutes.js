const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/recipes', recipeController.getRecipes);          // Lấy tất cả công thức
router.get('/recipes/:id', recipeController.getRecipeById);   // Lấy công thức theo ID
router.post('/recipes', recipeController.createRecipe);       // Thêm công thức mới
router.put('/recipes/:id', recipeController.updateRecipe);    // Cập nhật công thức
router.delete('/recipes/:id', recipeController.deleteRecipe); // Xóa công thức
router.get('/search', recipeController.searchRecipes);        // Tìm kiếm công thức
router.get('/filter', recipeController.filterRecipesByIngredient); // Lọc theo nguyên liệu

module.exports = router;
