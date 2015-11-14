#!/usr/bin/env python3
#coding: utf-8
import smtplib
from email.mime.text import MIMEText
from email.header import Header

sender = 'lioloveanna@163.com'
receiver = 'lioloveanna@163.com'
subject = '我是刘宁'
smtpserver = 'smtp.163.com'
username = 'lioloveanna@163.com'
password = 'xmuicnyiblqfkeki'

msg = MIMEText('<html><h1>今天下午就是周五了</h1></html>','html','utf-8')
# msg = MIMEText('你好','text','utf-8')
msg['Subject'] = Header(subject, 'utf-8')

msg['Subject'] = subject

smtp = smtplib.SMTP()
smtp.connect('smtp.163.com')
smtp.login(username, password)  
smtp.sendmail(sender, receiver, msg.as_string())   
smtp.quit() 
