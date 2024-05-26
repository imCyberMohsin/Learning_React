import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    //1.  API Call Without Loader
    // const [data, setData] = useState([])
    // // Fetch data whenever a change is made using useEffect
    // useEffect(() => {
    //     fetch('https://api.github.com/users/imcybermohsin')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, [])

    // 2. API Data of Loader
    const data = useLoaderData()

    return (
        <>
            <div className="flex justify-center">
                <img className="" src={data?.avatar_url} alt="" />
                <div className="text-justify p-4 bg-gray-500 text-white text-3xl flex flex-col gap-3"><span className="underline underline-offset-4 text-orange-600">{data?.login}</span>
                    <div>Bio: {data?.bio}</div>
                    <div>Public Repos: {data?.public_repos}</div>
                    <div>Followers: {data?.followers}</div>
                    <div>Followers: {data?.following}</div>
                    <div>Location: {data?.location}</div>
                </div>
            </div>
        </>
    )
};

//2.  Loader Function for API call (Passed in the router, in main.jsx)
export const GithubLoader = async () => {
    const response = await fetch('https://api.github.com/users/imcybermohsin')
    return response.json();
}

export default Github;