from WebSocket_chat import app,socketio
from werkzeug.contrib.fixers import ProxyFix
import eventlet

if __name__ == '__main__':
    # app.wsgi_app = ProxyFix(app.wsgi_app)
    #socketio.sleep(10)
    socketio.run(app, host='127.0.0.1', port=8000, debug=True)
    app.run(host='127.0.0.1', port=8000, debug=True)
