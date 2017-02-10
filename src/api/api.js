import axios from 'axios'

function getAxiosError(error) {
	if (error.response) {
		// The request was made, but the server responded with a status code
		// that falls out of the range of 2xx
		return error.response.data
	} else {
		// Something happened in setting up the request that triggered an Error
		return error.message
	}
}

export function getGalaxies() {
	return new Promise((resolve, reject) => {
		axios.get('api/galaxy')
		.then(
			(result) => resolve(result.data),
			(error)  => reject(getAxiosError(error))
		)
	})
}

export function getPlanets(galaxyId = null) {
	return new Promise((resolve, reject) => {
		const queryString = (galaxyId == null) ? '' : `?galaxy_id=${galaxyId}`
		axios.get(`api/planet${queryString}`)
		.then(
			(result) => resolve(result.data),
			(error)  => reject(getAxiosError(error))
		)
	})
}

export function getSatellites(planetId = null) {
	return new Promise((resolve, reject) => {
		const queryString = (planetId == null) ? '' : `?planet_id=${planetId}`
		axios.get(`api/satellite${queryString}`)
		.then(
			(result) => resolve(result.data),
			(error)  => reject(getAxiosError(error))
		)
	})
}

export function getGalaxy(galaxyId) {
	return new Promise((resolve, reject) => {
		axios.get(`api/galaxy/${galaxyId}`)
		.then(
			(result) => resolve(result.data),
			(error)  => reject(getAxiosError(error))
		)
	})
}

export function getPlanet(planetId) {
	return new Promise((resolve, reject) => {
		axios.get(`api/planet/${planetId}`)
		.then(
			(result) => resolve(result.data),
			(error)  => reject(getAxiosError(error))
		)
	})
}

export function getSatellite(satelliteId) {
	return new Promise((resolve, reject) => {
		axios.get(`api/satellite/${satelliteId}`)
		.then(
			(result) => resolve(result.data),
			(error)  => reject(getAxiosError(error))
		)
	})
}

// Вывести информацию обо всех планетах, на которых присутствует жизнь, и их спутниках в заданной галактике
export function getPlanetsWithLifeByGalaxy(_galaxyId) {
	const galaxyId = Number(_galaxyId)
	return Promise.resolve([])
}

// Вывести информацию о планетах и их спутниках, имеющих наименьший радиус и наибольшее количество спутников
export function getPlanetsWithMinRadiusAndMaxSatellitesCount() {
	return Promise.resolve([])
}

// Вывести информацию о планете, галактике, в которой она находится, и ее спутниках, имеющей максимальное количество спутников, но с наименьшим общим объемом этих спутников
export function getPlanetWithMaxSatellitesAndMinSatellitesVolume() {
	return Promise.resolve([])
}

// Найти галактику, сумма ядерных температур планет которой наибольшая
export function getGalaxyWithMaxSumOfCoreTemperatures() {
	return Promise.resolve([])
}