// ============================================================
// TinyBee (EngKids) - Complete Learning Data
// Vietnamese Children's English Learning App
// ============================================================

const LessonData = {

  // ──────────────────────────────────────────────────────────
  // 1. STAGES - 10 stages × 5 lessons × 5 vocab words = 250 words
  // ──────────────────────────────────────────────────────────
  stages: [
    // ═══════════════ STAGE 1: Bắt đầu ═══════════════
    {
      id: 1,
      name: 'Bắt đầu',
      icon: '🌟',
      color: '#FF6B6B',
      lessons: [
        {
          id: 101,
          title: 'Colors',
          titleVi: 'Màu sắc',
          vocab: [
            { word: 'Red', meaning: 'Màu đỏ', emoji: '🔴' },
            { word: 'Blue', meaning: 'Màu xanh dương', emoji: '🔵' },
            { word: 'Yellow', meaning: 'Màu vàng', emoji: '🟡' },
            { word: 'Green', meaning: 'Màu xanh lá', emoji: '🟢' },
            { word: 'Orange', meaning: 'Màu cam', emoji: '🟠' }
          ]
        },
        {
          id: 102,
          title: 'Numbers 1-5',
          titleVi: 'Số đếm 1-5',
          vocab: [
            { word: 'One', meaning: 'Một', emoji: '1️⃣' },
            { word: 'Two', meaning: 'Hai', emoji: '2️⃣' },
            { word: 'Three', meaning: 'Ba', emoji: '3️⃣' },
            { word: 'Four', meaning: 'Bốn', emoji: '4️⃣' },
            { word: 'Five', meaning: 'Năm', emoji: '5️⃣' }
          ]
        },
        {
          id: 103,
          title: 'Numbers 6-10',
          titleVi: 'Số đếm 6-10',
          vocab: [
            { word: 'Six', meaning: 'Sáu', emoji: '6️⃣' },
            { word: 'Seven', meaning: 'Bảy', emoji: '7️⃣' },
            { word: 'Eight', meaning: 'Tám', emoji: '8️⃣' },
            { word: 'Nine', meaning: 'Chín', emoji: '9️⃣' },
            { word: 'Ten', meaning: 'Mười', emoji: '🔟' }
          ]
        },
        {
          id: 104,
          title: 'Shapes',
          titleVi: 'Hình dạng',
          vocab: [
            { word: 'Circle', meaning: 'Hình tròn', emoji: '⭕' },
            { word: 'Square', meaning: 'Hình vuông', emoji: '⬜' },
            { word: 'Triangle', meaning: 'Hình tam giác', emoji: '🔺' },
            { word: 'Star', meaning: 'Hình ngôi sao', emoji: '⭐' },
            { word: 'Heart', meaning: 'Hình trái tim', emoji: '❤️' }
          ]
        },
        {
          id: 105,
          title: 'More Colors',
          titleVi: 'Thêm màu sắc',
          vocab: [
            { word: 'Pink', meaning: 'Màu hồng', emoji: '🩷' },
            { word: 'Purple', meaning: 'Màu tím', emoji: '🟣' },
            { word: 'White', meaning: 'Màu trắng', emoji: '⚪' },
            { word: 'Black', meaning: 'Màu đen', emoji: '⚫' },
            { word: 'Brown', meaning: 'Màu nâu', emoji: '🤎' }
          ]
        }
      ]
    },

    // ═══════════════ STAGE 2: Giao tiếp đầu tiên ═══════════════
    {
      id: 2,
      name: 'Giao tiếp đầu tiên',
      icon: '👋',
      color: '#FF9FF3',
      lessons: [
        {
          id: 201,
          title: 'Greetings',
          titleVi: 'Chào hỏi',
          vocab: [
            { word: 'Hello', meaning: 'Xin chào', emoji: '👋' },
            { word: 'Goodbye', meaning: 'Tạm biệt', emoji: '👋' },
            { word: 'Thank you', meaning: 'Cảm ơn', emoji: '🙏' },
            { word: 'Sorry', meaning: 'Xin lỗi', emoji: '😔' },
            { word: 'Please', meaning: 'Làm ơn', emoji: '🙏' }
          ]
        },
        {
          id: 202,
          title: 'About Me',
          titleVi: 'Về bản thân',
          vocab: [
            { word: 'Name', meaning: 'Tên', emoji: '📛' },
            { word: 'Boy', meaning: 'Con trai', emoji: '👦' },
            { word: 'Girl', meaning: 'Con gái', emoji: '👧' },
            { word: 'Friend', meaning: 'Bạn bè', emoji: '🤝' },
            { word: 'Happy', meaning: 'Vui vẻ', emoji: '😊' }
          ]
        },
        {
          id: 203,
          title: 'Body Parts',
          titleVi: 'Bộ phận cơ thể',
          vocab: [
            { word: 'Head', meaning: 'Đầu', emoji: '🗣️' },
            { word: 'Hand', meaning: 'Bàn tay', emoji: '✋' },
            { word: 'Eye', meaning: 'Mắt', emoji: '👁️' },
            { word: 'Ear', meaning: 'Tai', emoji: '👂' },
            { word: 'Mouth', meaning: 'Miệng', emoji: '👄' }
          ]
        },
        {
          id: 204,
          title: 'Feelings',
          titleVi: 'Cảm xúc',
          vocab: [
            { word: 'Sad', meaning: 'Buồn', emoji: '😢' },
            { word: 'Angry', meaning: 'Tức giận', emoji: '😠' },
            { word: 'Scared', meaning: 'Sợ hãi', emoji: '😨' },
            { word: 'Tired', meaning: 'Mệt mỏi', emoji: '😴' },
            { word: 'Excited', meaning: 'Hào hứng', emoji: '🤩' }
          ]
        },
        {
          id: 205,
          title: 'Polite Words',
          titleVi: 'Lời lịch sự',
          vocab: [
            { word: 'Yes', meaning: 'Vâng / Có', emoji: '✅' },
            { word: 'No', meaning: 'Không', emoji: '❌' },
            { word: 'Excuse me', meaning: 'Xin phép', emoji: '🙋' },
            { word: 'Welcome', meaning: 'Chào mừng', emoji: '🤗' },
            { word: 'Good job', meaning: 'Làm tốt lắm', emoji: '👍' }
          ]
        }
      ]
    },

    // ═══════════════ STAGE 3: Gia đình ═══════════════
    {
      id: 3,
      name: 'Gia đình',
      icon: '👨‍👩‍👧‍👦',
      color: '#FECA57',
      lessons: [
        {
          id: 301,
          title: 'Family Members',
          titleVi: 'Thành viên gia đình',
          vocab: [
            { word: 'Mother', meaning: 'Mẹ', emoji: '👩' },
            { word: 'Father', meaning: 'Bố', emoji: '👨' },
            { word: 'Sister', meaning: 'Chị / Em gái', emoji: '👧' },
            { word: 'Brother', meaning: 'Anh / Em trai', emoji: '👦' },
            { word: 'Baby', meaning: 'Em bé', emoji: '👶' }
          ]
        },
        {
          id: 302,
          title: 'Extended Family',
          titleVi: 'Đại gia đình',
          vocab: [
            { word: 'Grandmother', meaning: 'Bà', emoji: '👵' },
            { word: 'Grandfather', meaning: 'Ông', emoji: '👴' },
            { word: 'Uncle', meaning: 'Chú / Bác', emoji: '👨' },
            { word: 'Aunt', meaning: 'Cô / Dì', emoji: '👩' },
            { word: 'Cousin', meaning: 'Anh chị em họ', emoji: '🧒' }
          ]
        },
        {
          id: 303,
          title: 'Family Activities',
          titleVi: 'Hoạt động gia đình',
          vocab: [
            { word: 'Play', meaning: 'Chơi', emoji: '🎮' },
            { word: 'Cook', meaning: 'Nấu ăn', emoji: '👨‍🍳' },
            { word: 'Read', meaning: 'Đọc sách', emoji: '📖' },
            { word: 'Sing', meaning: 'Hát', emoji: '🎤' },
            { word: 'Dance', meaning: 'Nhảy múa', emoji: '💃' }
          ]
        },
        {
          id: 304,
          title: 'Pets',
          titleVi: 'Thú cưng',
          vocab: [
            { word: 'Dog', meaning: 'Con chó', emoji: '🐕' },
            { word: 'Cat', meaning: 'Con mèo', emoji: '🐈' },
            { word: 'Fish', meaning: 'Con cá', emoji: '🐟' },
            { word: 'Bird', meaning: 'Con chim', emoji: '🐦' },
            { word: 'Rabbit', meaning: 'Con thỏ', emoji: '🐰' }
          ]
        },
        {
          id: 305,
          title: 'My Home',
          titleVi: 'Nhà của em',
          vocab: [
            { word: 'House', meaning: 'Ngôi nhà', emoji: '🏠' },
            { word: 'Garden', meaning: 'Vườn', emoji: '🌻' },
            { word: 'Door', meaning: 'Cửa ra vào', emoji: '🚪' },
            { word: 'Window', meaning: 'Cửa sổ', emoji: '🪟' },
            { word: 'Roof', meaning: 'Mái nhà', emoji: '🏠' }
          ]
        }
      ]
    },

    // ═══════════════ STAGE 4: Trường học ═══════════════
    {
      id: 4,
      name: 'Trường học',
      icon: '🏫',
      color: '#48DBFB',
      lessons: [
        {
          id: 401,
          title: 'Classroom Objects',
          titleVi: 'Đồ dùng học tập',
          vocab: [
            { word: 'Book', meaning: 'Quyển sách', emoji: '📚' },
            { word: 'Pen', meaning: 'Bút mực', emoji: '🖊️' },
            { word: 'Pencil', meaning: 'Bút chì', emoji: '✏️' },
            { word: 'Ruler', meaning: 'Thước kẻ', emoji: '📏' },
            { word: 'Eraser', meaning: 'Cục tẩy', emoji: '🧹' }
          ]
        },
        {
          id: 402,
          title: 'School Places',
          titleVi: 'Nơi ở trường',
          vocab: [
            { word: 'Classroom', meaning: 'Phòng học', emoji: '🏫' },
            { word: 'Library', meaning: 'Thư viện', emoji: '📖' },
            { word: 'Playground', meaning: 'Sân chơi', emoji: '🎡' },
            { word: 'Canteen', meaning: 'Nhà ăn', emoji: '🍽️' },
            { word: 'Toilet', meaning: 'Nhà vệ sinh', emoji: '🚻' }
          ]
        },
        {
          id: 403,
          title: 'School Subjects',
          titleVi: 'Môn học',
          vocab: [
            { word: 'Math', meaning: 'Toán', emoji: '🔢' },
            { word: 'English', meaning: 'Tiếng Anh', emoji: '🇬🇧' },
            { word: 'Music', meaning: 'Âm nhạc', emoji: '🎵' },
            { word: 'Art', meaning: 'Mỹ thuật', emoji: '🎨' },
            { word: 'Science', meaning: 'Khoa học', emoji: '🔬' }
          ]
        },
        {
          id: 404,
          title: 'School Actions',
          titleVi: 'Hành động ở trường',
          vocab: [
            { word: 'Write', meaning: 'Viết', emoji: '✍️' },
            { word: 'Listen', meaning: 'Nghe', emoji: '👂' },
            { word: 'Speak', meaning: 'Nói', emoji: '🗣️' },
            { word: 'Study', meaning: 'Học bài', emoji: '📖' },
            { word: 'Draw', meaning: 'Vẽ', emoji: '🖍️' }
          ]
        },
        {
          id: 405,
          title: 'School People',
          titleVi: 'Người ở trường',
          vocab: [
            { word: 'Teacher', meaning: 'Giáo viên', emoji: '👩‍🏫' },
            { word: 'Student', meaning: 'Học sinh', emoji: '🧑‍🎓' },
            { word: 'Principal', meaning: 'Hiệu trưởng', emoji: '👨‍💼' },
            { word: 'Classmate', meaning: 'Bạn cùng lớp', emoji: '👫' },
            { word: 'Librarian', meaning: 'Thủ thư', emoji: '📚' }
          ]
        }
      ]
    },

    // ═══════════════ STAGE 5: Ngôi nhà ═══════════════
    {
      id: 5,
      name: 'Ngôi nhà',
      icon: '🏠',
      color: '#FF9F43',
      lessons: [
        {
          id: 501,
          title: 'Rooms',
          titleVi: 'Các phòng',
          vocab: [
            { word: 'Bedroom', meaning: 'Phòng ngủ', emoji: '🛏️' },
            { word: 'Kitchen', meaning: 'Nhà bếp', emoji: '🍳' },
            { word: 'Bathroom', meaning: 'Phòng tắm', emoji: '🛁' },
            { word: 'Living room', meaning: 'Phòng khách', emoji: '🛋️' },
            { word: 'Dining room', meaning: 'Phòng ăn', emoji: '🍽️' }
          ]
        },
        {
          id: 502,
          title: 'Furniture',
          titleVi: 'Đồ nội thất',
          vocab: [
            { word: 'Table', meaning: 'Cái bàn', emoji: '🪑' },
            { word: 'Chair', meaning: 'Cái ghế', emoji: '💺' },
            { word: 'Bed', meaning: 'Giường', emoji: '🛏️' },
            { word: 'Sofa', meaning: 'Ghế sofa', emoji: '🛋️' },
            { word: 'Lamp', meaning: 'Đèn', emoji: '💡' }
          ]
        },
        {
          id: 503,
          title: 'Kitchen Items',
          titleVi: 'Đồ dùng nhà bếp',
          vocab: [
            { word: 'Cup', meaning: 'Cái cốc', emoji: '☕' },
            { word: 'Plate', meaning: 'Cái đĩa', emoji: '🍽️' },
            { word: 'Spoon', meaning: 'Cái thìa', emoji: '🥄' },
            { word: 'Fork', meaning: 'Cái nĩa', emoji: '🍴' },
            { word: 'Bowl', meaning: 'Cái bát', emoji: '🥣' }
          ]
        },
        {
          id: 504,
          title: 'Clothes',
          titleVi: 'Quần áo',
          vocab: [
            { word: 'Shirt', meaning: 'Áo sơ mi', emoji: '👔' },
            { word: 'Pants', meaning: 'Quần dài', emoji: '👖' },
            { word: 'Dress', meaning: 'Váy', emoji: '👗' },
            { word: 'Shoes', meaning: 'Giày', emoji: '👟' },
            { word: 'Hat', meaning: 'Mũ', emoji: '🎩' }
          ]
        },
        {
          id: 505,
          title: 'Daily Items',
          titleVi: 'Đồ dùng hằng ngày',
          vocab: [
            { word: 'Clock', meaning: 'Đồng hồ', emoji: '⏰' },
            { word: 'Phone', meaning: 'Điện thoại', emoji: '📱' },
            { word: 'Key', meaning: 'Chìa khoá', emoji: '🔑' },
            { word: 'Bag', meaning: 'Cặp sách', emoji: '🎒' },
            { word: 'Umbrella', meaning: 'Cái ô', emoji: '☂️' }
          ]
        }
      ]
    },

    // ═══════════════ STAGE 6: Đồ ăn & Thức uống ═══════════════
    {
      id: 6,
      name: 'Đồ ăn & Thức uống',
      icon: '🍔',
      color: '#00D2D3',
      lessons: [
        {
          id: 601,
          title: 'Fruits',
          titleVi: 'Trái cây',
          vocab: [
            { word: 'Apple', meaning: 'Quả táo', emoji: '🍎' },
            { word: 'Banana', meaning: 'Quả chuối', emoji: '🍌' },
            { word: 'Orange', meaning: 'Quả cam', emoji: '🍊' },
            { word: 'Grape', meaning: 'Quả nho', emoji: '🍇' },
            { word: 'Watermelon', meaning: 'Quả dưa hấu', emoji: '🍉' }
          ]
        },
        {
          id: 602,
          title: 'Vegetables',
          titleVi: 'Rau củ',
          vocab: [
            { word: 'Carrot', meaning: 'Cà rốt', emoji: '🥕' },
            { word: 'Tomato', meaning: 'Cà chua', emoji: '🍅' },
            { word: 'Corn', meaning: 'Bắp ngô', emoji: '🌽' },
            { word: 'Potato', meaning: 'Khoai tây', emoji: '🥔' },
            { word: 'Mushroom', meaning: 'Nấm', emoji: '🍄' }
          ]
        },
        {
          id: 603,
          title: 'Drinks',
          titleVi: 'Thức uống',
          vocab: [
            { word: 'Water', meaning: 'Nước', emoji: '💧' },
            { word: 'Milk', meaning: 'Sữa', emoji: '🥛' },
            { word: 'Juice', meaning: 'Nước ép', emoji: '🧃' },
            { word: 'Tea', meaning: 'Trà', emoji: '🍵' },
            { word: 'Lemonade', meaning: 'Nước chanh', emoji: '🍋' }
          ]
        },
        {
          id: 604,
          title: 'Meals',
          titleVi: 'Bữa ăn',
          vocab: [
            { word: 'Rice', meaning: 'Cơm', emoji: '🍚' },
            { word: 'Bread', meaning: 'Bánh mì', emoji: '🍞' },
            { word: 'Noodle', meaning: 'Mì / Phở', emoji: '🍜' },
            { word: 'Egg', meaning: 'Trứng', emoji: '🥚' },
            { word: 'Chicken', meaning: 'Thịt gà', emoji: '🍗' }
          ]
        },
        {
          id: 605,
          title: 'Snacks & Sweets',
          titleVi: 'Đồ ăn vặt',
          vocab: [
            { word: 'Cake', meaning: 'Bánh kem', emoji: '🎂' },
            { word: 'Candy', meaning: 'Kẹo', emoji: '🍬' },
            { word: 'Ice cream', meaning: 'Kem', emoji: '🍦' },
            { word: 'Cookie', meaning: 'Bánh quy', emoji: '🍪' },
            { word: 'Chocolate', meaning: 'Sô-cô-la', emoji: '🍫' }
          ]
        }
      ]
    },

    // ═══════════════ STAGE 7: Động vật ═══════════════
    {
      id: 7,
      name: 'Động vật',
      icon: '🦁',
      color: '#54A0FF',
      lessons: [
        {
          id: 701,
          title: 'Farm Animals',
          titleVi: 'Động vật trang trại',
          vocab: [
            { word: 'Cow', meaning: 'Con bò', emoji: '🐄' },
            { word: 'Pig', meaning: 'Con lợn', emoji: '🐷' },
            { word: 'Chicken', meaning: 'Con gà', emoji: '🐔' },
            { word: 'Duck', meaning: 'Con vịt', emoji: '🦆' },
            { word: 'Horse', meaning: 'Con ngựa', emoji: '🐴' }
          ]
        },
        {
          id: 702,
          title: 'Wild Animals',
          titleVi: 'Động vật hoang dã',
          vocab: [
            { word: 'Lion', meaning: 'Sư tử', emoji: '🦁' },
            { word: 'Elephant', meaning: 'Con voi', emoji: '🐘' },
            { word: 'Tiger', meaning: 'Con hổ', emoji: '🐯' },
            { word: 'Monkey', meaning: 'Con khỉ', emoji: '🐒' },
            { word: 'Bear', meaning: 'Con gấu', emoji: '🐻' }
          ]
        },
        {
          id: 703,
          title: 'Sea Animals',
          titleVi: 'Động vật biển',
          vocab: [
            { word: 'Dolphin', meaning: 'Cá heo', emoji: '🐬' },
            { word: 'Whale', meaning: 'Cá voi', emoji: '🐳' },
            { word: 'Shark', meaning: 'Cá mập', emoji: '🦈' },
            { word: 'Turtle', meaning: 'Rùa biển', emoji: '🐢' },
            { word: 'Octopus', meaning: 'Bạch tuộc', emoji: '🐙' }
          ]
        },
        {
          id: 704,
          title: 'Insects & Bugs',
          titleVi: 'Côn trùng',
          vocab: [
            { word: 'Butterfly', meaning: 'Con bướm', emoji: '🦋' },
            { word: 'Bee', meaning: 'Con ong', emoji: '🐝' },
            { word: 'Ant', meaning: 'Con kiến', emoji: '🐜' },
            { word: 'Spider', meaning: 'Con nhện', emoji: '🕷️' },
            { word: 'Ladybug', meaning: 'Bọ rùa', emoji: '🐞' }
          ]
        },
        {
          id: 705,
          title: 'Animal Actions',
          titleVi: 'Hành động động vật',
          vocab: [
            { word: 'Fly', meaning: 'Bay', emoji: '🕊️' },
            { word: 'Swim', meaning: 'Bơi', emoji: '🏊' },
            { word: 'Run', meaning: 'Chạy', emoji: '🏃' },
            { word: 'Jump', meaning: 'Nhảy', emoji: '🦘' },
            { word: 'Climb', meaning: 'Leo trèo', emoji: '🧗' }
          ]
        }
      ]
    },

    // ═══════════════ STAGE 8: Hoạt động hằng ngày ═══════════════
    {
      id: 8,
      name: 'Hoạt động hằng ngày',
      icon: '🌅',
      color: '#5F27CD',
      lessons: [
        {
          id: 801,
          title: 'Morning Routine',
          titleVi: 'Buổi sáng',
          vocab: [
            { word: 'Wake up', meaning: 'Thức dậy', emoji: '⏰' },
            { word: 'Brush teeth', meaning: 'Đánh răng', emoji: '🪥' },
            { word: 'Wash face', meaning: 'Rửa mặt', emoji: '🧼' },
            { word: 'Get dressed', meaning: 'Mặc quần áo', emoji: '👕' },
            { word: 'Eat breakfast', meaning: 'Ăn sáng', emoji: '🥣' }
          ]
        },
        {
          id: 802,
          title: 'At School',
          titleVi: 'Ở trường',
          vocab: [
            { word: 'Go to school', meaning: 'Đi học', emoji: '🏫' },
            { word: 'Raise hand', meaning: 'Giơ tay', emoji: '✋' },
            { word: 'Do homework', meaning: 'Làm bài tập', emoji: '📝' },
            { word: 'Take a test', meaning: 'Làm bài kiểm tra', emoji: '📄' },
            { word: 'Learn', meaning: 'Học', emoji: '📖' }
          ]
        },
        {
          id: 803,
          title: 'Afternoon Fun',
          titleVi: 'Buổi chiều',
          vocab: [
            { word: 'Watch TV', meaning: 'Xem tivi', emoji: '📺' },
            { word: 'Play sports', meaning: 'Chơi thể thao', emoji: '⚽' },
            { word: 'Ride a bike', meaning: 'Đi xe đạp', emoji: '🚲' },
            { word: 'Paint', meaning: 'Vẽ tranh', emoji: '🎨' },
            { word: 'Play games', meaning: 'Chơi trò chơi', emoji: '🎮' }
          ]
        },
        {
          id: 804,
          title: 'Evening Time',
          titleVi: 'Buổi tối',
          vocab: [
            { word: 'Eat dinner', meaning: 'Ăn tối', emoji: '🍽️' },
            { word: 'Take a bath', meaning: 'Tắm', emoji: '🛁' },
            { word: 'Read a book', meaning: 'Đọc sách', emoji: '📚' },
            { word: 'Go to bed', meaning: 'Đi ngủ', emoji: '🛌' },
            { word: 'Say goodnight', meaning: 'Chúc ngủ ngon', emoji: '🌙' }
          ]
        },
        {
          id: 805,
          title: 'Weekend',
          titleVi: 'Cuối tuần',
          vocab: [
            { word: 'Go shopping', meaning: 'Đi mua sắm', emoji: '🛍️' },
            { word: 'Visit grandma', meaning: 'Thăm bà', emoji: '👵' },
            { word: 'Go to the park', meaning: 'Đi công viên', emoji: '🌳' },
            { word: 'Have a picnic', meaning: 'Đi dã ngoại', emoji: '🧺' },
            { word: 'Clean the house', meaning: 'Dọn nhà', emoji: '🧹' }
          ]
        }
      ]
    },

    // ═══════════════ STAGE 9: Thời gian & Thời tiết ═══════════════
    {
      id: 9,
      name: 'Thời gian & Thời tiết',
      icon: '⛅',
      color: '#01A3A4',
      lessons: [
        {
          id: 901,
          title: 'Days of the Week',
          titleVi: 'Các ngày trong tuần',
          vocab: [
            { word: 'Monday', meaning: 'Thứ Hai', emoji: '1️⃣' },
            { word: 'Tuesday', meaning: 'Thứ Ba', emoji: '2️⃣' },
            { word: 'Wednesday', meaning: 'Thứ Tư', emoji: '3️⃣' },
            { word: 'Thursday', meaning: 'Thứ Năm', emoji: '4️⃣' },
            { word: 'Friday', meaning: 'Thứ Sáu', emoji: '5️⃣' }
          ]
        },
        {
          id: 902,
          title: 'Months & Seasons',
          titleVi: 'Tháng & Mùa',
          vocab: [
            { word: 'Spring', meaning: 'Mùa xuân', emoji: '🌸' },
            { word: 'Summer', meaning: 'Mùa hè', emoji: '☀️' },
            { word: 'Autumn', meaning: 'Mùa thu', emoji: '🍂' },
            { word: 'Winter', meaning: 'Mùa đông', emoji: '❄️' },
            { word: 'January', meaning: 'Tháng Một', emoji: '📅' }
          ]
        },
        {
          id: 903,
          title: 'Weather',
          titleVi: 'Thời tiết',
          vocab: [
            { word: 'Sunny', meaning: 'Nắng', emoji: '☀️' },
            { word: 'Rainy', meaning: 'Mưa', emoji: '🌧️' },
            { word: 'Cloudy', meaning: 'Nhiều mây', emoji: '☁️' },
            { word: 'Windy', meaning: 'Có gió', emoji: '💨' },
            { word: 'Stormy', meaning: 'Có bão', emoji: '⛈️' }
          ]
        },
        {
          id: 904,
          title: 'Telling Time',
          titleVi: 'Xem giờ',
          vocab: [
            { word: 'Morning', meaning: 'Buổi sáng', emoji: '🌅' },
            { word: 'Afternoon', meaning: 'Buổi chiều', emoji: '🌤️' },
            { word: 'Evening', meaning: 'Buổi tối', emoji: '🌆' },
            { word: 'Night', meaning: 'Ban đêm', emoji: '🌙' },
            { word: 'Midnight', meaning: 'Nửa đêm', emoji: '🕛' }
          ]
        },
        {
          id: 905,
          title: 'Nature',
          titleVi: 'Thiên nhiên',
          vocab: [
            { word: 'Sun', meaning: 'Mặt trời', emoji: '☀️' },
            { word: 'Moon', meaning: 'Mặt trăng', emoji: '🌙' },
            { word: 'Rainbow', meaning: 'Cầu vồng', emoji: '🌈' },
            { word: 'River', meaning: 'Dòng sông', emoji: '🏞️' },
            { word: 'Mountain', meaning: 'Ngọn núi', emoji: '⛰️' }
          ]
        }
      ]
    },

    // ═══════════════ STAGE 10: Giao tiếp nâng cao ═══════════════
    {
      id: 10,
      name: 'Giao tiếp nâng cao',
      icon: '🎓',
      color: '#F368E0',
      lessons: [
        {
          id: 1001,
          title: 'Asking Questions',
          titleVi: 'Đặt câu hỏi',
          vocab: [
            { word: 'What', meaning: 'Cái gì', emoji: '❓' },
            { word: 'Where', meaning: 'Ở đâu', emoji: '📍' },
            { word: 'When', meaning: 'Khi nào', emoji: '⏰' },
            { word: 'Who', meaning: 'Ai', emoji: '👤' },
            { word: 'How', meaning: 'Như thế nào', emoji: '🤔' }
          ]
        },
        {
          id: 1002,
          title: 'Directions',
          titleVi: 'Chỉ đường',
          vocab: [
            { word: 'Left', meaning: 'Bên trái', emoji: '⬅️' },
            { word: 'Right', meaning: 'Bên phải', emoji: '➡️' },
            { word: 'Straight', meaning: 'Thẳng', emoji: '⬆️' },
            { word: 'Near', meaning: 'Gần', emoji: '📍' },
            { word: 'Far', meaning: 'Xa', emoji: '🗺️' }
          ]
        },
        {
          id: 1003,
          title: 'Shopping',
          titleVi: 'Mua sắm',
          vocab: [
            { word: 'Buy', meaning: 'Mua', emoji: '🛒' },
            { word: 'Sell', meaning: 'Bán', emoji: '💰' },
            { word: 'Price', meaning: 'Giá', emoji: '🏷️' },
            { word: 'Cheap', meaning: 'Rẻ', emoji: '👍' },
            { word: 'Expensive', meaning: 'Đắt', emoji: '💎' }
          ]
        },
        {
          id: 1004,
          title: 'Jobs',
          titleVi: 'Nghề nghiệp',
          vocab: [
            { word: 'Doctor', meaning: 'Bác sĩ', emoji: '👨‍⚕️' },
            { word: 'Police', meaning: 'Cảnh sát', emoji: '👮' },
            { word: 'Firefighter', meaning: 'Lính cứu hoả', emoji: '🧑‍🚒' },
            { word: 'Chef', meaning: 'Đầu bếp', emoji: '👨‍🍳' },
            { word: 'Pilot', meaning: 'Phi công', emoji: '👨‍✈️' }
          ]
        },
        {
          id: 1005,
          title: 'Travel',
          titleVi: 'Du lịch',
          vocab: [
            { word: 'Airport', meaning: 'Sân bay', emoji: '✈️' },
            { word: 'Hotel', meaning: 'Khách sạn', emoji: '🏨' },
            { word: 'Beach', meaning: 'Bãi biển', emoji: '🏖️' },
            { word: 'Map', meaning: 'Bản đồ', emoji: '🗺️' },
            { word: 'Ticket', meaning: 'Vé', emoji: '🎫' }
          ]
        }
      ]
    }
  ],

  // ──────────────────────────────────────────────────────────
  // 2. ALPHABET - Bảng chữ cái A-Z (26 letters)
  // ──────────────────────────────────────────────────────────
  alphabet: [
    { letter: 'A', upper: 'A', lower: 'a', word: 'Apple', meaning: 'Quả táo', emoji: '🍎', phonetic: '/æ/' },
    { letter: 'B', upper: 'B', lower: 'b', word: 'Bear', meaning: 'Con gấu', emoji: '🐻', phonetic: '/biː/' },
    { letter: 'C', upper: 'C', lower: 'c', word: 'Cat', meaning: 'Con mèo', emoji: '🐱', phonetic: '/siː/' },
    { letter: 'D', upper: 'D', lower: 'd', word: 'Dog', meaning: 'Con chó', emoji: '🐶', phonetic: '/diː/' },
    { letter: 'E', upper: 'E', lower: 'e', word: 'Elephant', meaning: 'Con voi', emoji: '🐘', phonetic: '/iː/' },
    { letter: 'F', upper: 'F', lower: 'f', word: 'Fish', meaning: 'Con cá', emoji: '🐟', phonetic: '/ɛf/' },
    { letter: 'G', upper: 'G', lower: 'g', word: 'Grape', meaning: 'Quả nho', emoji: '🍇', phonetic: '/dʒiː/' },
    { letter: 'H', upper: 'H', lower: 'h', word: 'House', meaning: 'Ngôi nhà', emoji: '🏠', phonetic: '/eɪtʃ/' },
    { letter: 'I', upper: 'I', lower: 'i', word: 'Ice cream', meaning: 'Kem', emoji: '🍦', phonetic: '/aɪ/' },
    { letter: 'J', upper: 'J', lower: 'j', word: 'Juice', meaning: 'Nước ép', emoji: '🧃', phonetic: '/dʒeɪ/' },
    { letter: 'K', upper: 'K', lower: 'k', word: 'Kite', meaning: 'Con diều', emoji: '🪁', phonetic: '/keɪ/' },
    { letter: 'L', upper: 'L', lower: 'l', word: 'Lion', meaning: 'Sư tử', emoji: '🦁', phonetic: '/ɛl/' },
    { letter: 'M', upper: 'M', lower: 'm', word: 'Moon', meaning: 'Mặt trăng', emoji: '🌙', phonetic: '/ɛm/' },
    { letter: 'N', upper: 'N', lower: 'n', word: 'Nest', meaning: 'Tổ chim', emoji: '🪺', phonetic: '/ɛn/' },
    { letter: 'O', upper: 'O', lower: 'o', word: 'Orange', meaning: 'Quả cam', emoji: '🍊', phonetic: '/oʊ/' },
    { letter: 'P', upper: 'P', lower: 'p', word: 'Penguin', meaning: 'Chim cánh cụt', emoji: '🐧', phonetic: '/piː/' },
    { letter: 'Q', upper: 'Q', lower: 'q', word: 'Queen', meaning: 'Nữ hoàng', emoji: '👸', phonetic: '/kjuː/' },
    { letter: 'R', upper: 'R', lower: 'r', word: 'Rabbit', meaning: 'Con thỏ', emoji: '🐰', phonetic: '/ɑːr/' },
    { letter: 'S', upper: 'S', lower: 's', word: 'Sun', meaning: 'Mặt trời', emoji: '☀️', phonetic: '/ɛs/' },
    { letter: 'T', upper: 'T', lower: 't', word: 'Tiger', meaning: 'Con hổ', emoji: '🐯', phonetic: '/tiː/' },
    { letter: 'U', upper: 'U', lower: 'u', word: 'Umbrella', meaning: 'Cái ô', emoji: '☂️', phonetic: '/juː/' },
    { letter: 'V', upper: 'V', lower: 'v', word: 'Violin', meaning: 'Đàn vĩ cầm', emoji: '🎻', phonetic: '/viː/' },
    { letter: 'W', upper: 'W', lower: 'w', word: 'Whale', meaning: 'Cá voi', emoji: '🐳', phonetic: '/ˈdʌbəljuː/' },
    { letter: 'X', upper: 'X', lower: 'x', word: 'Xylophone', meaning: 'Đàn phím gỗ', emoji: '🎵', phonetic: '/ɛks/' },
    { letter: 'Y', upper: 'Y', lower: 'y', word: 'Yogurt', meaning: 'Sữa chua', emoji: '🥛', phonetic: '/waɪ/' },
    { letter: 'Z', upper: 'Z', lower: 'z', word: 'Zebra', meaning: 'Ngựa vằn', emoji: '🦓', phonetic: '/ziː/' }
  ],

  // ──────────────────────────────────────────────────────────
  // 3. DIALOGUES - 8 conversation practice dialogues
  // ──────────────────────────────────────────────────────────
  dialogues: [
    // --- Dialogue 1: Greeting ---
    {
      id: 'dlg_greeting',
      title: 'Meeting a New Friend',
      titleVi: 'Gặp bạn mới',
      level: 'Beginner',
      icon: '👋',
      lines: [
        { speaker: 'An', text: 'Hello! My name is An.', translation: 'Xin chào! Mình tên là An.', emoji: '👋' },
        { speaker: 'Bee', text: 'Hi An! I am Bee. Nice to meet you!', translation: 'Chào An! Mình là Bee. Rất vui được gặp bạn!', emoji: '🐝' },
        { speaker: 'An', text: 'Nice to meet you too! How are you?', translation: 'Mình cũng rất vui! Bạn khoẻ không?', emoji: '😊' },
        { speaker: 'Bee', text: 'I am fine, thank you! And you?', translation: 'Mình khoẻ, cảm ơn bạn! Còn bạn?', emoji: '😄' },
        { speaker: 'An', text: 'I am great! Do you want to play?', translation: 'Mình rất khoẻ! Bạn có muốn chơi không?', emoji: '🎮' },
        { speaker: 'Bee', text: 'Yes, let\'s play together!', translation: 'Có, chúng mình cùng chơi nhé!', emoji: '🤝' },
        { speaker: 'An', text: 'Yay! You are my new friend!', translation: 'Hoan hô! Bạn là bạn mới của mình!', emoji: '🎉' },
        { speaker: 'Bee', text: 'Best friends forever!', translation: 'Bạn thân mãi mãi!', emoji: '💛' }
      ]
    },

    // --- Dialogue 2: School ---
    {
      id: 'dlg_school',
      title: 'First Day at School',
      titleVi: 'Ngày đầu đi học',
      level: 'Beginner',
      icon: '🏫',
      lines: [
        { speaker: 'Teacher', text: 'Good morning, class!', translation: 'Chào buổi sáng, cả lớp!', emoji: '👩‍🏫' },
        { speaker: 'Students', text: 'Good morning, Teacher!', translation: 'Chào buổi sáng, cô ạ!', emoji: '👦👧' },
        { speaker: 'Teacher', text: 'Today we have a new student. Please say hello!', translation: 'Hôm nay chúng ta có bạn mới. Hãy chào bạn nhé!', emoji: '🌟' },
        { speaker: 'Minh', text: 'Hello! My name is Minh. I am seven years old.', translation: 'Xin chào! Em tên là Minh. Em bảy tuổi.', emoji: '👦' },
        { speaker: 'Teacher', text: 'Welcome, Minh! Please sit here.', translation: 'Chào mừng Minh! Em hãy ngồi đây nhé.', emoji: '💺' },
        { speaker: 'Lan', text: 'Hi Minh! I am Lan. Let me help you!', translation: 'Chào Minh! Mình là Lan. Để mình giúp bạn nhé!', emoji: '👧' },
        { speaker: 'Minh', text: 'Thank you, Lan! What subject do we have now?', translation: 'Cảm ơn Lan! Bây giờ mình học môn gì?', emoji: '📚' },
        { speaker: 'Lan', text: 'We have English! It is very fun!', translation: 'Mình học tiếng Anh! Vui lắm!', emoji: '🇬🇧' }
      ]
    },

    // --- Dialogue 3: Family ---
    {
      id: 'dlg_family',
      title: 'My Family',
      titleVi: 'Gia đình của em',
      level: 'Beginner',
      icon: '👨‍👩‍👧‍👦',
      lines: [
        { speaker: 'An', text: 'This is my family photo!', translation: 'Đây là ảnh gia đình mình!', emoji: '📸' },
        { speaker: 'Bee', text: 'Wow! Who is this?', translation: 'Ồ! Đây là ai vậy?', emoji: '👀' },
        { speaker: 'An', text: 'This is my mother. She is a teacher.', translation: 'Đây là mẹ mình. Mẹ là giáo viên.', emoji: '👩‍🏫' },
        { speaker: 'Bee', text: 'And this man?', translation: 'Còn người đàn ông này?', emoji: '🤔' },
        { speaker: 'An', text: 'That is my father. He is a doctor.', translation: 'Đó là bố mình. Bố là bác sĩ.', emoji: '👨‍⚕️' },
        { speaker: 'Bee', text: 'Do you have brothers or sisters?', translation: 'Bạn có anh chị em không?', emoji: '👦👧' },
        { speaker: 'An', text: 'Yes! I have a little sister. She is three years old.', translation: 'Có! Mình có em gái. Em ấy ba tuổi.', emoji: '👶' },
        { speaker: 'Bee', text: 'Your family is lovely!', translation: 'Gia đình bạn thật đáng yêu!', emoji: '❤️' }
      ]
    },

    // --- Dialogue 4: Shopping ---
    {
      id: 'dlg_shopping',
      title: 'At the Toy Store',
      titleVi: 'Ở tiệm đồ chơi',
      level: 'Elementary',
      icon: '🛍️',
      lines: [
        { speaker: 'Minh', text: 'Mom, can I buy a toy?', translation: 'Mẹ ơi, con mua đồ chơi được không?', emoji: '🧸' },
        { speaker: 'Mom', text: 'Sure! What do you want?', translation: 'Được! Con muốn mua gì?', emoji: '👩' },
        { speaker: 'Minh', text: 'I want this robot. How much is it?', translation: 'Con muốn con robot này. Nó bao nhiêu tiền ạ?', emoji: '🤖' },
        { speaker: 'Seller', text: 'It is fifty thousand dong.', translation: 'Nó năm mươi nghìn đồng.', emoji: '💰' },
        { speaker: 'Mom', text: 'That is okay. We will take it!', translation: 'Được đó. Chúng tôi mua nó!', emoji: '✅' },
        { speaker: 'Seller', text: 'Here you go! Thank you!', translation: 'Đây ạ! Cảm ơn bạn!', emoji: '🎁' },
        { speaker: 'Minh', text: 'Thank you, Mom! I love it!', translation: 'Cảm ơn mẹ! Con thích lắm!', emoji: '🥰' }
      ]
    },

    // --- Dialogue 5: Restaurant ---
    {
      id: 'dlg_restaurant',
      title: 'Ordering Food',
      titleVi: 'Gọi đồ ăn',
      level: 'Elementary',
      icon: '🍽️',
      lines: [
        { speaker: 'Waiter', text: 'Welcome! Here is the menu.', translation: 'Chào mừng! Đây là thực đơn ạ.', emoji: '📋' },
        { speaker: 'Dad', text: 'Thank you! What do you want, Lan?', translation: 'Cảm ơn! Con muốn ăn gì, Lan?', emoji: '👨' },
        { speaker: 'Lan', text: 'I want chicken and rice, please.', translation: 'Con muốn cơm gà ạ.', emoji: '🍗' },
        { speaker: 'Dad', text: 'And I want noodle soup. What about drinks?', translation: 'Còn bố muốn phở. Uống gì nhỉ?', emoji: '🍜' },
        { speaker: 'Lan', text: 'Orange juice, please!', translation: 'Nước cam ạ!', emoji: '🍊' },
        { speaker: 'Waiter', text: 'Chicken rice, noodle soup, and orange juice. Anything else?', translation: 'Cơm gà, phở, và nước cam. Còn gì nữa không ạ?', emoji: '📝' },
        { speaker: 'Dad', text: 'No, that is all. Thank you!', translation: 'Không, vậy thôi ạ. Cảm ơn!', emoji: '👍' },
        { speaker: 'Waiter', text: 'Your food will be ready soon!', translation: 'Món ăn sẽ sẵn sàng ngay ạ!', emoji: '⏳' }
      ]
    },

    // --- Dialogue 6: Playground ---
    {
      id: 'dlg_playground',
      title: 'At the Playground',
      titleVi: 'Ở sân chơi',
      level: 'Beginner',
      icon: '🎠',
      lines: [
        { speaker: 'An', text: 'Let\'s go to the playground!', translation: 'Chúng mình ra sân chơi đi!', emoji: '🏃' },
        { speaker: 'Bee', text: 'Great idea! I love the swing!', translation: 'Ý hay! Mình thích xích đu!', emoji: '🎠' },
        { speaker: 'An', text: 'I want to go on the slide first!', translation: 'Mình muốn chơi cầu trượt trước!', emoji: '🛝' },
        { speaker: 'Bee', text: 'Be careful! It is very fast!', translation: 'Cẩn thận nhé! Nó nhanh lắm!', emoji: '⚠️' },
        { speaker: 'An', text: 'Whee! That was so fun!', translation: 'Wheee! Vui quá!', emoji: '😆' },
        { speaker: 'Bee', text: 'Now let\'s play on the seesaw!', translation: 'Giờ chơi bập bênh đi!', emoji: '⚖️' },
        { speaker: 'An', text: 'Okay! Up and down, up and down!', translation: 'Được! Lên xuống, lên xuống!', emoji: '🔄' },
        { speaker: 'Bee', text: 'Haha! This is the best day ever!', translation: 'Haha! Hôm nay vui nhất luôn!', emoji: '🌟' }
      ]
    },

    // --- Dialogue 7: Birthday ---
    {
      id: 'dlg_birthday',
      title: 'Happy Birthday!',
      titleVi: 'Chúc mừng sinh nhật!',
      level: 'Elementary',
      icon: '🎂',
      lines: [
        { speaker: 'Friends', text: 'Surprise! Happy birthday, Lan!', translation: 'Bất ngờ! Chúc mừng sinh nhật Lan!', emoji: '🎉' },
        { speaker: 'Lan', text: 'Oh wow! Thank you so much!', translation: 'Ôi! Cảm ơn các bạn rất nhiều!', emoji: '🥰' },
        { speaker: 'Minh', text: 'Here is a gift for you!', translation: 'Đây là quà cho bạn nè!', emoji: '🎁' },
        { speaker: 'Lan', text: 'Thank you, Minh! Can I open it?', translation: 'Cảm ơn Minh! Mình mở ra được không?', emoji: '🎀' },
        { speaker: 'Minh', text: 'Yes, open it! I hope you like it!', translation: 'Được, mở đi! Mình hy vọng bạn thích!', emoji: '✨' },
        { speaker: 'Lan', text: 'A teddy bear! I love it!', translation: 'Gấu bông! Mình thích lắm!', emoji: '🧸' },
        { speaker: 'Mom', text: 'Time to blow out the candles! Make a wish!', translation: 'Đến lúc thổi nến! Hãy ước điều gì đi!', emoji: '🕯️' },
        { speaker: 'Everyone', text: 'Happy birthday to you! 🎶', translation: 'Chúc mừng sinh nhật bạn! 🎶', emoji: '🎂' }
      ]
    },

    // --- Dialogue 8: Doctor ---
    {
      id: 'dlg_doctor',
      title: 'Visiting the Doctor',
      titleVi: 'Đi khám bác sĩ',
      level: 'Elementary',
      icon: '🏥',
      lines: [
        { speaker: 'Mom', text: 'Good morning, Doctor!', translation: 'Chào buổi sáng, Bác sĩ!', emoji: '👩' },
        { speaker: 'Doctor', text: 'Good morning! What is wrong?', translation: 'Chào buổi sáng! Có chuyện gì vậy?', emoji: '👨‍⚕️' },
        { speaker: 'Mom', text: 'My son has a headache and a fever.', translation: 'Con trai tôi bị đau đầu và sốt.', emoji: '🤒' },
        { speaker: 'Doctor', text: 'Let me check. Open your mouth, please.', translation: 'Để bác sĩ kiểm tra. Há miệng ra nào.', emoji: '👄' },
        { speaker: 'An', text: 'Ahhh...', translation: 'Ahhh...', emoji: '😮' },
        { speaker: 'Doctor', text: 'You have a cold. You need to rest and drink water.', translation: 'Con bị cảm. Con cần nghỉ ngơi và uống nước.', emoji: '💊' },
        { speaker: 'An', text: 'Thank you, Doctor! I will rest at home.', translation: 'Cảm ơn Bác sĩ! Con sẽ nghỉ ở nhà.', emoji: '🏠' },
        { speaker: 'Doctor', text: 'Get well soon! Here is some medicine.', translation: 'Chúc con mau khoẻ! Đây là thuốc.', emoji: '💊' }
      ]
    }
  ],

  // ──────────────────────────────────────────────────────────
  // 4. LISTENING PASSAGES - 6 comprehension passages
  // ──────────────────────────────────────────────────────────
  listeningPassages: [
    {
      id: 'lp_myroom',
      title: 'My Room',
      titleVi: 'Phòng của em',
      level: 'Beginner',
      icon: '🛏️',
      text: 'This is my room. I have a big bed. My teddy bear is on the bed. There is a desk near the window. I study and draw at my desk. I love my room!',
      translation: 'Đây là phòng của em. Em có một chiếc giường lớn. Gấu bông nằm trên giường. Có một cái bàn gần cửa sổ. Em học bài và vẽ ở bàn. Em yêu phòng của em!',
      questions: [
        {
          question: 'What is on the bed?',
          questionVi: 'Cái gì ở trên giường?',
          options: [
            { text: 'A pillow', isCorrect: false },
            { text: 'A teddy bear', isCorrect: true },
            { text: 'A book', isCorrect: false },
            { text: 'A cat', isCorrect: false }
          ]
        },
        {
          question: 'Where is the desk?',
          questionVi: 'Cái bàn ở đâu?',
          options: [
            { text: 'Near the door', isCorrect: false },
            { text: 'Near the bed', isCorrect: false },
            { text: 'Near the window', isCorrect: true },
            { text: 'In the kitchen', isCorrect: false }
          ]
        },
        {
          question: 'What does the child do at the desk?',
          questionVi: 'Bạn nhỏ làm gì ở bàn?',
          options: [
            { text: 'Sleep and eat', isCorrect: false },
            { text: 'Study and draw', isCorrect: true },
            { text: 'Cook and clean', isCorrect: false },
            { text: 'Sing and dance', isCorrect: false }
          ]
        }
      ]
    },
    {
      id: 'lp_mypet',
      title: 'My Pet Dog',
      titleVi: 'Chú chó của em',
      level: 'Beginner',
      icon: '🐕',
      text: 'I have a pet dog. His name is Lucky. Lucky is brown and white. He likes to run in the park. He eats dog food and drinks water. Lucky is my best friend!',
      translation: 'Em có một chú chó cưng. Nó tên là Lucky. Lucky có màu nâu và trắng. Nó thích chạy trong công viên. Nó ăn thức ăn cho chó và uống nước. Lucky là bạn thân nhất của em!',
      questions: [
        {
          question: 'What is the dog\'s name?',
          questionVi: 'Chú chó tên gì?',
          options: [
            { text: 'Buddy', isCorrect: false },
            { text: 'Lucky', isCorrect: true },
            { text: 'Max', isCorrect: false },
            { text: 'Rex', isCorrect: false }
          ]
        },
        {
          question: 'What color is Lucky?',
          questionVi: 'Lucky màu gì?',
          options: [
            { text: 'Black and white', isCorrect: false },
            { text: 'Brown and black', isCorrect: false },
            { text: 'Brown and white', isCorrect: true },
            { text: 'All white', isCorrect: false }
          ]
        },
        {
          question: 'Where does Lucky like to run?',
          questionVi: 'Lucky thích chạy ở đâu?',
          options: [
            { text: 'In the house', isCorrect: false },
            { text: 'In the park', isCorrect: true },
            { text: 'At school', isCorrect: false },
            { text: 'In the kitchen', isCorrect: false }
          ]
        }
      ]
    },
    {
      id: 'lp_school',
      title: 'My School Day',
      titleVi: 'Ngày đi học của em',
      level: 'Elementary',
      icon: '🏫',
      text: 'I go to school every day. My school starts at seven thirty. I have four classes in the morning. My favorite subject is English. I eat lunch at the canteen with my friends. After school, I play on the playground.',
      translation: 'Em đi học mỗi ngày. Trường em bắt đầu lúc bảy giờ ba mươi. Em có bốn tiết học buổi sáng. Môn em thích nhất là tiếng Anh. Em ăn trưa ở nhà ăn với bạn bè. Sau giờ học, em chơi ở sân trường.',
      questions: [
        {
          question: 'What time does school start?',
          questionVi: 'Trường học bắt đầu lúc mấy giờ?',
          options: [
            { text: 'Seven o\'clock', isCorrect: false },
            { text: 'Seven thirty', isCorrect: true },
            { text: 'Eight o\'clock', isCorrect: false },
            { text: 'Six thirty', isCorrect: false }
          ]
        },
        {
          question: 'What is the child\'s favorite subject?',
          questionVi: 'Môn học yêu thích của bạn nhỏ là gì?',
          options: [
            { text: 'Math', isCorrect: false },
            { text: 'Science', isCorrect: false },
            { text: 'English', isCorrect: true },
            { text: 'Art', isCorrect: false }
          ]
        },
        {
          question: 'Where does the child eat lunch?',
          questionVi: 'Bạn nhỏ ăn trưa ở đâu?',
          options: [
            { text: 'In the classroom', isCorrect: false },
            { text: 'At home', isCorrect: false },
            { text: 'At the canteen', isCorrect: true },
            { text: 'At the park', isCorrect: false }
          ]
        }
      ]
    },
    {
      id: 'lp_birthday',
      title: 'A Birthday Party',
      titleVi: 'Tiệc sinh nhật',
      level: 'Elementary',
      icon: '🎂',
      text: 'Today is Lan\'s birthday. She is eight years old. Her friends come to her house. They bring gifts and flowers. Lan\'s mom makes a big chocolate cake. They sing "Happy Birthday" and eat cake together. Everyone is very happy!',
      translation: 'Hôm nay là sinh nhật Lan. Bạn ấy tám tuổi. Bạn bè đến nhà bạn ấy. Họ mang quà và hoa. Mẹ Lan làm một chiếc bánh sô-cô-la lớn. Họ hát "Chúc mừng sinh nhật" và cùng ăn bánh. Mọi người rất vui!',
      questions: [
        {
          question: 'How old is Lan?',
          questionVi: 'Lan bao nhiêu tuổi?',
          options: [
            { text: 'Seven years old', isCorrect: false },
            { text: 'Eight years old', isCorrect: true },
            { text: 'Nine years old', isCorrect: false },
            { text: 'Ten years old', isCorrect: false }
          ]
        },
        {
          question: 'What kind of cake does Lan\'s mom make?',
          questionVi: 'Mẹ Lan làm bánh gì?',
          options: [
            { text: 'Strawberry cake', isCorrect: false },
            { text: 'Vanilla cake', isCorrect: false },
            { text: 'Chocolate cake', isCorrect: true },
            { text: 'Banana cake', isCorrect: false }
          ]
        },
        {
          question: 'What do the friends bring?',
          questionVi: 'Bạn bè mang gì đến?',
          options: [
            { text: 'Toys and books', isCorrect: false },
            { text: 'Gifts and flowers', isCorrect: true },
            { text: 'Food and drinks', isCorrect: false },
            { text: 'Clothes and shoes', isCorrect: false }
          ]
        }
      ]
    },
    {
      id: 'lp_zoo',
      title: 'A Day at the Zoo',
      titleVi: 'Một ngày ở sở thú',
      level: 'Elementary',
      icon: '🦁',
      text: 'My family goes to the zoo on Sunday. We see many animals. The elephants are very big. The monkeys are funny and they jump a lot. I like the penguins the most because they are cute. We take many photos and buy ice cream.',
      translation: 'Gia đình em đi sở thú vào Chủ nhật. Chúng em thấy nhiều động vật. Những con voi rất to. Những con khỉ rất hài hước và chúng nhảy nhiều. Em thích chim cánh cụt nhất vì chúng đáng yêu. Chúng em chụp nhiều ảnh và mua kem.',
      questions: [
        {
          question: 'When does the family go to the zoo?',
          questionVi: 'Gia đình đi sở thú vào ngày nào?',
          options: [
            { text: 'Saturday', isCorrect: false },
            { text: 'Sunday', isCorrect: true },
            { text: 'Monday', isCorrect: false },
            { text: 'Friday', isCorrect: false }
          ]
        },
        {
          question: 'What animal does the child like the most?',
          questionVi: 'Bạn nhỏ thích con vật nào nhất?',
          options: [
            { text: 'Elephants', isCorrect: false },
            { text: 'Monkeys', isCorrect: false },
            { text: 'Penguins', isCorrect: true },
            { text: 'Lions', isCorrect: false }
          ]
        },
        {
          question: 'What do they buy at the zoo?',
          questionVi: 'Họ mua gì ở sở thú?',
          options: [
            { text: 'Toys', isCorrect: false },
            { text: 'Books', isCorrect: false },
            { text: 'Candy', isCorrect: false },
            { text: 'Ice cream', isCorrect: true }
          ]
        }
      ]
    },
    {
      id: 'lp_weekend',
      title: 'A Fun Weekend',
      titleVi: 'Cuối tuần vui vẻ',
      level: 'Elementary',
      icon: '🌞',
      text: 'Last weekend was great! On Saturday morning, I helped my mom clean the house. In the afternoon, I rode my bike to the park with my friend Minh. On Sunday, we visited grandma. She cooked delicious food for us. I had a lot of fun!',
      translation: 'Cuối tuần vừa rồi thật tuyệt! Sáng thứ Bảy, em giúp mẹ dọn nhà. Buổi chiều, em đạp xe đến công viên với bạn Minh. Chủ nhật, chúng em đến thăm bà. Bà nấu đồ ăn ngon cho chúng em. Em vui lắm!',
      questions: [
        {
          question: 'What did the child do on Saturday morning?',
          questionVi: 'Bạn nhỏ làm gì sáng thứ Bảy?',
          options: [
            { text: 'Played games', isCorrect: false },
            { text: 'Went to school', isCorrect: false },
            { text: 'Helped mom clean the house', isCorrect: true },
            { text: 'Watched TV', isCorrect: false }
          ]
        },
        {
          question: 'How did the child go to the park?',
          questionVi: 'Bạn nhỏ đi công viên bằng gì?',
          options: [
            { text: 'By car', isCorrect: false },
            { text: 'By bike', isCorrect: true },
            { text: 'On foot', isCorrect: false },
            { text: 'By bus', isCorrect: false }
          ]
        },
        {
          question: 'Who did they visit on Sunday?',
          questionVi: 'Chủ nhật họ đi thăm ai?',
          options: [
            { text: 'A friend', isCorrect: false },
            { text: 'The teacher', isCorrect: false },
            { text: 'Grandma', isCorrect: true },
            { text: 'Uncle', isCorrect: false }
          ]
        }
      ]
    }
  ],

  // ──────────────────────────────────────────────────────────
  // 5. COMMUNICATION PHRASES - 6 groups
  // ──────────────────────────────────────────────────────────
  communicationPhrases: [
    // --- Group 1: Greetings ---
    {
      id: 'cp_greetings',
      title: 'Chào hỏi',
      titleVi: 'Chào hỏi hằng ngày',
      icon: '👋',
      color: '#FF6B6B',
      phrases: [
        { phrase: 'Good morning!', meaning: 'Chào buổi sáng!', example: 'Good morning, Teacher!', exampleVi: 'Chào buổi sáng, Cô giáo!', emoji: '🌅' },
        { phrase: 'Good afternoon!', meaning: 'Chào buổi chiều!', example: 'Good afternoon, Mom!', exampleVi: 'Chào buổi chiều, Mẹ!', emoji: '🌤️' },
        { phrase: 'Good evening!', meaning: 'Chào buổi tối!', example: 'Good evening, everyone!', exampleVi: 'Chào buổi tối, mọi người!', emoji: '🌆' },
        { phrase: 'How are you?', meaning: 'Bạn khoẻ không?', example: 'Hi Lan! How are you?', exampleVi: 'Chào Lan! Bạn khoẻ không?', emoji: '😊' },
        { phrase: 'See you later!', meaning: 'Hẹn gặp lại!', example: 'Bye! See you later!', exampleVi: 'Tạm biệt! Hẹn gặp lại!', emoji: '👋' },
        { phrase: 'Nice to meet you!', meaning: 'Rất vui được gặp bạn!', example: 'I am An. Nice to meet you!', exampleVi: 'Mình là An. Rất vui được gặp bạn!', emoji: '🤝' }
      ]
    },

    // --- Group 2: At School ---
    {
      id: 'cp_school',
      title: 'Ở trường',
      titleVi: 'Giao tiếp ở trường',
      icon: '🏫',
      color: '#48DBFB',
      phrases: [
        { phrase: 'May I go to the toilet?', meaning: 'Em có thể đi vệ sinh không ạ?', example: 'Teacher, may I go to the toilet?', exampleVi: 'Cô ơi, em có thể đi vệ sinh không ạ?', emoji: '🙋' },
        { phrase: 'I don\'t understand.', meaning: 'Em không hiểu ạ.', example: 'Sorry, I don\'t understand this question.', exampleVi: 'Xin lỗi, em không hiểu câu hỏi này ạ.', emoji: '🤔' },
        { phrase: 'Can you help me?', meaning: 'Bạn giúp mình được không?', example: 'Can you help me with this homework?', exampleVi: 'Bạn giúp mình bài tập này được không?', emoji: '🆘' },
        { phrase: 'What page is it?', meaning: 'Trang bao nhiêu ạ?', example: 'Teacher, what page is it?', exampleVi: 'Cô ơi, trang bao nhiêu ạ?', emoji: '📖' },
        { phrase: 'Can I borrow your pen?', meaning: 'Cho mình mượn bút được không?', example: 'Minh, can I borrow your pen?', exampleVi: 'Minh ơi, cho mình mượn bút được không?', emoji: '🖊️' },
        { phrase: 'Let\'s work together!', meaning: 'Chúng mình cùng làm nhé!', example: 'This is a group project. Let\'s work together!', exampleVi: 'Đây là bài nhóm. Chúng mình cùng làm nhé!', emoji: '👫' }
      ]
    },

    // --- Group 3: Shopping ---
    {
      id: 'cp_shopping',
      title: 'Mua sắm',
      titleVi: 'Đi mua sắm',
      icon: '🛒',
      color: '#FF9F43',
      phrases: [
        { phrase: 'How much is this?', meaning: 'Cái này bao nhiêu tiền?', example: 'Excuse me, how much is this toy?', exampleVi: 'Xin lỗi, đồ chơi này bao nhiêu tiền?', emoji: '💰' },
        { phrase: 'I want to buy this.', meaning: 'Tôi muốn mua cái này.', example: 'I want to buy this red shirt.', exampleVi: 'Tôi muốn mua cái áo đỏ này.', emoji: '🛍️' },
        { phrase: 'Do you have a bigger size?', meaning: 'Có cỡ lớn hơn không?', example: 'This is too small. Do you have a bigger size?', exampleVi: 'Cái này nhỏ quá. Có cỡ lớn hơn không?', emoji: '👕' },
        { phrase: 'That is too expensive.', meaning: 'Đắt quá.', example: 'That is too expensive. Do you have a cheaper one?', exampleVi: 'Đắt quá. Có cái nào rẻ hơn không?', emoji: '😮' },
        { phrase: 'I will take it!', meaning: 'Tôi lấy cái này!', example: 'This is perfect. I will take it!', exampleVi: 'Cái này tuyệt quá. Tôi lấy cái này!', emoji: '✅' },
        { phrase: 'Can I pay by card?', meaning: 'Tôi trả bằng thẻ được không?', example: 'Excuse me, can I pay by card?', exampleVi: 'Xin hỏi, tôi trả bằng thẻ được không?', emoji: '💳' }
      ]
    },

    // --- Group 4: Restaurant ---
    {
      id: 'cp_restaurant',
      title: 'Nhà hàng',
      titleVi: 'Giao tiếp ở nhà hàng',
      icon: '🍽️',
      color: '#00D2D3',
      phrases: [
        { phrase: 'A table for two, please.', meaning: 'Cho một bàn hai người ạ.', example: 'Good evening! A table for two, please.', exampleVi: 'Chào buổi tối! Cho một bàn hai người ạ.', emoji: '🪑' },
        { phrase: 'Can I see the menu?', meaning: 'Cho tôi xem thực đơn?', example: 'Excuse me, can I see the menu?', exampleVi: 'Xin lỗi, cho tôi xem thực đơn?', emoji: '📋' },
        { phrase: 'I would like...', meaning: 'Tôi muốn gọi...', example: 'I would like chicken rice, please.', exampleVi: 'Tôi muốn gọi cơm gà ạ.', emoji: '🍚' },
        { phrase: 'Can I have some water?', meaning: 'Cho tôi nước được không?', example: 'Excuse me, can I have some water?', exampleVi: 'Xin lỗi, cho tôi nước được không?', emoji: '💧' },
        { phrase: 'The food is delicious!', meaning: 'Đồ ăn ngon quá!', example: 'Wow, the food is delicious! Thank you!', exampleVi: 'Ồ, đồ ăn ngon quá! Cảm ơn!', emoji: '😋' },
        { phrase: 'Can I have the bill?', meaning: 'Cho tôi hoá đơn?', example: 'Excuse me, can I have the bill, please?', exampleVi: 'Xin lỗi, cho tôi hoá đơn ạ?', emoji: '🧾' }
      ]
    },

    // --- Group 5: Asking Directions ---
    {
      id: 'cp_directions',
      title: 'Hỏi đường',
      titleVi: 'Hỏi và chỉ đường',
      icon: '🗺️',
      color: '#54A0FF',
      phrases: [
        { phrase: 'Where is the...?', meaning: '... ở đâu?', example: 'Excuse me, where is the library?', exampleVi: 'Xin hỏi, thư viện ở đâu ạ?', emoji: '📍' },
        { phrase: 'Turn left.', meaning: 'Rẽ trái.', example: 'Turn left at the traffic light.', exampleVi: 'Rẽ trái ở đèn giao thông.', emoji: '⬅️' },
        { phrase: 'Turn right.', meaning: 'Rẽ phải.', example: 'Turn right and you will see it.', exampleVi: 'Rẽ phải và bạn sẽ thấy.', emoji: '➡️' },
        { phrase: 'Go straight.', meaning: 'Đi thẳng.', example: 'Go straight for two blocks.', exampleVi: 'Đi thẳng hai dãy nhà.', emoji: '⬆️' },
        { phrase: 'It is next to the...', meaning: 'Nó ở bên cạnh...', example: 'The park is next to the school.', exampleVi: 'Công viên ở bên cạnh trường học.', emoji: '👉' },
        { phrase: 'Is it far from here?', meaning: 'Nó có xa đây không?', example: 'Is the hospital far from here?', exampleVi: 'Bệnh viện có xa đây không?', emoji: '🤔' }
      ]
    },

    // --- Group 6: Emotions ---
    {
      id: 'cp_emotions',
      title: 'Cảm xúc',
      titleVi: 'Nói về cảm xúc',
      icon: '😊',
      color: '#F368E0',
      phrases: [
        { phrase: 'I am happy!', meaning: 'Mình vui!', example: 'I got a good grade. I am happy!', exampleVi: 'Mình được điểm cao. Mình vui!', emoji: '😊' },
        { phrase: 'I am sad.', meaning: 'Mình buồn.', example: 'My friend moved away. I am sad.', exampleVi: 'Bạn mình chuyển đi. Mình buồn.', emoji: '😢' },
        { phrase: 'I am scared.', meaning: 'Mình sợ.', example: 'It is dark. I am scared.', exampleVi: 'Trời tối quá. Mình sợ.', emoji: '😨' },
        { phrase: 'I am hungry.', meaning: 'Mình đói.', example: 'It is lunchtime. I am hungry.', exampleVi: 'Đến giờ ăn trưa. Mình đói.', emoji: '😋' },
        { phrase: 'I am tired.', meaning: 'Mình mệt.', example: 'I played all day. I am tired.', exampleVi: 'Mình chơi cả ngày. Mình mệt.', emoji: '😴' },
        { phrase: 'Don\'t worry!', meaning: 'Đừng lo!', example: 'Don\'t worry! Everything will be okay!', exampleVi: 'Đừng lo! Mọi thứ sẽ ổn thôi!', emoji: '🤗' }
      ]
    }
  ],

  // ──────────────────────────────────────────────────────────
  // 6. LEARNING PATHS - 5 paths by grade level
  // ──────────────────────────────────────────────────────────
  learningPaths: [
    {
      id: 'path_grade1',
      name: 'Lớp 1',
      nameEn: 'Grade 1',
      level: 'Pre-A1',
      icon: '🌱',
      color: '#FF6B6B',
      description: 'Bước đầu làm quen với tiếng Anh qua màu sắc, số đếm, chào hỏi và cảm xúc cơ bản.',
      stageIds: [1, 2]
    },
    {
      id: 'path_grade2',
      name: 'Lớp 2',
      nameEn: 'Grade 2',
      level: 'Pre-A1',
      icon: '🌿',
      color: '#FECA57',
      description: 'Mở rộng vốn từ về gia đình, thú cưng, trường học và các hoạt động cơ bản.',
      stageIds: [3, 4]
    },
    {
      id: 'path_grade3',
      name: 'Lớp 3',
      nameEn: 'Grade 3',
      level: 'A1',
      icon: '🌳',
      color: '#FF9F43',
      description: 'Học từ vựng về ngôi nhà, đồ dùng, đồ ăn thức uống và giao tiếp đơn giản.',
      stageIds: [5, 6]
    },
    {
      id: 'path_grade4',
      name: 'Lớp 4',
      nameEn: 'Grade 4',
      level: 'A1',
      icon: '🌲',
      color: '#54A0FF',
      description: 'Khám phá thế giới động vật, hoạt động hằng ngày và kỹ năng mô tả.',
      stageIds: [7, 8]
    },
    {
      id: 'path_grade5',
      name: 'Lớp 5',
      nameEn: 'Grade 5',
      level: 'A1-A2',
      icon: '🎓',
      color: '#F368E0',
      description: 'Nâng cao kỹ năng giao tiếp với thời gian, thời tiết, hỏi đường và du lịch.',
      stageIds: [9, 10]
    }
  ],

  // ──────────────────────────────────────────────────────────
  // 7. SENTENCES - 12 sentences for sentence builder game
  // ──────────────────────────────────────────────────────────
  sentences: [
    { text: 'I like apples', vi: 'Tôi thích táo', words: ['I', 'like', 'apples'] },
    { text: 'She is my mother', vi: 'Cô ấy là mẹ tôi', words: ['She', 'is', 'my', 'mother'] },
    { text: 'The cat is cute', vi: 'Con mèo dễ thương', words: ['The', 'cat', 'is', 'cute'] },
    { text: 'I go to school', vi: 'Tôi đi học', words: ['I', 'go', 'to', 'school'] },
    { text: 'He can swim fast', vi: 'Anh ấy bơi nhanh', words: ['He', 'can', 'swim', 'fast'] },
    { text: 'We play in the park', vi: 'Chúng tôi chơi trong công viên', words: ['We', 'play', 'in', 'the', 'park'] },
    { text: 'The dog is brown', vi: 'Con chó màu nâu', words: ['The', 'dog', 'is', 'brown'] },
    { text: 'I have two sisters', vi: 'Tôi có hai chị em gái', words: ['I', 'have', 'two', 'sisters'] },
    { text: 'Today is sunny', vi: 'Hôm nay trời nắng', words: ['Today', 'is', 'sunny'] },
    { text: 'She reads a book', vi: 'Cô ấy đọc sách', words: ['She', 'reads', 'a', 'book'] },
    { text: 'They eat rice and chicken', vi: 'Họ ăn cơm và gà', words: ['They', 'eat', 'rice', 'and', 'chicken'] },
    { text: 'My father is a doctor', vi: 'Bố tôi là bác sĩ', words: ['My', 'father', 'is', 'a', 'doctor'] }
  ],

  // ──────────────────────────────────────────────────────────
  // 8. BADGES - 10 achievement badges
  // ──────────────────────────────────────────────────────────
  badges: [
    { id: 'first_lesson', name: 'Bước Đầu Tiên', desc: 'Hoàn thành bài học đầu tiên', icon: '🌟' },
    { id: 'five_lessons', name: 'Học Sinh Chăm Chỉ', desc: 'Hoàn thành 5 bài học', icon: '📚' },
    { id: 'ten_lessons', name: 'Ngôi Sao Học Tập', desc: 'Hoàn thành 10 bài học', icon: '⭐' },
    { id: 'perfect_score', name: 'Điểm Tuyệt Đối', desc: 'Đạt 100% trong một bài kiểm tra', icon: '💯' },
    { id: 'streak_3', name: 'Kiên Trì 3 Ngày', desc: 'Học liên tục 3 ngày', icon: '🔥' },
    { id: 'streak_7', name: 'Siêu Kiên Trì', desc: 'Học liên tục 7 ngày', icon: '💪' },
    { id: 'alphabet_master', name: 'Vua Bảng Chữ Cái', desc: 'Học thuộc tất cả 26 chữ cái', icon: '🔤' },
    { id: 'vocab_50', name: 'Nhà Sưu Tập Từ', desc: 'Học được 50 từ vựng', icon: '📖' },
    { id: 'dialogue_hero', name: 'Anh Hùng Hội Thoại', desc: 'Hoàn thành tất cả hội thoại', icon: '💬' },
    { id: 'stage_complete', name: 'Chinh Phục Chặng', desc: 'Hoàn thành tất cả bài trong 1 chặng', icon: '🏆' }
  ],

  // ──────────────────────────────────────────────────────────
  // 9. MASCOT MESSAGES - Bee mascot feedback messages
  // ──────────────────────────────────────────────────────────
  mascotMessages: {
    welcome: [
      'Chào bạn! 🐝 Bee rất vui được gặp bạn! Hãy cùng học tiếng Anh nào!',
      'Xin chào nhà thám hiểm! 🌟 Hôm nay chúng ta sẽ học gì nhỉ?',
      'Welcome back! 🎉 Bee nhớ bạn lắm! Sẵn sàng học chưa?',
      'Yo yo yo! 🐝 Bee đây! Cùng khám phá tiếng Anh nào!',
      'Hi there! 👋 Một ngày mới, một bài học mới! Let\'s go!'
    ],
    correct: [
      'Tuyệt vời! 🎉 Bạn giỏi quá!',
      'Đúng rồi! ⭐ Bee tự hào về bạn!',
      'Excellent! 🌟 Chính xác luôn!',
      'Wow! 🏆 Bạn thật thông minh!',
      'Perfect! 💯 Không thể tốt hơn!',
      'Amazing! 🎊 Bạn làm tốt lắm!',
      'Yes! ✅ Đáp án hoàn hảo!',
      'Bravo! 👏 Tiếp tục phát huy nhé!'
    ],
    wrong: [
      'Ồ, chưa đúng rồi! 😊 Thử lại nhé!',
      'Sai rồi, nhưng không sao! 💪 Cố lên!',
      'Hmm, chưa chính xác! 🤔 Hãy suy nghĩ lại nào!',
      'Oops! 🙈 Đừng lo, thử lần nữa nhé!',
      'Gần đúng rồi! 🌈 Thử lại lần nữa bạn ơi!',
      'Không đúng, nhưng Bee tin bạn làm được! 🐝'
    ],
    complete: [
      'Chúc mừng! 🎉 Bạn đã hoàn thành bài học!',
      'Xuất sắc! 🏆 Bạn đã chinh phục xong bài này!',
      'Hooray! 🎊 Một bài học nữa đã xong!',
      'Fantastic! 🌟 Bạn đã hoàn thành tuyệt vời!',
      'Wow wow wow! 🐝 Bạn thật siêu! Bài học đã xong!'
    ],
    streak: [
      'Bạn đã học {days} ngày liên tiếp! 🔥 Quá tuyệt!',
      '{days} ngày không nghỉ! 💪 Bee nể bạn lắm!',
      'Streak {days} ngày! 🌟 Bạn là nhà vô địch!',
      'Kiên trì {days} ngày rồi! 🏆 Tiếp tục nhé!'
    ]
  },

  // ──────────────────────────────────────────────────────────
  // 10. HELPER METHODS
  // ──────────────────────────────────────────────────────────

  /**
   * Get a random mascot message by type
   * @param {string} type - 'welcome' | 'correct' | 'wrong' | 'complete' | 'streak'
   * @returns {string}
   */
  getRandomMessage(type) {
    const messages = this.mascotMessages[type];
    if (!messages || messages.length === 0) return '';
    return messages[Math.floor(Math.random() * messages.length)];
  },

  /**
   * Find a specific lesson by its ID across all stages
   * @param {number} lessonId
   * @returns {object|null} lesson object with added stageId and stageColor
   */
  getLesson(lessonId) {
    for (const stage of this.stages) {
      const lesson = stage.lessons.find(l => String(l.id) === String(lessonId));
      if (lesson) {
        return { ...lesson, stageId: stage.id, stageColor: stage.color, stageName: stage.name };
      }
    }
    return null;
  },

  /**
   * Find a stage by its ID
   * @param {number} stageId
   * @returns {object|null}
   */
  getStage(stageId) {
    return this.stages.find(s => s.id == stageId) || null;
  },

  /**
   * Get a flat array of all lessons with stage metadata attached
   * @returns {Array}
   */
  getAllLessons() {
    const allLessons = [];
    for (const stage of this.stages) {
      for (const lesson of stage.lessons) {
        allLessons.push({
          ...lesson,
          stageId: stage.id,
          stageName: stage.name,
          stageColor: stage.color,
          stageIcon: stage.icon
        });
      }
    }
    return allLessons;
  },

  /**
   * Get lessons/content by skill type
   * @param {string} skill - 'vocabulary' | 'dialogue' | 'listening' | 'phrase'
   * @returns {Array}
   */
  getLessonsBySkill(skill) {
    switch (skill) {
      case 'vocabulary':
        return this.getAllLessons();
      case 'dialogue':
        return this.dialogues;
      case 'listening':
        return this.listeningPassages;
      case 'phrase':
        return this.communicationPhrases;
      default:
        return [];
    }
  }
};
