export const fetchSearchResults = async (query: string) => {
    if (!query) return [];
  
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
      return [];
    }
  };
  