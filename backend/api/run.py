# -*- coding: UTF-8 -*-
from app import app
from flask import Flask, render_template
import re

app.static_folder = 'static'


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.config['JSON_AS_ASCII'] = False
    print(app.config)
    app.run(host='localhost', port=3001, debug=False)  # 需要去HTML檔案更改PORT口