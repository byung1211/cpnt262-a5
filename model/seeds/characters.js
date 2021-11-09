// Create a game character image array.
const characters = [
  {
    id: 1,
    title: "AATROX",
    description: "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.",
    width: 250,
    height: 282,
    pathURL: "images/RiotX_ChampionList_aatrox.jpg",
    linkURL: "https://www.leagueoflegends.com/en-us/champions/aatrox/",
    credit: "LEAGUE OF LEGENDS",
    creditURL: "https://www.leagueoflegends.com/"
  },
  {
    id: 2,
    title: "AHRI",
    description: "Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their life essence. Despite her predatory nature, Ahri retains a sense of empathy as she receives flashes of memory from each soul she consumes.",
    width: 250,
    height: 282,
    pathURL: "images/RiotX_ChampionList_ahri.jpg",
    linkURL: "https://www.leagueoflegends.com/en-us/champions/ahri/",
    credit: "LEAGUE OF LEGENDS",
    creditURL: "https://www.leagueoflegends.com/"
  },
  {
    id: 3,
    title: "AKALI",
    description: "Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master.",
    width: 250,
    height: 282,
    pathURL: "images/RiotX_ChampionList_akali.jpg",
    linkURL: "https://www.leagueoflegends.com/en-us/champions/akali/",
    credit: "LEAGUE OF LEGENDS",
    creditURL: "https://www.leagueoflegends.com/"
  },
  {
    id: 4,
    title: "AKSHAN",
    description: "Raising an eyebrow in the face of danger, Akshan fights evil with dashing charisma, righteous vengeance, and a conspicuous lack of shirts. He is highly skilled in the art of stealth combat, able to evade the eyes of his enemies and reappear when they least expect him. With a keen sense of justice and a legendary death-reversing weapon, he rights the wrongs of Runeterra's many scoundrels while living by his own moral code: “Don't be an ass.",
    width: 250,
    height: 282,
    pathURL: "images/RiotX_ChampionList_akshan_v2.jpg",
    linkURL: "https://www.leagueoflegends.com/en-us/champions/akshan/",
    credit: "LEAGUE OF LEGENDS",
    creditURL: "https://www.leagueoflegends.com/"
  },
  {
    id: 5,
    title: "ALISTAR",
    description: "Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly becoming a beast. Now, free of the chains of his former masters, he fights in the name of the downtrodden and the disadvantaged, his rage as much a weapon as his horns, hooves and fists.",
    width: 250,
    height: 282,
    pathURL: "images/RiotX_ChampionList_alistar.jpg",
    linkURL: "https://www.leagueoflegends.com/en-us/champions/alistar/",
    credit: "LEAGUE OF LEGENDS",
    creditURL: "https://www.leagueoflegends.com/"
  },
  {
    id: 6,
    title: "AMUMU",
    description: "Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe a living cadaver, small in stature and wrapped in creeping bandages. Amumu has inspired myths, songs, and folklore told and retold for generations—such that it is impossible to separate truth from fiction.",
    width: 250,
    height: 282,
    pathURL: "images/RiotX_ChampionList_amumu.jpg",
    linkURL: "https://www.leagueoflegends.com/en-us/champions/amumu/",
    credit: "LEAGUE OF LEGENDS",
    creditURL: "https://www.leagueoflegends.com/"
  },
  {
    id: 7,
    title: "ANIVIA",
    description: "Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland. Anivia guides and protects the tribes of the harsh north, who revere her as a symbol of hope, and a portent of great change. She fights with every ounce of her being, knowing that through her sacrifice, her memory will endure, and she will be reborn into a new tomorrow.",
    width: 250,
    height: 282,
    pathURL: "images/RiotX_ChampionList_anivia.jpg",
    linkURL: "https://www.leagueoflegends.com/en-us/champions/anivia/",
    credit: "LEAGUE OF LEGENDS",
    creditURL: "https://www.leagueoflegends.com/"
  },
  {
    id: 8,
    title: "ANNIE",
    description: "Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable, emotional outbursts, though she eventually learned to control these “playful tricks.” Her favorite includes the summoning of her beloved teddy bear, Tibbers, as a fiery protector. Lost in the perpetual innocence of childhood, Annie wanders the dark forests, always looking for someone to play with.",
    width: 250,
    height: 282,
    pathURL: "images/RiotX_ChampionList_annie.jpg",
    linkURL: "https://www.leagueoflegends.com/en-us/champions/annie/",
    credit: "LEAGUE OF LEGENDS",
    creditURL: "https://www.leagueoflegends.com/"
  },
  {
    id: 9,
    title: "ASHE",
    description: "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice. With her people's belief that she is the mythological hero Avarosa reincarnated, Ashe hopes to unify the Freljord once more by retaking their ancient, tribal lands.",
    width: 250,
    height: 282,
    pathURL: "images/RiotX_ChampionList_ashe.jpg",
    linkURL: "https://www.leagueoflegends.com/en-us/champions/ashe/",
    credit: "LEAGUE OF LEGENDS",
    creditURL: "https://www.leagueoflegends.com/"
  },
  {
    id: 10,
    title: "BLITZCRANK",
    description: "Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found this primary purpose too restricting, and modified his own form to better serve the fragile people of the Sump. Blitzcrank selflessly uses his strength and durability to protect others, extending a helpful metal fist or burst of energy to subdue any troublemakers.",
    width: 250,
    height: 282,
    pathURL: "images/RiotX_ChampionList_blitzcrank.jpg",
    linkURL: "https://www.leagueoflegends.com/en-us/champions/blitzcrank/",
    credit: "LEAGUE OF LEGENDS",
    creditURL: "https://www.leagueoflegends.com/"
  },
  {
    id: 11,
    title: "BRAND",
    description: "Once a tribesman of the icy Freljord named Kegan Rodhe, the creature known as Brand is a lesson in the temptation of greater power. Seeking one of the legendary World Runes, Kegan betrayed his companions and seized it for himself—and, in an instant, the man was no more. His soul burned away, his body a vessel of living flame, Brand now roams Valoran in search of other Runes, swearing revenge for wrongs he could never possibly have suffered in a dozen mortal lifetimes.",
    width: 250,
    height: 282,
    pathURL: "images/RiotX_ChampionList_brand.jpg",
    linkURL: "https://www.leagueoflegends.com/en-us/champions/brand/",
    credit: "LEAGUE OF LEGENDS",
    creditURL: "https://www.leagueoflegends.com/"
  },
  {
    id: 12,
    title: "GAREN",
    description: "A proud and noble warrior, Garen fights as one of the Dauntless Vanguard. He is popular among his fellows, and respected well enough by his enemies—not least as a scion of the prestigious Crownguard family, entrusted with defending Demacia and its ideals. Clad in magic-resistant armor and bearing a mighty broadsword, Garen stands ready to confront mages and sorcerers on the field of battle, in a veritable whirlwind of righteous steel.",
    width: 250,
    height: 282,
    pathURL: "images/RiotX_ChampionList_garen.jpg",
    linkURL: "https://www.leagueoflegends.com/en-us/champions/garen/",
    credit: "LEAGUE OF LEGENDS",
    creditURL: "https://www.leagueoflegends.com/"
  } 
];

module.exports = characters;