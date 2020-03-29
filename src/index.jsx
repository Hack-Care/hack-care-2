import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { setContext } from 'apollo-link-context';
import { HttpLink } from "apollo-link-http";
import {ApolloProvider} from "@apollo/react-hooks";
import {BrowserRouter} from "react-router-dom";
import Cookies from 'js-cookie';
import {TopicSearch} from "./components/topicSearch/TopicSearch";

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: "http://localhost:3001/graphql"
});
const authLink = setContext((_, { headers }) => {
    const token = Cookies.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    }
});
const client = new ApolloClient({
    cache,
    link: authLink.concat(link),
});

ReactDOM.render(
    <BrowserRouter>
        {/*<ApolloProvider client={client}>*/}
        {/*  <App />*/}
        {/*</ApolloProvider>*/}
        <TopicSearch/>
    </BrowserRouter>,
  document.getElementById("root")
);

/**
 * Be aware that the website will only update to the latest version on the 2nd page visit if it as already cached
 * Learn more about service workers in React: https://create-react-app.dev/docs/making-a-progressive-web-app
 */
registerServiceWorker();
