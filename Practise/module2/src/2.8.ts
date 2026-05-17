{
    // Promise --> new Promise(() => {}) --> ata akta constractor. jata new Promise call back function ar maddhomea prokash kora hoi.

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    };

    const getTodo = async (): Promise<Todo> => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
        const data = await response.json();
        // console.log(data)
        return data;
    };

    getTodo();

    // -------------------

    type Something = { something: string };

    // simulate
    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: 'Something is Happening ..!!' };

            if (data) {
                resolve(data);
            } else {
                reject('Failed to load data.. !!');
            }
        });
    };

    // calling create promise function
    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise();
        // console.log(data);
        return data;
    };

    showData();

    // -------------------------------

    // Promise vs async/await
    // Promise Style:-
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err.message));

    // async/await Style:- ata Promise ar alternative.
    async function getData() {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
            const data: Todo = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    getData();

    /*
    *Promise কেন শিখতে হবে?

    *কারণ:
    - async/await বুঝতে Promise বুঝতে হবে
    - API call everywhere
    - React / Node.js / Next.js সব জায়গায় লাগে
    - Interview তে common question

    * খুব সহজভাবে মনে রাখো:
    
    * Promise = “কাজটা এখন হচ্ছে না, পরে result দিব”

    *আর ব্যবহার হয়:
        - API call
        - Database
        - File
        - Timer
        - Async কাজ

* ## এগুলোর explaniation chatGPT - k করে দিতে বলতে পারো:
    - pomise chaining 
        -> একটা Promise শেষ হওয়ার পরে আরেকটা Promise চালানোকে Promise Chaining বলে।

    - Promise.all()
        -> Promise.all() ব্যবহার করা হয় একসাথে multiple Promise চালানোর জন্য। সব async কাজ একসাথে চালায়, সব complete হলে result দেয়। যেমনঃ- Promise.all([promise1, promise2, promise3])

    async function getData(){

   try{

      const [users, posts] = await Promise.all([
         fetch("/users").then(res => res.json()),
         fetch("/posts").then(res => res.json())
      ]);

      console.log(users);
      console.log(posts);

   }catch(err){
      console.log(err);
   }

}

    - async await deep explanation
    - callback vs promise vs async await
    - React এ Promise usage
    - Node.js এ Promise usage
    - Event Loop + Microtask Queue
    */
}
