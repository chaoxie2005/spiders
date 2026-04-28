const { sm4 } = require('sm-crypto'); // 正确引入SM4模块

function sm4_dec(data) {
    // 注意：ECB模式不需要IV，以下代码已移除IV相关配置
    // 密钥处理：如果是Base64编码的密钥，需要先解码
    const base64Key = "BEKaw3Qtc31LG/hTPHFPlriKuAn/nzTWl8LiRxLw4iQiSUIyuglptFxNkdCiNXcXvkqTH79Rh/A2sEFU6hjeK3k=";
    // 解码Base64密钥为UTF8字符串（确保最终密钥长度为16字节）
    const key = Buffer.from(base64Key, 'base64').toString('utf8').substring(0, 16);

    try {
        return sm4.decrypt(data, key, {
            mode: 'ecb', // 使用字符串指定模式，而非未定义的常量
            inputEncoding: 'hex', // 正确的参数名
            outputEncoding: 'utf8' // 正确的参数名
        });
    } catch (error) {
        console.error('解密失败:', error.message);
        return null;
    }
}

// 测试解密
const encryptedData = '79EA29DF93BA4831B56A66EE3BE43BB0320BEB5533410E68F76FA211821D0AB094B0C57502419BEC4CDA8E27C6C103FF1CA22FDD0B961DFE1A3C0B3F6C9B5FCA79541A4DCBD71957B4C95782EE13C89F7E119234DB3672AC16B998466FA07D4E0E3A82F1B564CEF934E0E2AE703D80B93582034E49E9BA089BA393DB54DE67C8';
console.log(sm4_dec(encryptedData));
