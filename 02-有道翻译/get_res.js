const Crypto = require('crypto')
const t = "ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl"
const a = "ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4"

function T(e) {
  return Crypto.createHash("md5").update(e).digest()
}

function get_res(e) {
  if (!e)
    return null;
  const o = Buffer.alloc(16, T(t))
    , n = Buffer.alloc(16, T(a))
    , r = Crypto.createDecipheriv("aes-128-cbc", o, n);
  let s = r.update(e, "base64", "utf-8");
  return s += r.final("utf-8"),
    s
}

// console.log(get_res(e, "ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl", "ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4"));
