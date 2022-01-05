const { init, setComments } = require('../src/youtube-studio-api');

const SID = '';
const HSID = '';
const SSID = '';
const APISID = '';
const SAPISID = '';
const LOGIN_INFO = '';
const SESSION_TOKEN = '';
let COMMENT_ALLOW;
let COMMENT_MODE;
COMMENT = false;
const VIDEO_ID = '';

if (COMMENT) {
    COMMENT_ALLOW = 'false';
    COMMENT_MODE = 'UNKNOWN_COMMENT_ALLOWED_MODE';    
} else {
    COMMENT_ALLOW = 'true';
    COMMENT_MODE = 'ALL_COMMENTS';
}

(async () => {

    await init({ 
        SID,
        HSID,
        SSID,
        APISID,
        SAPISID,
        LOGIN_INFO,
        SESSION_TOKEN
    });

    console.log('Setting COMMENT_ALLOW to ' + COMMENT_ALLOW);
    console.log('Setting COMMENT_MODE to ' + COMMENT_MODE);
    
    const result = await setComments({
        encryptedVideoId: VIDEO_ID,
        commentOptions: {
            newAllowComments: COMMENT_ALLOW,
            newAllowCommentsMode: COMMENT_MODE,
            newCanViewRatings: true,
            newDefaultSortOrder: "MDE_COMMENT_SORT_ORDER_TOP"
        },
    });
    console.log(result);
})();