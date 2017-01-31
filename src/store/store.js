const initialState = {
	common: {
		fetching: false,
		error:    '',
	},
	galaxies:   [],
	planets:    [],
	satellites: [],
	galaxy: {
		galaxy:  {},
		planets: []
	},
	planet: {
		planet:     {},
		satellites: [],
	},
	satellite:   {},
	customQuery: [],
}

export default initialState