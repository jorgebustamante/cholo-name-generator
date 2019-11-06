window.onload = function() {
  const maleArr = [
    'Alien Ese',
    'Angel',
    'BabyBoy ',
    'Babylocs',
    'B-boy',
    'Big Buddha',
    'Big Foot',
    'Big Happy',
    'Birdy',
    'Bobby Loco',
    'Dr.Bomba',
    'Dre',
    'Borriqua',
    'Bouncy',
    'Boxer',
    'Brandy',
    'Bubbles',
    'Bugsy',
    'Bullet',
    'Carnecero',
    'Chango',
    'Chato',
    'Chato suave',
    'Chepe',
    'El Chilote',
    'Chino Loco',
    'Chuco',
    'Mr.Clean',
    'ClownPrince',
    'Cochino',
    'Conejo',
    'Creeper',
    'Cricket',
    'Cruzer',
    'Cuco',
    'Culebra',
    'Big Dawg',
    'DevilDog',
    'Diablo',
    'Big Dopey',
    'Double O.G.',
    'Dre',
    'Dreamer',
    'Drifter',
    'Droopy',
    'Eightball',
    'Fat Boy',
    'Flaco',
    'Freckles',
    'Froggy ',
    'Mr. Frosty',
    'Gato ',
    'Gangsta Hoopa',
    'Lil Ghost',
    'Giggles',
    'Gordo',
    'Gordo the Chef',
    'Gremlin',
    'El Grumpy',
    'Lil Guppy',
    'Half a Homie',
    'Happy',
    'Rocky',
    'Hollywood',
    'Home Lee',
    'Homie Les ',
    'Homie Pigeon',
    'Hustla',
    'Big Hopper',
    'Huera',
    'Ice Block',
    'Ice Cold',
    'Ice Cream',
    'Indio',
    'Jokachild',
    'Jokawild',
    'Joker',
    'Laughing Boy',
    'Live Wire',
    'Lizard',
    'Big Loco',
    'Lonely Boy',
    'Mr. Loony',
    'Lucky ',
    'Mac Daddy',
    'Mad Bomber',
    'Mambo ',
    'Mosca',
    'MastaBlasta',
    'Mamasota',
    'Monster',
    'Mariachi Pancho',
    'Mariachi Pedro',
    'Melon',
    'Mero-Mero',
    'Milkyway',
    'La Muerte',
    'Night Owl',
    'Officer Placa',
    'O.G. ',
    'Old School',
    'Orange Vato',
    'Oso',
    'El Padrecito',
    'El Paletero',
    'Painter',
    'Paisa',
    'Pandero',
    'Papi Chulo',
    'Payaso',
    'Payday',
    'Peanut',
    'Pee Wee',
    'Pelon',
    'Perico',
    'Pinoy',
    'Pirate',
    'Mr. Pit',
    'Poca Ana',
    'Poco Loco',
    'Poncon',
    'P-Rico',
    'El Profe',
    'Puppet',
    'Q-Ball',
    'Quasiloco',
    'Rastaman',
    'Big Red',
    'Right eye',
    'Romeo',
    'Sad Boy',
    'Sancho',
    'Santos',
    'Sapo',
    'Mr. Scarecrow',
    'SchoolBoy',
    'Shadow',
    'Shady',
    'Shaneequa',
    'Sharky',
    'Shorty',
    'Silent',
    'Sleepy',
    'Smiley',
    'Smokey',
    'Sneaky',
    'Snoopy',
    'Soljaboy',
    'Spider',
    'Spooky',
    'Squeeky',
    'Squirrel',
    'Syco',
    'Teardrop',
    'Tennishoe Pimp',
    'Tiny',
    'Topo',
    'Tortuga',
    'Travieza',
    'UBS Man',
    'Big Vato',
    'Vato Loco',
    'Veterano',
    'Whisper',
    'Wino',
    'Willie G',
    'Wizard',
    'Wolfe',
    'Worm',
    'Zombie'
  ];

  const femaleArr = [
    'Abuelita',
    'Adelita',
    'Babydoll',
    'Babygirl',
    'Baby Mama',
    'Bruja',
    'China Doll',
    'Chuca',
    'Chula',
    'Chunky',
    'Conejita',
    'Dumpy',
    'Flaca',
    'Flygirl',
    'Gata',
    'Guera',
    'Juliette',
    'Lady Joker',
    'Lola',
    'Smiley',
    'Morena',
    'Mija',
    'Negra',
    'Nurse Nena',
    'Payasa',
    'Paz',
    'Sad Girl',
    'Shy Girl',
    'Sancha',
    'Sister Mary Maria',
    'Silk',
    'Sly Girl',
    'Sleepy'
  ];

  const femaleImgs = ['1.jpg', '2.jpg'];
  const maleImgs = ['1.jpg', '2.jpg'];
  const resName = document.getElementById('resName');
  const image = document.getElementById('image');
  // function getRandomImage(imgArr, gender) {
  //   let path = `../images/${gender}`; // default path here
  //   var num = Math.floor(Math.random() * imgArr.length);
  //   var img = imgArr[num];
  //   var imgStr = '<img src="' + path + img + '" alt = "">';
  //   return imgStr;
  // }

  const femaleRand = (femaleArr, femaleImgs) => {
    //return object with random chola img and name
    return {
      CholaName: femaleArr[Math.floor(Math.random() * femaleArr.length)],
      CholaImg: femaleImgs[Math.floor(Math.random() * femaleImgs.length)]
    };
  };

  const maleRand = (maleArr, maleImgs) => {
    //return object with random cholo img and name
    let obj = {
      CholoName: maleArr[Math.floor(Math.random() * maleArr.length)],
      CholoImg: maleImgs[Math.floor(Math.random() * maleImgs.length)]
    };
    return obj;
  };

  //////Cholo name call
  document.getElementById('male').onclick = function() {
    var oddEven = Math.floor(Math.random() * Math.floor(2));
    let obj;
    let gender;
    oddEven === 0
      ? ((obj = femaleRand(femaleArr, femaleImgs)), (gender = 'female'))
      : ((obj = maleRand(maleArr, maleImgs)), (gender = 'male'));
    console.log(oddEven);
    let name = obj[Object.keys(obj)[0]];
    let img = obj[Object.keys(obj)[1]];
    let path = `assets/images/${gender}/${img}`;
    let imgStr = '<img src="' + path + '" alt = "cholo">';
    image.innerHTML = imgStr;

    resName.innerHTML = name;
  };
};
