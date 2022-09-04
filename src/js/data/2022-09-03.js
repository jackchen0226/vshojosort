dataSetVersion = "2022-09-03"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Affliation",
    key: "affil",
    tooltip: "Include additional personalities to the list.",
    checked: false,
    sub: [
      { name: "VShojo", key: "vs"},
      { name: "Independent", key:"indie" }/*,
      { name: "Non-VShojo Group or Corp", key: "corp" },
      { name: "HD 3D Flesh Models (non-vtuber)", key:"3d"}*/
    ]
  },
  {
    name: "Remove Lads",
    key: "lad",
    tooltip: "Check this to remove lad, boy, or male personalities.",
    checked: false
  },
  {
    name: "Remove Lasses",
    key: "lass",
    tooltip: "Check this to remove lass, girl, or female personalities.",
    checked: false
  }/*,
  {
    name: "Remove HD 3D Models",
    key: "3d",
    tooltip: "Removes any personality who is not primarily a vtuber.",
    checked: false
  }*/
];

dataSet[dataSetVersion].characterData = [
  // VShojo members
  {
    name: "Projekt Melody",
    img: "gOu3aZU.png",
    opts: {
      affil: ['vs'],
      lass: true
    }    
  },
  {
    name: "Ironmouse",
    img: "HG6dAZ7.png",
    opts: {
      affil: ['vs'],
      lass: true
    }
  },
  {
    name: "Apricot",
    img: "NUMh6RY.png",
    opts: {
      affil: ['vs'],
      lass: true
    }    
  },
  {
    name: "Zentreya",
    img: "EFC9FGc.png",
    opts: {
      affil: ['vs'],
      lass: true
    }    
  },  
  {
    name: "Kson",
    img: "YNyYCqd.png",
    opts: {
      affil: ['vs'],
      lass: true
    }    
  },  
  {
    name: "Nyanners",
    img: "nAqFKTL.png",
    opts: {
      affil: ['vs'],
      lass: true
    }    
  },  
  {
    name: "Hime Hajime",
    img: "AjY29f0.png",
    opts: {
      affil: ['vs'],
      lass: true
    }    
  },  
  {
    name: "Veibae",
    img: "GlBmqBy.png",
    opts: {
      affil: ['vs'],
      lass: true
    }    
  },  
  {
    name: "Nazuna Amemiya",
    img: "V3KLHeq.png",
    opts: {
      affil: ['vs'],
      lass: true
    }    
  },  
  {
    name: "Silvervale",
    img: "l18o26P.png",
    opts: {
      affil: ['vs'],
      lass: true
    }    
  },
  // Indies
  {
  	name: "Snuffy",
  	img: "fwY29QF.jpg",
  	opts : {
      affil: ['indie'],
      lass: true
  	}
  },
  {
    name: "Haruka Karibu",
    img: "RW5yY4G.jpg",
    opts : {
      affil: ['indie'],
      lass: true
    }
  },
  {
    name: "Bubi",
    img: "jtIHsZn.jpg",
    opts : {
      affil: ['indie'],
      lass: true
    }
  },
  {
    name: "Lord Aethelstan",
    img: "LbSj51u.jpg",
    opts : {
      affil: ['indie'],
      lad: true
    }
  },
  {
    name: "Merryweather",
    img: "Gq2KfwB.jpg",
    opts: {
      affil: ['indie'],
      lad: true
    }
  }
];
