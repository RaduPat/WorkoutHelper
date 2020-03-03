from flask import Flask
from flask import Flask, render_template, request, redirect, url_for, session, make_response

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html", flask_token="Hello   world")

if __name__ == '__main__':
    app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
    app.run()