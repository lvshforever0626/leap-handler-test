import jsforce from 'jsforce';

const creds = {
    url : 'https://leapeasy--leapdev21.my.salesforce.com/',
    username : 'leapeasy@accelerize360.com.leapdev21',
    password : 'Accleap21',
}

export async function createSalesForceAccount(data) {
    const name = data['Tenant'].split(',');
    let conn = new jsforce.Connection({
        loginUrl: creds.url
    });
    try {
        await conn.login(creds.username, creds.password);
        console.log('Connected to Salesforce!');
        conn.sobject("Account").create({
            FirstName : name[0],
            LastName: name[1].trim(),
            Email: email,
            Phone: phoneNumber,
            AccountId: accountId
          }, function(err, ret) {
            if (err || !ret.success) {
              return console.error(err, ret);
            }
            console.log("Updated Account record id : " + ret.id);
          });
        // await conn.logout();
    } catch (err) {
        console.error(err);
    }
}

export default {
    createSalesForceAccount
}