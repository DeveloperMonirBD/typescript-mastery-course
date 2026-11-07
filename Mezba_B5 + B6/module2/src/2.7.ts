{
    // Generic constraint with keyof operator
    // TypeScript-এ keyof অপারেটরটি ব্যবহার করা হয় একটি অবজেক্ট টাইপ থেকে সমস্ত কী বা প্রপার্টি বের করার জন্য। এটি একটি TypeScript Utility Type, যা টাইপ সিস্টেমকে আরও ডাইনামিক এবং শক্তিশালী করে তোলে।

    // type Owner = 'bike' | 'car' | 'ship'; // manually

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    };

    type Owner2 = keyof Vehicle; // 'bike' | 'car' | 'ship';

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    };

    const user = {
        name: 'Monir',
        age: 23,
        address: 'jsr'
    };

    const result1 = getPropertyValue(user, 'emni');

    //
}