const defaultUser = {
    name: 'Vinicius',
    email: 'viinehbr@gmail.com',
    level: 1
}

const user1 = {
    ...defaultUser,
    name: 'admin',
    email: 'teste@gmail.com'
}

console.log(user1);

const adm2 = {
    ...defaultUser,
    level:2
}

console.log(adm2);