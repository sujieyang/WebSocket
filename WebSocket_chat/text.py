from WebSocket_chat import app, socketio,db
from WebSocket_chat.models import User,Home,Now_count,Msg
import datetime
#增加默认房间
u = User(name='Matthew Wiggins')
db.session.add(u)
db.session.commit()
hh = Home(web_url="1", admin_id=1, home_name="默认聊天室", home_topic="初始房间", home_info="测试测试测试")
db.session.add(hh)
db.session.commit()
U = User.query.filter_by(id=1).count()
print(U)
C = Now_count(count=0, home_url="1", admin_id=1)
db.session.add(C)
db.session.commit()
#u = User(name='测试')
#db.session.add(u)
#db.session.commit()
"""
time = datetime.datetime.now()
T = time.strftime('%H:%M:%S')
m=Msg(user_name='测试',user_id=2,message="傻逼苏泽森4",room="1",addtime=T)
db.session.add(m)
db.session.commit()

N=Msg.query.filter_by(user_id=2).count()
M=Msg.query.filter_by(user_id=2).all()
i = 0
while (i < len(M)):
    M[i].user_name="1"
    db.session.commit()
    i=i+1"""