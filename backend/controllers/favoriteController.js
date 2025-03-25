const Favorite = require("../models/Favorite");
const Recipe = require("../models/Recipe");

// Lấy danh sách công thức yêu thích của user
const getFavorites = async (req, res) => {
    try {
        const favorites = await Favorite.findOne({ userId: req.params.userId });
        if (!favorites) return res.json({ recipes: [] });

        const recipes = await Recipe.find({ _id: { $in: favorites.recipeIds } });

        res.json({ recipes });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error });
    }
};

// Thêm công thức vào danh sách yêu thích
const addFavorite = async (req, res) => {
    const { userId, recipeId } = req.body;
    
    try {
        let favorites = await Favorite.findOne({ userId });

        if (!favorites) {
            favorites = new Favorite({ userId, recipeIds: [recipeId] });
        } else {
            if (!favorites.recipeIds.includes(recipeId)) {
                favorites.recipeIds.push(recipeId);
            }
        }

        await favorites.save();
        res.json({ message: "Đã thêm vào danh sách yêu thích", favorites });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error });
    }
};

// Xóa công thức khỏi danh sách yêu thích
const removeFavorite = async (req, res) => {
    const { userId, recipeId } = req.body;
    
    try {
        let favorites = await Favorite.findOne({ userId });

        if (favorites) {
            favorites.recipeIds = favorites.recipeIds.filter(id => id !== recipeId);
            await favorites.save();
            res.json({ message: "Đã xóa khỏi danh sách yêu thích", favorites });
        } else {
            res.status(404).json({ message: "Không tìm thấy danh sách yêu thích" });
        }
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error });
    }
};

module.exports = { getFavorites, addFavorite, removeFavorite };
