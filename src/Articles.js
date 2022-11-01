import './App.css';
import React, { useEffect, startTransition, useTransition } from "react";
import { useQuery } from "react-query";
async function fetchData() {
    const response = await new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve();
        }, 1000)});
    return response;
}

function Articles({time}) {
    const {data, isSuccess} = useQuery("anyKey", fetchData);
    return (<>
        <h1>Articles</h1>
        Data resolved
    </>)
}

export default Articles;
