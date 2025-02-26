const express = require("express");

const app = express();
require('dotenv').config()
//first new comment
const port = 3000;
const github = {
    "login": "codewithlokesh",
    "id": 99516544,
    "node_id": "U_kgDOBe6AgA",
    "avatar_url": "https://avatars.githubusercontent.com/u/99516544?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/codewithlokesh",
    "html_url": "https://github.com/codewithlokesh",
    "followers_url": "https://api.github.com/users/codewithlokesh/followers",
    "following_url": "https://api.github.com/users/codewithlokesh/following{/other_user}",
    "gists_url": "https://api.github.com/users/codewithlokesh/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/codewithlokesh/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/codewithlokesh/subscriptions",
    "organizations_url": "https://api.github.com/users/codewithlokesh/orgs",
    "repos_url": "https://api.github.com/users/codewithlokesh/repos",
    "events_url": "https://api.github.com/users/codewithlokesh/events{/privacy}",
    "received_events_url": "https://api.github.com/users/codewithlokesh/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 0,
    "following": 2,
    "created_at": "2022-02-12T00:19:45Z",
    "updated_at": "2025-02-01T18:47:12Z"
  }

app.get('/', (req, res)=>{
    res.send("hello users")
})

app.get('/login', (req, res)=>{
    res.send("<h2>login page</h2>")
})

app.get('/about', (req, res)=>{
    res.send("<h2>about page</h2>")
})

app.get('/github', (req, res)=>{
    res.json(github)
})
app.listen(process.env.PORT, ()=>{
    console.log(`This port is listening on port ${port}`)
})

