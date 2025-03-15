import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import axios from 'axios';

type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  steps: string[];
};

const API_URL =
  Platform.OS === "android"
    ? "http://10.0.2.2:3000"
    : "http://localhost:3000";

const SearchController: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/recipes');
        console.log("Response từ API:", response.data); // Log để kiểm tra
        if (!Array.isArray(response.data)) {
          throw new Error("API không trả về một mảng hợp lệ");
        }
        setRecipes(response.data);
      } catch (err) {
        setError("Lỗi khi tải dữ liệu");
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Danh sách công thức món ăn</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id.toString()}>
            <h2>{recipe.name}</h2>
            <p>Nguyên liệu: {Array.isArray(recipe.ingredients) ? recipe.ingredients.join(', ') : 'Không có dữ liệu'}</p>
            <p>Các bước: {Array.isArray(recipe.steps) ? recipe.steps.join(', ') : 'Không có dữ liệu'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchController;
