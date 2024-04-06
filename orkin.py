from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello, World 2!"
@app.route("/test")
def test():
    return "This is the test"

if __name__ == "__main__":
    app.run()