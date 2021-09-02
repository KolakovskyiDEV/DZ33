// 1. Дан массив

// let arr = [1, 2, 3, 4, [1.1, 1.2, 1.3], 5, 6, 7, [1.4, 1.5 , [2.1, 2.2, [3.1, [4.1, 4.2, [5.1, 5.2, [6.1, 6.2]]], 3.3]]]]
// Вам нужно с этого массива сгенерировать структуру вложенных списков ul>li с помощью рекурсии



// 2. Дан массив

// const arr = [
//     {
//         firstName: 'Vlad',
//         lastname: 'Shaitan',
//         age: 38,
//         gender: 'cat'
//     },
//     {
//         firstName: 'Alex',
//         lastname: 'Puluev',
//         age: 10,
//         gender: 'female'
//     },
//     {
//         firstName: 'Ivan',
//         lastname: 'Peanuts',
//         age: 10,
//         gender: 'male'
//     },
//     {
//         firstName: 'Ann',
//         lastname: 'Shaitan',
//         age: 38,
//         gender: 'dog'
//     },
// ];
// Вам необходимо написать поиск по данному массиву

// Требования:

// Создаем input type text
// При вводе данных пользователем в этот инпут нужно производить поиск по данному массиву объектов
// Проверяем каждый объект и каждое его свойство на вхождение подстроки
// Если подстрока входит в любое из свойств проверяемого объекта, мы записываем этот объект в пустой массив
// после того как все поиск был произведен нужно вывести данные которые соответствуют поиску в консоль


// let arr = [1, 2, 3, [1.1, 1.2, 1.3],5];//
let arr1 = [1, 2, 3, 4, [1.1, 1.2, 1.3], 5, 6, 7, [1.4, 1.5 , [2.1, 2.2, [3.1, [4.1, 4.2, [5.1, 5.2, [6.1, 6.2]]], 3.3]]]]
//Вам нужно с этого массива сгенерировать структуру вложенных списков ul > li с помощью рекурсии


function getList(arr) {
    let ul = document.createElement('ul');
    
    for (let i = 0; i < arr.length; i++){
        let li = document.createElement('li');
        li.innerHTML = arr[i];
        

        if(Array.isArray(arr[i])){
        li.innerHTML = '';
        li.append(getList(arr[i]));
        }
        ul.append(li);
        }
    
        document.body.append(ul);
        return ul;
}

getList(arr1);

// 2 задание


const arr = [
    {
        firstName: 'Vlad',
        lastname: 'Shaitan',
        age: 38,
        gender: 'cat'
    },
    {
        firstName: 'Alex',
        lastname: 'Puluev',
        age: 10,
        gender: 'female'
    },
    {
        firstName: 'Ivan',
        lastname: 'Peanuts',
        age: 10,
        gender: 'male'
    },
    {
        firstName: 'Ann',
        lastname: 'Shaitan',
        age: 38,
        gender: 'dog'
    },
];
//Создаем input type text
//При вводе данных пользователем в этот инпут нужно производить поиск по данному массиву объектов
////Проверяем каждый объект и каждое его свойство на вхождение подстроки
//Если подстрока входит в любое из свойств проверяемого объекта, мы записываем этот объект в пустой массив
//после того как все поиск был произведен нужно вывести данные которые соответствуют поиску в консоль
let input = document.querySelector('#Hello');
input.addEventListener('keyup', Element => {
    let arrNew = [];
    for (let items = 0; items < arr.length; items++) {
        
        console.log(arr[items]);
        outer:for (item in arr[items]) {
            if (arr[items][item].toString().includes(Element.target.value)) {
                arrNew.push(arr[items]);
                continue outer;
                console.log(arrNew);
            }
        }
    }
});
