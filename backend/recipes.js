const recipes = [
    {
        id: 1,
        name: "Phở bò",
        image: "/images/pho-bo.jpg",
        ingredients: ["Bánh phở", "Thịt bò", "Hành lá", "Gừng", "Hoa hồi", "Quế"],
        steps: [
            "Đun nước sôi, cho xương bò vào hầm trong 2 tiếng.",
            "Thêm gia vị như gừng, hoa hồi, quế để nước dùng đậm đà.",
            "Chần bánh phở, cho thịt bò thái mỏng lên trên.",
            "Chan nước dùng và thêm hành lá."
        ]
    },
    {
        id: 2,
        name: "Cơm gà",
        image: "/images/com-ga.jpg",
        ingredients: ["Gà ta", "Gạo", "Hành tím", "Nước mắm", "Dưa leo"],
        steps: [
            "Luộc gà với hành tím cho thơm.",
            "Dùng nước luộc gà để nấu cơm.",
            "Chặt gà, trình bày với cơm và dưa leo."
        ]
    },
    {
        id: 3,
        name: "Bún chả",
        image: "/images/bun-cha.jpg",
        ingredients: ["Bún", "Thịt ba chỉ", "Thịt nạc vai", "Hành tím", "Tỏi", "Đường", "Nước mắm"],
        steps: [
            "Ướp thịt với hành, tỏi, nước mắm, đường khoảng 30 phút.",
            "Nướng thịt trên bếp than cho vàng đều.",
            "Pha nước mắm chua ngọt, ăn kèm với bún và rau sống."
        ]
    },
    {
        id: 4,
        name: "Gỏi cuốn",
        image: "/images/goi-cuon.jpg",
        ingredients: ["Bánh tráng", "Tôm", "Thịt luộc", "Bún", "Rau sống"],
        steps: [
            "Luộc tôm và thịt, thái lát mỏng.",
            "Nhúng bánh tráng vào nước cho mềm.",
            "Cuốn bún, thịt, tôm và rau lại, chấm với nước mắm chua ngọt."
        ]
    },
    {
        id: 5,
        name: "Chả cá Lã Vọng",
        image: "/images/cha-ca-la-vong.jpg",
        ingredients: ["Cá lăng", "Nghệ", "Thì là", "Hành lá", "Mắm tôm", "Dầu ăn"],
        steps: [
            "Ướp cá với nghệ, mắm tôm trong 1 giờ.",
            "Chiên cá trên chảo dầu, thêm thì là và hành lá.",
            "Ăn kèm với bún và nước chấm."
        ]
    },
    {
        id: 6,
        name: "Bánh xèo",
        image: "/images/banh-xeo.jpg",
        ingredients: ["Bột gạo", "Nước cốt dừa", "Thịt ba chỉ", "Tôm", "Giá đỗ", "Rau sống"],
        steps: [
            "Pha bột gạo với nước cốt dừa và bột nghệ.",
            "Xào thịt và tôm rồi đổ bột vào chảo.",
            "Thêm giá đỗ, chiên giòn và gập bánh lại.",
            "Ăn kèm nước mắm chua ngọt."
        ]
    },
    {
        id: 7,
        name: "Bánh mì",
        image: "/images/banh-mi.jpg",
        ingredients: ["Bánh mì", "Pate", "Thịt nguội", "Dưa chuột", "Rau mùi", "Tương ớt"],
        steps: [
            "Bổ đôi bánh mì, phết pate lên mặt trong.",
            "Thêm thịt nguội, dưa chuột và rau mùi.",
            "Chan thêm nước sốt và tương ớt nếu thích."
        ]
    },
    {
        id: 8,
        name: "Bò kho",
        image: "/images/bo-kho.jpg",
        ingredients: ["Thịt bò", "Cà rốt", "Hành tím", "Tỏi", "Nước dừa", "Gia vị bò kho"],
        steps: [
            "Ướp thịt bò với gia vị trong 30 phút.",
            "Xào bò với tỏi, hành, rồi đổ nước dừa vào.",
            "Hầm đến khi thịt mềm, thêm cà rốt vào nấu tiếp.",
            "Ăn kèm với bánh mì hoặc cơm."
        ]
    },
    {
        id: 9,
        name: "Miến lươn",
        image: "/images/mien-luon.jpg",
        ingredients: ["Lươn", "Miến", "Giá đỗ", "Hành phi", "Nước dùng xương"],
        steps: [
            "Lươn làm sạch, cắt khúc rồi chiên giòn.",
            "Nấu nước dùng với xương và gia vị.",
            "Chần miến và giá, thêm lươn và hành phi lên trên."
        ]
    },
    {
        id: 10,
        name: "Hủ tiếu Nam Vang",
        image: "/images/hu-tieu-nam-vang.jpg",
        ingredients: ["Hủ tiếu", "Thịt heo", "Tôm", "Gan heo", "Trứng cút", "Hành phi"],
        steps: [
            "Luộc thịt, tôm và gan heo riêng.",
            "Nấu nước dùng từ xương heo, nêm nếm gia vị.",
            "Chần hủ tiếu, thêm topping và chan nước dùng."
        ]
    }
];

module.exports = recipes;
