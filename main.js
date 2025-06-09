const array = [7, 21321431242142142432424324n, "Hello World!", true, undefined, null, Symbol("id")];
for (let i = 0; array.length > i; i++) {
    console.log(String(array[i]) + " : " + typeof array[i]);
}