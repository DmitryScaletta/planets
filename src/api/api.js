import axios from 'axios'

export function getGalaxies() {
}

export function getPlanets(galaxyId = null) {
}

export function getSatellites(planetId = null) {
}

export function getGalaxy(galaxyId) {
}

export function getPlanet(planetId) {
}

export function getSatellite(satelliteId) {
}

// Вывести информацию обо всех планетах, на которых присутствует жизнь, и их спутниках в заданной галактике
export function getPlanetsWithLifeByGalaxy(_galaxyId) {
	const galaxyId = Number(_galaxyId)
}

// Вывести информацию о планетах и их спутниках, имеющих наименьший радиус и наибольшее количество спутников
export function getPlanetsWithMinRadiusAndMaxSatellitesCount() {
}

// Вывести информацию о планете, галактике, в которой она находится, и ее спутниках, имеющей максимальное количество спутников, но с наименьшим общим объемом этих спутников
export function getPlanetWithMaxSatellitesAndMinSatellitesVolume() {
}

// Найти галактику, сумма ядерных температур планет которой наибольшая
export function getGalaxyWithMaxSumOfCoreTemperatures() {
}