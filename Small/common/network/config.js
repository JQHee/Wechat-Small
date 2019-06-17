
const host = "http://192.168.0.102:8110"

const config = {

  // 下面的地址配合云端 Server 工作
  host,

  //api url 
  apiUrl: `${host}/wx`,

  // 登录地址，用于建立会话
  loginUrl: `${host}/wx_login`,

  // 用code换取openId
  openIdUrl: `${host}/openid`,

  //项目id 
  aid: 1
};

module.exports = config