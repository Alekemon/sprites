
import path from 'path';
import * as spritedata from '@smogon/sprite-data';
import root from '@smogon/sprite-root';

function toPSID(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

// Derived from pokemon-showdown/data/items.ts
const ITEMS = {
	"absorbbulb": 2,
	"adamantorb": 4,
	"aguavberry": 5,
	"airballoon": 6,
	"apicotberry": 10,
	"armorfossil": 12,
	"aspearberry": 13,
	//"burntberry": 13,
	"babiriberry": 17,
	"belueberry": 21,
	"berryjuice": 22,
	"bigroot": 29,
	"bindingband": 31,
	"blackbelt": 32,
	"blacksludge": 34,
	"blackglasses": 35,
	"blueorb": 41,
	"blukberry": 44,
	"brightpowder": 51,
	"buggem": 53,
	"burndrive": 54,
	"cellbattery": 60,
	"charcoal": 61,
	"chartiberry": 62,
	"cheriberry": 63,
	//"przcureberry": 63,
	"cherishball": 64,
	"chestoberry": 65,
	//"mintberry": 65,
	"chilanberry": 66,
	"chilldrive": 67,
	"choiceband": 68,
	"choicescarf": 69,
	"choicespecs": 70,
	"chopleberry": 71,
	"clawfossil": 72,
	"cobaberry": 76,
	"colburberry": 78,
	"cornnberry": 81,
	"coverfossil": 85,
	"custapberry": 86,
	"damprock": 88,
	"darkgem": 89,
	"dawnstone": 92,
	"deepseascale": 93,
	"deepseatooth": 94,
	"destinyknot": 95,
	"diveball": 101,
	"domefossil": 102,
	"dousedrive": 103,
	"dracoplate": 105,
	"dragonfang": 106,
	"dragongem": 107,
	"dragonscale": 108,
	"dreadplate": 110,
	"dreamball": 111,
	"dubiousdisc": 113,
	"durinberry": 114,
	"duskball": 115,
	"duskstone": 116,
	"earthplate": 117,
	"ejectbutton": 118,
	"electirizer": 119,
	"electricgem": 120,
	"energypowder": 123,
	"enigmaberry": 124,
	"eviolite": 130,
	"expertbelt": 132,
	"fastball": 137,
	"fightinggem": 139,
	"figyberry": 140,
	"firegem": 141,
	"firestone": 142,
	"fistplate": 143,
	"flameorb": 145,
	"flameplate": 146,
	"floatstone": 147,
	"flyinggem": 149,
	"focusband": 150,
	"focussash": 151,
	"friendball": 153,
	"fullincense": 155,
	"ganlonberry": 158,
	"ghostgem": 161,
	"grassgem": 172,
	"greatball": 174,
	"grepaberry": 178,
	"gripclaw": 179,
	"griseousorb": 180,
	"groundgem": 182,
	"habanberry": 185,
	"hardstone": 187,
	"healball": 188,
	"heatrock": 193,
	"heavyball": 194,
	"helixfossil": 195,
	"hondewberry": 213,
	"iapapaberry": 217,
	"icegem": 218,
	"icicleplate": 220,
	"icyrock": 221,
	"insectplate": 223,
	"ironball": 224,
	"ironplate": 225,
	"jabocaberry": 230,
	"kasibberry": 233,
	"kebiaberry": 234,
	"kelpsyberry": 235,
	"kingsrock": 236,
	"laggingtail": 237,
	"lansatberry": 238,
	"laxincense": 240,
	"leafstone": 241,
	"leftovers": 242,
	"leppaberry": 244,
	//"mysteryberry": 244,
	"levelball": 246,
	"liechiberry": 248,
	"lifeorb": 249,
	"lightball": 251,
	"lightclay": 252,
	"loveball": 258,
	"luckypunch": 261,
	"lumberry": 262,
	//"miracleberry": 262,
	"lureball": 264,
	"lustrousorb": 265,
	"luxuryball": 266,
	"machobrace": 269,
	"magmarizer": 272,
	"magnet": 273,
	"magoberry": 274,
	"magostberry": 275,
	"masterball": 276,
	"meadowplate": 282,
	"mentalherb": 285,
	"metalcoat": 286,
	"metalpowder": 287,
	"metronome": 289,
	"micleberry": 290,
	"mindplate": 291,
	"miracleseed": 292,
	"moonball": 294,
	"moonstone": 295,
	"muscleband": 297,
	"mysticwater": 300,
	"nanabberry": 302,
	"nestball": 303,
	"netball": 304,
	"nevermeltice": 305,
	"nomelberry": 306,
	"normalgem": 307,
	"occaberry": 311,
	"oddincense": 312,
	"oldamber": 314,
	"oranberry": 319,
	//"berry": 319,
	"ovalstone": 321,
	"pamtreberry": 323,
	"parkball": 325,
	"passhoberry": 329,
	"payapaberry": 330,
	"pechaberry": 333,
	//"psncureberry": 333,
	"persimberry": 334,
	//"bitterberry": 334,
	"petayaberry": 335,
	"pinapberry": 337,
	"plumefossil": 339,
	"poisonbarb": 343,
	"poisongem": 344,
	"pokeball": 345,
	"pomegberry": 351,
	"poweranklet": 354,
	"powerband": 355,
	"powerbelt": 356,
	"powerbracer": 357,
	"powerherb": 358,
	"powerlens": 359,
	"powerweight": 360,
	"premierball": 363,
	"prismscale": 365,
	"protector": 367,
	"psychicgem": 369,
	"qualotberry": 371,
	"quickball": 372,
	"quickclaw": 373,
	"quickpowder": 374,
	"rabutaberry": 375,
	"rarebone": 379,
	"rawstberry": 381,
	//"iceberry": 381,
	"razorclaw": 382,
	"razorfang": 383,
	"razzberry": 384,
	"reapercloth": 385,
	"redcard": 387,
	"berserkgene": 388,
	"redorb": 390,
	"repeatball": 401,
	"mail": 403,
	"rindoberry": 409,
	"ringtarget": 410,
	"rockgem": 415,
	"rockincense": 416,
	"rockyhelmet": 417,
	"rootfossil": 418,
	"roseincense": 419,
	"rowapberry": 420,
	"safariball": 425,
	"salacberry": 426,
	"scopelens": 429,
	"seaincense": 430,
	"sharpbeak": 436,
	"shedshell": 437,
	"shellbell": 438,
	"shinystone": 439,
	"shockdrive": 442,
	"shucaberry": 443,
	"silkscarf": 444,
	//"pinkbow": 444,
	//"polkadotbow": 444,
	"silverpowder": 447,
	"sitrusberry": 448,
	//"goldberry": 448,
	"skullfossil": 449,
	"skyplate": 450,
	"smoothrock": 453,
	"softsand": 456,
	"souldew": 459,
	"spelltag": 461,
	"spelonberry": 462,
	"splashplate": 463,
	"spookyplate": 464,
	"sportball": 465,
	"starfberry": 472,
	"steelgem": 473,
	"leek": 475,
	//"stick": 475,
	"stickybarb": 476,
	"stoneplate": 477,
	"sunstone": 480,
	"tamatoberry": 486,
	"tangaberry": 487,
	"thickclub": 491,
	"thunderstone": 492,
	"timerball": 494,
	"toxicorb": 515,
	"toxicplate": 516,
	"twistedspoon": 520,
	"ultraball": 521,
	"upgrade": 523,
	"wacanberry": 526,
	"watergem": 528,
	"waterstone": 529,
	"watmelberry": 530,
	"waveincense": 531,
	"wepearberry": 533,
	"whiteherb": 535,
	"widelens": 537,
	"wikiberry": 538,
	"wiseglasses": 539,
	"yacheberry": 567,
	"zapplate": 572,
	"zoomlens": 574,
	"abomasite": 575,
	"absolite": 576,
	"aerodactylite": 577,
	"crucibellite": 577,
	"aggronite": 578,
	"alakazite": 579,
	"ampharosite": 580,
	"assaultvest": 581,
	"banettite": 582,
	"blastoisinite": 583,
	"blazikenite": 584,
	"charizarditex": 585,
	"charizarditey": 586,
	"gardevoirite": 587,
	"gengarite": 588,
    // FIXME garchompite & gyaradosite should not be same spritenum
	"garchompite": 589,
	"gyaradosite": 589,
	"heracronite": 590,
	"houndoominite": 591,
	"kangaskhanite": 592,
	"keeberry": 593,
	"lucarionite": 594,
	"luminousmoss": 595,
	"manectite": 596,
	"marangaberry": 597,
	"mawilite": 598,
	"medichamite": 599,
	"mewtwonitex": 600,
	"mewtwonitey": 601,
	"pinsirite": 602,
	"roseliberry": 603,
	"safetygoggles": 604,
	"scizorite": 605,
	"snowball": 606,
	"tyranitarite": 607,
	"venusaurite": 608,
	"weaknesspolicy": 609,
	"pixieplate": 610,
	"fairygem": 611,
	"swampertite": 612,
	"sceptilite": 613,
	"sablenite": 614,
	"altarianite": 615,
	"galladite": 616,
	"audinite": 617,
	"metagrossite": 618,
	"sharpedonite": 619,
	"slowbronite": 620,
	"steelixite": 621,
	"pidgeotite": 622,
	"glalitite": 623,
	"diancite": 624,
	"cameruptite": 625,
	"lopunnite": 626,
	"salamencite": 627,
	"beedrillite": 628,
	"latiasite": 629,
	"latiosite": 630,
	"normaliumz": 631,
	"firiumz": 632,
	"wateriumz": 633,
	"electriumz": 634,
	"grassiumz": 635,
	"iciumz": 636,
	"fightiniumz": 637,
	"poisoniumz": 638,
	"groundiumz": 639,
	"flyiniumz": 640,
	"psychiumz": 641,
	"buginiumz": 642,
	"rockiumz": 643,
	"ghostiumz": 644,
	"dragoniumz": 645,
	"darkiniumz": 646,
	"steeliumz": 647,
	"fairiumz": 648,
	"pikaniumz": 649,
	"decidiumz": 650,
	"inciniumz": 651,
	"primariumz": 652,
	"tapuniumz": 653,
	"marshadiumz": 654,
	"aloraichiumz": 655,
	"snorliumz": 656,
	"eeviumz": 657,
	"mewniumz": 658,
	"pikashuniumz": 659,
	"adrenalineorb": 660,
	"beastball": 661,
	"terrainextender": 662,
	"protectivepads": 663,
	"electricseed": 664,
	"psychicseed": 665,
	"mistyseed": 666,
	"grassyseed": 667,
	"fightingmemory": 668,
	"flyingmemory": 669,
	"poisonmemory": 670,
	"groundmemory": 671,
	"rockmemory": 672,
	"bugmemory": 673,
	"ghostmemory": 674,
	"steelmemory": 675,
	"firememory": 676,
	"watermemory": 677,
	"grassmemory": 678,
	"electricmemory": 679,
	"psychicmemory": 680,
	"icememory": 681,
	"dragonmemory": 682,
	"darkmemory": 683,
	"fairymemory": 684,
	"solganiumz": 685,
	"lunaliumz": 686,
	"ultranecroziumz": 687,
	"mimikiumz": 688,
	"lycaniumz": 689,
	"kommoniumz": 690,
	"sachet": 691,
	"whippeddream": 692,
	"icestone": 693,
	"jawfossil": 694,
	"sailfossil": 695,
	"bottlecap": 696,
	"goldbottlecap": 697,
	"rustedsword": 698,
	"rustedshield": 699,
	"fossilizedbird": 700,
	"fossilizedfish": 701,
	"fossilizeddrake": 702,
	"fossilizeddino": 703,
	"strawberrysweet": 704,
	"lovesweet": 705,
	"berrysweet": 706,
	"cloversweet": 707,
	"flowersweet": 708,
	"starsweet": 709,
	"ribbonsweet": 710,
	"sweetapple": 711,
	"tartapple": 712,
	"throatspray": 713,
	"ejectpack": 714,
	"heavydutyboots": 715,
	"blunderpolicy": 716,
	"roomservice": 717,
	"utilityumbrella": 718,
	"crackedpot": 719,
	"chippedpot": 720,
	"tr00": 721,
	"tr01": 721,
	"tr13": 721,
	"tr14": 721,
	"tr19": 721,
	"tr20": 721,
	"tr26": 721,
	"tr27": 721,
	"tr29": 721,
	"tr30": 721,
	"tr35": 721,
	"tr42": 721,
	"tr85": 721,
	"tr07": 722,
	"tr21": 722,
	"tr39": 722,
	"tr48": 722,
	"tr53": 722,
	"tr56": 722,
	"tr64": 722,
	"tr99": 722,
	"tr66": 723,
	"tr89": 723,
	"tr22": 724,
	"tr54": 724,
	"tr57": 724,
	"tr73": 724,
	"tr78": 724,
	"tr91": 724,
	"tr10": 725,
	"tr23": 725,
	"tr67": 725,
	"tr87": 725,
	"tr94": 725,
	"tr63": 726,
	"tr75": 726,
	"tr76": 726,
	"tr18": 727,
	"tr28": 727,
	"tr60": 727,
	"tr61": 727,
	"tr96": 727,
	"tr33": 728,
	"tr31": 729,
	"tr46": 729,
	"tr52": 729,
	"tr70": 729,
	"tr74": 729,
	"tr79": 729,
	"tr02": 730,
	"tr15": 730,
	"tr36": 730,
	"tr41": 730,
	"tr43": 730,
	"tr55": 730,
	"tr88": 730,
	"tr03": 731,
	"tr04": 731,
	"tr16": 731,
	"tr45": 731,
	"tr84": 731,
	"tr98": 731,
	"tr50": 732,
	"tr59": 732,
	"tr65": 732,
	"tr71": 732,
	"tr72": 732,
	"tr77": 732,
	"tr08": 733,
	"tr09": 733,
	"tr80": 733,
	"tr86": 733,
	"tr11": 734,
	"tr12": 734,
	"tr17": 734,
	"tr25": 734,
	"tr34": 734,
	"tr38": 734,
	"tr40": 734,
	"tr44": 734,
	"tr49": 734,
	"tr69": 734,
	"tr82": 734,
	"tr83": 734,
	"tr97": 734,
	"tr05": 735,
	"tr06": 735,
	"tr24": 736,
	"tr47": 736,
	"tr51": 736,
	"tr62": 736,
	"tr32": 737,
	"tr37": 737,
	"tr58": 737,
	"tr68": 737,
	"tr81": 737,
	"tr93": 737,
	"tr95": 737,
	"tr90": 738,
	"tr92": 738,
	"galaricacuff": 739,
	"galaricawreath": 740,
};

const found = new Map;

for (const {type, sid, names} of spritedata.entries()) {
    if (type !== 'item') continue;
    for (let name of names) {
        const id = toPSID(name);
        const filename = spritedata.formatFilename({id: sid});
        found.set(id, path.join(root, "newsrc/minisprites/items", filename + ".png"));
    }
}

const entries = [];

for (const [id, num] of Object.entries(ITEMS)) {
    const filename = found.get(id);
    if (!filename)
        throw new Error(`can't find: ${id}`);
    entries[num] = filename;
}

for (let i = 0; i < entries.length; i++) {
    if (entries[i] === undefined)
        entries[i] = null;
}

export default {
    width: 24,
    height: 24,
    tile: 16,
    entries
};
