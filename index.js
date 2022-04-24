import "dotenv/config";
import { NetlifyAPI } from "netlify";

import fs from "fs";
const client = new NetlifyAPI(`${process.env.NETLIFY_PERSONAL_ACCESS_TOKEN}`);

// Fetch sites
const sites = await client.listSites();
fs.writeFile("helloworld.json", JSON.stringify(sites), (err) => {
  console.log(err);
});

console.log(
  sites.map((site) => {
    return site.url;
  })
);
