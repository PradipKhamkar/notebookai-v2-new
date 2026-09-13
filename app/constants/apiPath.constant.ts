const GOOGLE_APIS = {
        TOKEN: 'https://oauth2.googleapis.com/token',
        USERINFO: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token={{access_token}}'
};


const REVENUECAT_APIS = {
        GET_PURCHASE: 'https://api.revenuecat.com/v2/projects/{project_id}/purchases/{purchase_id}'
}
export default { GOOGLE_APIS, REVENUECAT_APIS }