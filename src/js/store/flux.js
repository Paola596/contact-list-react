const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URLBASE: 'https://assets.breatheco.de/apis/fake/contact/',
			contacts: [],
			id: ""
			
		},
		actions: {
			getContact: async () => {
				const store = getStore()
				try{
					let response = await fetch(`${store.URLBASE}agenda/paolita`)
					let data = await response.json()
		
					if(response.status == 404){
						console.log("error")
						
					}else{
						
						setStore({
							contacts: data
						})
						
					}
		
		
		
				}catch(err){
					console.log(err)
				}
		
			},
			createContact: async (data) => {
				const store = getStore()
				let exists = store.contacts.find((item) => item.email == data.email)
				console.log(exists)

				if (exists) {
					getActions().updateContact(data, exists.id)
				} else {
					try {
						let response = await fetch(`${store.URLBASE}`, {
							method: "POST",
							headers: {
								"Content-type": "application/json"
							},
							body: JSON.stringify(data)
						})

						if (response.ok){
							getActions().getContact()
							return response.status
							
						}else{
							console.log("error")
						}

						

					} catch (err) {
						console.log(err)
					}
				}
				
			},
			deleteContact: async (id) => {
				const store = getStore()
				try{
					let response = await fetch(`${store.URLBASE}${id}`, {
						method:"DELETE",
					})
					
					console.log(response)
		
					if (response.ok){
						getActions().getContact()
					}else{
						console.log("error")
					}
		
		
		
				}catch(err){
					console.log(err)
				}
		
			},
			updateContact: async (data, id) => {
				const store = getStore()
				
				try {
					let response = await fetch(`${store.URLBASE}${id}`, {
						method: "PUT",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify(data)
					})

					if (response.ok) {
						getActions().getContact()
					} else {
						console.log("error")
					}

				} catch (err) {
					console.log(err)
				}
		
			}
		}
	};
};

export default getState;