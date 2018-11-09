module.exports = {

  createMap: function(){

    var summonersMap = [['Low Fire Elemental','Lamor'],
      //2*
      ['Fire Imp','Cogma'],['Fire Pixie','Tatu'],['Fire Yeti','Tantra'],
      ['Fire Hellhound','Sieq'],['Fire Warbear','Ursha'],['Fire Elemental','Bremis'],
      ['Fire Garuda','Cahule'],['Fire Harpu','Colleen'],['Fire Howl','Lala'],
      //3*
      ['Fire Fairy','Iselia'],['Fire Harpy','Lucasha'],['Fire Inugami','Raoq'],
      ['Fire Salamander','Krakdon'],['Fire Serpent','Fao'],['Fire Golem','Kugo'],
      ['Fire Griffon','Spectra'],['Fire Inferno','Tagaros'],
      ['High Fire Elemental','Kahli'],['Fire Bearman','Kungen'],
      ['Fire Werewolf','Garoche'],['Fire Viking','Geoffrey'],['Fire Amazon','Ceres'],
      ['Fire Martial Cat','Mei'],['Fire Vagabond','Kai\'en'],
      ['Fire Magical Archer','Cassandra'],['Fire Bounty Hunter','Randy'],
      ['Fire Imp Champion','Fairo'],['Fire Mystic Witch','Rebecca'],
      ['Fire Grim Reaper','Sath'],['Fire Living Armor','Iron'],
      ['Fire Drunken Master','Xiao Chun'],['Fire Minotauros','Burentau'],
      ['Fire Lizardman','Igmanodon'],['Fire Taoist','Gunpyeong'],
      ['Fire Beast Hunter','Nangrim'],['Fire Penguin Knight','Naki'],
      ['Fire Battle Mammoth','Granite'],['Fire Cow Girl','Anne'],
      ['Fire Charger Shark','Ignicus'],['Fire Martial Artist','Sin'],
      ['Fire Mummy','Sonora'],['Fire Frankenstein','Bulldozer'],
      ['Fire Elven Ranger','Adrian'],['Fire Harg','Racuni'],
      //4*
      ['Fire Nine-tailed Fox','Shihwa'],['Fire Undine','Atenai'],
      ['Fire Sylph','Baretta'],['Fire Sylphid','Fria'],['Fire Succubus','Akia'],
      ['Fire Joker','Jojo'],['Fire Ninja','Garo'],['Fire Pierret','Clara'],
      ['Fire Phantom Thief','Jean'],['Fire Vampire','Verdehile'],
      ['Fire Epikion Priest','Chloe'],['Fire Rakshasa','Hwa'],
      ['Fire Death Knight','Arnold'],['Fire Lich','Antares'],['Fire Samurai','Jun'],
      ['Fire Kung Fu Girl','Hong Hua'],['Fire Brownie Magician','Draco'],
      ['Fire Kobold Bomber','Zibrolta'],['Fire Sky Dancer','Hwahee'],
      ['Fire Barbaric King','Surtr'],['Fire Pirate Captain','Carrack'],
      ['Fire Mermaid','Platy'],['Fire Magic Knight','Astar'],['Fire Assassin','Lexy'],
      ['Fire Neostone Fighter','Trevor'],['Fire Neostone Agent','Lisa'],
      ['Fire Anubis','Khmun'],['Fire Horus','Duamutef'],
      ['Fire Jack-o\'-lantern','Smokey'],['Fire Dice Magician','Ludo'],
      ['Fire Harp Magician','Harmonia'],['Fire Chakram Dancer','Shaina'],
      ['Fire Boomerang Warrior','Maruna'],['Fire Dryad','Nisha'],
      //5*
      ['Fire Valkyrja','Vanessa'],['Fire Dragon','Zaiross'],['Fire Phoenix','Perna'],
      ['Fire Chimera','Rakan'],['Fire Oracle','Juno'],['Fire Occult Girl','Rica'],
      ['Fire Dragon Knight','Laika'],['Fire Monkey King','Mei Hou Wang'],
      ['Fire Archangel','Velajuel'],['Fire Beast Monk','Kumar'],
      ['Fire Hell Lady','Raki'],['Fire Pioneer','Chiwu'],['Fire Polar Queen','Brandia'],
      ['Fire Ifrit','Tesarion'],['Fire Sea Emperor','Okeanos'],
      ['Fire Desert Queen','Sekhmet'],['Fire Fairy King','Daphnis'],
      ['Fire Panda Warrior','Xiong Fei'],['Fire Unicorn','Helena'],
      ['Fire Paladin','Ophilia'],['Fire Druid','Bellenus'],
      //Water
      ['Low Water Elemental','Tigresse'],
      //2*
      ['Water Imp','Fynn'],['Water Pixie','Kacey'],['Water Yeti','Kunda'],
      ['Water Hellhound','Tarq'],['Water Elemental','Daharenos'],
      ['Water Garuda','Konamiya'],['Water Salamander','Kaimann'],
      ['Water Harpu','Sisroo'],['Water Howl','Lulu'],
      ['Water Viking','Huga'],['Water Vagabond','Allen'],
      //3*
      ['Water Fairy','Elucia'],['Water Harpy','Ramira'],['Water Warbear','Dagora'],
      ['Water Inugami','Icaru'],['Water Serpent','Shailoq'],['Water Golem','Kuhn'],
      ['Water Griffon','Khan'],['Water Inferno','Purian'],
      ['High Water Elemental','Ellena'],['Water Bearman','Gruda'],
      ['Water Werewolf','Vigor'],['Water Amazon','Ellin'],
      ['Water Martial Cat','Mina'],['Water Epikion Priest','Rina'],
      ['Water Magical Archer','Sharon'],['Water Bounty Hunter','Wayne'],
      ['Water Imp Champion','Yaku'],['Water Mystic Witch','Megan'],
      ['Water Grim Reaper','Hemos'],['Water Living Armor','Nickel'],
      ['Water Drunken Master','Mao'],['Water Minotauros','Urtau'],
      ['Water Lizardman','Kernodon'],['Water Beast Hunter','Gangchun'],
      ['Water Penguin Knight','Toma'],['Water Battle Mammoth','Talc'],
      ['Water Cow Girl','Sera'],['Water Charger Shark','Acqus'],
      ['Water Martial Artist','Luan'],['Water Mummy','Nubia'],
      ['Water Frankenstein','Tractor'],['Water Elven Ranger','Eluin'],
      ['Water Harg','Remy'],
      //4*
      ['Water Nine-tailed Fox','Soha'],['Water Undine','Mikene'],
      ['Water Sylph','Tyron'],['Water Sylphid','Lumirecia'],['Water Succubus','Izaria'],
      ['Water Joker','Sian'],['Water Ninja','Susano'],['Water Pierret','Julie'],
      ['Water Phantom Thief','Luer'],['Water Vampire','Liesel'],['Water Rakshasa','Su'],
      ['Water Death Knight','Fedora'],['Water Lich','Rigel'],['Water Samurai','Kaz'],
      ['Water Kung Fu Girl','Xiao Lin'],['Water Brownie Magician','Orion'],
      ['Water Kobold Bomber','Malaka'],['Water Sky Dancer','Mihyang'],
      ['Water Taoist','Gildong'],['Water Barbaric King','Aegir'],
      ['Water Pirate Captain','Galleon'],['Water Mermaid','Tetra'],
      ['Water Magic Knight','Lapis'],['Water Assassin','Stella'],
      ['Water Neostone Fighter','Ryan'],['Water Neostone Agent','Emma'],
      ['Water Anubis','Avaris'],['Water Horus','Qebehsenuef'],
      ['Water Jack-o\'-lantern','Chilling'],['Water Dice Magician','Reno'],
      ['Water Harp Magician','Sonnet'],['Water Chakram Dancer','Talia'],
      ['Water Boomerang Warrior','Sabrina'],['Water Dryad','Herne'],
      //5*
      ['Water Valkyrja','Camilla'],['Water Dragon','Verad'],
      ['Water Phoenix','Sigmarus'],['Water Chimera','Taor'],['Water Oracle','Praha'],
      ['Water Occult Girl','Anavel'],['Water Dragon Knight','Chow'],
      ['Water Monkey King','Shi Hou'],['Water Archangel','Ariel'],
      ['Water Beast Monk','Chandra'],['Water Hell Lady','Beth'],
      ['Water Pioneer','Woosa'],['Water Polar Queen','Alicia'],
      ['Water Ifrit','Theomars'],['Water Sea Emperor','Poseidon'],
      ['Water Desert Queen','Bastet'],['Water Fairy King','Psamathe'],
      ['Water Panda Warrior','Mo Long'],['Water Unicorn','Amelia'],
      ['Water Paladin','Josephine'],['Water Druid','Abellio'],
      //Wind
      ['Low Wind Elemental','Samour'],
      //2*
      ['Wind Fairy','Aeilene'],['Wind Imp','Ralph'],['Wind Pixie','Shannon'],
      ['Wind Yeti','Rakaja'],['Wind Hellhound','Gamir'],['Wind Warbear','Ramagos'],
      ['Wind Elemental','Taharus'],['Wind Garuda','Lindermen'],
      ['Wind Salamander','Lukan'],['Wind Harpu','Seal'],['Wind Howl','Chichi'],
      ['Wind Viking','Walter'],['Wind Vagabond','Roid'],
      //3*
      ['Wind Harpy','Prilea'],['Wind Inugami','Ramahan'],['Wind Serpent','Ermeda'],
      ['Wind Golem','Ragion'],['Wind Griffon','Bernard'],['Wind Inferno','Anduril'],
      ['High Wind Elemental','Moria'],['Wind Bearman','Dagorr'],
      ['Wind Werewolf','Shakan'],['Wind Amazon','Hina'],
      ['Wind Martial Cat','Naomi'],['Wind Epikion Priest','Michelle'],
      ['Wind Magical Archer','Ardella'],['Wind Bounty Hunter','Roger'],
      ['Wind Imp Champion','Pigma'],['Wind Mystic Witch','Silia'],
      ['Wind Grim Reaper','Hiva'],['Wind Living Armor','Copper'],
      ['Wind Drunken Master','Huan'],['Wind Minotauros','Eintau'],
      ['Wind Lizardman','Velfinodon'],['Wind Beast Hunter','Suri'],
      ['Wind Penguin Knight','Mav'],['Wind Battle Mammoth','Olivine'],
      ['Wind Cow Girl','Hannah'],['Wind Charger Shark','Zephicus'],
      ['Wind Martial Artist','Lo'],['Wind Mummy','Namib'],
      ['Wind Frankenstein','Crane'],['Wind Elven Ranger','Erwin'],
      //4*
      ['Wind Nine-tailed Fox','Arang'],['Wind Undine','Delphoi'],
      ['Wind Sylph','Shimitae'],['Wind Sylphid','Acasis'],['Wind Succubus','Selena'],
      ['Wind Joker','Lushen'],['Wind Ninja','Orochi'],['Wind Pierret','Sophia'],
      ['Wind Phantom Thief','Julien'],['Wind Vampire','Argen'],['Wind Rakshasa','Yen'],
      ['Wind Death Knight','Briand'],['Wind Lich','Fuco'],['Wind Samurai','Kaito'],
      ['Wind Kung Fu Girl','Ling Ling'],['Wind Brownie Magician','Aquila'],
      ['Wind Kobold Bomber','Taurus'],['Wind Sky Dancer','Chasun'],
      ['Wind Taoist','Woochi'],['Wind Barbaric King','Hraesvelg'],
      ['Wind Pirate Captain','Barque'],['Wind Mermaid','Cichlid'],
      ['Wind Magic Knight','Lupinus'],['Wind Assassin','Tanya'],
      ['Wind Neostone Fighter','Logan'],['Wind Neostone Agent','Olivia'],
      ['Wind Anubis','Iunu'],['Wind Horus','Imesety'],
      ['Wind Jack-o\'-lantern','Windy'],['Wind Harg','Raviti'],
      ['Wind Dice Magician','Morris'],['Wind Harp Magician','Triana'],
      ['Wind Chakram Dancer','Melissa'],['Wind Boomerang Warrior','Zenobia'],
      ['Wind Dryad','Mellia'],
      //5*
      ['Wind Valkyrja','Katarina'],['Wind Dragon','Jamire'],['Wind Phoenix','Teshar'],
      ['Wind Chimera','Lagmaron'],['Wind Oracle','Seara'],
      ['Wind Occult Girl','Charlotte'],['Wind Dragon Knight','Leo'],
      ['Wind Monkey King','Xing Zhe'],['Wind Archangel','Eladriel'],
      ['Wind Beast Monk','Ritesh'],['Wind Hell Lady','Ethna'],
      ['Wind Pioneer','Pungbaek'],['Wind Polar Queen','Tiana'],
      ['Wind Ifrit','Akhamamir'],['Wind Sea Emperor','Triton'],
      ['Wind Desert Queen','Hathor'],['Wind Fairy King','Ganymede'],
      ['Wind Panda Warrior','Feng Yan'],['Wind Unicorn','Diana'],
      ['Wind Paladin','Louise'],['Wind Druid','Taranys'],
      //Light
      //2*
      ['Light Imp','Taru'],['Light Pixie','Cheryl'],['Light Yeti','Arkajan'],
      ['Light Hellhound','Shamar'],['Light Salamander','Sharman'],
      ['Light Howl','Shushu'],['Light Viking','Jansson'],
      //3*
      ['Light Fairy','Neal'],['Light Harpy','Kabilla'],['Light Warbear','Lusha'],
      ['Light Elemental','Priz'],['Light Garuda','Teon'],['Light Inugami','Belladeon'],
      ['Light Serpent','Elpuria'],['Light Golem','Groggo'],['Light Griffon','Shamann'],
      ['Light Inferno','Eludain'],['High Light Elemental','Shren'],
      ['Light Harpu','Sia'],['Light Bearman','Ahman'],['Light Werewolf','Eshir'],
      ['Light Amazon','Lyn'],['Light Martial Cat','Xiao Ling'],
      ['Light Vagabond','Darion'],['Light Bounty Hunter','Walkers'],
      ['Light Imp Champion','Shaffron'],['Light Mystic Witch','Linda'],
      ['Light Grim Reaper','Prom'],['Light Living Armor','Silver'],
      ['Light Drunken Master','Tien Qin'],['Light Minotauros','Grotau'],
      ['Light Lizardman','Glinodon'],['Light Beast Hunter','Baekdu'],
      ['Light Penguin Knight','Dona'],['Light Battle Mammoth','Marble'],
      ['Fairy Queen','Fran'],['Light Cow Girl','Loren'],
      ['Light Charger Shark','Rumicus'],['Light Martial Artist','Hiro'],
      ['Light Mummy','Sahara'],['Light Frankenstein','Driller'],
      ['Light Elven Ranger','Lucien'],
      //4*
      ['Light Nine-tailed Fox','Chamie'],['Light Undine','Icasha'],
      ['Light Sylph','Eredas'],['Light Sylphid','Mihael'],['Light Succubus','Aria'],
      ['Light Joker','Figaro'],['Light Ninja','Gin'],['Light Pierret','Eva'],
      ['Light Phantom Thief','Louis'],['Light Epikion Priest','Iona'],
      ['Light Magical Archer','Chris'],['Light Rakshasa','Pang'],
      ['Light Death Knight','Conrad'],['Light Lich','Halphas'],
      ['Light Samurai','Tosi'],['Light Kung Fu Girl','Liu Mei'],
      ['Light Brownie Magician','Gemini'],['Light Kobold Bomber','Dover'],
      ['Light Taoist','Hwadam'],['Light Barbaric King','Mimirr'],
      ['Light Pirate Captain','Brig'],['Light Mermaid','Molly'],
      ['Light Magic Knight','Iris'],['Light Assassin','Natalie'],
      ['Light Neostone Fighter','Lucas'],['Light Neostone Agent','Illianna'],
      ['Light Anubis','Amarna'],['Light Jack-o\'-lantern','Misty'],
      ['Light Harg','Dova'],['Light Dice Magician','Tablo'],
      ['Light Chakram Dancer','Deva'],['Light Boomerang Warrior','Bailey'],
      ['Light Dryad','Felleria'],
      //5*
      ['Light Valkyrja','Akroma'],['Light Dragon','Zerath'],['Light Phoenix','Eludia'],
      ['Light Chimera','Shan'],['Light Vampire','Julianne'],['Light Oracle','Laima'],
      ['Light Occult Girl','Lora'],['Light Dragon Knight','Jager'],
      ['Light Monkey King','Qitian Dasheng'],['Light Archangel','Artamiel'],
      ['Light Beast Monk','Shazam'],['Light Hell Lady','Asima'],
      ['Light Sky Dancer','Yeonhong'],['Light Pioneer','Nigong'],
      ['Light Polar Queen','Elenoa'],['Light Ifrit','Elsharion'],
      ['Light Sea Emperor','Pontos'],['Light Desert Queen','Isis'],
      ['Light Horus','Wedjat'],['Light Fairy King','Oberon'],
      ['Light Panda Warrior','Tian Lang'],['Light Harp Magician','Celia'],
      ['Light Unicorn','Eleanor'],['Light Paladin','Jeanne'],['Light Druid','Valantis'],
      //Dark
      ['Low Dark Elemental','Havana'],
      //2*
      ['Dark Fairy','Sorin'],['Dark Imp','Garok'],['Dark Pixie','Camaryn'],
      ['Dark Warbear','Gorgo'],['Dark Garuda','Rizak'],['Dark Salamander','Decamaron'],
      ['Dark Howl','Chacha'],
      //3*
      ['Dark Yeti','Kumae'],['Dark Harpy','Hellea'],['Dark Hellhound','Shumar'],
      ['Dark Elemental','Camules'],['Dark Inugami','Kro'],['Dark Serpent','Mantura'],
      ['Dark Golem','Maggi'],['Dark Griffon','Varus'],['Dark Inferno','Drogan'],
      ['High Dark Elemental','Jumaline'],['Dark Harpu','Seren'],['Dark Bearman','Haken'],
      ['Dark Werewolf','Jultan'],['Dark Viking','Janssen'],['Dark Amazon','Mara'],
      ['Dark Martial Cat','Miho'],['Dark Vagabond','Jubelle'],
      ['Dark Epikion Priest','Rasheed'],['Dark Bounty Hunter','Jamie'],
      ['Dark Imp Champion','Loque'],['Dark Mystic Witch','Gina'],
      ['Dark Grim Reaper','Thrain'],['Dark Living Armor','Zinc'],
      ['Dark Drunken Master','Wei Shin'],['Dark Minotauros','Kamatau'],
      ['Dark Lizardman','Devinodon'],['Dark Taoist','Woonhak'],
      ['Dark Beast Hunter','Hanra'],['Dark Penguin Knight','Kuna'],
      ['Dark Battle Mammoth','Basalt'],['Dark Cow Girl','Cassie'],
      ['Dark Charger Shark','Calicus'],['Dark Martial Artist','Jackie'],
      ['Dark Mummy','Karakum'],['Dark Frankenstein','Crawler'],['Dark Harg','Kroa'],

      //4*
      ['Dark Nine-tailed Fox','Kamiya'],['Dark Undine','Tilasha'],
      ['Dark Sylph','Aschubel'],['Dark Sylphid','Icares'],['Dark Succubus','Isael'],
      ['Dark Joker','Liebli'],['Dark Pierret','Luna'],
      ['Dark Phantom Thief','Guillaume'],['Dark Magical Archer','Bethony'],
      ['Dark Rakshasa','Ran'],['Dark Death Knight','Dias'],['Dark Lich','Grego'],
      ['Dark Samurai','Sige'],['Dark Kung Fu Girl','Fei'],
      ['Dark Brownie Magician','Korona'],['Dark Kobold Bomber','Bering'],
      ['Dark Barbaric King','Hrungnir'],['Dark Pirate Captain','Frigate'],
      ['Dark Mermaid','Betta'],['Dark Magic Knight','Lanett'],
      ['Dark Assassin','Isabelle'],['Dark Neostone Fighter','Karl'],
      ['Dark Horus','Amduat'],['Dark Jack-o\'-lantern','Dusky'],
      ['Dark Elven Ranger','Isillen'],['Dark Dice Magician','Monte'],
      ['Dark Chakram Dancer','Belita'],['Dark Boomerang Warrior','Martina'],
      ['Dark Dryad','Hyanes'],
      //5*
      ['Dark Ninja','Han'],['Dark Valkyrja','Trinity'],['Dark Dragon','Grogen'],
      ['Dark Phoenix','Jaara'],['Dark Chimera','Zeratu'],['Dark Vampire','Cadiz'],
      ['Dark Oracle','Giana'],['Dark Occult Girl','Nickie'],
      ['Dark Dragon Knight','Ragdoll'],['Dark Monkey King','Son Zhang Lao'],
      ['Dark Archangel','Fermion'],['Dark Beast Monk','Rahul'],
      ['Dark Hell Lady','Craka'],['Dark Sky Dancer','Wolyung'],
      ['Dark Pioneer','Woonsa'],['Dark Polar Queen','Lydia'],
      ['Dark Ifrit','Veromos'],['Dark Sea Emperor','Manannan'],
      ['Dark Neostone Agent','Sylvia'],['Dark Anubis','Thebae'],
      ['Dark Desert Queen','Nephthys'],['Dark Fairy King','Nyx'],
      ['Dark Panda Warrior','Mi Ying'],['Dark Harp Magician','Vivachel'],
      ['Dark Unicorn','Alexandra'],['Dark Paladin','Leona'],['Dark Druid','Pater']
    ];
    return summonersMap;
  }


}