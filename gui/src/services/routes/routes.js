const routes = {
	company : {
		value: "Izberi podjetje || Kancelarija s.p.",
		routes: {
			addCompany: {
				value: "Dodaj novo podjetje",
				path: "/company/add"
			},
			// Dynamically added list of all companies in DATABASE, eg.:
			COMPANYID1: {
				value: "Kancelarija d.o.o.",
				path: "/company/COMPANYID1"
			},
			COMPANYID2: {
				value: "Zvezdica d.o.o.",
				path: "/company/COMPANYID2"
			}
		}
	},
	action : {
		value: "Promet",
		routes: {
			generateMonthlyPay: {
				value: "Izracun place",
				path: "/action/generateMonthlyPay"
			}
		}
	},
	companySettings : {
		value: "Podjetje",
		routes: {
			employees: {
				value: "Kader",
				path: "/companySettings/employees"
			},
			taxes: {
				value: "Davki in prispevki",
				path: "/companySettings/taxes"
			},
			customDefinitions: {
				value: "Definicije",
				path: "/companySettings/customDefinitions"
			}
		}
	},
};

module.exports = routes;