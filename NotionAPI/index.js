const dotenv = require("dotenv").config();

const { Client } = require('@notionhq/client');

// Params that the client can accept
const clientParams = {
    auth: process.env.NOTION_ACCESS_TOKEN
}
// Initiate notion client
const notion = new Client(clientParams);

// Listing all the databases linked to the integrations
// const listDB = async () => {
//     const result = await notion.databases.list();
//     console.log("DBs are: ", result);
// }

// listDB();


// Querying the database "React Events"
const getEvents = async () => {

    const database_id =  process.env.NOTION_DATABASE_ID;

    const payload = {
        path: `databases/${database_id}/query`,
        method: "POST"
    }

    // const { results } = await notion.databases.query({database_id: database_id});
    const { results } = await notion.request(payload);

    console.log("Results: ", results)
}
getEvents();
