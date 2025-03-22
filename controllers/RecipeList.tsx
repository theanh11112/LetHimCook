import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import tw from 'twrnc';

const API_BASE_URL = 'http://localhost:3000/api';

const RecipeList = () => {
    interface Recipe {
        _id: string;
        name: string;
        ingredients: string[];
        steps: string[];
    }
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterIngredient, setFilterIngredient] = useState('');

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/recipes`);
            setRecipes(response.data);
        } catch (error) {
            console.error("Lỗi khi lấy danh sách công thức:", error);
        } finally {
            setLoading(false);
        }
    };

    const getRecipeById = async (id:string) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/recipes/${id}`);
            console.log("Chi tiết món ăn:", response.data);
        } catch (error) {
            console.error("Lỗi khi lấy công thức:", error);
        }
    };

    const createRecipe = async (newRecipe:string) => {
        try {
            await axios.post(`${API_BASE_URL}/recipes`, newRecipe);
            fetchRecipes();
        } catch (error) {
            console.error("Lỗi khi thêm công thức:", error);
        }
    };

    const updateRecipe = async (id:string, updatedRecipe:string) => {
        try {
            await axios.put(`${API_BASE_URL}/recipes/${id}`, updatedRecipe);
            fetchRecipes();
        } catch (error) {
            console.error("Lỗi khi cập nhật công thức:", error);
        }
    };

    const deleteRecipe = async (id:string) => {
        try {
            await axios.delete(`${API_BASE_URL}/recipes/${id}`);
            setRecipes((prev) => prev.filter(recipe => recipe._id !== id));
        } catch (error) {
            console.error("Lỗi khi xóa công thức:", error);
        }
    };

    const searchRecipes = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/search?q=${searchQuery}`);
            setRecipes(response.data);
        } catch (error) {
            console.error("Lỗi khi tìm kiếm công thức:", error);
        }
    };


    if (loading) return <ActivityIndicator size="large" color="blue" />;

    return (
        
        <View style={tw`flex-1 p-1`}>
            <TextInput
                placeholder="Nhập món ăn cần tìm..."
                placeholderTextColor="gray"
                style={tw`w-full h-8 border rounded-xl px-2 bg-gray-50 text-xs leading-none py-0`}
                />
            {/* <FlatList 
                data={recipes}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (
                    <View style={{ borderBottomWidth: 1, paddingVertical: 10 }}>
                        <Text style={{ fontSize: 18 }}>📌 {item.name}</Text>
                        <Text>📝 Nguyên liệu: {item.ingredients.join(', ')}</Text>
                        <Text>🔪 Cách làm: {item.steps.join(', ')}</Text>
                        <TouchableOpacity onPress={() => deleteRecipe(item._id)}>
                            <Text style={{ color: 'red' }}>🗑 Xóa</Text>
                        </TouchableOpacity>
                    </View>
                )}
            /> */}
        </View>
        
    );
};

export default RecipeList;
