import urllib
import urllib2
import re

page = 1
url = 'http://www.jy135.com/jiaoyu/1.html'
user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
headers = { 'User-Agent' : user_agent }
try:
    request = urllib2.Request(url,headers = headers)
    response = urllib2.urlopen(request)
    content = response.read()

    pattern = re.compile('<h1>(.*?)</h1>.*?<div class="info">(.*?)</div>.*?<div .*?</div>(.*?)<li class="page"(.*?)</li>',re.S)
    items = re.findall(pattern,content)
    for item in items:
        print item[0]

        print item[1]
        print item[2]
except urllib2.URLError, e:
    if hasattr(e,"code"):
        print e.code
    if hasattr(e,"reason"):
        print e.reason
