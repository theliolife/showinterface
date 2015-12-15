import urllib
import urllib2
import re
import MySQLdb

db = MySQLdb.connect(host="127.0.0.1", user="root", passwd="", db="newedu",port=3306,charset='utf8')
cursor = db.cursor()
 
page = 1
for page in range(2000,3000):
    url = 'http://www.jy135.com/jiaoyu/%d.html' % page
    user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
    headers = { 'User-Agent' : user_agent }
    try:
        request = urllib2.Request(url,headers = headers)
        response = urllib2.urlopen(request)
        content = response.read()
        sql = "insert into content values(%s);"
        param = (content) 
        cursor.execute(sql,param)
        with open ('lio.txt','ab') as f: 
            f.write(content) 
        print content
    except urllib2.URLError, e:
        if hasattr(e,"code"):
            print e.code
        if hasattr(e,"reason"):
            print e.reason

db.commit()
cursor.close()
db.close()