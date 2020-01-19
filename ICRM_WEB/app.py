from flask import Flask
app = Flask(__name__) # Store the main app

@app.route("/") #  "@" = (Decorator) it's object, use under function 
def home():
    return "Hello FL"

@app.route("/test")
def test():
    return "This is test"
    

if __name__ == "__main__":
    app.run()