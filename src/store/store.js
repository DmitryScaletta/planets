const initialState = {
	common: {
		fetching: false,
		error:    '',
	},
	galaxies:   [],
	galaxy:     {
		galaxy:  {},
		planets: []
	},
	planets:    [],
	planet:     {},
	satellites: [],
	satellite:  {},
}

export default initialState