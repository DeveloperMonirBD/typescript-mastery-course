// * type assertion:
// const input = document.getElementById("email") as HTMLInputElement
// const button = document.getElementById("send") as HTMLButtonElement

// button.addEventListener("click", () => {
//     console.log(`Subsription complete for ${input.value}`)
// })

//* type guard:
const input = document.querySelector<HTMLInputElement>('email');
const button = document.querySelector<HTMLButtonElement>('send');
//? type guard
if (input && button) {
    button.addEventListener('click', () => {
        console.log(`Subsription complete for ${input.value}`);
    });
}
