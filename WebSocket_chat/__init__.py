from flask import Flask
from flask import render_template
from flask_sqlalchemy import SQLAlchemy
import os
from flask_redis import  FlaskRedis
import pymysql
from flask_cors import CORS
from flask_socketio import SocketIO
import uuid
random=uuid.uuid4()
class Config():
    ECRET_KEY = random
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:Cold123#@localhost:3306/websocket_chat"
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    MAX_CONTENT_LENGTH = 40 * 1024 * 1024
    SQLALCHEMY_POOL_SIZE = 1024
    SQLALCHEMY_POOL_TIMEOUT = 90
    SQLALCHEMY_POOL_RECYCLE = 3
    SQLALCHEMY_MAX_OVERFLOW = 1024

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
async_mode = "eventlet"
socketio = SocketIO(app,async_mode=async_mode,cors_allowed_origins='*')
db = SQLAlchemy(app)

import WebSocket_chat.WebSocket_chat_api
