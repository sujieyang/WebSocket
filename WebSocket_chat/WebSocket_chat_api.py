# home_url=room 即为房间url
from flask_socketio import emit, send, join_room, leave_room, close_room
from WebSocket_chat.models import User, Home, Msg, Now_count
from WebSocket_chat import app, socketio, db
# from flask_restful import  Api, reqparse, abort,MethodView
from flask import jsonify
import json, random,datetime,base64,os


def random_name():
    # 删减部分，比较大众化姓氏
    firstName = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻水云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳鲍史唐费岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅卞齐康伍余元卜顾孟平" \
                "黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计成戴宋茅庞熊纪舒屈项祝董粱杜阮席季麻强贾路娄危江童颜郭梅盛林刁钟徐邱骆高夏蔡田胡凌霍万柯卢莫房缪干解应宗丁宣邓郁单杭洪包诸左石崔吉" \
                "龚程邢滑裴陆荣翁荀羊甄家封芮储靳邴松井富乌焦巴弓牧隗山谷车侯伊宁仇祖武符刘景詹束龙叶幸司韶黎乔苍双闻莘劳逄姬冉宰桂牛寿通边燕冀尚农温庄晏瞿茹习鱼容向古戈终居衡步都耿满弘国文东殴沃曾关红游盖益桓公晋楚闫"
    # 百家姓全部姓氏
    # firstName = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平" \
    #             "黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董粱杜阮蓝闵席季麻强贾路娄危江童颜郭梅盛林刁钟徐邱骆高夏蔡田樊胡凌霍虞万支柯昝管卢莫经房裘缪干解应宗丁宣贲邓郁单杭洪包诸左石崔吉钮" \
    #             "龚程嵇邢滑裴陆荣翁荀羊於惠甄麴家封芮羿储靳汲邴糜松井段富巫乌焦巴弓牧隗山谷车侯宓蓬全郗班仰秋仲伊宫宁仇栾暴甘钭厉戎祖武符刘景詹束龙叶幸司韶郜黎蓟薄印宿白怀蒲邰从鄂索咸籍赖卓蔺屠蒙池乔阴欎胥能苍" \
    #             "双闻莘党翟谭贡劳逄姬申扶堵冉宰郦雍舄璩桑桂濮牛寿通边扈燕冀郏浦尚农温别庄晏柴瞿阎充慕连茹习宦艾鱼容向古易慎戈廖庾终暨居衡步都耿满弘匡国文寇广禄阙东殴殳沃利蔚越夔隆师巩厍聂晁勾敖融冷訾辛阚那简饶空" \
    #             "曾毋沙乜养鞠须丰巢关蒯相查後荆红游竺权逯盖益桓公晋楚闫法汝鄢涂钦归海帅缑亢况后有琴梁丘左丘商牟佘佴伯赏南宫墨哈谯笪年爱阳佟言福百家姓终"
    # 百家姓中双姓氏
    firstName2 = "万俟司马上官欧阳夏侯诸葛闻人东方赫连皇甫尉迟公羊澹台公冶宗政濮阳淳于单于太叔申屠公孙仲孙轩辕令狐钟离宇文长孙慕容鲜于闾丘司徒司空亓官司寇仉督子颛孙端木巫马公西漆雕乐正壤驷公良拓跋夹谷宰父谷梁段干百里东郭南门呼延羊舌微生梁丘左丘东门西门南宫南宫"
    # 女孩名字
    girl = '秀娟英华慧巧美娜静淑惠珠翠雅芝玉萍红娥玲芬芳燕彩春菊兰凤洁梅琳素云莲真环雪荣爱妹霞香月莺媛艳瑞凡佳嘉琼勤珍贞莉桂娣叶璧璐娅琦晶妍茜秋珊莎锦黛青倩婷姣婉娴瑾颖露瑶怡婵雁蓓纨仪荷丹蓉眉君琴蕊薇菁梦岚苑婕馨瑗琰韵融园艺咏卿聪澜纯毓悦昭冰爽琬茗羽希宁欣飘育滢馥筠柔竹霭凝晓欢霄枫芸菲寒伊亚宜可姬舒影荔枝思丽'
    # 男孩名字
    boy = '伟刚勇毅俊峰强军平保东文辉力明永健世广志义兴良海山仁波宁贵福生龙元全国胜学祥才发武新利清飞彬富顺信子杰涛昌成康星光天达安岩中茂进林有坚和彪博诚先敬震振壮会思群豪心邦承乐绍功松善厚庆磊民友裕河哲江超浩亮政谦亨奇固之轮翰朗伯宏言若鸣朋斌梁栋维启克伦翔旭鹏泽晨辰士以建家致树炎德行时泰盛雄琛钧冠策腾楠榕风航弘'
    # 名
    name = '中笑贝凯歌易仁器义礼智信友上都卡被好无九加电金马钰玉忠孝'

    # 10%的机遇生成双数姓氏
    if random.choice(range(100)) > 10:
        firstName_name = firstName[random.choice(range(len(firstName)))]
    else:
        i = random.choice(range(len(firstName2)))
        firstName_name = firstName2[i:i + 2]
    sex = random.choice(range(2))
    name_1 = ""
    # 生成并返回一个名字
    if sex > 0:
        girl_name = girl[random.choice(range(len(girl)))]
        if random.choice(range(2)) > 0:
            name_1 = name[random.choice(range(len(name)))]
        return firstName_name + name_1 + girl_name
    else:
        boy_name = boy[random.choice(range(len(boy)))]
        if random.choice(range(2)) > 0:
            name_1 = name[random.choice(range(len(name)))]
        return firstName_name + name_1 + boy_name


@socketio.on('init', namespace="/")
def Init():
    user_name = random_name()
    while User.query.filter_by(name=user_name).count() != 0:
        user_name = random_name()
    U = User(name=user_name,face="无",country="无")
    db.session.add(U)
    db.session.commit()
    try:
        u = User.query.filter_by(name=user_name).first()
        id = u.id
        c = datetime.datetime.now()
        C=c.strftime('%H:%M')
        emit('init',
             {'name': str(user_name), 'id': str(id), 'face': '/py3env/web_socket/WebSocket_chat/static/users/init.jpg', 'country': '无', 'phone': '无', 'email': '无', 'info': '无','time':C},
             namespace="/")
    except:
        db.session.rollback()
        emit('mistakes', {'key': 0, 'error': 'init'})



@socketio.on('new_message', namespace="/")  # 匿名聊天室发送消息
def new_message(data):
    user_id = data["user_id"]
    user_name = data["user_name"]
    message = data["message"]
    room = data["room"]  # 公共聊天室的url
    time=datetime.datetime.now()
    T=time.strftime('%H:%M:%S')
    M = Msg(user_name=user_name, user_id=user_id, message=message, room=str(room),addtime=T)
    db.session.add(M)
    db.session.commit()
    try:
        num=Msg.query.filter_by(message=message,user_id=user_id).count()
        if num==1:
            addtime = Msg.query.filter_by(message=message,user_id=user_id).first()
            if room=="1":
                emit('widespread',{'user_id': user_id, 'user_name': user_name, 'message': message, 'addtime': addtime.addtime},broadcast=True, namespace="/",room="default")
            else:
                emit('widespread',{'user_id': user_id, 'user_name': user_name, 'message': message, 'addtime': addtime.addtime},broadcast=True, namespace="/", room=room)
        else:
            addtime=Msg.query.filter_by(message=message,user_id=user_id).all()
            print(addtime[0].addtime)
            print(addtime[-1].addtime)
            print(addtime)
            if room == "1":
                emit('widespread', {'user_id':user_id,'user_name':user_name,'message':message,'addtime':addtime[-1].addtime}, broadcast=True, namespace="/",room="default")
            else:
                emit('widespread',{'user_id': user_id, 'user_name': user_name, 'message': message, 'addtime': addtime[-1].addtime},broadcast=True, namespace="/", room=room)
    except:
        db.session.rollback()
        emit('mistakes', {'key': 0, 'error': 'new_message'}, namespace="/")



@socketio.on('create', namespace="/")  # 创建房间
def new_create(data):
    home_face = data["home_face"]
    home_name = data["home_name"]
    home_topic = data["home_topic"]
    home_info = data["home_info"]
    admin_id = data["admin_id"]
    url = data["url"]
    tag=data["tag"]
    time = datetime.datetime.now()
    T = time.strftime('%H:%M:%S')
    Face = "/py3env/web_socket/WebSocket_chat/static/homes/" + str(url) + "." + tag
    H = Home(web_url=url, home_face=Face, home_name=home_name, home_topic=home_topic, home_info=home_info,
             admin_id=admin_id)
    N = Now_count(count=1, home_url=url, admin_id=admin_id)
    M=Msg(user_name="Matthew Wiggins",user_id=1,message="欢迎来到本房间~~~",room=str(url),addtime=str(T))
    db.session.add(M)
    db.session.commit()
    db.session.add(H)
    db.session.commit()
    db.session.add(N)
    db.session.commit()
    try:
        f = open("/py3env/web_socket/WebSocket_chat/static/homes/"+str(url)+"."+tag,'wb')
        if tag == "jpg":
            F = base64.b64decode(home_face[23:])
        else:
            F = base64.b64decode(home_face[22:])
        f.write(F)
        f.close()
        emit('create', {'key': 1, 'name': str(home_name),'face':Face})
        join_room(url, namespace="/")
    except:
        db.session.rollback()
        emit('mistakes', {'key': 0, 'error': 'create'})


@socketio.on('join_default',namespace="/")
def join(data):
    user_id=data["user_id"]
    N = Now_count.query.filter_by(home_url="1").first()
    N.count=N.count+1
    db.session.commit()
    try:
        join_room("default", namespace="/")
        emit('join_default', {'key': 1,'roomid':str(1)},  room="default")
    except:
        db.session.rollback()
        emit('mistakes', {'key': 0, 'error': 'join_default'})


@socketio.on('join', namespace="/")  # 加入房间
def connect(join):
    room = join["room"]
    user_name = join["user_name"]
    N = Now_count.query.filter_by(home_url=str(room)).first()
    print(N)
    N.count = N.count + 1
    db.session.commit()
    try:
        join_room(room, namespace="/")
        emit('join', {'key': 1, 'name': str(user_name),'roomid':room},  room=room)
    except:
        db.session.rollback()
        emit('mistakes', {'key': 0, 'error': 'join'},room=room)


@socketio.on('leave', namespace="/")
def disconnect(leave):
    room = leave["room"]
    user_id = leave["user_id"]
    user_name = leave["user_name"]
    try:

        N = Now_count.query.filter_by(home_url=room).first()
        N.count = N.count - 1
        count=N.count
        db.session.commit()
        if room=="1":
            emit('leave', {'key': 1, 'name': str(user_name)},room="default")
            socketio.emit('Num',{'num':count},room="default")
            leave_room("default", namespace="/")
        else:
            emit('leave', {'key': 1, 'name': str(user_name)}, room=room)
            socketio.emit('Num', {'num': count}, room=room)
            leave_room(room, namespace="/")
    except:
        db.session.rollback()
        emit('mistakes', {'key': 0, 'error': 'leave'})



@socketio.on('updateRoom', namespace="/")  # 更新人数
def Sendcount(url):
    home_url = url["home_url"]
    admin_id = url["admin_id"]  # 房主
    try:
        U = User.query.filter_by(id=int(admin_id)).first()
        N = Now_count.query.filter_by(home_url=str(home_url)).first()
        count = N.count
        admin = U.name
        H = Home.query.filter_by(admin_id=int(admin_id)).first()
        home_face = H.home_face
        home_name = H.home_name
        home_topic = H.home_topic
        home_description = H.home_info
        if home_url=="1":
            emit('updateRoom', {'num': str(count), 'room': str(home_url), 'admin': str(admin), 'home_name': home_name,'home_face': home_face, 'home_topic': home_topic,'home_description':home_description},room="default",broadcast=True)
        else:
            emit('updateRoom', {'num': str(count), 'room': str(home_url), 'admin': str(admin), 'home_name': home_name,'home_face': home_face, 'home_topic': home_topic,'home_description':home_description},room=home_url,broadcast=True)
    except:
        emit('mistakes', {'key': 0, 'error': 'updateRoom'}, namespace="/")


@socketio.on('updateChatRecord', namespace="/") #更新聊天记录
def updateChat(data):
    url = data["url"]
    admin = data["admin"]
    dist = {}
    M = Msg.query.filter_by(room=url).order_by(Msg.addtime.asc()).all()
    i = 0
    while (i < len(M)):
        id = M[i].user_id
        name = M[i].user_name
        time = M[i].addtime
        info = M[i].message
        U = User.query.filter_by(id=id).first()
        face = U.face
        id=U.id
        dist[i] = {'face': face,'time': time,'name': name,'info': info,'id':id}
        i = i + 1
    try:
        if url=="1":
            emit('updateChatRecord', {'data':dist},room="default",broadcast=True, namespace="/")
        else:
            emit('updateChatRecord', {'data': dist},room=url,broadcast=True, namespace="/")
        print(dist)
    except:
        emit('mistakes', {'key': 0, 'error': 'updateChatRecord'}, namespace="/")

@socketio.on('updateUser',namespace="/")
def updateuser(data):
    face=data['face']
    name=data['name']
    phone=data['phone']
    email=data['email']
    tag=data['tag']
    id=data['id']
    try:
        u=User.query.filter_by(id=id).first()
        Face="/py3env/web_socket/WebSocket_chat/static/users/"+str(id)+"."+tag
        print(1)
        u.name=name
        db.session.commit()
        u.face=Face
        db.session.commit()
        u.phone=phone
        db.session.commit()
        u.email=email
        db.session.commit()
        print(1)
        M=Msg.query.filter_by(user_id=int(id)).all()
        i = 0
        while (i < len(M)):
            M[0].user_name=name
            db.session.commit()
            i=i+1
        print(1)
        f=open("/py3env/web_socket/WebSocket_chat/static/users/"+str(id)+"."+tag,'wb')
        if tag=="jpg":
            F = base64.b64decode(face[23:])
        else:
            F = base64.b64decode(face[22:])
        f.write(F)
        f.close()
        c = datetime.datetime.now()
        C = c.strftime('%H:%M')
        emit('updateUser',{'key':1,'name': str(name), 'id': str(id), 'face':str(Face), 'country': '无', 'phone':phone, 'email': email,'info': '无', 'time': C},namespace="/")
    except:
        db.session.rollback()
        emit('mistakes',{'key':0,'error':'updateUser'},namespace="/")

@socketio.on('DeleteRoom',namespace="/")
def Del(data):
    room=data['room']
    N = Now_count.query.filter_by(home_url=room).first()
    db.session.delete(N)
    db.session.commit()
    home = Home.query.filter_by(admin_id=int(room)).first()
    db.session.delete(home)
    db.session.commit()
    M=Msg.query.filter_by(room=room).all()
    i = 0
    while (i < len(M)):
        db.session.delete(M[i])
        db.session.commit()
        i=i+1

    try:
        emit('DeleteRoom',{'key':1,'DeleteRoom':'success'},room=room,broadcast=True,namespace="/")
        leave_room(room=room, namespace="/")
    except:
        db.session.rollback()
        emit('mistakes',{'key':0,'error':'DeleteRoom'},room=room,namespace="/")

socketio.on('changeHome',namespace="/")
def change(data):
    home_face = data["home_face"]
    home_name = data["home_name"]
    home_topic = data["home_topic"]
    home_info = data["home_info"]
    admin_id = data["admin_id"]
    url = data["url"]
    tag = data["tag"]
    try:
        Face = "/py3env/web_socket/WebSocket_chat/static/homes/" + str(url) + "." + tag
        H = Home.query.filter_by(admin_id=int(admin_id)).first()
        H.home_face = Face
        db.session.commit()
        H.home_name = home_name
        db.session.commit()
        H.home_topic = home_topic
        db.session.commit()
        H.home_info = home_info
        db.session.commit()
        f = open("/py3env/web_socket/WebSocket_chat/static/homes/" + str(admin_id) + "." + tag, 'wb')
        if tag == "jpg":
            F = base64.b64decode(home_face[23:])
        else:
            F = base64.b64decode(home_face[22:])
        f.write(F)
        f.close()
        emit('changeHome',{'key':1},namespace="/",room=url)
    except:
        db.session.rollback()
        emit('mistakes', {'key': 0,'error':'changeHome'}, namespace="/", room=url)

flag = []


@socketio.on('text', namespace="/a")
def text(data):
    print(data)
    flag.append('hello')
    emit('text', {'response': 'hello world!'}, namespace="/a")


