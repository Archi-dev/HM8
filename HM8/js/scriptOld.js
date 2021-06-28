let userYearBirthday = prompt('Введите год рождения', '');
let userCity;

let userFavoriteSport;
if ( userYearBirthday === null ) { 
    alert('Жаль, что Вы не захотели ввести свою дату рождения ');
    
}        else{
     userCity = prompt('В каком городе вы живёте','');

  if ( userCity === null ) {
alert('Жаль, что Вы не захотели ввести свой город (Киев, Минск или Москва)');
  } else {
     userFavoriteSport = prompt('Какой ваш любимый спорт (Футбол , Баскетбол , Хоккей)' , '');  
}
   if (userFavoriteSport === null ) {
alert('Жаль, что Вы не захотели ввести свой любимый вид спорта');
   } 

} 
// userYearBirthday === null


// userYearBirthday === ''





let userYear = 2021 - userYearBirthday;
// alert(userYear);

let massageMoskva;
let massageKiev;
let massageMinsk;
let otherCity;
let playerRonaldy;
let playerBredly;
let playerBraun;

if (userFavoriteSport === 'Футбол') {
    playerRonaldy = 'Круто! Хочешь стать Криштиану Роналду';
} else if (userFavoriteSport === 'Баскетбол') {
    playerBredly = 'Круто! Хочешь стать Брэдли Бил';
} else if (userFavoriteSport === 'Хоккей') {
    playerBraun = 'Круто! Хочешь стать Коннором Браун';
} 
// else {
//     playerRonaldy = '';
//     playerBredly = '';
//     playerBraun = '';
// }


    switch (userCity) {
        case 'Москва':

            massageMoskva = `Тебе ${userYear} лет; Ты живёшь в столице России`;
    
            break;
        case 'Киев':
            massageKiev = `Тебе ${userYear} лет; Ты живёшь в столице Украины`;
   
            break;
        case 'Минск':
            massageMinsk = `Тебе ${userYear} лет; Ты живёшь в столице Белорусии`;
            break;
        
              default:
     otherCity = `Тебе ${userYear} лет; Ты живёшь в городе ${userCity}` ;
    }


if (massageMoskva != undefined && playerRonaldy !=undefined) {
    alert(`${massageMoskva}, ${playerRonaldy}`);
} else if (massageMoskva != undefined && playerBredly !=undefined){
alert(`${massageMoskva}, ${playerBredly}`);
} else if  (massageMoskva != undefined && playerBraun !=undefined) {
    alert(`${massageMoskva}, ${playerBraun}`);
}


if (massageKiev != undefined && playerRonaldy !=undefined) {
    alert(`${massageKiev}, ${playerRonaldy}`);
} else if (massageKiev != undefined && playerBredly !=undefined){
alert(`${massageKiev}, ${playerBredly}`);
} else if  (massageKiev != undefined && playerBraun !=undefined) {
    alert(`${massageKiev}, ${playerBraun}`);
}


if (massageMinsk != undefined && playerRonaldy !=undefined) {
    alert(`${massageMinsk}, ${playerRonaldy}`);
} else if (massageMinsk != undefined && playerBredly !=undefined){
alert(`${massageMinsk}, ${playerBredly}`);
} else if  (massageMinsk != undefined && playerBraun !=undefined) {
    alert(`${massageMinsk}, ${playerBraun}`);
}

if (otherCity != undefined && playerRonaldy !=undefined) {
    alert(`${otherCity}, ${playerRonaldy}`);
} else if (otherCity != undefined && playerBredly !=undefined){
alert(`${otherCity}, ${playerBredly}`);
} else if  (otherCity != undefined && playerBraun !=undefined) {
    alert(`${otherCity}, ${playerBraun}`);
}

