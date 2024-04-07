#以下是我的程式碼:
from flask import Flask, request,render_template,redirect,session
import os
import sqlite3

currentlocation = os.path.dirname(os.path.abspath(__file__))

myapp = Flask(__name__)

@myapp.route("/")
def homepage():
    return render_template("index.html")

@myapp.route("/",methods = ["POST"])
def checklogin():
    UN = request.form['Username']
    PW = request.form['Password']

    sqlconnection = sqlite3.connect(currentlocation + "\login.db")
    curser = sqlconnection.cursor()
    query1 = "SELECT Username, Password FROM Users WHERE Username = {un} AND Password= {pw})".format(un=UN, pw=PW)

    rows = curser.execute(query1)
    rows = rows.fetchall()
    if len(rows) == 1:
        return render_template("LoggedIn.html")
    else:
        return redirect("/register")

@myapp.route("/register",methods = ["GET","POST"])
def registerpage():
    if request.method == "POST":
        dUN = request.form['DUsername']
        dPW = request.form['DPassword']
        Uemail = request.form['EmalUser']
        sqlconnection = sqlite3.connect(currentlocation + "\Login.db")
        curser = sqlconnection.cursor()
        query1 = "INSERT INTO Users VALUES('{u}','{p}','{e}')".format(u = dUN,d = dPW,e = Uemail)
        curser.execute(query1)
        sqlconnection.commit()
        return redirect("/Login")
    return render_template("Register.html")

if __name__ == "__main__":
    myapp.run()



# 請幫我根據圖片以及程式碼找出為什麼執行後網頁會顯示Internal Server Error
# The server encountered an internal error and was unable to complete your request. Either the server is overloaded or there is an error in the application.
# 的錯誤