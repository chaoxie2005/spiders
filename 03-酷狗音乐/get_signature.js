const Crypto = require('crypto')

function get_signature(e) {
    return Crypto.createHash('md5').update(e).digest('hex')
}

console.log(get_signature('NVPh5oo715z5DIWAeQlhMDsWXXQV4hwtappid=1014bitrate=0callback=callback123clienttime=1748753829703clientver=1000dfid=4XRnEl3tHXFK0K5Efv1SiJjKfilter=10inputtype=0iscorrection=1isfuzzy=0keyword=周深mid=c6a0cfe918829301c28957cff195e0f6page=1pagesize=30platform=WebFilterprivilege_filter=0srcappid=2919token=5e651f1f176919fea797dcd0618bc684b4345c35eea96c28826e0803c4614891userid=2339924156uuid=c6a0cfe918829301c28957cff195e0f6NVPh5oo715z5DIWAeQlhMDsWXXQV4hwt'));
