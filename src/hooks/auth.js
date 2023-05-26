import { getCluster } from "@/db/elasticHelpers";

async function findUser(credential) {
  if (!credential) {
    return null;
  }
  try {
    let search_term = "email";
    if (!credential.includes("@")) {
      search_term = "username";
    }

    const request = await getCluster("eu-cluster").search({
      index: "users",
      body: {
        query: {
          term: {
            [search_term]: credential,
          },
        },
      },
    });
    if (request.body.hits.hits.length) {
      return {
        ...request.body.hits.hits[0]["_source"],
        id: request.body.hits.hits[0]["_id"],
        search_term,
      };
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
async function getUserById(id) {
  try {
    const request = await getCluster("eu-cluster").get({
      index: "users",
      id,
    });
    if (request.body) {
      let name = "";
      const defaultUser = { ...request.body["_source"] };
      if (defaultUser.created_on) delete defaultUser.created_on;
      if (defaultUser.password) delete defaultUser.password;
      if (defaultUser.firstName) {
        name = name + defaultUser.firstName;
      }
      if (defaultUser.lastName) {
        name = name + " " + defaultUser.lastName;
      }
      return { ...defaultUser, name };
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
async function updateLastSigninTime(id) {
  try {
    await getCluster("eu-cluster").update({
      index: "users",
      id,
      body: {
        doc: {
          last_active: new Date().getTime(),
        },
      },
    });
    return true;
  } catch (error) {
    console.log(error.message);
  }
}

export { findUser, getUserById, updateLastSigninTime };
