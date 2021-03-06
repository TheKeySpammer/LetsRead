const { Story, StoryView } = require('../models/Models');
const utility = require('./utility');

const usernames = [
'delicioushut',
'outlineworkbasket',
'kentledgegloaming',
'independentunbiased',
'shenzhencatenary',
'crumbleelk',
'oceanprovide',
'rovermickey',
'monorailtesting',
'tonguehelena',
'adjointsalisbury',
'highlightawful',
'gelatinvixen',
'commentinstant',
'yumdavid',
'greenishtatch',
];


const titles = [
`The Abbey`,
`Adventures in Arabia`,
`After the Game`,
`Age Lasting Love`,
`Aha! or The Mystery of the Queen's Necklace`,
`Akram the Mysterious`,
`Alleys of Darkness`,
`Alleys of Peril`,
`Alleys of Peril (Synopsis)`,
`Alleys of Singapore`,
`Alleys of Treachery`,
`Almuric`,
`The Altar and the Scorpion`,
`Ambition by Moonlight`,
`Ambition in the Moonlight`,
`The Apache Mountain War`,
`Aphorism: The girl that is a beauty"`,
`The Apparition in the Prize Ring`,
`Apparition of Josiah Wilbarger`,
`The Atavist`,
`An Autobiography`,
`Bastards All!`,
`The Battling Sailor`,
`The Beast from the Abyss`,
`Beyond the Black River`,
`Bill Smalley and the Power of the Human Eye`,
`Black Abyss`,
`The Black Bear Bites`,
`Black Canaan (Alternate version)`,
`Black Canaan`,
`The Black City`,
`Black Colossus`,
`Black Country`,
`Black Eons`,
`Black Hound of Death`,
`Black John’s Vengeance`,
`The Black Moon`,
`The Black Stone, early draft`,
`The Black Stone`,
`The Black Stranger`,
`The Black Stranger, Synopsis A`,
`The Black Stranger, Synopsis B`,
`Black Talons`,
`Black Vulmea's Vengeance`,
`Black Wind Blowing`,
`Blades for France`,
`Blades of the Brotherhood (1)`,
`Blades of the Brotherhood (2)`,
`The Block`,
`The Blonde Goddess of Bal-Sagoth`,
`The Blood of Belshazzar`,
`Blood of the Gods`,
`The Bloodstained God`,
`Bloodstones and Ebony`,
`Blow the Chinks Down`,
`The Blue Flame of Death`,
`The Blue Flame of Vengeance`,
`Blue River Blues`,
`Bookmen and Books`,
`Boot Hill Payoff`,
`The Bore of the Cowed`,
`A Boy, a Beehive, and a Chinaman`,
`Brachen the Kelt`,
`Bran Mak Morn`,
`Bran Mak Morn: A Play`,
`The Brand of Satan`,
`The Brazen Peacock`,
`Breed of Battle`,
`Brotherly Advice`,
`The Bull Dog Breed`,
`By the Law of the Shark`,
`By This Axe I Rule!`,
`The Cairn on the Headland `,
`The Cairn on the Headland`,
`Cannibal Fists`,
`The Case of the College Toilet`,
`Casonetto's Last Song`,
`The Castle of the Devil`,
`The Cat and the Skull`,
`The Celtica Notes of Robert E. Howard`,
`The Challenge from Beyond`,
`Champ of the Forecastle`,
`The Champion of the Forecastle`,
`Champ of the Seven Seas`,
`The Children of Asshur`,
`The Children of the Night`,
`Circus Charade`,
`Circus Fists`,
`The Cobra in the Dream`,
`College Socks`,
`The Coming of El Borak`,
`The Coming of El Borak (Draft)`,
`The Commentary`,
`Conan, Man of Destiny`,
`Conan the Conqueror`,
`The Conquerin' Hero of the Humbolts`,
`Costigan vs. Kid Camera`,
`The Country of the Knife`,
`Crowd-Horror`,
`Cultured Cauliflowers`,
`Cupid from Bear Creek`,
`Cupid vs. Pollux`,
`The Curly Wolf of Sawtooth`,
`The Curse of Greed`,
`The Curse of the Crimson God`,
`The Curse of the Golden Skull`,
`Dagon Manor`,
`The Dark Man`,
`Dark Shanghai`,
`The Daughter of Erlik Khan`,
`Daughters of Feud`,
`The Dead Remember`,
`Dear Mrs. Shane`,
`Death's Black Riders`,
`Delcardes' Cat (Draft)`,
`Delcardes' Cat`,
`Delenda Est`,
`Dermod's Bane`,
`Desert Blood`,
`Desert Blood (List of Characters)`,
`Desert Rendezvous`,
`The Destiny Gorilla`,
`The Devil in His Brain`,
`The Devil in Iron`,
`The Devil's Jest`,
`The Devil's Joker`,
`The Devil's Joker (Alternate version)`,
`The Devil's Woodchopper`,
`The Devils of Dark Lake`,
`The Diablos Trail`,
`Dig Me No Grave`,
`Diogenes of Today`,
`The Dominant Male`,
`The Dook of Stork`,
`The Door to the Garden`,
`The Door to the World`,
`Double Cross`,
`Drag`,
`The Dragon of Kao Tsu`,
`The Drawing Card`,
`A Dream`,
`The Dream Snake`,
`The Drifter`,
`Drums of the Sunset`,
`Drums of Tombalku`,
`Dula Due to be Champion`,
`The Dwellers Under the Tomb (Draft A)`,
`The Dwellers Under the Tomb`,
`Editorial  `,
`Educate or Bust`,
`Eighttoes Makes a Play`,
`El Borak (1)`,
`El Borak (2)`,
`A Elkins Never Surrenders`,
`A Elston to the Rescue`,
`Etched in Ebony`,
`Etchings in Ivory`,
`Evil Deeds at Red Cougar`,
`Evil Deeds at Red Cougar (Incomplete Synopsis)`,
`Exile of Atlantis`,
`The Extermination of Yellow Donory`,
`A Faithful Servant`,
`Fall Guy`,
`Fangs of Gold`,
`The Fangs of the Yellow Cobra`,
`The Fastidious Fooey Mancucu`,
`Fate is the Killer`,
`The Fear at the Window`,
`The Fear-master`,
`The Fearsome Touch of Death`,
`The Female of the Species`,
`The Ferocious Ape`,
`The Feud Buster`,
`The Fifth Crusade`,
`The Fightin'est Pair`,
`The Fighting Fury`,
`Fighting Nerves (Kid Allison version)`,
`Fighting Nerves (Jim O’Donnel version)`,
`The Fire of Asshurbanipal (1)`,
`The Fire of Asshurbanipal (2)`,
`A Fishing Trip`,
`Fist and Fang`,
`Fistic Psychology`,
`Fists of the Desert`,
`Fists of the Revolution`,
`The Flame Knife`,
`Flaming Marble (1)`,
`Flaming Marble (2)`,
`Flying Knuckles`,
`The Folly of Conceit`,
`The Footfalls Within`,
`For the Honor of the School`,
`"For the Love of Barbara Allen"`,
`Friends`,
`From Tea to Tee  `,
`The Frost Giant's Daughter`,
`The Frost-Giant's Daughter`,
`The Frost-King's Daughter`,
`The Funniest Bout`,
`The Further Adventures of Lal Singh`,
`The Galveston Affair`,
`The Garden of Fear`,
`Gates of Empire`,
`General Ironfist`,
`Genseric's Son`,
`Genseric's Fifth Born Son`,
`A Gent from Bear Creek (Draft)`,
`A Gent from Bear Creek (Novel)`,
`A Gent from Bear Creek (Short story)`,
`A Gent from the Pecos`,
`Gents in Buckskin`,
`Gents on the Lynch`,
`Gents on the Rampage`,
`Ghor, Kin-Slayer`,
`The Ghost Behind the Gloves`,
`The Ghost in the Doorway`,
`The Ghost of Bald Rock Ranch`,
`The Ghost of Camp Colorado`,
`The Ghosts of Jacksonville`,
`The Ghost with the Silk Hat`,
`The Girl on the Hell Ship (Draft)`,
`The Girl on the Hell Ship`,
`A Glass of Vodka`,
`The God in the Bowl`,
`The Gods of Bal-Sagoth`,
`Gods of the North`,
`The Gods That Men Forget`,
`Gold From Tartary`,
`Gold From Tatary`,
`"Golden Hope" Christmas`,
`Golnar the Ape`,
`The Gondarian Man`,
`The Good Knight`,
`Graveyard Rats`,
`Graveyard Rats (Draft)`,
`The Great Munney Ring`,
`The Grey God Passes`,
`The Grisly Horror`,
`The Grove of Lovers`,
`The Guardian of the Idol (Synopsis)`,
`The Guardian of the Idol`,
`Guests of the Hoodoo Room`,
`Gunman's Debt`,
`Gunman's Debt  (Synopsis, page 4)`,
`Gunman's Debt  (Three Synopses)`,
`Guns of Khartum`,
`Guns of the Mountains`,
`The Hall of the Dead`,
`Halt! Who Goes There?`,
`The Hand of Nergal`,
`The Hand of Obeah`,
`Hand of the Black Goddess`,
`Hard-Fisted Sentiment`,
`The Hashish Land`,
`The Haunted Hut`,
`The Haunted Mountain`,
`The Haunter of the Ring`,
`The Hawk of Basti`,
`Hawk of the Hills`,
`Hawks of Outremer`,
`Hawks Over Egypt`,
`Hawks Over Shem`,
`The Heathen`,
`Heavyweight Champions (list)`,
`High Horse Rampage`,
`The Hills of the Dead`,
`His Brother's Shoes`,
`His War Medals`,
`The Honor of the Ship`,
`The Hoofed Thing`,
`The Horror from the Mound`,
`A Horror in the Night`,
`The Hour of the Dragon`,
`The Hour of the Dragon (Notes)`,
`The House`,
`The House in the Oaks`,
`The House of Arabu`,
`The House of Arabu (Notes)`,
`House of Fear`,
`The House of Om`,
`The House of Peril`,
`The House of Suspicion`,
`The Hyborian Age Draft A`,
`The Hyborian Age Draft B`,
`The Hyborian Age Draft C`,
`The Hyborian Age`,
`The Hyena`,
`The Ideal Girl`,
`Includin' the Scandinavian`,
`Incongruity`,
`The Influence of the Movies`,
`In High Society`,
`In His Own Image`,
`In the Forest of Villefere`,
`Intrigue in Kurdistan`,
`The Iron Man`,
`Iron Men`,
`Iron Men (First version)`,
`Iron Shadows in the Moon`,
`The Iron Terror`,
`Iron-Clad Fists`,
`Iron-Jaw`,
`Irony`,
`The Isle of Pirate's Doom`,
`The Isle of the Eons`,
`The Ivory Camel`,
`The Jade God`,
`The Jade Monkey`,
`Jazz Music`,
`Jeffries Versus Dempsey`,
`Jewels of Gwahlur`,
`The Jinx`,
`John Grimlan's Debt`,
`Jottings`,
`The Judgement of the Desert`,
`Kelly the Conjure-Man`,
`Khoda Khan's Tale`,
`Kid Galahad`,
`The Killer's Debt`,
`The Killing of Yellow Donary`,
`King Bahthur's Court`,
`King Hootus`,
`King of the Forgotten People`,
`Kings of the Night`,
`The King's Service`,
`Knife, Bullet and Noose`,
`Knife, Gun and Noose`,
`Knife-River Prodigal`,
`A Knight of the Round Table`,
`A Korean Night`,
`Lal Singh, Oriental Gentleman`,
`The Lame Man`,
`The Land of Forgotten Ages`,
`The Land of Mystery`,
`The Last Laugh`,
`The Last Man`,
`The Last Ride`,
`The Last White Man`,
`Law Guns of Cowtown`,
`Law-Shooters of Cowtown`,
`Leather Lightning`,
`Legend`,
`Letter of a Chinese Student (1)`,
`Letter of a Chinese Student (2)`,
`Letters from Mom`,
`Le Gentil Homme le Diable  `,
`Library`,
`The Lion Gate`,
`The Lion of Tiberias`,
`The Lion of Tiberias (Draft pages)`,
`List of Names ("The Treasure of Henry Morgan")`,
`The Little People`,
`Lives and Crimes of Notable Artists`,
`Lobo Volante`,
`Lord of the Dead`,
`Lord of Samarcand`,
`The Loser`,
`The Lost Race`,
`The Lost Valley of Iskander`,
`Man`,
`A Man and a Brother`,
`A Man of Peace`,
`The Man on the Ground`,
`Man With the Mystery Mitts`,
`The Man Who Went Back`,
`The Man Who Would Be God`,
`The Man-Eaters of Zamboula`,
`The Man-Eaters of Zamboula (Early Draft)`,
`The Man-Eaters of Zamboula (Synopsis)`,
`A Man-Eating Jeopard`,
`The Mandarin Ruby`,
`Manila Manslaughter`,
`Marchers of Valhalla`,
`The Mark of a Bloody Hand`,
`A Matter of Age`,
`Mayhem and Taxes`]


function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


function getRandomStory() {
    var date_published = randomDate(new Date(2020, 1, 1), new Date());
    var title=titles[Math.floor(Math.random()*titles.length)];
    var content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ullamcorper eget nulla facilisi etiam dignissim diam. Duis convallis convallis tellus id. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Ac ut consequat semper viverra nam libero justo laoreet. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Aenean euismod elementum nisi quis eleifend. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Diam quis enim lobortis scelerisque fermentum.

    Orci dapibus ultrices in iaculis nunc sed augue. In est ante in nibh mauris. Egestas tellus rutrum tellus pellentesque. Id cursus metus aliquam eleifend mi in nulla posuere. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Amet risus nullam eget felis eget nunc lobortis. Eu non diam phasellus vestibulum. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Euismod lacinia at quis risus.
    
    Arcu dui vivamus arcu felis. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Nisi lacus sed viverra tellus in. Egestas congue quisque egestas diam in arcu cursus. Praesent tristique magna sit amet purus. Posuere morbi leo urna molestie at elementum eu facilisis sed. Quam id leo in vitae turpis massa sed. Id venenatis a condimentum vitae sapien. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Tempus urna et pharetra pharetra.
    
    Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Quam nulla porttitor massa id neque. Lorem donec massa sapien faucibus. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Et tortor at risus viverra adipiscing at in. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Porta lorem mollis aliquam ut. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Et malesuada fames ac turpis egestas sed. Risus sed vulputate odio ut enim blandit.
    
    Amet luctus venenatis lectus magna fringilla urna porttitor. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Euismod in pellentesque massa placerat. Quam vulputate dignissim suspendisse in est ante in nibh. Id velit ut tortor pretium viverra suspendisse potenti. Ultrices in iaculis nunc sed augue lacus viverra vitae. Convallis convallis tellus id interdum velit. Amet venenatis urna cursus eget nunc scelerisque. Sed turpis tincidunt id aliquet risus feugiat in. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Gravida neque convallis a cras semper. Pretium aenean pharetra magna ac.`;

    return {
        title,
        content,
        date_published
    };

}

module.exports = function () {
    data = [{
            username: 'greenishtatch',
            first_name: 'Zhongwei',
            last_name: 'Rosen',
            email: 'cnivaldo.passos0@chanmelon.com',
            password: 'greenishtatch',
        },
        {
            username: 'tonguehelena',
            first_name: 'Kenroku',
            last_name: 'Malabarba',
            email: 'owa7shny.qal@mailperfetch.com',
            password: 'tonguehelena',
        },
        {
            username: 'gt_ams',
            first_name: 'Aamir',
            last_name: 'Siddiqui',
            email: 'gt_ams@yahoo.in',
            password: 'password',
        },
        {
            username: 'kentledgegloaming',
            first_name: 'Kenroku',
            last_name: 'Malabarba',
            email: 'owa7sny.qal@mailperfetch.com',
            password: 'kentledgegloaming',
        },

    ]

    data.forEach(d => {
        utility.user.createUser(d).then(u => {
            console.log("User Successfully created with id: ", u.id);
            for (let index = 0; index < 6; index++) {
                story = getRandomStory();
                Story.create(story).then(s => {
                    u.addStory(s);
                });
            }        
        }).catch(err => {
            console.log("Error Creating User:", err);
        });
    });

}