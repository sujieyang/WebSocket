from WebSocket_chat import app, socketio,db
from WebSocket_chat.models import User,Home,Now_count,Msg
import datetime,json,base64,os
from flask import jsonify
if __name__ == '__main__':
     socketio.run(app, log_output=True)
"""
    u=User.query.filter_by(name=name).first()
    u.face=F
    u.name=name
    u.phone=phone
    u.email=email
    db.session.commit()
    

    M = Msg.query.filter_by(room="default").order_by(Msg.addtime.asc()).all()
    i = 0
    dist={}
    while (i < len(M)):
        id = M[i].user_id
        name = M[i].user_name
        time = M[i].addtime
        info = M[i].message
        U = User.query.filter_by(id=id).first()
        face = U.face
        dist[i] = {'face': face, 'time': time, 'name': name, 'info': info}
        i = i + 1
    print(dist)

    N = Now_count.query.filter_by(home_url="default").first()
    N.count=N.count+1
    db.session.commit()
    print(N.count)
    c = datetime.datetime.now()
    print(str(c.hour)+":"+str(c.minute))

M = Msg.query.filter_by(room="1").order_by(Msg.addtime.desc()).all()
    i = 0
    dist = []
    while (i < len(M)):
        print(str(M[i].message) + " " + str(M[i].id))
        dist.append(str(M[i].message) + " " + str(M[i].id))
        i = i + 1
    print(json.dumps(dist))"""
"""    m1=Msg(user_name='Matthew Wiggins',user_id=1,message="112",room="default")
    db.session.add(m1)
    db.session.commit()
    m2= Msg(user_name='Matthew Wiggins', user_id=1, message="113", room="default")
    db.session.add(m2)
    db.session.commit()
    M = Msg.query.filter_by(room="default").order_by(Msg.addtime.desc()).all()
    i=0
    while(i<len(M)):
        print(str(M[i].message)+" "+str(M[i].id))
        i=i+1
    print(M)
    
    u = User(name='Matthew Wiggins')
    db.session.add(u)
    db.session.commit()
    hh = Home(web_url="1", admin_id=1)
    db.session.add(hh)
    db.session.commit()
    U = User.query.filter_by(id=1).count()
    print(U)
    C = Now_count(count=0, home_url="1", admin_id=1)
    db.session.add(C)
    db.session.commit()
    
    
    M = Msg.query.filter_by(room="1").order_by(Msg.addtime.asc()).all()
    i = 0
    dist = {}
    while (i < len(M)):
        id = M[i].user_id
        name = M[i].user_name
        time = M[i].addtime
        info = M[i].message
        U = User.query.filter_by(id=id).first()
        face = U.face
        print(time)
        print(face)
        dist[i] = {'face': face, 'time': time, 'name': name, 'info': info}
        i = i + 1
    print(dist)
    
    u = User(name='Matthew Wiggins')
    db.session.add(u)
    db.session.commit()
    hh = Home(web_url="1", admin_id=1, home_name="默认聊天室",home_topic="初始房间",home_info="测试测试测试")
    db.session.add(hh)
    db.session.commit()
    U = User.query.filter_by(id=1).count()
    print(U)
    C = Now_count(count=0, home_url="1", admin_id=1)
    db.session.add(C)
    db.session.commit()
    
    file=open('1.jpg','rb')
    Face=file.read()
    face=base64.b64encode(Face)
    print(face)
    print("分界线 ")
    print(Face)
    F=base64.b64decode(face)
    file.close()
    f=open('2.jpg','wb')
    f.write(F)
    file.close()
    """



