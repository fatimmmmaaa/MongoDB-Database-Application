import 'dotenv/config'
// Require connection file to connect
import mongoose from 'mongoose';

await mongoose.connect(process.env.ATLAS_URI)
// Require Models for delete and create operations

import Anime from '../models/anime.js';
import Jutsu from '../models/jutsu.js';
import Villages from '../models/villages.js';

try {

    await Anime.deleteMany({});
    await Jutsu.deleteMany({});
    await Villages.deleteMany({});

    //naruto data
    const Naruto = [
        {
            name: "Naruto",
            lastName: "Uzumaki",
            abilities: [
                "Nine-Tails Chakra (Kurama)",
                "Sage Mode",
                "Six Paths Chakra",
                "Shadow Clone Jutsu (Kage Bunshin no Jutsu)",
                "Rasengan",
                "Rasen Shuriken",
                "Big Ball Rasengan (Chō Oodama Rasengan)",
                "Sage Art: Super Great Ball Rasengan",
                "Tailed Beast Transformation",
                "Six Paths Sage Mode",
                "Uzumaki Clan Sealing Techniques",
                "Enhanced Physical Abilities",
                "Leadership and Tactical Genius"
              ],
        }, 
        {
            name: "Shikamaru",
            lastName: "Nara",
            abilities: [
                "Shadow Possession Jutsu (Kage Mane no Jutsu)",
                "Kage Kubi Shibari no Jutsu",
                "Shadow Sewing (Kage Nui)",
                "Tactical Genius",
                "Ninja Tools Mastery",
                "Enhanced Chakra Control",
                "Leadership",
                "Strategic Combat"
            ],
        },
        {
            name: "Kakashi",
            lastName: "Hatake",
            abilities: [
                "Sharingan",
                "Chidori (Lightning Blade)",
                "Chidori Nagashi",
                "Kamui (Mangekyō Sharingan)",
                "Raikiri (Lightning Cutter)",
                "Ninja Tool Mastery",
                "Summoning Jutsu (Ninken)",
                "Tactical Genius and Leadership",
                "Enhanced Physical Abilities",
                "Six Paths Power (Later in the Series)",
                "Perfected Sharingan Mastery"
            ],
        }
    ];
    const createdAnime = await Anime.create(Naruto);
    console.log('Anime Created: ', createdAnime);



  const villages = [
    {
        village: 'Hidden Leaf Village',
        leader: 'Hokage',
        description: 'A village where Naruto grew up led by the Hokage.',
    },
    {
        village: 'Hidden Sand Village',
        leader: 'Kazekage',
        description: 'A desert village led by the Kazekage. (Gaara, iykyk)',
    },
    {
        village: 'Hidden Mist Village',
        leader: 'Mizukage',
        description: 'The village known for its bloodline clans led by the Mizukage.',
    },
  ];


  // Villages Data
  const createdVillages = await Villages.create(villages); 
  console.log('Villages created: ', createdVillages);



  const jutsu= [
    {
        jutsu: 'Rasengan',
        description: 'A spinning ball of chakra formed and controlled by the user.',
        type: 'Ninjutsu'
    },
    {
        jutsu: 'Sharingan',
        description: 'A powerful visual jutsu passed down through the Uchiha Clan.',
        type: 'Genjutsu'
    },
    {
        jutsu: 'Chidori',
        description: 'A high-speed lightning-based attack used by Kakashi and taught Sauske.',
        type: 'Ninjutsu'
    },
  ];

      // Jutsu Data
      const createdJutsu = await Jutsu.create(jutsu);
      console.log('Jutsu created: ', createdJutsu);


} catch (err) {
  console.log(err);
} finally {
  await mongoose.connection.close();
}