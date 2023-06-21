const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [
				fullName= "",
				email="",
				phoneNumber="",
				address="",
			],

			url: "https://assets.breatheco.de/apis/fake"
			},

		actions: {
			handleFetch: async () => {
				const store = getStore()

				const response = await fetch ('${store.url}/contact')
				const data = await response.json()

				setStore ({
					contact: data.results
				})
			}
		}
	};
};

export default getState;
