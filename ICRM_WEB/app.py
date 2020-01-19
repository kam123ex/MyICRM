# from flask import Flask, render_template
# app = Flask(__name__) # Store the main app

# @app.route("/") #  "@" = (Decorator) it's object, use under function 
# def index():
#     return render_template("index.html")

# @app.route("/test")
# def test():
#     return "This is test"
    
# if __name__ == "__main__":
#     app.run()

import web

urls = (
    '/index.html'
)

app = web.application(urls, globals())

class index:
    def GET(self):
        return 'index metmod'