export interface Recipe {
    id: number;
    title: string;
    description: string;
    image: string;
    author: string;
  }
  
  const dummyData: Recipe[] = [
    {
      id: 1,
      title: 'Gà xào sả ớt',
      description: 'Gà, sả, ớt, gừng, hành tím, dầu ăn...',
      image: require('../Img/dotay.jpg'),
      author: 'HieuKon',
    },
    {
      id: 2,
      title: 'Cánh gà chiên nước mắm',
      description: 'Cánh gà, bột chiên, tỏi, ớt...',
      image: require('../Img/croi.jpg'),
      author: 'danh',
    },
    {
      id: 3,
      title: 'Gà nướng bằng lò nướng thủy tinh',
      description: 'Gà, gia vị nướng, dầu hào...',
      image: require('../Img/croi.jpg'),
      author: 'tanh ',
    },
    {
      id: 4,
      title: 'Gà nướng bằng lò nướng thủy tinh',
      description: 'Gà, gia vị nướng, dầu hào...',
      image: require('../Img/croi.jpg'),
      author: 'tanh ',
    },
    {
      id: 5,
      title: 'Gà nướng bằng lò nướng thủy tinh',
      description: 'Gà, gia vị nướng, dầu hào...',
      image: require('../Img/croi.jpg'),
      author: 'tanh ',
    },
  ];
  
  export const getRecipes = (): Recipe[] => dummyData;
  
  export const searchRecipes = (query: string): Recipe[] =>
    dummyData.filter(recipe =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );
  