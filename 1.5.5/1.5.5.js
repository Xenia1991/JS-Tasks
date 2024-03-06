const calculatePrice = (orders) => {
    if (orders) {
       const totalPrice = orders.reduce((acc=0, el) => acc += el.price, 0);
       return totalPrice;
    } else {
        return 0
    }
};

const data = [
    {
      type: 'food',
      price: 130,
    },
    {
      type: 'clothes',
      price: 7300,
    },
    {
      type: 'other',
      price: 1400,
    },
];

let data1;

console.log(calculatePrice(data)); // 8830
console.log(calculatePrice(data1)); // 0
console.log(calculatePrice()); // 0

/* Реализуйте функцию calculatePrice, которая принимает массив заказов, а возвращает сумму их стоимостей. 
Каждый объект заказа содержит поле price, в котором хранится стоимость товара в числовом формате.

Суммой пустого массива должен быть 0. Если массив не передан, то суммой так же должен быть 0. */