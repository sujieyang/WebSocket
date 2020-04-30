from datetime import datetime
from WebSocket_chat import db
import uuid
import hashlib
random=uuid.uuid4()
db.metadata.clear()
class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)  # 编号
    name=db.Column(db.String(100),unique=True) #昵称
    face = db.Column(db.String(255))  # 头像
    country=db.Column(db.String(100)) #国家
    phone=db.Column(db.String(11),unique=True)#手机
    email = db.Column(db.String(100), unique=True)  # 邮箱
    email_hash = db.Column(db.String(100), unique=True)  # 邮箱散列值
    info = db.Column(db.Text)  # 个性简介
    home = db.relationship('Home', backref='user')  # 关系关联
    msg=db.relationship('Msg',backref='user')
    def __regr__(self):
        return "<user %r>" %self.name
    def check_id(self,id):
        from werkzeug.security import check_password_hash
        return check_password_hash(self.pwd,id)
    def generate_email_hash(self):
        if self.email is not None and self.email_hash is None:
            self.email_hash=hashlib.md5(self.email.encode('UTF8MB4')).hexdigest()
    @property
    def gravater(self):  #生成随机头像，通过邮箱散列值
        return 'https://gravatar.com/avatar/%s?d=monsterid' %self.email_hash

class Home(db.Model):
    __tablename__ = "home"
    id = db.Column(db.Integer, primary_key=True)  # 编号
    web_url=db.Column(db.String(11),unique=True) #房间url
    home_face=db.Column(db.String(100)) #房间头像
    home_name=db.Column(db.String(100),unique=True) #房间名称
    home_topic=db.Column(db.String(50)) #房间主题
    home_info=db.Column(db.Text())#房间项目描述
    admin_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    now_count = db.relationship('Now_count', backref='home')  # 关系关联
    def __regr__(self):
        return "<home %r>" %self.web_url

class Msg(db.Model):
    __tablename__ = "msg"
    id = db.Column(db.Integer, primary_key=True)  # 编号
    user_name = db.Column(db.String(100))
    user_id=db.Column(db.Integer,db.ForeignKey('user.id')) #消息发送者id
    message=db.Column(db.String(500))
    room=db.Column(db.String(11),unique=True)
    addtime = db.Column(db.DateTime, index=True, default=datetime.now())

    def __regr__(self):
        return "<msg %r>" % self.id

class Now_count(db.Model):
    __tablename__="now_count"
    id = db.Column(db.Integer, primary_key=True)  # 编号
    count=db.Column(db.Integer,unique=True) #在线人数
    home_url=db.Column(db.String(11),db.ForeignKey('home.web_url'))
    admin_id=db.Column(db.Integer,unique=True)

    def __regr__(self):
        return "<home %r>" %self.id

if __name__=="__main__":
    db.drop_all()
    db.create_all()
