
from apscheduler.schedulers.blocking import BlockingScheduler
import os
import urllib
import urllib.request
import time

sched = BlockingScheduler(timezone="Asia/Taipei")

import datetime

# sched.add_job(update, 'cron',  hour=16, minute='*/20', day_of_week='mon-fri')
# sched.add_job(update, 'cron',  hour='5-8', minute='*/20', day_of_week='mon-sat')
# sched.add_job(my_job, 'cron',  hour=13, minute='*/2', day_of_week='mon-fri')


# @sched.scheduled_job('cron', day_of_week='mon-sun', minute='*/20')
@sched.scheduled_job('cron', day_of_week='mon-sun',hour='5-23,1-2', minute='*/30')
def scheduled_job():
    # url = "https://confsinvest.herokuapp.com/"
    print('自動呼叫系統啟動')
    url = "https://confsreview.herokuapp.com"
    print(url)  
    conn = urllib.request.urlopen(url)
    for key, value in conn.getheaders():
        print('!!!!!!!連結參數!!!!!!!')
        print(key, value)
    print('自動更新系統結束')
sched.start()

# heroku ps -a confsinvest
# heroku logs -n 150000