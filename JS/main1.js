let client = {};

client.name = prompt('ФИО')
new Date(client.date = prompt('День рождения'))
client.phone = prompt('Телефон')
client.email = prompt('Электронная почта')
client.country = prompt('Страна')
client.city = prompt('Город')


if (confirm('Применить скидку?')) {
    client.discount = prompt('Размер скидки')
}

let showClient = ((object) => {
    console.log(object.name)
    console.log(object.date)
    console.log(object.phone)
    console.log(object.email)
    console.log(object.country)
    console.log(object.city)
    if (object.discount){
        console.log(client.discount)
    }
})

showClient(client);

try {
    showClient()
} catch (e) {
    console.log('Вызвана функция без параметров')
    console.log(e.name)
}

setTimeout(function () {
showClient(client)
}, 2000)


