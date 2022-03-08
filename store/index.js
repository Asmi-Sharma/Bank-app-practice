export const state = () => ({
    email:''
})

export const mutations = {
    STORE_EMAIL(state, email) {
        state.email = email; 
    }
}