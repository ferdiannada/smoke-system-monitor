from flask import Flask, render_template, request, url_for, redirect, flash
import sqlite3 as sql
import os

app = Flask(__name__)

@app.route('/')
def dashboard():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)