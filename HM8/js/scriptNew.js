let ageUser = Number(prompt('Введите год рождения'));
if (ageUser) {
    ageUser = `Ваш возраст ` + (Number(2021) - ageUser);
    let userCity = prompt('В каком городе вы живёте');
    if (userCity) {
        switch (userCity) {
        case `Киев` :
            userCity = `Ты живёшь в столице Украины`
                break;
            case `Минск` :
            userCity = `Ты живёшь в столице Беларусии`
                break;
            case `Москва` :
            userCity = `Ты живёшь в столице России`
                break;
            default:
                 userCity = `Ты живёшь в городе ${userCity}`

        }
        let userSport = prompt('Какой ваш любимый спорт (Футбол , Баскетбол , Хоккей)');
        if (userSport) {
            switch (userSport) {
                case 'Футбол':
                    userSport = `Круто! Хочешь стать Криштиану Роналду`
                    break;
                case 'Баскетбол':
                    userSport = `Круто! Хочешь стать Брэдли Бил`
                    break;
                case 'Хоккей':
                    userSport = `Круто! Хочешь стать Коннором Браун`
                    break;
                default:
                    userSport = `Круто! ты занимаешься видом спорта ${userSport}`
                    
            }
            console.log(userCity);
            console.log(ageUser);
            console.log(userSport);
            let userInfo = {
                ageUser,
                userCity,
                userSport,
            }
            alert(userInfo.ageUser + "  " + userInfo.userCity + "  " + userInfo.userSport);
            
        } else { alert('Жаль, что Вы не захотели ввести свой любимый вид спорта') };
    } else{ alert('Жаль, что Вы не захотели ввести свой город (Киев, Минск или Москва)')};
} else {
    alert('Жаль, что Вы не захотели ввести свою дату рождения')
}