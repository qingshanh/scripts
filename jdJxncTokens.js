/*
京喜农场 Tokens
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
// 每个账号 token 是一个 json，示例如下
// {"farm_jstoken":"749a90f871adsfads8ffda7bf3b1576760","timestamp":"1610165423873","phoneid":"42c7e3dadfadsfdsaac-18f0e4f4a0cf"}
let JxncTokens = [
  '{"farm_jstoken":"e36885f4d991b682995752f9d3b6329c","timestamp":"1624637915753","phoneid":"748fac5bae175b29"}',//账号一的好友shareCode,不同好友中间用@符号隔开
  '{"farm_jstoken":"62ce350a23969c431c59f72c1d390398","timestamp":"1625070480390","phoneid":"4ce2b06b5cea9e48"}',//账号二的好友shareCode，不同好友中间用@符号隔开
  
]
// 判断github action里面是否有京喜农场 token 
if (process.env.JXNCTOKENS) {
  if (process.env.JXNCTOKENS.indexOf('&') > -1) {
    console.log(`您的京喜农场 token 选择的是用&隔开\n`)
    JxncTokens = process.env.JXNCTOKENS.split('&');
  } else if (process.env.JXNCTOKENS.indexOf('\n') > -1) {
    console.log(`您的京喜农场 token 选择的是用换行隔开\n`)
    JxncTokens = process.env.JXNCTOKENS.split('\n');
  } else {
    JxncTokens = process.env.JXNCTOKENS.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供 tokens，当种植 APP 种子时，将不能正常进行任务，请提供 token 或 种植非 APP 种子！`)
}
for (let i = 0; i < JxncTokens.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['JXNCTOKEN' + index] = JxncTokens[i];
}
