# -*- coding:utf-8 -*-
import urllib
import urllib2
import re
import MySQLdb

db = MySQLdb.connect(host="127.0.0.1", user="root", passwd="", db="newedu",port=3306,charset='utf8')
cursor = db.cursor()
 
page = 1
for page in range(1,1000):
    print 1
    url = 'http://www.jy135.com/jiaoyu/%d.html' % page
    user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
    headers = { 'User-Agent' : user_agent }
    try:
        request = urllib2.Request(url,headers = headers)
        response = urllib2.urlopen(request)
        content = response.read()

        pattern = re.compile('<h1>(.*?)</h1>.*?<div class="info">(.*?)</div>.*?<div .*?</div>(.*?)<li class="page"(.*?)</li>',re.S)
        items = re.findall(pattern,content)
        sql = "insert into article_list(title,read_num,content) values(%s,%s,%s);"
        for item in items:
            param = (item[0],item[1],item[2]) 
            cursor.execute(sql,param)
            print item[2]
    except urllib2.URLError, e:
        if hasattr(e,"code"):
            print e.code
        if hasattr(e,"reason"):
            print e.reason

db.commit()
cursor.close()
db.close()