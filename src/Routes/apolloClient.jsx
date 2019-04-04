import ApolloClient from "apollo-boost";

const client = new ApolloClient({
   //      uri: "http://localhost:4000/",
         uri: "https://fathomless-lake-33512.herokuapp.com/",
        fetchOptions:{
                credentials:'include'
        },
        request: opertation=>{
                const token=localStorage.getItem('token');
                opertation.setContext({
                        headers:{
                                authorization:token
                        }
                })
        },
        onError:({networkError})=>{
                if(networkError){
                        console.log('Network Error',networkError);
                }
        }
});

export default client;

