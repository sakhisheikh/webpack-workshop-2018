function myLoader(source) {
  debugger;
  if (this.resource === "D:\Sakhi hdd data 30-apr-2018\portfolio\webpack-workshop-2018\src\index.js") {
    source += "; console.log('ilovewebpack')";
  }
  return source;
}

module.exports = myLoader;