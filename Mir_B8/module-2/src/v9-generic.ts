const wrapInArray = <T>(value: T) => {
    return [value];
};

const stringArr = wrapInArray<string>('ABC');
const numberArr = wrapInArray<number>(123);

stringArr.map(item => item.toUpperCase());

// ---------

interface User {
    name: string;
    role: string;
}

interface Blog {
    title: string;
    description: string;
    date: string;
}

interface ApiResponse<T> {
    success: boolean;
    statusCode: number;
    data: T;
}

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

const userRes: UserResponse = {
    success: true,
    statusCode: 200,
    data: {
        name: 'Monir',
        role: 'Admin'
    }
};


// ApiResponse<T> হলো একটা "ব্রেড প্যাকেট" — যেখানে T হলো ফাঁকা জায়গা (প্লেসহোল্ডার)। আপনি বলছেন — "আমার সব API response-এর গঠন একই: success, statusCode, আর data। কিন্তু data-টা কী টাইপের হবে সেটা fixed না।" এখন ApiResponse<User> লিখলে TypeScript বুঝে নেয়: T = User । তাই data-এর টাইপ হবে User → অর্থাৎ { name: string; role: string }
