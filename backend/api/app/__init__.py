# -*- coding: UTF-8 -*-
import os
import sys
import time
import json
import random
import pandas as pd
import numpy as np

from func import *
from Attribute_analysis import *
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/predict', methods=['GET', 'POST'])
def postInput():
    insertValues = request.get_json()
    # print(type(insertValues))
    print(insertValues)

    recommended_songs = system_two(insertValues)
    # print(type(recommended_songs))
    # print(recommended_songs['uri'])
    return jsonify({"return": recommended_songs['uri'].tolist()})


'''@app.route('/correct_example', methods=['POST'])
def post_correct_example():
    # 在这里执行您的处理逻辑，然后返回相应的数据
    correct_example = {"correct_example": [correct[random.randint(0, len(correct) - 1)].strip(),
                                           correct[random.randint(0, len(correct) - 1)].strip()]}
    return jsonify(correct_example)'''
