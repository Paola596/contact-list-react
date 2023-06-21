const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			url: "https://assets.breatheco.de/apis/fake/contact"
			},

		actions: {
			handleFetch: async () => {
				const store = getStore()

				const response = await fetch ('${store.url}/contacts')
				const data = await response.json()

				setStore ({
					contacts: data.results
				})
			}
		}
	};
};

export default getState;
