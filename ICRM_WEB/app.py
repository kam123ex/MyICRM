from flask import Flask
app = Flask(__name__) # Store the main app

@app.route("/") #  "@" = (Decorator) it's object, use under function 
def head():
    return "Hello"

@app.route("/test")
def test():
    return "This is test"
    
if __name__ == "__main__":
    app.run()

# import web

# urls = (
#     '/index'
# )

# app = web.application(urls, globals())

# class index:
#     def GET(self):
#         return 'index'