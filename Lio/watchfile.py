#coding=utf-8 
import os
import os.path
import json
import sys
import time, datetime
from datetime import datetime, date, timedelta
import smtplib
from email.mime.text import MIMEText
from email.header import Header

sender = 'lioloveanna@163.com'
receiver = 'lioloveanna@163.com'
subject = '文件检测'
smtpserver = 'smtp.163.com'
username = 'lioloveanna@163.com'
password = 'xmuicnyiblqfkeki'

msg = MIMEText('<html><h1>检测的文件夹发生了变动</h1></html>','html','utf-8')
msg['Subject'] = Header(subject, 'utf-8')

msg['Subject'] = subject

smtp = smtplib.SMTP()
smtp.connect('smtp.163.com')
smtp.login(username, password)  

def check(path):
    file_list = os.listdir(path)
    return file_list

if __name__=='__main__':
    path = raw_input("input check path")
    file_len = 0
    while True:
        print check(path)
        print len(check(path))
        if file_len != len(check(path)):
            smtp.sendmail(sender, receiver, msg.as_string())
            # smtp.quit()
        file_len = len(check(path))
        time.sleep(10)
