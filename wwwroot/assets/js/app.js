// Inisialisasi peta
var map = L.map('map').setView([-6.89921, 107.707], 13);

// Tambahkan tile layer OSM
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// }).addTo(map);

// S. Musi
var musi = L.polygon(
  [
    [-6.92321, 107.617404], //kiri
    [-6.92321, 107.709404], //kanan
  ],
  {
    color: 'grey',
  }
).addTo(map);

var musi1 = L.polygon(
  [
    [-6.88521, 107.709404], //atas
    [-6.92321, 107.709404], //bawah
  ],
  {
    color: 'grey',
  }
).addTo(map);

var musi1 = L.marker([-6.88121, 107.719404], {
  icon: L.icon({
    iconUrl: '/assets/img/ampera.png', // Ganti dengan path atau URL icon yang sesuai
    iconSize: [80, 140], // Ukuran icon
  }),
});
musi1.addTo(map);

var musi3 = L.polygon(
  [
    [-6.88521, 107.709404], //kiri
    [-6.88521, 107.788104], //kanan
  ],
  {
    color: 'grey',
  }
).addTo(map);

var musi4 = L.polygon(
  [
    [-6.88521, 107.788104], //bawah
    [-6.88021, 107.789404], //atas
  ],
  {
    color: 'grey',
  }
).addTo(map);

var musi5 = L.polygon(
  [
    [-6.88521, 107.788104], //atas
    [-6.89021, 107.786504], //bawah
  ],
  {
    color: 'grey',
  }
).addTo(map);

var musi6 = L.polygon(
  [
    [-6.88521, 107.790104], //bawah
    [-6.88021, 107.791504], //atas
  ],
  {
    color: 'grey',
  }
).addTo(map);

var musi7 = L.polygon(
  [
    [-6.88521, 107.790104], //atas
    [-6.89021, 107.788504], //bawah
  ],
  {
    color: 'grey',
  }
).addTo(map);

var musi8 = L.polygon(
  [
    [-6.88521, 107.790104], //kiri
    [-6.88521, 107.796504], //kanan
  ],
  {
    color: 'grey',
  }
).addTo(map);

// S. Air Hitam
var hitam = L.polygon(
  [
    [-6.91053, 107.623878], //atas
    [-6.92321, 107.623878], //bawah
  ],
  {
    color: 'blue',
  }
).addTo(map);

var hitam = L.marker([-6.9149, 107.626378], {
  icon: L.divIcon({
    className: 'text-label',
    html: 'S. Air Hitam',
    iconSize: [100, 40],
    iconAnchor: [50, 20],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 12px;">S. Air Hitam</div>',
  }),
}).addTo(map);

// var hitam = L.marker([-6.91657, 107.626378], {
//   icon: L.icon({
//     iconUrl: '/assets/img/hitam1.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [15, 65], // Ukuran icon
//   }),
// });
// hitam.addTo(map);

// S. Rengas
var rengas = L.polygon(
  [
    [-6.91053, 107.628878], //atas
    [-6.92321, 107.628878], //bawah
  ],
  {
    color: 'blue',
  }
).addTo(map);

var rengas = L.marker([-6.9149, 107.631178], {
  icon: L.divIcon({
    className: 'text-label',
    html: 'S. Rengas',
    iconSize: [100, 40],
    iconAnchor: [50, 20],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 12px;">S. Rengas</div>',
  }),
}).addTo(map);

// var rengas = L.marker([-6.9168, 107.631178], {
//   icon: L.icon({
//     iconUrl: '/assets/img/rengas1.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [15, 60], // Ukuran icon
//   }),
// });
// rengas.addTo(map);

// S. Lacak
var lacak = L.polygon(
  [
    [-6.91053, 107.633878], //atas
    [-6.92321, 107.633878], //bawah
  ],
  {
    color: 'blue',
  }
).addTo(map);

var lacak = L.marker([-6.9149, 107.636278], {
  icon: L.divIcon({
    className: 'text-label',
    html: 'S. Lacak',
    iconSize: [100, 40],
    iconAnchor: [50, 20],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 12px;">S. Lacak</div>',
  }),
}).addTo(map);

// var lacak = L.marker([-6.917, 107.636278], {
//   icon: L.icon({
//     iconUrl: '/assets/img/lacak.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [15, 60], // Ukuran icon
//   }),
// });
// lacak.addTo(map);

// S. Danau
var danau = L.polygon(
  [
    [-6.91053, 107.638878], //atas
    [-6.92321, 107.638878], //bawah
  ],
  {
    color: 'blue',
  }
).addTo(map);

var danau = L.marker([-6.9149, 107.641278], {
  icon: L.divIcon({
    className: 'text-label',
    html: 'S. Danau',
    iconSize: [100, 40],
    iconAnchor: [50, 20],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 12px;">S. Danau</div>',
  }),
}).addTo(map);

// var danau = L.marker([-6.917, 107.641278], {
//   icon: L.icon({
//     iconUrl: '/assets/img/danau.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [15, 60], // Ukuran icon
//   }),
// });
// danau.addTo(map);

// S. Ijuk
var ijuk = L.polygon(
  [
    [-6.93621, 107.641378],
    [-6.92321, 107.641378], //bawah
  ],
  {
    color: 'blue',
  }
).addTo(map);

var ijuk = L.marker([-6.92921, 107.643878], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 13px;">S. Ijuk</div>',
  }),
}).addTo(map);

// var ijuk = L.marker([-6.93121, 107.643878], {
//   icon: L.icon({
//     iconUrl: '/assets/img/ijuk.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [15, 60], // Ukuran icon
//   }),
// });
// ijuk.addTo(map);

// S. Tenang
var tenang = L.polygon(
  [
    [-6.91053, 107.643878], //atas
    [-6.92321, 107.643878], //bawah
  ],
  {
    color: 'blue',
  }
).addTo(map);

var tenang = L.marker([-6.9149, 107.646278], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 12px;">S. Tenang</div>',
  }),
}).addTo(map);

// var tenang = L.marker([-6.917, 107.646278], {
//   icon: L.icon({
//     iconUrl: '/assets/img/tenang.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [15, 60], // Ukuran icon
//   }),
// });
// tenang.addTo(map);

// S. Kebala
var kebala = L.polygon(
  [
    [-6.91053, 107.648878], //atas
    [-6.92321, 107.648878], //bawah
  ],
  {
    color: 'blue',
  }
).addTo(map);

var kebala = L.marker([-6.9133, 107.653678], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 13px;">S. Kelaba <p>Q = 17,8 M3/dtk</p></div>',
  }),
}).addTo(map);

// var kebala = L.marker([-6.9145, 107.653678], {
//   icon: L.icon({
//     iconUrl: '/assets/img/kebala.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [35, 85], // Ukuran icon
//   }),
// });
// kebala.addTo(map);

// S. Pedado
var pedado = L.polygon(
  [
    [-6.92321, 107.651378], //atas
    [-6.93621, 107.651378], //bawah
  ],
  {
    color: 'blue',
  }
).addTo(map);

var pedado = L.marker([-6.929, 107.653678], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 13px;">S. Pedado</div>',
  }),
}).addTo(map);

// var pedado = L.marker([-6.931, 107.654278], {
//   icon: L.icon({
//     iconUrl: '/assets/img/pedado.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [20, 60], // Ukuran icon
//   }),
// });
// pedado.addTo(map);

// S. Lambidaro
var lambidaro = L.polygon(
  [
    [-6.90553, 107.658878], //atas
    [-6.92321, 107.658878], //bawah
  ],
  {
    color: 'blue',
  }
).addTo(map);

var lambidaro = L.marker([-6.92421, 107.665878], {
  icon: L.icon({
    iconUrl: '/assets/img/jembatan.png', // Ganti dengan path atau URL icon yang sesuai
    iconSize: [45, 65], // Ukuran icon
  }),
});
lambidaro.addTo(map);

var lambidaro1 = L.polygon(
  [
    [-6.89921, 107.658878], //atas
    [-6.90553, 107.658878], //bawah
  ],
  {
    color: 'red',
  }
).addTo(map);

var lambidaro2 = L.polygon(
  [
    [-6.86921, 107.658878], //atas
    [-6.89921, 107.658878], //bawah
  ],
  {
    color: 'blue',
  }
).addTo(map);

var lambidaro2 = L.marker([-6.88921, 107.653678], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 13px;">S. Lambidaro <p>Q = 173 M3/dtk</p></div>',
  }),
}).addTo(map);

// var lambidaro2 = L.marker([-6.88921, 107.653878], {
//   icon: L.icon({
//     iconUrl: '/assets/img/lambidaro.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [35, 105], // Ukuran icon
//   }),
// });
// lambidaro2.addTo(map);

var lambidaro2 = L.marker([-6.89721, 107.664178], {
  icon: L.icon({
    iconUrl: '/assets/img/tambak.png', // Ganti dengan path atau URL icon yang sesuai
    iconSize: [45, 40], // Ukuran icon
  }),
});
lambidaro2.addTo(map);

// S. Sekanak
var sekanak = L.polygon(
  [
    [-6.89321, 107.658878], //kiri
    [-6.89321, 107.679404], //kanan
  ],
  {
    color: 'blue',
  }
).addTo(map);

var sekanak1 = L.polygon(
  [
    [-6.89321, 107.679404], //kiri
    [-6.89321, 107.689404], //kanan
  ],
  {
    color: 'red',
  }
).addTo(map);

var sekanak1 = L.marker([-6.89721, 107.686504], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(0deg); color: black; font-weight: bold; font-size: 13px;">S. Sekanak</div>',
  }),
}).addTo(map);

// var sekanak1 = L.marker([-6.89521, 107.684104], {
//   icon: L.icon({
//     iconUrl: '/assets/img/sekanak.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [60, 18], // Ukuran icon
//   }),
// });
// sekanak1.addTo(map);

var sekanak2 = L.polygon(
  [
    [-6.89321, 107.689404], //kanan
    [-6.89321, 107.709404], //kiri
  ],
  {
    color: 'blue',
  }
).addTo(map);

// KR. Siti Khodijah
var siti = L.polygon(
  [
    [-6.88921, 107.676404], //atas
    [-6.89321, 107.678404], //bawah
  ],
  {
    color: 'blue',
  }
).addTo(map);

var siti = L.marker([-6.88821, 107.671804], {
  icon: L.icon({
    iconUrl: '/assets/img/tambak.png', // Ganti dengan path atau URL icon yang sesuai
    iconSize: [45, 40], // Ukuran icon
  }),
});
siti.addTo(map);

// KR. Kambang Iwak Besar
var kambang = L.polygon(
  [
    [-6.89321, 107.701404], //atas
    [-6.897, 107.698404], //bawah
  ],
  {
    color: 'blue',
  }
).addTo(map);

var sekanak2 = L.marker([-6.901, 107.694404], {
  icon: L.icon({
    iconUrl: '/assets/img/tambak.png', // Ganti dengan path atau URL icon yang sesuai
    iconSize: [45, 40], // Ukuran icon
  }),
});
sekanak2.addTo(map);

var sekanak2 = L.marker([-6.901, 107.686404], {
  icon: L.icon({
    iconUrl: '/assets/img/tambak.png', // Ganti dengan path atau URL icon yang sesuai
    iconSize: [45, 40], // Ukuran icon
  }),
});
sekanak2.addTo(map);

// S. Kedukan
var kedukan = L.polygon(
  [
    [-6.92, 107.679404], //atas
    [-6.92321, 107.678404], //bawah
  ],
  {
    color: 'red',
  }
).addTo(map);

var kedukan1 = L.polygon(
  [
    [-6.92, 107.696404], //atas
    [-6.92321, 107.697404], //bawah
  ],
  {
    color: 'red',
  }
).addTo(map);

var kedukan1 = L.marker([-6.9239, 107.703404], {
  icon: L.icon({
    iconUrl: '/assets/img/jembatan1.png', // Ganti dengan path atau URL icon yang sesuai
    iconSize: [40, 55], // Ukuran icon
  }),
});
kedukan1.addTo(map);

var kedukan2 = L.polygon(
  [
    [-6.92, 107.679404], //kiri
    [-6.92, 107.696404], //kanan
  ],
  {
    color: 'red',
  }
).addTo(map);

var kedukan2 = L.marker([-6.92, 107.691], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(0deg); color: black; font-weight: bold; font-size: 13px;">S. Kedukan</div>',
  }),
}).addTo(map);

// var kedukan2 = L.marker([-6.9179, 107.688404], {
//   icon: L.icon({
//     iconUrl: '/assets/img/kedukan.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [60, 20], // Ukuran icon
//   }),
// });
// kedukan2.addTo(map);

// S. Keramasan
var keramasan = L.polygon(
  [
    [-6.92321, 107.679404], //atas
    [-6.94321, 107.679404], //bawah
  ],
  {
    color: 'blue',
  }
).addTo(map);

var keramasan = L.marker([-6.93321, 107.681404], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 13px;">S. Keramasan</div>',
  }),
}).addTo(map);

// var keramasan = L.marker([-6.93321, 107.681404], {
//   icon: L.icon({
//     iconUrl: '/assets/img/keramasan.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [20, 85], // Ukuran icon
//   }),
// });
// keramasan.addTo(map);

// S. Gantung
var gantung = L.polygon(
  [
    [-6.93821, 107.662378], //kiri
    [-6.93821, 107.679404], //kanan
  ],
  {
    color: 'blue',
  }
).addTo(map);

var gantung = L.marker([-6.94221, 107.670978], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(0deg); color: black; font-weight: bold; font-size: 13px;">S. Gantung</div>',
  }),
}).addTo(map);

// var gantung = L.marker([-6.94121, 107.668378], {
//   icon: L.icon({
//     iconUrl: '/assets/img/gantung.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [60, 25], // Ukuran icon
//   }),
// });
// gantung.addTo(map);

// S. Ogan
var ogan = L.polygon(
  [
    [-6.92321, 107.697104], //atas
    [-6.94321, 107.697104], //bawah
  ],
  {
    color: 'blue',
  }
).addTo(map);

var ogan = L.marker([-6.93921, 107.70069], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 12px;">S. Ogan<p>Q = 183 M3/dtk</p></div>',
  }),
}).addTo(map);

// var ogan = L.marker([-6.94121, 107.7], {
//   icon: L.icon({
//     iconUrl: '/assets/img/ogan.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [30, 100], // Ukuran icon
//   }),
// });
// ogan.addTo(map);

// S. Pegayut
var pegayut = L.polygon(
  [
    [-6.92921, 107.684104], //kiri
    [-6.92921, 107.697104], //kanan
  ],
  {
    color: 'blue',
  }
).addTo(map);

var pegayut = L.marker([-6.93281, 107.69304], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(0deg); color: black; font-weight: bold; font-size: 12px;">S. Pegayut</div>',
  }),
}).addTo(map);

// var pegayut = L.marker([-6.93221, 107.689104], {
//   icon: L.icon({
//     iconUrl: '/assets/img/pegayut.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [65, 25], // Ukuran icon
//   }),
// });
// pegayut.addTo(map);

// S. Kedukan 2
var kedukann = L.polygon(
  [
    [-6.93221, 107.697104], //kiri
    [-6.93221, 107.748104], //kanan
  ],
  {
    color: 'blue',
  }
).addTo(map);

var circlekedukann = L.circle([-6.93221, 107.751804], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 1,
  radius: 400,
}).addTo(map);

var kedukann1 = L.polygon(
  [
    [-6.92521, 107.751804], //atas
    [-6.93221, 107.751804], //bawah
  ],
  {
    color: 'red',
  }
).addTo(map);

var kedukann2 = L.polygon(
  [
    [-6.94021, 107.751804], //bawah
    [-6.93221, 107.751804], //atas
  ],
  {
    color: 'red',
  }
).addTo(map);

// S. Kedukan Ulu
var kedukanulu = L.polygon(
  [
    [-6.91321, 107.709404], //kiri
    [-6.91321, 107.724104], //kanan
  ],
  {
    color: 'red',
  }
).addTo(map);

var kedukanulu = L.marker([-6.92121, 107.728104], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 13px;">S. Kedukan Ulu<p>Q = 30,7 M3/dtk</p></div>',
  }),
}).addTo(map);

// var kedukanulu = L.marker([-6.92121, 107.728104], {
//   icon: L.icon({
//     iconUrl: '/assets/img/kedukanulu1.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [35, 105], // Ukuran icon
//   }),
// });
// kedukanulu.addTo(map);

var kedukanulu1 = L.polygon(
  [
    [-6.91321, 107.724104], //atas
    [-6.93221, 107.724104], //bawah
  ],
  {
    color: 'red',
  }
).addTo(map);

var kedukanulu1 = L.marker([-6.93721, 107.725804], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(0deg); color: black; font-weight: bold; font-size: 13px;">S. Kedukan<p>Q = 16,0 M3/dtk</p></div>',
  }),
}).addTo(map);

// var kedukanulu1 = L.marker([-6.93721, 107.725804], {
//   icon: L.icon({
//     iconUrl: '/assets/img/kedukan1.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [100, 40], // Ukuran icon
//   }),
// });
// kedukanulu1.addTo(map);

// S. Aur
var aur = L.polygon(
  [
    [-6.88521, 107.728404], //atas
    [-6.90421, 107.728404], //bawah
  ],
  {
    color: 'blue',
  }
).addTo(map);

var aur = L.marker([-6.89521, 107.731704], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 13px;">S. Aur<p>Q = 24,8 M3/dtk</p></div>',
  }),
}).addTo(map);

// var aur = L.marker([-6.89621, 107.731404], {
//   icon: L.icon({
//     iconUrl: '/assets/img/aur.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [25, 100], // Ukuran icon
//   }),
// });
// aur.addTo(map);

// S. Bendung
var bendung = L.polygon(
  [
    [-6.88521, 107.730804], //bawah
    [-6.86021, 107.730804], //atas
  ],
  {
    color: 'blue',
  }
).addTo(map);

var bendung = L.marker([-6.87521, 107.728804], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 13px;">S. Bendung</div>',
  }),
}).addTo(map);

// var bendung = L.marker([-6.87521, 107.728804], {
//   icon: L.icon({
//     iconUrl: '/assets/img/bendung.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [18, 75], // Ukuran icon
//   }),
// });
// bendung.addTo(map);

var bendung = L.marker([-6.85821, 107.730804], {
  icon: L.icon({
    iconUrl: '/assets/img/tambak.png', // Ganti dengan path atau URL icon yang sesuai
    iconSize: [45, 40], // Ukuran icon
  }),
});
bendung.addTo(map);

var bendung = L.marker([-6.85121, 107.730804], {
  icon: L.icon({
    iconUrl: '/assets/img/tambak.png', // Ganti dengan path atau URL icon yang sesuai
    iconSize: [45, 40], // Ukuran icon
  }),
});
bendung.addTo(map);

var bendung1 = L.polygon(
  [
    [-6.87621, 107.730804], //bawah
    [-6.87321, 107.737804], //atas
  ],
  {
    color: 'blue',
  }
).addTo(map);

var bendung1 = L.marker([-6.87221, 107.742804], {
  icon: L.icon({
    iconUrl: '/assets/img/tambak.png', // Ganti dengan path atau URL icon yang sesuai
    iconSize: [45, 40], // Ukuran icon
  }),
});
bendung1.addTo(map);

var bendung2 = L.polygon(
  [
    [-6.86821, 107.730804], //bawah
    [-6.86321, 107.741804], //atas
  ],
  {
    color: 'blue',
  }
).addTo(map);

var bendung2 = L.marker([-6.86221, 107.745804], {
  icon: L.icon({
    iconUrl: '/assets/img/tambak.png', // Ganti dengan path atau URL icon yang sesuai
    iconSize: [45, 40], // Ukuran icon
  }),
});
bendung2.addTo(map);

var bendung3 = L.polygon(
  [
    [-6.86821, 107.730804], //bawah
    [-6.85821, 107.720804], //atas
  ],
  {
    color: 'blue',
  }
).addTo(map);

var bendung3 = L.marker([-6.85621, 107.71804], {
  icon: L.icon({
    iconUrl: '/assets/img/tambak.png', // Ganti dengan path atau URL icon yang sesuai
    iconSize: [45, 40], // Ukuran icon
  }),
});
bendung3.addTo(map);

// S. Sriguna
var sriguna = L.polygon(
  [
    [-6.88521, 107.735404], //atas
    [-6.90421, 107.735404], //bawah
  ],
  {
    color: 'blue',
  }
).addTo(map);

var sriguna = L.marker([-6.89521, 107.739104], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 14px;">S. Sriguna<p>Q = 39 M3/dtk</p></div>',
  }),
}).addTo(map);

// var sriguna = L.marker([-6.89621, 107.738404], {
//   icon: L.icon({
//     iconUrl: '/assets/img/sriguna.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [30, 100], // Ukuran icon
//   }),
// });
// sriguna.addTo(map);

var sriguna = L.marker([-6.88621, 107.746404], {
  icon: L.icon({
    iconUrl: '/assets/img/jembatan2.png', // Ganti dengan path atau URL icon yang sesuai
    iconSize: [40, 55], // Ukuran icon
  }),
});
sriguna.addTo(map);

// S. Lawang Kidul
var lawang = L.polygon(
  [
    [-6.88521, 107.755804], //bawah
    [-6.86821, 107.755804], //atas
  ],
  {
    color: 'blue',
  }
).addTo(map);

var lawang = L.marker([-6.875, 107.759204], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [110, 40],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 13px;">S. Lawang Kidul<p>Q = 10,5 M3/dtk</p></div>',
  }),
}).addTo(map);

// var lawang = L.marker([-6.876, 107.759204], {
//   icon: L.icon({
//     iconUrl: '/assets/img/lawang.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [30, 100], // Ukuran icon
//   }),
// });
// lawang.addTo(map);

// S. Buah
var buah = L.polygon(
  [
    [-6.88521, 107.762804], //bawah
    [-6.86821, 107.762804], //atas
  ],
  {
    color: 'blue',
  }
).addTo(map);

var buah = L.marker([-6.8758, 107.766204], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 13px;">S. Buah<p>Q = 45 M3/dtk</p></div>',
  }),
}).addTo(map);

// var buah = L.marker([-6.876, 107.766204], {
//   icon: L.icon({
//     iconUrl: '/assets/img/buah.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [30, 100], // Ukuran icon
//   }),
// });
// buah.addTo(map);

// S. Juaro
var juaro = L.polygon(
  [
    [-6.88521, 107.769804], //bawah
    [-6.86821, 107.769804], //atas
  ],
  {
    color: 'blue',
  }
).addTo(map);

var juaro = L.marker([-6.8772, 107.772204], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 13px;">S. Juaro</div>',
  }),
}).addTo(map);

// var juaro = L.marker([-6.8795, 107.772204], {
//   icon: L.icon({
//     iconUrl: '/assets/img/juaro.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [18, 55], // Ukuran icon
//   }),
// });
// juaro.addTo(map);

// S. Komering
var komering = L.polygon(
  [
    [-6.88521, 107.772504], //atas
    [-6.91321, 107.772504], //bawah
  ],
  {
    color: 'blue',
  }
).addTo(map);

var komering = L.marker([-6.9, 107.776504], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 14px;">S. komering<p>Q = 236 M3/dtk</p></div>',
  }),
}).addTo(map);

// var komering = L.marker([-6.9, 107.776504], {
//   icon: L.icon({
//     iconUrl: '/assets/img/komering.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [35, 115], // Ukuran icon
//   }),
// });
// komering.addTo(map);

// S. Prupian
var prupian = L.polygon(
  [
    [-6.89221, 107.755804], //kiri
    [-6.89221, 107.772504], //kanan
  ],
  {
    color: 'blue',
  }
).addTo(map);

var prupian = L.marker([-6.896, 107.764804], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(0deg); color: black; font-weight: bold; font-size: 13px;">S. Prupian</div>',
  }),
}).addTo(map);

// var prupian = L.marker([-6.895, 107.761804], {
//   icon: L.icon({
//     iconUrl: '/assets/img/prupian.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [65, 20], // Ukuran icon
//   }),
// });
// prupian.addTo(map);

// S. Batang
var batang = L.polygon(
  [
    [-6.88521, 107.774804], //bawah
    [-6.86821, 107.774804], //atas
  ],
  {
    color: 'blue',
  }
).addTo(map);

var batang = L.marker([-6.8774, 107.777204], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 13px;">S. Batang</div>',
  }),
}).addTo(map);

// var batang = L.marker([-6.879, 107.777204], {
//   icon: L.icon({
//     iconUrl: '/assets/img/batang.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [18, 60], // Ukuran icon
//   }),
// });
// batang.addTo(map);

// S. Selincah
var selincah = L.polygon(
  [
    [-6.88521, 107.779804], //bawah
    [-6.86821, 107.779804], //atas
  ],
  {
    color: 'blue',
  }
).addTo(map);

var selincah = L.marker([-6.8774, 107.782204], {
  icon: L.divIcon({
    className: 'text-label',
    iconSize: [100, 40],
    html: '<div style="transform: rotate(-90deg); color: black; font-weight: bold; font-size: 13px;">S. Selincah</div>',
  }),
}).addTo(map);

// var selincah = L.marker([-6.878, 107.782204], {
//   icon: L.icon({
//     iconUrl: '/assets/img/selincah.png', // Ganti dengan path atau URL icon yang sesuai
//     iconSize: [18, 75], // Ukuran icon
//   }),
// });
// selincah.addTo(map);
