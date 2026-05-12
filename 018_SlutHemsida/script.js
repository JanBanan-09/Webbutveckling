// ================= IMAGE FALLBACK =================
function fixImage(img) {
    img.onerror = () => {
      img.src = "images/placeholder.png";
    };
  }
  
  
  
  
  
  
  
  
  
  
  // ================= BOSSES =================
  const bosses = [
    {
      id: "malenia",
      name: "Malenia",
      difficulty: "Very Hard",
      location: "Haligtree",
      image: "images/malenia.jpg",
      lore: "Malenia, Blade of Miquella, later known as Malenia, Goddess of Rot, is an optional remembrance Boss in Elden Ring. She is a Demigod Shardbearer who is encountered in Elphael, Brace of the Haligtree.",
      drops: ["Rot Goddess Remembrance"]
    },
    {
      id: "radahn",
      name: "Radahn",
      difficulty: "Hard",
      location: "Caelid",
      image: "images/radahn.jpg",
      lore: "Starscourge Radahn (星砕きのラダーン, Hoshikudaki no Radān), also known as General Radahn, the Red Lion General, and later as Promised Consort Radahn and Radahn, Consort of Miquella, is an optional Demigod boss in Elden Ring and a mandatory God boss in Elden Ring:;Shadow of the Erdtree.",
      drops: ["Starscourge Remembrance"]
    },
    {
      id: "godrick",
      name: "Godrick",
      difficulty: "Medium",
      location: "Stormveil",
      image: "images/godrick.jpg",
      lore: "Godrick the Grafted (接ぎ木のゴドリック, Tsugiki no Godorikku) is a Boss in Elden Ring. He is a Demigod and a Shardbearer encountered in Stormveil Castle.",
      drops: ["Godrick Rune"]
    },
    {
      id: "mohg",
      name: "Mohg, Lord of Blood",
      difficulty: "Very Hard",
      location: "Mohgwyn Palace",
      image: "images/mohg.jpg",
      lore: "Mohg, Lord of Blood and Mohg, the Omen is a boss in Elden Ring. He is a Demigod and a Shardbearer who is encountered in the Subterranean Shunning-Grounds and Mohgwyn Palace.",
      drops: ["Blood Remembrance"]
    },
    {
      id: "firegiant",
      name: "Fire Giant",
      difficulty: "Hard",
      location: "Mountaintops",
      image: "images/fire.jpg",
      lore: "The Fire Giant (火の巨人, Hi no Kyojin) is a boss in Elden Ring. He is encountered at Flame Peak on the Mountaintops of the Giants. This encounter is not optional as it must be completed to unlock Crumbling Farum Azula and advance the main storyline.",
      drops: ["Fire Giant Remembrance"]
    },
    {
      id: "godfrey",
      name: "Godfrey",
      difficulty: "Very Hard",
      location: "Leyndell",
      image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godfrey.jpg",
      lore: "First Elden Lord.",
      drops: ["Hoarah Loux Remembrance"]
    },
    {
      id: "radagon",
      name: "Radagon",
      difficulty: "Very Hard",
      location: "Erdtree",
      image: "images/radagon.jpg",
      lore: "Final trial.",
      drops: ["Elden Remembrance"]
    },
    {
      id: "eldenbeast",
      name: "Elden Beast",
      difficulty: "Very Hard",
      location: "Erdtree",
      image: "images/elden.jpg",
      lore: "Final boss.",
      drops: ["Elden Remembrance"]
    },
    {
      id: "astel",
      name: "Astel",
      difficulty: "Hard",
      location: "Lake of Rot",
      image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/astel.jpg",
      lore: "Void creature.",
      drops: ["Astel Remembrance"]
    },
    {
      id: "placidusax",
      name: "Placidusax",
      difficulty: "Very Hard",
      location: "Farum Azula",
      image: "images/placid.jpg",
      lore: "Dragonlord.",
      drops: ["Dragonlord Remembrance"]
    },
    {
      id: "tree",
      name: "Tree Sentinel",
      difficulty: "Medium",
      location: "Limgrave",
      image: "images/tree.jpg",
      lore: "Golden knight.",
      drops: ["Golden Halberd"]
    },
    {
      id: "crucible",
      name: "Crucible Knight",
      difficulty: "Hard",
      location: "Various",
      image: "images/cruc.jpg",
      lore: "Ancient warrior.",
      drops: ["Crucible Armor"]
    },
    {
      id: "blackknife",
      name: "Black Knife Assassin",
      difficulty: "Medium",
      location: "Various",
      image: "images/black.jpg",
      lore: "Stealth killer.",
      drops: ["Black Knife"]
    }
  ];
  
  
  
  
  
  
  
  
  
  
  
  
  // ================= WEAPONS =================
  const weapons = [
    {
      id: "moonveil",
      name: "Moonveil",
      type: "Katana",
      image: "images/moon.webp",
      damage: "Magic",
      scaling: "DEX / INT",
      description: "Moonveil is a rare Katana in Elden Ring Nightreign. This weapon deals Physical and Magic damage and has Strength, Dexterity and Intelligence scaling. Its attack affinity is Slash / Pierce, and it has innate Hemorrhage buildup on hit. Moonveil comes with Transient Moonlight Ash of War (Weapon Skill)."
    },
    {
      id: "rivers",
      name: "Rivers of Blood",
      type: "Katana",
      image: "images/rivers.webp",
      damage: "Bleed",
      scaling: "DEX / ARC",
      description:"Rivers Of Blood is a rare Katana in Elden Ring Nightreign. This weapon deals Physical and Fire damage and has Strength, Dexterity and Arcane scaling. Its attack affinity is Slash / Pierce, and it has innate Hemorrhage buildup on hit. Rivers Of Blood comes with Corpse Piler Ash of War (Weapon Skill)."
    },
    {
      id: "darkmoon",
      name: "Dark Moon Greatsword",
      type: "Greatsword",
      image: "images/Dark.webp",
      damage: "Magic",
      scaling: "INT",
      description:"Dark Moon Greatsword is a legendary Greatsword in Elden Ring Nightreign. This weapon deals Physical and Magic damage and has Strength, Dexterity and Intelligence scaling. Its attack affinity is Standard / Pierce, and it has innate Frostbite buildup on hit. Dark Moon Greatsword comes with Moonlight Greatsword Ash of War (Weapon Skill)."
    },
    {
      id: "blasphemous",
      name: "Blasphemous Blade",
      type: "Greatsword",
      image: "images/blas.webp",
      damage: "Fire",
      scaling: "STR / FAI",
      description:"Blasphemous Blade is a legendary Greatsword in Elden Ring Nightreign. This weapon deals Physical and Fire damage and has Strength, Dexterity and Faith scaling. Its attack affinity is Standard / Pierce, and it does not have innate Status Ailment buildup on hit. Blasphemous Blade comes with Taker's Flames Ash of War (Weapon Skill)."
    },
    {
      id: "giantcrusher",
      name: "Giant Crusher",
      type: "Colossal",
      image: "images/giant.png",
      damage: "STR",
      scaling: "STR",
      description:"Giant-crusher is a uncommon Colossal Weapon in Elden Ring Nightreign. This weapon deals Physical damage and has Strength scaling. Its attack affinity is Strike, and it does not have innate Status Ailment buildup on hit. Giant-crusher comes with Endure Ash of War (Weapon Skill)."
    },
    {
      id: "malenia",
      name: "Hand of Malenia",
      type: "Katana",
      image: "images/hand.png",
      damage: "Bleed",
      scaling: "DEX",
      description:"Hand Of Malenia is a legendary Katana in Elden Ring Nightreign. This weapon deals Physical damage and has Strength and Dexterity scaling. Its attack affinity is Slash / Pierce, and it has innate Hemorrhage buildup on hit. Hand Of Malenia comes with Waterfowl Dance Ash of War (Weapon Skill)."
    },
    {
      id: "starscourge",
      name: "Starscourge Greatsword",
      type: "Colossal",
      image: "images/star.png",
      damage: "Gravity",
      scaling: "STR / INT",
      description:"Starscourge Greatsword is a legendary Colossal Sword in Elden Ring Nightreign. This weapon deals Physical and Magic damage and has Strength, Dexterity and Intelligence scaling. Its attack affinity is Standard / Pierce, and it does not have innate Status Ailment buildup on hit. Starscourge Greatsword comes with Starcaller Cry Ash of War (Weapon Skill)."
    },
    {
      id: "eleonora",
      name: "Eleonora's Poleblade",
      type: "Twinblade",
      image: "images/pole.webp",
      damage: "Bleed",
      scaling: "DEX / ARC",
      description:"Eleonora's Poleblade is a rare Twinblade in Elden Ring Nightreign. This weapon deals Physical and Fire damage and has Strength, Dexterity and Arcane scaling. Its attack affinity is Standard / Pierce, and it has innate Hemorrhage buildup on hit. Eleonora's Poleblade comes with Bloodblade Dance Ash of War (Weapon Skill)."
    },
    {
      id: "nagakiba",
      name: "Nagakiba",
      type: "Katana",
      image: "images/nag.webp",
      damage: "Bleed",
      scaling: "DEX",
      description:"Nagakiba is a uncommon Katana in Elden Ring Nightreign. This weapon deals Physical damage and has Strength and Dexterity scaling. Its attack affinity is Slash / Pierce, and it has innate Hemorrhage buildup on hit. Nagakiba comes with Unsheathe Ash of War (Weapon Skill)."
    },
    {
      id: "winged",
      name: "Winged Scythe",
      type: "Reaper",
      image: "images/wing.webp",
      damage: "Holy",
      scaling: "FAI",
      description:"Winged Scythe is a rare Reaper in Elden Ring Nightreign. This weapon deals Physical and Holy damage and has Strength, Dexterity and Faith scaling. Its attack affinity is Slash, and it has innate Hemorrhage buildup on hit. Winged Scythe comes with Angel's Wings Ash of War (Weapon Skill)."
    },
    {
      id: "ruins",
      name: "Ruins Greatsword",
      type: "Colossal",
      image: "images/ruin.webp",
      damage: "Gravity",
      scaling: "STR / INT",
      description:"Ruins Greatsword is a legendary Colossal Sword in Elden Ring Nightreign. This weapon deals Physical and Magic damage and has Strength, Dexterity and Intelligence scaling. Its attack affinity is Standard / Pierce, and it does not have innate Status Ailment buildup on hit. Ruins Greatsword comes with Wave Of Destruction Ash of War (Weapon Skill)."
    }
  ];
  
  
  
  
  
  
  
  // ================= SEARCH =================
  const searchInput = document.getElementById("search");
  
  
  
  
  
  
  
  
  // ================= BOSSES LIST =================
  const bossList = document.getElementById("boss-list");
  
  
  
  
  function displayBosses(list) {
    if (!bossList) return;
  
  
  
  
    bossList.innerHTML = "";
    list.forEach(boss => {
      const div = document.createElement("div");
      div.className = "card";
  
  
  
  
      div.innerHTML = `
        <img src="${boss.image}" alt="${boss.name}">
        <h3>${boss.name}</h3>
        <p>${boss.difficulty}</p>
      `;
  
  
  
  
      const img = div.querySelector("img");
      fixImage(img);
  
  
  
  
      div.onclick = () => {
        window.location.href = `boss.html?id=${boss.id}`;
      };
  
  
  
  
      bossList.appendChild(div);
    });
  }
  
  
  
  
  if (bossList) {
    displayBosses(bosses);
  
  
  
  
    searchInput?.addEventListener("input", () => {
      const filtered = bosses.filter(b =>
        b.name.toLowerCase().includes(searchInput.value.toLowerCase())
      );
      displayBosses(filtered);
    });
  }
  
  
  
  
  
  
  
  
  // ================= BOSS DETAIL =================
  const bossDetail = document.getElementById("boss-detail");
  
  
  
  
  if (bossDetail) {
    const id = new URLSearchParams(window.location.search).get("id");
    const boss = bosses.find(b => b.id === id);
  
  
  
  
    if (boss) {
      bossDetail.innerHTML = `
        <button onclick="history.back()">⬅ Back</button>
        <h1>${boss.name}</h1>
        <img src="${boss.image}">
        <p><b>Difficulty:</b> ${boss.difficulty}</p>
        <p><b>Location:</b> ${boss.location}</p>
        <p>${boss.lore}</p>
      `;
  
  
  
  
      fixImage(bossDetail.querySelector("img"));
    }
  }
  
  
  
  
  
  
  
  
  // ================= WEAPONS LIST =================
  const weaponList = document.getElementById("weapon-list");
  
  
  
  
  function displayWeapons(list) {
    if (!weaponList) return;
  
  
  
  
    weaponList.innerHTML = "";
    list.forEach(w => {
      const div = document.createElement("div");
      div.className = "card";
  
  
  
  
      div.innerHTML = `
        <img src="${w.image}" alt="${w.name}">
        <h3>${w.name}</h3>
        <p>${w.type}</p>
      `;
  
  
  
  
      fixImage(div.querySelector("img"));
  
  
  
  
      div.onclick = () => {
        window.location.href = `weapon.html?id=${w.id}`;
      };
  
  
  
  
      weaponList.appendChild(div);
    });
  }
  
  
  
  
  if (weaponList) {
    displayWeapons(weapons);
  
  
  
  
    searchInput?.addEventListener("input", () => {
      const filtered = weapons.filter(w =>
        w.name.toLowerCase().includes(searchInput.value.toLowerCase())
      );
      displayWeapons(filtered);
    });
  }
  
  
  
  
  
  
  
  
  // ================= WEAPON DETAIL =================
  const weaponDetail = document.getElementById("weapon-detail");
  
  
  
  
  if (weaponDetail) {
    const id = new URLSearchParams(window.location.search).get("id");
    const weapon = weapons.find(w => w.id === id);
  
  
  
  
    if (weapon) {
      weaponDetail.innerHTML = `
        <button onclick="history.back()">⬅ Back</button>
        <h1>${weapon.name}</h1>
        <img src="${weapon.image}">
        <p><b>Type:</b> ${weapon.type}</p>
        <p><b>Damage:</b> ${weapon.damage}</p>
        <p><b>Scaling:</b> ${weapon.scaling}</p>
        <p><b>Description:</b> ${weapon.description}</p>
      `;
  
  
  
  
      fixImage(weaponDetail.querySelector("img"));
    }
    }
 