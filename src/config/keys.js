
const GITHUB_TOKENS = {
    GITHUB_CLIENT_ID: "ffafc2ee188831c7bf6c",
    GITHUB_CLIENT_SECRET: "dc72c94dfad5a18620368c9e09fcb50ae369b711",
  };
  
  const DB_USER = "sourav";
  const DB_PASSWORD = "Hi@mongodb05";
  const MONGODB = {
    MONGODB_URI: `mongodb://${DB_USER}:${DB_PASSWORD}@cluster0-fskbd.mongodb.net/test`
  };
  
  const SESSION = {
    COOKIE_KEY: "thisappisawesome"
  };
  
  const KEYS = {
    ...GITHUB_TOKENS,
    ...MONGODB,
    ...SESSION
  };
  
  module.exports = KEYS;
