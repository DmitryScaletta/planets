const satellites = [
	{ id: 1,  planet_id: 1, name: 'Deimos',       radius: 14532, distance: 345200 },
	{ id: 2,  planet_id: 1, name: 'Phobos',       radius: 7048,  distance: 230675 },
	{ id: 3,  planet_id: 2, name: 'Io',           radius: 13414, distance: 190634 },
	{ id: 4,  planet_id: 3, name: 'Europa',       radius: 13855, distance: 549738 },
	{ id: 5,  planet_id: 3, name: 'Ganymede',     radius: 17919, distance: 941277 },
	{ id: 6,  planet_id: 3, name: 'Callisto',     radius: 4401,  distance: 223532 },
	{ id: 7,  planet_id: 4, name: 'Amalthea',     radius: 18745, distance: 750663 },
	{ id: 8,  planet_id: 4, name: 'Himalia',      radius: 2785,  distance: 831323 },
	{ id: 9,  planet_id: 5, name: 'Elara',        radius: 19595, distance: 298064 },
	{ id: 10, planet_id: 6, name: 'Pasiphae',     radius: 2651,  distance: 248740 },
	{ id: 11, planet_id: 6, name: 'Sinope',       radius: 13770, distance: 629989 },
	{ id: 12, planet_id: 8, name: 'Lysithea',     radius: 17515, distance: 849780 },
	{ id: 13, planet_id: 8, name: 'Carme',        radius: 6461,  distance: 801501 },
	{ id: 14, planet_id: 8, name: 'Ananke',       radius: 13345, distance: 204620 },
	{ id: 15, planet_id: 9, name: 'Leda',         radius: 14117, distance: 716530 },
	{ id: 16, planet_id: 9, name: 'Thebe',        radius: 17355, distance: 514839 },
	{ id: 17, planet_id: 10, name: 'Adrastea',    radius: 5456,  distance: 268754 },
	{ id: 18, planet_id: 11, name: 'Metis',       radius: 3342,  distance: 431154 },
	{ id: 19, planet_id: 11, name: 'Callirrhoe',  radius: 1932,  distance: 581978 },
	{ id: 20, planet_id: 12, name: 'Themisto',    radius: 6503,  distance: 442031 },
	{ id: 21, planet_id: 12, name: 'Megaclite',   radius: 7778,  distance: 857202 },
	{ id: 22, planet_id: 13, name: 'Taygete',     radius: 19652, distance: 858134 },
	{ id: 23, planet_id: 13, name: 'Chaldene',    radius: 9547,  distance: 156258 },
	{ id: 24, planet_id: 13, name: 'Harpalyke',   radius: 3904,  distance: 207582 },
	{ id: 25, planet_id: 13, name: 'Kalyke',      radius: 16538, distance: 880369 },
	{ id: 26, planet_id: 15, name: 'Iocaste',     radius: 12154, distance: 341306 },
	{ id: 27, planet_id: 16, name: 'Erinome',     radius: 4696,  distance: 856454 },
	{ id: 28, planet_id: 16, name: 'Isonoe',      radius: 9751,  distance: 170794 },
	{ id: 29, planet_id: 17, name: 'Praxidike',   radius: 18433, distance: 598048 },
	{ id: 30, planet_id: 18, name: 'Autonoe',     radius: 11570, distance: 992892 },
	{ id: 31, planet_id: 18, name: 'Thyone',      radius: 14530, distance: 876743 },
	{ id: 32, planet_id: 19, name: 'Hermippe',    radius: 10712, distance: 398107 },
	{ id: 33, planet_id: 19, name: 'Aitne',       radius: 12951, distance: 110199 },
	{ id: 34, planet_id: 19, name: 'Eurydome',    radius: 14060, distance: 75325 },
	{ id: 35, planet_id: 20, name: 'Euanthe',     radius: 9429,  distance: 692629 },
	{ id: 36, planet_id: 20, name: 'Euporie',     radius: 4389,  distance: 447278 },
	{ id: 37, planet_id: 21, name: 'Orthosie',    radius: 19632, distance: 365294 },
	{ id: 38, planet_id: 21, name: 'Sponde',      radius: 6433,  distance: 166062 },
	{ id: 39, planet_id: 21, name: 'Kale',        radius: 9921,  distance: 239834 },
	{ id: 40, planet_id: 22, name: 'Pasithee',    radius: 13761, distance: 284084 },
	{ id: 41, planet_id: 23, name: 'Hegemone',    radius: 8276,  distance: 519915 },
	{ id: 42, planet_id: 25, name: 'Mneme',       radius: 13064, distance: 172431 },
	{ id: 43, planet_id: 25, name: 'Aoede',       radius: 3913,  distance: 832661 },
	{ id: 44, planet_id: 26, name: 'Thelxinoe',   radius: 17926, distance: 929967 },
	{ id: 45, planet_id: 27, name: 'Arche',       radius: 5988,  distance: 222993 },
	{ id: 46, planet_id: 29, name: 'Kallichore',  radius: 12639, distance: 463300 },
	{ id: 47, planet_id: 29, name: 'Helike',      radius: 18058, distance: 793404 },
	{ id: 48, planet_id: 29, name: 'Carpo',       radius: 2511,  distance: 932853 },
	{ id: 49, planet_id: 30, name: 'Eukelade',    radius: 2331,  distance: 68233 },
	{ id: 50, planet_id: 30, name: 'Cyllene',     radius: 6018,  distance: 816897 },
	{ id: 51, planet_id: 31, name: 'Kore',        radius: 18159, distance: 737972 },
	{ id: 52, planet_id: 31, name: 'Herse',       radius: 15091, distance: 672202 },
	{ id: 53, planet_id: 32, name: 'S/2010 J 1',  radius: 11692, distance: 752143 },
	{ id: 54, planet_id: 33, name: 'S/2010 J 2',  radius: 2231,  distance: 337073 },
	{ id: 55, planet_id: 33, name: 'Dia',         radius: 15846, distance: 949286 },
	{ id: 56, planet_id: 34, name: 'S/2003 J 2',  radius: 6634,  distance: 415846 },
	{ id: 57, planet_id: 35, name: 'S/2003 J 3',  radius: 16895, distance: 145249 },
	{ id: 58, planet_id: 35, name: 'S/2003 J 4',  radius: 18081, distance: 908671 },
	{ id: 59, planet_id: 35, name: 'S/2003 J 5',  radius: 3590,  distance: 345131 },
	{ id: 60, planet_id: 36, name: 'S/2003 J 9',  radius: 1678,  distance: 89459 },
	{ id: 61, planet_id: 37, name: 'S/2003 J 10', radius: 3082,  distance: 281617 },
	{ id: 62, planet_id: 37, name: 'S/2003 J 12', radius: 9517,  distance: 874566 },
	{ id: 63, planet_id: 39, name: 'S/2003 J 15', radius: 18076, distance: 313066 },
	{ id: 64, planet_id: 39, name: 'S/2003 J 16', radius: 18130, distance: 161218 },
	{ id: 65, planet_id: 39, name: 'S/2003 J 18', radius: 9052,  distance: 403658 },
	{ id: 66, planet_id: 40, name: 'S/2003 J 19', radius: 13847, distance: 765961 },
	{ id: 67, planet_id: 40, name: 'S/2003 J 23', radius: 18164, distance: 81541 },
	{ id: 68, planet_id: 40, name: 'S/2011 J 1',  radius: 14963, distance: 672617 },
	{ id: 69, planet_id: 40, name: 'S/2011 J 2',  radius: 2393,  distance: 602792 },
	{ id: 70, planet_id: 41, name: 'Mimas',       radius: 10569, distance: 126247 },
	{ id: 71, planet_id: 43, name: 'Enceladus',   radius: 11674, distance: 50095 },
	{ id: 72, planet_id: 43, name: 'Tethys',      radius: 4083,  distance: 700539 },
	{ id: 73, planet_id: 44, name: 'Dione',       radius: 10659, distance: 217338 },
	{ id: 74, planet_id: 44, name: 'Rhea',        radius: 2556,  distance: 571739 },
	{ id: 75, planet_id: 44, name: 'Titan',       radius: 6170,  distance: 695792 },
	{ id: 76, planet_id: 45, name: 'Hyperion',    radius: 10840, distance: 264023 },
	{ id: 77, planet_id: 45, name: 'Iapetus',     radius: 17837, distance: 731490 },
	{ id: 78, planet_id: 46, name: 'Phoebe',      radius: 6935,  distance: 333351 },
	{ id: 79, planet_id: 46, name: 'Janus',       radius: 6456,  distance: 61821 },
	{ id: 80, planet_id: 47, name: 'Epimetheus',  radius: 18161, distance: 116013 },
	{ id: 81, planet_id: 47, name: 'Helene',      radius: 9214,  distance: 397625 },
	{ id: 82, planet_id: 47, name: 'Telesto',     radius: 19486, distance: 821391 },
	{ id: 83, planet_id: 48, name: 'Calypso',     radius: 14603, distance: 806055 },
	{ id: 84, planet_id: 50, name: 'Atlas',       radius: 17996, distance: 597024 },
	{ id: 85, planet_id: 50, name: 'Prometheus',  radius: 9961,  distance: 773510 },
	{ id: 86, planet_id: 51, name: 'Pandora',     radius: 17685, distance: 777397 },
	{ id: 87, planet_id: 51, name: 'Pan',         radius: 15696, distance: 322759 },
	{ id: 88, planet_id: 51, name: 'Ymir',        radius: 12431, distance: 616475 },
	{ id: 89, planet_id: 52, name: 'Paaliaq',     radius: 7048,  distance: 77696 },
	{ id: 90, planet_id: 52, name: 'Tarvos',      radius: 7956,  distance: 289058 },
	{ id: 91, planet_id: 52, name: 'Ijiraq',      radius: 16656, distance: 312765 },
	{ id: 92, planet_id: 52, name: 'Suttungr',    radius: 9038,  distance: 943998 },
	{ id: 93, planet_id: 52, name: 'Kiviuq',      radius: 16858, distance: 695554 },
	{ id: 94, planet_id: 53, name: 'Mundilfari',  radius: 1837,  distance: 630599 },
	{ id: 95, planet_id: 53, name: 'Albiorix',    radius: 4540,  distance: 634756 },
	{ id: 96, planet_id: 53, name: 'Skathi',      radius: 10967, distance: 740592 },
	{ id: 97, planet_id: 53, name: 'Erriapus',    radius: 4345,  distance: 312222 },
	{ id: 98, planet_id: 54, name: 'Siarnaq',     radius: 14408, distance: 628919 },
	{ id: 99, planet_id: 54, name: 'Thrymr',      radius: 1366,  distance: 454843 },
	{ id: 100, planet_id: 54, name: 'Narvi',      radius: 1401,  distance: 57212 },
	{ id: 101, planet_id: 54, name: 'Methone',    radius: 5544,  distance: 80075 },
	{ id: 102, planet_id: 54, name: 'Pallene',    radius: 16369, distance: 113736 },
	{ id: 103, planet_id: 54, name: 'Polydeuces', radius: 900,   distance: 364535 },
	{ id: 104, planet_id: 54, name: 'Daphnis',    radius: 5899,  distance: 854942 },
	{ id: 105, planet_id: 55, name: 'Aegir',      radius: 12777, distance: 687890 },
	{ id: 106, planet_id: 55, name: 'Bebhionn',   radius: 17720, distance: 109472 },
	{ id: 107, planet_id: 55, name: 'Bergelmir',  radius: 3645,  distance: 895190 },
	{ id: 108, planet_id: 55, name: 'Bestla',     radius: 608,   distance: 65004 },
	{ id: 109, planet_id: 56, name: 'Moon',       radius: 1737,  distance: 384400 },
]

const planets = [
	{ id: 1,  galaxy_id: 1, name: 'Proxima Centauri',    radius: 15950, core_temperature: 4938,  atmosphere: 0, life: 0 },
	{ id: 2,  galaxy_id: 1, name: 'Alpha Centauri',      radius: 19376, core_temperature: 5809,  atmosphere: 0, life: 0 },
	{ id: 3,  galaxy_id: 1, name: 'Luhman 16',           radius: 16645, core_temperature: 15895, atmosphere: 1, life: 0 },
	{ id: 4,  galaxy_id: 2, name: 'Epsilon Eridani',     radius: 7312,  core_temperature: 14125, atmosphere: 0, life: 0 },
	{ id: 5,  galaxy_id: 2, name: 'Groombridge 34',      radius: 1143,  core_temperature: 4637,  atmosphere: 1, life: 0 },
	{ id: 6,  galaxy_id: 2, name: 'Epsilon Indi',        radius: 15097, core_temperature: 7438,  atmosphere: 1, life: 0 },
	{ id: 7,  galaxy_id: 3, name: 'Tau Ceti',            radius: 19433, core_temperature: 1504,  atmosphere: 1, life: 0 },
	{ id: 8,  galaxy_id: 3, name: 'Kapteyn\'s star',     radius: 13207, core_temperature: 17232, atmosphere: 0, life: 0 },
	{ id: 9,  galaxy_id: 4, name: 'Wolf 1061',           radius: 17804, core_temperature: 4234,  atmosphere: 1, life: 0 },
	{ id: 10, galaxy_id: 4, name: 'Gliese 687',          radius: 10509, core_temperature: 13990, atmosphere: 1, life: 0 },
	{ id: 11, galaxy_id: 4, name: 'Gliese 674',          radius: 12885, core_temperature: 14873, atmosphere: 0, life: 0 },
	{ id: 12, galaxy_id: 4, name: 'Gliese 876',          radius: 2315,  core_temperature: 1439,  atmosphere: 1, life: 0 },
	{ id: 13, galaxy_id: 5, name: 'Gliese 832',          radius: 14641, core_temperature: 8700,  atmosphere: 0, life: 0 },
	{ id: 14, galaxy_id: 6, name: 'Gliese 682',          radius: 3276,  core_temperature: 1198,  atmosphere: 0, life: 0 },
	{ id: 15, galaxy_id: 6, name: 'Gliese 229',          radius: 13830, core_temperature: 13067, atmosphere: 0, life: 0 },
	{ id: 16, galaxy_id: 6, name: '82 G. Eridani',       radius: 4068,  core_temperature: 16967, atmosphere: 0, life: 0 },
	{ id: 17, galaxy_id: 6, name: 'Gliese 581',          radius: 19032, core_temperature: 14312, atmosphere: 1, life: 0 },
	{ id: 18, galaxy_id: 7, name: 'HD 219134',           radius: 5604,  core_temperature: 10621, atmosphere: 1, life: 0 },
	{ id: 19, galaxy_id: 7, name: 'Gliese 667',          radius: 14143, core_temperature: 7236,  atmosphere: 0, life: 0 },
	{ id: 20, galaxy_id: 8, name: 'HD 95872',            radius: 5682,  core_temperature: 17681, atmosphere: 0, life: 0 },
	{ id: 21, galaxy_id: 8, name: 'Fomalhaut',           radius: 14909, core_temperature: 3199,  atmosphere: 1, life: 0 },
	{ id: 22, galaxy_id: 8, name: '61 Virginis',         radius: 2149,  core_temperature: 13457, atmosphere: 0, life: 0 },
	{ id: 23, galaxy_id: 8, name: 'HD 192310',           radius: 13584, core_temperature: 6872,  atmosphere: 1, life: 0 },
	{ id: 24, galaxy_id: 9, name: 'Gliese 433',          radius: 16133, core_temperature: 4641,  atmosphere: 0, life: 0 },
	{ id: 25, galaxy_id: 9, name: 'Gliese 849',          radius: 16481, core_temperature: 10351, atmosphere: 0, life: 0 },
	{ id: 26, galaxy_id: 9, name: 'HD 102365',           radius: 4753,  core_temperature: 10102, atmosphere: 1, life: 0 },
	{ id: 27, galaxy_id: 10, name: 'Gliese 176',         radius: 1234,  core_temperature: 5990,  atmosphere: 0, life: 0 },
	{ id: 28, galaxy_id: 10, name: 'Gliese 436',         radius: 6851,  core_temperature: 7807,  atmosphere: 1, life: 0 },
	{ id: 29, galaxy_id: 10, name: 'Gliese 649',         radius: 1756,  core_temperature: 10263, atmosphere: 1, life: 0 },
	{ id: 30, galaxy_id: 10, name: 'Pollux',             radius: 8083,  core_temperature: 18009, atmosphere: 1, life: 0 },
	{ id: 31, galaxy_id: 11, name: 'Gliese 86',          radius: 9120,  core_temperature: 10540, atmosphere: 0, life: 0 },
	{ id: 32, galaxy_id: 11, name: 'HIP 57050',          radius: 17477, core_temperature: 902,   atmosphere: 1, life: 0 },
	{ id: 33, galaxy_id: 12, name: '54 Piscium',         radius: 13678, core_temperature: 2514,  atmosphere: 1, life: 0 },
	{ id: 34, galaxy_id: 12, name: 'HD 85512',           radius: 16272, core_temperature: 19611, atmosphere: 0, life: 0 },
	{ id: 35, galaxy_id: 12, name: 'GJ 180',             radius: 15304, core_temperature: 7581,  atmosphere: 0, life: 0 },
	{ id: 36, galaxy_id: 13, name: 'Ross 458',           radius: 14270, core_temperature: 13245, atmosphere: 0, life: 0 },
	{ id: 37, galaxy_id: 13, name: 'Gliese 1132',        radius: 5423,  core_temperature: 19357, atmosphere: 1, life: 0 },
	{ id: 38, galaxy_id: 13, name: 'Gliese 179',         radius: 13014, core_temperature: 7677,  atmosphere: 1, life: 0 },
	{ id: 39, galaxy_id: 13, name: '55 Cancri',          radius: 11327, core_temperature: 17461, atmosphere: 1, life: 0 },
	{ id: 40, galaxy_id: 14, name: 'HD 69830',           radius: 6190,  core_temperature: 7725,  atmosphere: 0, life: 0 },
	{ id: 41, galaxy_id: 14, name: 'Innes\' star',       radius: 6395,  core_temperature: 16573, atmosphere: 1, life: 0 },
	{ id: 42, galaxy_id: 14, name: 'VHS 1256-1257',      radius: 15645, core_temperature: 1685,  atmosphere: 1, life: 0 },
	{ id: 43, galaxy_id: 15, name: 'HD 147513',          radius: 4745,  core_temperature: 16969, atmosphere: 0, life: 0 },
	{ id: 44, galaxy_id: 15, name: 'HD 40307',           radius: 9286,  core_temperature: 13187, atmosphere: 1, life: 0 },
	{ id: 45, galaxy_id: 15, name: 'GJ 1214',            radius: 4323,  core_temperature: 3863,  atmosphere: 0, life: 0 },
	{ id: 46, galaxy_id: 15, name: 'Upsilon Andromedae', radius: 19212, core_temperature: 11832, atmosphere: 1, life: 0 },
	{ id: 47, galaxy_id: 15, name: 'Gamma Cephei',       radius: 1629,  core_temperature: 12613, atmosphere: 0, life: 0 },
	{ id: 48, galaxy_id: 16, name: '47 Ursae Majoris',   radius: 13157, core_temperature: 5856,  atmosphere: 0, life: 0 },
	{ id: 49, galaxy_id: 16, name: 'HIP 79431',          radius: 10695, core_temperature: 11448, atmosphere: 0, life: 0 },
	{ id: 50, galaxy_id: 16, name: 'Nu2 Lupi',           radius: 677,   core_temperature: 10758, atmosphere: 0, life: 0 },
	{ id: 51, galaxy_id: 16, name: 'Gliese 163',         radius: 3451,  core_temperature: 15563, atmosphere: 0, life: 0 },
	{ id: 52, galaxy_id: 17, name: 'HD 176051',          radius: 16581, core_temperature: 18665, atmosphere: 0, life: 0 },
	{ id: 53, galaxy_id: 17, name: 'Gliese 317',         radius: 9736,  core_temperature: 17508, atmosphere: 0, life: 0 },
	{ id: 54, galaxy_id: 17, name: 'HD 38858',           radius: 17977, core_temperature: 12498, atmosphere: 0, life: 0 },
	{ id: 55, galaxy_id: 17, name: 'Mu Arae',            radius: 591,   core_temperature: 19422, atmosphere: 0, life: 0 },
	{ id: 56, galaxy_id: 12, name: 'Earth',              radius: 3192,  core_temperature: 5009,  atmosphere: 1, life: 1 },
]

const galaxies = [
	{ id: 1,  name: 'Andromeda' },
	{ id: 2,  name: 'Black Eye Galaxy' },
	{ id: 3,  name: 'Bode\'s Galaxy' },
	{ id: 4,  name: 'Cartwheel Galaxy' },
	{ id: 5,  name: 'Cigar Galaxy' },
	{ id: 6,  name: 'Comet Galaxy' },
	{ id: 7,  name: 'Cosmos Redshift 7' },
	{ id: 8,  name: 'Hoag\'s Object' },
	{ id: 9,  name: 'Large Magellanic Cloud' },
	{ id: 10, name: 'Small Magellanic Cloud' },
	{ id: 11, name: 'Mayall\'s Object' },
	{ id: 12, name: 'Milky Way' },
	{ id: 13, name: 'Pinwheel Galaxy' },
	{ id: 14, name: 'Sombrero Galaxy' },
	{ id: 15, name: 'Sunflower Galaxy' },
	{ id: 16, name: 'Tadpole Galaxy' },
	{ id: 17, name: 'Whirlpool Galaxy' },
]


export function addPlanet({ galaxy_id, name, radius, core_temperature, atmosphere, life }) {
	return true
}

export function addSatellite({ planet_id, name, radius, distance }) {
	return true
}

export function addGalaxy({ name }) {
	return true
}

function addPlanetsSatellites(planets) {
	return planets.map((planet) => {
		planet.satellites = []
		for (const satellite of satellites) {
			if (satellite.planet_id === planet.id) {
				planet.satellites.push(satellite)
			}
		}
		return planet
	})
}

function getGalaxyNameById(galaxyId) {
	for (const galaxy of galaxies) {
		if (galaxy.id === galaxyId) {
			return galaxy.name
		}
	}
	return ''
}

function getSatellitesCount(planetId) {
	let count = 0
	satellites.forEach((satellite) => {
		if (satellite.planet_id === planetId) ++count
	})
	return count
}

function getSatellitesVolume(planetId) {
	let volume = 0
	satellites.forEach((satellite) => {
		if (satellite.planet_id === planetId) {
			volume += 3/4 * Math.PI * Math.pow(satellite.radius, 3)
		}
	})
	return volume
}

// Вывести информацию обо всех планетах, на которых присутствует жизнь, и их спутниках в заданной галактике
export function getPlanetsWithLifeByGalaxy(_galaxyId) {
	let   planetsWithLife = []
	const galaxyId        = Number(_galaxyId)
	const galaxyName      = getGalaxyNameById(galaxyId)

	for (const planet of planets) {
		if (planet.galaxy_id !== galaxyId || planet.life !== 1) continue
		planetsWithLife.push({ ...planet, galaxy_id: galaxyId, galaxy_name: galaxyName })
	}

	return addPlanetsSatellites(planetsWithLife)
}

// Вывести информацию о планетах и их спутниках, имеющих наименьший радиус и наибольшее количество спутников
export function getPlanetsWithMinRadiusAndMaxSatellitesCount() {
	const newPlanets = planets.map((planet) => {
		planet.satellites_count = getSatellitesCount(planet.id)
		return planet
	})

	const compare = (a, b) => {
		if (a.radius           < b.radius)           return -1
		if (a.radius           > b.radius)           return  1
		if (a.satellites_count < b.satellites_count) return -1
		if (a.satellites_count > b.satellites_count) return  1
		return 0
	}

	return addPlanetsSatellites(newPlanets.sort(compare))
}

// Вывести информацию о планете, галактике, в которой она находится, и ее спутниках, имеющей максимальное количество спутников, но с наименьшим общим объемом этих спутников
export function getPlanetWithMaxSatellitesAndMinSatellitesVolume() {
	const newPlanets = planets.map((planet) => {
		planet.satellites_count  = getSatellitesCount (planet.id)
		planet.satellites_volume = getSatellitesVolume(planet.id)
		return planet
	})

	const compare = (a, b) => {
		if (a.satellites_count  > b.satellites_count)  return -1
		if (a.satellites_count  < b.satellites_count)  return  1
		if (a.satellites_volume < b.satellites_volume) return -1
		if (a.satellites_volume > b.satellites_volume) return  1
		return 0
	}

	return addPlanetsSatellites(newPlanets.sort(compare))
}

// Найти галактику, сумма ядерных температур планет которой наибольшая
export function getGalaxyWithMaxSumOfCoreTemperatures() {

	function getSumOfCoreTemperatures(galaxyId) {
		let sum = 0
		planets.forEach((planet) => {
			if (planet.galaxy_id === galaxyId) sum += planet.core_temperature
		})
		return sum
	}

	const newGalaxies = galaxies.map((galaxy) => {
		galaxy.sum_of_core_temperatures = getSumOfCoreTemperatures(galaxy.id)
		return galaxy
	})

	const compare = (a, b) => {
		if (a.sum_of_core_temperatures > b.sum_of_core_temperatures) return -1
		if (a.sum_of_core_temperatures < b.sum_of_core_temperatures) return  1
		return 0
	}

	return newGalaxies.sort(compare)
}