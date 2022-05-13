export default {
    namespaced: true,
    state() {
        return {
            apiError: false,
            selectedAccount: {},
            accountDetails: [
                    {
                    id:1, title: "acme USA.chargebee.com", subTitle: "okta-idp"
                    },
                    {
                    id:2, title: "acme IND.chargebee.com", subTitle: "chargebee-idp"
                    },
                    {
                    id:3, title: "acme AUS.chargebee.com", subTitle: "auth0-idp"
                    },
                    {
                    id:4, title: "acme-test.chargebee.com", subTitle: "chargebee-idp"
                    }
                ],
   }
    },

    mutations: {
        apiErrorAlert(state, payload) {
       
            state.apiError = payload.isError
        },

        selectedAccount(state, payload) {
            state.selectedAccount = payload.value
        }
        
    },
    actions: {
        apiErrorAlert(context, payload) {
            setTimeout(()=>{
                context.commit('apiErrorAlert', payload);
            },2000);
        },

        selectedAccount(context, payload) {
            context.commit('selectedAccount', payload)
        }

    },

    getters: {
        accountDetails(state) {
            return state.accountDetails;
        },
        apiErrors (state) {
            return state.apiError;
        },
        selectedAccount(state) {
            return state.selectedAccount;
        }
    }
}